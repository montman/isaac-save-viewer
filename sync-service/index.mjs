import { watch } from 'fs';
import { readFile } from 'fs/promises';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp } from "firebase-admin/firestore";
const saveGamePath = "example.txt"//"persistentgamedata1.dat";
var onUploadSaveGame = false;
initializeApp({
    credential: cert('cert.json')
})
const uploadSaveGame = async () => {
    const db = getFirestore();

    let fileContent = await readFile(saveGamePath, 'base64');
    const data = {
        content: fileContent,
        date: Timestamp.now()
    }
    let id = new Date().getTime().toString();
    await db.collection('savegames').doc(id).set(data);
}
watch(saveGamePath, async (eventType, filename) => {
    if (eventType === 'change') {
        if (!onUploadSaveGame) {
            onUploadSaveGame = true;
            setTimeout(() => {
                onUploadSaveGame = false;
            }, 3000);
            await uploadSaveGame();
        }
    }
}); 
