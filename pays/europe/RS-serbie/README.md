# Serbie (RS)

**Taux effectif retenu : 18,2 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Cas limite.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : RSD. Cours utilisé : 1 EUR = 117,599 RSD (Yahoo Finance EURRSD=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 117,599 = 28 259 040 RSD.
- Base imposable : 28 259 040 RSD.

| De (RSD) | À (RSD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 410 652 | 0,00 % | 410 652 | 0 |
| 410 652 | 6 803 604 | 10,00 % | 6 392 952 | 639 295 |
| 6 803 604 | 18 890 484 | 19,00 % | 12 086 880 | 2 296 507 |
| 18 890 484 | et plus | 23,50 % | 9 368 556 | 2 201 611 |

- **Impôt total : 5 137 413 RSD, soit 18,2 % du salaire brut.**
- Hypothèse : Impôt sur salaire de 10 % après abattement mensuel de 34 221 RSD (410 652 par an).
- Hypothèse : Impôt annuel complémentaire sur le revenu net d'impôt de salaire : non imposable 5 439 096 RSD (3 salaires annuels moyens), déduction personnelle 725 213 RSD, puis 10 % jusqu'à 10 878 192 RSD et 15 % au-delà. Les taux de tranche cumulent donc 10 % + 0,9 × 10 % = 19 % puis 10 % + 0,9 × 15 % = 23,5 %.
- Hypothèse : Cotisations sociales supposées non déduites de la base de l'impôt annuel (hypothèse qui reproduit le taux retenu) ; seuils 2025.

## Note

Impôt de 10 % sur le salaire (abattement mensuel de 34 221 dinars), plus impôt annuel complémentaire de 10 % puis 15 % au-delà de 3 puis 6 salaires annuels moyens (seuils 2025 : 5 439 096 et 10 878 192 dinars). Estimation à 1 point près : cotisations salariales déduites de l'assiette de l'impôt annuel, déduction personnelle de 40 % du salaire moyen.

## Sources

- [KPMG Serbie, impôt annuel sur les revenus 2025](https://kpmg.com/rs/en/insights/tax-alerts/2026/02/annual-personal-income-tax-for-income-generated-in-2025.html) (non officielle)
- [PwC Worldwide Tax Summaries](https://taxsummaries.pwc.com/serbia/individual/taxes-on-personal-income) (non officielle)
- [Portail officiel du gouvernement serbe, impôt annuel sur le revenu](https://www.srbija.gov.rs/tekst/en/130080/income-tax-.php) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
