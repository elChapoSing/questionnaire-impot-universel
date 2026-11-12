# Comores (KM)

**Taux effectif retenu : entre 20,5 et 29,5 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : KMF. Cours utilisé : 1 EUR = 489,0575 KMF (Yahoo Finance EURKMF=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 489,0575 = 117 520 524 KMF.
- Déduction : Déduction forfaitaire de 30 % pour frais professionnels sur salaires (art. 59 CGI) : − 35 465 973 KMF.
- Base imposable : 82 054 551 KMF.

| De (KMF) | À (KMF) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 150 000 | 0,00 % | 150 000 | 0 |
| 150 000 | 500 000 | 5,00 % | 350 000 | 17 500 |
| 500 000 | 1 000 000 | 10,00 % | 500 000 | 50 000 |
| 1 000 000 | 1 500 000 | 15,00 % | 500 000 | 75 000 |
| 1 500 000 | 2 500 000 | 20,00 % | 1 000 000 | 200 000 |
| 2 500 000 | 3 500 000 | 25,00 % | 1 000 000 | 250 000 |
| 3 500 000 | et plus | 30,00 % | 78 554 551 | 23 566 365 |

- **Impôt total : 24 158 865 KMF, soit 20,6 % du salaire brut.**
- Hypothèse : Barème à 7 tranches (art. 97 CGI 2023).
- Hypothèse : Variante de la note : sans déduction de 30 %, 29,6 %.

## Note

IRPP à 7 tranches, taux maximal 30 % (art. 97 CGI 2023) avec déduction forfaitaire de 30 % pour frais professionnels sur salaires (art. 59). Variante sans déduction : 29,5 %.

## Sources

- [Comores - Code général des impôts 2023](https://justice.gouv.km/wp-content/uploads/2025/03/comores-cgi-2023.pdf) (officielle)
- [AfroTools - calcul salaire net Comores](https://afrotools.com/fr/comores/calculateur-salaire-net/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
