# Laos (LA)

**Taux effectif retenu : 23,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème mensuel de 0 à 25 % (0 % jusqu'à 2,5 millions de kips depuis juillet 2026, 25 % au-delà de 65 millions par mois). À ce revenu, l'essentiel est taxé à 25 %. Change supposé : environ 25 500 kips pour 1 €, effet négligeable.

## Sources

- [VDB Loi, nouvelle loi sur l'impôt sur le revenu (juillet 2026)](https://vdb-loi.com/laos_publication/vdb-loi-laos-alert-new-income-tax-law-2025-effective-1-july-2026/) (non officielle)
- [PwC Worldwide Tax Summaries](https://taxsummaries.pwc.com/lao-pdr/individual) (non officielle)
- [Deloitte, Laos Highlights 2025](https://www.deloitte.com/content/dam/assets-shared/docs/services/tax/2025/dttl-tax-laoshighlights-2025.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
