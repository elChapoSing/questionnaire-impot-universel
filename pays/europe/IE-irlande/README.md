# Irlande (IE)

**Taux effectif retenu : 34,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

2026 : 20 % jusqu'à 44 000 € pour une personne seule, 40 % au-delà, moins 4 000 € de crédits d'impôt (personnel et salarié). Taux effectif d'environ 34,7 % à 240 300 €. USC (jusqu'à 8 %) et PRSI exclus : avec eux, le taux marginal atteint environ 52 %.

## Sources

- [Grant Thornton Irlande, bandes et crédits 2026](https://www.grantthornton.ie/insights/budget/payroll-summary/) (non officielle)
- [Chambers, International Tax 2026, Irlande](https://gpg-pdf.chambers.com/international-tax-2025/192/) (non officielle)
- [Tax Atlas, tranches irlandaises 2026](https://taxatlas.app/ie/tax-brackets/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
