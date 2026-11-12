# Kazakhstan (KZ)

**Taux effectif retenu : 13,6 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement en dessous du seuil (condition remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

10 % jusqu'à 8 500 indices mensuels, 15 % au-delà. Même avec 15 % sur tout le revenu, le résultat reste sous le seuil. Taux de change non BCE : cbonds, 18 juillet 2026.

## Sources

- [Comité des recettes de l'État du Kazakhstan (gov.kz), barème 10 % / 15 %](https://www.gov.kz/org/kgd-vko/press/news/details/1208156?lang=en) (officielle)
- [PwC Worldwide Tax Summaries](https://taxsummaries.pwc.com/kazakhstan/individual/taxes-on-personal-income) (non officielle)
- [Baker McKenzie, nouveau Code des impôts](https://www.bakermckenzie.com/en/insight/publications/alerts/2025/09/kazakhstan-new-tax-code) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
