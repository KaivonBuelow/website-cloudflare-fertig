# 🚀 Website hochladen - Ganz einfach!

## Schritt 1: Website bauen (im Terminal)

Öffne das Terminal in diesem Ordner und führe aus:

```bash
npm install
npm run build
```

Nach dem Build hast du einen `dist` Ordner mit allen fertigen Dateien.

## Schritt 2: .htaccess vorbereiten

Führe aus:
```bash
cp .htaccess dist/
```

## Schritt 3: Bei prohosting24.de hochladen

### Was du hochladen musst:
**Nur den Inhalt vom `dist` Ordner!**

### Wie:
1. Gehe zu https://prohosting24.de und logge dich ein
2. Öffne dein FTP/Control Panel
3. Gehe zu deinem Webverzeichnis (meist `public_html` oder `httpdocs`)
4. **Lösche alles was dort ist** (falls vorhanden)
5. **Lade alle Dateien und Ordner aus dem `dist` Ordner hoch**

Das wars! 🎉

### Was hochgeladen werden muss:
```
public_html/
├── index.html          ← Die Hauptdatei
├── .htaccess          ← Wichtig für URL-Routing
├── index.css          ← Styles
└── assets/            ← Ordner mit allen JS/CSS Dateien
    ├── index-xxx.js
    └── index-xxx.css
```

## ⚠️ Wichtig:

1. **Lade wirklich ALLE Dateien hoch**, auch versteckte wie `.htaccess`
2. Die Ordnerstruktur muss erhalten bleiben
3. Warte nach dem Upload 1-2 Minuten, dann öffne deine Domain

## 🆘 Probleme?

### Seite lädt nicht?
- Lösche den Browser-Cache (Strg+Shift+R oder Cmd+Shift+R)
- Warte 5 Minuten und versuche es nochmal

### Navigation funktioniert nicht?
- Überprüfe ob `.htaccess` hochgeladen wurde
- Stelle sicher, dass sie im Hauptverzeichnis liegt (nicht in einem Unterordner)

### Immer noch Probleme?
- Schaue in die Browser-Konsole (F12) nach Fehlern
- Kontaktiere prohosting24.de Support

---

**Das wars! Mehr musst du nicht machen.** 👍
