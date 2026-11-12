# Botswana (BW)

**Taux effectif retenu : 24,3 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : BWP. Cours utilisé : 1 EUR = 15,389 BWP (Yahoo Finance EURBWP=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 15,389 = 3 697 977 BWP.
- Base imposable : 3 697 977 BWP.

| De (BWP) | À (BWP) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 48 000 | 0,00 % | 48 000 | 0 |
| 48 000 | 84 000 | 5,00 % | 36 000 | 1 800 |
| 84 000 | 120 000 | 12,50 % | 36 000 | 4 500 |
| 120 000 | 156 000 | 18,75 % | 36 000 | 6 750 |
| 156 000 | et plus | 25,00 % | 3 541 977 | 885 494 |

- **Impôt total : 898 544 BWP, soit 24,3 % du salaire brut.**
- Hypothèse : Barème résident à 5 tranches ; relèvements de seuils du budget 2026 non vérifiés.

## Note

Barème résident à 5 tranches, taux maximal 25 % au-delà de 156 000 BWP. Les relèvements de seuils du budget 2026 n'ont pas été vérifiés ; effet négligeable à ce niveau de revenu.

## Sources

- [PwC Tax Summaries - Botswana](https://taxsummaries.pwc.com/Botswana/Individual/Taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
