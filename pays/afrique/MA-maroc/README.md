# Maroc (MA)

**Taux effectif retenu : 35,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème des salaires 2026 : 0 % jusqu'à 40 000 dirhams, 10, 20, 30 et 34 % ensuite, 37 % au-delà de 180 000 (la tranche à 38 % a été fusionnée). À 240 300 € (change supposé : 10,8 dirhams pour 1 €), le taux effectif est d'environ 35,9 %. Abattement forfaitaire pour frais professionnels et cotisations sociales exclus (ils réduiraient peu le taux).

## Sources

- [Bladi.net, circulaire DGI n° 737 sur la loi de finances 2026](https://www.bladi.net/reforme-fiscale-maroc-change-circulaire-dgi-entreprises,119791.html) (non officielle)
- [Upsilon Consulting, barème IR salarial 2026](https://www.upsilon-consulting.com/ir-salarial-bareme-2026-maroc/) (non officielle)
- [Clicpaie, barème IR Maroc 2026](https://clicpaie.ma/blogs/bareme-ir-maroc-2026/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
