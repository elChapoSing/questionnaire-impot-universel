# Mali (ML)

**Taux effectif retenu : entre 38,1 et 39,6 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : XOF. Cours utilisé : 1 EUR = 655,957 XOF (Yahoo Finance EURXOF=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 655,957 = 157 626 467 XOF.
- Base imposable : 157 626 467 XOF.

| De (XOF) | À (XOF) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 330 000 | 0,00 % | 330 000 | 0 |
| 330 000 | 630 000 | 5,00 % | 300 000 | 15 000 |
| 630 000 | 1 500 000 | 13,00 % | 870 000 | 113 100 |
| 1 500 000 | 3 600 000 | 30,00 % | 2 100 000 | 630 000 |
| 3 600 000 | et plus | 40,00 % | 154 026 467 | 61 610 587 |

- **Impôt total : 62 368 687 XOF, soit 39,6 % du salaire brut.**
- Hypothèse : Source unique non officielle (AfroTools).
- Hypothèse : Variante de la note : cotisation INPS de 3,6 % déduite (non appliquée ici), environ 38,1 %.

## Note

Source unique non officielle : ITS annuel à 5 tranches, taux maximal 40 % au-delà de 3,6 M XOF. Variante : cotisation INPS de 3,6 % déduite donne 38,1 %. Change : XOF fixe.

## Sources

- [AfroTools - calcul salaire net Mali](https://afrotools.com/fr/mali/calculateur-salaire-net) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
