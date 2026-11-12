# Papouasie-Nouvelle-Guinée (PG)

**Taux effectif retenu : 40,6 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : PGK. Cours supposé : 1 EUR = 4,9 PGK (hypothèse reprise de la note (4,9 kinas pour 1 EUR)).
- Salaire converti : 240 300 € × 4,9 = 1 177 470 PGK.
- Base imposable : 1 177 470 PGK.

| De (PGK) | À (PGK) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 20 000 | 0,00 % | 20 000 | 0 |
| 20 000 | 33 000 | 30,00 % | 13 000 | 3 900 |
| 33 000 | 70 000 | 35,00 % | 37 000 | 12 950 |
| 70 000 | 250 000 | 40,00 % | 180 000 | 72 000 |
| 250 000 | et plus | 42,00 % | 927 470 | 389 537 |

- **Impôt total : 478 387 PGK, soit 40,6 % du salaire brut.**
- Hypothèse : Barème des résidents (loi de 2025, depuis janvier 2026) : 0 % jusqu'à 20 000 kinas, puis 30 %, 35 %, 40 % et 42 % au-delà de 250 000. Les tranches intermédiaires (33 000 et 70 000) viennent des barèmes antérieurs, comme le dit la note.

## Note

Barème des résidents (loi de 2025, en vigueur depuis janvier 2026) : 0 % jusqu'à 20 000 kinas, puis jusqu'à 42 % au-delà de 250 000. Les tranches intermédiaires viennent des barèmes antérieurs. Change supposé : 4,9 kinas pour 1 €.

## Sources

- [Bloomberg Tax, Income Tax Act 2025](https://news.bloombergtax.com/daily-tax-report-international/papua-new-guinea-parliament-posts-income-tax-act-2025) (non officielle)
- [KPMG, Papouasie-Nouvelle-Guinée (mars 2026)](https://assets.kpmg.com/content/dam/kpmgsites/xx/pdf/2023/01/TBB-PapuaNewGuinea.pdf.coredownload.inline.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
