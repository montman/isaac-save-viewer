import { exec } from "child_process";
import { cert, initializeApp } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { readFile } from "fs/promises";
let isOpened = false;
const saveGamePath =
  "C:/Users/amati/Documents/My Games/Binding of Isaac Repentance/persistentgamedata1.dat";
initializeApp({
  credential: cert("cert.json"),
});

const isRunning = async (query) => {
  return await new Promise((res, rej) => {
    exec("tasklist", (err, stdout, stderr) => {
      res(stdout.toLowerCase().indexOf(query.toLowerCase()) > -1);
    });
  });
};

const uploadSaveGame = async () => {
  try {
    const db = getFirestore();

    let fileContent = await readFile(saveGamePath, "base64");
    const data = {
      content: fileContent,
      date: Timestamp.now(),
    };
    let id = new Date().getTime().toString();
    await db.collection("savegames").doc(id).set(data);
    console.log("uploaded save file");
  } catch (err) {
    console.log(err);
  }
};
setInterval(async () => {
  let isCurrentlyRunning = await isRunning("isaac");
  if (isOpened && !isCurrentlyRunning) {
    console.log("isaac is closed");
    isOpened = false;
    await uploadSaveGame();
  }
  if (!isOpened && isCurrentlyRunning) {
    console.log("isaac is opened");
    isOpened = true;
  }
}, 5000);
