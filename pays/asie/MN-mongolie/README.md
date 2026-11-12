# Mongolie (MN)

**Taux effectif retenu : entre 18,4 et 18,5 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème 2026 sur salaires : 10 % jusqu'à 120 M MNT, 15 % jusqu'à 180 M, 20 % au-delà (nouveau barème prévu au 1er janvier 2027, non retenu). Hypothèse : 1 EUR = 4 150 MNT. Une exonération des 9,6 premiers millions (source Mercans) change à peine le taux. Cas proche de la bande 18 à 26 %.

## Sources

- [KPMG Mongolie - Mongolian Tax Law Update 2026](https://assets.kpmg.com/content/dam/kpmgsites/mn/pdf/Mongolian-Tax-Law-Update-2026.pdf.coredownload.inline.pdf) (non officielle)
- [Mercans - Mongolie, changements de taux 2026](https://mercans.com/wp-content/uploads/2025/12/Mongolia_Changes-in-Tax-Rates-1st-January-2026.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
