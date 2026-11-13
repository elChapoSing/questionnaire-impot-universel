# Tadjikistan (TJ)

**Taux effectif retenu : entre 12,0 et 13,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Concerné·e (condition remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : TJS. Cours utilisé : 1 EUR = 10,2328 TJS (Yahoo Finance EURTJS=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 10,2328 = 2 458 942 TJS.
- Base imposable : 2 458 942 TJS.

| De (TJS) | À (TJS) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 10 080 | 8,00 % | 10 080 | 806 |
| 10 080 | et plus | 13,00 % | 2 448 862 | 318 352 |

- **Impôt total : 319 158 TJS, soit 13,0 % du salaire brut.**
- Hypothèse : Variante TaxAtlas 2026 : 8 % puis 13 % au-delà de 840 somonis par mois (10 080 par an). Variante PwC (12 % au-delà d'une déduction personnelle) : environ 12 %, d'où la fourchette de la note.

## Note

Sources divergentes : TaxAtlas 2026 indique 8 % puis 13 % au-delà de 840 somonis par mois ; PwC (revu en 2024) indique 12 % au-delà d'une déduction personnelle. Effet de la tranche à 8 % négligeable à ce niveau de revenu.

## Sources

- [TaxAtlas - Tadjikistan, impôt sur le revenu](https://taxatlas.io/country/tajikistan/income-tax) (non officielle)
- [PwC Tax Summaries - Tadjikistan](https://taxsummaries.pwc.com/tajikistan/individual/taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
