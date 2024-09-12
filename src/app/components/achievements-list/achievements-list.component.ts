import { Component, Input, OnInit } from '@angular/core';
import { IsaacProgress } from '../../models/IsaacProgress';
import { AchievementStatusComponent } from '../achievement-status/achievement-status.component';
import { CommonModule } from '@angular/common';
import { AchievementStatus } from '../../models/achievements';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-achievements-list',
  standalone: true,
  imports: [AchievementStatusComponent, CommonModule],
  templateUrl: './achievements-list.component.html',
  styleUrl: './achievements-list.component.scss'
})
export class AchievementsListComponent implements OnInit {
  onlyNotCompleted = false;
  achievements: BehaviorSubject<AchievementStatus[]> = new BehaviorSubject<AchievementStatus[]>([]);
  @Input() progress!: IsaacProgress;
  toggleCompleted() {
    this.onlyNotCompleted = !this.onlyNotCompleted;
    this.achievements.next(this.progress.achievementStatus.filter(el => this.onlyNotCompleted ? !el.completed : true));
  }
  ngOnInit(): void {
    this.achievements = new BehaviorSubject<AchievementStatus[]>(this.progress.achievementStatus);
  }
}
