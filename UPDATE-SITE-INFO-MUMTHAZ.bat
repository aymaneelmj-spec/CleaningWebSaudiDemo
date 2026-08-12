@echo off
setlocal
title Mumthaz Laundry - Update Website Info
cd /d "%~dp0"

echo ============================================
echo   MUMTHAZ LAUNDRY - UPDATE SITE INFO
echo ============================================
echo.
echo Business: Mumthaz Laundry service
echo Website:  mumthazlaundry.com
echo Phone:    +966 53 863 5826
echo Address:  Ayjad, Al Haram, Makkah, Saudi Arabia
echo Hours:    Open 24 hours
echo.
echo Opening site.config.json for editing...
echo The values above are the new business details from Google Maps.
echo.
echo Edit/save the file if you need any additional changes,
echo then CLOSE Notepad to continue.
echo.
pause

notepad "site.config.json"

echo.
echo Applying your changes to the website...
echo.

where node >nul 2>nul
if errorlevel 1 (
    echo [FAILED] Node.js was not found on this computer.
    echo Install it from https://nodejs.org then run this file again.
    echo.
    pause
    exit /b 1
)

node "scripts\apply-site-config.js"
if errorlevel 1 (
    echo.
    echo Something went wrong. Fix the issue above, then run this file again.
    echo.
    pause
    exit /b 1
)

echo.
echo ============================================
echo   MUMTHAZ LAUNDRY UPDATE COMPLETE
echo ============================================
echo.
echo Re-run this file anytime you want to change the site info.
echo.
pause
