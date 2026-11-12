# Costa Rica (CR)

**Taux effectif retenu : 20,4 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

Impôt sur le salaire 2026 (décret 45333-H) : 0 % jusqu'à 918 000 colons par mois, puis 10 %, 15 %, 20 %, 25 % au-delà de 4 727 000. De 19,3 % à 20,7 % pour 450 à 600 colons pour 1 €. Change supposé : 557 colons pour 1 €. Barème des salariés ; un barème distinct s'applique aux indépendants.

## Sources

- [EY Costa Rica, tranches de l'impôt sur le revenu pour 2026](https://www.ey.com/es_ce/technical/tax/tax-alerts/costa-rica-ministerio-de-hacienda-establecio-los-tramos-del-impuesto-sobre-la-renta-para-el-periodo-fiscal-2026) (non officielle)
- [KPMG Costa Rica, actualisation des tranches 2026](https://kpmg.com/cr/es/home/tendencias/2025/12/newsflash-dic-8-2025.html) (non officielle)
- [Siempre al Día, retenue sur les salaires 2026](https://siemprealdia.co/costa-rica/impuestos/retencion-del-impuesto-al-salario/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
