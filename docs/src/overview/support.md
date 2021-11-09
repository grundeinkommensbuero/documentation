# Infos für den Support

## Allgemeine Tipps:

- :: eingeben für automatische Antworten
- Unter der Nachricht ist ein kleiner Antworten Button, darauf öffnet sich ein Mail-Feld
- Aktualisieren klicken zum Senden (kein Senden Button)
- Textfeld ohne vorher antworten zu klicken ist interner Kommentar

## Bei Code-Fehler:

- In prod-users über Email-Index nach Person suchen
- falls nicht bestätigt: confirmed auf true setzen und einen timestamp mit aktuellem Datum hinzufügen
- falls bestätigt: an Lucia schreiben, dass die Person Bestandsuser:in ist und sich Vali dann drum kümmert
- “Klappt nicht”: Was genau klappt nicht?
- “Code unaufgefordert”: Im Zweifel lieber löschen (Email in dynamo suchen und löschen & in Cognito (https://eu-central-1.console.aws.amazon.com/cognito/users/?region=eu-central-1#/pool/eu-central-1_xx4VmPPdF/details?_k=hsqpz7) in den prod-user-pool gehen und dort löschen (erst disablen, dann löschen)

## Aus dem Newsletter austragen:

- In prod-users über Email-Index nach Person suchen
- newsletterConsent auf false
- reminderMails auf false
- customNewsletters auf false
