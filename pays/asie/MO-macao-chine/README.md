# Macao (Chine) (MO)

**Taux effectif retenu : 11,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Concerné·e (condition remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : MOP. Cours utilisé : 1 EUR = 8,9617 MOP (Yahoo Finance EURMOP=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 8,9617 = 2 153 497 MOP.
- Base imposable : 2 153 497 MOP.

| De (MOP) | À (MOP) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 144 000 | 0,00 % | 144 000 | 0 |
| 144 000 | 164 000 | 7,00 % | 20 000 | 1 400 |
| 164 000 | 184 000 | 8,00 % | 20 000 | 1 600 |
| 184 000 | 224 000 | 9,00 % | 40 000 | 3 600 |
| 224 000 | 304 000 | 10,00 % | 80 000 | 8 000 |
| 304 000 | 424 000 | 11,00 % | 120 000 | 13 200 |
| 424 000 | et plus | 12,00 % | 1 729 497 | 207 540 |

- **Impôt total : 235 340 MOP, soit 10,9 % du salaire brut.**
- Hypothèse : Impôt professionnel 2026 (PwC), plafonné à 12 %.
- Hypothèse : Déduction forfaitaire de 25 % sur le revenu salarial non appliquée ; elle ramènerait le taux autour de 8 %.

## Note

Impôt professionnel 2026 : 0 % jusqu'à 144 000 MOP, puis 7 % à 12 % (12 % au-delà de 424 000 MOP). La déduction forfaitaire de 25 % sur le revenu salarial, si appliquée, ramènerait le taux autour de 8 %.

## Sources

- [PwC Tax Summaries - Macao](https://taxsummaries.pwc.com/macau-sar/individual/taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
