# Belgique (BE)

**Taux effectif retenu : 46,1 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Pas concerné·e (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : EUR. Cours utilisé : 1 EUR = 1 EUR (pays en euro, change 1).
- Salaire converti : 240 300 € × 1 = 240 300 EUR.
- Base imposable : 240 300 EUR.

| De (EUR) | À (EUR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 16 720 | 25,00 % | 16 720 | 4 180 |
| 16 720 | 29 510 | 40,00 % | 12 790 | 5 116 |
| 29 510 | 51 070 | 45,00 % | 21 560 | 9 702 |
| 51 070 | et plus | 50,00 % | 189 230 | 94 615 |

- Crédit : Réduction liée à la quotité exemptée d'impôt (montant retenu dans la note) : − 2 795 EUR.
- **Impôt total : 110 818 EUR, soit 46,1 % du salaire brut.**
- Hypothèse : Barème fédéral de l'année de revenus 2026 ; la réduction de 2 795 € est soustraite de l'impôt.
- Hypothèse : La taxe communale (environ 7 % de l'impôt fédéral) n'est pas comprise dans le taux retenu ; elle le porterait à environ 49 %.
- Hypothèse : Cotisations sociales exclues.

## Note

Barème fédéral de l'année de revenus 2026 : 25 % jusqu'à 16 720 €, 40 % jusqu'à 29 510 €, 45 % jusqu'à 51 070 €, 50 % au-delà, moins la réduction liée à la quotité exemptée (environ 2 795 €). Taux effectif d'environ 46,1 % à 240 300 €. S'ajoute une taxe communale d'environ 7 % de l'impôt fédéral. Cotisations sociales exclues.

## Sources

- [Orbitax, ajustement du barème belge 2026](https://orbitax.com/news/country/article/Belgian-Government-Adjusts-Per-61222) (non officielle)
- [BDO Belgique, montants indexés](https://www.bdo.be/en-gb/insights/news-alerts/2026/key-figures-personal-income-tax-indexed-amounts-of-income-tax-(tax-year-2025-2026-2027)) (non officielle)
- [CountryTaxCalc, Belgique](https://www.countrytaxcalc.com/tax-guides/belgium-tax-guide/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
