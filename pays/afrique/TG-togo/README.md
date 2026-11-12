# Togo (TG)

**Taux effectif retenu : 32,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
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
| 900 000 | 3 000 000 | 3,00 % | 2 100 000 | 63 000 |
| 3 000 000 | 6 000 000 | 10,00 % | 3 000 000 | 300 000 |
| 6 000 000 | 9 000 000 | 15,00 % | 3 000 000 | 450 000 |
| 9 000 000 | 12 000 000 | 20,00 % | 3 000 000 | 600 000 |
| 12 000 000 | 15 000 000 | 25,00 % | 3 000 000 | 750 000 |
| 15 000 000 | 20 000 000 | 30,00 % | 5 000 000 | 1 500 000 |
| 20 000 000 | et plus | 35,00 % | 137 626 467 | 48 169 263 |

- **Impôt total : 51 832 263 XOF, soit 32,9 % du salaire brut.**
- Hypothèse : Barème annuel à 8 tranches ; réduction familiale ignorée.

## Note

IRPP salaires : barème annuel à 8 tranches, taux maximal 35 % au-delà de 20 M XOF. Réduction familiale ignorée.

## Sources

- [PwC - Togo tax facts and figures 2026](https://www.pwc.com/gh/en/assets/pdf/2026-togo-tax-facts-and-figures.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
