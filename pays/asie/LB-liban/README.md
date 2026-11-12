# Liban (LB)

**Taux effectif retenu : entre 24,7 et 24,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Taxe sur les salaires progressive de 2 % à 25 % ; taux marginal de 25 % au-delà de 675 M LBP (PwC) ou 120 M LBP (TaxAtlas) selon la source, d'où la fourchette. Hypothèse : 1 EUR = 103 800 LBP (taux officiel d'environ 89 500 LBP par USD).

## Sources

- [PwC Tax Summaries - Liban](https://taxsummaries.pwc.com/lebanon/individual/taxes-on-personal-income) (non officielle)
- [TaxAtlas - Liban, impôt sur le revenu](https://taxatlas.io/country/lebanon/income-tax) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
