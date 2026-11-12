# Suisse (CH)

**Taux effectif retenu : entre 16,0 et 34,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Le taux dépend du canton et de la commune : de 16 % (Zoug) à 32 % (Lausanne) selon Taxolution, de 17,6 % à 34,1 % selon PwC, pour un célibataire à 250 000 CHF, impôt fédéral compris. Le taux de 25 % servant au classement est le milieu de la fourchette, pas une moyenne.

## Sources

- [ESTV, barème de l'impôt fédéral 2026 (formulaire 58c, publié par le canton de Neuchâtel)](https://www.ne.ch/sites/default/files/2026-03/SCCO_bareme_IFD_PP_2026.pdf) (officielle)
- [Taxolution, taux effectifs par canton 2026](https://www.taxolution.ch/?p=12469) (non officielle)
- [PwC Suisse, comparatif fiscal des cantons](https://www.pwc.ch/en/services/tax-advice/taxcomparison.html) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
