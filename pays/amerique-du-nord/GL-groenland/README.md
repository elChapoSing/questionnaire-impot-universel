# Groenland (GL)

**Taux effectif retenu : entre 42,0 et 44,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Impôt proportionnel : communal 26 à 28 %, national 10 % et commun 6 %, soit 42 à 44 % selon la commune (hors zones communales : 36 %). Pourcentages cités comme ceux de 2020 par PwC, à vérifier. Régime spécial de 35 % pour certains travaux pétroliers ou miniers.

## Sources

- [Administration fiscale groenlandaise (Aka) - taux d'impôt](https://aka.gl/en/individuals/tax/tax-rates) (officielle)
- [PwC Tax Summaries - Groenland](https://taxsummaries.pwc.com/Greenland/Individual/Taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
