# Namibie (NA)

**Taux effectif retenu : 34,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : NAD. Cours supposé : 1 EUR = 20 NAD (hypothèse reprise de la note, à remplacer par le cours Yahoo EUREURNAD=X).
- Salaire converti : 240 300 € × 20 = 4 806 000 NAD.
- Base imposable : 4 806 000 NAD.

| De (NAD) | À (NAD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 100 000 | 0,00 % | 100 000 | 0 |
| 100 000 | 150 000 | 18,00 % | 50 000 | 9 000 |
| 150 000 | 350 000 | 25,00 % | 200 000 | 50 000 |
| 350 000 | 550 000 | 28,00 % | 200 000 | 56 000 |
| 550 000 | 850 000 | 30,00 % | 300 000 | 90 000 |
| 850 000 | 1 550 000 | 32,00 % | 700 000 | 224 000 |
| 1 550 000 | et plus | 37,00 % | 3 256 000 | 1 204 720 |

- **Impôt total : 1 633 720 NAD, soit 34,0 % du salaire brut.**
- Hypothèse : Barème 2026/27 (PwC Namibie) ; aucun abattement ni crédit listé.

## Note

Barème 2026/27 à 7 tranches, taux maximal 37 % au-delà de 1,55 M NAD. Change (hypothèse) : 1 EUR = 20 NAD.

## Sources

- [PwC Namibie - Tax reference and rate card 2026](https://www.pwc.com/na/en/assets/pdf/namibia-tax-reference-and-rate-card-2026%20-%20May.pdf) (non officielle)
- [PwC Tax Summaries - Namibie](https://taxsummaries.pwc.com/republic-of-namibia/individual/taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
