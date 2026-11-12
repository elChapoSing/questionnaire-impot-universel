# Bhoutan (BT)

**Taux effectif retenu : 28,4 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : BTN. Cours utilisé : 1 EUR = 104,264 BTN (Yahoo Finance EURBTN=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 104,264 = 25 054 639 BTN.
- Base imposable : 25 054 639 BTN.

| De (BTN) | À (BTN) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 300 000 | 0,00 % | 300 000 | 0 |
| 300 000 | 500 000 | 5,00 % | 200 000 | 10 000 |
| 500 000 | 750 000 | 10,00 % | 250 000 | 25 000 |
| 750 000 | 1 200 000 | 15,00 % | 450 000 | 67 500 |
| 1 200 000 | 2 000 000 | 20,00 % | 800 000 | 160 000 |
| 2 000 000 | 3 500 000 | 25,00 % | 1 500 000 | 375 000 |
| 3 500 000 | et plus | 30,00 % | 21 554 639 | 6 466 392 |

- **Impôt total : 7 103 892 BTN, soit 28,4 % du salaire brut.**
- Hypothèse : Barème de l'Income Tax Act 2025 en vigueur en 2026 (notification du DRC) ; les montants fixes cumulés de la notification sont reconstitués par les taux marginaux.
- Hypothèse : Déduction forfaitaire (15 % du revenu d'emploi, plafonnée à 150 000 Nu) et autres déductions exclues, pas d'abattements personnels.

## Note

Nouveau barème Income Tax Act 2025, en vigueur 2026 : taux de 5 % à 30 %, 30 % au-delà de 3,5 M Nu. Pas de surtaxe mentionnée dans la notification.

## Sources

- [Département des recettes (DRC) - notification Income Tax Act](https://www.drc.gov.bt/wp-content/uploads/2025/12/Public-Notification-on-new-Income-Tax-Act.docx-1.pdf) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
