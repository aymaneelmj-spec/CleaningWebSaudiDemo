#!/usr/bin/env node
/**
 * Reads site.config.json (project root) and writes the values into lib/site.ts,
 * between the ##SITE_CONFIG_START##/##SITE_CONFIG_END## markers.
 *
 * Usage:  node scripts/apply-site-config.js
 * (or just double-click UPDATE-SITE-INFO.bat in the project root)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CONFIG_PATH = path.join(ROOT, 'site.config.json');
const SITE_TS_PATH = path.join(ROOT, 'lib', 'site.ts');

const START_MARKER = '// ##SITE_CONFIG_START##';
const END_MARKER = '// ##SITE_CONFIG_END##';

function fail(message) {
  console.error('\n[FAILED] ' + message + '\n');
  process.exit(1);
}

// ---- 1. Load config ----------------------------------------------------
if (!fs.existsSync(CONFIG_PATH)) {
  fail(`Could not find site.config.json at ${CONFIG_PATH}`);
}

let raw = fs.readFileSync(CONFIG_PATH, 'utf8');
let config;
try {
  config = JSON.parse(raw);
} catch (err) {
  fail(
    'site.config.json has invalid JSON and could not be read.\n' +
      'Common causes: a missing comma, a trailing comma, or a stray quote.\n' +
      'Error detail: ' + err.message
  );
}

const required = [
  'name', 'shortName', 'tagline', 'city', 'country', 'address',
  'phone', 'phoneDisplay', 'whatsapp', 'email', 'hours', 'founded',
  'footerTagline', 'loadingTagline',
  'domain', 'seoTitle', 'seoDescription', 'seoKeywords',
];
for (const key of required) {
  if (!(key in config)) fail(`site.config.json is missing the "${key}" field.`);
}

// ---- 2. Parse the Google Maps iframe ------------------------------------
// Accepts a full <iframe ...></iframe> snippet pasted from Google Maps'
// "Share > Embed a map" dialog, and pulls out the src URL + coordinates.
function parseMapsIframe(snippet) {
  if (!snippet || typeof snippet !== 'string') {
    fail('site.config.json is missing "mapsEmbedIframe" (paste the Google Maps embed <iframe> code).');
  }

  const srcMatch = snippet.match(/src=["']([^"']+)["']/);
  if (!srcMatch) {
    fail('Could not find a src="..." URL inside "mapsEmbedIframe". Make sure you pasted the full <iframe> tag from Google Maps.');
  }
  const mapsEmbed = srcMatch[1].replace(/&amp;/g, '&');

  const lngMatch = mapsEmbed.match(/!2d(-?[0-9.]+)/);
  const latMatch = mapsEmbed.match(/!3d(-?[0-9.]+)/);
  const placeMatch = mapsEmbed.match(/!1s(0x[0-9a-fA-F]+%3A0x[0-9a-fA-F]+)/);

  if (!lngMatch || !latMatch) {
    fail('Could not read coordinates from the Google Maps embed link. Re-copy the embed code from Google Maps "Share > Embed a map".');
  }

  return {
    mapsEmbed,
    mapsLat: parseFloat(latMatch[1]),
    mapsLng: parseFloat(lngMatch[1]),
    mapsPlaceId: placeMatch ? decodeURIComponent(placeMatch[1]) : '',
  };
}

const mapsData = parseMapsIframe(config.mapsEmbedIframe);

// ---- 3. Build the replacement TypeScript block --------------------------
function biling(field, name) {
  if (!field || typeof field.ar !== 'string' || typeof field.en !== 'string') {
    fail(`"${name}" must have both "ar" and "en" text values in site.config.json.`);
  }
  return `{ ar: ${JSON.stringify(field.ar)}, en: ${JSON.stringify(field.en)} }`;
}

if (typeof config.domain !== 'string' || !/^https?:\/\//.test(config.domain)) {
  fail('"domain" in site.config.json must be a full URL starting with https:// (e.g. "https://example.com"), with no trailing slash.');
}
if (!Array.isArray(config.seoKeywords)) {
  fail('"seoKeywords" in site.config.json must be a list, e.g. ["keyword one", "keyword two"].');
}

const block = `${START_MARKER} — do not edit this block by hand, use site.config.json + UPDATE-SITE-INFO.bat instead
export const site = {
  name: ${biling(config.name, 'name')},
  shortName: ${biling(config.shortName, 'shortName')},
  tagline: ${biling(config.tagline, 'tagline')},
  city: ${biling(config.city, 'city')},
  country: ${biling(config.country, 'country')},
  address: ${biling(config.address, 'address')},
  phone: ${JSON.stringify(config.phone)},
  phoneDisplay: ${JSON.stringify(config.phoneDisplay)},
  whatsapp: ${JSON.stringify(config.whatsapp)},
  email: ${JSON.stringify(config.email)},
  hours: ${biling(config.hours, 'hours')},
  founded: ${JSON.stringify(config.founded)},
  mapsEmbed: ${JSON.stringify(mapsData.mapsEmbed)},
  mapsLat: ${JSON.stringify(mapsData.mapsLat)},
  mapsLng: ${JSON.stringify(mapsData.mapsLng)},
  mapsPlaceId: ${JSON.stringify(mapsData.mapsPlaceId)},
  footerTagline: ${biling(config.footerTagline, 'footerTagline')},
  loadingTagline: ${biling(config.loadingTagline, 'loadingTagline')},
  domain: ${JSON.stringify(config.domain)},
  seoTitle: ${biling(config.seoTitle, 'seoTitle')},
  seoDescription: ${biling(config.seoDescription, 'seoDescription')},
  seoKeywords: ${JSON.stringify(config.seoKeywords)},
} as const;
${END_MARKER}`;

// ---- 4. Splice it into lib/site.ts --------------------------------------
if (!fs.existsSync(SITE_TS_PATH)) {
  fail(`Could not find lib/site.ts at ${SITE_TS_PATH}`);
}

const siteTs = fs.readFileSync(SITE_TS_PATH, 'utf8');
const startIdx = siteTs.indexOf(START_MARKER);
const endIdx = siteTs.indexOf(END_MARKER);

if (startIdx === -1 || endIdx === -1) {
  fail(
    'Could not find the ##SITE_CONFIG_START##/##SITE_CONFIG_END## markers in lib/site.ts.\n' +
      'They may have been accidentally edited or removed. Restore lib/site.ts from git and try again.'
  );
}

const before = siteTs.slice(0, startIdx);
const after = siteTs.slice(endIdx + END_MARKER.length);
const updated = before + block + after;

fs.writeFileSync(SITE_TS_PATH, updated, 'utf8');

console.log('\n[OK] Website info updated successfully from site.config.json');
console.log(`     Name: ${config.name.en} / ${config.name.ar}`);
console.log(`     Address: ${config.address.en}`);
console.log(`     Phone: ${config.phoneDisplay}`);
console.log(`     Maps: lat ${mapsData.mapsLat}, lng ${mapsData.mapsLng}`);
console.log('\nIf your dev server (npm run dev) is already running, changes appear automatically.');
console.log('Otherwise run "npm run dev" to preview, or "npm run build" before deploying.\n');
