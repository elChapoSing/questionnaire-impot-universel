# Montserrat (MS)

**Taux effectif retenu : 36,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : XCD. Cours utilisé : 1 EUR = 2,9903 XCD (Yahoo Finance EURXCD=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 2,9903 = 718 564 XCD.
- Base imposable : 718 564 XCD.

| De (XCD) | À (XCD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 18 000 | 0,00 % | 18 000 | 0 |
| 18 000 | 25 000 | 5,00 % | 7 000 | 350 |
| 25 000 | 35 000 | 20,00 % | 10 000 | 2 000 |
| 35 000 | 45 000 | 25,00 % | 10 000 | 2 500 |
| 45 000 | 150 000 | 30,00 % | 105 000 | 31 500 |
| 150 000 | et plus | 40,00 % | 568 564 | 227 425 |

- **Impôt total : 263 775 XCD, soit 36,7 % du salaire brut.**
- Hypothèse : Barème 2024 (Income and Corporation Tax (Amendment) Act 2024), via Orbitax ; source secondaire non officielle.

## Note

Cours Yahoo EURXCD=X du 13/11/2026 : 1 EUR = 2.990276985 XCD (hypothèse initiale : 3.105). Taux recalculé : 36,7 % (avant : 36,8 %). Les chiffres de change et de taux cités plus bas datent de l'hypothèse initiale. Barème 2024 : franchise 18 000 XCD puis 5 %, 20 %, 25 %, 30 %, 40 % au-delà de 150 000. Hypothèse change : 1 EUR = 3,105 XCD, soit environ 746 100 XCD. Source secondaire non officielle, taux supérieurs à vérifier.

## Sources

- [Orbitax - Montserrat relève l'abattement et les tranches](https://orbitax.com/news/country/article/Montserrat-Increases-Personal--56360) (non officielle)
- [Expanship - Montserrat personal income tax](https://www.expanship.com/ms/blog/montserrat-personal-income-tax) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
