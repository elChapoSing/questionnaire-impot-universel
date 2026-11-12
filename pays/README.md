# Calculs par pays

Un dossier par continent, puis par pays. Chaque pays a un `README.md` (calcul, hypothèses, sources) et un `data.json` (source de vérité).

Le site est régénéré à partir des `data.json` : `python3 scripts/build.py` met à jour les README et le bloc `COUNTRY_DATA` d'`index.html`. Ne pas éditer `COUNTRY_DATA` à la main.

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

## Europe (45)

| Pays | Taux | Verdict | Calcul détaillé |
|---|---:|---|---|
| [Albanie](europe/AL-albanie/README.md) | 22,1 % | Discutable | non |
| [Allemagne](europe/DE-allemagne/README.md) | 37,3 % | Nettement au-dessus du seuil | non |
| [Andorre](europe/AD-andorre/README.md) | 8,7 % | Nettement en dessous du seuil | non |
| [Arménie](europe/AM-armenie/README.md) | 20,0 % | Discutable | non |
| [Autriche](europe/AT-autriche/README.md) | 43,2 % | Nettement au-dessus du seuil | non |
| [Belgique](europe/BE-belgique/README.md) | 46,1 % | Nettement au-dessus du seuil | non |
| [Biélorussie](europe/BY-bielorussie/README.md) | 20,9 % | Discutable | non |
| [Bosnie-Herzégovine](europe/BA-bosnie-herzegovine/README.md) | 10,0 % | Nettement en dessous du seuil | non |
| [Bulgarie](europe/BG-bulgarie/README.md) | 10,0 % | Nettement en dessous du seuil | non |
| [Chypre](europe/CY-chypre/README.md) | 30,1 % | Nettement au-dessus du seuil | non |
| [Croatie](europe/HR-croatie/README.md) | 26,7 % | Nettement au-dessus du seuil | non |
| [Danemark](europe/DK-danemark/README.md) | 46,1 % | Nettement au-dessus du seuil | non |
| [Espagne](europe/ES-espagne/README.md) | 41,2 % | Nettement au-dessus du seuil | non |
| [Estonie](europe/EE-estonie/README.md) | 22,0 % | Discutable | non |
| [Finlande](europe/FI-finlande/README.md) | 41,5 % | Nettement au-dessus du seuil | non |
| [Gibraltar](europe/GI-gibraltar/README.md) | 25,0 % | Discutable | non |
| [Grèce](europe/GR-grece/README.md) | 40,0 % | Nettement au-dessus du seuil | non |
| [Guernesey](europe/GG-guernesey/README.md) | 20,0 % | Discutable | non |
| [Géorgie](europe/GE-georgie/README.md) | 20,0 % | Discutable | non |
| [Hongrie](europe/HU-hongrie/README.md) | 15,0 % | Nettement en dessous du seuil | non |
| [Irlande](europe/IE-irlande/README.md) | 34,7 % | Nettement au-dessus du seuil | non |
| [Islande](europe/IS-islande/README.md) | 38,7 % | Nettement au-dessus du seuil | non |
| [Italie](europe/IT-italie/README.md) | 39,8 % | Nettement au-dessus du seuil | non |
| [Jersey](europe/JE-jersey/README.md) | 20,0 % | Discutable | non |
| [Lettonie](europe/LV-lettonie/README.md) | 29,5 % | Nettement au-dessus du seuil | non |
| [Lituanie](europe/LT-lituanie/README.md) | 26,2 % | Nettement au-dessus du seuil | non |
| [Luxembourg](europe/LU-luxembourg/README.md) | 38,5 % | Nettement au-dessus du seuil | non |
| [Macédoine du Nord](europe/MK-macedoine-du-nord/README.md) | 10,0 % | Nettement en dessous du seuil | non |
| [Malte](europe/MT-malte/README.md) | 31,1 % | Nettement au-dessus du seuil | non |
| [Moldavie](europe/MD-moldavie/README.md) | 12,0 % | Nettement en dessous du seuil | non |
| [Monténégro](europe/ME-montenegro/README.md) | 14,4 % | Nettement en dessous du seuil | non |
| [Norvège](europe/NO-norvege/README.md) | 35,5 % | Nettement au-dessus du seuil | non |
| [Pays-Bas](europe/NL-pays-bas/README.md) | 40,8 % | Nettement au-dessus du seuil | non |
| [Pologne](europe/PL-pologne/README.md) | 29,5 % | Nettement au-dessus du seuil | non |
| [Portugal](europe/PT-portugal/README.md) | 43,3 % | Nettement au-dessus du seuil | non |
| [Roumanie](europe/RO-roumanie/README.md) | 10,0 % | Nettement en dessous du seuil | non |
| [Royaume-Uni](europe/GB-royaume-uni/README.md) | 38,4 % | Nettement au-dessus du seuil | non |
| [Russie](europe/RU-russie/README.md) | 17,4 % | Nettement en dessous du seuil | non |
| [Serbie](europe/RS-serbie/README.md) | 18,2 % | Discutable | non |
| [Slovaquie](europe/SK-slovaquie/README.md) | 31,1 % | Nettement au-dessus du seuil | non |
| [Suisse](europe/CH-suisse/README.md) | 25,0 % | Discutable | non |
| [Suède](europe/SE-suede/README.md) | 47,5 % | Nettement au-dessus du seuil | oui |
| [Tchéquie](europe/CZ-tchequie/README.md) | 20,6 % | Discutable | non |
| [Ukraine](europe/UA-ukraine/README.md) | 23,0 % | Discutable | non |
| [Île de Man](europe/IM-ile-de-man/README.md) | 20,7 % | Discutable | non |

