# Pérou (PE)

**Taux effectif retenu : 25,8 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Barème de l'article 53 : 8 % jusqu'à 5 UIT, 14 % jusqu'à 20, 17 % jusqu'à 35, 20 % jusqu'à 45, 30 % au-delà (UIT 2026 : 5 500 soles). De 25,4 % à 26,3 % sans déduction ; de 23,9 % à 25,1 % avec la déduction de 7 UIT. Change supposé : 3,8 soles pour 1 €. Une source donne une UIT différente (5 350 soles).

## Sources

- [SUNAT, questions fréquentes sur l'impôt sur le revenu (tranches de 8 % à 30 %)](https://renta.sunat.gob.pe/preguntas) (officielle)
- [El Comercio, UIT 2026 à 5 500 soles](https://elcomercio.pe/economia/peru/uit-2026-sube-a-s-5500-como-impactara-el-nuevo-valor-en-impuestos-multas-y-retiros-de-las-afp-mef-noticia/) (non officielle)
- [Perú Gestiona, tableau de l'impôt 2026](https://perugestiona.pe/tramites-sunat/tabla-impuesto-renta/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
