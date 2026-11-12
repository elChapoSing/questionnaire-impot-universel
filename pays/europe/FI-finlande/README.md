# Finlande (FI)

**Taux effectif retenu : 41,5 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : EUR. Cours utilisé : 1 EUR = 1 EUR (pays en euro, change 1).
- Salaire converti : 240 300 € × 1 = 240 300 EUR.
- Base imposable : 240 300 EUR.

| De (EUR) | À (EUR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 22 000 | 20,21 % | 22 000 | 4 446 |
| 22 000 | 32 600 | 26,57 % | 10 600 | 2 816 |
| 32 600 | 40 100 | 37,82 % | 7 500 | 2 836 |
| 40 100 | 52 100 | 40,82 % | 12 000 | 4 898 |
| 52 100 | et plus | 45,07 % | 188 200 | 84 822 |

- **Impôt total : 99 819 EUR, soit 41,5 % du salaire brut.**
- Hypothèse : Barème d'État 2026 (12,64 / 19 / 30,25 / 33,25 / 37,5 %, impôt fixe de 11 053,55 € à 52 100 €) auquel s'ajoute l'impôt communal moyen de 7,57 %, appliqué à tout le revenu : les taux sont cumulés.
- Hypothèse : Taxe d'église, assurance maladie, crédit d'impôt sur le revenu du travail et déductions exclus.

## Note

Finlande 2026 : barème d'État progressif de 12,64 % à 37,5 % (taux maximal au-delà de 52 100 EUR) plus impôt communal moyen 7,57 %. Estimation, les seuils intermédiaires n'ont pas été vérifiés : environ 41,5 %.

## Sources

- [Ministère des Finances de Finlande, imposition des revenus du travail](https://vm.fi/en/taxation-of-earned-income) (officielle)
- [Orbitax, budget d'État 2026 de la Finlande](https://orbitax.com/news/country/article/Finnish-Ministry-of-Finance-Su-59931) (non officielle)
- [Taxes for Expats, guide Finlande](https://www.taxesforexpats.com/country-guides/finland/simple-tax-guide-for-americans-in-finland.html) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
