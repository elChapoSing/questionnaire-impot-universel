# Îles Malouines (FK)

**Taux effectif retenu : entre 23,7 et 25,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

21 % sur les 12 000 premières GBP puis 26 %. Abattement de 15 960 GBP non appliqué (variante : environ 23,7 %). Hypothèse change : 1 EUR = 0,87 GBP, soit environ 209 100 GBP. Peu sensible au change.

## Sources

- [Falkland Islands Government Taxation Office - guide 2024 et suivants](https://falklands.gov.fk/taxation/images/General_Tax_Guide_Individuals_2024_onwards.pdf) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
