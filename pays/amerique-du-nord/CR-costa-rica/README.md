# Costa Rica (CR)

**Taux effectif retenu : 19,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Discutable.**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : CRC. Cours utilisé : 1 EUR = 500,8 CRC (Yahoo Finance EURCRC=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 500,8 = 120 342 240 CRC.
- Base imposable : 120 342 240 CRC.

| De (CRC) | À (CRC) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 11 016 000 | 0,00 % | 11 016 000 | 0 |
| 11 016 000 | 16 164 000 | 10,00 % | 5 148 000 | 514 800 |
| 16 164 000 | 28 368 000 | 15,00 % | 12 204 000 | 1 830 600 |
| 28 368 000 | 56 724 000 | 20,00 % | 28 356 000 | 5 671 200 |
| 56 724 000 | et plus | 25,00 % | 63 618 240 | 15 904 560 |

- **Impôt total : 23 921 160 CRC, soit 19,9 % du salaire brut.**
- Hypothèse : Barème mensuel du décret 45333-H (2026) multiplié par 12 : 0 % jusqu'à 918 000 CRC par mois, puis 10, 15, 20 et 25 % au-delà de 1 347 000, 2 364 000 et 4 727 000.
- Hypothèse : Calculé sur le brut, sans déduire la cotisation CCSS ; crédits familiaux non appliqués.
- Hypothèse : Barème des salariés ; un barème distinct s'applique aux indépendants.

## Note

Impôt sur le salaire 2026 (décret 45333-H) : 0 % jusqu'à 918 000 colons par mois, puis 10 %, 15 %, 20 %, 25 % au-delà de 4 727 000. Barème des salariés ; un barème distinct s'applique aux indépendants.

## Sources

- [EY Costa Rica, tranches de l'impôt sur le revenu pour 2026](https://www.ey.com/es_ce/technical/tax/tax-alerts/costa-rica-ministerio-de-hacienda-establecio-los-tramos-del-impuesto-sobre-la-renta-para-el-periodo-fiscal-2026) (non officielle)
- [KPMG Costa Rica, actualisation des tranches 2026](https://kpmg.com/cr/es/home/tendencias/2025/12/newsflash-dic-8-2025.html) (non officielle)
- [Siempre al Día, retenue sur les salaires 2026](https://siemprealdia.co/costa-rica/impuestos/retencion-del-impuesto-al-salario/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
