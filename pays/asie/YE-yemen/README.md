# Yémen (YE)

**Taux effectif retenu : entre 15,0 et 20,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement en dessous du seuil (condition remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : YER. Cours utilisé : 1 EUR = 264,0128 YER (Yahoo Finance EURYER=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 264,0128 = 63 442 276 YER.
- Base imposable : 63 442 276 YER.

| De (YER) | À (YER) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 120 000 | 0,00 % | 120 000 | 0 |
| 120 000 | 240 000 | 10,00 % | 120 000 | 12 000 |
| 240 000 | et plus | 15,00 % | 63 202 276 | 9 480 341 |

- **Impôt total : 9 492 341 YER, soit 15,0 % du salaire brut.**
- Hypothèse : Règles de Sanaa (Deloitte 2023) pour un national résident.
- Hypothèse : Variante : salarié étranger résident à 20 % forfaitaire (taux de 20 %, d'où la fourchette de la note). Règles possiblement différentes à Aden.

## Note

Règles de Sanaa (Deloitte 2023) : nationaux résidents 0 % jusqu'à 120 000 YER, 10 % jusqu'à 240 000, 15 % au-delà ; salariés étrangers résidents 20 % forfaitaire. Règles possiblement différentes à Aden. Cas proche de la bande 18 à 26 % si 20 % (étranger).

## Sources

- [Deloitte - Yémen, Highlights 2023](https://www.deloitte.com/content/dam/assets-shared/docs/services/consulting/2024/dttl-tax-yemenhighlights-2023.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
