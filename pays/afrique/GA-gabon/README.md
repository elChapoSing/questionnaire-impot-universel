# Gabon (GA)

**Taux effectif retenu : entre 26,9 et 33,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Pas concerné·e (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : XAF. Cours utilisé : 1 EUR = 655,957 XAF (Yahoo Finance EURXAF=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 655,957 = 157 626 467 XAF.
- Déduction : Abattement de 20 % (formule PwC ; plafond éventuel non vérifié) : − 31 525 293 XAF.
- Base imposable : 126 101 174 XAF.

| De (XAF) | À (XAF) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 1 500 000 | 0,00 % | 1 500 000 | 0 |
| 1 500 000 | 1 920 000 | 5,00 % | 420 000 | 21 000 |
| 1 920 000 | 2 700 000 | 10,00 % | 780 000 | 78 000 |
| 2 700 000 | 3 600 000 | 15,00 % | 900 000 | 135 000 |
| 3 600 000 | 5 160 000 | 20,00 % | 1 560 000 | 312 000 |
| 5 160 000 | 7 500 000 | 25,00 % | 2 340 000 | 585 000 |
| 7 500 000 | 11 000 000 | 30,00 % | 3 500 000 | 1 050 000 |
| 11 000 000 | et plus | 35,00 % | 115 101 174 | 40 285 411 |

- **Impôt total : 42 466 411 XAF, soit 26,9 % du salaire brut.**
- Hypothèse : Une part (célibataire).
- Hypothèse : TCTS de 5 % sur salaires ignorée.
- Hypothèse : Variante de la note : sans abattement, 33,9 %.

## Note

IRPP à 8 tranches, taux maximal 35 %, appliqué après abattement de 20 % (formule PwC), une part pour célibataire ; plafond éventuel de l'abattement non vérifié. Variante sans abattement : 33,9 %. TCTS de 5 % sur salaires ignorée. Cas proche du haut de la bande.

## Sources

- [PwC Tax Summaries - Gabon](https://taxsummaries.pwc.com/gabon/individual/taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
