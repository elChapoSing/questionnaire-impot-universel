# Australie (AU)

**Taux effectif retenu : 38,3 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : AUD. Cours utilisé : 1 EUR = 1,6249 AUD (Yahoo Finance EURAUD=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 1,6249 = 390 461 AUD.
- Base imposable : 390 461 AUD.

| De (AUD) | À (AUD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 18 200 | 0,00 % | 18 200 | 0 |
| 18 200 | 45 000 | 16,00 % | 26 800 | 4 288 |
| 45 000 | 135 000 | 30,00 % | 90 000 | 27 000 |
| 135 000 | 190 000 | 37,00 % | 55 000 | 20 350 |
| 190 000 | et plus | 45,00 % | 200 461 | 90 207 |
| 0 | et plus | 2,00 % | 390 461 | 7 809 |

- **Impôt total : 149 655 AUD, soit 38,3 % du salaire brut.**
- Hypothèse : Barème des résidents 2025-26 de l'ATO : 0 % jusqu'à 18 200 AUD, 16 %, 30 %, 37 % et 45 % au-delà de 190 000 AUD ; la ligne finale à 2 % sur tout le revenu représente la contribution Medicare (2 %).
- Hypothèse : Le taux est assez sensible au change : environ 38,2 % à 1,62 contre 39 % à 1,75.

## Note

Tranche de 45 % plus 2 % de Medicare.

## Sources

- [Administration fiscale australienne (ATO)](https://www.ato.gov.au/tax-rates-and-codes/tax-rates-australian-residents) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
