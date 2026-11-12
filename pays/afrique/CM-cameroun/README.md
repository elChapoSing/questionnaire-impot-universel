# Cameroun (CM)

**Taux effectif retenu : entre 26,3 et 37,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : XAF. Cours utilisé : 1 EUR = 655,957 XAF (Yahoo Finance EURXAF=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 655,957 = 157 626 467 XAF.
- Déduction : Déduction forfaitaire de 30 % pour frais professionnels sur salaires : − 47 287 940 XAF.
- Base imposable : 110 338 527 XAF.

| De (XAF) | À (XAF) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 2 000 000 | 11,00 % | 2 000 000 | 220 000 |
| 2 000 000 | 3 000 000 | 16,50 % | 1 000 000 | 165 000 |
| 3 000 000 | 5 000 000 | 27,50 % | 2 000 000 | 550 000 |
| 5 000 000 | et plus | 38,50 % | 105 338 527 | 40 555 333 |

- **Impôt total : 41 490 333 XAF, soit 26,3 % du salaire brut.**
- Hypothèse : Taux 10 / 15 / 25 / 35 % majorés de 10 % de centimes additionnels communaux (soit 11 / 16,5 / 27,5 / 38,5 %).
- Hypothèse : Abattement de 500 000 XAF et cotisations ignorés.
- Hypothèse : Variante de la note : sans la déduction de 30 %, 37,9 %.

## Note

IRPP 10/15/25/35 % majoré de 10 % de centimes communaux (11 à 38,5 %), avec déduction forfaitaire de 30 % pour frais professionnels sur salaires. Variante sans la déduction de 30 % : 37,9 %. Abattement de 500 000 XAF et cotisations ignorés. Cas proche de la bande.

## Sources

- [PwC Tax Summaries - Cameroun](https://taxsummaries.pwc.com/republic-of-cameroon/individual/taxes-on-personal-income) (non officielle)
- [PwC - Cameroon tax facts and figures 2025](https://www.pwc.com/gh/en/assets/pdf/cameroon-tax-facts-and-figures-2025.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
