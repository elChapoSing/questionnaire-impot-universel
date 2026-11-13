# Autriche (AT)

**Taux effectif retenu : 43,2 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Pas concerné·e (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : EUR. Cours utilisé : 1 EUR = 1 EUR (pays en euro, change 1).
- Salaire converti : 240 300 € × 1 = 240 300 EUR.
- Base imposable : 240 300 EUR.

| De (EUR) | À (EUR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 13 539 | 0,00 % | 13 539 | 0 |
| 13 539 | 21 992 | 20,00 % | 8 453 | 1 691 |
| 21 992 | 36 458 | 30,00 % | 14 466 | 4 340 |
| 36 458 | 70 365 | 40,00 % | 33 907 | 13 563 |
| 70 365 | 104 859 | 48,00 % | 34 494 | 16 557 |
| 104 859 | 1 000 000 | 50,00 % | 135 441 | 67 720 |
| 1 000 000 | et plus | 55,00 % | 0 | 0 |

- **Impôt total : 103 871 EUR, soit 43,2 % du salaire brut.**
- Hypothèse : Barème 2026 de l'article 33 de l'EStG : impôt cumulé de 36 150,32 € à 104 859 € (vérifié sur les tranches), 50 % de 104 859 à 1 000 000 €.
- Hypothèse : Pas de déduction forfaitaire ni de taux réduit de 6 % sur les 13e et 14e mois ; cotisations sociales exclues.

## Note

Autriche 2026 : barème de l'article 33 de l'EStG, 50 % entre 104 859 et 1 000 000 EUR, avec 36 150,32 EUR d'impôt cumulé à 104 859 EUR. Pour 240 300 EUR : environ 43,2 %.

## Sources

- [RIS, EStG article 33 (texte consolidé)](https://ris.bka.gv.at/Dokumente/Bundesnormen/NOR40279893/NOR40279893.pdf) (officielle)
- [USP.gv.at, niveaux du barème](https://www.usp.gv.at/en/themen/steuern-finanzen/einkommensteuer-ueberblick/weitere-informationen-est/tarifstufen.html) (officielle)
- [WKO, valeurs 2026](https://www.wko.at/steuern/einkommen-koerperschaftsteuer-2026) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
