# 🎒 Mon sac à dos

Checklist de matériel de randonnée. Une page web, aucune installation,
aucun compte, aucune connexion requise après le premier chargement.

## 👉 Utiliser l'application

**https://jeremycardona1995-web.github.io/Mon-sac-a-dos/**

## Comment ça marche

L'application part d'un inventaire complet rangé en groupes (abri et couchage,
cuisine, éclairage, vêtements, hygiène et secours). Chaque équipement se
parcourt en trois clics :

1. **Premier clic** — l'objet passe en rouge et rejoint « Dans le sac / À vérifier » : il est prévu pour cette rando, mais pas encore rangé.
2. **Deuxième clic** — l'objet passe en vert : il est bien dans le sac.
3. **Troisième clic** — l'objet retourne dans la réserve : il ne part pas cette fois.

D'un coup d'œil, tout ce qui reste en rouge est ce qu'il vous manque.

## Personnaliser

- **Ajouter** un groupe ou un équipement depuis le panneau « ⚙️ Ajouter du Matériel » en bas de page.
- **Renommer ou supprimer** un équipement ou un groupe : appui long sur téléphone, clic droit sur ordinateur.
- **Réinitialiser** : le bouton rouge en bas restaure l'inventaire d'origine.

## Vos données

Tout est enregistré dans le navigateur (`localStorage`), sur votre appareil
uniquement. Rien n'est envoyé sur un serveur, l'application ne fait aucun appel
réseau. En contrepartie, la liste ne se synchronise pas entre vos appareils, et
vider les données de navigation l'efface.

## Installer sur le téléphone

Ouvrez le lien, puis « Ajouter à l'écran d'accueil » depuis le menu du
navigateur. L'application s'ouvre alors comme une app classique.

## Licence

MIT — voir [LICENSE](LICENSE).
