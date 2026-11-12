# Salvador (SV)

**Taux effectif retenu : entre 28,6 et 28,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : USD. Cours supposé : 1 EUR = 1,15 USD (hypothèse reprise de la note (EUR/USD 1,15), à remplacer par le cours Yahoo EURUSD=X (économie dollarisée)).
- Salaire converti : 240 300 € × 1,15 = 276 345 USD.
- Base imposable : 276 345 USD.

| De (USD) | À (USD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 6 600 | 0,00 % | 6 600 | 0 |
| 6 600 | 10 743 | 10,00 % | 4 143 | 414 |
| 10 743 | 24 457 | 20,00 % | 13 714 | 2 743 |
| 24 457 | et plus | 30,00 % | 251 888 | 75 566 |

- Crédit : Écart entre les montants fixes du tableau de retenue (288,57 USD par mois au dernier tranche) et le cumul marginal (263,10) : − -306 USD.
- **Impôt total : 79 029 USD, soit 28,6 % du salaire brut.**
- Hypothèse : Tableau mensuel de retenue (exonération 550 USD ; 10 % jusqu'à 895,24 ; 20 % jusqu'à 2 038,10 ; 30 % au-delà) annualisé ×12.
- Hypothèse : Le tableau officiel comporte des montants fixes qui ne se raccordent pas exactement au barème marginal ; l'écart est repris en ajustement.

## Note

Tableau de retenue (décret de 2025) : exonération de 550 USD par mois, puis 10 %, 20 % et 30 % au-delà de 2 038 USD mensuels avec montants fixes. Calcul annualisé. Hypothèse change : 1 EUR = 1,15 USD, soit environ 276 300 USD (économie dollarisée).

## Sources

- [El Mundo - nouveau montant exonéré et tables de retenue](https://diario.elmundo.sv/politica/vigente-nuevo-monto-exento-de-impuesto-sobre-la-renta-asi-quedan-los-calculos-de-retencion) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
