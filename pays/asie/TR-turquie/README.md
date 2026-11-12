# Turquie (TR)

**Taux effectif retenu : 36,5 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème 2026 des salaires : 15 % jusqu'à 190 000 livres, 20 % jusqu'à 400 000, 27 % jusqu'à 1,5 million, 35 % jusqu'à 5,3 millions, 40 % au-delà. À 240 300 € (change supposé : 50 livres pour 1 €), le taux effectif est d'environ 36,5 %. Il reste au-dessus de 36 % de 45 à 55 livres pour 1 €.

## Sources

- [PwC Tax Summaries, Turquie](https://taxsummaries.pwc.com/turkey/individual/taxes-on-personal-income) (non officielle)
- [Orbitax, communiqué n° 332 (barème 2026)](https://orbitax.com/news/country/article/Turkey-Updates-Individual-Inco-60850) (non officielle)
- [Cott Group, barème des salaires 2026](https://cottgroup.com/tr/component/zoo/item/tax-brackets-and-income-tax-calculation-in-turkiye) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
