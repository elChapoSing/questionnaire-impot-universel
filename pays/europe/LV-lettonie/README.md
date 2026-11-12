# Lettonie (LV)

**Taux effectif retenu : 29,5 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème 2025-2026 : 20 % jusqu'à 20 004 €, 25,5 % jusqu'à 105 300 €, 33 % au-delà. Résultat de 29,3 % à 29,7 % selon la lecture de la première tranche. L'abattement mensuel de 550 € est nul à ce niveau de revenu.

## Sources

- [Ministère des Finances letton, barème de l'impôt sur le revenu](https://www.fm.gov.lv/en/media/20577/download) (officielle)
- [Ministère des Finances letton, impôts dans les pays baltes 2024-2026](https://www.fm.gov.lv/en/media/25307/download) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
