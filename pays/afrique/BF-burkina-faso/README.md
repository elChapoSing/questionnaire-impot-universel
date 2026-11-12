# Burkina Faso (BF)

**Taux effectif retenu : entre 18,6 et 24,8 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : XOF. Cours supposé : 1 EUR = 655,957 XOF (parité fixe XOF/EUR (655,957), reprise de la note).
- Salaire converti : 240 300 € × 655,957 = 157 626 467 XOF.
- Déduction : Abattement forfaitaire de 20 % pour frais professionnels (art. 111 CGI) : − 31 525 293 XOF.
- Base imposable : 126 101 174 XOF.

| De (XOF) | À (XOF) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 360 000 | 0,00 % | 360 000 | 0 |
| 360 000 | 600 000 | 12,10 % | 240 000 | 29 040 |
| 600 000 | 960 000 | 13,90 % | 360 000 | 50 040 |
| 960 000 | 1 440 000 | 15,70 % | 480 000 | 75 360 |
| 1 440 000 | 2 040 000 | 18,50 % | 600 000 | 111 000 |
| 2 040 000 | 3 000 000 | 21,30 % | 960 000 | 204 480 |
| 3 000 000 | et plus | 25,00 % | 123 101 174 | 30 775 294 |

- **Impôt total : 31 245 214 XOF, soit 19,8 % du salaire brut.**
- Hypothèse : Barème IUTS mensuel (art. 112 CGI) multiplié par 12.
- Hypothèse : Variantes de la note : abattement de 25 % donne 18,6 % ; sans abattement 24,8 %.
- Hypothèse : Réduction pour charges de famille ignorée.

## Note

IUTS : barème mensuel à taux maximal 25 % (art. 112 CGI) avec abattement forfaitaire pour frais professionnels de 20 % pour les catégories supérieures (art. 111). Variantes : abattement de 25 % donne 18,6 % ; sans abattement 24,8 %. Réduction pour charges de famille ignorée. Change : XOF fixe, 655,957 par EUR.

## Sources

- [DGI Burkina - Code général des impôts 2023](https://dgi.bf/wp-content/uploads/2023/10/CODE-GENERAL-DES-IMPOTS-2023-A-JOUR-AVEC-LA-LOI-DE-FINANCE-2023.pdf) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
