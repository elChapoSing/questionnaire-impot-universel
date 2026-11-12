# Eswatini (SZ)

**Taux effectif retenu : 32,6 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : SZL. Cours supposé : 1 EUR = 20 SZL (hypothèse reprise de la note, à remplacer par le cours Yahoo EUREURSZL=X).
- Salaire converti : 240 300 € × 20 = 4 806 000 SZL.
- Base imposable : 4 806 000 SZL.

| De (SZL) | À (SZL) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 100 000 | 20,00 % | 100 000 | 20 000 |
| 100 000 | 150 000 | 25,00 % | 50 000 | 12 500 |
| 150 000 | 200 000 | 30,00 % | 50 000 | 15 000 |
| 200 000 | et plus | 33,00 % | 4 606 000 | 1 519 980 |

- **Impôt total : 1 567 480 SZL, soit 32,6 % du salaire brut.**
- Hypothèse : Rabais de 8 200 SZL ignoré.

## Note

Barème résident à 4 tranches, taux maximal 33 % au-delà de 200 000 SZL ; rabais de 8 200 SZL ignoré. Change (hypothèse) : 1 EUR = 20 SZL.

## Sources

- [PwC Tax Summaries - Eswatini](https://taxsummaries.pwc.com/eswatini/individual/taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
