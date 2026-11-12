# Maurice (MU)

**Taux effectif retenu : 19,6 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : MUR. Cours utilisé : 1 EUR = 52,6 MUR (Yahoo Finance EURMUR=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 52,6 = 12 639 780 MUR.
- Base imposable : 12 639 780 MUR.

| De (MUR) | À (MUR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 500 000 | 0,00 % | 500 000 | 0 |
| 500 000 | 1 000 000 | 10,00 % | 500 000 | 50 000 |
| 1 000 000 | 12 000 000 | 20,00 % | 11 000 000 | 2 200 000 |
| 12 000 000 | et plus | 35,00 % | 639 780 | 223 923 |

- **Impôt total : 2 473 923 MUR, soit 19,6 % du salaire brut.**
- Hypothèse : Barème 2025-26 augmenté de la tranche à 35 % au-delà de 12 millions de roupies, prévue par la loi de finances 2026 à partir du 1er juillet 2026.
- Hypothèse : Variante de la note : sans la tranche à 35 %, 18,8 %.

## Note

Cours Yahoo EURMUR=X du 13/11/2026 : 1 EUR = 52.6 MUR (hypothèse initiale : 52). Taux recalculé : 19,6 % (avant : 19,4 %). Les chiffres de change et de taux cités plus bas datent de l'hypothèse initiale. Barème 2025-26 : 0 % jusqu'à 500 000 roupies, 10 % jusqu'à 1 million, 20 % au-delà. La loi de finances 2026 ajoute 35 % au-delà de 12 millions à partir du 1er juillet 2026. À 240 300 €, soit environ 12,5 millions de roupies (change supposé : 52 roupies pour 1 €), le taux effectif est de 18,8 % sans la tranche à 35 % et de 19,4 % avec. Le résultat dépend du change et du barème retenu.

## Sources

- [Mauritius Revenue Authority, barème individuel (0 / 10 / 20 %)](https://www.mra.mu/individuals/obligation-to-file-a-return) (officielle)
- [PaySpace, Finance Act 2026 : tranche à 35 % au-delà de 12 millions](https://payspace.com/blog/mauritius-finance-act-2026-income-tax-rate-restructuring-expatriate-tax-exemption-lump-sum-thresholds-increased) (non officielle)
- [Deloitte, Mauritius Highlights 2026](https://www.deloitte.com/content/dam/assets-shared/docs/services/tax/2026/dttl-tax-mauritiushighlights-2026.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
