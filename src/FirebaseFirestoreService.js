import firebase from "./Firebase.Config";

const firestore = firebase.firestore();

const createDocument = (collection, document) => {
  return firestore.collection(collection).add(document);
};

const FirebaseFirestoreService = {
  createDocument,
};

export default FirebaseFirestoreService;
