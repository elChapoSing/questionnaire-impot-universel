# Israël (IL)

**Taux effectif retenu : 35,4 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème 2026 : 10 % jusqu'à 84 120 shekels, puis 14, 20, 31, 35 et 47 %, enfin 50 % au-delà de 721 560 (surtaxe incluse). À 240 300 € (change supposé : 3,9 shekels pour 1 €), le taux effectif est d'environ 35,4 %, de 33,8 % à 3,5 shekels à 36,5 % à 4,2. Points de crédit exclus (environ 6 500 shekels).

## Sources

- [PwC Tax Summaries, Israël](https://taxsummaries.pwc.com/Israel/Individual/taxes-on-personal-income) (non officielle)
- [Globes, révision des tranches 2026](https://en.globes.co.il/en/article-1001539434) (non officielle)
- [Nativeteams, fiche fiscale Israël](https://i.nativeteams.com/assets/pdf/taxes/israel.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
