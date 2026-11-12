# Croatie (HR)

**Taux effectif retenu : 26,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème par défaut : 20 % jusqu'à 60 000 €, 30 % au-delà. Chaque commune fixe ses taux (15 à 23,6 % et 25 à 35,4 %). Même avec les taux locaux les plus bas, le taux effectif est de 21,8 %, au-dessus du seuil. Abattement personnel de 560 à 600 € par mois.

## Sources

- [Administration fiscale croate, règles générales et taux](https://porezna-uprava.gov.hr/en/income-t-ax-information-on-the-general-rules-rates-taxpayer-and-submitting-annual-income-tax-return/7322) (officielle)
- [Administration fiscale croate, plafonds des taux locaux](https://porezna-uprava.gov.hr/en/income-tax/7363) (officielle)
- [PwC Worldwide Tax Summaries](https://taxsummaries.pwc.com/croatia/individual/taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
