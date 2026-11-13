# Laos (LA)

**Taux effectif retenu : 23,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Cas limite.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : LAK. Cours utilisé : 1 EUR = 24 962 LAK (Yahoo Finance EURLAK=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 24 962 = 5 998 368 600 LAK.
- Base imposable : 5 998 368 600 LAK.

| De (LAK) | À (LAK) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 30 000 000 | 0,00 % | 30 000 000 | 0 |
| 30 000 000 | 60 000 000 | 5,00 % | 30 000 000 | 1 500 000 |
| 60 000 000 | 180 000 000 | 10,00 % | 120 000 000 | 12 000 000 |
| 180 000 000 | 300 000 000 | 15,00 % | 120 000 000 | 18 000 000 |
| 300 000 000 | 780 000 000 | 20,00 % | 480 000 000 | 96 000 000 |
| 780 000 000 | et plus | 25,00 % | 5 218 368 600 | 1 304 592 150 |

- **Impôt total : 1 432 092 150 LAK, soit 23,9 % du salaire brut.**
- Hypothèse : Barème mensuel en vigueur depuis le 1er juillet 2026 (0 % jusqu'à 2,5 M ; 5 % jusqu'à 5 M ; 10 % jusqu'à 15 M ; 15 % jusqu'à 25 M ; 20 % jusqu'à 65 M ; 25 % au-delà) multiplié par 12.
- Hypothèse : Aucune déduction appliquée.

## Note

Barème mensuel de 0 à 25 % (0 % jusqu'à 2,5 millions de kips depuis juillet 2026, 25 % au-delà de 65 millions par mois). À ce revenu, l'essentiel est taxé à 25 %.

## Sources

- [VDB Loi, nouvelle loi sur l'impôt sur le revenu (juillet 2026)](https://vdb-loi.com/laos_publication/vdb-loi-laos-alert-new-income-tax-law-2025-effective-1-july-2026/) (non officielle)
- [PwC Worldwide Tax Summaries](https://taxsummaries.pwc.com/lao-pdr/individual) (non officielle)
- [Deloitte, Laos Highlights 2025](https://www.deloitte.com/content/dam/assets-shared/docs/services/tax/2025/dttl-tax-laoshighlights-2025.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
