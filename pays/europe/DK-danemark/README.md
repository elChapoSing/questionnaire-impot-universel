# Danemark (DK)

**Taux effectif retenu : 46,1 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Danemark 2026 : impôt d'État de base 12,01 %, impôt communal moyen 25,05 %, impôt intermédiaire 7,5 % dès 641 200 DKK, impôt supérieur 15 % dès 777 900 DKK, plafond de 52,07 % de taux marginal. Calcul à 7,46 DKK/EUR (hypothèse), hors cotisation AM de 8 % : environ 46 %.

## Sources

- [Expatfinance.dk, barème 2026](https://expatfinance.dk/taxes/expat-tax-guide/) (non officielle)
- [Dinero, topskat](https://dinero.dk/ordbog/topskat/.) (non officielle)
- [PwC Danemark, nouveaux taux 2026](https://www.pwc.dk/da/presse/meddelelser/2025/skattelettelser-paa-vej-til-mange-danskere.html) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
