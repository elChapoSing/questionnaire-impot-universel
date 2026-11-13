# Espagne (ES)

**Taux effectif retenu : 41,2 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Pas concerné·e (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : EUR. Cours utilisé : 1 EUR = 1 EUR (pays en euro, change 1).
- Salaire converti : 240 300 € × 1 = 240 300 EUR.
- Base imposable : 240 300 EUR.

| De (EUR) | À (EUR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 12 450 | 19,00 % | 12 450 | 2 366 |
| 12 450 | 20 200 | 24,00 % | 7 750 | 1 860 |
| 20 200 | 35 200 | 30,00 % | 15 000 | 4 500 |
| 35 200 | 60 000 | 37,00 % | 24 800 | 9 176 |
| 60 000 | 300 000 | 45,00 % | 180 300 | 81 135 |
| 300 000 | et plus | 47,00 % | 0 | 0 |

- **Impôt total : 99 036 EUR, soit 41,2 % du salaire brut.**
- Hypothèse : Barème général de l'IRPF : part d'État (9,5 / 12 / 15 / 18,5 / 22,5 / 24,5 %) plus part régionale supposée identique (échelle par défaut), d'où 19 / 24 / 30 / 37 / 45 / 47 %.
- Hypothèse : Chaque communauté autonome peut fixer son barème ; Madrid est plus bas (maximum d'environ 43,5 %).
- Hypothèse : Minimum personnel et cotisations sociales exclus.

## Note

Barème général de l'IRPF (part de l'État et part régionale cumulées) : de 19 % à 47 %, le taux de 47 % s'appliquant au-delà de 300 000 €. Taux effectif d'environ 41 % à 240 300 € (tranches intermédiaires de l'échelle commune : calcul à confirmer sur la source officielle de l'Agence fiscale). Madrid applique des taux plus bas (maximum d'environ 43,5 %), mais le résultat reste largement au-dessus du seuil. Minimum personnel exclu.

## Sources

- [Taxdown, taux de l'IRPF 2026](https://taxdown.es/irpf/tipo-impositivo) (non officielle)
- [OIE, tranches de l'IRPF 2026](https://www.oie.es/tramos-irpf-2026/) (non officielle)
- [Wolters Kluwer, tranches et retenues 2026](https://www.wolterskluwer.com/es-es/expert-insights/tramos-retenciones-irpf-2026-novedades) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
