# Pays-Bas (NL)

**Taux effectif retenu : 40,8 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Pas concerné·e (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : EUR. Cours utilisé : 1 EUR = 1 EUR (pays en euro, pas de change).
- Salaire converti : 240 300 € × 1 = 240 300 EUR.
- Base imposable : 240 300 EUR.

| De (EUR) | À (EUR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 38 883 | 8,10 % | 38 883 | 3 150 |
| 38 883 | 78 426 | 37,56 % | 39 543 | 14 852 |
| 78 426 | et plus | 49,50 % | 161 874 | 80 128 |

- **Impôt total : 98 130 EUR, soit 40,8 % du salaire brut.**
- Hypothèse : Case 1, 2026. La première tranche de 35,75 % inclut environ 27,65 points de cotisations sociales : elle est comptée à 8,10 %. Avec les cotisations, le taux serait d'environ 45,3 %.
- Hypothèse : Crédits d'impôt exclus (ils s'annulent à ce niveau de revenu).

## Note

Case 1 en 2026 : 35,75 % jusqu'à 38 883 €, 37,56 % jusqu'à 78 426 €, 49,50 % au-delà. La première tranche inclut des cotisations sociales (environ 27,65 points) : sans elles, le taux effectif est d'environ 40,8 % à 240 300 € ; avec elles, environ 45,3 %. Crédits d'impôt exclus (ils s'annulent à ce niveau de revenu).

## Sources

- [Deloitte Pays-Bas, taux 2026](https://www.deloitte.com/nl/en/services/tax/blogs/pakket-belastingplan-2026-tarieven-heffingskortingen.html) (non officielle)
- [KVK, taux néerlandais 2026](https://www.kvk.nl/en/finance/dutch-tax-rates-in-2026/) (non officielle)
- [Portsight, tranches de la case 1](https://www.portsighttax.com/en/insights/netherlands-tax-rate-explained) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
