import firebase from "../../service/firebase";
import { ref, child, get } from "firebase/database";

export async function getProducts() {
  const dbRef = ref(firebase);
  let products = [];
  return await get(child(dbRef, "product"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((snap) => {
          products.push(mapFireBaseProduct(snap.val()));
        });
        return products;
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export function getProductDescription(productItems, productId) {
  return productItems[productId];
}

function mapFireBaseProduct(firebaseitem) {
  return {
    id: firebaseitem.id,
    itemName: firebaseitem.itemName,
    description: firebaseitem.description,
    price: firebaseitem.price,
    img: firebaseitem.img,
    isFavorite: firebaseitem.isFavorite,
    comments: [],
  };
}
