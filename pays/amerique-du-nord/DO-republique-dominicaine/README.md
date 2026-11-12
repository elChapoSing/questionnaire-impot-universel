# République dominicaine (DO)

**Taux effectif retenu : 24,1 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème 2026 : exonération jusqu'à 416 220 pesos, puis 15 %, 20 % et 25 % au-delà de 867 123 pesos. À partir de 2027 (loi 30-26), un taux de 27 % au-delà de 4,8 millions de pesos porterait le résultat à environ 25,5 %. Change supposé : 70 pesos pour 1 €.

## Sources

- [DGII, guide du contribuable n° 9 : impôt sur le revenu des personnes physiques](https://dgii.gov.do/publicacionesOficiales/bibliotecaVirtual/contribuyentes/isr/ISR%20Persona%20Fsica/1-Guia%209%20-%20ISR%20PF.pdf) (officielle)
- [Revista Mercado, barème de l'impôt à partir de 2027](https://revistamercado.do/money-invest/daily-news/nueva-escala-del-isr-desde-cuanto-pagaras-impuesto-sobre-la-renta-en-rd-a-partir-de-2027/) (non officielle)
- [Alegra, barème 2026 (résolution DDG-AR1-2026-00001)](https://blog.alegra.com/republica-dominicana/impuesto-sobre-la-renta-isr/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
