# Mexique (MX)

**Taux effectif retenu : 31,6 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : MXN. Cours utilisé : 1 EUR = 20,5907 MXN (Yahoo Finance EURMXN=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 20,5907 = 4 947 957 MXN.
- Base imposable : 4 947 957 MXN.

| De (MXN) | À (MXN) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 10 135 | 1,92 % | 10 135 | 195 |
| 10 135 | 86 022 | 6,40 % | 75 887 | 4 857 |
| 86 022 | 151 176 | 10,88 % | 65 154 | 7 089 |
| 151 176 | 175 736 | 16,00 % | 24 559 | 3 930 |
| 175 736 | 210 404 | 17,92 % | 34 668 | 6 213 |
| 210 404 | 424 354 | 21,36 % | 213 950 | 45 700 |
| 424 354 | 668 840 | 23,52 % | 244 486 | 57 503 |
| 668 840 | 1 276 926 | 30,00 % | 608 086 | 182 426 |
| 1 276 926 | 1 702 568 | 32,00 % | 425 642 | 136 205 |
| 1 702 568 | 5 107 704 | 34,00 % | 3 245 389 | 1 103 432 |
| 5 107 704 | et plus | 35,00 % | 0 | 0 |

- **Impôt total : 1 547 549 MXN, soit 31,3 % du salaire brut.**
- Hypothèse : Tarif annuel 2026 (articles 96/152 LISR, Annexe 8 RMF 2026) converti en tranches marginales ; les montants fixes du tarif sont retrouvés par cumul.
- Hypothèse : Aucune déduction personnelle ; source officielle non lue (relais privés).

## Note

Cours Yahoo EURMXN=X du 13/11/2026 : 1 EUR = 20.59075 MXN (hypothèse initiale : 20.75). Taux recalculé : 31,6 % (avant : 31,6 %). Les chiffres de change et de taux cités plus bas datent de l'hypothèse initiale. Barème annuel 2026 (articles 96 et 152 de la loi sur l'impôt sur le revenu) : de 1,92 % à 35 %, le taux de 35 % commençant à environ 4,5 millions de pesos. Résultat de 31,4 % à 31,8 % pour 19,5 à 22 pesos pour 1 €. Aucune déduction personnelle. Source officielle non lue (texte de l'Annexe 8, via des relais privés).

## Sources

- [SDV, tables d'impôt 2026 (articles 96 et 152 LISR)](https://sdv.com.mx/recursos/tablas-isr-2026/) (non officielle)
- [Contadormx, tables ISR 2026](https://contadormx.com/tablas-isr-2026/) (non officielle)
- [Praxium, article 152 LISR : barème annuel](https://praxiumconsultores.com/blog/art-152-lisr-tarifa-anual-del-isr) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
