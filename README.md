### React Modal Component Tasse2

Un composant React pour afficher une modal simple.

## Description du composant

Ce composant est conçu pour le projet 14 du parcours de formation OpenClassrooms "Développeur JavaScript React".

## Installation

### Étape 1 : Installer le composant
## Dépendances

npm i react-modal-component-tasse2

### Étape 2 : Installer les dépendances peer
Assurez-vous d'avoir les dépendances peer suivantes installées dans votre projet :


npm install react@^18.2.55 react-dom@^18.2.19 prop-types@^15.8.1





## Composant Modal

### Propriétés

| Propriété | Type     | Description                                  |
|-----------|----------|----------------------------------------------|
| isOpen    | Boolean  | Indique si la modal est ouverte ou fermée    |
| onClose   | Function | Callback pour fermer la modal                |
| children  | Node     | Contenu à afficher à l'intérieur de la modal |
   




## Exemples d'utilisation
```jsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
>
  <h2>Titre de la Modal</h2>
  <p>Voici le contenu de la modal</p>
  <button onClick={handleClose}>Fermer</button>
</Modal>
 ```


## Exemple d'utilisation dans un composant React :
```jsx
import React, { useState } from 'react';
import Modal from 'react-modal-component-tasse2';

function App() {
const [isOpen, setIsOpen] = useState(false);

const handleClose = () => setIsOpen(false);
const handleOpen = () => setIsOpen(true);

return (
<div>
<button onClick={handleOpen}>Ouvrir la Modal</button>
<Modal
        isOpen={isOpen}
        onClose={handleClose}
      >
<h2>Titre de la Modal</h2>
<p>Voici le contenu de la modal</p>
<button onClick={handleClose}>Fermer</button>
</Modal>
</div>
);
}

export default App;
```

## Vous pouvez remplacer le style par défaut en utilisant la propriété style :
```jsx
<Modal
style={{ backgroundColor: 'lightblue' }}
isOpen={isOpen}
onClose={handleClose}

>

  <h2>Titre de la Modal</h2>
  <p>Voici le contenu de la modal</p>
  <button onClick={handleClose}>Fermer</button>
</Modal>
``` 

## Accessibilité

Le composant modal respecte les meilleures pratiques en matière d'accessibilité, comme le piégeage du focus à l'intérieur de la modal lorsqu'elle est ouverte et le retour du focus à l'élément précédemment focalisé à la fermeture.

De plus, la modal peut être fermée en :

* Cliquant sur le bouton de fermeture de la modal
* Cliquant à l'extérieur de la modal
* Naviguant vers le bouton de fermeture avec la touche Tab, et en appuyant sur la touche Entrée

## Dépendances 

```json

"peerDependencies": {
"react": "^18.2.55",
"react-dom": "^18.2.19",
"prop-types": "^15.8.1"
}

```

## Licence
Ce composant est distribué sous la licence MIT.

La section "Licence" indique que le projet est sous licence MIT. Voici ce que cela signifie généralement :

1. **Libre utilisation** : Vous pouvez utiliser le code pour n'importe quel but.
2. **Redistribution** : Vous pouvez distribuer le code, que ce soit sous forme binaire ou sous forme de source.
3. **Modifications** : Vous pouvez modifier le code et distribuer vos versions modifiées.
4. **Inclusion de la licence** : Vous devez inclure le texte de la licence originale dans toute copie ou distribution substantielle du code.

