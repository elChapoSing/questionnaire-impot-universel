# Luxembourg (LU)

**Taux effectif retenu : 37,8 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : EUR. Cours supposé : 1 EUR = 1 EUR (pays de la zone euro).
- Salaire converti : 240 300 € × 1 = 240 300 EUR.
- Base imposable : 240 300 EUR.

| De (EUR) | À (EUR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 13 200 | 0,00 % | 13 200 | 0 |
| 13 200 | 15 400 | 8,00 % | 2 200 | 176 |
| 15 400 | 17 600 | 9,00 % | 2 200 | 198 |
| 17 600 | 19 800 | 10,00 % | 2 200 | 220 |
| 19 800 | 22 050 | 11,00 % | 2 250 | 248 |
| 22 050 | 24 250 | 12,00 % | 2 200 | 264 |
| 24 250 | 26 550 | 14,00 % | 2 300 | 322 |
| 26 550 | 28 800 | 16,00 % | 2 250 | 360 |
| 28 800 | 31 100 | 18,00 % | 2 300 | 414 |
| 31 100 | 33 400 | 20,00 % | 2 300 | 460 |
| 33 400 | 35 700 | 22,00 % | 2 300 | 506 |
| 35 700 | 38 000 | 24,00 % | 2 300 | 552 |
| 38 000 | 40 300 | 26,00 % | 2 300 | 598 |
| 40 300 | 42 600 | 28,00 % | 2 300 | 644 |
| 42 600 | 44 900 | 30,00 % | 2 300 | 690 |
| 44 900 | 47 200 | 32,00 % | 2 300 | 736 |
| 47 200 | 49 500 | 34,00 % | 2 300 | 782 |
| 49 500 | 51 750 | 36,00 % | 2 250 | 810 |
| 51 750 | 54 050 | 38,00 % | 2 300 | 874 |
| 54 050 | 117 450 | 39,00 % | 63 400 | 24 726 |
| 117 450 | 176 150 | 40,00 % | 58 700 | 23 480 |
| 176 150 | 234 850 | 41,00 % | 58 700 | 24 067 |
| 234 850 | et plus | 42,00 % | 5 450 | 2 289 |

- Majoration : Contribution au fonds pour l'emploi (9 % de l'impôt, classe 1, revenu imposable ajusté supérieur à 150 000 EUR) : + 9,0 % de l'impôt.
- **Impôt total : 90 923 EUR, soit 37,8 % du salaire brut.**
- Hypothèse : Barème de la classe 1 de l'ACD (23 tranches, 42 % au-delà de 234 850 EUR), tel que publié pour 2025 et reproduit par taxx.lu ; un ajustement d'indexation pour 2026 ne changerait pas le taux d'un demi-point.
- Hypothèse : Contribution au fonds pour l'emploi : 7 % de l'impôt jusqu'à 150 000 EUR de revenu imposable ajusté en classes 1 et 1a, 9 % au-delà (ACD) ; à 240 300 EUR le taux de 9 % s'applique à l'impôt entier. Sans la contribution : 34,7 %.
- Hypothèse : Revenu imposable pris égal au salaire brut, sans déductions ni cotisations sociales.

## Note

Luxembourg, classe 1 : barème à 23 tranches (42 % au-delà de 234 850 EUR) donnant 34,7 % d'impôt de barème sur 240 300 EUR, majoré de la contribution au fonds pour l'emploi de 9 % (revenu imposable ajusté supérieur à 150 000 EUR en classe 1, selon l'ACD), soit environ 37,8 %. Barème publié pour 2025 ; l'indexation 2026 n'a pas pu être vérifiée sur le site de l'ACD.

## Sources

- [ACD - Fonds pour l'emploi (contribution de 7 % ou 9 %)](https://impotsdirects.public.lu/fr/az/f/fond_empl.html) (officielle)
- [Taxx.lu - barème de la classe 1](https://taxx.lu/en/tax-return-guide/the-tax-scale-in-luxembourg) (non officielle)
- [Ma Calculatrice en ligne, barème ACD 2026](https://macalculatriceenligne.com/outils/calculatrice-fiscale-luxembourg/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
