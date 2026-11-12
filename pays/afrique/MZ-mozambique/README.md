# Mozambique (MZ)

**Taux effectif retenu : 31,2 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : MZN. Cours supposé : 1 EUR = 74 MZN (hypothèse reprise de la note, à remplacer par le cours Yahoo EUREURMZN=X).
- Salaire converti : 240 300 € × 74 = 17 782 200 MZN.
- Base imposable : 17 782 200 MZN.

| De (MZN) | À (MZN) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | et plus | 32,00 % | 17 782 200 | 5 690 304 |

- Crédit : Parcela a abater de la formule IRPS (PwC) : − 141 540 MZN.
- **Impôt total : 5 548 764 MZN, soit 31,2 % du salaire brut.**
- Hypothèse : Formule applicable à la dernière tranche (au-delà de 1,512 M MZN) : impôt = 32 % x revenu imposable - 141 540.

## Note

IRPS : taux maximal 32 % au-delà de 1,512 M MZN avec déduction de 141 540 MZN (formule PwC). Change (hypothèse) : 1 EUR = 74 MZN.

## Sources

- [PwC Tax Summaries - Mozambique](https://taxsummaries.pwc.com/mozambique/individual/taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
