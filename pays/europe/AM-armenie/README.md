# Arménie (AM)

**Taux effectif retenu : 20,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : AMD. Cours supposé : 1 EUR = 450 AMD (la note ne donne pas de cours : hypothèse de 450 AMD pour 1 EUR, à remplacer par le cours Yahoo EURAMD=X ; sans effet avec un taux unique).
- Salaire converti : 240 300 € × 450 = 108 135 000 AMD.
- Base imposable : 108 135 000 AMD.

| De (AMD) | À (AMD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | et plus | 20,00 % | 108 135 000 | 21 627 000 |

- **Impôt total : 21 627 000 AMD, soit 20,0 % du salaire brut.**
- Hypothèse : Taux unique de 20 % sur les salaires, sans abattement ni tranche (10 % pour certains profils de R&D, non retenu).
- Hypothèse : Cotisations sociales exclues. Taux proche du seuil de 21,1 %.

## Note

Impôt à taux unique de 20 % sur les salaires, sans abattement ni tranche (10 % pour certains profils de recherche et développement). Cotisations sociales non comptées. Taux juste sous le seuil de 21,1 % : à examiner avec prudence.

## Sources

- [ActivPayroll, paie en Arménie](https://www.activpayroll.com/global-insights/armenia) (non officielle)
- [Trading Economics, taux d'impôt arménien](https://tradingeconomics.com/armenia/personal-income-tax-rate) (non officielle)
- [Armenian Lawyer, retenue à la source sur les salaires](https://armenian-lawyer.com/business-immigration/armenian-payroll-tax-withholding-social-security-guide/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
