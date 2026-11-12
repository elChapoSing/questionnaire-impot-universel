# Maldives (MV)

**Taux effectif retenu : 10,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement en dessous du seuil (condition remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : MVR. Cours supposé : 1 EUR = 17,6 MVR (hypothèse reprise de la note (17,6 rufiyaas pour 1 €)).
- Salaire converti : 240 300 € × 17,6 = 4 229 280 MVR.
- Base imposable : 4 229 280 MVR.

| De (MVR) | À (MVR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 720 000 | 0,00 % | 720 000 | 0 |
| 720 000 | 1 200 000 | 5,50 % | 480 000 | 26 400 |
| 1 200 000 | 1 800 000 | 8,00 % | 600 000 | 48 000 |
| 1 800 000 | 2 400 000 | 12,00 % | 600 000 | 72 000 |
| 2 400 000 | et plus | 15,00 % | 1 829 280 | 274 392 |

- **Impôt total : 420 792 MVR, soit 9,9 % du salaire brut.**
- Hypothèse : Barème officiel de la MIRA : 0 % jusqu'à 60 000 par mois (720 000 par an), puis 5,5 %, 8 %, 12 % et 15 % au-delà de 2,4 millions par an ; bornes intermédiaires (1,2 M ; 1,8 M) reconstituées à partir du barème mensuel.

## Note

Barème officiel : 0 % jusqu'à 720 000 rufiyaas, puis 5,5 %, 8 %, 12 % et 15 % au-delà de 2,4 millions. Change supposé : 17,6 rufiyaas pour 1 €.

## Sources

- [MIRA, autorité fiscale des Maldives : barème des particuliers](https://mira.gov.mv/Pages/View/ictindividuals) (officielle)
- [MIRA, guide avec exemple de calcul](https://www.mira.gov.mv/Files/GetFile/bc15ea7b-44d8-4b39-871f-287cae5bf481) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
