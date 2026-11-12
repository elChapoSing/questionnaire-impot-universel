# Îles Malouines (FK)

**Taux effectif retenu : entre 23,7 et 25,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : GBP. Cours utilisé : 1 EUR = 0,8359 GBP (Yahoo Finance EURGBP=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 0,8359 = 200 862 GBP.
- Base imposable : 200 862 GBP.

| De (GBP) | À (GBP) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 12 000 | 21,00 % | 12 000 | 2 520 |
| 12 000 | et plus | 26,00 % | 188 862 | 49 104 |

- **Impôt total : 51 624 GBP, soit 25,7 % du salaire brut.**
- Hypothèse : 21 % sur les 12 000 premières livres, 26 % au-delà.
- Hypothèse : Abattement personnel de 15 960 GBP non appliqué (variante de la note : environ 23,7 %).

## Note

Cours Yahoo EURGBP=X du 13/11/2026 : 1 EUR = 0.83588 GBP (hypothèse initiale : 0.87). Taux recalculé : 25,7 % (avant : 25,7 %). Les chiffres de change et de taux cités plus bas datent de l'hypothèse initiale. 21 % sur les 12 000 premières GBP puis 26 %. Abattement de 15 960 GBP non appliqué (variante : environ 23,7 %). Hypothèse change : 1 EUR = 0,87 GBP, soit environ 209 100 GBP. Peu sensible au change.

## Sources

- [Falkland Islands Government Taxation Office - guide 2024 et suivants](https://falklands.gov.fk/taxation/images/General_Tax_Guide_Individuals_2024_onwards.pdf) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
