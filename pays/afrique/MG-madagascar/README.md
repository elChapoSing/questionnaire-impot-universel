# Madagascar (MG)

**Taux effectif retenu : 19,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : MGA. Cours supposé : 1 EUR = 5 300 MGA (hypothèse reprise de la note, à remplacer par le cours Yahoo EUREURMGA=X).
- Salaire converti : 240 300 € × 5 300 = 1 273 590 000 MGA.
- Base imposable : 1 273 590 000 MGA.

| De (MGA) | À (MGA) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 4 200 000 | 0,00 % | 4 200 000 | 0 |
| 4 200 000 | 4 800 000 | 5,00 % | 600 000 | 30 000 |
| 4 800 000 | 6 000 000 | 10,00 % | 1 200 000 | 120 000 |
| 6 000 000 | 7 200 000 | 15,00 % | 1 200 000 | 180 000 |
| 7 200 000 | et plus | 20,00 % | 1 266 390 000 | 253 278 000 |

- **Impôt total : 253 608 000 MGA, soit 19,9 % du salaire brut.**
- Hypothèse : Barème IRSA mensuel multiplié par 12 ; réduction pour charges de famille ignorée.

## Note

IRSA : taux maximal 20 % au-delà de 600 000 MGA/mois ; réduction pour charges de famille ignorée. Change (hypothèse) : 1 EUR = 5 300 MGA ; taux stable entre 4 800 et 6 000. Cas dans la bande, légèrement sous 21,14 %.

## Sources

- [PwC Tax Summaries - Madagascar](https://taxsummaries.pwc.com/madagascar/individual/taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
