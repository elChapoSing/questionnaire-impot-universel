# Porto Rico (PR)

**Taux effectif retenu : 28,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème actuel de Porto Rico : 0 % jusqu'à 9 000 USD, 7 %, 14 %, 25 % puis 33 % au-delà de 61 500. Hypothèse change : 1 EUR = 1,15 USD, soit environ 276 300 USD. Réforme en discussion (taux de 33 % limité aux revenus supérieurs à 150 000), non votée : taux possiblement plus bas.

## Sources

- [Deloitte - Puerto Rico tax highlights 2026](https://www.deloitte.com/content/dam/assets-shared/docs/services/tax/2026/dttl-tax-puertoricohighlights-2026.pdf) (non officielle)
- [San Juan Daily Star - réforme fiscale phase 2](https://www.sanjuandailystar.com/post/governor-submits-2nd-phase-of-tax-reform-to-legislature) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
