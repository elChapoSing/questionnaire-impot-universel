# Calculs par pays

Un dossier par continent, puis par pays. Chaque pays a un `README.md` (calcul, hypothèses, sources) et un `data.json` (source de vérité).

Le site lit directement les `data.json` (via `pays/index.json`) : modifier un `data.json` suffit pour mettre le site à jour. Les README et `pays/index.json` sont régénérés automatiquement par une GitHub Action à chaque push (ou à la main : `python3 scripts/build.py`). Pour ajouter un pays, créer son dossier avec un `data.json`, le reste est automatique.

## Format de `data.json`

```json
{ "code": "SE", "nom": "Suède", "rate": 47.5, "note": "…",
  "sources": [{ "titre": "…", "url": "https://…", "type": "officielle|non officielle" }],
  "calc": { "devise": "SEK", "fx": 11, "fx_source": "Yahoo Finance EURSEK=X",
    "deductions": [["libellé", 0]],
    "tranches": [[0, 643000, 32.38], [643000, null, 52.38]],
    "credits": [["libellé", 0]], "majorations": [["libellé", 9]], "hypotheses": ["…"] } }
```

Le bloc `calc` est facultatif : s'il est présent, le README affiche le calcul tranche par tranche et signale tout écart de plus de 0,5 point avec `rate`.

## Europe (52)

| Pays | Taux | Verdict | Calcul détaillé |
|---|---:|---|---|
| [Albanie](europe/AL-albanie/README.md) | 22,1 % | Discutable | oui |
| [Allemagne](europe/DE-allemagne/README.md) | 37,3 % | Nettement au-dessus du seuil | oui |
| [Andorre](europe/AD-andorre/README.md) | 8,7 % | Nettement en dessous du seuil | oui |
| [Arménie](europe/AM-armenie/README.md) | 20,0 % | Discutable | oui |
| [Autriche](europe/AT-autriche/README.md) | 43,2 % | Nettement au-dessus du seuil | oui |
| [Azerbaïdjan](europe/AZ-azerbaidjan/README.md) | 12,7 % | Nettement en dessous du seuil | oui |
| [Belgique](europe/BE-belgique/README.md) | 46,1 % | Nettement au-dessus du seuil | oui |
| [Biélorussie](europe/BY-bielorussie/README.md) | 20,9 % | Discutable | oui |
| [Bosnie-Herzégovine](europe/BA-bosnie-herzegovine/README.md) | 10,0 % | Nettement en dessous du seuil | oui |
| [Bulgarie](europe/BG-bulgarie/README.md) | 10,0 % | Nettement en dessous du seuil | oui |
| [Chypre](europe/CY-chypre/README.md) | 30,1 % | Nettement au-dessus du seuil | oui |
| [Croatie](europe/HR-croatie/README.md) | 26,7 % | Nettement au-dessus du seuil | oui |
| [Danemark](europe/DK-danemark/README.md) | 46,1 % | Nettement au-dessus du seuil | oui |
| [Espagne](europe/ES-espagne/README.md) | 41,2 % | Nettement au-dessus du seuil | oui |
| [Estonie](europe/EE-estonie/README.md) | 22,0 % | Discutable | oui |
| [Finlande](europe/FI-finlande/README.md) | 41,5 % | Nettement au-dessus du seuil | oui |
| [Gibraltar](europe/GI-gibraltar/README.md) | 25,0 % | Discutable | oui |
| [Grèce](europe/GR-grece/README.md) | 40,0 % | Nettement au-dessus du seuil | oui |
| [Guernesey](europe/GG-guernesey/README.md) | 20,0 % | Discutable | oui |
| [Géorgie](europe/GE-georgie/README.md) | 20,0 % | Discutable | oui |
| [Hongrie](europe/HU-hongrie/README.md) | 15,0 % | Nettement en dessous du seuil | oui |
| [Irlande](europe/IE-irlande/README.md) | 34,7 % | Nettement au-dessus du seuil | oui |
| [Islande](europe/IS-islande/README.md) | 38,7 % | Nettement au-dessus du seuil | oui |
| [Italie](europe/IT-italie/README.md) | 39,8 % | Nettement au-dessus du seuil | oui |
| [Jersey](europe/JE-jersey/README.md) | 20,0 % | Discutable | oui |
| [Lettonie](europe/LV-lettonie/README.md) | 29,5 % | Nettement au-dessus du seuil | oui |
| [Lituanie](europe/LT-lituanie/README.md) | 26,2 % | Nettement au-dessus du seuil | oui |
| [Luxembourg](europe/LU-luxembourg/README.md) | 38,5 % | Nettement au-dessus du seuil | non |
| [Macédoine du Nord](europe/MK-macedoine-du-nord/README.md) | 10,0 % | Nettement en dessous du seuil | oui |
| [Malte](europe/MT-malte/README.md) | 31,1 % | Nettement au-dessus du seuil | oui |
| [Moldavie](europe/MD-moldavie/README.md) | 12,0 % | Nettement en dessous du seuil | oui |
| [Monténégro](europe/ME-montenegro/README.md) | 14,4 % | Nettement en dessous du seuil | oui |
| [Norvège](europe/NO-norvege/README.md) | 35,5 % | Nettement au-dessus du seuil | oui |
| [Pays-Bas](europe/NL-pays-bas/README.md) | 40,8 % | Nettement au-dessus du seuil | oui |
| [Pologne](europe/PL-pologne/README.md) | 29,5 % | Nettement au-dessus du seuil | oui |
| [Portugal](europe/PT-portugal/README.md) | 43,3 % | Nettement au-dessus du seuil | oui |
| [Roumanie](europe/RO-roumanie/README.md) | 10,0 % | Nettement en dessous du seuil | oui |
| [Royaume-Uni](europe/GB-royaume-uni/README.md) | 38,4 % | Nettement au-dessus du seuil | oui |
| [Russie](europe/RU-russie/README.md) | 17,4 % | Nettement en dessous du seuil | oui |
| [Saint-Marin](europe/SM-saint-marin/README.md) | 29,6 % | Nettement au-dessus du seuil | oui |
| [Serbie](europe/RS-serbie/README.md) | 18,2 % | Discutable | oui |
| [Slovaquie](europe/SK-slovaquie/README.md) | 31,1 % | Nettement au-dessus du seuil | oui |
| [Slovénie](europe/SI-slovenie/README.md) | 43,6 % | Nettement au-dessus du seuil | oui |
| [Suisse](europe/CH-suisse/README.md) | 25,0 % | Discutable | oui |
| [Suède](europe/SE-suede/README.md) | 47,5 % | Nettement au-dessus du seuil | oui |
| [Svalbard et Jan Mayen](europe/SJ-svalbard-et-jan-mayen/README.md) | 14,2 % | Nettement en dessous du seuil | oui |
| [Tchéquie](europe/CZ-tchequie/README.md) | 20,6 % | Discutable | oui |
| [Ukraine](europe/UA-ukraine/README.md) | 23,0 % | Discutable | oui |
| [État de la Cité du Vatican](europe/VA-etat-de-la-cite-du-vatican/README.md) | 0,0 % | Nettement en dessous du seuil | oui |
| [Île de Man](europe/IM-ile-de-man/README.md) | 20,7 % | Discutable | oui |
| [Îles Féroé](europe/FO-iles-feroe/README.md) | 44,5 % | Nettement au-dessus du seuil | oui |
| [Îles Åland](europe/AX-iles-aland/README.md) | 39,0 % | Nettement au-dessus du seuil | oui |

