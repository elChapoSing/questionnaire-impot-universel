# Espagne (ES)

**Taux effectif retenu : 41,2 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème général de l'IRPF (part de l'État et part régionale cumulées) : de 19 % à 47 %, le taux de 47 % s'appliquant au-delà de 300 000 €. Taux effectif d'environ 41 % à 240 300 € (tranches intermédiaires de l'échelle commune : calcul à confirmer sur la source officielle de l'Agence fiscale). Madrid applique des taux plus bas (maximum d'environ 43,5 %), mais le résultat reste largement au-dessus du seuil. Minimum personnel exclu.

## Sources

- [Taxdown, taux de l'IRPF 2026](https://taxdown.es/irpf/tipo-impositivo) (non officielle)
- [OIE, tranches de l'IRPF 2026](https://www.oie.es/tramos-irpf-2026/) (non officielle)
- [Wolters Kluwer, tranches et retenues 2026](https://www.wolterskluwer.com/es-es/expert-insights/tramos-retenciones-irpf-2026-novedades) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
