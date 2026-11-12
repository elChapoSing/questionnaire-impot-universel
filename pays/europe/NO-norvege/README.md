# Norvège (NO)

**Taux effectif retenu : 35,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : NOK. Cours utilisé : 1 EUR = 10,5942 NOK (Yahoo Finance EURNOK=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 10,5942 = 2 545 781 NOK.
- Base imposable : 2 545 781 NOK.

| De (NOK) | À (NOK) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 226 100 | 22,00 % | 226 100 | 49 742 |
| 226 100 | 318 300 | 23,70 % | 92 200 | 21 851 |
| 318 300 | 725 050 | 26,00 % | 406 750 | 105 755 |
| 725 050 | 980 100 | 35,70 % | 255 050 | 91 053 |
| 980 100 | 1 467 200 | 38,80 % | 487 100 | 188 995 |
| 1 467 200 | et plus | 39,80 % | 1 078 581 | 429 275 |

- **Impôt total : 886 671 NOK, soit 34,8 % du salaire brut.**
- Hypothèse : Taux cumulés : impôt ordinaire de 22 % plus impôt par paliers (trinnskatt) de 1,7 %, 4,0 %, 13,7 %, 16,8 % et 17,8 % à partir de 226 100, 318 300, 725 050, 980 100 et 1 467 200 NOK (2026, PwC).
- Hypothèse : Sans cotisation d'assurance nationale ni abattements (minstefradrag, etc.).

## Note

Cours Yahoo EURNOK=X du 13/11/2026 : 1 EUR = 10.59418 NOK (hypothèse initiale : 11.7). Taux recalculé : 35,0 % (avant : 35,5 %). Les chiffres de change et de taux cités plus bas datent de l'hypothèse initiale. Norvège 2026 : 22 % d'impôt ordinaire plus impôt par paliers (trinnskatt) de 1,7 % à environ 17,8 % sur le revenu brut. Calcul à 11,7 NOK/EUR (hypothèse), sans cotisation d'assurance nationale ni abattements : environ 35,5 %. Les sources divergent sur les seuils exacts des paliers.

## Sources

- [PwC Tax Summaries, Norvège](https://taxsummaries.pwc.com/norway/individual/taxes-on-personal-income) (non officielle)
- [Working with Norwegians, guide fiscal 2026](https://workingwithnorwegians.com/norway-tax-system-explained) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
