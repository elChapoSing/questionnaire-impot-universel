# Iran (IR)

**Taux effectif retenu : entre 29,6 et 35,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : IRR. Cours utilisé : 1 EUR = 2 109 005,274 IRR (Yahoo Finance EURIRR=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 2 109 005,274 = 506 793 967 342 IRR.
- Base imposable : 506 793 967 342 IRR.

| De (IRR) | À (IRR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 720 000 000 | 0,00 % | 720 000 000 | 0 |
| 720 000 000 | 1 200 000 000 | 10,00 % | 480 000 000 | 48 000 000 |
| 1 200 000 000 | 1 680 000 000 | 15,00 % | 480 000 000 | 72 000 000 |
| 1 680 000 000 | 2 400 000 000 | 20,00 % | 720 000 000 | 144 000 000 |
| 2 400 000 000 | 3 600 000 000 | 25,00 % | 1 200 000 000 | 300 000 000 |
| 3 600 000 000 | 6 000 000 000 | 30,00 % | 2 400 000 000 | 720 000 000 |
| 6 000 000 000 | et plus | 35,00 % | 500 793 967 342 | 175 277 888 570 |

- **Impôt total : 176 561 888 570 IRR, soit 34,8 % du salaire brut.**
- Hypothèse : Barème progressif 2026 (TaxAtlas, source secondaire), indexé sur l'inflation.
- Hypothèse : Change très volatil mais taux peu sensible. Le barème salarial spécifique pourrait plafonner à 30 % (variante basse de 29,5 %, voir la fourchette).

## Note

Cours Yahoo EURIRR=X du 13/11/2026 : 1 EUR = 2109005.274 IRR (hypothèse initiale : 1600000). Taux recalculé : 34,9 % (avant : 34,8 %). Les chiffres de change et de taux cités plus bas datent de l'hypothèse initiale. Barème progressif 2026 de 0 % à 35 % au-delà de 6 milliards IRR ; hypothèse de change très volatile (environ 1,6 M IRR par EUR), mais taux peu sensible car la tranche haute domine. Incertitude : le barème salarial spécifique pourrait plafonner à 30 %. Sources secondaires uniquement.

## Sources

- [TaxAtlas - Iran, impôt sur le revenu](https://taxatlas.io/country/iran/income-tax) (non officielle)
- [Rivermate - Iran, fiscalité](https://rivermate.com/guides/iran/taxes) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
