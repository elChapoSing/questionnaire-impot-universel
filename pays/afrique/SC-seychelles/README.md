# Seychelles (SC)

**Taux effectif retenu : entre 26,5 et 27,8 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : SCR. Cours supposé : 1 EUR = 16,5 SCR (hypothèse reprise de la note, à remplacer par le cours Yahoo EUREURSCR=X).
- Salaire converti : 240 300 € × 16,5 = 3 964 950 SCR.
- Base imposable : 3 964 950 SCR.

| De (SCR) | À (SCR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 150 000 | 0,00 % | 150 000 | 0 |
| 150 000 | 600 000 | 15,00 % | 450 000 | 67 500 |
| 600 000 | et plus | 30,00 % | 3 364 950 | 1 009 485 |

- **Impôt total : 1 076 985 SCR, soit 27,2 % du salaire brut.**
- Hypothèse : Seuil d'exonération de 150 000 SCR.

## Note

Barème 0 / 15 / 30 % avec 150 000 SCR exonérés et taux de 30 % au-delà de 600 000 SCR. Change (hypothèse) : 1 EUR = 16,5 SCR ; de 26,7 à 27,7 selon le change. Cas proche du haut de la bande.

## Sources

- [TaxAtlas - impôt Seychelles](https://taxatlas.io/country/seychelles/income-tax) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
