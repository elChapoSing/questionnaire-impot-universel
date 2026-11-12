# Taïwan (TW)

**Taux effectif retenu : 29,8 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : TWD. Cours supposé : 1 EUR = 37 TWD (la note cite cbonds du 18 juillet 2026 sans chiffre ; valeur reconstituée, à remplacer par EURTWD=X).
- Salaire converti : 240 300 € × 37 = 8 891 100 TWD.
- Base imposable : 8 891 100 TWD.

| De (TWD) | À (TWD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 590 000 | 5,00 % | 590 000 | 29 500 |
| 590 000 | 1 330 000 | 12,00 % | 740 000 | 88 800 |
| 1 330 000 | 2 660 000 | 20,00 % | 1 330 000 | 266 000 |
| 2 660 000 | 4 980 000 | 30,00 % | 2 320 000 | 696 000 |
| 4 980 000 | et plus | 40,00 % | 3 911 100 | 1 564 440 |

- **Impôt total : 2 644 740 TWD, soit 29,7 % du salaire brut.**
- Hypothèse : Barème 2024-2025 (tranche de 40 % au-delà de 4,98 millions de dollars taïwanais), repris par la note.
- Hypothèse : Exemptions et déductions exclues.

## Note

Tranche de 40 % au-delà de 4,98 millions de dollars taïwanais (barème 2024-2025). Taux de change non BCE : cbonds, 18 juillet 2026.

## Sources

- [Administration fiscale taïwanaise, barème progressif](https://www.etax.nat.gov.tw/etwmain/en/announcement/alien-individual-income-tax/progressive-tax-rate) (officielle)
- [PwC Worldwide Tax Summaries](https://taxsummaries.pwc.com/taiwan/individual/taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
