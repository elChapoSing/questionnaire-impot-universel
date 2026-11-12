# Équateur (EC)

**Taux effectif retenu : 31,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème 2026 : fraction exonérée de 12 208 dollars, puis de 5 % à 37 % (37 % au-delà de 109 956 dollars). Avant rabais pour dépenses personnelles. Le pays utilise le dollar : seul le cours euro-dollar joue.

## Sources

- [NMS Law, barèmes de l'impôt sur le revenu 2026 en Équateur](https://nmslaw.com.ec/?p=15946) (non officielle)
- [El Universo, ce qu'il faut savoir de l'impôt sur le revenu 2026](https://www.eluniverso.com/noticias/economia/lo-que-debe-saber-sobre-el-impuesto-a-la-renta-de-2026-nota/) (non officielle)
- [Elyex, tables officielles du SRI pour 2026](https://elyex.com/el-sri-publico-las-tablas-oficiales-para-personas-naturales-y-herencias-del-periodo-fiscal/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
