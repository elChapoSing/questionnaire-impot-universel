# Népal (NP)

**Taux effectif retenu : 27,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème de l'exercice 2083/84 (juillet 2026 à juillet 2027) : 1 % jusqu'à 1 million de roupies, 10 %, 20 %, 27 %, puis 29 % au-delà de 4 millions. D'après nos sources, il remplace le barème 2082/83 (jusqu'à 39 %, soit 37,7 % ici). Les deux dépassent le seuil. Change supposé : 160 roupies pour 1 €.

## Sources

- [Ekantipur, revue de la réforme de l'impôt sur le revenu (juillet 2026)](https://ekantipur.com/opinion/2026/07/07/en/review-of-personal-income-tax-reform-18-39.html) (non officielle)
- [Notary Nepal, tranches de l'exercice 2083/84](https://notarynepal.com/blog/nepal-income-tax-slabs-fy-2083-84) (non officielle)
- [Law Alpine, budget 2083/84](https://lawalpine.com/blog/budget-2083-84-tax-changes-in-nepal) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
