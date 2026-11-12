# Japon (JP)

**Taux effectif retenu : 35,0 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : JPY. Cours supposé : 1 EUR = 185 JPY (aucun cours dans la note ; valeur raisonnable retenue, à remplacer par le cours Yahoo EURJPY=X).
- Salaire converti : 240 300 € × 185 = 44 455 500 JPY.
- Base imposable : 44 455 500 JPY.

| De (JPY) | À (JPY) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 1 950 000 | 5,00 % | 1 950 000 | 97 500 |
| 1 950 000 | 3 300 000 | 10,00 % | 1 350 000 | 135 000 |
| 3 300 000 | 6 950 000 | 20,00 % | 3 650 000 | 730 000 |
| 6 950 000 | 9 000 000 | 23,00 % | 2 050 000 | 471 500 |
| 9 000 000 | 18 000 000 | 33,00 % | 9 000 000 | 2 970 000 |
| 18 000 000 | 40 000 000 | 40,00 % | 22 000 000 | 8 800 000 |
| 40 000 000 | et plus | 45,00 % | 4 455 500 | 2 004 975 |

- Majoration : surtaxe spéciale de reconstruction : + 2,1 % de l'impôt.
- **Impôt total : 15 528 363 JPY, soit 34,9 % du salaire brut.**
- Hypothèse : Impôt national sur le revenu avec surtaxe de reconstruction de 2,1 % de l'impôt ; l'impôt local (environ 10 %) n'est pas inclus, comme dans la note.
- Hypothèse : Déduction pour revenus d'emploi et déductions de base exclues.

## Note

Impôt national et surtaxe de 2,1 % ; l'impôt local, non inclus, s'y ajoute.

## Sources

- [Agence nationale des impôts (NTA), n° 2260](https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
