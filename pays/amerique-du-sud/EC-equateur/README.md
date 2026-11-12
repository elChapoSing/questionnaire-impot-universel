# Équateur (EC)

**Taux effectif retenu : 31,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : USD. Cours supposé : 1 EUR = 1,16 USD (hypothèse (la note ne donne aucun cours) : environ 1,16 dollar pour 1 EUR, à remplacer par le cours Yahoo EURUSD=X ; l'Équateur utilise le dollar).
- Salaire converti : 240 300 € × 1,16 = 278 748 USD.
- Base imposable : 278 748 USD.

| De (USD) | À (USD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 12 208 | 0,00 % | 12 208 | 0 |
| 12 208 | 15 549 | 5,00 % | 3 341 | 167 |
| 15 549 | 20 188 | 10,00 % | 4 639 | 464 |
| 20 188 | 26 700 | 12,00 % | 6 512 | 781 |
| 26 700 | 35 136 | 15,00 % | 8 436 | 1 265 |
| 35 136 | 46 575 | 20,00 % | 11 439 | 2 288 |
| 46 575 | 62 005 | 25,00 % | 15 430 | 3 858 |
| 62 005 | 82 679 | 30,00 % | 20 674 | 6 202 |
| 82 679 | 109 956 | 35,00 % | 27 277 | 9 547 |
| 109 956 | et plus | 37,00 % | 168 792 | 62 453 |

- **Impôt total : 87 025 USD, soit 31,2 % du salaire brut.**
- Hypothèse : Barème 2026 du SRI pour les personnes physiques (résolution NAC-DGERCGC25-00000043), fraction exonérée de 12 208 dollars incluse comme tranche à 0 %.
- Hypothèse : Avant rabais pour dépenses personnelles ; cotisations sociales (IESS) non déduites.

## Note

Barème 2026 : fraction exonérée de 12 208 dollars, puis de 5 % à 37 % (37 % au-delà de 109 956 dollars). Avant rabais pour dépenses personnelles. Le pays utilise le dollar : seul le cours euro-dollar joue.

## Sources

- [NMS Law, barèmes de l'impôt sur le revenu 2026 en Équateur](https://nmslaw.com.ec/?p=15946) (non officielle)
- [El Universo, ce qu'il faut savoir de l'impôt sur le revenu 2026](https://www.eluniverso.com/noticias/economia/lo-que-debe-saber-sobre-el-impuesto-a-la-renta-de-2026-nota/) (non officielle)
- [Elyex, tables officielles du SRI pour 2026](https://elyex.com/el-sri-publico-las-tablas-oficiales-para-personas-naturales-y-herencias-del-periodo-fiscal/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
