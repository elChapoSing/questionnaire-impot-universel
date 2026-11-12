# Haïti (HT)

**Taux effectif retenu : entre 29,3 et 29,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème à 5 tranches, taux marginal maximal 30 %. Deux versions : barème actuel (seuil 120 000 HTG, environ 29,7 %) et nouveau barème validé par le ministère pour application au 1er octobre 2026 (environ 29,3 %). Hypothèse change : 1 EUR = 150 HTG, peu sensible.

## Sources

- [Rivermate - Haïti, taxes](https://rivermate.com/guides/haiti/taxes) (non officielle)
- [Ministère de l'Économie et des Finances (Haïti) - nouveau barème IRPP](https://www.mef.gouv.ht/storage/app/uploads/public/6a6/cc3/3dc/6a6cc33dcbf11650887297.pdf) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
