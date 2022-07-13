# Phot'O Gallery

Bienvenue jeune padawan !
Si tu es ici c'est que tu veux t'entrainer sur React Native n'est ce pas ?
Tu es au bon endroit

Un formateur a tenté de faire une application de gallery photo, mais sans succès.

Il voulait que ça ressemble à ça :

![](./video/photoGallery.gif)

Il a commencé à coder 2-3 trucs mais je pense que ce n'est pas fonctionnel !

A toi de rendre ça aussi beau et fonctionnel que le résultat souhaité !

### Ressources

Je sais de source sur que ce fameux formateur a utilisé Expo et son simulateur iOS mais cela fonctionne aussi sur son device personnel.
Il a utilisé ces fiches récap pour installer son environnement de dev
[Installation Expo](https://kourou.oclock.io/ressources/fiche-recap/installation-environnement-dev-mobile-react-native/)

Il a trouvé un package pour pouvoir zoomer sur une image avec ses deux doigts mais sans succès :

[react-native-image-pan-zoom](https://www.npmjs.com/package/react-native-image-pan-zoom)

Il a utilisé une [API d'image gratuite](https://picsum.photos/)

Il a également utilisé une librairie de composant : [native base](https://nativebase.io/) mais c'est à toi de voir si tu veux l'utiliser aussi ou non !

## Challenge React Native

### Étape 1 : Mise en place

Vérifiez que votre environnement de dev mobile est bien configuré au moins avec Expo.

Cloner le projet et lancer un :

```SHELL
  npm install
```

### Étape 2 : Fetch de l'API externe

Le formateur se plaint de ne pas pouvoir faire de requete à [l'API gratuite](https://picsum.photos/) qu'il a choisie dans son fichier [picsum.js](./api/picsum.js)

Il semble que ce ne soit qu'une fonction qui renvoie les résultats de l'API mais il ne reçoit rien !

Trouver un moyen de régler ça !

<details>
<summary>Un indice ?</summary>

- Vérifier la doc de l'[API](https://picsum.photos/), il semble qu'il manque des choses dans l'url.
- Un argument page est passé dans la fonction ? Surement un indice!

</details>

### Étape 3 : Récupérer mes données de l'API

L'API renvoie des infos ? c'est une bonne chose !! Mais il faudrait pouvoir les afficher ensuite.

Je vois que dans App.js un composant PhotoGallery est utilisé auquel on envoie une props photos. C'est de l'API que ça doit provenir !

Je vois que dans un useEffect, le formateur a essayé d'appeler ma fonction d'appel API mais sans succès.

Trouver un moyen de récupérer les données de l'API dans le useEffect et les stocker.

<details>
<summary>Un indice ?</summary>

- Notre appel API est une fonction asynchrone, je vais devoir utiliser une fonction async await dans mon useEffect (OUCH)
- cela ressemble à ça [normalement](https://devtrium.com/posts/async-functions-useeffect) :

  ```javascript
  useEffect(() => {
    async function maFonctionPourFetchLAPI() {
      try {
        const ceQueJeVeux = await uneAutreFonction();
      } catch (error) {
        //  to do
        console.error(error);
      }
    }
    maFonctionPourFetchLAPI();
  }, []);
  ```

- Stocker des infos en React ou React Native ? useState Voyons !!

</details>

### Étape 4 : Stocker mes données avec l'aide de useReducer

Je vois qu'il y a un dossier [reducer](./reducer/) avec un fichier dedans.
Le formateur a voulu utilisé useReducer pour gérer les données de son application.

Je sais de source sur qu'il voulait savoir quand son appel API était en train de se faire, quand il recevait des donnéees et quand il y avait une erreur. Mais il n'a pas réussi

Il est temps pour vous de mettre en place ce Reducer

<details>
<summary>Un indice ?</summary>

- Je vais devoir initialiser un state avec les données que je veux
- Définir mon appReducer avec les actions que je veux y mettre pour modifier mon state
- Peut-être que le challenge Pomodor'O peut m'aider

</details>

### Étape 5 : Utiliser useReducer dans mon application

Maintenant que j'ai bien mis en place mon reducer, je vois que dans app.js le formateur avait déjà préparé le terrain pour l'accueillir. Enfin vraiment préparer 2% quoi !

Modifier votre useEffect, pour que les données de l'API soit envoyé dans le state de votre useReducer au lieu du useState de l'étape 3.

<details>
<summary>Un indice ?</summary>

- En déclarant useReducer nous avons accès au state et une fonction dispatch
- Utilisons cette fontion dispatch pour modifier notre state avec nos actions définies à l'étape précédente
- Ca devrait faire un truc dans ce style :

  ```javascript
  useEffect(() => {
    async function maFonctionPourFetchLAPI() {
      try {
        const ceQueJeVeux = await uneAutreFonction();
        dispatch({ type: "UNE ACTION", data: ceQueJeVeux });
      } catch (error) {
        //  to do
        console.error(error);
        dispatch({ type: "UNE AUTRE ACTION", data: error });
      }
    }
    maFonctionPourFetchLAPI();
  }, []);
  ```

</details>

### (OPTIONNEL) Étape 5 BIS : HELP j'aime pas useReducer je veux utiliser useState

Entendu jeune padawan, changeons donc d'approche et utilisons useState au lieu de useReducer.

- Tu peux déclarer un state avec une fonction pour modifier ce state comme ceci par exemple :

  <details>
  <summary> useState declaration </summary>

  ```javascript
  const [appState, setAppState] = useState({
    photos: [],
    error: null,
  });
  ```

  </details>

- Utiliser la fonction défini dans ton useState pour récupérer tes données et les afficher

### Étape 6 : Afficher les données de l'API

Enfin je vais pouvoir afficher les données de mon API.
Je les reçois bien depuis l'API, elles sont dans mon state et je peux l'envoyer au composant PhotoGallery comme le formateur le prévoyait.

Allons faire un tour dans ce composant [PhotoGallery](./components/PhotoGallery.js);

C'est plutôt cool il a tenté un truc avec [FlatList](https://reactnative.dev/docs/flatlist) mais il ne reçevait pas bien les données de l'API.

Maintenant que je reçois bien mes photos via mes props, Afficher une gallerie de photo avec le nom de l'auteur de la photo dessus.

!! Attention à la taille des photos nous sommes sur un mobile.

<details>
<summary>Un indice ?</summary>

- Flatlist a une propriété [numColumns](https://reactnative.dev/docs/flatlist#numcolumns) me permettant de gérer la taille et l'affichage de ma liste par rapport à la dimension du device.
- l'API de React Native permet de connaitre la taille du device avec la fonctione [Dimension](https://reactnative.dev/docs/dimensions).
- Si je fais un petite opération entre la taille de l'image et le nombre de colomne je devrais pouvoir afficher des images à la bonne taille suivant le Device.
- Je peux rajouter un composant en position absolute pour afficher l'auteur de la photo directement dessus.

</details>

## BONUS

Si tu es arrivé jusqu'ici alors BRAVO.

Mais tu as du remarquer que la gallerie de photo était intéractive et que qu'on pouvait cliquer sur une photo pour la voir en grand.

Essayons d'implementé ça :

Native Base nous donne accès à un composant [Modal](https://docs.nativebase.io/next/modal) nous permettant d'ouvrir et fermer une modal avec un style déjà tout pret !

À l'aide de la doc, rend chaque photo

```javascript
<Pressable>
```

Et fait apparaitre la modal avec la photo et le nom de l'auteur dans l'app.

<details>
<summary>Un indice ?</summary>

Normalement pas d'indice pour un bonus mais vu qu'on en a fait que 2 jours de React Native juste un ou deux indices.

- Le formateur a déjà préparé le terrain pour une modal dans [ModalPhoto.js](./components/ModalPhoto.js)
- Envoie les infos pour ouvrir cette modal avec useState
- Ça suffit les indices !

</details>

## BONUS de la mort

Maintenant que notre modal s'affiche et se ferme avec notre composant, on aimerait pouvoir zoomer sur la photo quand la modal est ouverte.

un [package](https://www.npmjs.com/package/react-native-image-pan-zoom) est fourni par le formateur mais il ne l'a pas utilisé !

Avec l'aide de ce package essaye de rendre la photo zoomable.

<details>
<summary>Un indice ?</summary>

0 indice pour un bonus de la MORT !

Apparemment il faut mettre autour de notre composant Image un certain :

```javascript
<ImageZoom
  cropWidth={width}
  cropHeight={height}
  imageWidth={width}
  imageHeight={height}
></ImageZoom>
```

- C'est déjà beaucoup comme indice !

</details>
