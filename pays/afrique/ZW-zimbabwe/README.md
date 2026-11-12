# Zimbabwe (ZW)

**Taux effectif retenu : entre 37,9 et 39,2 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : USD. Cours supposé : 1 EUR = 1,165 USD (hypothèse reprise de la note, à remplacer par le cours Yahoo EUREURUSD=X).
- Salaire converti : 240 300 € × 1,165 = 279 950 USD.
- Base imposable : 279 950 USD.

| De (USD) | À (USD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 1 200 | 0,00 % | 1 200 | 0 |
| 1 200 | 3 600 | 20,00 % | 2 400 | 480 |
| 3 600 | 36 000 | 25,00 % | 32 400 | 8 100 |
| 36 000 | et plus | 40,00 % | 243 950 | 97 580 |

- Majoration : Contribution SIDA (AIDS levy) : + 3,0 % de l'impôt.
- **Impôt total : 109 345 USD, soit 39,1 % du salaire brut.**
- Hypothèse : Barème en USD non vérifié sur la source primaire ZIMRA.
- Hypothèse : Variante de la note : sans la contribution SIDA, 37,9 %.

## Note

Barème en USD, taux maximal 40 % au-delà de 36 000 USD, majoré de 3 % de contribution SIDA. Variante sans cette contribution : 37,9 %. Barème non vérifié sur la source primaire ZIMRA. Change (hypothèse) : 1 EUR = 1,165 USD.

## Sources

- [CountryTaxCalc - PAYE Zimbabwe 2026](https://www.countrytaxcalc.com/tax-guides/zimbabwe-paye-tax-guide-2026/) (non officielle)
- [ZimPriceCheck - tables PAYE ZIMRA 2025](https://zimpricecheck.com/news/zimra-unveils-2025-paye-tax-tables-amidst-increased-scrutiny-on-taxpayers) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
