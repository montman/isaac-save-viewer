import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from "firebase/app";
import { collection, DocumentData, getDocs, getFirestore, limit, orderBy, query, QueryDocumentSnapshot, startAfter, Timestamp } from "firebase/firestore";
import { IsaacProgress } from '../models/IsaacProgress';
import { AchievementStatus } from '../models/achievements';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  app: FirebaseApp;
  lastAchievementsCount = 20;
  lastSaveGame?: IsaacProgress;
  lastAchievements: { date: Date, achievements: AchievementStatus[] }[] = []
  constructor() {
    this.app = initializeApp({
      apiKey: 'AIzaSyBXsOChCC-5PRl3oQ15oLGh9L7YvDMV7HI',
      authDomain: 'isaac-tracker.firebaseapp.com',
      projectId: 'isaac-tracker',
      storageBucket: 'isaac-tracker.appspot.com',
      messagingSenderId: '372483118433',
      appId: '1:372483118433:web:04dcf5a6c1998cbd3da120',
    });
    this.getLastSaveGameContent();
    this.getLastSaveGames(this.lastAchievementsCount + 1);
  }

  parseSaveGame(saveGame: QueryDocumentSnapshot<DocumentData, DocumentData>): IsaacProgress {
    let data: { date: Timestamp, content: string } = saveGame.data() as { date: Timestamp, content: string };
    var binaryString = atob(data.content);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const kaitaiStream = new KaitaiStream(bytes.buffer);
    return new IsaacProgress(new IsaacSaveFile(kaitaiStream), data.date.toDate());
  }
  async getLastSaveGameContent(): Promise<void> {
    const db = getFirestore(this.app);
    const snapshot = await getDocs(
      query(collection(db, 'savegames'), orderBy('date', 'desc'), limit(1))
    );
    const saveGame = snapshot.docs[0];
    this.lastSaveGame = this.parseSaveGame(saveGame);
  }
  async getLastSaveGames(count: number) {
    const db = getFirestore(this.app);
    const snapshot = await getDocs(
      query(collection(db, 'savegames'), orderBy('date', 'desc'), limit(count))
    );
    let allSaveGames = snapshot.docs.map(el => this.parseSaveGame(el));
    for (let i = 0; i < allSaveGames.length - 1; i++) {
      let achs = allSaveGames[i].getUnlockedAchievements(allSaveGames[i + 1])
      if (achs.length > 0) this.lastAchievements.push({
        date: allSaveGames[i].date,
        achievements: achs
      })

    }
  }
}
