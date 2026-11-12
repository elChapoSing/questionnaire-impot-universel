# Grenade (GD)

**Taux effectif retenu : entre 26,1 et 27,4 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : XCD. Cours supposé : 1 EUR = 3,105 XCD (hypothèse reprise de la note).
- Salaire converti : 240 300 € × 3,105 = 746 132 XCD.
- Base imposable : 746 132 XCD.

| De (XCD) | À (XCD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 24 000 | 10,00 % | 24 000 | 2 400 |
| 24 000 | et plus | 28,00 % | 722 132 | 202 197 |

- **Impôt total : 204 597 XCD, soit 27,4 % du salaire brut.**
- Hypothèse : Abattement personnel de 36 000 XCD non appliqué ; avec lui, environ 26,1 % (note).

## Note

10 % jusqu'à 24 000 XCD puis 28 % ; abattement personnel de 36 000 non appliqué (variante avec abattement : environ 26,1 %). Hypothèse change : 1 EUR = 3,105 XCD, soit environ 746 100 XCD. Cas proche de la bande selon l'abattement.

## Sources

- [Deloitte - Grenada tax highlights 2026](https://www.deloitte.com/content/dam/assets-shared/docs/services/tax/2026/dttl-tax-grenadahighlights-2026.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
