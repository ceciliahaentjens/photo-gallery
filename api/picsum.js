// l'url de l'api utilisé.
//! plus d'info ici : https://picsum.photos/

const API_RUL = `https://picsum.photos/v2`;

/** @param page {Number} quelle page de l'api je veux fetch, à changer pour avoir de nouvelles images  */

export async function getImageList(page = 5) {
  const response = await fetch(`${API_RUL}`);
  const imagesList = await response.json();
  return imagesList;
}
