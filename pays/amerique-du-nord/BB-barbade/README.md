# Barbade (BB)

**Taux effectif retenu : 24,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Cas limite.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : BBD. Cours utilisé : 1 EUR = 2,2341 BBD (Yahoo Finance EURBBD=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 2,2341 = 536 854 BBD.
- Base imposable : 536 854 BBD.

| De (BBD) | À (BBD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 25 000 | 0,00 % | 25 000 | 0 |
| 25 000 | 75 000 | 11,50 % | 50 000 | 5 750 |
| 75 000 | et plus | 27,50 % | 461 854 | 127 010 |

- **Impôt total : 132 760 BBD, soit 24,7 % du salaire brut.**
- Hypothèse : Barème 2026 de la Barbados Revenue Authority.
- Hypothèse : Résultat peu sensible au change.

## Note

Barème 2026 : 0 % jusqu'à 25 000, 11,5 % de 25 001 à 75 000, 27,5 % au-delà (BRA).

## Sources

- [Barbados Revenue Authority - réduction des taux 2026](https://bra.gov.bb/News/Policy-Notes/Reduction-of-Personal-Income-Tax-R) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
