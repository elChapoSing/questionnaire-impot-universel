# Niger (NE)

**Taux effectif retenu : entre 33,1 et 34,6 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : XOF. Cours utilisé : 1 EUR = 655,957 XOF (Yahoo Finance EURXOF=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 655,957 = 157 626 467 XOF.
- Base imposable : 157 626 467 XOF.

| De (XOF) | À (XOF) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 300 000 | 0,00 % | 300 000 | 0 |
| 300 000 | 550 000 | 1,00 % | 250 000 | 2 500 |
| 550 000 | 1 000 000 | 10,00 % | 450 000 | 45 000 |
| 1 000 000 | 1 600 000 | 15,00 % | 600 000 | 90 000 |
| 1 600 000 | 4 000 000 | 25,00 % | 2 400 000 | 600 000 |
| 4 000 000 | et plus | 35,00 % | 153 626 467 | 53 769 263 |

- **Impôt total : 54 506 763 XOF, soit 34,6 % du salaire brut.**
- Hypothèse : Source unique non officielle (AfroTools).
- Hypothèse : Variante de la note : cotisation CNSS de 4,17 % déduite (non appliquée ici), environ 33,1 %.

## Note

Source unique non officielle : IUTS annuel à 6 tranches, taux maximal 35 % au-delà de 4 M XOF. Variante : cotisation CNSS de 4,17 % déduite donne 33,1 %.

## Sources

- [AfroTools - calcul salaire net Niger](https://afrotools.com/fr/niger/calculateur-salaire-net) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
