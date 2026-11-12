# Dominique (DM)

**Taux effectif retenu : 32,6 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : XCD. Cours utilisé : 1 EUR = 2,9903 XCD (Yahoo Finance EURXCD=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 2,9903 = 718 564 XCD.
- Base imposable : 718 564 XCD.

| De (XCD) | À (XCD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 30 000 | 0,00 % | 30 000 | 0 |
| 30 000 | 50 000 | 15,00 % | 20 000 | 3 000 |
| 50 000 | 80 000 | 25,00 % | 30 000 | 7 500 |
| 80 000 | et plus | 35,00 % | 638 564 | 223 497 |

- **Impôt total : 233 997 XCD, soit 32,6 % du salaire brut.**
- Hypothèse : Barème en vigueur 2026 ; la borne de 50 000 XCD entre les taux de 15 % et 25 % est une valeur de reconstitution qui ne figure pas dans la note (à vérifier ; sans effet sensible au-delà de 80 000).
- Hypothèse : Réforme annoncée (taux unique de 10 % dès 2027) non votée, non prise en compte.

## Note

Cours Yahoo EURXCD=X du 13/11/2026 : 1 EUR = 2.990276985 XCD (hypothèse initiale : 3.105). Taux recalculé : 32,6 % (avant : 32,7 %). Les chiffres de change et de taux cités plus bas datent de l'hypothèse initiale. Barème en vigueur 2026 : 0 % jusqu'à 30 000, 15 %, 25 % puis 35 % au-delà de 80 000 XCD. Hypothèse change : 1 EUR = 3,105 XCD (parité 2,7 par USD, EUR/USD 1,15). Réforme annoncée (taux unique de 10 % dès 2027), pas encore votée.

## Sources

- [Dominica Inland Revenue Division - taux en vigueur](https://ird.gov.dm/customer-service/current-income-tax-rates) (officielle)
- [IMI Daily - Dominique, impôt unique 10 % en 2027](https://imidaily.com/caribbean/dominica-flat-tax-10-percent-2027) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
