# Guyana (GY)

**Taux effectif retenu : entre 22,7 et 34,4 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

25 % jusqu'à 3 360 000 GYD puis 35 % (2026). Abattement personnel (tiers du revenu ou 1 680 000) non appliqué ; avec ce tiers déduit, environ 22,7 %. Hypothèse change : 1 EUR = 240 GYD (209 par USD), soit environ 57,8 M GYD. Cas sensible à l'abattement.

## Sources

- [Guyana Revenue Authority - barème et abattements 2026](https://www.gra.gov.gy/?p=16434) (officielle)
- [PwC Tax Summaries - Guyana](https://taxsummaries.pwc.com/guyana/individual/taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
