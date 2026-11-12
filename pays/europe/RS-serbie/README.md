# Serbie (RS)

**Taux effectif retenu : 18,2 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Impôt de 10 % sur le salaire (abattement mensuel de 34 221 dinars), plus impôt annuel complémentaire de 10 % puis 15 % au-delà de 3 puis 6 salaires annuels moyens (seuils 2025 : 5 439 096 et 10 878 192 dinars). Estimation à 1 point près : cotisations salariales déduites de l'assiette de l'impôt annuel, déduction personnelle de 40 % du salaire moyen. Change supposé : 117,2 dinars pour 1 €.

## Sources

- [KPMG Serbie, impôt annuel sur les revenus 2025](https://kpmg.com/rs/en/insights/tax-alerts/2026/02/annual-personal-income-tax-for-income-generated-in-2025.html) (non officielle)
- [PwC Worldwide Tax Summaries](https://taxsummaries.pwc.com/serbia/individual/taxes-on-personal-income) (non officielle)
- [Portail officiel du gouvernement serbe, impôt annuel sur le revenu](https://www.srbija.gov.rs/tekst/en/130080/income-tax-.php) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
