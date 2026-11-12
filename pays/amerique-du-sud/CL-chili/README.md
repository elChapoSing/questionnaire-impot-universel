# Chili (CL)

**Taux effectif retenu : 27,4 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Impôt global complémentaire : 35 % entre 120 et 310 UTA, 40 % au-delà (UTA : 834 504 pesos). À ce revenu, taux de 26,5 % à 28,0 % pour 950 à 1 150 pesos pour 1 €. Change supposé : 1 059 pesos pour 1 €. Proche de la borne de 26 % à la limite basse du change.

## Sources

- [Service des impôts internes du Chili (SII), circulaire n° 29 de 2026 : tables en UTM](https://www.sii.cl/normativa_legislacion/circulares/2026/circu29.pdf) (officielle)
- [SII, circulaire n° 67 de 2025 : valeurs de l'UTM et de l'UTA](https://www.sii.cl/normativa_legislacion/circulares/2025/circu67.pdf) (officielle)
- [Rankia Chili, table de l'impôt global complémentaire 2026](https://www.rankia.cl/blog/sii/2457838-impuesto-global-complementario-tabla-calculo-ejemplos) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
