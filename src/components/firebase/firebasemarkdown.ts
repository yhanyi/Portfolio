import { firestore } from "../../firebaseconfig"; // Adjust path based on your actual location of firebaseConfig
import { doc, setDoc, getDoc } from "firebase/firestore";

// Function to save markdown content to Firestore
export const saveMarkdownToFirestore = async (
  content: string,
  password: string
) => {
  try {
    const docRef = doc(firestore, "todolist", "todolist");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      if (!password) {
        alert("Please enter the password to save.");
        throw new Error("Please enter the password to save.");
      } else if (password !== data.password) {
        alert("Incorrect password. Please try again.");
        throw new Error("Incorrect password. Please try again.");
      }

      await setDoc(docRef, {
        ...data,
        content: content,
        timestamp: new Date(),
      });

      console.log("Note saved successfully!");
    } else {
      console.log("No such document!");
      throw new Error("No such document!");
    }
  } catch (error) {
    console.error("Error saving note: ", error);
    throw error;
  }
};

export const getMarkdownFromFirestore = async () => {
  try {
    const docRef = doc(firestore, "todolist", "todolist");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error retrieving note: ", error);
    throw error;
  }
};
