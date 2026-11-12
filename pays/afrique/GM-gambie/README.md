# Gambie (GM)

**Taux effectif retenu : entre 24,9 et 29,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : GMD. Cours utilisé : 1 EUR = 82,6216 GMD (Yahoo Finance EURGMD=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 82,6216 = 19 853 961 GMD.
- Base imposable : 19 853 961 GMD.

| De (GMD) | À (GMD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 36 000 | 0,00 % | 36 000 | 0 |
| 36 000 | 46 000 | 5,00 % | 10 000 | 500 |
| 46 000 | 56 000 | 10,00 % | 10 000 | 1 000 |
| 56 000 | 66 000 | 15,00 % | 10 000 | 1 500 |
| 66 000 | 76 000 | 20,00 % | 10 000 | 2 000 |
| 76 000 | et plus | 25,00 % | 19 777 961 | 4 944 490 |

- **Impôt total : 4 949 490 GMD, soit 24,9 % du salaire brut.**
- Hypothèse : Barème 2025 (Rivermate, GRA) à taux maximal 25 % ; TaxAtlas indique 30 % au-delà de 86 000 GMD, d'où la fourchette 24,9 à 29,9 % de la note.

## Note

Cours Yahoo EURGMD=X du 13/11/2026 : 1 EUR = 82.62156 GMD (hypothèse initiale : 82). Taux recalculé : 24,9 % (avant : 24,9 %). Les chiffres de change et de taux cités plus bas datent de l'hypothèse initiale. Barème 2025 à taux maximal 25 % au-delà de 76 000 GMD ; une source (TaxAtlas) indique 30 % maximal, donc fourchette. Change (hypothèse) : 1 EUR = 82 GMD.

## Sources

- [Rivermate - fiscalité Gambie](https://rivermate.com/guides/gambia/taxes) (non officielle)
- [GRA - brochure fiscale (barème de 2018, 25 %)](https://gra.gm/download-file/8d0cd78a-d217-11ed-9b31-029254d29bb1) (officielle)
- [TaxAtlas - impôt Gambie](https://taxatlas.io/country/gambia/income-tax) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
