import { auth, db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export const addOrder = async (items) => {
  var sum = 0;
  items.forEach((element) => {
    sum += element.price * element.quantity;
  });
  try {
    const docRef = await addDoc(collection(db, "orders"), {
      user: auth.currentUser.uid,
      items: items,
      total: sum,
    });
    console.log("Order placed successfully!");
  } catch (e) {
    console.log("error" + e);
  }
};
