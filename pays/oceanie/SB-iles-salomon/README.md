# Îles Salomon (SB)

**Taux effectif retenu : entre 39,1 et 39,6 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : SBD. Cours utilisé : 1 EUR = 8,9521 SBD (Yahoo Finance EURSBD=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 8,9521 = 2 151 196 SBD.
- Base imposable : 2 151 196 SBD.

| De (SBD) | À (SBD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 15 000 | 0,00 % | 15 000 | 0 |
| 15 000 | 30 000 | 11,00 % | 15 000 | 1 650 |
| 30 000 | 60 000 | 23,00 % | 30 000 | 6 900 |
| 60 000 | 90 000 | 35,00 % | 30 000 | 10 500 |
| 90 000 | et plus | 40,00 % | 2 061 196 | 824 479 |

- **Impôt total : 843 529 SBD, soit 39,2 % du salaire brut.**
- Hypothèse : Barème des résidents (TaxAtlas) : franchise de 15 000, puis 11 %, 23 %, 35 % jusqu'à 90 000 et 40 % au-delà. Seuils légèrement divergents selon les sources (40 % dès 60 000 dans l'autre variante, soit 39,3 % environ).
- Hypothèse : Sources non officielles, à confirmer auprès de l'administration fiscale.

## Note

Cours Yahoo EURSBD=X du 13/11/2026 : 1 EUR = 8.952128379 SBD (hypothèse initiale : 9.7). Taux recalculé : 39,3 % (avant : 39,4 %). Les chiffres de change et de taux cités plus bas datent de l'hypothèse initiale. Barème progressif des résidents en SBD : 11 %, 23 %, 35 % puis 40 % au-delà de 60 000 ou 90 000 selon la source ; franchise de 15 000 environ. Hypothèse : 1 EUR = 9,7 SBD (environ 2 330 000 SBD). Sources non officielles, seuils légèrement divergents mais effet minime sur le taux effectif ; à confirmer auprès de l'administration fiscale.

## Sources

- [TaxAtlas - Solomon Islands](https://taxatlas.io/country/solomon-islands) (non officielle)
- [Rivermate - Solomon Islands taxes](https://rivermate.com/guides/solomon-islands/taxes) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
