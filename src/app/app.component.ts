import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AchievementsListComponent } from './components/achievements-list/achievements-list.component';
import { IsaacProgress } from './models/IsaacProgress';
import { FirebaseService } from './services/firebase.service';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { LastAchievementsComponent } from './components/last-achievements/last-achievements.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AchievementsListComponent, LastAchievementsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'isaac-save-ng';
  get isaacProgress(): IsaacProgress | undefined {
    return this.firebaseService.lastSaveGame;
  }
  constructor(private firebaseService: FirebaseService) {
  }
}
