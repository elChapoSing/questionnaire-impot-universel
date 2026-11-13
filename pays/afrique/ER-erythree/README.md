# Érythrée (ER)

**Taux effectif retenu : entre 27,7 et 29,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Pas concerné·e (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : ERN. Cours utilisé : 1 EUR = 17,4 ERN (hypothèse reprise de la note, à remplacer par le cours Yahoo EURERN=X).
- Salaire converti : 240 300 € × 17,4 = 4 181 220 ERN.
- Base imposable : 4 181 220 ERN.

| De (ERN) | À (ERN) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 24 000 | 0,00 % | 24 000 | 0 |
| 24 000 | 60 000 | 2,00 % | 36 000 | 720 |
| 60 000 | 180 000 | 7,00 % | 120 000 | 8 400 |
| 180 000 | 360 000 | 12,00 % | 180 000 | 21 600 |
| 360 000 | 600 000 | 17,00 % | 240 000 | 40 800 |
| 600 000 | 960 000 | 22,00 % | 360 000 | 79 200 |
| 960 000 | 1 440 000 | 27,00 % | 480 000 | 129 600 |
| 1 440 000 | et plus | 32,00 % | 2 741 220 | 877 190 |

- **Impôt total : 1 157 510 ERN, soit 27,7 % du salaire brut.**
- Hypothèse : Barème mensuel de Rivermate (attendu pour 2025), multiplié par 12 : 0 % jusqu'à 2 000 ERN par mois, puis 2, 7, 12, 17, 22, 27 et 32 % ; aucun abattement supplémentaire (la tranche à 0 % tient lieu d'abattement personnel).
- Hypothèse : Source incertaine : TaxAtlas donne un autre barème (2, 6, 12, 18, 22 et 30 %, périodicité non précisée) qui donne 28,3 % s'il est mensuel et 29,9 % s'il est annuel ; d'autres guides donnent encore d'autres barèmes. Aucune source officielle accessible.
- Hypothèse : Cotisations sociales exclues.

## Note

Source incertaine : aucun texte officiel accessible, guides privés divergents. Barème retenu : Rivermate (mensuel, 0 à 32 %, attendu pour 2025), soit environ 27,7 %. L'autre barème (TaxAtlas, jusqu'à 30 %) donne 28,3 à 29,9 %. Fiabilité faible.

## Sources

- [Rivermate - fiscalité Érythrée](https://www.rivermate.com/guides/eritrea/taxes) (non officielle)
- [TaxAtlas - impôt sur le revenu Érythrée](https://taxatlas.io/country/eritrea/income-tax) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
