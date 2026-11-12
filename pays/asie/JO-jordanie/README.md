# Jordanie (JO)

**Taux effectif retenu : 23,6 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : JOD. Cours utilisé : 1 EUR = 0,7838 JOD (Yahoo Finance EURJOD=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 0,7838 = 188 347 JOD.
- Base imposable : 188 347 JOD.

| De (JOD) | À (JOD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 5 000 | 5,00 % | 5 000 | 250 |
| 5 000 | 10 000 | 10,00 % | 5 000 | 500 |
| 10 000 | 15 000 | 15,00 % | 5 000 | 750 |
| 15 000 | 20 000 | 20,00 % | 5 000 | 1 000 |
| 20 000 | 1 000 000 | 25,00 % | 168 347 | 42 087 |
| 1 000 000 | et plus | 30,00 % | 0 | 0 |

- **Impôt total : 44 587 JOD, soit 23,7 % du salaire brut.**
- Hypothèse : Contribution nationale de 1 % au-delà de 200 000 JOD non modélisée (négligeable ici).
- Hypothèse : Exemptions personnelle et familiale (27 000 JOD) exclues ; avec elles le taux serait plus bas. Taux de 30 % au-delà de 1 M JOD non atteint.

## Note

Barème : 5 %, 10 %, 15 %, 20 % par tranches de 5 000 JOD puis 25 % jusqu'à 1 M JOD ; contribution de 1 % au-delà de 200 000 JOD (négligeable ici). Exemptions personnelle et familiale (27 000 JOD) exclues ; avec elles le taux serait plus bas.

## Sources

- [Deloitte - Jordan Highlights 2026](https://www.deloitte.com/content/dam/assets-shared/docs/services/tax/2026/dttl-tax-jordanhighlights-2026.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
