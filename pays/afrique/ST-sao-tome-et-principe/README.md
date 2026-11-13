# Sao Tomé-et-Principe (ST)

**Taux effectif retenu : entre 24,2 et 24,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Cas limite.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : STN. Cours utilisé : 1 EUR = 24,5 STN (parité fixe STN/EUR (24,5), reprise de la note).
- Salaire converti : 240 300 € × 24,5 = 5 887 350 STN.
- Base imposable : 5 887 350 STN.

| De (STN) | À (STN) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 11 700 | 0,00 % | 11 700 | 0 |
| 11 700 | 50 000 | 10,00 % | 38 300 | 3 830 |
| 50 000 | 100 000 | 13,00 % | 50 000 | 6 500 |
| 100 000 | 150 000 | 15,00 % | 50 000 | 7 500 |
| 150 000 | 240 000 | 20,00 % | 90 000 | 18 000 |
| 240 000 | et plus | 25,00 % | 5 647 350 | 1 411 838 |

- **Impôt total : 1 447 668 STN, soit 24,6 % du salaire brut.**
- Hypothèse : Source unique non officielle (Immigrant Invest, loi 11/2009 art. 66).
- Hypothèse : Barème appliqué en tranches marginales ; la source donne aussi des montants déductibles par tranche, non reproduits (variante 24,2 à 24,9 % de la note).

## Note

Source unique non officielle : IRS annuel à 6 tranches, taux maximal 25 % au-delà de 240 000 STN. Déductions par tranche non reproduites.

## Sources

- [Immigrant Invest - impôts à São Tomé-et-Príncipe](https://immigrantinvest.com/fr/blog/sao-tome-and-principe-taxes) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
