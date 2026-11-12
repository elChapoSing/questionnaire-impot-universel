# Lesotho (LS)

**Taux effectif retenu : 29,8 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : LSL. Cours supposé : 1 EUR = 20 LSL (hypothèse reprise de la note, à remplacer par le cours Yahoo EUREURLSL=X).
- Salaire converti : 240 300 € × 20 = 4 806 000 LSL.
- Base imposable : 4 806 000 LSL.

| De (LSL) | À (LSL) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 77 760 | 20,00 % | 77 760 | 15 552 |
| 77 760 | et plus | 30,00 % | 4 728 240 | 1 418 472 |

- **Impôt total : 1 434 024 LSL, soit 29,8 % du salaire brut.**
- Hypothèse : Barème en vigueur au 1er avril 2026.
- Hypothèse : Crédit d'impôt personnel de 12 240 LSL ignoré.

## Note

Taux de 20 % puis 30 % au-delà de 77 760 LSL par an (barème en vigueur 1er avril 2026) ; crédit d'impôt personnel de 12 240 LSL ignoré. Change (hypothèse) : 1 EUR = 20 LSL.

## Sources

- [RSL Lesotho - barème 2026-2027](https://www.rsl.org.ls/sites/default/files/2026-06/2026%20-2027%20Income%20Tax%20structure.pdf) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
