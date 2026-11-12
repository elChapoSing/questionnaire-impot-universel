# Cap-Vert (CV)

**Taux effectif retenu : 27,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : CVE. Cours utilisé : 1 EUR = 110,265 CVE (Yahoo Finance EURCVE=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 110,265 = 26 496 680 CVE.
- Base imposable : 26 496 680 CVE.

| De (CVE) | À (CVE) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 960 000 | 16,50 % | 960 000 | 158 400 |
| 960 000 | 1 800 000 | 23,10 % | 840 000 | 194 040 |
| 1 800 000 | et plus | 27,50 % | 24 696 680 | 6 791 587 |

- **Impôt total : 7 144 027 CVE, soit 27,0 % du salaire brut.**
- Hypothèse : Barème IRS de la méthode déclarative (PwC) ; exonération annuelle de 220 000 CVE non appliquée.

## Note

IRS, taux de 16,5 / 23,1 / 27,5 % (27,5 % au-delà de 1,8 M CVE). Exonération annuelle de 220 000 CVE non appliquée. Change : CVE arrimé à l'EUR, 110,265 par EUR. Cas proche du haut de la bande.

## Sources

- [PwC Tax Summaries - Cabo Verde](https://taxsummaries.pwc.com/cabo-verde/individual/taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
