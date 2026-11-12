# Turquie (TR)

**Taux effectif retenu : 36,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : TRY. Cours utilisé : 1 EUR = 55,7364 TRY (Yahoo Finance EURTRY=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 55,7364 = 13 393 464 TRY.
- Base imposable : 13 393 464 TRY.

| De (TRY) | À (TRY) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 190 000 | 15,00 % | 190 000 | 28 500 |
| 190 000 | 400 000 | 20,00 % | 210 000 | 42 000 |
| 400 000 | 1 500 000 | 27,00 % | 1 100 000 | 297 000 |
| 1 500 000 | 5 300 000 | 35,00 % | 3 800 000 | 1 330 000 |
| 5 300 000 | et plus | 40,00 % | 8 093 464 | 3 237 386 |

- **Impôt total : 4 934 886 TRY, soit 36,8 % du salaire brut.**
- Hypothèse : Barème 2026 des salaires.
- Hypothèse : Le taux reste au-dessus de 36 % de 45 à 55 livres pour 1 €. Déductions exclues.

## Note

Barème 2026 des salaires : 15 % jusqu'à 190 000 livres, 20 % jusqu'à 400 000, 27 % jusqu'à 1,5 million, 35 % jusqu'à 5,3 millions, 40 % au-delà. À 240 300 €, le taux effectif est d'environ 36,5 %.

## Sources

- [PwC Tax Summaries, Turquie](https://taxsummaries.pwc.com/turkey/individual/taxes-on-personal-income) (non officielle)
- [Orbitax, communiqué n° 332 (barème 2026)](https://orbitax.com/news/country/article/Turkey-Updates-Individual-Inco-60850) (non officielle)
- [Cott Group, barème des salaires 2026](https://cottgroup.com/tr/component/zoo/item/tax-brackets-and-income-tax-calculation-in-turkiye) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
