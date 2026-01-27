#!/bin/bash

# Einfaches Build-Skript für prohosting24 Upload
echo "🚀 Baue Website für Upload..."

# 1. Dependencies installieren
echo "📦 Installiere Dependencies..."
npm install

# 2. Build erstellen
echo "🔨 Erstelle Production Build..."
npm run build

# 3. .htaccess ins dist Verzeichnis kopieren
echo "📋 Kopiere .htaccess..."
cp .htaccess dist/

echo ""
echo "✅ Fertig!"
echo ""
echo "📁 Der 'dist' Ordner ist jetzt bereit für den Upload."
echo "📤 Lade ALLE Dateien aus dem 'dist' Ordner zu prohosting24.de hoch."
echo ""
echo "Detaillierte Anleitung: HOCHLADEN.md"
