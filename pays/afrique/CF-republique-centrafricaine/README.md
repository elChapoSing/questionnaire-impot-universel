# République centrafricaine (CF)

**Taux effectif retenu : entre 35,9 et 37,4 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : XAF. Cours utilisé : 1 EUR = 655,957 XAF (Yahoo Finance EURXAF=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 655,957 = 157 626 467 XAF.
- Base imposable : 157 626 467 XAF.

| De (XAF) | À (XAF) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 2 400 000 | 0,00 % | 2 400 000 | 0 |
| 2 400 000 | 6 000 000 | 8,00 % | 3 600 000 | 288 000 |
| 6 000 000 | 12 000 000 | 15,00 % | 6 000 000 | 900 000 |
| 12 000 000 | 24 000 000 | 25,00 % | 12 000 000 | 3 000 000 |
| 24 000 000 | 36 000 000 | 30,00 % | 12 000 000 | 3 600 000 |
| 36 000 000 | 60 000 000 | 35,00 % | 24 000 000 | 8 400 000 |
| 60 000 000 | 120 000 000 | 40,00 % | 60 000 000 | 24 000 000 |
| 120 000 000 | et plus | 50,00 % | 37 626 467 | 18 813 234 |

- **Impôt total : 59 001 234 XAF, soit 37,4 % du salaire brut.**
- Hypothèse : Source unique non officielle (AfroTools).
- Hypothèse : Variante de la note : cotisation CNPS salariale de 3 % déduite (non appliquée ici), environ 35,9 %.

## Note

Source unique non officielle : barème annuel 2026 à 8 tranches, taux maximal 50 % au-delà de 120 M XAF. Variante : cotisation CNPS de 3 % déduite donne 35,9 %. Change : XAF fixe, 655,957 par EUR.

## Sources

- [AfroTools - calcul salaire net Centrafrique](https://afrotools.com/fr/centrafrique/calculateur-salaire-net/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
