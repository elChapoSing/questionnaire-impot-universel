# Bénin (BJ)

**Taux effectif retenu : 29,4 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : XOF. Cours utilisé : 1 EUR = 655,957 XOF (Yahoo Finance EURXOF=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 655,957 = 157 626 467 XOF.
- Base imposable : 157 626 467 XOF.

| De (XOF) | À (XOF) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 720 000 | 0,00 % | 720 000 | 0 |
| 720 000 | 1 800 000 | 10,00 % | 1 080 000 | 108 000 |
| 1 800 000 | 3 000 000 | 15,00 % | 1 200 000 | 180 000 |
| 3 000 000 | 6 000 000 | 19,00 % | 3 000 000 | 570 000 |
| 6 000 000 | et plus | 30,00 % | 151 626 467 | 45 487 940 |

- **Impôt total : 46 345 940 XOF, soit 29,4 % du salaire brut.**
- Hypothèse : Barème ITS mensuel (art. 125 CGI) multiplié par 12.
- Hypothèse : Cotisations sociales exclues.

## Note

ITS : barème mensuel à 5 tranches, taux maximal 30 % au-delà de 500 000 XOF/mois (art. 125 CGI 2024). Change : XOF fixe, 655,957 par EUR.

## Sources

- [Impôts Bénin - Code général des impôts 2024](https://api.impots.bj/media/6728ab1c677d7_Benin-General%20Tax%20Code-2024%20Official.pdf) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
