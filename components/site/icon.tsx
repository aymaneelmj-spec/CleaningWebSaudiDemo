'use client';

import {
  Sofa, Layers, Blinds, BedDouble, Armchair, Building2, Home, DoorOpen,
  Sparkles, Waves, ShieldCheck, BadgeCheck, Leaf, Zap, Wallet, Clock,
  HeartHandshake, CalendarCheck, Search, Droplets, Wind, CheckCircle2,
  Star, Quote, MapPin, Phone, Mail, MessageCircle, ChevronRight, ChevronLeft,
  Menu, X, Sun, Moon, Languages, Cookie, MoveHorizontal, ArrowRight, ArrowLeft,
  Send, Filter, Grid2x2, Award, Users, Briefcase, Headphones, ThumbsUp,
  Shield, SprayCan, Sparkle, Truck, PhoneCall, Clock3, CheckCircle, Plus, Minus,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Sofa, Layers, Blinds, BedDouble, Armchair, Building2, Home, DoorOpen,
  Sparkles, Waves, ShieldCheck, BadgeCheck, Leaf, Zap, Wallet, Clock,
  HeartHandshake, CalendarCheck, Search, Droplets, Wind, CheckCircle2,
  Star, Quote, MapPin, Phone, Mail, MessageCircle, ChevronRight, ChevronLeft,
  Menu, X, Sun, Moon, Languages, Cookie, MoveHorizontal, ArrowRight, ArrowLeft,
  Send, Filter, Grid2x2, Award, Users, Briefcase, Headphones, ThumbsUp,
  Shield, SprayCan, Sparkle, Truck, PhoneCall, Clock3, CheckCircle, Plus, Minus,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = iconMap[name] || Sparkles;
  return <Cmp className={className} />;
}
