# Salvador (SV)

**Taux effectif retenu : entre 28,6 et 28,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Tableau de retenue (décret de 2025) : exonération de 550 USD par mois, puis 10 %, 20 % et 30 % au-delà de 2 038 USD mensuels avec montants fixes. Calcul annualisé. Hypothèse change : 1 EUR = 1,15 USD, soit environ 276 300 USD (économie dollarisée).

## Sources

- [El Mundo - nouveau montant exonéré et tables de retenue](https://diario.elmundo.sv/politica/vigente-nuevo-monto-exento-de-impuesto-sobre-la-renta-asi-quedan-los-calculos-de-retencion) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
