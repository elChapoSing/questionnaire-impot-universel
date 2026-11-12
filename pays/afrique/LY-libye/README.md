# Libye (LY)

**Taux effectif retenu : entre 10,0 et 13,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement en dessous du seuil (condition remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Impôt sur salaires : 5 % jusqu'à 12 000 LYD/an puis 10 %. Un guide PwC mentionne en plus un impôt Jihad de 3 % (fourchette). Change (hypothèse) : 1 EUR = 6,3 LYD. Cotisations sociales exclues.

## Sources

- [PwC Tax Summaries - Libye](https://taxsummaries.pwc.com/libya/individual/taxes-on-personal-income) (non officielle)
- [PwC - Doing business in Libya](https://pwc.com/m1/en/tax/documents/doing-business-guides/dbily.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
