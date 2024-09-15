import { Injectable } from '@angular/core';
import { FirebaseApp,initializeApp } from "firebase/app";
import { collection,getDocs,getFirestore,limit,orderBy,query, Timestamp } from "firebase/firestore";

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  app: FirebaseApp;
  constructor() {
    this.app = initializeApp({
      apiKey: 'AIzaSyBXsOChCC-5PRl3oQ15oLGh9L7YvDMV7HI',
      authDomain: 'isaac-tracker.firebaseapp.com',
      projectId: 'isaac-tracker',
      storageBucket: 'isaac-tracker.appspot.com',
      messagingSenderId: '372483118433',
      appId: '1:372483118433:web:04dcf5a6c1998cbd3da120',
    });
  }
  async getLastSaveGameContent(): Promise<{ saveGame: string; date: Date }> {
    const db = getFirestore(this.app);
    const snapshot = await getDocs(
      query(collection(db, 'savegames'), orderBy('date', 'desc'), limit(1))
    );
    const lastSaveGame = snapshot.docs[0];
    let data: {date:Timestamp,content:string} = lastSaveGame.data() as {date:Timestamp,content:string};
    return { saveGame: data.content, date: data.date.toDate() };
  }
}
