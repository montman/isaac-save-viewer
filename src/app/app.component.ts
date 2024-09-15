import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AchievementsListComponent } from './components/achievements-list/achievements-list.component';
import { IsaacProgress } from './models/IsaacProgress';
import { FirebaseService } from './services/firebase.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AchievementsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'isaac-save-ng';
  isaacProgress?: IsaacProgress;

  parseSaveFile(file: ArrayBuffer,date:Date) {
    const kaitaiStream = new KaitaiStream(file);
    this.isaacProgress = new IsaacProgress(new IsaacSaveFile(kaitaiStream),date);


  }
  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.getLastSaveGameContent().then(({ saveGame, date }) => {
      var binaryString = atob(saveGame);
      var bytes = new Uint8Array(binaryString.length);
      for (var i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      this.parseSaveFile(bytes.buffer,date);
    });
  }
}
