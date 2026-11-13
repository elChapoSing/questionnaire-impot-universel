# Suisse (CH)

**Taux effectif retenu : entre 16,0 et 34,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Cas limite.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : CHF. Cours utilisé : 1 EUR = 0,9236 CHF (Yahoo Finance EURCHF=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 0,9236 = 221 943 CHF.
- Base imposable : 221 943 CHF.

| De (CHF) | À (CHF) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 15 200 | 17,84 % | 15 200 | 2 712 |
| 15 200 | 33 200 | 18,61 % | 18 000 | 3 350 |
| 33 200 | 43 500 | 18,72 % | 10 300 | 1 928 |
| 43 500 | 58 000 | 20,48 % | 14 500 | 2 970 |
| 58 000 | 76 200 | 20,81 % | 18 200 | 3 787 |
| 76 200 | 82 100 | 23,78 % | 5 900 | 1 403 |
| 82 100 | 108 900 | 24,44 % | 26 800 | 6 550 |
| 108 900 | 141 500 | 26,64 % | 32 600 | 8 685 |
| 141 500 | 185 100 | 28,84 % | 43 600 | 12 574 |
| 185 100 | 793 900 | 31,04 % | 36 843 | 11 436 |
| 793 900 | et plus | 29,34 % | 0 | 0 |

- **Impôt total : 55 395 CHF, soit 25,0 % du salaire brut.**
- Hypothèse : Impôt fédéral direct 2026 pour personne seule (art. 36 LIFD, circulaire ESTV 2-215) auquel s'ajoute un taux cantonal et communal moyen de 17.84 % appliqué à tout le revenu : les taux sont cumulés.
- Hypothèse : Ce taux cantonal et communal est CALIBRÉ pour retrouver le taux de 25 % retenu (milieu de la fourchette de 16 % à 34 % selon canton et commune) ; il n'est pas tiré d'un barème. Les camarades suisses doivent le remplacer par le barème de leur canton.
- Hypothèse : Pas de déductions (3e pilier, frais, assurances) ; cotisations sociales exclues.

## Note

Le taux dépend du canton et de la commune : de 16 % (Zoug) à 32 % (Lausanne) selon Taxolution, de 17,6 % à 34,1 % selon PwC, pour un célibataire à 250 000 CHF, impôt fédéral compris. Le taux de 25 % servant au classement est le milieu de la fourchette, pas une moyenne.

## Sources

- [ESTV, barème de l'impôt fédéral 2026 (formulaire 58c, publié par le canton de Neuchâtel)](https://www.ne.ch/sites/default/files/2026-03/SCCO_bareme_IFD_PP_2026.pdf) (officielle)
- [Taxolution, taux effectifs par canton 2026](https://www.taxolution.ch/?p=12469) (non officielle)
- [PwC Suisse, comparatif fiscal des cantons](https://www.pwc.ch/en/services/tax-advice/taxcomparison.html) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
