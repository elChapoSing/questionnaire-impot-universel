# Slovénie (SI)

**Taux effectif retenu : 43,6 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème 2026 : 16 %, 26 %, 33 %, 39 % puis 50 % au-delà de 82 346 EUR, appliqué au brut sans abattement (allocation générale de 5 552 EUR exclue). En réalité la base est nette des cotisations salariales, ce qui baisserait nettement le taux.

## Sources

- [RegFollower - barème slovène 2026 (ministère des Finances)](https://regfollower.com/slovenia-ministry-of-finance-publishes-2026-personal-income-tax-brackets-allowances/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
