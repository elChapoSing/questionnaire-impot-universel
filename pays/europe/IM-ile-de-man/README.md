# Île de Man (IM)

**Taux effectif retenu : 20,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

2026/27 : 10 % sur les 6 500 premières livres au-dessus de l'abattement, 21 % au-delà. L'abattement de 17 000 £ est réduit de 1 £ pour 2 £ au-dessus de 100 000 £ de revenu : il est nul à 240 300 €. Taux effectif d'environ 20,7 %. Change supposé : 0,87 £ pour 1 € (effet négligeable). Un plafond d'impôt optionnel de 220 000 £ n'a pas d'effet à ce niveau.

## Sources

- [Gouvernement de l'île de Man, taux et abattements 2026/27](https://www.gov.im/categories/tax-vat-and-your-money/income-tax-and-national-insurance/tax-practitioners-and-technical-information/rates-and-allowances) (officielle)
- [PwC Tax Summaries, île de Man](https://taxsummaries.pwc.com/isle-of-man/individual/taxes-on-personal-income) (non officielle)
- [KPMG, fiscalité de l'île de Man](https://kpmg.com/dp/en/home/services/tax/family-office-and-private-client/tax-in-the-isle-of-man.html) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
