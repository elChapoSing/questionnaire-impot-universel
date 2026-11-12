# Argentine (AR)

**Taux effectif retenu : 34,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Quatrième catégorie (salariés) : barème de 5 % à 35 %, le taux de 35 % commençant à 60,75 millions de pesos par an. À ce revenu, la quasi-totalité est taxée à 35 %. Estimation à partir de ce barème (tranches intermédiaires non reprises une à une) : de 31 % à 35 % quel que soit le change, très volatil. Source officielle (ARCA) non lue.

## Sources

- [calcularsueldo.com.ar, ARCA a officialisé les barèmes de 2026](https://calcularsueldo.com.ar/ganancias/13161/arca-oficializo-las-escalas-y-deducciones-de-ganancias-en-2026.html) (non officielle)
- [Canal26, barème de l'article 94 depuis février 2026](https://www.canal26.com/economia/2026/02/17/impuesto-a-las-ganancias-2026-asi-quedan-el-piso-salarial-las-deducciones-y-las-nuevas-escalas-desde-febrero/) (non officielle)
- [Hacecuentas, barème de l'impôt sur les gains 2026](https://hacecuentas.com/blog/escala-ganancias-2026-argentina-tabla-completa-explicada) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
