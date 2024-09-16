import { Component, Input, OnInit } from '@angular/core';
import { IsaacProgress } from '../../models/IsaacProgress';
import { CommonModule } from '@angular/common';
import { ACHIEVEMENTS } from '../../models/achievements';
import { CHARACTERS } from '../../models/characters';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CommonModule, NgbTooltipModule],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss'
})
export class CharactersListComponent implements OnInit {
  @Input() progress!: IsaacProgress;
  achiementDetails: { [key: number]: string } = {};
  getAchievementDetails(id?: number): string {
    if (!id) return '';
    return this.achiementDetails[id];
  }
  ngOnInit(): void {
    let characterAchiements: number[] = CHARACTERS.map(c => c.achievementId).filter(a => a !== undefined) as number[];
    let achievements = ACHIEVEMENTS.filter(a => characterAchiements.includes(a.id))
    achievements.forEach(a => {
      this.achiementDetails[a.id] = a.unlock;
    })
  }
}
