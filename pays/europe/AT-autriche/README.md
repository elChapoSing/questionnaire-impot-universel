# Autriche (AT)

**Taux effectif retenu : 43,2 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Autriche 2026 : barème de l'article 33 de l'EStG, 50 % entre 104 859 et 1 000 000 EUR, avec 36 150,32 EUR d'impôt cumulé à 104 859 EUR. Pour 240 300 EUR : environ 43,2 %.

## Sources

- [RIS, EStG article 33 (texte consolidé)](https://ris.bka.gv.at/Dokumente/Bundesnormen/NOR40279893/NOR40279893.pdf) (officielle)
- [USP.gv.at, niveaux du barème](https://www.usp.gv.at/en/themen/steuern-finanzen/einkommensteuer-ueberblick/weitere-informationen-est/tarifstufen.html) (officielle)
- [WKO, valeurs 2026](https://www.wko.at/steuern/einkommen-koerperschaftsteuer-2026) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
