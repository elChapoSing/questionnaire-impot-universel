# Mauritanie (MR)

**Taux effectif retenu : 39,6 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : MRU. Cours utilisé : 1 EUR = 44,861 MRU (Yahoo Finance EURMRU=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 44,861 = 10 780 098 MRU.
- Base imposable : 10 780 098 MRU.

| De (MRU) | À (MRU) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | et plus | 40,00 % | 10 780 098 | 4 312 039 |

- Crédit : Constante de la formule ITS (RI x 40 % - 4 050 par mois), soit 4 050 x 12 : − 48 600 MRU.
- **Impôt total : 4 263 439 MRU, soit 39,5 % du salaire brut.**
- Hypothèse : Formule mensuelle valable au-delà de 21 000 MRU par mois.
- Hypothèse : Franchise de 6 000 MRU par mois et cotisations CNSS ignorées.

## Note

ITS mensuel : 40 % au-delà de 21 000 MRU/mois (formule RI x 40 % - 4 050). Franchise de 6 000 MRU/mois et CNSS ignorées.

## Sources

- [AfroTools - calcul salaire net Mauritanie](https://afrotools.com/fr/mauritanie/calculateur-salaire-net/) (non officielle)
- [PwC Quick Charts - taux d'IR (Mauritanie 40 %)](https://taxsummaries.pwc.com/quick%20charts/personal-income-tax-pit-rates) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
