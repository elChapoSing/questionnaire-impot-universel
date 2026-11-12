# Timor oriental (TL)

**Taux effectif retenu : entre 9,8 et 10,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement en dessous du seuil (condition remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : USD. Cours supposé : 1 EUR = 1,16 USD (hypothèse reprise de la note (1 € = 1,16 USD)).
- Salaire converti : 240 300 € × 1,16 = 278 748 USD.
- Base imposable : 278 748 USD.

| De (USD) | À (USD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 6 000 | 0,00 % | 6 000 | 0 |
| 6 000 | et plus | 10,00 % | 272 748 | 27 275 |

- **Impôt total : 27 275 USD, soit 9,8 % du salaire brut.**
- Hypothèse : Impôt sur les salaires des résidents : 10 % au-delà de 500 USD par mois, soit 6 000 USD par an.
- Hypothèse : Variante lue comme 500 USD par an : taux de 10,0 %, d'où la fourchette de la note.

## Note

Impôt sur les salaires des résidents : 10 % au-delà d'un seuil de 500 USD (mensuel selon la loi, annuel selon la formulation de PwC, d'où la fourchette). Hypothèse : 1 EUR = 1,16 USD.

## Sources

- [PwC Tax Summaries - Timor-Leste](https://taxsummaries.pwc.com/timor-leste/individual/taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
