# Liberia (LR)

**Taux effectif retenu : 24,8 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : LRD. Cours supposé : 1 EUR = 215 LRD (hypothèse reprise de la note, à remplacer par le cours Yahoo EUREURLRD=X).
- Salaire converti : 240 300 € × 215 = 51 664 500 LRD.
- Base imposable : 51 664 500 LRD.

| De (LRD) | À (LRD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 70 000 | 0,00 % | 70 000 | 0 |
| 70 000 | 200 000 | 5,00 % | 130 000 | 6 500 |
| 200 000 | 800 000 | 15,00 % | 600 000 | 90 000 |
| 800 000 | et plus | 25,00 % | 50 864 500 | 12 716 125 |

- **Impôt total : 12 812 625 LRD, soit 24,8 % du salaire brut.**
- Hypothèse : Barème résident à 4 tranches (PwC).

## Note

Barème en LRD à 4 tranches, taux maximal 25 % au-delà de 800 000 LRD. Change (hypothèse) : 1 EUR = 215 LRD ; variation de 180 à 250 sans effet notable.

## Sources

- [PwC Tax Summaries - Libéria](https://taxsummaries.pwc.com/republic-of-liberia/individual/taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
