# Saint-Martin (partie néerlandaise) (SX)

**Taux effectif retenu : 41,2 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : XCG. Cours supposé : 1 EUR = 2,06 XCG (hypothèse reprise de la note : 1,79 XCG par USD, EUR/USD 1,15).
- Salaire converti : 240 300 € × 2,06 = 495 018 XCG.
- Base imposable : 495 018 XCG.

| De (XCG) | À (XCG) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 36 576 | 12,50 % | 36 576 | 4 572 |
| 36 576 | 54 864 | 20,00 % | 18 288 | 3 658 |
| 54 864 | 76 200 | 26,25 % | 21 336 | 5 601 |
| 76 200 | 114 297 | 33,75 % | 38 097 | 12 858 |
| 114 297 | 161 540 | 40,00 % | 47 243 | 18 897 |
| 161 540 | et plus | 47,50 % | 333 478 | 158 402 |

- **Impôt total : 203 987 XCG, soit 41,2 % du salaire brut.**
- Hypothèse : Barème 2026 (Deloitte) avec surtaxe de 25 % déjà incluse dans les taux. Cotisations exclues.

## Note

Barème 2026 en XCG, taux marginal maximal 47,5 % (surtaxe de 25 % incluse) au-delà de 161 540. Hypothèse change : 1 EUR = 2,06 XCG, soit environ 494 700 XCG. Cotisations exclues.

## Sources

- [Deloitte - Sint Maarten tax highlights 2026](https://www.deloitte.com/content/dam/assets-shared/docs/services/tax/2026/dttl-tax-sintmaartenhighlights-2026.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
