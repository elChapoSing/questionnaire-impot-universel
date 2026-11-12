# Panama (PA)

**Taux effectif retenu : 22,5 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : USD. Cours supposé : 1 EUR = 1,15 USD (hypothèse reprise de la note (EUR/USD 1,15), à remplacer par le cours Yahoo EURUSD=X (balboa à parité avec le dollar)).
- Salaire converti : 240 300 € × 1,15 = 276 345 USD.
- Base imposable : 276 345 USD.

| De (USD) | À (USD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 11 000 | 0,00 % | 11 000 | 0 |
| 11 000 | 50 000 | 15,00 % | 39 000 | 5 850 |
| 50 000 | et plus | 25,00 % | 226 345 | 56 586 |

- **Impôt total : 62 436 USD, soit 22,6 % du salaire brut.**
- Hypothèse : Revenu supposé de source panaméenne ; système territorial (0 % pour un revenu de source étrangère).

## Note

Barème : 0 % jusqu'à 11 000 balboas (dollars), 15 % jusqu'à 50 000, 25 % au-delà (5 850 balboas pour les 50 000 premiers). Système territorial : les revenus de source étrangère ne sont pas imposés, ce qui peut ramener l'impôt à 0 % pour un revenu perçu de l'étranger. Taux calculé sur un revenu de source panaméenne.

## Sources

- [Direction générale des revenus du Panama, tarifs des personnes physiques](https://dgi.mef.gob.pa/DInforme/Tarifa) (officielle)
- [Expanship, impôt sur le revenu au Panama](https://www.expanship.com/pa/blog/panama-personal-income-tax) (non officielle)
- [Alegra, déclaration de revenus au Panama](https://blog.alegra.com/panama/declaracion-de-renta-panama/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
