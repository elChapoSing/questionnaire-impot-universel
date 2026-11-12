# Guernesey (GG)

**Taux effectif retenu : 20,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Taux unique de 20 %. L'abattement personnel (15 200 £ en 2026) est supprimé progressivement au-delà de 85 000 £ de revenu : il est donc nul à 240 300 €. Taux effectif de 20 %. Des plafonds d'impôt existent sur option (160 000 £ pour les revenus de source étrangère), sans effet à ce niveau de revenu.

## Sources

- [PwC Tax Summaries, Guernesey](https://taxsummaries.pwc.com/guernsey/individual/significant-developments) (non officielle)
- [KPMG, fiscalité à Guernesey](https://kpmg.com/dp/en/services/tax/family-office-private-client/tax-in-guernsey.html) (non officielle)
- [Carey Olsen, Summary of Guernsey taxation](https://www.careyolsen.com/node/1028) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
