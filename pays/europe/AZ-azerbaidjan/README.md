# Azerbaïdjan (AZ)

**Taux effectif retenu : entre 12,7 et 24,3 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement en dessous du seuil (condition remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Hypothèse : 1 EUR = 1,97 AZN. Barème général 2026 (secteur privé non pétrolier) : 3 % jusqu'à 2 500 AZN/mois, 10 % jusqu'à 8 000, 14 % au-delà. Si secteur pétrole/gaz ou public : 14 % puis 25 % au-delà de 2 500, soit environ 24,3 %. Sources partiellement divergentes sur les tranches hautes.

## Sources

- [PwC Tax Summaries - Azerbaïdjan](https://taxsummaries.pwc.com/Azerbaijan/Individual/Taxes-on-personal-income) (non officielle)
- [APA - taux d'impôt sur le revenu 2026](https://en.apa.az/finance/azerbaijan-implements-regions-lowest-income-tax-rates-under-new-phased-approach-says-deputy-minister-482952) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
