# Îles Féroé (FO)

**Taux effectif retenu : entre 41,5 et 48,5 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Impôt national 2026 progressif de 13 % à 30 % (30 % au-delà de 600 000 DKK, base de 98 950). Impôt communal forfaitaire de 16 à 23 % selon la commune (19 % retenu au centre de la fourchette). Hypothèse : 1 EUR = 7,46 DKK. Taxe d'église (0,6 à 0,9 %) exclue.

## Sources

- [Administration fiscale féroïenne (TAKS) - barème de l'impôt national](https://www.taks.fo/fo/borgari/gjold-og-agodar/landsskattatalva/) (officielle)
- [TAKS - fiscalité aux Îles Féroé](https://www.taks.fo/en/individuals/tax/taxation-in-the-faroes/) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
