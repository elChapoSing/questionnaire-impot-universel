# Jersey (JE)

**Taux effectif retenu : 20,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : GBP. Cours utilisé : 1 EUR = 0,8359 GBP (Yahoo Finance EURGBP=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 0,8359 = 200 862 GBP.
- Base imposable : 200 862 GBP.

| De (GBP) | À (GBP) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | et plus | 20,00 % | 200 862 | 40 172 |

- **Impôt total : 40 172 GBP, soit 20,0 % du salaire brut.**
- Hypothèse : Taux standard de 20 % sur l'ensemble du revenu (maximum de l'impôt sur le revenu à Jersey).
- Hypothèse : Contribution dépendance exclue.

## Note

Cours Yahoo EURGBP=X du 13/11/2026 : 1 EUR = 0.83588 GBP (hypothèse initiale : 0.87). Taux recalculé : 20,0 % (avant : 20 %). Les chiffres de change et de taux cités plus bas datent de l'hypothèse initiale. Taux standard de 20 % sur l'ensemble du revenu, maximum de l'impôt sur le revenu à Jersey. Le calcul « marginal » (26 % au-delà d'un seuil d'exemption) ne profite qu'aux revenus modestes. Taux effectif de 20 % à 240 300 € (le change £/€ ne change rien). Contribution dépendance (long-term care) exclue.

## Sources

- [Gouvernement de Jersey, calcul de l'impôt sur le revenu](https://www.gov.je/TaxesMoney/IncomeTax/Individuals/PayingTaxEarnings/Pages/CalculatingTaxAssessment.aspx) (officielle)
- [Gouvernement de Jersey, abattements 2026](https://www.gov.je/TaxesMoney/IncomeTax/Individuals/AllowancesReliefs/pages/2026taxallowances.aspx) (officielle)
- [KPMG, fiscalité à Jersey](https://kpmg.com/dp/en/services/tax/family-office-private-client/tax-in-jersey.html) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
