# Gibraltar (GI)

**Taux effectif retenu : 25,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Gibraltar propose deux systèmes et applique le plus favorable. Pour un revenu élevé, le barème sur revenu brut donne un taux effectif d'environ 25 %, plafond indiqué par PwC (change supposé : 0,87 £ pour 1 €, taux quasi insensible au change). Sans abattements ni déductions.

## Sources

- [PwC Tax Summaries, Gibraltar, impôt sur le revenu](https://taxsummaries.pwc.com/gibraltar/individual/taxes-on-personal-income) (non officielle)
- [Gibraltar Income Tax Office, changements de barème 2024/25](https://www.gibraltar.gov.gi/uploads/Income%20Tax%20Office/Employers/Tax%20tables%2024-25/Information%20leaflet%20on%20personal%20tax%20rate%20changes.pdf) (officielle)
- [EY, Gibraltar Tax Facts 2025-26](https://www.ey.com/content/dam/ey-unified-site/ey-com/en-gi/tax-alerts/documents/ey-gibraltar-tax-facts-2025-2026.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
