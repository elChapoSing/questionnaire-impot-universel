# Porto Rico (PR)

**Taux effectif retenu : 28,5 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : USD. Cours utilisé : 1 EUR = 1,1065 USD (Yahoo Finance EURUSD=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 1,1065 = 265 884 USD.
- Base imposable : 265 884 USD.

| De (USD) | À (USD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 9 000 | 0,00 % | 9 000 | 0 |
| 9 000 | 25 000 | 7,00 % | 16 000 | 1 120 |
| 25 000 | 41 500 | 14,00 % | 16 500 | 2 310 |
| 41 500 | 61 500 | 25,00 % | 20 000 | 5 000 |
| 61 500 | et plus | 33,00 % | 204 384 | 67 447 |

- **Impôt total : 75 877 USD, soit 28,5 % du salaire brut.**
- Hypothèse : Barème actuel ; les bornes 25 000 et 41 500 USD sont reconstituées (Deloitte 2026), sans effet au-delà de 61 500.
- Hypothèse : Réforme en discussion (33 % limité aux revenus au-dessus de 150 000), non votée.

## Note

Barème actuel de Porto Rico : 0 % jusqu'à 9 000 USD, 7 %, 14 %, 25 % puis 33 % au-delà de 61 500. Réforme en discussion (taux de 33 % limité aux revenus supérieurs à 150 000), non votée : taux possiblement plus bas.

## Sources

- [Deloitte - Puerto Rico tax highlights 2026](https://www.deloitte.com/content/dam/assets-shared/docs/services/tax/2026/dttl-tax-puertoricohighlights-2026.pdf) (non officielle)
- [San Juan Daily Star - réforme fiscale phase 2](https://www.sanjuandailystar.com/post/governor-submits-2nd-phase-of-tax-reform-to-legislature) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
