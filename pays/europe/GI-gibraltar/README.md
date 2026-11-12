# Gibraltar (GI)

**Taux effectif retenu : 25,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : GBP. Cours utilisé : 1 EUR = 0,8359 GBP (Yahoo Finance EURGBP=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 0,8359 = 200 862 GBP.
- Base imposable : 200 862 GBP.

| De (GBP) | À (GBP) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 17 000 | 16,00 % | 17 000 | 2 720 |
| 17 000 | 25 000 | 19,00 % | 8 000 | 1 520 |
| 25 000 | 40 000 | 25,00 % | 15 000 | 3 750 |
| 40 000 | 105 000 | 28,00 % | 65 000 | 18 200 |
| 105 000 | et plus | 25,00 % | 95 862 | 23 965 |

- **Impôt total : 50 155 GBP, soit 25,0 % du salaire brut.**
- Hypothèse : Système sur revenu brut 2025/26 (PwC), table des revenus supérieurs à 25 000 £ : 16 % sur 17 000 £, 19 % sur 8 000, 25 % sur 15 000, 28 % sur 65 000, 25 % sur le solde. Le système à abattements donnerait un impôt plus élevé à ce revenu.
- Hypothèse : Sans abattements ni déductions.

## Note

Gibraltar propose deux systèmes et applique le plus favorable. Pour un revenu élevé, le barème sur revenu brut donne un taux effectif d'environ 25 %, plafond indiqué par PwC. Sans abattements ni déductions.

## Sources

- [PwC Tax Summaries, Gibraltar, impôt sur le revenu](https://taxsummaries.pwc.com/gibraltar/individual/taxes-on-personal-income) (non officielle)
- [Gibraltar Income Tax Office, changements de barème 2024/25](https://www.gibraltar.gov.gi/uploads/Income%20Tax%20Office/Employers/Tax%20tables%2024-25/Information%20leaflet%20on%20personal%20tax%20rate%20changes.pdf) (officielle)
- [EY, Gibraltar Tax Facts 2025-26](https://www.ey.com/content/dam/ey-unified-site/ey-com/en-gi/tax-alerts/documents/ey-gibraltar-tax-facts-2025-2026.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
