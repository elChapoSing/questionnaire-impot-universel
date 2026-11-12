# Nouvelle-Zélande (NZ)

**Taux effectif retenu : 34,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : NZD. Cours utilisé : 1 EUR = 1,9942 NZD (Yahoo Finance EURNZD=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 1,9942 = 479 198 NZD.
- Base imposable : 479 198 NZD.

| De (NZD) | À (NZD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 15 600 | 10,50 % | 15 600 | 1 638 |
| 15 600 | 53 500 | 17,50 % | 37 900 | 6 632 |
| 53 500 | 78 100 | 30,00 % | 24 600 | 7 380 |
| 78 100 | 180 000 | 33,00 % | 101 900 | 33 627 |
| 180 000 | et plus | 39,00 % | 299 198 | 116 687 |

- **Impôt total : 165 965 NZD, soit 34,6 % du salaire brut.**
- Hypothèse : Barème des résidents 2025-26 de l'Inland Revenue : 10,5 %, 17,5 %, 30 %, 33 % puis 39 % au-delà de 180 000 NZD.
- Hypothèse : Pas de cotisation ACC ni de crédit d'impôt ; impôt sur le revenu seul.

## Note

Cours Yahoo EURNZD=X du 13/11/2026 : 1 EUR = 1.994165 NZD (hypothèse initiale : 1.95). Taux recalculé : 34,7 % (avant : 34,6 %). Les chiffres de change et de taux cités plus bas datent de l'hypothèse initiale. Taux de 39 % au-delà de 180 000 NZD.

## Sources

- [Inland Revenue de Nouvelle-Zélande](https://www.ird.govt.nz/income-tax/income-tax-for-individuals/tax-codes-and-tax-rates-for-individuals/tax-rates-for-individuals) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
