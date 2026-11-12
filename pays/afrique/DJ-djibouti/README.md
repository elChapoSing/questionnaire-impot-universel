# Djibouti (DJ)

**Taux effectif retenu : entre 37,0 et 38,4 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : DJF. Cours supposé : 1 EUR = 206 DJF (hypothèse reprise de la note, à remplacer par le cours Yahoo EUREURDJF=X).
- Salaire converti : 240 300 € × 206 = 49 501 800 DJF.
- Base imposable : 49 501 800 DJF.

| De (DJF) | À (DJF) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 360 000 | 2,00 % | 360 000 | 7 200 |
| 360 000 | 600 000 | 12,00 % | 240 000 | 28 800 |
| 600 000 | 1 800 000 | 15,00 % | 1 200 000 | 180 000 |
| 1 800 000 | 3 600 000 | 22,00 % | 1 800 000 | 396 000 |
| 3 600 000 | 7 200 000 | 25,00 % | 3 600 000 | 900 000 |
| 7 200 000 | 12 000 000 | 30,00 % | 4 800 000 | 1 440 000 |
| 12 000 000 | 24 000 000 | 35,00 % | 12 000 000 | 4 200 000 |
| 24 000 000 | et plus | 45,00 % | 25 501 800 | 11 475 810 |

- **Impôt total : 18 627 810 DJF, soit 37,6 % du salaire brut.**
- Hypothèse : Barème ITS mensuel multiplié par 12 (source AfroTools, non officielle) ; exonération mensuelle de 50 000 DJF et arrondi à 5 000 DJF ignorés.
- Hypothèse : Cotisation CNSS salariale de 6 % déductible non appliquée ; variante de la note : 37 % à 38,4 %.

## Note

ITS mensuel à 8 tranches, taux maximal 45 % au-delà de 2 M DJF/mois. Change (hypothèse) : 1 EUR = 206 DJF (arrimage USD). Cotisation CNSS de 6 % déductible non appliquée.

## Sources

- [AfroTools - calcul salaire net Djibouti](https://afrotools.com/fr/djibouti/calculateur-salaire-net/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
