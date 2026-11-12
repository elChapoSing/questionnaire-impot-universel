# Éthiopie (ET)

**Taux effectif retenu : 34,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : ETB. Cours utilisé : 1 EUR = 181,1191 ETB (Yahoo Finance EURETB=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 181,1191 = 43 522 920 ETB.
- Base imposable : 43 522 920 ETB.

| De (ETB) | À (ETB) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 24 000 | 0,00 % | 24 000 | 0 |
| 24 000 | 48 000 | 15,00 % | 24 000 | 3 600 |
| 48 000 | 84 000 | 20,00 % | 36 000 | 7 200 |
| 84 000 | 120 000 | 25,00 % | 36 000 | 9 000 |
| 120 000 | 168 000 | 30,00 % | 48 000 | 14 400 |
| 168 000 | et plus | 35,00 % | 43 354 920 | 15 174 222 |

- **Impôt total : 15 208 422 ETB, soit 34,9 % du salaire brut.**
- Hypothèse : Barème mensuel d'impôt sur le revenu d'emploi multiplié par 12.

## Note

Cours Yahoo EURETB=X du 13/11/2026 : 1 EUR = 181.1191 ETB (hypothèse initiale : 175). Taux recalculé : 34,9 % (avant : 34,9 %). Les chiffres de change et de taux cités plus bas datent de l'hypothèse initiale. Impôt sur revenu d'emploi : barème mensuel, taux maximal 35 % au-delà de 14 000 ETB/mois. Change (hypothèse) : 1 EUR = 175 ETB ; sans effet notable.

## Sources

- [PwC Tax Summaries - Éthiopie](https://taxsummaries.pwc.com/ethiopia/individual/taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
