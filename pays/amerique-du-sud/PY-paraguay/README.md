# Paraguay (PY)

**Taux effectif retenu : 9,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement en dessous du seuil (condition remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Impôt sur le revenu personnel : 8 % jusqu'à 50 millions de guaranis, 9 % jusqu'à 150 millions, 10 % au-delà. Système territorial : seuls les revenus de source paraguayenne sont imposés. Change supposé : environ 8 000 guaranis pour 1 € (9,9 % quel que soit le change). Source officielle (SET) non lue.

## Sources

- [ABC Color, tranches de l'IRP de 8 %, 9 % et 10 %](https://www.abc.com.py/economia/2025/03/05/irp-300000-contribuyentes-deberan-pagar-este-mes/) (non officielle)
- [Yo Facturo, IRP au Paraguay](https://yo-facturo.com/blog/irp-paraguay-impuesto-renta-personal/) (non officielle)
- [CountryTaxCalc, guide fiscal du Paraguay](https://www.countrytaxcalc.com/tax-guides/paraguay-tax-guide/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
