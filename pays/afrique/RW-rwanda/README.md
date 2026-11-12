# Rwanda (RW)

**Taux effectif retenu : 29,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : RWF. Cours supposé : 1 EUR = 1 700 RWF (hypothèse reprise de la note, à remplacer par le cours Yahoo EUREURRWF=X).
- Salaire converti : 240 300 € × 1 700 = 408 510 000 RWF.
- Base imposable : 408 510 000 RWF.

| De (RWF) | À (RWF) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 720 000 | 0,00 % | 720 000 | 0 |
| 720 000 | 1 200 000 | 10,00 % | 480 000 | 48 000 |
| 1 200 000 | 2 400 000 | 20,00 % | 1 200 000 | 240 000 |
| 2 400 000 | et plus | 30,00 % | 406 110 000 | 121 833 000 |

- **Impôt total : 122 121 000 RWF, soit 29,9 % du salaire brut.**
- Hypothèse : Barème supposé mensuel (PwC ne précise pas la période), multiplié par 12.

## Note

Barème supposé mensuel (PwC ne précise pas la période) : taux maximal 30 % au-delà de 200 000 RWF/mois. Change (hypothèse) : 1 EUR = 1 700 RWF.

## Sources

- [PwC Tax Summaries - Rwanda](https://taxsummaries.pwc.com/rwanda/individual/taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
