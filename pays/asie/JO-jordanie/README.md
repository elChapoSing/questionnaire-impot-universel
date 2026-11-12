# Jordanie (JO)

**Taux effectif retenu : 23,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème : 5 %, 10 %, 15 %, 20 % par tranches de 5 000 JOD puis 25 % jusqu'à 1 M JOD ; contribution de 1 % au-delà de 200 000 JOD (négligeable ici). Hypothèse : 1 EUR = 0,82 JOD. Exemptions personnelle et familiale (27 000 JOD) exclues ; avec elles le taux serait plus bas.

## Sources

- [Deloitte - Jordan Highlights 2026](https://www.deloitte.com/content/dam/assets-shared/docs/services/tax/2026/dttl-tax-jordanhighlights-2026.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
