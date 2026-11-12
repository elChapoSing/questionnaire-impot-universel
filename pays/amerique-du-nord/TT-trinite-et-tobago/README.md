# Trinité-et-Tobago (TT)

**Taux effectif retenu : entre 25,9 et 27,3 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

25 % jusqu'à 1 M TTD puis 30 %. Abattement personnel de 90 000 TTD non appliqué (variante : environ 25,9 à 26,1 %). Hypothèse change : 1 EUR = 7,8 TTD (6,79 par USD), soit environ 1,88 M TTD. Cas proche de la bande selon l'abattement.

## Sources

- [PwC Tax Summaries - Trinidad and Tobago](https://taxsummaries.pwc.com/trinidad-and-tobago/individual/taxes-on-personal-income) (non officielle)
- [Rio Times - Trinidad et Tobago taxes 2026](https://www.riotimesonline.com/taxes-trinidad-tobago-expats-2026/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
