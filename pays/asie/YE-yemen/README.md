# Yémen (YE)

**Taux effectif retenu : entre 15,0 et 20,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement en dessous du seuil (condition remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Règles de Sanaa (Deloitte 2023) : nationaux résidents 0 % jusqu'à 120 000 YER, 10 % jusqu'à 240 000, 15 % au-delà ; salariés étrangers résidents 20 % forfaitaire. Règles possiblement différentes à Aden. Hypothèse : 1 EUR = 615 YER. Cas proche de la bande 18 à 26 % si 20 % (étranger).

## Sources

- [Deloitte - Yémen, Highlights 2023](https://www.deloitte.com/content/dam/assets-shared/docs/services/consulting/2024/dttl-tax-yemenhighlights-2023.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
