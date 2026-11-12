# Thaïlande (TH)

**Taux effectif retenu : 29,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : THB. Cours supposé : 1 EUR = 38 THB (aucun cours dans la note ; valeur raisonnable retenue, à remplacer par le cours Yahoo EURTHB=X).
- Salaire converti : 240 300 € × 38 = 9 131 400 THB.
- Base imposable : 9 131 400 THB.

| De (THB) | À (THB) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 150 000 | 0,00 % | 150 000 | 0 |
| 150 000 | 300 000 | 5,00 % | 150 000 | 7 500 |
| 300 000 | 500 000 | 10,00 % | 200 000 | 20 000 |
| 500 000 | 750 000 | 15,00 % | 250 000 | 37 500 |
| 750 000 | 1 000 000 | 20,00 % | 250 000 | 50 000 |
| 1 000 000 | 2 000 000 | 25,00 % | 1 000 000 | 250 000 |
| 2 000 000 | 5 000 000 | 30,00 % | 3 000 000 | 900 000 |
| 5 000 000 | et plus | 35,00 % | 4 131 400 | 1 445 990 |

- **Impôt total : 2 710 990 THB, soit 29,7 % du salaire brut.**
- Hypothèse : Barème progressif jusqu'à 35 % au-delà de 5 millions de bahts.
- Hypothèse : Déduction forfaitaire pour frais (50 %, plafonnée à 100 000) et déductions personnelles exclues.

## Note

Barème progressif jusqu'à 35 %.

## Sources

- [Revenue Department de Thaïlande](https://www.rd.go.th/english/6045.html) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
