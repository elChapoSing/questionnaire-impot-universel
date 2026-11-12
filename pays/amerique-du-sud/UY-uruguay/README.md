# Uruguay (UY)

**Taux effectif retenu : 26,1 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : UYU. Cours utilisé : 1 EUR = 44,96 UYU (Yahoo Finance EURUYU=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 44,96 = 10 803 888 UYU.
- Base imposable : 10 803 888 UYU.

| De (UYU) | À (UYU) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 576 576 | 0,00 % | 576 576 | 0 |
| 576 576 | 823 680 | 10,00 % | 247 104 | 24 710 |
| 823 680 | 1 235 520 | 15,00 % | 411 840 | 61 776 |
| 1 235 520 | 2 471 040 | 24,00 % | 1 235 520 | 296 525 |
| 2 471 040 | 4 118 400 | 25,00 % | 1 647 360 | 411 840 |
| 4 118 400 | 6 177 600 | 27,00 % | 2 059 200 | 555 984 |
| 6 177 600 | 9 472 320 | 31,00 % | 3 294 720 | 1 021 363 |
| 9 472 320 | et plus | 36,00 % | 1 331 568 | 479 364 |

- **Impôt total : 2 851 563 UYU, soit 26,4 % du salaire brut.**
- Hypothèse : IRPF travail : barème mensuel en BPC (BPC 2026 : 6 864 pesos) multiplié par 12 pour l'année : 0 % jusqu'à 7 BPC, puis 10 %, 15 %, 24 %, 25 %, 27 %, 31 % et 36 % au-delà de 115 BPC par mois. Seuils intermédiaires du barème standard, à confirmer avec le communiqué du BPS.
- Hypothèse : Avant déductions ; la note donne 25,2 % à 27,0 % pour 40 à 48 pesos pour 1 EUR.

## Note

IRPF travail : tranches mensuelles de 0 % à 36 % (36 % au-delà de 115 BPC par mois ; BPC 2026 : 6 864 pesos). Les revenus du capital sont taxés à 7 à 12 %.

## Sources

- [BPS, valeurs des barèmes de l'IRPF 2026 (BPC 6 864)](https://www.bps.gub.uy/23860/2026---comunicado-r-5---valores-escalas-irpf-2026.html) (officielle)
- [BPS, barèmes de l'IRPF 2025 (tranches de 10 % à 36 %)](https://bps.gub.uy/bps/file/22584/1/2025---comunicado-2---valores-escalas-irpf-2025.pdf) (officielle)
- [Uruguay XXI, système fiscal 2026](https://www.uruguayxxi.gub.uy/en/invest/investors-guide/tax-system-2026/download/) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
