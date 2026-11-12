# Burundi (BI)

**Taux effectif retenu : entre 29,9 et 34,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Sources en désaccord : barème annuel 2026 avec taux maximal 35 % (simulateur) ou ancien barème officiel mensuel avec 30 % au-delà de 300 000 BIF/mois. Dans les deux cas le taux dépasse 29 %. Change (hypothèse) : 1 EUR = 3 400 BIF. Changements éventuels de la loi de finances 2026-2027 non vérifiés.

## Sources

- [AfroTools - calcul salaire net Burundi](https://afrotools.com/fr/burundi/calculateur-salaire-net/) (non officielle)
- [OBR - mode de calcul de l'IPR](https://www.obr.bi/images/stories/download/MODE_CALCUL_IPR.pdf) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