## Afrique (47)

| Pays | Taux | Verdict | Calcul détaillé |
|---|---:|---|---|
| [Afrique du Sud](afrique/ZA-afrique-du-sud/README.md) | 40,9 % | Nettement au-dessus du seuil | oui |
| [Angola](afrique/AO-angola/README.md) | 24,3 % | Discutable | oui |
| [Botswana](afrique/BW-botswana/README.md) | 24,3 % | Discutable | oui |
| [Burkina Faso](afrique/BF-burkina-faso/README.md) | 19,8 % | Discutable | oui |
| [Burundi](afrique/BI-burundi/README.md) | 32,3 % | Nettement au-dessus du seuil | non |
| [Bénin](afrique/BJ-benin/README.md) | 29,4 % | Nettement au-dessus du seuil | oui |
| [Cameroun](afrique/CM-cameroun/README.md) | 26,3 % | Nettement au-dessus du seuil | oui |
| [Cap-Vert](afrique/CV-cap-vert/README.md) | 27,0 % | Nettement au-dessus du seuil | oui |
| [Comores](afrique/KM-comores/README.md) | 20,6 % | Discutable | oui |
| [Congo-Kinshasa](afrique/CD-congo-kinshasa/README.md) | 30,0 % | Nettement au-dessus du seuil | oui |
| [Côte d’Ivoire](afrique/CI-cote-divoire/README.md) | 28,5 % | Nettement au-dessus du seuil | oui |
| [Djibouti](afrique/DJ-djibouti/README.md) | 37,6 % | Nettement au-dessus du seuil | oui |
| [Eswatini](afrique/SZ-eswatini/README.md) | 32,6 % | Nettement au-dessus du seuil | oui |
| [Gabon](afrique/GA-gabon/README.md) | 26,9 % | Nettement au-dessus du seuil | oui |
| [Gambie](afrique/GM-gambie/README.md) | 24,9 % | Discutable | oui |
| [Ghana](afrique/GH-ghana/README.md) | 33,5 % | Nettement au-dessus du seuil | oui |
| [Guinée](afrique/GN-guinee/README.md) | 34,5 % | Nettement au-dessus du seuil | oui |
| [Guinée équatoriale](afrique/GQ-guinee-equatoriale/README.md) | 24,0 % | Discutable | oui |
| [Kenya](afrique/KE-kenya/README.md) | 33,7 % | Nettement au-dessus du seuil | oui |
| [Lesotho](afrique/LS-lesotho/README.md) | 29,8 % | Nettement au-dessus du seuil | oui |
| [Liberia](afrique/LR-liberia/README.md) | 24,8 % | Discutable | oui |
| [Libye](afrique/LY-libye/README.md) | 10,0 % | Nettement en dessous du seuil | oui |
| [Madagascar](afrique/MG-madagascar/README.md) | 19,9 % | Discutable | oui |
| [Malawi](afrique/MW-malawi/README.md) | 38,4 % | Nettement au-dessus du seuil | oui |
| [Mali](afrique/ML-mali/README.md) | 39,6 % | Nettement au-dessus du seuil | oui |
| [Maroc](afrique/MA-maroc/README.md) | 35,9 % | Nettement au-dessus du seuil | oui |
| [Maurice](afrique/MU-maurice/README.md) | 19,4 % | Discutable | oui |
| [Mauritanie](afrique/MR-mauritanie/README.md) | 39,6 % | Nettement au-dessus du seuil | oui |
| [Mozambique](afrique/MZ-mozambique/README.md) | 31,2 % | Nettement au-dessus du seuil | oui |
| [Namibie](afrique/NA-namibie/README.md) | 34,0 % | Nettement au-dessus du seuil | oui |
| [Niger](afrique/NE-niger/README.md) | 34,6 % | Nettement au-dessus du seuil | oui |
| [Nigeria](afrique/NG-nigeria/README.md) | 24,5 % | Discutable | oui |
| [Ouganda](afrique/UG-ouganda/README.md) | 38,7 % | Nettement au-dessus du seuil | oui |
| [Rwanda](afrique/RW-rwanda/README.md) | 29,9 % | Nettement au-dessus du seuil | oui |
| [République centrafricaine](afrique/CF-republique-centrafricaine/README.md) | 37,4 % | Nettement au-dessus du seuil | oui |
| [Sao Tomé-et-Principe](afrique/ST-sao-tome-et-principe/README.md) | 24,6 % | Discutable | oui |
| [Seychelles](afrique/SC-seychelles/README.md) | 27,2 % | Nettement au-dessus du seuil | oui |
| [Sierra Leone](afrique/SL-sierra-leone/README.md) | 29,9 % | Nettement au-dessus du seuil | oui |
| [Sénégal](afrique/SN-senegal/README.md) | 41,4 % | Nettement au-dessus du seuil | oui |
| [Tanzanie](afrique/TZ-tanzanie/README.md) | 29,7 % | Nettement au-dessus du seuil | oui |
| [Togo](afrique/TG-togo/README.md) | 32,9 % | Nettement au-dessus du seuil | oui |
| [Tunisie](afrique/TN-tunisie/README.md) | 39,1 % | Nettement au-dessus du seuil | oui |
| [Zambie](afrique/ZM-zambie/README.md) | 37,1 % | Nettement au-dessus du seuil | oui |
| [Zimbabwe](afrique/ZW-zimbabwe/README.md) | 39,1 % | Nettement au-dessus du seuil | oui |
| [Égypte](afrique/EG-egypte/README.md) | 27,3 % | Nettement au-dessus du seuil | oui |
| [Érythrée](afrique/ER-erythree/README.md) | 28,5 % | Nettement au-dessus du seuil | non |
| [Éthiopie](afrique/ET-ethiopie/README.md) | 34,9 % | Nettement au-dessus du seuil | oui |

