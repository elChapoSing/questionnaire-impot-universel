# Dominique (DM)

**Taux effectif retenu : 32,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème en vigueur 2026 : 0 % jusqu'à 30 000, 15 %, 25 % puis 35 % au-delà de 80 000 XCD. Hypothèse change : 1 EUR = 3,105 XCD (parité 2,7 par USD, EUR/USD 1,15). Réforme annoncée (taux unique de 10 % dès 2027), pas encore votée.

## Sources

- [Dominica Inland Revenue Division - taux en vigueur](https://ird.gov.dm/customer-service/current-income-tax-rates) (officielle)
- [IMI Daily - Dominique, impôt unique 10 % en 2027](https://imidaily.com/caribbean/dominica-flat-tax-10-percent-2027) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
