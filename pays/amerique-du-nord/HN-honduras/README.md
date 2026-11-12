# Honduras (HN)

**Taux effectif retenu : 23,7 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Table progressive 2026 (SAR) : exonéré jusqu'à 228 324 HNL, puis 15 %, 20 % et 25 % au-delà de 809 661. Hypothèse change : 1 EUR = 30,2 HNL (26,3 par USD), soit environ 7,27 M HNL. Déduction médicale de 40 000 non appliquée.

## Sources

- [SAR Honduras - Acuerdo SAR-01-2026](https://www.tsc.gob.hn/web/leyes/Acuerdo-SAR-01-2026.pdf) (officielle)
- [Bloomberg Línea - Tabla progresiva 2026 Honduras](https://www.bloomberglinea.com/latinoamerica/honduras/tabla-progresiva-2026-en-honduras-ingreso-exento-y-tramos-de-isr-por-salario/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
