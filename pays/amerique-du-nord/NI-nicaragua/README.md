# Nicaragua (NI)

**Taux effectif retenu : 29,3 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Table progressive annuelle du travail : exonéré jusqu'à 100 000 NIO, puis 15 %, 20 %, 25 %, 30 % au-delà de 500 000. Calculé sur le brut, sans déduire la cotisation INSS de 7 % (variante légèrement plus basse). Hypothèse change : 1 EUR = 42,1 NIO.

## Sources

- [TopTrabajos - Descuentos planilla Nicaragua (tabla IR)](https://www.toptrabajos.com/ni/blog/descuentos-planilla-nicaragua/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
