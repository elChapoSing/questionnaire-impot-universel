# Pologne (PL)

**Taux effectif retenu : 29,5 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : PLN. Cours supposé : 1 EUR = 4,25 PLN (valeur indicative (la note n'en donne pas), à remplacer par le cours Yahoo EURPLN=X).
- Salaire converti : 240 300 € × 4,25 = 1 021 275 PLN.
- Base imposable : 1 021 275 PLN.

| De (PLN) | À (PLN) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 120 000 | 12,00 % | 120 000 | 14 400 |
| 120 000 | 1 000 000 | 32,00 % | 880 000 | 281 600 |
| 1 000 000 | et plus | 36,00 % | 21 275 | 7 659 |

- **Impôt total : 303 659 PLN, soit 29,7 % du salaire brut.**
- Hypothèse : 12 % jusqu'à 120 000 zlotys, 32 % au-delà, plus contribution de solidarité de 4 % au-delà d'un million (36 % cumulés).
- Hypothèse : Montant exonéré (réduction de 3 600 zlotys) et cotisation santé exclus.

## Note

Barème de 12 % puis 32 % au-delà de 120 000 zlotys, plus la contribution de solidarité de 4 % au-delà d'un million de zlotys. Cotisation santé exclue.

## Sources

- [Portail fiscal du gouvernement polonais, barème et limites](https://www.podatki.gov.pl/pit/limity/) (officielle)
- [PwC Worldwide Tax Summaries](https://taxsummaries.pwc.com/poland/individual/taxes-on-personal-income) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
