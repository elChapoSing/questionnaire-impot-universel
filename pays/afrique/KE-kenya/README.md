# Kenya (KE)

**Taux effectif retenu : 33,6 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : KES. Cours utilisé : 1 EUR = 144,2 KES (Yahoo Finance EURKES=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 144,2 = 34 651 260 KES.
- Base imposable : 34 651 260 KES.

| De (KES) | À (KES) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 288 000 | 10,00 % | 288 000 | 28 800 |
| 288 000 | 388 000 | 25,00 % | 100 000 | 25 000 |
| 388 000 | 6 000 000 | 30,00 % | 5 612 000 | 1 683 600 |
| 6 000 000 | 9 600 000 | 32,50 % | 3 600 000 | 1 170 000 |
| 9 600 000 | et plus | 35,00 % | 25 051 260 | 8 767 941 |

- **Impôt total : 11 675 341 KES, soit 33,7 % du salaire brut.**
- Hypothèse : Barème annuel résident ; allègement personnel de 2 400 KES par mois ignoré.
- Hypothèse : Cotisations (NSSF, logement, santé) ignorées.

## Note

Barème résident, taux maximal 35 % au-delà de 9,6 M KES ; allègement personnel de 2 400 KES/mois ignoré.

## Sources

- [PwC Tax Summaries - Kenya](https://taxsummaries.pwc.com/kenya/individual/taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
