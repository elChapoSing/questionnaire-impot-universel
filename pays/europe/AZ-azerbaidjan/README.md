# Azerbaïdjan (AZ)

**Taux effectif retenu : entre 12,6 et 24,2 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement en dessous du seuil (condition remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : AZN. Cours utilisé : 1 EUR = 1,8832 AZN (Yahoo Finance EURAZN=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 1,8832 = 452 533 AZN.
- Base imposable : 452 533 AZN.

| De (AZN) | À (AZN) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 30 000 | 3,00 % | 30 000 | 900 |
| 30 000 | 96 000 | 10,00 % | 66 000 | 6 600 |
| 96 000 | et plus | 14,00 % | 356 533 | 49 915 |

- **Impôt total : 57 415 AZN, soit 12,7 % du salaire brut.**
- Hypothèse : Barème mensuel de la note converti en annuel : 3 % jusqu'à 2 500 AZN/mois (30 000 par an), 10 % jusqu'à 8 000 (96 000 par an), 14 % au-delà (secteur privé non pétrolier).
- Hypothèse : Variante secteur pétrole/gaz ou public (14 % jusqu'à 30 000, puis 25 %) : environ 24,3 %.

## Note

Barème général 2026 (secteur privé non pétrolier) : 3 % jusqu'à 2 500 AZN/mois, 10 % jusqu'à 8 000, 14 % au-delà. Si secteur pétrole/gaz ou public : 14 % puis 25 % au-delà de 2 500, soit environ 24,2 %. Sources partiellement divergentes sur les tranches hautes.

## Sources

- [PwC Tax Summaries - Azerbaïdjan](https://taxsummaries.pwc.com/Azerbaijan/Individual/Taxes-on-personal-income) (non officielle)
- [APA - taux d'impôt sur le revenu 2026](https://en.apa.az/finance/azerbaijan-implements-regions-lowest-income-tax-rates-under-new-phased-approach-says-deputy-minister-482952) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
