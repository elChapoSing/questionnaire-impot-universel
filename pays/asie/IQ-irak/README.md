# Irak (IQ)

**Taux effectif retenu : 15,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement en dessous du seuil (condition remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : IQD. Cours supposé : 1 EUR = 1 500 IQD (hypothèse reprise de la note (1 € = 1 500 IQD)).
- Salaire converti : 240 300 € × 1 500 = 360 450 000 IQD.
- Base imposable : 360 450 000 IQD.

| De (IQD) | À (IQD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 250 000 | 3,00 % | 250 000 | 7 500 |
| 250 000 | 500 000 | 5,00 % | 250 000 | 12 500 |
| 500 000 | 1 000 000 | 10,00 % | 500 000 | 50 000 |
| 1 000 000 | et plus | 15,00 % | 359 450 000 | 53 917 500 |

- **Impôt total : 53 987 500 IQD, soit 15,0 % du salaire brut.**
- Hypothèse : Barème salarial ; la limite entre les deux dernières tranches est ambiguë dans la source (500 000 ou 500 001), sans effet.
- Hypothèse : Région du Kurdistan : 5 % forfaitaire (non retenu). Abattements personnels exclus.

## Note

Barème salarial : 3 %, 5 %, 10 % puis 15 % au-delà de 1 M IQD par an. Hypothèse : 1 EUR = 1 500 IQD. Région du Kurdistan : 5 % forfaitaire. Abattements personnels exclus.

## Sources

- [Lloyds Bank Trade - Irak, fiscalité](https://www.lloydsbanktrade.com/en/market-potential/iraq/taxes) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
