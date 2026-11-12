# Comores (KM)

**Taux effectif retenu : entre 20,6 et 29,6 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

IRPP à 7 tranches, taux maximal 30 % (art. 97 CGI 2023) avec déduction forfaitaire de 30 % pour frais professionnels sur salaires (art. 59). Variante sans déduction : 29,6 %. Cas proche du seuil de 21,14 % ; change : KMF fixe, 491,968 par EUR.

## Sources

- [Comores - Code général des impôts 2023](https://justice.gouv.km/wp-content/uploads/2025/03/comores-cgi-2023.pdf) (officielle)
- [AfroTools - calcul salaire net Comores](https://afrotools.com/fr/comores/calculateur-salaire-net/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
