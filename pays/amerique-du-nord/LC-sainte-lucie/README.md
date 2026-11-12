# Sainte-Lucie (LC)

**Taux effectif retenu : entre 28,5 et 29,5 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : XCD. Cours utilisé : 1 EUR = 2,9903 XCD (Yahoo Finance EURXCD=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 2,9903 = 718 564 XCD.
- Base imposable : 718 564 XCD.

| De (XCD) | À (XCD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 15 000 | 15,00 % | 15 000 | 2 250 |
| 15 000 | 30 000 | 20,00 % | 15 000 | 3 000 |
| 30 000 | et plus | 30,00 % | 688 564 | 206 569 |

- **Impôt total : 211 819 XCD, soit 29,5 % du salaire brut.**
- Hypothèse : Abattement personnel de 25 000 XCD non appliqué ; avec lui, environ 28,5 % (note).

## Note

Cours Yahoo EURXCD=X du 13/11/2026 : 1 EUR = 2.990276985 XCD (hypothèse initiale : 3.105). Taux recalculé : 29,5 % (avant : 29,5 %). Les chiffres de change et de taux cités plus bas datent de l'hypothèse initiale. Trois tranches (15 % jusqu'à 15 000, 20 % jusqu'à 30 000, 30 % au-delà, en XCD). Abattement personnel de 25 000 non appliqué (variante : environ 28,5 %). Hypothèse change : 1 EUR = 3,105 XCD.

## Sources

- [Gouvernement de Sainte-Lucie - Tax facts, nouveau régime](https://www.govt.lc/media.govt.lc/www/pressroom/news/attachments/tax-facts---calculations-new-regime-version-2024-view-.pdf) (officielle)
- [Orbitax - Sainte-Lucie, barème confirmé](https://orbitax.com/news/country/article/Saint-Lucia-Confirms-Personal--51666) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
