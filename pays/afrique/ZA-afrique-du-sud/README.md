# Afrique du Sud (ZA)

**Taux effectif retenu : 40,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème 2026/27 : 666 339 rands + 45 % de la part de revenu imposable au-dessus de 1 878 600 rands, moins l'abattement principal de 17 820 rands. À 240 300 € (change supposé : 20 rands pour 1 €), le taux effectif est d'environ 40,9 %. Aucun change plausible ne le ramène sous 40 %.

## Sources

- [Trésor national d'Afrique du Sud, guide fiscal du budget 2026 (SARS)](https://www.treasury.gov.za/documents/national%20budget/2026/sars/Budget%202026%20Tax%20guide.pdf) (officielle)
- [SARS, guide des tables de retenue à la source](https://www.sars.gov.za/guide-for-employers-in-respect-of-tax-deduction-tables/) (officielle)
- [Accounter, tables SARS 2026/27](https://accounter.co.za/tax-tables) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
