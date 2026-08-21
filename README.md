# 🎒 Mon sac à dos

Checklist de matériel de randonnée. Une page web, aucune installation,
aucun compte, aucune connexion requise après le premier chargement.

## 👉 Utiliser l'application

**https://jeremycardona1995-web.github.io/Mon-sac-a-dos/**

## Comment ça marche

L'application part d'un inventaire complet rangé en groupes (abri et couchage,
cuisine, éclairage, vêtements, hygiène et secours). Chaque équipement se
déplace entre trois sections, **au glissement du doigt** :

**Réserve → À prendre → Rangé**

- **Glisser vers la droite** fait avancer l'objet d'un cran.
- **Glisser vers la gauche** le fait reculer d'un cran.

Une couleur apparaît sous la ligne pendant le geste et annonce la section
d'arrivée. En bout de chaîne, la ligne résiste et rien ne bouge.

Un appui simple ne fait rien : c'est le glissement qui range. Sur ordinateur,
glissez en maintenant le bouton de la souris.

L'entête affiche en permanence votre progression : un anneau, le nombre
d'objets rangés, et ce qu'il reste à trouver. Tout ce qui est en ambre est ce
qui vous manque.

Un tutoriel s'affiche au premier lancement, et un second la première fois que
vous ouvrez la vue Nourriture. Vous pouvez les revoir à tout moment depuis le
menu **⋯**, qui propose celui de la vue en cours.

## Trouver et filtrer

- Le champ de **recherche** filtre l'inventaire à la frappe, sans tenir compte
  des accents ni des majuscules. Chercher un nom de groupe affiche tout son
  contenu.
- Les quatre onglets **Tout / À prendre / Rangé / Réserve** limitent l'affichage
  à une seule section.

## Personnaliser

- **Ajouter** un équipement ou créer un groupe : le bouton vert **+** en bas à droite.
- **Renommer, peser ou supprimer** un équipement ou un groupe : appui long sur
  téléphone, clic droit sur ordinateur. Le renommage donne accès au sélecteur
  de symboles, qui remplace celui déjà en place sans toucher au reste du nom.
- **Choisir un symbole** : dans la fenêtre d'ajout, deux boutons ouvrent un
  sélecteur de 302 symboles répartis en 20 thèmes, l'un pour l'équipement,
  l'autre pour le groupe. Un champ de recherche les filtre par nom français —
  « tente », « corde », « réchaud » — sans tenir compte des accents. Votre
  saisie est conservée pendant le choix.
- **Peser son sac** : indiquez un poids en grammes sur les objets qui comptent.
  Le total de ce qui est rangé s'affiche dans l'entête, avec entre parenthèses
  ce que pèse encore ce qu'il reste à prendre. Les objets sans poids sont
  simplement ignorés du calcul.

## 🍲 Nourriture

Le bouton **🍲**, au-dessus du **+**, bascule entre le sac et la nourriture.

Réglez la **durée en jours** et votre **besoin quotidien en calories** (2 500 à
3 500 kcal/jour en terrain courant, davantage en montagne). L'application
calcule alors vos calories totales, votre autonomie réelle, le poids des vivres
et le poids par jour.

La mesure qui compte est la **densité calorique**, en kcal pour 100 g. C'est
elle qui décide du poids de votre sac, pas les calories seules :

| Densité | Lecture |
|---|---|
| 440 kcal/100 g et plus | menu dense, sac léger |
| 320 à 440 | correct |
| moins de 320 | vous portez surtout de l'eau |

Une jauge situe votre menu entre « lourd » et « ultraléger », et chaque aliment
affiche sa propre densité en couleur.

**Ajouter un aliment** : le **+** ouvre une bibliothèque d'une quarantaine
d'aliments de randonnée déjà renseignés, **rangés par groupe** — plats et
féculents, viandes et fromages, fruits secs, sucré, matières grasses, boissons,
frais. Parcourez les rayons, ou tapez les premières lettres pour chercher
directement. Vous pouvez aussi créer un aliment libre.

**Ajuster les quantités** : glissez vers la droite pour ajouter une unité, vers
la gauche pour en retirer une. Appui long pour modifier ou supprimer.

Au-delà de 7 jours, l'application vous avertit : personne ne porte trois
semaines de vivres. Sur une longue traversée, planifiez une section entre deux
ravitaillements à la fois.

## Le menu ⋯

- **🥾 Nouvelle rando** — décoche tout d'un coup, sans toucher à votre
  inventaire ni à vos poids. C'est ce qu'il faut utiliser entre deux sorties.
- **💾 Exporter ma liste** — enregistre tout dans un fichier `.json`.
- **📂 Importer une liste** — restaure un fichier exporté, ou récupère la liste
  de quelqu'un d'autre. La liste en cours est remplacée.
- **🛒 Liste de courses** — récapitule les quantités totales à acheter, avec
  les poids, et se copie en un geste.
- **⚠️ Réinitialiser** — revient à l'inventaire d'origine. Vos ajouts et vos
  poids sont perdus.

## Vos données

Tout est enregistré dans le navigateur (`localStorage`), sur votre appareil
uniquement. Rien n'est envoyé sur un serveur, l'application ne fait aucun appel
réseau. En contrepartie, la liste ne se synchronise pas entre vos appareils, et
vider les données de navigation l'efface.

Sur iPhone, une application ajoutée à l'écran d'accueil peut voir son stockage
effacé par iOS après plusieurs semaines sans ouverture. **Exportez votre liste**
une fois votre inventaire réglé : c'est la seule sauvegarde qui survit à tout.

## Installer sur le téléphone

Ouvrez le lien, puis « Ajouter à l'écran d'accueil » depuis le menu du
navigateur. Une icône de sac à dos apparaît sur l'écran d'accueil et
l'application se lance en plein écran, sans barre de navigateur.

Une fois installée, elle fonctionne **hors connexion** : elle est mise en cache
au premier lancement, ce qui permet de consulter sa liste en pleine montagne.
Les mises à jour se téléchargent automatiquement dès qu'il y a du réseau.

## Sous le capot

Un seul fichier `index.html` : HTML, CSS et JavaScript, sans framework ni
dépendance, sans étape de compilation. `sw.js` gère le cache hors-ligne en
stratégie réseau-d'abord, `manifest.webmanifest` déclare l'installation.

## Crédits

Les émojis proviennent de [Twemoji](https://github.com/jdecked/twemoji),
graphismes sous licence [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/).

## Licence

Le code est sous licence MIT — voir [LICENSE](LICENSE). Les fichiers du dossier
`emoji/` restent sous CC-BY 4.0, conformément à la licence de Twemoji.
