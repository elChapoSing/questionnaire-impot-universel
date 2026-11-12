# Myanmar (Birmanie) (MM)

**Taux effectif retenu : 24,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Six tranches de 0 à 25 % après un abattement de 20 % (plafonné à 10 millions de kyats). À ce revenu, le taux effectif est de 23 % à 24 % quel que soit le change, très volatil. Barème confirmé par des sources privées uniquement.

## Sources

- [DFDL, loi fiscale de l'Union 2026](https://www.dfdl.com/?p=66364) (non officielle)
- [VDB Loi, Myanmar Tax Booklet 2025-2026](https://www.vdb-loi.com/wp-content/uploads/2025/11/Myanmar-Tax-Booklet_2025-2026.pdf) (non officielle)
- [QHRM, tranches de l'impôt sur le revenu 2025-2026](https://qhrm.io/answers/pit-slabs-myanmar-current-tax-year) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
