# Chypre (CY)

**Taux effectif retenu : 30,1 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : EUR. Cours utilisé : 1 EUR = 1 EUR (pays en euro, change 1).
- Salaire converti : 240 300 € × 1 = 240 300 EUR.
- Base imposable : 240 300 EUR.

| De (EUR) | À (EUR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 22 000 | 0,00 % | 22 000 | 0 |
| 22 000 | 32 000 | 20,00 % | 10 000 | 2 000 |
| 32 000 | 42 000 | 25,00 % | 10 000 | 2 500 |
| 42 000 | 72 000 | 30,00 % | 30 000 | 9 000 |
| 72 000 | et plus | 35,00 % | 168 300 | 58 905 |

- **Impôt total : 72 405 EUR, soit 30,1 % du salaire brut.**
- Hypothèse : Barème 2026 : 0 % jusqu'à 22 000 €, 20 %, 25 %, 30 % et 35 % au-delà de 72 000 €.
- Hypothèse : Cotisations sociales et contribution GESY exclues.

## Note

Barème 2026 : 0 % jusqu'à 22 000 €, puis 20 %, 25 %, 30 % et 35 % au-delà de 72 000 €.

## Sources

- [Business in Cyprus, portail du gouvernement chypriote](https://www.businessincyprus.gov.cy/business-sectors/registering-for-income-tax-and-value-added-tax/) (officielle)
- [EY Chypre, Tax Legi février 2026](https://www.ey.com/en_cy/technical/tax-alert/tax-legi-february-2026) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
