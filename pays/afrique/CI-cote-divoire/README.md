# Côte d’Ivoire (CI)

**Taux effectif retenu : 28,5 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : XOF. Cours utilisé : 1 EUR = 655,957 XOF (Yahoo Finance EURXOF=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 655,957 = 157 626 467 XOF.
- Base imposable : 157 626 467 XOF.

| De (XOF) | À (XOF) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 900 000 | 0,00 % | 900 000 | 0 |
| 900 000 | 2 880 000 | 16,00 % | 1 980 000 | 316 800 |
| 2 880 000 | 9 600 000 | 21,00 % | 6 720 000 | 1 411 200 |
| 9 600 000 | 28 800 000 | 24,00 % | 19 200 000 | 4 608 000 |
| 28 800 000 | 96 000 000 | 28,00 % | 67 200 000 | 18 816 000 |
| 96 000 000 | et plus | 32,00 % | 61 626 467 | 19 720 469 |

- **Impôt total : 44 872 469 XOF, soit 28,5 % du salaire brut.**
- Hypothèse : ITS unifié 2024, barème mensuel multiplié par 12, appliqué à 100 % du salaire imposable (abattement de 20 % supprimé).
- Hypothèse : Réduction pour charges de famille ignorée.

## Note

ITS unifié depuis 2024 : barème mensuel appliqué à 100 % du salaire imposable (abattement de 20 % supprimé), taux maximal 32 % au-delà de 8 M XOF/mois. Réduction pour charges de famille ignorée. Change : XOF fixe.

## Sources

- [PwC Tax Summaries - Côte d'Ivoire](https://taxsummaries.pwc.com/ivory-coast/individual/taxes-on-personal-income) (non officielle)
- [PaySpace - réforme ITS 2024](https://payspace.com/blog/ivory-coast-its-reform) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
