# Ouganda (UG)

**Taux effectif retenu : 38,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : UGX. Cours supposé : 1 EUR = 4 200 UGX (hypothèse reprise de la note, à remplacer par le cours Yahoo EUREURUGX=X).
- Salaire converti : 240 300 € × 4 200 = 1 009 260 000 UGX.
- Base imposable : 1 009 260 000 UGX.

| De (UGX) | À (UGX) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 2 820 000 | 0,00 % | 2 820 000 | 0 |
| 2 820 000 | 4 020 000 | 10,00 % | 1 200 000 | 120 000 |
| 4 020 000 | 4 920 000 | 20,00 % | 900 000 | 180 000 |
| 4 920 000 | 120 000 000 | 30,00 % | 115 080 000 | 34 524 000 |
| 120 000 000 | et plus | 40,00 % | 889 260 000 | 355 704 000 |

- **Impôt total : 390 528 000 UGX, soit 38,7 % du salaire brut.**
- Hypothèse : Barème mensuel résident multiplié par 12 ; le taux de 40 % comprend la surtaxe de 10 % au-delà de 10 millions UGX par mois.

## Note

Barème annuel résident, taux maximal 40 % au-delà de 120 M UGX. Change (hypothèse) : 1 EUR = 4 200 UGX.

## Sources

- [PwC Tax Summaries - Ouganda](https://taxsummaries.pwc.com/Uganda/Individual/Taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
