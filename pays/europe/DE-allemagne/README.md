# Allemagne (DE)

**Taux effectif retenu : 37,3 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Tarif 2026 (§ 32a EStG) : 42 % de 69 879 € à 277 825 € de revenu imposable, 45 % au-delà. À 240 300 € sans déductions, l'impôt sur le revenu représente environ 37,3 % ; avec le Solidaritätszuschlag de 5,5 %, environ 39,4 %. Impôt d'Église et cotisations sociales exclus. Le calcul part du revenu imposable de 240 300 € (calcul établi à partir de l'exemple chiffré de Taxmaro pour 300 000 €).

## Sources

- [Lexware, tarif et Soli 2026](https://www.lexware.de/wissen/unternehmerlexikon/spitzensteuersatz/) (non officielle)
- [VLH, Spitzensteuersatz 2026](https://www.vlh.de/wissen-service/steuer-nachrichten/spitzensteuersatz-das-steckt-dahinter.html) (non officielle)
- [Taxmaro, tarif 2026 et exemple chiffré](https://www.taxmaro.com/post/spitzensteuersatz-2026-grenze-tarif) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
