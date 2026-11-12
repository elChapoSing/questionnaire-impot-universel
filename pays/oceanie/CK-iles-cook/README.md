# Îles Cook (CK)

**Taux effectif retenu : entre 28,2 et 28,4 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème des résidents de Rarotonga (loi modificative 2023) : 0 % jusqu'à 14 600, 17 % jusqu'à 30 000, 27 % jusqu'à 80 000, 30 % au-delà. Hypothèse : 1 EUR = 1,95 NZD (soit environ 468 600 NZD). Abattement personnel de 14 600 non appliqué en plus de la tranche à 0 %. Les résidents des îles périphériques ont un barème différent (exonération jusqu'à 60 000) ; non retenu.

## Sources

- [Cook Islands - Income Tax Amendment Act 2023 (PacLII)](https://pacliirms.paclii.org/ck/legis/num_act/itaa2023196) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
