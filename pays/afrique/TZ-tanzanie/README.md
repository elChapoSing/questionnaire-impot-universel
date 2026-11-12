# Tanzanie (TZ)

**Taux effectif retenu : 29,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : TZS. Cours supposé : 1 EUR = 3 000 TZS (hypothèse reprise de la note, à remplacer par le cours Yahoo EUREURTZS=X).
- Salaire converti : 240 300 € × 3 000 = 720 900 000 TZS.
- Base imposable : 720 900 000 TZS.

| De (TZS) | À (TZS) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 3 240 000 | 0,00 % | 3 240 000 | 0 |
| 3 240 000 | 6 240 000 | 8,00 % | 3 000 000 | 240 000 |
| 6 240 000 | 9 120 000 | 20,00 % | 2 880 000 | 576 000 |
| 9 120 000 | 12 000 000 | 25,00 % | 2 880 000 | 720 000 |
| 12 000 000 | et plus | 30,00 % | 708 900 000 | 212 670 000 |

- **Impôt total : 214 206 000 TZS, soit 29,7 % du salaire brut.**
- Hypothèse : Barème mensuel résident multiplié par 12.

## Note

Barème mensuel résident, taux maximal 30 % au-delà de 1 M TZS/mois. Change (hypothèse) : 1 EUR = 3 000 TZS.

## Sources

- [PwC Tax Summaries - Tanzanie](https://taxsummaries.pwc.com/tanzania/individual/taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