## Afrique (4)

| Pays | Taux | Verdict | Calcul détaillé |
|---|---:|---|---|
| [Afrique du Sud](afrique/ZA-afrique-du-sud/README.md) | 40,9 % | Nettement au-dessus du seuil | non |
| [Maroc](afrique/MA-maroc/README.md) | 35,9 % | Nettement au-dessus du seuil | non |
| [Maurice](afrique/MU-maurice/README.md) | 19,4 % | Discutable | non |
| [Égypte](afrique/EG-egypte/README.md) | 27,3 % | Nettement au-dessus du seuil | non |

## Asie et Moyen-Orient (31)

| Pays | Taux | Verdict | Calcul détaillé |
|---|---:|---|---|
| [Arabie saoudite](asie/SA-arabie-saoudite/README.md) | 0,0 % | Nettement en dessous du seuil | non |
| [Bahreïn](asie/BH-bahrein/README.md) | 0,0 % | Nettement en dessous du seuil | non |
| [Bangladesh](asie/BD-bangladesh/README.md) | 28,9 % | Nettement au-dessus du seuil | non |
| [Brunei](asie/BN-brunei/README.md) | 0,0 % | Nettement en dessous du seuil | non |
| [Cambodge](asie/KH-cambodge/README.md) | 18,7 % | Discutable | non |
| [Chine](asie/CN-chine/README.md) | 35,2 % | Nettement au-dessus du seuil | non |
| [Corée du Sud](asie/KR-coree-du-sud/README.md) | 37,5 % | Nettement au-dessus du seuil | non |
| [Hong Kong (Chine)](asie/HK-hong-kong-chine/README.md) | 15,0 % | Nettement en dessous du seuil | non |
| [Inde](asie/IN-inde/README.md) | 36,9 % | Nettement au-dessus du seuil | non |
| [Indonésie](asie/ID-indonesie/README.md) | 28,9 % | Nettement au-dessus du seuil | non |
| [Israël](asie/IL-israel/README.md) | 35,4 % | Nettement au-dessus du seuil | non |
| [Japon](asie/JP-japon/README.md) | 35,0 % | Nettement au-dessus du seuil | non |
| [Kazakhstan](asie/KZ-kazakhstan/README.md) | 13,6 % | Nettement en dessous du seuil | non |
| [Koweït](asie/KW-koweit/README.md) | 0,0 % | Nettement en dessous du seuil | non |
| [Laos](asie/LA-laos/README.md) | 23,9 % | Discutable | non |
| [Malaisie](asie/MY-malaisie/README.md) | 25,2 % | Discutable | non |
| [Maldives](asie/MV-maldives/README.md) | 10,0 % | Nettement en dessous du seuil | non |
| [Myanmar (Birmanie)](asie/MM-myanmar-birmanie/README.md) | 24,0 % | Discutable | non |
| [Népal](asie/NP-nepal/README.md) | 27,7 % | Nettement au-dessus du seuil | non |
| [Oman](asie/OM-oman/README.md) | 0,0 % | Nettement en dessous du seuil | non |
| [Ouzbékistan](asie/UZ-ouzbekistan/README.md) | 12,0 % | Nettement en dessous du seuil | non |
| [Pakistan](asie/PK-pakistan/README.md) | 33,7 % | Nettement au-dessus du seuil | non |
| [Philippines](asie/PH-philippines/README.md) | 31,5 % | Nettement au-dessus du seuil | non |
| [Qatar](asie/QA-qatar/README.md) | 0,0 % | Nettement en dessous du seuil | non |
| [Singapour](asie/SG-singapour/README.md) | 14,7 % | Nettement en dessous du seuil | non |
| [Sri Lanka](asie/LK-sri-lanka/README.md) | 34,6 % | Nettement au-dessus du seuil | non |
| [Taïwan](asie/TW-taiwan/README.md) | 29,8 % | Nettement au-dessus du seuil | non |
| [Thaïlande](asie/TH-thailande/README.md) | 29,7 % | Nettement au-dessus du seuil | non |
| [Turquie](asie/TR-turquie/README.md) | 36,5 % | Nettement au-dessus du seuil | non |
| [Viêt Nam](asie/VN-viet-nam/README.md) | 34,0 % | Nettement au-dessus du seuil | non |
| [Émirats arabes unis](asie/AE-emirats-arabes-unis/README.md) | 0,0 % | Nettement en dessous du seuil | non |

