# Cameroun (CM)

**Taux effectif retenu : entre 26,3 et 37,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

IRPP 10/15/25/35 % majoré de 10 % de centimes communaux (11 à 38,5 %), avec déduction forfaitaire de 30 % pour frais professionnels sur salaires. Variante sans la déduction de 30 % : 37,9 %. Abattement de 500 000 XAF et cotisations ignorés. Cas proche de la bande. Change : XAF fixe.

## Sources

- [PwC Tax Summaries - Cameroun](https://taxsummaries.pwc.com/republic-of-cameroon/individual/taxes-on-personal-income) (non officielle)
- [PwC - Cameroon tax facts and figures 2025](https://www.pwc.com/gh/en/assets/pdf/cameroon-tax-facts-and-figures-2025.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
