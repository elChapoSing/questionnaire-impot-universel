# Inde (IN)

**Taux effectif retenu : 36,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : INR. Cours utilisé : 1 EUR = 104,071 INR (Yahoo Finance EURINR=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 104,071 = 25 008 261 INR.
- Base imposable : 25 008 261 INR.

| De (INR) | À (INR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 400 000 | 0,00 % | 400 000 | 0 |
| 400 000 | 800 000 | 5,00 % | 400 000 | 20 000 |
| 800 000 | 1 200 000 | 10,00 % | 400 000 | 40 000 |
| 1 200 000 | 1 600 000 | 15,00 % | 400 000 | 60 000 |
| 1 600 000 | 2 000 000 | 20,00 % | 400 000 | 80 000 |
| 2 000 000 | 2 400 000 | 25,00 % | 400 000 | 100 000 |
| 2 400 000 | et plus | 30,00 % | 22 608 261 | 6 782 478 |

- Majoration : surcharge de 25 % au-delà de 2 crores, puis cess de 4 % (1,25 × 1,04) : + 30,0 % de l'impôt.
- **Impôt total : 9 207 222 INR, soit 36,8 % du salaire brut.**
- Hypothèse : Nouveau régime ; majoration (surcharge) de 25 % de l'impôt au-delà de 2 crores de roupies, plafonnée à 25 % dans ce régime, puis cess de 4 % : les deux sont modélisées ensemble par 1,25 × 1,04 (majoration cumulée de 30 %).
- Hypothèse : Déduction forfaitaire de 75 000 roupies exclue.

## Note

Nouveau régime : tranche de 30 %, majoration de 25 % au-delà de 2 crores de roupies, cess de 4 %.

## Sources

- [Administration fiscale indienne, taux de l'impôt](https://www.incometaxindia.gov.in/w/tax-rates%E2%80%8B) (officielle)
- [BankBazaar, barème 2026-27](https://bankbazaar.com/tax/income-tax-slabs.html) (non officielle)
- [5paisa, barème 2026-27](https://www.5paisa.com/blog/income-tax-slab) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
