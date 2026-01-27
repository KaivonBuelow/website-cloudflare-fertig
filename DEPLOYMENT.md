# Deployment-Anleitung für VBC Website

## Vorbereitung

### 1. Dependencies installieren
Führe im Projektverzeichnis aus:
```bash
npm install
```

### 2. Website für Production bauen
```bash
npm run build
```

Dies erstellt einen `dist/` Ordner mit allen optimierten Dateien.

## Deployment zu prohosting24.de

### Schritt 1: Dateien vorbereiten

Nach dem Build-Prozess findest du im `dist/` Ordner alle benötigten Dateien:
- `index.html`
- `assets/` (Ordner mit CSS, JS, und anderen Assets)
- weitere Dateien

### Schritt 2: .htaccess hinzufügen

Kopiere die `.htaccess` Datei aus dem Projekt-Root in den `dist/` Ordner:
```bash
cp .htaccess dist/
```

Die .htaccess-Datei ist wichtig für:
- URL-Routing (damit React Router funktioniert)
- Gzip-Kompression
- Browser-Caching
- Sicherheitsheader

### Schritt 3: Upload zu prohosting24.de

1. **Melde dich bei prohosting24.de an**
   - Gehe zu deinem Control Panel

2. **FTP/SFTP Upload**
   - Öffne dein FTP-Programm (z.B. FileZilla)
   - Verbinde dich mit deinen FTP-Zugangsdaten von prohosting24.de
   - Navigiere zum Webroot-Verzeichnis (meist `public_html/` oder `httpdocs/`)

3. **Dateien hochladen**
   - Lade **alle Dateien und Ordner** aus dem `dist/` Verzeichnis hoch
   - Stelle sicher, dass auch die `.htaccess` Datei hochgeladen wird
   - Die Struktur sollte sein:
     ```
     public_html/
     ├── index.html
     ├── .htaccess
     └── assets/
         ├── index-[hash].js
         ├── index-[hash].css
         └── ...
     ```

### Schritt 4: Domain konfigurieren

1. Stelle sicher, dass deine Domain auf den richtigen Ordner zeigt
2. Warte bis die DNS-Änderungen propagiert sind (kann bis zu 24h dauern)
3. Teste deine Website unter deiner Domain

## Wichtige Hinweise

### Tailwind CSS
Die Website nutzt Tailwind CSS über CDN. Das ist für kleine Websites in Ordnung, aber beachte:
- Alle Tailwind-Klassen werden geladen (größere Datei)
- Für bessere Performance kannst du später Tailwind lokal installieren

### Umgebungsvariablen
Falls du API-Keys verwendest (z.B. für GEMINI_API_KEY):
- Erstelle eine `.env` Datei im Projekt-Root
- Format: `GEMINI_API_KEY=dein-api-key-hier`
- Diese Datei wird beim Build automatisch eingebunden
- **WICHTIG**: Committe niemals .env-Dateien ins Git Repository!

### Browser-Kompatibilität
Die Website sollte funktionieren in:
- Chrome/Edge (neueste Versionen)
- Firefox (neueste Versionen)
- Safari (neueste Versionen)
- Mobile Browser

## Troubleshooting

### Problem: Seite lädt nicht
- Überprüfe, ob alle Dateien korrekt hochgeladen wurden
- Überprüfe, ob .htaccess vorhanden ist
- Schaue in die Browser-Konsole nach Fehlern

### Problem: 404-Fehler bei Navigation
- Stelle sicher, dass .htaccess korrekt konfiguriert ist
- Überprüfe, ob mod_rewrite auf dem Server aktiviert ist
- Kontaktiere ggf. den Support von prohosting24.de

### Problem: Langsame Ladezeiten
- Überprüfe, ob Gzip-Kompression aktiv ist
- Überprüfe Browser-Caching in den Developer Tools
- Optimiere Bilder falls vorhanden

## Lokale Entwicklung

### Development Server starten
```bash
npm run dev
```

Die Website ist dann verfügbar unter: `http://localhost:3000`

### Preview des Production Builds
```bash
npm run build
npm run preview
```

## Support

Bei Fragen zum Hosting kontaktiere den Support von prohosting24.de:
- Dokumentation: https://prohosting24.de/hilfe
- Support-Kontakt über das Control Panel

## Updates durchführen

Wenn du Änderungen an der Website vornimmst:

1. Bearbeite die Dateien lokal
2. Teste mit `npm run dev`
3. Build neu erstellen: `npm run build`
4. Lade die neuen Dateien aus `dist/` hoch (überschreibe die alten)
5. Leere ggf. den Browser-Cache für deine Domain
