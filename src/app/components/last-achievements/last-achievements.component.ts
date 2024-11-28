import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { IsaacProgress } from '../../models/IsaacProgress';
import { CommonModule } from '@angular/common';
import { AchievementStatusComponent } from "../achievement-status/achievement-status.component";
import { AchievementStatus } from '../../models/achievements';

@Component({
  selector: 'app-last-achievements',
  standalone: true,
  imports: [CommonModule, AchievementStatusComponent],
  templateUrl: './last-achievements.component.html',
  styleUrl: './last-achievements.component.scss'
})
export class LastAchievementsComponent {
  get lastAchievements(): { date: Date, achievements: AchievementStatus[] }[] {
    return this.fs.lastAchievements
  }
  constructor(public fs: FirebaseService) {

  }
}
