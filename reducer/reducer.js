export const initialState = {
  photos: []
};

// useReducer est un hook qui permettra de définir un état en l'accompagnant d'une fonction réductrice qui permettra de décrire les différentes mutations possibles.

export const appReducer = (state, action) => {
  switch (action.type) {
    case "CALLING":
      return initialState;
    case "LOADED":
      return { photos: action.data };
    case "ERROR":
      return initialState;
  }
};
