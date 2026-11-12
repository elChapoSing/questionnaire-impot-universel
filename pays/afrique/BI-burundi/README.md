# Burundi (BI)

**Taux effectif retenu : 29,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : BIF. Cours utilisé : 1 EUR = 3 353,8 BIF (Yahoo Finance EURBIF=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 3 353,8 = 805 918 140 BIF.
- Base imposable : 805 918 140 BIF.

| De (BIF) | À (BIF) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 1 800 000 | 0,00 % | 1 800 000 | 0 |
| 1 800 000 | 3 600 000 | 20,00 % | 1 800 000 | 360 000 |
| 3 600 000 | et plus | 30,00 % | 802 318 140 | 240 695 442 |

- **Impôt total : 241 055 442 BIF, soit 29,9 % du salaire brut.**
- Hypothèse : Barème officiel de l'OBR (loi n° 1/02 du 24 janvier 2013) : 0 % jusqu'à 150 000 BIF par mois, 20 % de 150 000 à 300 000, 30 % au-delà, soit 1,8 et 3,6 millions de BIF par an.
- Hypothèse : Le barème à 25 % et 35 % d'un simulateur privé (AfroTools) n'est confirmé par aucune source officielle ; le taux maximal de 35 % est celui de l'ancien code de 1963, remplacé en 2013. La loi de finances 2026-2027 (loi n° 1/10 du 30 juin 2026) n'a pas modifié ce barème d'après la synthèse DLA Piper, sans certitude.
- Hypothèse : Cotisation INSS (4 %, plafonnée) non déduite.

## Note

Cours Yahoo EURBIF=X du 13/11/2026 : 1 EUR = 3353.8 BIF (hypothèse initiale : 3400). Taux recalculé : 29,9 % (avant : 29,9 %). Les chiffres de change et de taux cités plus bas datent de l'hypothèse initiale. Barème officiel de l'OBR (loi n° 1/02 de 2013) : 0 % jusqu'à 1,8 million de BIF par an, 20 % jusqu'à 3,6 millions, 30 % au-delà ; environ 29,9 % avec 1 EUR = 3 400 BIF (hypothèse). Le barème à 35 % d'un simulateur privé n'est pas confirmé. La synthèse DLA Piper de la loi de finances 2026-2027 ne signale pas de changement du barème.

## Sources

- [OBR - Informations de base (barème annuel de l'impôt, loi n° 1/02 du 24 janvier 2013)](https://mail.obr.bi/images/PDF/Depliant_Info_de_base_FR_final_site.pdf) (officielle)
- [OBR - mode de calcul de l'IPR](https://www.obr.bi/images/stories/download/MODE_CALCUL_IPR.pdf) (officielle)
- [DLA Piper Africa - Réformes budgétaires 2026-2027](https://www.dlapiperafrica.com/export/sites/africa/burundi/downloads/2026/Reformes-budgetaires.pdf_2063069264.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
