# Territoires palestiniens (PS)

**Taux effectif retenu : 13,8 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement en dessous du seuil (condition remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : ILS. Cours supposé : 1 EUR = 3,8 ILS (hypothèse reprise de la note (1 € = 3,8 NIS)).
- Salaire converti : 240 300 € × 3,8 = 913 140 ILS.
- Base imposable : 913 140 ILS.

| De (ILS) | À (ILS) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 75 000 | 5,00 % | 75 000 | 3 750 |
| 75 000 | 150 000 | 10,00 % | 75 000 | 7 500 |
| 150 000 | et plus | 15,00 % | 763 140 | 114 471 |

- **Impôt total : 125 721 ILS, soit 13,8 % du salaire brut.**
- Hypothèse : Barème des résidents 2026.
- Hypothèse : Déduction standard de 36 000 NIS et autres déductions exclues.

## Note

Barème résidents 2026 : 5 % jusqu'à 75 000 NIS, 10 % jusqu'à 150 000 NIS, 15 % au-delà. Hypothèse : 1 EUR = 3,8 NIS. Déduction standard de 36 000 NIS et autres déductions exclues.

## Sources

- [Deloitte - Territoires palestiniens, Highlights 2026](https://www.deloitte.com/content/dam/assets-shared/docs/services/tax/2026/dttl-tax-palestinianterritorieshighlights-2026.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
