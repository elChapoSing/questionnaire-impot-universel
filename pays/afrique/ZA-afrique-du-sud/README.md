# Afrique du Sud (ZA)

**Taux effectif retenu : 40,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : ZAR. Cours supposé : 1 EUR = 20 ZAR (hypothèse reprise de la note, à remplacer par le cours Yahoo EUREURZAR=X).
- Salaire converti : 240 300 € × 20 = 4 806 000 ZAR.
- Base imposable : 4 806 000 ZAR.

| De (ZAR) | À (ZAR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 245 100 | 18,00 % | 245 100 | 44 118 |
| 245 100 | 383 100 | 26,00 % | 138 000 | 35 880 |
| 383 100 | 530 200 | 31,00 % | 147 100 | 45 601 |
| 530 200 | 695 800 | 36,00 % | 165 600 | 59 616 |
| 695 800 | 887 000 | 39,00 % | 191 200 | 74 568 |
| 887 000 | 1 878 600 | 41,00 % | 991 600 | 406 556 |
| 1 878 600 | et plus | 45,00 % | 2 927 400 | 1 317 330 |

- Crédit : Abattement (rebate) principal : − 17 820 ZAR.
- **Impôt total : 1 965 849 ZAR, soit 40,9 % du salaire brut.**
- Hypothèse : Barème 2026/27 : 666 339 rands d'impôt au seuil de 1 878 600, puis 45 %.

## Note

Barème 2026/27 : 666 339 rands + 45 % de la part de revenu imposable au-dessus de 1 878 600 rands, moins l'abattement principal de 17 820 rands. À 240 300 € (change supposé : 20 rands pour 1 €), le taux effectif est d'environ 40,9 %. Aucun change plausible ne le ramène sous 40 %.

## Sources

- [Trésor national d'Afrique du Sud, guide fiscal du budget 2026 (SARS)](https://www.treasury.gov.za/documents/national%20budget/2026/sars/Budget%202026%20Tax%20guide.pdf) (officielle)
- [SARS, guide des tables de retenue à la source](https://www.sars.gov.za/guide-for-employers-in-respect-of-tax-deduction-tables/) (officielle)
- [Accounter, tables SARS 2026/27](https://accounter.co.za/tax-tables) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
