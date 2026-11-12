# Pays-Bas caribéens (BQ)

**Taux effectif retenu : entre 34,5 et 36,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : USD. Cours supposé : 1 EUR = 1,15 USD (hypothèse reprise de la note (EUR/USD 1,15), à remplacer par le cours Yahoo EURUSD=X).
- Salaire converti : 240 300 € × 1,15 = 276 345 USD.
- Base imposable : 276 345 USD.

| De (USD) | À (USD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 51 250 | 29,40 % | 51 250 | 15 068 |
| 51 250 | et plus | 38,40 % | 225 095 | 86 436 |

- **Impôt total : 101 504 USD, soit 36,7 % du salaire brut.**
- Hypothèse : Régime BES : taux 2026 du plan fiscal ; seuil de 51 250 USD de 2025 repris faute d'indexation 2026 trouvée.
- Hypothèse : Abattement de 20 424 USD non appliqué.
- Hypothèse : Variante avec taux 2025 (30,4 % / 35,4 %) : environ 34,5 %.

## Note

Bonaire, Saint-Eustache et Saba (régime BES propre) : 29,4 % jusqu'à 51 250 USD puis 38,4 % au-delà (taux 2026 annoncés dans le plan fiscal ; seuil 2025 repris faute d'indexation 2026 trouvée). Variante avec taux 2025 (30,4 % / 35,4 %) : environ 34,5 %. Abattement de 20 424 USD non appliqué. Hypothèse change : 1 EUR = 1,15 USD.

## Sources

- [Belastingdienst Caribisch Nederland - mesures plan fiscal 2026](https://english.belastingdienst-cn.nl/latest/news/2025/september/16/measures-caribbean-netherlands-law-proposal-tax-plan-2026) (officielle)
- [Rivermate - BES, taxes](https://rivermate.com/guides/bonaire-sint-eustatius-and-saba/taxes) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
