import exportFirebase from "../../firebase/firebase";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

export const Test = () => {
  async function add() {
    const citiesRef = collection(exportFirebase.db, "cities");
    await setDoc(doc(citiesRef, "SF"), {
      name: "San Francisco",
      state: "CA",
      country: "USA",
      capital: false,
      population: 860000,
      regions: ["west_coast", "norcal"],
    });
    await setDoc(doc(citiesRef, "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
      capital: false,
      population: 3900000,
      regions: ["west_coast", "socal"],
    });
    await setDoc(doc(citiesRef, "DC"), {
      name: "Washington, D.C.",
      state: null,
      country: "USA",
      capital: true,
      population: 680000,
      regions: ["east_coast"],
    });
    await setDoc(doc(citiesRef, "TOK"), {
      name: "Tokyo",
      state: null,
      country: "Japan",
      capital: true,
      population: 9000000,
      regions: ["kanto", "honshu"],
    });
    await setDoc(doc(citiesRef, "BJ"), {
      name: "Beijing",
      state: null,
      country: "China",
      capital: true,
      population: 21500000,
      regions: ["jingjinji", "hebei"],
    });
  }
  add();

  async function get() {
    const docRef = collection(exportFirebase.db, "cities");
    const querySnapshot = await getDocs(docRef);
    const data = [];

    if (querySnapshot.empty === true) {
      throw new Error("Data not found");
    }

    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      if (docData) {
        data.push(docData);
      }
    });
    console.log(data);
    return data;
  }
  get();

  async function del() {
    await deleteDoc(doc(exportFirebase.db, "cities", "SF"));
  }

  return (
    <>
      <button
        onClick={() => {
          del();
        }}
      >
        delete
      </button>
    </>
  );
};
