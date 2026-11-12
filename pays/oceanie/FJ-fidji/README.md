# Fidji (FJ)

**Taux effectif retenu : 28,1 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : FJD. Cours supposé : 1 EUR = 2,58 FJD (hypothèse reprise de la note (2,58 dollars fidjiens pour 1 EUR)).
- Salaire converti : 240 300 € × 2,58 = 619 974 FJD.
- Base imposable : 619 974 FJD.

| De (FJD) | À (FJD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 30 000 | 0,00 % | 30 000 | 0 |
| 30 000 | 50 000 | 18,00 % | 20 000 | 3 600 |
| 50 000 | 270 000 | 20,00 % | 220 000 | 44 000 |
| 270 000 | 300 000 | 33,00 % | 30 000 | 9 900 |
| 300 000 | 350 000 | 34,00 % | 50 000 | 17 000 |
| 350 000 | 400 000 | 35,00 % | 50 000 | 17 500 |
| 400 000 | 450 000 | 36,00 % | 50 000 | 18 000 |
| 450 000 | 500 000 | 37,00 % | 50 000 | 18 500 |
| 500 000 | 1 000 000 | 38,00 % | 119 974 | 45 590 |
| 1 000 000 | et plus | 39,00 % | 0 | 0 |

- **Impôt total : 174 090 FJD, soit 28,1 % du salaire brut.**
- Hypothèse : Barème des résidents en vigueur depuis le 1er janvier 2024 (PwC, règlement de 2023) : 0 % jusqu'à 30 000, 18 %, 20 %, puis de 33 % à 39 % par paliers de 50 000 au-delà de 270 000 (39 % au-delà d'un million).
- Hypothèse : Aucun impôt de responsabilité sociale distinct (intégré au barème depuis 2024).

## Note

Barème des résidents (règlement de 2023, structure inchangée au budget 2025-26) : 0 % jusqu'à 30 000 dollars fidjiens, 18 %, 20 %, puis de 33 % à 39 % au-delà de 270 000 (39 % au-delà d'un million). Change supposé : 2,58 dollars fidjiens pour 1 €.

## Sources

- [PwC Worldwide Tax Summaries](https://taxsummaries.pwc.com/fiji/individual/taxes-on-personal-income) (non officielle)
- [Règlement sur les taux d'impôt 2023 (texte hébergé par PacLII)](https://paclii.org/fj/legis/sub_leg/ita2015itotalr2023l552023646.pdf) (non officielle)
- [Munro Leys, taux 2024](https://www.munroleyslaw.com/?p=438) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
