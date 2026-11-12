# Malawi (MW)

**Taux effectif retenu : 38,4 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : MWK. Cours supposé : 1 EUR = 2 000 MWK (hypothèse reprise de la note, à remplacer par le cours Yahoo EUREURMWK=X).
- Salaire converti : 240 300 € × 2 000 = 480 600 000 MWK.
- Base imposable : 480 600 000 MWK.

| De (MWK) | À (MWK) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 2 040 000 | 0,00 % | 2 040 000 | 0 |
| 2 040 000 | 18 840 000 | 30,00 % | 16 800 000 | 5 040 000 |
| 18 840 000 | 120 000 000 | 35,00 % | 101 160 000 | 35 406 000 |
| 120 000 000 | et plus | 40,00 % | 360 600 000 | 144 240 000 |

- **Impôt total : 184 686 000 MWK, soit 38,4 % du salaire brut.**
- Hypothèse : Barème PAYE 2026 mensuel (Workpay) multiplié par 12.

## Note

PAYE 2026 : 30 % puis 35 % puis 40 % au-delà de 10 M MWK/mois. Change (hypothèse) : 1 EUR = 2 000 MWK ; sans effet notable.

## Sources

- [Workpay - changements statutaires Malawi 2026](https://myworkpay.com/blogs/malawi-2026-statutory-changes) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
