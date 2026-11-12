# Égypte (EG)

**Taux effectif retenu : 27,3 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : EGP. Cours utilisé : 1 EUR = 59,138 EGP (Yahoo Finance EUREGP=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 59,138 = 14 210 861 EGP.
- Base imposable : 14 210 861 EGP.

| De (EGP) | À (EGP) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 1 200 000 | 25,00 % | 1 200 000 | 300 000 |
| 1 200 000 | et plus | 27,50 % | 13 010 861 | 3 577 987 |

- **Impôt total : 3 877 987 EGP, soit 27,3 % du salaire brut.**
- Hypothèse : Pour les hauts revenus, les 1,2 premiers million de livres sont imposés à 25 % (source : Catalogne Trade Portal), ce qui remplace les tranches de 0 / 10 / 15 / 20 / 22,5 % du barème ordinaire (0 % jusqu'à 40 000, puis 10, 15, 20, 22,5, 25 % jusqu'à 1,2 million) ; au-delà, 27,5 %.

## Note

Barème : 0 % jusqu'à 40 000 livres, 10, 15, 20 et 22,5 % ensuite, 25 % de 400 000 à 1,2 million, 27,5 % au-delà. Pour les hauts revenus, les premiers 1,2 million sont imposés à 25 % (source Catalogne Trade Portal). À 240 300 €, le taux effectif est d'environ 27,3 %, au-dessus du seuil.

## Sources

- [Andersen Égypte, impôt sur le revenu 2026](https://eg.andersen.com/personal-income-tax/) (non officielle)
- [Teamed, tranches 2026](https://www.teamed.global/country-hiring-guides/egypt/tax-and-payroll) (non officielle)
- [ACCIÓ, fiscalité en Égypte](https://tradeportal.accio.gencat.cat/ca/mercats-potencials/egipte/impostos) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
