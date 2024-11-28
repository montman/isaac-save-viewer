import { ACHIEVEMENTS, AchievementStatus } from "./achievements";
import { CHARACTERS, CharacterStatus } from "./characters";

export class IsaacProgress {
  achievementStatus: AchievementStatus[] = [];
  charactersStatus: CharacterStatus[] = [];
  date: Date;
  getUnlockedAchievements(previous: IsaacProgress): AchievementStatus[] {
    let completedNow = this.achievementStatus.filter((el) => el.completed);
    let uncompletedBefore: number[] = previous.achievementStatus.filter(el => !el.completed).map(el => el.id);
    return completedNow.filter((el => uncompletedBefore.includes(el.id)));
  }
  get completedAchievementsCount(): number {
    return this.achievementStatus.filter((el) => el.completed).length;
  }
  get completedCharactersCount(): number {
    return this.charactersStatus.filter((el) => el.unlocked).length;
  }
  constructor(saveGame: IsaacSaveFile, date: Date) {
    this.date = date;
    let achStatus = (saveGame.chunks[0].body as AchievementsChunk).achievements;
    this.achievementStatus = ACHIEVEMENTS.map((el) => {
      return {
        ...el,
        completed: achStatus[el.id] == 1,
      };
    });
    this.charactersStatus = CHARACTERS.map((el) => {
      return {
        ...el,
        unlocked: !el.achievementId || achStatus[el.achievementId] == 1,
      };
    });
  }
}