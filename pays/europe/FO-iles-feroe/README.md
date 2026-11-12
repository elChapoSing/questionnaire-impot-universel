# Îles Féroé (FO)

**Taux effectif retenu : entre 41,5 et 48,5 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : DKK. Cours utilisé : 1 EUR = 7,4754 DKK (Yahoo Finance EURDKK=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 7,4754 = 1 796 346 DKK.
- Base imposable : 1 796 346 DKK.

| De (DKK) | À (DKK) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 65 000 | 19,00 % | 65 000 | 12 350 |
| 65 000 | 180 000 | 32,00 % | 115 000 | 36 800 |
| 180 000 | 330 000 | 34,00 % | 150 000 | 51 000 |
| 330 000 | 450 000 | 39,00 % | 120 000 | 46 800 |
| 450 000 | 600 000 | 44,00 % | 150 000 | 66 000 |
| 600 000 | et plus | 49,00 % | 1 196 346 | 586 209 |

- **Impôt total : 799 159 DKK, soit 44,5 % du salaire brut.**
- Hypothèse : Impôt national 2026 (0 / 13 / 15 / 20 / 25 / 30 %, impôt fixe de 98 950 DKK à 600 000) plus impôt communal forfaitaire de 19 % (milieu de la fourchette de 16 à 23 %), appliqué à tout le revenu : les taux sont cumulés.
- Hypothèse : Fourchette de la note : 41,5 % avec 16 % de commune, 48,5 % avec 23 %.
- Hypothèse : Abattement personnel, taxe d'église (0,6 à 0,9 %) et cotisations exclus.

## Note

Impôt national 2026 progressif de 13 % à 30 % (30 % au-delà de 600 000 DKK, base de 98 950). Impôt communal forfaitaire de 16 à 23 % selon la commune (19 % retenu au centre de la fourchette). Taxe d'église (0,6 à 0,9 %) exclue.

## Sources

- [Administration fiscale féroïenne (TAKS) - barème de l'impôt national](https://www.taks.fo/fo/borgari/gjold-og-agodar/landsskattatalva/) (officielle)
- [TAKS - fiscalité aux Îles Féroé](https://www.taks.fo/en/individuals/tax/taxation-in-the-faroes/) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
