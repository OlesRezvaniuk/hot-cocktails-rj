import { getAuth, getOut } from "./helpers/api";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import exportFirebase from "../../firebase/firebase";
import { useEffect, useState } from "react";

export const Auth = () => {
  const [array, setArray] = useState([]);
  const [favorite, setFavorite] = useState([]);

  async function addData({ data }) {
    console.log(data);
    const audit = await array.find((item) => item.first === data.first);
    if (audit) {
      console.log("item already in array");
      return;
    } else {
      try {
        const docRef = await addDoc(collection(exportFirebase.db, "users"), {
          first: data.first,
          middle: data.middle,
          last: data.last,
          born: data.born,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }

  async function getData() {
    const arr = [];
    const querySnapshot = await getDocs(collection(exportFirebase.db, "users"));
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    console.log(querySnapshot);
    setArray(arr);
  }

  console.log(favorite);

  async function addFavorite(id) {
    console.log(id);
    const audit = await favorite.find((item) => item.id === id);
    console.log(favorite[0].id);
    if (audit) {
      console.log("id is already in favorite");
      return;
    } else {
      try {
        const docRef = await addDoc(collection(exportFirebase.db, "favorite"), {
          id,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }

  useEffect(() => {
    getFavorite();
  }, []);

  async function getFavorite() {
    const arr = [];
    const querySnapshot = await getDocs(
      collection(exportFirebase.db, "favorite")
    );
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    setFavorite(arr);
  }

  const id = "1123232d";
  console.log(favorite);

  async function deleteFromFavorite(id) {
    const data = await deleteDoc(
      doc(exportFirebase.db, "favorite", "4qHbMySYtAaL5fUinRj8")
    );
  }

  return (
    <>
      <button
        onClick={() => {
          getFavorite();
          addFavorite(id);
        }}
      >
        Add to favorite
      </button>
      <button
        onClick={() => {
          deleteFromFavorite(id);
        }}
      >
        Delete on favorite
      </button>
      <button
        onClick={() => {
          addData({
            data: {
              first: "hyi",
              middle: "Mathidsadsason",
              last: "Turing",
              born: 1912,
            },
          });
        }}
      >
        POST
      </button>
      <button
        onClick={() => {
          getData();
        }}
      >
        GET
      </button>
      <button onClick={getAuth}>AUTH</button>
      <button onClick={getOut}>LOGOUT</button>
    </>
  );
};
