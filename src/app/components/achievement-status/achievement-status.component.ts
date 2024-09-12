import { Component, Input } from '@angular/core';
import { AchievementStatus } from '../../models/achievements';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievement-status',
  standalone: true,
  imports: [NgbTooltipModule, CommonModule],
  templateUrl: './achievement-status.component.html',
  styleUrl: './achievement-status.component.scss'
})
export class AchievementStatusComponent {
  @Input() achievement!: AchievementStatus;
}
