# Uruguay (UY)

**Taux effectif retenu : 26,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).

## Note

IRPF travail : tranches mensuelles de 0 % à 36 % (36 % au-delà de 115 BPC par mois ; BPC 2026 : 6 864 pesos). De 25,2 % à 27,0 % pour 40 à 48 pesos pour 1 €, avant déductions. Change supposé : 44,6 pesos pour 1 €. Les revenus du capital sont taxés à 7 à 12 %.

## Sources

- [BPS, valeurs des barèmes de l'IRPF 2026 (BPC 6 864)](https://www.bps.gub.uy/23860/2026---comunicado-r-5---valores-escalas-irpf-2026.html) (officielle)
- [BPS, barèmes de l'IRPF 2025 (tranches de 10 % à 36 %)](https://bps.gub.uy/bps/file/22584/1/2025---comunicado-2---valores-escalas-irpf-2025.pdf) (officielle)
- [Uruguay XXI, système fiscal 2026](https://www.uruguayxxi.gub.uy/en/invest/investors-guide/tax-system-2026/download/) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
