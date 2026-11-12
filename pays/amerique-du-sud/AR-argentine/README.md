# Argentine (AR)

**Taux effectif retenu : 33,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : ARS. Cours utilisé : 1 EUR = 1 708,828 ARS (Yahoo Finance EURARS=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 1 708,828 = 410 631 368 ARS.
- Base imposable : 410 631 368 ARS.

| De (ARS) | À (ARS) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 2 000 030 | 5,00 % | 2 000 030 | 100 002 |
| 2 000 030 | 4 000 060 | 9,00 % | 2 000 030 | 180 003 |
| 4 000 060 | 6 000 090 | 12,00 % | 2 000 030 | 240 004 |
| 6 000 090 | 9 000 135 | 15,00 % | 3 000 045 | 450 007 |
| 9 000 135 | 18 000 271 | 19,00 % | 9 000 135 | 1 710 026 |
| 18 000 271 | 27 000 406 | 23,00 % | 9 000 135 | 2 070 031 |
| 27 000 406 | 40 500 609 | 27,00 % | 13 500 203 | 3 645 055 |
| 40 500 609 | 60 750 914 | 31,00 % | 20 250 305 | 6 277 594 |
| 60 750 914 | et plus | 35,00 % | 349 880 454 | 122 458 159 |

- **Impôt total : 137 130 880 ARS, soit 33,4 % du salaire brut.**
- ⚠ Écart avec le taux retenu (33,9 %) : à vérifier.
- Hypothèse : Barème annuel de l'article 94 en vigueur de janvier à juin 2026 : première tranche jusqu'à 2 000 030,09 pesos, bornes suivantes à 2, 3, 4,5, 9, 13,5, 20,25 et 30,375 fois ce montant (35 % à partir de 60 750 913,96, comme dans la note). Bornes recalculées à partir de ce multiple ; à comparer au PDF officiel de l'ARCA.
- Hypothèse : Aucune déduction personnelle, aucun abattement spécial salariés ni cotisations déduites : tout le salaire brut est la base imposable.

## Note

Cours Yahoo EURARS=X du 13/11/2026 : 1 EUR = 1708.828 ARS (hypothèse initiale : 1850). Taux recalculé : 33,9 % (avant : 34 %). Les chiffres de change et de taux cités plus bas datent de l'hypothèse initiale. Quatrième catégorie (salariés) : barème de 5 % à 35 %, le taux de 35 % commençant à 60,75 millions de pesos par an. À ce revenu, la quasi-totalité est taxée à 35 %. Estimation à partir de ce barème (tranches intermédiaires non reprises une à une) : de 31 % à 35 % quel que soit le change, très volatil. Source officielle (ARCA) non lue.

## Sources

- [calcularsueldo.com.ar, ARCA a officialisé les barèmes de 2026](https://calcularsueldo.com.ar/ganancias/13161/arca-oficializo-las-escalas-y-deducciones-de-ganancias-en-2026.html) (non officielle)
- [Canal26, barème de l'article 94 depuis février 2026](https://www.canal26.com/economia/2026/02/17/impuesto-a-las-ganancias-2026-asi-quedan-el-piso-salarial-las-deducciones-y-las-nuevas-escalas-desde-febrero/) (non officielle)
- [Hacecuentas, barème de l'impôt sur les gains 2026](https://hacecuentas.com/blog/escala-ganancias-2026-argentina-tabla-completa-explicada) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
