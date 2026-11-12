# Aruba (AW)

**Taux effectif retenu : entre 41,7 et 44,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : AWG. Cours utilisé : 1 EUR = 1,9916 AWG (Yahoo Finance EURAWG=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 1,9916 = 478 590 AWG.
- Base imposable : 478 590 AWG.

| De (AWG) | À (AWG) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 34 930 | 0,00 % | 34 930 | 0 |
| 34 930 | 63 904 | 21,00 % | 28 974 | 6 085 |
| 63 904 | 135 527 | 42,00 % | 71 623 | 30 082 |
| 135 527 | et plus | 52,00 % | 343 063 | 178 393 |

- **Impôt total : 214 559 AWG, soit 44,8 % du salaire brut.**
- Hypothèse : Barème 2026 résidents (Deloitte, Aruba tax highlights 2026).
- Hypothèse : Franchise de 30 000 AWG non appliquée ; avec elle, environ 41,9 % (variante de la note).
- Hypothèse : Cotisations AOV/AZV exclues.

## Note

Cours Yahoo EURAWG=X du 13/11/2026 : 1 EUR = 1.991637 AWG (hypothèse initiale : 2.0585). Taux recalculé : 44,9 % (avant : 45,1 %). Les chiffres de change et de taux cités plus bas datent de l'hypothèse initiale. Barème 2026 (21 % / 42 % / 52 % au-delà de 135 527 AWG) appliqué au salaire converti. Hypothèse change : 1 EUR = 1,15 USD, 1 USD = 1,79 AWG (parité fixe), soit environ 494 700 AWG. Franchise de 30 000 AWG non appliquée (variante avec franchise : environ 41,9 %). Cotisations AOV/AZV exclues.

## Sources

- [Deloitte - Aruba tax highlights 2026](https://www.deloitte.com/content/dam/assets-shared/docs/services/tax/2026/dttl-tax-arubahighlights-2026.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
