# Questionnaire « Suis-je concerné·e par l'impôt universel ? »

Page web autonome (un seul fichier, `index.html`) : questionnaire d'une question par écran, qui indique si une personne remplirait les cinq conditions du dispositif de l'amendement n° I-2564 au projet de loi de finances pour 2027 (texte effectif, sans l'exposé sommaire).

## Modifier

- **Textes et questions** : le tableau `STEPS` dans `index.html` (libellé, aide, options, raison affichée en cas de « non »).
- **Logique** : la fonction `evaluate(answers)`, entre les marqueurs `LOGIC-START` et `LOGIC-END`. Un « non » met fin au questionnaire ; un « Je ne sais pas » à la dernière question donne « À vérifier ».
- **Données pays** : source de vérité = `pays/<continent>/<pays>/data.json` (un README de calcul par pays, voir `pays/README.md`). Après toute modification, lancer `python3 scripts/build.py`, qui régénère les README et la table `COUNTRY_DATA` d'`index.html` (ne pas l'éditer à la main). Ancienne description de la table `COUNTRY_DATA`, entre les marqueurs `DATA-START` et `DATA-END`. Clé = code pays ISO à deux lettres, valeur `true` si la fiscalité du pays est jugée inférieure de plus de 40 % à celle de la France. Tout pays absent de la table vaut « non ». Pour l'instant : `SG` (Singapour) et `HK` (Hong Kong) à `true`. **Données provisoires.** La liste des pays proposés est `COUNTRY_CODES` (noms en français fournis par le navigateur).
- **Seuil de revenu** : 5 × plafond annuel de la Sécurité sociale (48 060 € en 2026, soit 240 300 €). À mettre à jour chaque année (question 2 et récapitulatif).
- **Couleurs et polices** : les variables CSS en haut de la feuille de style (thèmes clair et sombre).

## Utiliser

Ouvrir `index.html` dans un navigateur : aucune dépendance, aucun serveur, aucune donnée envoyée. Seules les polices Google Fonts sont chargées en ligne (la page fonctionne sans, avec des polices de secours).

Pour la mettre en ligne : GitHub Pages (Settings > Pages > branche `main`, dossier racine) ou tout hébergeur de fichiers statiques.

## Sources

- Texte de l'amendement n° I-2564 : https://www.assemblee-nationale.fr/dyn/17/amendements/3210A/AN/2564
- Plafond annuel de la Sécurité sociale 2026 (Urssaf) : https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/plafonds-securite-sociale.html
- Programme *L'Avenir en commun* : https://melenchon2027.fr/programme/livre/


## Données pays et méthodologie

Le bloc `DATA-START` / `DATA-END` contient `COUNTRY_DATA` : code ISO → `{ rate, note, src: [[titre, url, "officielle"|"non officielle"]] }`.
`rate` est le taux effectif d'impôt sur le revenu (en %) d'un célibataire à 240 300 €. Niveaux : <= 18 % « sûrement en dessous » (condition remplie), 18 à 26 % ou pays absent « discutable », > 26 % « sûrement au-dessus » (condition non remplie). Bornes : `LEVEL_LOW`, `LEVEL_HIGH`. Commentaires : `LEVEL_COMMENT`, `UNRATED_COMMENT`.
La page `#methodologie` est générée automatiquement à partir de ces données. Pour ajouter un pays, ajoutez une entrée avec au moins une source.
