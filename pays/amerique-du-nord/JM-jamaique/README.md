# Jamaïque (JM)

**Taux effectif retenu : entre 28,0 et 29,3 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : JMD. Cours supposé : 1 EUR = 182 JMD (hypothèse reprise de la note (158 JMD par USD)).
- Salaire converti : 240 300 € × 182 = 43 734 600 JMD.
- Base imposable : 43 734 600 JMD.

| De (JMD) | À (JMD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 6 000 000 | 25,00 % | 6 000 000 | 1 500 000 |
| 6 000 000 | et plus | 30,00 % | 37 734 600 | 11 320 380 |

- **Impôt total : 12 820 380 JMD, soit 29,3 % du salaire brut.**
- Hypothèse : Seuil annuel exonéré d'environ 1,9 M JMD non appliqué ; avec lui, environ 28,0 % (note).
- Hypothèse : Cotisations NIS, NHT et taxe d'éducation exclues.

## Note

25 % jusqu'à 6 M JMD puis 30 % (résidents). Seuil annuel exonéré d'environ 1,9 M JMD non appliqué (variante : environ 28,0 %). Hypothèse change : 1 EUR = 182 JMD (158 par USD), soit environ 43,7 M JMD. Cotisations NIS, NHT et taxe d'éducation exclues.

## Sources

- [PwC Tax Summaries - Jamaica, taxes on personal income](https://taxsummaries.pwc.com/jamaica/individual/taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
