# Bangladesh (BD)

**Taux effectif retenu : 28,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème des années d'imposition 2026-27 et 2027-28 : 375 000 takas exonérés, puis 10 %, 15 %, 20 %, 25 % et 30 % au-delà de 3,575 millions. Une tranche à 35 % au-delà de 30 millions est prévue à partir de 2028-29. Change supposé : 140 takas pour 1 €.

## Sources

- [bdnews24, budget 2026-27](https://bdnews24.com/budget2026-27/6a271f81cd2c) (non officielle)
- [PwC Bangladesh, principales propositions budgétaires 2026](https://www.pwc.com/bd/en/assets/pdfs/budget/key-budget-proposals-2026.pdf) (non officielle)
- [Dhaka Tribune, seuil d'exonération porté à 375 000 takas](https://www.dhakatribune.com/business/412340/tax-free-income-threshold-raised-to-tk-375-000) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
