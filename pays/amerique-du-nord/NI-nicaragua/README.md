# Nicaragua (NI)

**Taux effectif retenu : 29,3 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Pas concerné·e (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : NIO. Cours utilisé : 1 EUR = 40,82 NIO (Yahoo Finance EURNIO=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 40,82 = 9 809 046 NIO.
- Base imposable : 9 809 046 NIO.

| De (NIO) | À (NIO) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 100 000 | 0,00 % | 100 000 | 0 |
| 100 000 | 200 000 | 15,00 % | 100 000 | 15 000 |
| 200 000 | 350 000 | 20,00 % | 150 000 | 30 000 |
| 350 000 | 500 000 | 25,00 % | 150 000 | 37 500 |
| 500 000 | et plus | 30,00 % | 9 309 046 | 2 792 714 |

- **Impôt total : 2 875 214 NIO, soit 29,3 % du salaire brut.**
- Hypothèse : Table annuelle du travail ; seules les bornes 100 000 et 500 000 figurent dans la note, les bornes 200 000 et 350 000 sont des valeurs de reconstitution (sans effet au-delà de 500 000).
- Hypothèse : Calculé sur le brut, sans déduire la cotisation INSS de 7 %.

## Note

Table progressive annuelle du travail : exonéré jusqu'à 100 000 NIO, puis 15 %, 20 %, 25 %, 30 % au-delà de 500 000. Calculé sur le brut, sans déduire la cotisation INSS de 7 % (variante légèrement plus basse).

## Sources

- [TopTrabajos - Descuentos planilla Nicaragua (tabla IR)](https://www.toptrabajos.com/ni/blog/descuentos-planilla-nicaragua/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
