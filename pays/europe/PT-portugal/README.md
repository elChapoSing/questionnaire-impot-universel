# Portugal (PT)

**Taux effectif retenu : 43,3 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

IRS 2026 : neuf tranches de 12,5 % à 48 % au-delà d'environ 86 600 € de revenu imposable. Taux effectif estimé à 43,3 % à 240 300 € (44,9 % avec la surtaxe de solidarité de 2,5 % entre 80 000 et 250 000 €). Estimation : le taux moyen à l'entrée de la dernière tranche est repris du barème 2025.

## Sources

- [Santander Portugal, tranches de l'IRS](https://www.santander.pt/salto/escaloes-irs) (non officielle)
- [Simula, simulateur IRS 2026 (surtaxe de solidarité)](https://simula.pt/simuladores/simulador_irs) (non officielle)
- [EY Portugal, budget 2026](https://www.ey.com/content/dam/ey-unified-site/ey-com/pt-pt/services/tax/documents/tax-alert-oe-2026.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
