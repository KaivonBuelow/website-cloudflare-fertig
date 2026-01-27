@echo off
REM Einfaches Build-Skript für prohosting24 Upload (Windows)

echo 🚀 Baue Website für Upload...
echo.

REM 1. Dependencies installieren
echo 📦 Installiere Dependencies...
call npm install

REM 2. Build erstellen
echo 🔨 Erstelle Production Build...
call npm run build

REM 3. .htaccess ins dist Verzeichnis kopieren
echo 📋 Kopiere .htaccess...
copy .htaccess dist\

echo.
echo ✅ Fertig!
echo.
echo 📁 Der 'dist' Ordner ist jetzt bereit für den Upload.
echo 📤 Lade ALLE Dateien aus dem 'dist' Ordner zu prohosting24.de hoch.
echo.
echo Detaillierte Anleitung: HOCHLADEN.md
echo.
pause
