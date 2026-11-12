# Îles Salomon (SB)

**Taux effectif retenu : entre 39,2 et 39,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème progressif des résidents en SBD : 11 %, 23 %, 35 % puis 40 % au-delà de 60 000 ou 90 000 selon la source ; franchise de 15 000 environ. Hypothèse : 1 EUR = 9,7 SBD (environ 2 330 000 SBD). Sources non officielles, seuils légèrement divergents mais effet minime sur le taux effectif ; à confirmer auprès de l'administration fiscale.

## Sources

- [TaxAtlas - Solomon Islands](https://taxatlas.io/country/solomon-islands) (non officielle)
- [Rivermate - Solomon Islands taxes](https://rivermate.com/guides/solomon-islands/taxes) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
