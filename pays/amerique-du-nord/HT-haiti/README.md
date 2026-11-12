# Haïti (HT)

**Taux effectif retenu : entre 29,3 et 29,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : HTG. Cours utilisé : 1 EUR = 145,34 HTG (Yahoo Finance EURHTG=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 145,34 = 34 925 202 HTG.
- Base imposable : 34 925 202 HTG.

| De (HTG) | À (HTG) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 60 000 | 0,00 % | 60 000 | 0 |
| 60 000 | 240 000 | 10,00 % | 180 000 | 18 000 |
| 240 000 | 480 000 | 15,00 % | 240 000 | 36 000 |
| 480 000 | 1 000 000 | 25,00 % | 520 000 | 130 000 |
| 1 000 000 | et plus | 30,00 % | 33 925 202 | 10 177 561 |

- **Impôt total : 10 361 561 HTG, soit 29,7 % du salaire brut.**
- Hypothèse : Barème actuel (décret de 2005) : cette version donne environ 29,7 %.
- Hypothèse : Nouveau barème validé pour application au 1er octobre 2026 (taux 0, 12, 18, 25, 30 %) : environ 29,3 % (note) ; ses bornes en gourdes n'ont pas été retrouvées.

## Note

Barème à 5 tranches, taux marginal maximal 30 %. Deux versions : barème actuel (seuil 120 000 HTG, environ 29,7 %) et nouveau barème validé par le ministère pour application au 1er octobre 2026 (environ 29,3 %).

## Sources

- [Rivermate - Haïti, taxes](https://rivermate.com/guides/haiti/taxes) (non officielle)
- [Ministère de l'Économie et des Finances (Haïti) - nouveau barème IRPP](https://www.mef.gouv.ht/storage/app/uploads/public/6a6/cc3/3dc/6a6cc33dcbf11650887297.pdf) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
