# Maurice (MU)

**Taux effectif retenu : 19,4 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème 2025-26 : 0 % jusqu'à 500 000 roupies, 10 % jusqu'à 1 million, 20 % au-delà. La loi de finances 2026 ajoute 35 % au-delà de 12 millions à partir du 1er juillet 2026. À 240 300 €, soit environ 12,5 millions de roupies (change supposé : 52 roupies pour 1 €), le taux effectif est de 18,8 % sans la tranche à 35 % et de 19,4 % avec. Le résultat dépend du change et du barème retenu.

## Sources

- [Mauritius Revenue Authority, barème individuel (0 / 10 / 20 %)](https://www.mra.mu/individuals/obligation-to-file-a-return) (officielle)
- [PaySpace, Finance Act 2026 : tranche à 35 % au-delà de 12 millions](https://payspace.com/blog/mauritius-finance-act-2026-income-tax-rate-restructuring-expatriate-tax-exemption-lump-sum-thresholds-increased) (non officielle)
- [Deloitte, Mauritius Highlights 2026](https://www.deloitte.com/content/dam/assets-shared/docs/services/tax/2026/dttl-tax-mauritiushighlights-2026.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
