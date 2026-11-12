# Andorre (AD)

**Taux effectif retenu : 8,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement en dessous du seuil (condition remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème : 0 % jusqu'à 24 000 €, 5 % jusqu'à 40 000 €, 10 % au-delà. Entre 8,7 % et 9,0 % selon la lecture du barème ; le bonus de 800 € maximum sur les salaires n'est pas déduit. Sources secondaires uniquement.

## Sources

- [Andorra Insiders, budget 2026](https://andorrainsiders.com/en/economy/andorra-budget-2026/) (non officielle)
- [Teamed, paie et impôt en Andorre 2026](https://www.teamed.global/country-hiring-guides/andorra/tax-and-payroll) (non officielle)
- [Private Law Wiki, Andorre](https://wiki.private.law/en/andorra-tax) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
