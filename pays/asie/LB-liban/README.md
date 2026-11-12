# Liban (LB)

**Taux effectif retenu : entre 24,7 et 24,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : LBP. Cours utilisé : 1 EUR = 99 333,3 LBP (Yahoo Finance EURLBP=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 99 333,3 = 23 869 791 990 LBP.
- Base imposable : 23 869 791 990 LBP.

| De (LBP) | À (LBP) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 18 000 000 | 2,00 % | 18 000 000 | 360 000 |
| 18 000 000 | 45 000 000 | 4,00 % | 27 000 000 | 1 080 000 |
| 45 000 000 | 90 000 000 | 7,00 % | 45 000 000 | 3 150 000 |
| 90 000 000 | 150 000 000 | 11,00 % | 60 000 000 | 6 600 000 |
| 150 000 000 | 225 000 000 | 15,00 % | 75 000 000 | 11 250 000 |
| 225 000 000 | 675 000 000 | 20,00 % | 450 000 000 | 90 000 000 |
| 675 000 000 | et plus | 25,00 % | 23 194 791 990 | 5 798 697 998 |

- **Impôt total : 5 911 137 998 LBP, soit 24,8 % du salaire brut.**
- Hypothèse : Barème des salaires depuis 2022 (PwC) : 2 % à 25 %, 25 % au-delà de 675 M LBP ; intermédiaires reconstitués à partir de l'ancien barème multiplié par 3.
- Hypothèse : Variante TaxAtlas (25 % au-delà de 120 M LBP) : environ 24,9 %, d'où la fourchette de la note. Abattements exclus.

## Note

Taxe sur les salaires progressive de 2 % à 25 % ; taux marginal de 25 % au-delà de 675 M LBP (PwC) ou 120 M LBP (TaxAtlas) selon la source, d'où la fourchette.

## Sources

- [PwC Tax Summaries - Liban](https://taxsummaries.pwc.com/lebanon/individual/taxes-on-personal-income) (non officielle)
- [TaxAtlas - Liban, impôt sur le revenu](https://taxatlas.io/country/lebanon/income-tax) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
