# Trinité-et-Tobago (TT)

**Taux effectif retenu : entre 25,8 et 27,2 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : TTD. Cours utilisé : 1 EUR = 7,535 TTD (Yahoo Finance EURTTD=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 7,535 = 1 810 660 TTD.
- Base imposable : 1 810 660 TTD.

| De (TTD) | À (TTD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 1 000 000 | 25,00 % | 1 000 000 | 250 000 |
| 1 000 000 | et plus | 30,00 % | 810 660 | 243 198 |

- **Impôt total : 493 198 TTD, soit 27,2 % du salaire brut.**
- Hypothèse : Abattement personnel de 90 000 TTD non appliqué ; avec lui, environ 26 % (note).

## Note

25 % jusqu'à 1 M TTD puis 30 %. Abattement personnel de 90 000 TTD non appliqué (variante : environ 25,8 à 26,0 %). Cas proche de la bande selon l'abattement.

## Sources

- [PwC Tax Summaries - Trinidad and Tobago](https://taxsummaries.pwc.com/trinidad-and-tobago/individual/taxes-on-personal-income) (non officielle)
- [Rio Times - Trinidad et Tobago taxes 2026](https://www.riotimesonline.com/taxes-trinidad-tobago-expats-2026/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
