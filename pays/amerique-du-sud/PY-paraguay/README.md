# Paraguay (PY)

**Taux effectif retenu : 9,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement en dessous du seuil (condition remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : PYG. Cours utilisé : 1 EUR = 6 876 PYG (Yahoo Finance EURPYG=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 6 876 = 1 652 302 800 PYG.
- Base imposable : 1 652 302 800 PYG.

| De (PYG) | À (PYG) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 50 000 000 | 8,00 % | 50 000 000 | 4 000 000 |
| 50 000 000 | 150 000 000 | 9,00 % | 100 000 000 | 9 000 000 |
| 150 000 000 | et plus | 10,00 % | 1 502 302 800 | 150 230 280 |

- **Impôt total : 163 230 280 PYG, soit 9,9 % du salaire brut.**
- Hypothèse : Impôt sur le revenu personnel (IRP) : 8 % jusqu'à 50 millions de guaranis, 9 % jusqu'à 150 millions, 10 % au-delà.
- Hypothèse : Aucune déduction de dépenses ; la note indique 9,9 % quel que soit le change.

## Note

Cours Yahoo EURPYG=X du 13/11/2026 : 1 EUR = 6876.0 PYG (hypothèse initiale : 8000). Taux recalculé : 9,9 % (avant : 9,9 %). Les chiffres de change et de taux cités plus bas datent de l'hypothèse initiale. Impôt sur le revenu personnel : 8 % jusqu'à 50 millions de guaranis, 9 % jusqu'à 150 millions, 10 % au-delà. Système territorial : seuls les revenus de source paraguayenne sont imposés. Change supposé : environ 8 000 guaranis pour 1 € (9,9 % quel que soit le change). Source officielle (SET) non lue.

## Sources

- [ABC Color, tranches de l'IRP de 8 %, 9 % et 10 %](https://www.abc.com.py/economia/2025/03/05/irp-300000-contribuyentes-deberan-pagar-este-mes/) (non officielle)
- [Yo Facturo, IRP au Paraguay](https://yo-facturo.com/blog/irp-paraguay-impuesto-renta-personal/) (non officielle)
- [CountryTaxCalc, guide fiscal du Paraguay](https://www.countrytaxcalc.com/tax-guides/paraguay-tax-guide/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
