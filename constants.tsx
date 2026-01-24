
import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    client: 'Greenbootcamps',
    industry: 'Bildungsträger',
    summary: 'Audit-nahe Prozessdigitalisierung und Automatisierung der Tool-Landschaft.',
    before: 'Manuelle, fehleranfällige Prozesse bei der Dokumentation für Auditierungen (AZAV-Prüfung). Status Quo: Geringe Prozessdigitalisierung mit Insellösungen.',
    after: 'Entwicklung einer automatisierten Daten-Infrastruktur auf SharePoint-Basis. Nahtlose Integration von HubSpot (Sales & Marketing) zur Eliminierung von Datenverlusten beim Lead-Handover.',
    results: ['100% AZAV-Konformität', '53% Bessere Erreichbarkeit', 'Eliminierung manueller Eingaben'],
    image: 'avatar-green'
  },
  {
    id: '2',
    client: 'VIP District',
    industry: 'SaaS international',
    summary: 'Plattform für Mitarbeiterbindung und Unternehmenskultur.',
    before: 'Limitierende CRM-Struktur bremste die Skalierung der internationalen Sales-Aktivitäten. Keine global nutzbare, einheitliche Datenstruktur für Engagement-Metriken.',
    after: 'Strategische Architektur eines automatisierten Sales-Workflows in Close CRM. Wir helfen dabei, ein Arbeitsumfeld zu schaffen, in dem sich alle gesehen und gehört fühlen.',
    results: ['400% Steigerung der Calls/Tag', 'Maximale Mitarbeiterbindung', 'Global strukturierte Pipeline'],
    image: 'avatar-vip'
  },
  {
    id: '3',
    client: 'Teletech GmbH',
    industry: 'B2B IT-Systemhaus',
    summary: 'Ablösung von Legacy-Systemen für SIP Trunk & Datentechnik.',
    before: 'Starre Legacy-Systeme (SAP/Cobra) verhinderten agile Vertriebsprozesse für SIP Trunk und Telefonanlagen. Hoher manueller Aufwand ohne systemgestützte Logik.',
    after: 'Transformation in ein agiles CRM-Ökosystem. Implementierung einer automatisierten Logik für Datentechnik-Vertrieb und LinkedIn-Strategie.',
    results: ['30% Effizienzsteigerung', 'Automatisierte SIP-Logik', 'Autonomes Follow-up'],
    image: 'avatar-teletech'
  },
  {
    id: '4',
    client: 'Kosecom',
    industry: 'Marketing / Webdesign',
    summary: 'Aufbau eines autonomen "Self-Running" Sales-Systems.',
    before: 'Absolut manuelle Vertriebsprozesse via Excel/Handy für Marketing-Services. Limitierte Kapazität von ca. 60 Calls pro Tag. Kein systematisches Follow-up.',
    after: 'Migration zu Close CRM + Make/Zapier Automatisierung. Entwicklung von autonomen Sequenzen für Webdesign-Leads und automatisierte CRM-Workflows.',
    results: ['483% Steigerung der Calls/Tag', '350+ Calls pro Tag', '100% Lead-Nachverfolgung'],
    image: 'avatar-kosecom'
  },
  {
    id: '5',
    client: 'Lönelista',
    industry: 'SaaS für Gehaltsabrechnungen',
    summary: 'Vollautomatisierte Lead-Gen Pipeline ab Launch.',
    before: 'Manuelle Dokumentenverteilung bei Gehaltszahlungen. Fehlende Verschlüsselung und hoher Zeitaufwand pro Mitarbeiter im Browser.',
    after: 'Spezialisierte Anwendung auf Basis von NoReplika-Core. Hochverschlüsselte Drag & Drop Dokumentenverteilung für Lohnempfänger unter absoluter Vertraulichkeit.',
    results: ['Drag & Drop Effizienz', 'KI-Validierte Prozesse', 'Absolute Vertraulichkeit'],
    image: 'avatar-loene'
  },
  {
    id: '6',
    client: 'Becker IT-Beratung',
    industry: 'IT-Beratung & Hardware',
    summary: 'Sicherung des operativen Betriebs durch Monitoring.',
    before: 'Wegfall des Vertriebsteams. Keine Überwachung von Hardware (Drucker, Router, Switche) im Netzwerk. Mangelndes Life-Cycle Management.',
    after: 'Technischer CRM-Neustart zur Kompensation von Personalressourcen. Aufbau von Monitoring-Lösungen für das gesamte Netzwerk-Equipment.',
    results: ['Netzwerk-Überwachung 24/7', 'Effizientes Life-Cycle Management', 'Operative Sicherheit'],
    image: 'avatar-becker'
  }
];

export const SERVICES: Service[] = [];
