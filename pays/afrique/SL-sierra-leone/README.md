# Sierra Leone (SL)

**Taux effectif retenu : 29,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : SLE. Cours supposé : 1 EUR = 27 SLE (hypothèse reprise de la note, à remplacer par le cours Yahoo EUREURSLE=X).
- Salaire converti : 240 300 € × 27 = 6 488 100 SLE.
- Base imposable : 6 488 100 SLE.

| De (SLE) | À (SLE) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 7 200 | 0,00 % | 7 200 | 0 |
| 7 200 | 14 400 | 15,00 % | 7 200 | 1 080 |
| 14 400 | 21 600 | 20,00 % | 7 200 | 1 440 |
| 21 600 | 28 800 | 25,00 % | 7 200 | 1 800 |
| 28 800 | et plus | 30,00 % | 6 459 300 | 1 937 790 |

- **Impôt total : 1 942 110 SLE, soit 29,9 % du salaire brut.**
- Hypothèse : Barème PAYE mensuel multiplié par 12.
- Hypothèse : Cotisation NASSIT de 5 % déductible non appliquée.

## Note

PAYE mensuel : taux maximal 30 % au-delà de 2 400 SLE/mois ; barème inchangé selon la loi de finances 2026. Change (hypothèse) : 1 EUR = 27 SLE. Cotisation NASSIT de 5 % déductible non appliquée.

## Sources

- [AfroTools - PAYE Sierra Leone](https://afrotools.com/fr/sierra-leone/sl-paye) (non officielle)
- [PaySpace - Finance Act 2026 Sierra Leone](https://support.payspace.com/portal/en/kb/articles/sierra-leone-2026-finance-act) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
