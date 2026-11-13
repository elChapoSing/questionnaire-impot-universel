# États-Unis (US)

**Taux effectif retenu : 23,2 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Cas limite.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : USD. Cours utilisé : 1 EUR = 1,1065 USD (Yahoo Finance EURUSD=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 1,1065 = 265 884 USD.
- Base imposable : 265 884 USD.

| De (USD) | À (USD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 12 400 | 10,00 % | 12 400 | 1 240 |
| 12 400 | 50 400 | 12,00 % | 38 000 | 4 560 |
| 50 400 | 105 700 | 22,00 % | 55 300 | 12 166 |
| 105 700 | 201 775 | 24,00 % | 96 075 | 23 058 |
| 201 775 | 256 225 | 32,00 % | 54 450 | 17 424 |
| 256 225 | 640 600 | 35,00 % | 9 659 | 3 380 |
| 640 600 | et plus | 37,00 % | 0 | 0 |

- **Impôt total : 61 828 USD, soit 23,3 % du salaire brut.**
- Hypothèse : Impôt fédéral seul, personne seule, barème 2026, SANS déduction forfaitaire : le taux retenu de 23,3 % correspond à ce cas ; avec la déduction forfaitaire de 16 100 USD : 21,3 % (note).
- Hypothèse : Aucun impôt d'État modélisé : la note ne cite aucun État représentatif (nuls au Texas et en Floride, élevés en Californie et à New York). Cotisations sociales exclues.

## Note

Impôt fédéral seul, personne seule : 10 % à 37 % (barème 2026 : 10 % jusqu'à 12 400 dollars, 35 % jusqu'à 640 600). 21,3 % avec la déduction forfaitaire de 16 100 dollars. Les impôts des États s'ajoutent (nuls au Texas ou en Floride, élevés en Californie ou à New York). Les cotisations sociales fédérales ne sont pas comptées.

## Sources

- [Fondation nationale des contribuables, barème fédéral 2026 et 2027](https://www.ntu.org/foundation/detail/what-are-federal-income-tax-rates-for-2026-and-2027) (non officielle)
- [NerdWallet, barèmes et déduction 2026 (IRS Rev. Proc. 2025-32)](https://www.nerdwallet.com/article/taxes/tax-changes-2026) (non officielle)
- [ustax.tools, barème 2026 pour une personne seule](https://ustax.tools/2026-tax-brackets-single/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
