# Égypte (EG)

**Taux effectif retenu : 27,3 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème : 0 % jusqu'à 40 000 livres, 10, 15, 20 et 22,5 % ensuite, 25 % de 400 000 à 1,2 million, 27,5 % au-delà. Pour les hauts revenus, les premiers 1,2 million sont imposés à 25 % (source Catalogne Trade Portal). À 240 300 € (change supposé : 55 livres pour 1 €), le taux effectif est d'environ 27,3 %, au-dessus du seuil quel que soit le change de 50 à 60.

## Sources

- [Andersen Égypte, impôt sur le revenu 2026](https://eg.andersen.com/personal-income-tax/) (non officielle)
- [Teamed, tranches 2026](https://www.teamed.global/country-hiring-guides/egypt/tax-and-payroll) (non officielle)
- [ACCIÓ, fiscalité en Égypte](https://tradeportal.accio.gencat.cat/ca/mercats-potencials/egipte/impostos) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
