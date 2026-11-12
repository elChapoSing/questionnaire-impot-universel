# Îles Marshall (MH)

**Taux effectif retenu : entre 11,6 et 11,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement en dessous du seuil (condition remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : USD. Cours utilisé : 1 EUR = 1,1065 USD (Yahoo Finance EURUSD=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 1,1065 = 265 884 USD.
- Base imposable : 265 884 USD.

| De (USD) | À (USD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 10 400 | 8,00 % | 10 400 | 832 |
| 10 400 | et plus | 12,00 % | 255 484 | 30 658 |

- **Impôt total : 31 490 USD, soit 11,8 % du salaire brut.**
- Hypothèse : Taxe sur salaires : 8 % sur les premiers 10 400 USD, 12 % au-delà (loi modificative 2025, en vigueur au 1er octobre 2025).
- Hypothèse : Variante basse de la note (11,6 %) non retenue ; une source non officielle évoque une franchise de 8 320 USD, contradictoire avec le texte de loi.

## Note

Taxe sur salaires : 8 % sur les premiers 10 400 USD, 12 % au-delà (loi modificative 2025, en vigueur au 1er octobre 2025). Une source non officielle évoque une franchise de 8 320 USD, contradictoire avec le texte de loi ; le texte de loi est retenu.

## Sources

- [Marshall Islands - Income Tax (Amendment) Act 2025 (PacLII)](https://pacliirms.paclii.org/mh/legis/num_act/ita2025pl342025286.pdf) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
