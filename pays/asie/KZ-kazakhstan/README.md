# Kazakhstan (KZ)

**Taux effectif retenu : 13,4 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement en dessous du seuil (condition remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : KZT. Cours utilisé : 1 EUR = 492,67 KZT (Yahoo Finance EURKZT=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 492,67 = 118 388 601 KZT.
- Base imposable : 118 388 601 KZT.

| De (KZT) | À (KZT) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 36 762 500 | 10,00 % | 36 762 500 | 3 676 250 |
| 36 762 500 | et plus | 15,00 % | 81 626 101 | 12 243 915 |

- **Impôt total : 15 920 165 KZT, soit 13,4 % du salaire brut.**
- Hypothèse : Barème 2026 : 10 % jusqu'à 8 500 indices mensuels de calcul (ici annualisés : 8 500 × 4 325 tenge, indice 2026 supposé), 15 % au-delà.
- Hypothèse : Déduction standard exclue ; cotisations sociales exclues.

## Note

10 % jusqu'à 8 500 indices mensuels, 15 % au-delà. Même avec 15 % sur tout le revenu, le résultat reste sous le seuil.

## Sources

- [Comité des recettes de l'État du Kazakhstan (gov.kz), barème 10 % / 15 %](https://www.gov.kz/org/kgd-vko/press/news/details/1208156?lang=en) (officielle)
- [PwC Worldwide Tax Summaries](https://taxsummaries.pwc.com/kazakhstan/individual/taxes-on-personal-income) (non officielle)
- [Baker McKenzie, nouveau Code des impôts](https://www.bakermckenzie.com/en/insight/publications/alerts/2025/09/kazakhstan-new-tax-code) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
