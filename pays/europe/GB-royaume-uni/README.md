# Royaume-Uni (GB)

**Taux effectif retenu : 38,4 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : GBP. Cours supposé : 1 EUR = 0,87 GBP (hypothèse reprise de la note, à remplacer par le cours Yahoo EURGBP=X).
- Salaire converti : 240 300 € × 0,87 = 209 061 GBP.
- Base imposable : 209 061 GBP.

| De (GBP) | À (GBP) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 37 700 | 20,00 % | 37 700 | 7 540 |
| 37 700 | 125 140 | 40,00 % | 87 440 | 34 976 |
| 125 140 | et plus | 45,00 % | 83 921 | 37 764 |

- **Impôt total : 80 280 GBP, soit 38,4 % du salaire brut.**
- Hypothèse : Angleterre, pays de Galles, Irlande du Nord, 2026/27 : abattement personnel nul au-dessus de 125 140 £, donc toute la base est imposée (20 % sur les 37 700 premières livres).
- Hypothèse : Écosse : taux supérieur de 48 %, soit environ 39,6 %.
- Hypothèse : Cotisations sociales (NIC) exclues.

## Note

Angleterre, pays de Galles, Irlande du Nord, 2026/27 : 20 % jusqu'à 37 700 £ de revenu imposable, 40 % jusqu'à 125 140 £, 45 % au-delà, sans abattement personnel au-dessus de 125 140 £. À 240 300 € (change supposé : 0,87 £ pour 1 €), le taux effectif est d'environ 38,4 %. En Écosse, le taux supérieur est de 48 % (environ 39,6 %). Cotisations sociales (NIC) exclues.

## Sources

- [GOV.UK, taux de l'impôt sur le revenu](https://gov.uk/income-tax-rates.) (officielle)
- [GOV.UK, Budget 2025, taux et abattements](https://www.gov.uk/government/publications/budget-2025-overview-of-tax-legislation-and-rates-ootlar/annex-a-rates-and-allowances) (officielle)
- [LITRG, taux 2026/27 (Écosse incluse)](https://www.litrg.org.uk/tax-and-nic/tax-introduction/tax-and-nic-rates-and-bands) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
