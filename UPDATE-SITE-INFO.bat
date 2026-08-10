@echo off
setlocal
title Update Website Info
cd /d "%~dp0"

echo ============================================
echo   UPDATE SITE INFO
echo ============================================
echo.
echo Opening site.config.json for editing...
echo (Name, address, phone, WhatsApp, hours, Google Maps embed, footer text, etc.)
echo.
echo Edit the values, then SAVE and CLOSE Notepad to continue.
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
echo All done! Re-run this file anytime you want to change the site info.
echo.
pause
