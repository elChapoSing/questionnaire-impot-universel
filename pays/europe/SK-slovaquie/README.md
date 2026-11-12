# Slovaquie (SK)

**Taux effectif retenu : 31,1 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : EUR. Cours supposé : 1 EUR = 1 EUR (pays en euro, pas de change).
- Salaire converti : 240 300 € × 1 = 240 300 EUR.
- Base imposable : 240 300 EUR.

| De (EUR) | À (EUR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 43 983 | 19,00 % | 43 983 | 8 357 |
| 43 983 | 60 349 | 25,00 % | 16 366 | 4 092 |
| 60 349 | 75 010 | 30,00 % | 14 661 | 4 398 |
| 75 010 | et plus | 35,00 % | 165 290 | 57 852 |

- **Impôt total : 74 698 EUR, soit 31,1 % du salaire brut.**
- Hypothèse : Seuils des deux premières tranches approximatifs (source non officielle) ; abattement personnel supposé nul à ce niveau de revenu.
- Hypothèse : Cotisations sociales exclues.

## Note

Barème de 19, 25, 30 puis 35 % au-delà de 75 010 €. Abattement personnel supposé nul à ce niveau de revenu.

## Sources

- [Administration financière slovaque, taux 2026](https://podpora.financnasprava.sk/081400-Sadzba-dane-z-pr%C3%ADjmov-fyzickej-osoby-za-rok-2026) (officielle)
- [KPMG, tranches de 30 % et 35 %](https://assets.kpmg.com/content/dam/kpmgsites/xx/pdf/2025/11/fa25-235.pdf.coredownload.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
