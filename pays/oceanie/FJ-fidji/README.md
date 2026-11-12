# Fidji (FJ)

**Taux effectif retenu : 28,1 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème des résidents (règlement de 2023, structure inchangée au budget 2025-26) : 0 % jusqu'à 30 000 dollars fidjiens, 18 %, 20 %, puis de 33 % à 39 % au-delà de 270 000 (39 % au-delà d'un million). Change supposé : 2,58 dollars fidjiens pour 1 €.

## Sources

- [PwC Worldwide Tax Summaries](https://taxsummaries.pwc.com/fiji/individual/taxes-on-personal-income) (non officielle)
- [Règlement sur les taux d'impôt 2023 (texte hébergé par PacLII)](https://paclii.org/fj/legis/sub_leg/ita2015itotalr2023l552023646.pdf) (non officielle)
- [Munro Leys, taux 2024](https://www.munroleyslaw.com/?p=438) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
