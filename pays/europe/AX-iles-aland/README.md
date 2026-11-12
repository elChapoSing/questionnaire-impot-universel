# Îles Åland (AX)

**Taux effectif retenu : entre 38,3 et 41,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème d'État spécifique à Åland 2026 (24,86 % au-delà de 52 100 EUR) plus impôt communal moyen de 17,67 % (de 17,0 à 19,7 % selon la commune, d'où la fourchette). Taxe d'église, assurance maladie et déductions exclues.

## Sources

- [Administration fiscale finlandaise - imposition à Åland](https://vero.fi/sv/Detaljerade_skatteanvisningar/anvisningar/48911/beskattningen-pa-aland8/) (officielle)
- [Association des communes de Finlande - taux 2026](https://www.kommunforbundet.fi/sites/default/files/media/file/Kommunernas-skattesatser-2026.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
