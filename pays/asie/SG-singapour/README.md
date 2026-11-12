# Singapour (SG)

**Taux effectif retenu : 14,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement en dessous du seuil (condition remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : SGD. Cours supposé : 1 EUR = 1,48 SGD (aucun cours dans la note ; valeur raisonnable retenue, à remplacer par le cours Yahoo EURSGD=X ; avec 1,50, le taux est de 14,8 %).
- Salaire converti : 240 300 € × 1,48 = 355 644 SGD.
- Base imposable : 355 644 SGD.

| De (SGD) | À (SGD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 20 000 | 0,00 % | 20 000 | 0 |
| 20 000 | 30 000 | 2,00 % | 10 000 | 200 |
| 30 000 | 40 000 | 3,50 % | 10 000 | 350 |
| 40 000 | 80 000 | 7,00 % | 40 000 | 2 800 |
| 80 000 | 120 000 | 11,50 % | 40 000 | 4 600 |
| 120 000 | 160 000 | 15,00 % | 40 000 | 6 000 |
| 160 000 | 200 000 | 18,00 % | 40 000 | 7 200 |
| 200 000 | 240 000 | 19,00 % | 40 000 | 7 600 |
| 240 000 | 280 000 | 19,50 % | 40 000 | 7 800 |
| 280 000 | 320 000 | 20,00 % | 40 000 | 8 000 |
| 320 000 | 500 000 | 22,00 % | 35 644 | 7 842 |
| 500 000 | 1 000 000 | 23,00 % | 0 | 0 |
| 1 000 000 | et plus | 24,00 % | 0 | 0 |

- **Impôt total : 52 392 SGD, soit 14,7 % du salaire brut.**
- Hypothèse : Barème des résidents depuis l'année d'imposition 2024, jusqu'à 24 % au-delà de 1 million.
- Hypothèse : Allègements (relief) exclus.

## Note

Barème progressif jusqu'à 24 %. Aucun impôt sur les plus-values.

## Sources

- [IRAS, taux des résidents](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/individual-income-tax-rates) (officielle)
- [IRAS, exemples de calcul](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/new-to-tax/individual-income-tax-rates/sample-income-tax-calculations) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