## Asie et Moyen-Orient (44)

| Pays | Taux | Verdict | Calcul détaillé |
|---|---:|---|---|
| [Arabie saoudite](asie/SA-arabie-saoudite/README.md) | 0,0 % | Nettement en dessous du seuil | oui |
| [Bahreïn](asie/BH-bahrein/README.md) | 0,0 % | Nettement en dessous du seuil | oui |
| [Bangladesh](asie/BD-bangladesh/README.md) | 28,9 % | Nettement au-dessus du seuil | oui |
| [Bhoutan](asie/BT-bhoutan/README.md) | 28,3 % | Nettement au-dessus du seuil | oui |
| [Brunei](asie/BN-brunei/README.md) | 0,0 % | Nettement en dessous du seuil | oui |
| [Cambodge](asie/KH-cambodge/README.md) | 18,7 % | Discutable | oui |
| [Chine](asie/CN-chine/README.md) | 35,2 % | Nettement au-dessus du seuil | oui |
| [Corée du Sud](asie/KR-coree-du-sud/README.md) | 37,5 % | Nettement au-dessus du seuil | oui |
| [Hong Kong (Chine)](asie/HK-hong-kong-chine/README.md) | 15,0 % | Nettement en dessous du seuil | oui |
| [Inde](asie/IN-inde/README.md) | 36,9 % | Nettement au-dessus du seuil | oui |
| [Indonésie](asie/ID-indonesie/README.md) | 28,9 % | Nettement au-dessus du seuil | oui |
| [Irak](asie/IQ-irak/README.md) | 15,0 % | Nettement en dessous du seuil | oui |
| [Iran](asie/IR-iran/README.md) | 34,8 % | Nettement au-dessus du seuil | oui |
| [Israël](asie/IL-israel/README.md) | 35,4 % | Nettement au-dessus du seuil | oui |
| [Japon](asie/JP-japon/README.md) | 35,0 % | Nettement au-dessus du seuil | oui |
| [Jordanie](asie/JO-jordanie/README.md) | 23,7 % | Discutable | oui |
| [Kazakhstan](asie/KZ-kazakhstan/README.md) | 13,6 % | Nettement en dessous du seuil | oui |
| [Kirghizstan](asie/KG-kirghizstan/README.md) | 10,0 % | Nettement en dessous du seuil | oui |
| [Koweït](asie/KW-koweit/README.md) | 0,0 % | Nettement en dessous du seuil | oui |
| [Laos](asie/LA-laos/README.md) | 23,9 % | Discutable | oui |
| [Liban](asie/LB-liban/README.md) | 24,8 % | Discutable | oui |
| [Macao (Chine)](asie/MO-macao-chine/README.md) | 11,0 % | Nettement en dessous du seuil | oui |
| [Malaisie](asie/MY-malaisie/README.md) | 25,2 % | Discutable | oui |
| [Maldives](asie/MV-maldives/README.md) | 10,0 % | Nettement en dessous du seuil | oui |
| [Mongolie](asie/MN-mongolie/README.md) | 18,5 % | Discutable | oui |
| [Myanmar (Birmanie)](asie/MM-myanmar-birmanie/README.md) | 24,0 % | Discutable | oui |
| [Népal](asie/NP-nepal/README.md) | 27,7 % | Nettement au-dessus du seuil | oui |
| [Oman](asie/OM-oman/README.md) | 0,0 % | Nettement en dessous du seuil | oui |
| [Ouzbékistan](asie/UZ-ouzbekistan/README.md) | 12,0 % | Nettement en dessous du seuil | oui |
| [Pakistan](asie/PK-pakistan/README.md) | 33,7 % | Nettement au-dessus du seuil | oui |
| [Philippines](asie/PH-philippines/README.md) | 31,5 % | Nettement au-dessus du seuil | oui |
| [Qatar](asie/QA-qatar/README.md) | 0,0 % | Nettement en dessous du seuil | oui |
| [Singapour](asie/SG-singapour/README.md) | 14,7 % | Nettement en dessous du seuil | oui |
| [Sri Lanka](asie/LK-sri-lanka/README.md) | 34,6 % | Nettement au-dessus du seuil | oui |
| [Tadjikistan](asie/TJ-tadjikistan/README.md) | 13,0 % | Nettement en dessous du seuil | oui |
| [Taïwan](asie/TW-taiwan/README.md) | 29,8 % | Nettement au-dessus du seuil | oui |
| [Territoires palestiniens](asie/PS-territoires-palestiniens/README.md) | 13,8 % | Nettement en dessous du seuil | oui |
| [Thaïlande](asie/TH-thailande/README.md) | 29,7 % | Nettement au-dessus du seuil | oui |
| [Timor oriental](asie/TL-timor-oriental/README.md) | 9,8 % | Nettement en dessous du seuil | oui |
| [Turkménistan](asie/TM-turkmenistan/README.md) | 10,0 % | Nettement en dessous du seuil | oui |
| [Turquie](asie/TR-turquie/README.md) | 36,5 % | Nettement au-dessus du seuil | oui |
| [Viêt Nam](asie/VN-viet-nam/README.md) | 34,0 % | Nettement au-dessus du seuil | non |
| [Yémen](asie/YE-yemen/README.md) | 15,0 % | Nettement en dessous du seuil | oui |
| [Émirats arabes unis](asie/AE-emirats-arabes-unis/README.md) | 0,0 % | Nettement en dessous du seuil | oui |

