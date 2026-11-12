# Curaçao (CW)

**Taux effectif retenu : 39,3 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : XCG. Cours utilisé : 1 EUR = 1,9978 XCG (Yahoo Finance EURXCG=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 1,9978 = 480 083 XCG.
- Base imposable : 480 083 XCG.

| De (XCG) | À (XCG) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 39 094 | 9,75 % | 39 094 | 3 812 |
| 39 094 | 52 127 | 15,00 % | 13 033 | 1 955 |
| 52 127 | 78 190 | 23,00 % | 26 063 | 5 994 |
| 78 190 | 110 769 | 30,00 % | 32 579 | 9 774 |
| 110 769 | 162 894 | 37,50 % | 52 125 | 19 547 |
| 162 894 | et plus | 46,50 % | 317 189 | 147 493 |

- **Impôt total : 188 575 XCG, soit 39,3 % du salaire brut.**
- Hypothèse : Barème 2026 (arrêté ministériel, gobiernu.cw).
- Hypothèse : Crédit de base de 2 915 XCG non appliqué (effet d'environ 0,6 point).
- Hypothèse : Peu sensible au change.

## Note

Barème 2026 de Curaçao, tranche supérieure à 46,5 % au-delà de 162 894 XCG. Crédit de base de 2 915 non appliqué.

## Sources

- [Gouvernement de Curaçao - arrêté ministériel montants IR 2026](https://gobiernu.cw/wp-content/uploads/2025/12/226.-Min-reg-vaststelling-bedragen-ib-2026.pdf) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
