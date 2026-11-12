# Malte (MT)

**Taux effectif retenu : 31,1 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème 2026 pour une personne seule : 0 % jusqu'à 12 000 €, 15 % jusqu'à 16 000 €, 25 % jusqu'à 60 000 €, 35 % au-delà. Les régimes spéciaux de non-domiciliés ne sont pas modélisés.

## Sources

- [PwC Worldwide Tax Summaries](https://taxsummaries.pwc.com/malta/individual/taxes-on-personal-income) (non officielle)
- [Chambers, Corporate Tax 2026 : Malte](https://practiceguides.chambers.com/practice-guides/corporate-tax-2026/malta) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