## Amérique du Nord, centrale et Caraïbes (33)

| Pays | Taux | Verdict | Calcul détaillé |
|---|---:|---|---|
| [Anguilla](amerique-du-nord/AI-anguilla/README.md) | 0,0 % | Nettement en dessous du seuil | oui |
| [Antigua-et-Barbuda](amerique-du-nord/AG-antigua-et-barbuda/README.md) | 0,0 % | Nettement en dessous du seuil | oui |
| [Aruba](amerique-du-nord/AW-aruba/README.md) | 45,1 % | Nettement au-dessus du seuil | oui |
| [Bahamas](amerique-du-nord/BS-bahamas/README.md) | 0,0 % | Nettement en dessous du seuil | oui |
| [Barbade](amerique-du-nord/BB-barbade/README.md) | 24,8 % | Discutable | oui |
| [Belize](amerique-du-nord/BZ-belize/README.md) | 25,0 % | Discutable | oui |
| [Bermudes](amerique-du-nord/BM-bermudes/README.md) | 0,0 % | Nettement en dessous du seuil | oui |
| [Canada](amerique-du-nord/CA-canada/README.md) | 36,0 % | Nettement au-dessus du seuil | oui |
| [Costa Rica](amerique-du-nord/CR-costa-rica/README.md) | 20,4 % | Discutable | oui |
| [Curaçao](amerique-du-nord/CW-curacao/README.md) | 39,5 % | Nettement au-dessus du seuil | oui |
| [Dominique](amerique-du-nord/DM-dominique/README.md) | 32,7 % | Nettement au-dessus du seuil | oui |
| [Grenade](amerique-du-nord/GD-grenade/README.md) | 27,4 % | Nettement au-dessus du seuil | oui |
| [Groenland](amerique-du-nord/GL-groenland/README.md) | 43,0 % | Nettement au-dessus du seuil | oui |
| [Guatemala](amerique-du-nord/GT-guatemala/README.md) | 6,7 % | Nettement en dessous du seuil | oui |
| [Haïti](amerique-du-nord/HT-haiti/README.md) | 29,5 % | Nettement au-dessus du seuil | oui |
| [Honduras](amerique-du-nord/HN-honduras/README.md) | 23,7 % | Discutable | oui |
| [Jamaïque](amerique-du-nord/JM-jamaique/README.md) | 29,3 % | Nettement au-dessus du seuil | oui |
| [Mexique](amerique-du-nord/MX-mexique/README.md) | 31,6 % | Nettement au-dessus du seuil | oui |
| [Montserrat](amerique-du-nord/MS-montserrat/README.md) | 36,8 % | Nettement au-dessus du seuil | oui |
| [Nicaragua](amerique-du-nord/NI-nicaragua/README.md) | 29,3 % | Nettement au-dessus du seuil | oui |
| [Panama](amerique-du-nord/PA-panama/README.md) | 22,5 % | Discutable | oui |
| [Pays-Bas caribéens](amerique-du-nord/BQ-pays-bas-caribeens/README.md) | 36,7 % | Nettement au-dessus du seuil | oui |
| [Porto Rico](amerique-du-nord/PR-porto-rico/README.md) | 28,7 % | Nettement au-dessus du seuil | oui |
| [République dominicaine](amerique-du-nord/DO-republique-dominicaine/README.md) | 24,1 % | Discutable | oui |
| [Saint-Christophe-et-Niévès](amerique-du-nord/KN-saint-christophe-et-nieves/README.md) | 0,0 % | Nettement en dessous du seuil | oui |
| [Saint-Martin (partie néerlandaise)](amerique-du-nord/SX-saint-martin-partie-neerlandaise/README.md) | 41,2 % | Nettement au-dessus du seuil | oui |
| [Sainte-Lucie](amerique-du-nord/LC-sainte-lucie/README.md) | 29,5 % | Nettement au-dessus du seuil | oui |
| [Salvador](amerique-du-nord/SV-salvador/README.md) | 28,6 % | Nettement au-dessus du seuil | oui |
| [Trinité-et-Tobago](amerique-du-nord/TT-trinite-et-tobago/README.md) | 27,3 % | Nettement au-dessus du seuil | oui |
| [États-Unis](amerique-du-nord/US-etats-unis/README.md) | 23,3 % | Discutable | oui |
| [Îles Caïmans](amerique-du-nord/KY-iles-caimans/README.md) | 0,0 % | Nettement en dessous du seuil | oui |
| [Îles Turques-et-Caïques](amerique-du-nord/TC-iles-turques-et-caiques/README.md) | 0,0 % | Nettement en dessous du seuil | oui |
| [Îles Vierges britanniques](amerique-du-nord/VG-iles-vierges-britanniques/README.md) | 0,0 % | Nettement en dessous du seuil | oui |

