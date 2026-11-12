# Tchéquie (CZ)

**Taux effectif retenu : 20,6 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : CZK. Cours utilisé : 1 EUR = 24,3885 CZK (Yahoo Finance EURCZK=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 24,3885 = 5 860 569 CZK.
- Base imposable : 5 860 569 CZK.

| De (CZK) | À (CZK) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 1 762 812 | 15,00 % | 1 762 812 | 264 422 |
| 1 762 812 | et plus | 23,00 % | 4 097 757 | 942 484 |

- **Impôt total : 1 206 906 CZK, soit 20,6 % du salaire brut.**
- Hypothèse : 15 % jusqu'à 1 762 812 CZK, 23 % au-delà.
- Hypothèse : Le crédit d'impôt de base de 30 840 CZK n'est pas compté ; avec lui le taux tomberait à environ 20,0 %.
- Hypothèse : Taux sensible au change, très proche du seuil de 21,1 %.

## Note

15 % jusqu'à 1 762 812 couronnes, 23 % au-delà. Très proche du seuil de 21,1 % : le crédit d'impôt de base de 30 840 couronnes, non compté, l'abaisserait à 20,0 %.

## Sources

- [Administration financière tchèque, nouveautés 2026](https://financnisprava.gov.cz/cs/financni-sprava/media-a-verejnost/tiskove-zpravy-gfr/tiskove-zpravy-2026/danove-novinky-pro-rok-2026) (officielle)
- [PwC Worldwide Tax Summaries (montant du seuil)](https://taxsummaries.pwc.com/czech-republic/individual/significant-developments) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
