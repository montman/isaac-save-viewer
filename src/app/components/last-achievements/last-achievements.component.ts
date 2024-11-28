import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { IsaacProgress } from '../../models/IsaacProgress';
import { CommonModule } from '@angular/common';
import { AchievementStatusComponent } from "../achievement-status/achievement-status.component";

@Component({
  selector: 'app-last-achievements',
  standalone: true,
  imports: [CommonModule, AchievementStatusComponent],
  templateUrl: './last-achievements.component.html',
  styleUrl: './last-achievements.component.scss'
})
export class LastAchievementsComponent {
  get lastSaveGames(): IsaacProgress[] {
    return this.fs.allSaveGames.slice(0, this.fs.allSaveGames.length - 1);
  }
  constructor(public fs: FirebaseService) {

  }
}