## Amérique du Sud (13)

| Pays | Taux | Verdict | Calcul détaillé |
|---|---:|---|---|
| [Argentine](amerique-du-sud/AR-argentine/README.md) | 34,0 % | Nettement au-dessus du seuil | oui |
| [Bolivie](amerique-du-sud/BO-bolivie/README.md) | 13,0 % | Nettement en dessous du seuil | oui |
| [Brésil](amerique-du-sud/BR-bresil/README.md) | 26,7 % | Nettement au-dessus du seuil | oui |
| [Chili](amerique-du-sud/CL-chili/README.md) | 27,4 % | Nettement au-dessus du seuil | oui |
| [Colombie](amerique-du-sud/CO-colombie/README.md) | 31,5 % | Nettement au-dessus du seuil | oui |
| [Guyana](amerique-du-sud/GY-guyana/README.md) | 34,4 % | Nettement au-dessus du seuil | oui |
| [Paraguay](amerique-du-sud/PY-paraguay/README.md) | 9,9 % | Nettement en dessous du seuil | oui |
| [Pérou](amerique-du-sud/PE-perou/README.md) | 25,8 % | Discutable | oui |
| [Suriname](amerique-du-sud/SR-suriname/README.md) | 37,4 % | Nettement au-dessus du seuil | oui |
| [Uruguay](amerique-du-sud/UY-uruguay/README.md) | 26,0 % | Discutable | oui |
| [Venezuela](amerique-du-sud/VE-venezuela/README.md) | 34,0 % | Nettement au-dessus du seuil | oui |
| [Équateur](amerique-du-sud/EC-equateur/README.md) | 31,0 % | Nettement au-dessus du seuil | oui |
| [Îles Malouines](amerique-du-sud/FK-iles-malouines/README.md) | 25,7 % | Discutable | oui |

