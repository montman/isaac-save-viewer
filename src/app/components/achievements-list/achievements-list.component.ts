import { Component, Input, OnInit } from '@angular/core';
import { IsaacProgress } from '../../models/IsaacProgress';
import { AchievementStatusComponent } from '../achievement-status/achievement-status.component';
import { CommonModule } from '@angular/common';
import { AchievementStatus } from '../../models/achievements';
import { BehaviorSubject, map, Observable, startWith } from 'rxjs';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-achievements-list',
  standalone: true,
  imports: [AchievementStatusComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './achievements-list.component.html',
  styleUrl: './achievements-list.component.scss'
})
export class AchievementsListComponent {
  get onlyNotCompleted() {
    return this.form.value.onlyNotCompleted;
  }
  get sortByQuality() {
    return this.form.value.sortByQuality;
  }
  form = new FormGroup({
    search: new FormControl(""),
    onlyNotCompleted: new FormControl(false),
    sortByQuality: new FormControl(false)
  })
  achievements$: Observable<AchievementStatus[]> = this.form.valueChanges.pipe(startWith({ search: "", onlyNotCompleted: false, sortByQuality: false }), map(r => {
    return this.progress.achievementStatus.filter(a => {
      return (
        (
          a.name +
          ' ' +
          a.description +
          ' ' +
          a.unlock +
          ' ' +
          a.item?.description +
          ' ' +
          a.item?.name
        )
          .toLowerCase()
          .includes(r.search?.toLowerCase() ?? '') &&
        (r.onlyNotCompleted ? !a.completed : true)
      );
    }).sort((a, b) => {
      if (r.sortByQuality) {
        return (b.item?.quality ?? 0) - (a.item?.quality ?? 0);
      }
      return 0;
    });
  }));
  @Input() progress!: IsaacProgress;
  toggleCompleted() {
    this.form.patchValue({
      onlyNotCompleted: !this.form.value.onlyNotCompleted
    })
  }
  toggleSortByQuality() {
    this.form.patchValue({
      sortByQuality: !this.form.value.sortByQuality
    })
  }
}
