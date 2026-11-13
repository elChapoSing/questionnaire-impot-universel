# Cambodge (KH)

**Taux effectif retenu : 18,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Cas limite.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : KHR. Cours utilisé : 1 EUR = 4 571 KHR (Yahoo Finance EURKHR=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 4 571 = 1 098 411 300 KHR.
- Base imposable : 1 098 411 300 KHR.

| De (KHR) | À (KHR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 18 000 000 | 0,00 % | 18 000 000 | 0 |
| 18 000 000 | 24 000 000 | 5,00 % | 6 000 000 | 300 000 |
| 24 000 000 | 102 000 000 | 10,00 % | 78 000 000 | 7 800 000 |
| 102 000 000 | 150 000 000 | 15,00 % | 48 000 000 | 7 200 000 |
| 150 000 000 | et plus | 20,00 % | 948 411 300 | 189 682 260 |

- **Impôt total : 204 982 260 KHR, soit 18,7 % du salaire brut.**
- Hypothèse : Barème mensuel (0 à 1,5 M ; 5 % jusqu'à 2 M ; 10 % jusqu'à 8,5 M ; 15 % jusqu'à 12,5 M ; 20 % au-delà) multiplié par 12 pour obtenir des tranches annuelles.
- Hypothèse : Abattements pour conjoint et enfants exclus ; le résultat reste entre 18,5 et 18,8 % sur la fourchette de change.

## Note

Barème mensuel de 0 à 20 % (20 % au-delà de 12,5 millions de riels).

## Sources

- [KPMG Cambodge, seuils de l'impôt sur les salaires](https://assets.kpmg.com/content/dam/kpmg/kh/pdf/technical-update/2023/en/implementation-on-new-taxable-salary-thresholds-and-extension-of-the-prepayment-of-tax-on-income-(PToI)-suspension-for-the-textile-and-garment-sector.pdf) (non officielle)
- [Deloitte, Cambodia Highlights](https://www.deloitte.com/content/dam/assets-shared/docs/services/consulting/2024/dttl-tax-cambodiahighlights-2023.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
