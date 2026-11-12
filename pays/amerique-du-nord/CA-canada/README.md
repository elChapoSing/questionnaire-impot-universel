# Canada (CA)

**Taux effectif retenu : 36,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Impôt fédéral : 14 % à 33 % (barème 2026), soit 25,4 % à ce revenu. Avec l'Ontario (5,05 % à 13,16 %, sans la surtaxe) : environ 36 %. Les autres provinces vont de 8 % (Alberta, première tranche) à 25,75 % (Québec, tranche haute). Taux marginal maximal combiné : de 44,5 % à 58,75 % selon la province. Change supposé : 1,54 dollar canadien pour 1 €.

## Sources

- [Agence du revenu du Canada, taux d'imposition de l'année 2026](https://www.canada.ca/en/revenue-agency/services/tax/individuals/tax-rates-brackets/current-year.html) (officielle)
- [KPMG Canada, taux et tranches fédéraux et provinciaux 2026 (au 30 juin 2026)](https://assets.kpmg.com/content/dam/kpmgsites/ca/pdf/services/tax/personal-tables/ca-federal-and-provincial-territorial-income-tax-rates-and-brackets-for-2026.pdf.coredownload.inline.pdf) (non officielle)
- [iFinanceCanada, barèmes de l'Ontario 2026](https://ifinancecanada.com/2026-canada-tax-brackets-what-are-the-federal-and-provincial-income-tax-rates-this-year/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
