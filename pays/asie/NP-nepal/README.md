# Népal (NP)

**Taux effectif retenu : 27,8 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Pas concerné·e (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : NPR. Cours utilisé : 1 EUR = 166,822 NPR (Yahoo Finance EURNPR=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 166,822 = 40 087 327 NPR.
- Base imposable : 40 087 327 NPR.

| De (NPR) | À (NPR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 1 000 000 | 1,00 % | 1 000 000 | 10 000 |
| 1 000 000 | 1 500 000 | 10,00 % | 500 000 | 50 000 |
| 1 500 000 | 2 500 000 | 20,00 % | 1 000 000 | 200 000 |
| 2 500 000 | 4 000 000 | 27,00 % | 1 500 000 | 405 000 |
| 4 000 000 | et plus | 29,00 % | 36 087 327 | 10 465 325 |

- **Impôt total : 11 130 325 NPR, soit 27,8 % du salaire brut.**
- Hypothèse : Barème de l'exercice 2083/84 ; la tranche à 1 % est l'impôt de sécurité sociale (dû par les non-cotisants au fonds social).
- Hypothèse : L'ancien barème 2082/83 (jusqu'à 39 %) donnerait 37,7 %, comme l'indique la note.

## Note

Barème de l'exercice 2083/84 (juillet 2026 à juillet 2027) : 1 % jusqu'à 1 million de roupies, 10 %, 20 %, 27 %, puis 29 % au-delà de 4 millions. D'après nos sources, il remplace le barème 2082/83 (jusqu'à 39 %, soit 37,7 % ici). Les deux dépassent le seuil.

## Sources

- [Ekantipur, revue de la réforme de l'impôt sur le revenu (juillet 2026)](https://ekantipur.com/opinion/2026/07/07/en/review-of-personal-income-tax-reform-18-39.html) (non officielle)
- [Notary Nepal, tranches de l'exercice 2083/84](https://notarynepal.com/blog/nepal-income-tax-slabs-fy-2083-84) (non officielle)
- [Law Alpine, budget 2083/84](https://lawalpine.com/blog/budget-2083-84-tax-changes-in-nepal) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
