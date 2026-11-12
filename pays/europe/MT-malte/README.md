# Malte (MT)

**Taux effectif retenu : 31,1 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : EUR. Cours supposé : 1 EUR = 1 EUR (pays en euro, pas de change).
- Salaire converti : 240 300 € × 1 = 240 300 EUR.
- Base imposable : 240 300 EUR.

| De (EUR) | À (EUR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 12 000 | 0,00 % | 12 000 | 0 |
| 12 000 | 16 000 | 15,00 % | 4 000 | 600 |
| 16 000 | 60 000 | 25,00 % | 44 000 | 11 000 |
| 60 000 | et plus | 35,00 % | 180 300 | 63 105 |

- **Impôt total : 74 705 EUR, soit 31,1 % du salaire brut.**
- Hypothèse : Barème 2026 pour une personne seule ; régimes spéciaux de non-domiciliés non modélisés.

## Note

Barème 2026 pour une personne seule : 0 % jusqu'à 12 000 €, 15 % jusqu'à 16 000 €, 25 % jusqu'à 60 000 €, 35 % au-delà. Les régimes spéciaux de non-domiciliés ne sont pas modélisés.

## Sources

- [PwC Worldwide Tax Summaries](https://taxsummaries.pwc.com/malta/individual/taxes-on-personal-income) (non officielle)
- [Chambers, Corporate Tax 2026 : Malte](https://practiceguides.chambers.com/practice-guides/corporate-tax-2026/malta) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
