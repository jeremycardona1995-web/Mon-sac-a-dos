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

Un tutoriel s'affiche au premier lancement. Vous pouvez le revoir à tout
moment depuis le menu **⋯**.

## Trouver et filtrer

- Le champ de **recherche** filtre l'inventaire à la frappe, sans tenir compte
  des accents ni des majuscules. Chercher un nom de groupe affiche tout son
  contenu.
- Les quatre onglets **Tout / À prendre / Rangé / Réserve** limitent l'affichage
  à une seule section.

## Personnaliser

- **Ajouter** un équipement ou créer un groupe : le bouton vert **+** en bas à droite.
- **Renommer, peser ou supprimer** un équipement ou un groupe : appui long sur
  téléphone, clic droit sur ordinateur.
- **Peser son sac** : indiquez un poids en grammes sur les objets qui comptent.
  Le total de ce qui est rangé s'affiche dans l'entête, avec entre parenthèses
  ce que pèse encore ce qu'il reste à prendre. Les objets sans poids sont
  simplement ignorés du calcul.

## Le menu ⋯

- **🥾 Nouvelle rando** — décoche tout d'un coup, sans toucher à votre
  inventaire ni à vos poids. C'est ce qu'il faut utiliser entre deux sorties.
- **💾 Exporter ma liste** — enregistre tout dans un fichier `.json`.
- **📂 Importer une liste** — restaure un fichier exporté, ou récupère la liste
  de quelqu'un d'autre. La liste en cours est remplacée.
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

## Licence

MIT — voir [LICENSE](LICENSE).