## Amérique du Nord, centrale et Caraïbes (9)

| Pays | Taux | Verdict | Calcul détaillé |
|---|---:|---|---|
| [Bahamas](amerique-du-nord/BS-bahamas/README.md) | 0,0 % | Nettement en dessous du seuil | non |
| [Canada](amerique-du-nord/CA-canada/README.md) | 36,0 % | Nettement au-dessus du seuil | non |
| [Costa Rica](amerique-du-nord/CR-costa-rica/README.md) | 20,4 % | Discutable | non |
| [Guatemala](amerique-du-nord/GT-guatemala/README.md) | 6,7 % | Nettement en dessous du seuil | non |
| [Mexique](amerique-du-nord/MX-mexique/README.md) | 31,6 % | Nettement au-dessus du seuil | non |
| [Panama](amerique-du-nord/PA-panama/README.md) | 22,5 % | Discutable | non |
| [République dominicaine](amerique-du-nord/DO-republique-dominicaine/README.md) | 24,1 % | Discutable | non |
| [États-Unis](amerique-du-nord/US-etats-unis/README.md) | 23,3 % | Discutable | non |
| [Îles Caïmans](amerique-du-nord/KY-iles-caimans/README.md) | 0,0 % | Nettement en dessous du seuil | non |

## Amérique du Sud (8)

| Pays | Taux | Verdict | Calcul détaillé |
|---|---:|---|---|
| [Argentine](amerique-du-sud/AR-argentine/README.md) | 34,0 % | Nettement au-dessus du seuil | non |
| [Brésil](amerique-du-sud/BR-bresil/README.md) | 26,7 % | Nettement au-dessus du seuil | non |
| [Chili](amerique-du-sud/CL-chili/README.md) | 27,4 % | Nettement au-dessus du seuil | non |
| [Colombie](amerique-du-sud/CO-colombie/README.md) | 31,5 % | Nettement au-dessus du seuil | non |
| [Paraguay](amerique-du-sud/PY-paraguay/README.md) | 9,9 % | Nettement en dessous du seuil | non |
| [Pérou](amerique-du-sud/PE-perou/README.md) | 25,8 % | Discutable | non |
| [Uruguay](amerique-du-sud/UY-uruguay/README.md) | 26,0 % | Discutable | non |
| [Équateur](amerique-du-sud/EC-equateur/README.md) | 31,0 % | Nettement au-dessus du seuil | non |

## Océanie (5)

| Pays | Taux | Verdict | Calcul détaillé |
|---|---:|---|---|
| [Australie](oceanie/AU-australie/README.md) | 38,3 % | Nettement au-dessus du seuil | non |
| [Fidji](oceanie/FJ-fidji/README.md) | 28,1 % | Nettement au-dessus du seuil | non |
| [Nouvelle-Zélande](oceanie/NZ-nouvelle-zelande/README.md) | 34,6 % | Nettement au-dessus du seuil | non |
| [Papouasie-Nouvelle-Guinée](oceanie/PG-papouasie-nouvelle-guinee/README.md) | 40,6 % | Nettement au-dessus du seuil | non |
| [Samoa](oceanie/WS-samoa/README.md) | 26,3 % | Nettement au-dessus du seuil | non |
