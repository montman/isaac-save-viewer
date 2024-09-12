import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IsaacProgress } from './models/IsaacProgress';
import { AchievementsListComponent } from './components/achievements-list/achievements-list.component';
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
  onFileChange(event: any) {
    const files = event!.target!.files as FileList;
    const firstFile = files[0];
    const inputReader = new FileReader();
    inputReader.onload = () => {
      this.parseSaveFile(inputReader.result as ArrayBuffer);
    }
    inputReader.readAsArrayBuffer(firstFile);
  }

  parseSaveFile(file: ArrayBuffer) {
    const kaitaiStream = new KaitaiStream(file);
    this.isaacProgress = new IsaacProgress(new IsaacSaveFile(kaitaiStream));


  }
}
