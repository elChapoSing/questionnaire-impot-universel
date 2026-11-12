# États-Unis (US)

**Taux effectif retenu : 23,3 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Impôt fédéral seul, personne seule : 10 % à 37 % (barème 2026 : 10 % jusqu'à 12 400 dollars, 35 % jusqu'à 640 600). 21,3 % avec la déduction forfaitaire de 16 100 dollars. Les impôts des États s'ajoutent (nuls au Texas ou en Floride, élevés en Californie ou à New York). Les cotisations sociales fédérales ne sont pas comptées. Change : 1,1143 dollar pour 1 € (Yahoo Finance, 6 novembre 2026).

## Sources

- [Fondation nationale des contribuables, barème fédéral 2026 et 2027](https://www.ntu.org/foundation/detail/what-are-federal-income-tax-rates-for-2026-and-2027) (non officielle)
- [NerdWallet, barèmes et déduction 2026 (IRS Rev. Proc. 2025-32)](https://www.nerdwallet.com/article/taxes/tax-changes-2026) (non officielle)
- [ustax.tools, barème 2026 pour une personne seule](https://ustax.tools/2026-tax-brackets-single/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
