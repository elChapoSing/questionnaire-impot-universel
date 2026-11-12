# Guatemala (GT)

**Taux effectif retenu : 6,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement en dessous du seuil (condition remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Salariés : 5 % jusqu'à 300 000 quetzales, puis 7 % (15 000 quetzales fixes plus 7 % de l'excédent). Régime des salariés seulement : les revenus d'activité lucrative relèvent d'un autre régime (jusqu'à 25 % des bénéfices). Source officielle (SAT) non lue. Change supposé : 8,6 quetzales pour 1 €.

## Sources

- [Living in Guatemala, calculateur de l'impôt des salariés 2026](https://livinginguatemala.com/es/tramites/isr-asalariados-calculadora/) (non officielle)
- [TopTrabajos, impôt sur le revenu au Guatemala 2026](https://www.toptrabajos.com/gt/blog/impuesto-sobre-la-renta-guatemala/) (non officielle)
- [Deloitte Guatemala, régime des salariés](https://www2.deloitte.com/content/dam/Deloitte/gt/Documents/tax/event/Presentaci%C3%B3n%20Seminario%20Temas%20Migratorios.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
