# Neues Section Element anlegen

## In Directus

- Einstellungen > Data Model
- Neues Data Model anlegen:

  - Felder aus bestehendem Model übernehmen:
  - Id, status, sort, user_created etc. werden automatisch erstellt, gerne ankreuzen
  - Außerdem nötig:
    - label -> internes Label
    - overrideLayout -> '100' | '75' | '50' | '25'
    - groupElement -> Toggle true oder false
  - Zusätzlich natürlich alle Felder, die man für die Komponente braucht :)

- Im Data Model der Sections Component angeben, dass das neue Section Element dort eingebunden werden kann
- In den Permissions (Public) sicherstellen, dass für alle neu erstellten Elemente der Lesezugriff gegeben ist
- Entsprechenden Content erstellen

## Im Code

- React-Komponente anlegen
- Noch zu definierende Magic passiert in getPageProps.ts (utils)
- Die Komponente In der Sections-Komponente einbinden:
  - Typing: Ganz oben "export type SectionsX = SectionElementBase &"
  - Dann in der Komponente selbst ins Switch-Statement einbinden (analog zu den anderen)
