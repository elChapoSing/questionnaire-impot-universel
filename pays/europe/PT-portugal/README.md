# Portugal (PT)

**Taux effectif retenu : 43,3 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : EUR. Cours supposé : 1 EUR = 1 EUR (pays en euro, pas de change).
- Salaire converti : 240 300 € × 1 = 240 300 EUR.
- Base imposable : 240 300 EUR.

| De (EUR) | À (EUR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 8 342 | 12,20 % | 8 342 | 1 018 |
| 8 342 | 12 587 | 15,20 % | 4 245 | 645 |
| 12 587 | 17 838 | 20,70 % | 5 251 | 1 087 |
| 17 838 | 23 089 | 23,60 % | 5 251 | 1 239 |
| 23 089 | 29 397 | 30,60 % | 6 308 | 1 930 |
| 29 397 | 43 090 | 34,60 % | 13 693 | 4 738 |
| 43 090 | 46 566 | 43,10 % | 3 476 | 1 498 |
| 46 566 | 86 634 | 44,60 % | 40 068 | 17 870 |
| 86 634 | et plus | 48,00 % | 153 666 | 73 760 |

- **Impôt total : 103 785 EUR, soit 43,2 % du salaire brut.**
- Hypothèse : Taux normaux du barème IRS 2026 appliqués tranche par tranche (la méthode légale par taux moyen du dernier palier donne un résultat voisin).
- Hypothèse : Surtaxe de solidarité (2,5 % entre 80 000 et 250 000 €) non incluse ; avec elle, environ 44,9 %.

## Note

IRS 2026 : neuf tranches de 12,5 % à 48 % au-delà d'environ 86 600 € de revenu imposable. Taux effectif estimé à 43,3 % à 240 300 € (44,9 % avec la surtaxe de solidarité de 2,5 % entre 80 000 et 250 000 €). Estimation : le taux moyen à l'entrée de la dernière tranche est repris du barème 2025.

## Sources

- [Santander Portugal, tranches de l'IRS](https://www.santander.pt/salto/escaloes-irs) (non officielle)
- [Simula, simulateur IRS 2026 (surtaxe de solidarité)](https://simula.pt/simuladores/simulador_irs) (non officielle)
- [EY Portugal, budget 2026](https://www.ey.com/content/dam/ey-unified-site/ey-com/pt-pt/services/tax/documents/tax-alert-oe-2026.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
