# Venezuela (VE)

**Taux effectif retenu : entre 33,6 et 34,1 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : VES. Cours utilisé : 1 EUR = 1 004,265 VES (Yahoo Finance EURVES=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 1 004,265 = 241 324 880 VES.
- Base imposable : 241 324 880 VES.

| De (VES) | À (VES) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 43 000 | 6,00 % | 43 000 | 2 580 |
| 43 000 | 64 500 | 9,00 % | 21 500 | 1 935 |
| 64 500 | 86 000 | 12,00 % | 21 500 | 2 580 |
| 86 000 | 107 500 | 16,00 % | 21 500 | 3 440 |
| 107 500 | 129 000 | 20,00 % | 21 500 | 4 300 |
| 129 000 | 172 000 | 24,00 % | 43 000 | 10 320 |
| 172 000 | 258 000 | 29,00 % | 86 000 | 24 940 |
| 258 000 | et plus | 34,00 % | 241 066 880 | 81 962 739 |

- **Impôt total : 82 012 834 VES, soit 34,0 % du salaire brut.**
- Hypothèse : Tarif n° 1 de l'ISLR (8 tranches en unités tributaires, UT) : 6 %, 9 %, 12 %, 16 %, 20 %, 24 %, 29 % puis 34 % au-delà de 6 000 UT. Bornes intermédiaires reprises de la mémoire du barème, non relues dans la source : à vérifier.
- Hypothèse : Valeur de l'UT supposée à 43 bolivars ; l'impôt est quasi insensible à ce paramètre et au change car le taux maximal domine.
- Hypothèse : Desgravamen unique de 774 UT et rabais personnels non appliqués (variante de la note : 33,5 %).

## Note

Cours Yahoo EURVES=X du 13/11/2026 : 1 EUR = 1004.265 VES (hypothèse initiale : 170). Taux recalculé : 34,1 % (avant : 34 %). Les chiffres de change et de taux cités plus bas datent de l'hypothèse initiale. Tarif n°1 de l'ISLR : 8 tranches de 6 % à 34 % ; à ce niveau de revenu l'effet du tarif est quasi égal au taux maximal. Desgravamen unique de 774 UT et rabais personnels non appliqués. Change bolivar/EUR incertain, mais taux peu sensible. Source non officielle.

## Sources

- [HaceCuentas - ISLR et tributs SENIAT Venezuela](https://hacecuentas.com/ve/impuestos/islr-y-tributos-seniat) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
