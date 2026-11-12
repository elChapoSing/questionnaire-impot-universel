# Malaisie (MY)

**Taux effectif retenu : 25,2 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : MYR. Cours supposé : 1 EUR = 4,8 MYR (aucun cours dans la note ; valeur raisonnable retenue, à remplacer par le cours Yahoo EURMYR=X).
- Salaire converti : 240 300 € × 4,8 = 1 153 440 MYR.
- Base imposable : 1 153 440 MYR.

| De (MYR) | À (MYR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 5 000 | 0,00 % | 5 000 | 0 |
| 5 000 | 20 000 | 1,00 % | 15 000 | 150 |
| 20 000 | 35 000 | 3,00 % | 15 000 | 450 |
| 35 000 | 50 000 | 6,00 % | 15 000 | 900 |
| 50 000 | 70 000 | 11,00 % | 20 000 | 2 200 |
| 70 000 | 100 000 | 19,00 % | 30 000 | 5 700 |
| 100 000 | 400 000 | 25,00 % | 300 000 | 75 000 |
| 400 000 | 600 000 | 26,00 % | 200 000 | 52 000 |
| 600 000 | 2 000 000 | 28,00 % | 553 440 | 154 963 |
| 2 000 000 | et plus | 30,00 % | 0 | 0 |

- **Impôt total : 291 363 MYR, soit 25,3 % du salaire brut.**
- Hypothèse : Barème des résidents ; 30 % au-delà de 2 millions de ringgit.
- Hypothèse : Abattement personnel de 9 000 ringgit et autres déductions exclus.

## Note

Barème progressif jusqu'à 30 % au-delà de 2 millions de ringgit.

## Sources

- [LHDN, taux de l'impôt (YA 2023-2025)](https://www.hasil.gov.my/en/individu/kadar-cukai/) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
