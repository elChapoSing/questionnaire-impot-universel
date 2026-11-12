# Svalbard et Jan Mayen (SJ)

**Taux effectif retenu : entre 13,9 et 14,4 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement en dessous du seuil (condition remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Régime spécial du Svalbard : 8 % jusqu'à 12 fois le montant de base de l'assurance nationale, 22 % au-delà. Hypothèses : 1 EUR = 11,7 NOK ; montant de base d'environ 130 000 NOK, d'où la fourchette.

## Sources

- [Administration fiscale norvégienne - taux au Svalbard](https://www.skatteetaten.no/en/rates/tax-rates-on-svalbard) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
