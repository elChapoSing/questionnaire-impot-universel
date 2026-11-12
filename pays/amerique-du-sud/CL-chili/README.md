# Chili (CL)

**Taux effectif retenu : 27,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : CLP. Cours utilisé : 1 EUR = 1 093,45 CLP (Yahoo Finance EURCLP=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 1 093,45 = 262 756 035 CLP.
- Base imposable : 262 756 035 CLP.

| De (CLP) | À (CLP) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 11 265 804 | 0,00 % | 11 265 804 | 0 |
| 11 265 804 | 25 035 120 | 4,00 % | 13 769 316 | 550 773 |
| 25 035 120 | 41 725 200 | 8,00 % | 16 690 080 | 1 335 206 |
| 41 725 200 | 58 415 280 | 13,50 % | 16 690 080 | 2 253 161 |
| 58 415 280 | 75 105 360 | 23,00 % | 16 690 080 | 3 838 718 |
| 75 105 360 | 100 140 480 | 30,40 % | 25 035 120 | 7 610 676 |
| 100 140 480 | 258 696 240 | 35,00 % | 158 555 760 | 55 494 516 |
| 258 696 240 | et plus | 40,00 % | 4 059 795 | 1 623 918 |

- **Impôt total : 72 706 969 CLP, soit 27,7 % du salaire brut.**
- Hypothèse : Impôt global complémentaire annuel exprimé en UTA (UTA 834 504 pesos) : exonéré jusqu'à 13,5 UTA, puis 4 %, 8 %, 13,5 %, 23 %, 30,4 %, 35 % (de 120 à 310 UTA) et 40 %.
- Hypothèse : Les tranches inférieures à 120 UTA sont celles du barème standard et n'ont pas été relues dans la circulaire du SII : à vérifier. Aucun crédit ni déduction ; cotisations sociales ignorées.
- Hypothèse : La note donne une fourchette de 26,5 % à 28,0 % selon le change (950 à 1 150 pesos pour 1 EUR).

## Note

Cours Yahoo EURCLP=X du 13/11/2026 : 1 EUR = 1093.45 CLP (hypothèse initiale : 1059). Taux recalculé : 27,7 % (avant : 27,4 %). Les chiffres de change et de taux cités plus bas datent de l'hypothèse initiale. Impôt global complémentaire : 35 % entre 120 et 310 UTA, 40 % au-delà (UTA : 834 504 pesos). À ce revenu, taux de 26,5 % à 28,0 % pour 950 à 1 150 pesos pour 1 €. Change supposé : 1 059 pesos pour 1 €. Proche de la borne de 26 % à la limite basse du change.

## Sources

- [Service des impôts internes du Chili (SII), circulaire n° 29 de 2026 : tables en UTM](https://www.sii.cl/normativa_legislacion/circulares/2026/circu29.pdf) (officielle)
- [SII, circulaire n° 67 de 2025 : valeurs de l'UTM et de l'UTA](https://www.sii.cl/normativa_legislacion/circulares/2025/circu67.pdf) (officielle)
- [Rankia Chili, table de l'impôt global complémentaire 2026](https://www.rankia.cl/blog/sii/2457838-impuesto-global-complementario-tabla-calculo-ejemplos) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
