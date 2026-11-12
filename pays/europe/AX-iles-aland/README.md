# Îles Åland (AX)

**Taux effectif retenu : entre 38,3 et 41,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : EUR. Cours utilisé : 1 EUR = 1 EUR (pays en euro, change 1).
- Salaire converti : 240 300 € × 1 = 240 300 EUR.
- Base imposable : 240 300 EUR.

| De (EUR) | À (EUR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 22 000 | 17,67 % | 22 000 | 3 887 |
| 22 000 | 32 600 | 24,03 % | 10 600 | 2 547 |
| 32 600 | 40 100 | 35,28 % | 7 500 | 2 646 |
| 40 100 | 52 100 | 38,28 % | 12 000 | 4 594 |
| 52 100 | et plus | 42,53 % | 188 200 | 80 041 |

- **Impôt total : 93 716 EUR, soit 39,0 % du salaire brut.**
- Hypothèse : Barème d'État 2026 spécifique à Åland (0 / 6,36 / 17,61 / 20,61 / 24,86 %, impôt fixe de 4 468,11 € à 52 100 €) auquel s'ajoute l'impôt communal moyen de 17,67 %, appliqué à tout le revenu : les taux des tranches sont cumulés.
- Hypothèse : Les communes vont de 17,0 à 19,7 % (taux de 38,3 % à 41 %, fourchette de la note).
- Hypothèse : Taxe d'église, assurance maladie et déductions exclues.

## Note

Barème d'État spécifique à Åland 2026 (24,86 % au-delà de 52 100 EUR) plus impôt communal moyen de 17,67 % (de 17,0 à 19,7 % selon la commune, d'où la fourchette). Taxe d'église, assurance maladie et déductions exclues.

## Sources

- [Administration fiscale finlandaise - imposition à Åland](https://vero.fi/sv/Detaljerade_skatteanvisningar/anvisningar/48911/beskattningen-pa-aland8/) (officielle)
- [Association des communes de Finlande - taux 2026](https://www.kommunforbundet.fi/sites/default/files/media/file/Kommunernas-skattesatser-2026.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
