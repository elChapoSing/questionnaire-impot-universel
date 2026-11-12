# Angola (AO)

**Taux effectif retenu : entre 23,5 et 25,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

IRT groupe A, barème 2026 (loi 14/25), tranche supérieure à 25 % au-delà de 10 M AOA/mois. Change (hypothèse) : 1 EUR = 1 060 AOA ; sensibilité négligeable. Variante : base nette de la cotisation sociale salariale de 3 % donne environ 23,5 %.

## Sources

- [Angolex - barème IRT groupe A 2026](https://angolex.com/paginas/outros/calculadora-do-irt-angola-grupo-a-2026a.html) (non officielle)
- [PaySpace - loi IRT 2026 Angola](https://support.payspace.com/portal/en/kb/articles/angola-2026-income-tax-law-enacted-key-payroll-changes-effective-1-january-2026) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
