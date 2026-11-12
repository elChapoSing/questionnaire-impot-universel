# Iran (IR)

**Taux effectif retenu : entre 29,5 et 34,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème progressif 2026 de 0 % à 35 % au-delà de 6 milliards IRR ; hypothèse de change très volatile (environ 1,6 M IRR par EUR), mais taux peu sensible car la tranche haute domine. Incertitude : le barème salarial spécifique pourrait plafonner à 30 %. Sources secondaires uniquement.

## Sources

- [TaxAtlas - Iran, impôt sur le revenu](https://taxatlas.io/country/iran/income-tax) (non officielle)
- [Rivermate - Iran, fiscalité](https://rivermate.com/guides/iran/taxes) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
