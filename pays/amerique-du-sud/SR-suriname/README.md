# Suriname (SR)

**Taux effectif retenu : 37,4 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : SRD. Cours supposé : 1 EUR = 44 SRD (hypothèse reprise de la note (44 SRD pour 1 EUR)).
- Salaire converti : 240 300 € × 44 = 10 573 200 SRD.
- Base imposable : 10 573 200 SRD.

| De (SRD) | À (SRD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 108 000 | 0,00 % | 108 000 | 0 |
| 108 000 | 132 000 | 8,00 % | 24 000 | 1 920 |
| 132 000 | 180 000 | 18,00 % | 48 000 | 8 640 |
| 180 000 | 234 000 | 28,00 % | 54 000 | 15 120 |
| 234 000 | et plus | 38,00 % | 10 339 200 | 3 928 896 |

- **Impôt total : 3 954 576 SRD, soit 37,4 % du salaire brut.**
- Hypothèse : Franchise de 108 000 SRD par an (tranche à 0 %), puis 8 %, 18 %, 28 % et 38 % au-delà de 234 000 SRD.
- Hypothèse : Les bornes intermédiaires 132 000 et 180 000 sont déduites par différence avec le taux de la note (37,4 %) et non relues dans une source : à vérifier. Cotisation AOV exclue.

## Note

Barème : franchise 108 000 SRD par an, puis 8 %, 18 %, 28 % et 38 % au-delà de 234 000. Hypothèse change : 1 EUR = 44 SRD, soit environ 10,5 M SRD. Peu sensible au change. Cotisation AOV exclue.

## Sources

- [Rio Times - Suriname taxes expats 2026](https://www.riotimesonline.com/taxes-suriname-expats-2026/) (non officielle)
- [Rivermate - Suriname, belastingen](https://rivermate.com/nl/gidsen/suriname/belastingen) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