## Océanie (9)

| Pays | Taux | Verdict | Calcul détaillé |
|---|---:|---|---|
| [Australie](oceanie/AU-australie/README.md) | 38,3 % | Nettement au-dessus du seuil | oui |
| [Fidji](oceanie/FJ-fidji/README.md) | 28,1 % | Nettement au-dessus du seuil | oui |
| [Nouvelle-Zélande](oceanie/NZ-nouvelle-zelande/README.md) | 34,6 % | Nettement au-dessus du seuil | oui |
| [Papouasie-Nouvelle-Guinée](oceanie/PG-papouasie-nouvelle-guinee/README.md) | 40,6 % | Nettement au-dessus du seuil | oui |
| [Samoa](oceanie/WS-samoa/README.md) | 26,3 % | Nettement au-dessus du seuil | oui |
| [Vanuatu](oceanie/VU-vanuatu/README.md) | 0,0 % | Nettement en dessous du seuil | oui |
| [Îles Cook](oceanie/CK-iles-cook/README.md) | 28,3 % | Nettement au-dessus du seuil | oui |
| [Îles Marshall](oceanie/MH-iles-marshall/README.md) | 11,9 % | Nettement en dessous du seuil | oui |
| [Îles Salomon](oceanie/SB-iles-salomon/README.md) | 39,4 % | Nettement au-dessus du seuil | oui |
