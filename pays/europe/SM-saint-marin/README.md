# Saint-Marin (SM)

**Taux effectif retenu : entre 29,5 et 29,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème IGR 2026 : de 9 % à 27 % jusqu'à 100 000 EUR, 35 % au-delà (source Fiscomania ; une autre source s'arrête à 50 000 EUR). Appliqué au brut, sans détraction ni déduction des cotisations. À vérifier sur le texte officiel.

## Sources

- [Fiscomania - fiscalité des frontaliers à Saint-Marin](https://fiscomania.com/frontalieri-san-marino-tassazione-guida/) (non officielle)
- [QuiFinanza - Saint-Marin, impôts](https://quifinanza.it/fisco-tasse/san-marino-tasse-frontalieri/955568/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
