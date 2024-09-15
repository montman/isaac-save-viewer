import { ACHIEVEMENTS, AchievementStatus } from "./achievements";

export class IsaacProgress {
  achievementStatus: AchievementStatus[] = [];
  date: Date;
  get completedAchievementsCount(): number {
    return this.achievementStatus.filter((el) => el.completed).length;
  }
  constructor(saveGame: IsaacSaveFile, date: Date) {
    this.date = date;
    let achStatus = (saveGame.chunks[0].body as AchievementsChunk).achievements;
    this.achievementStatus = ACHIEVEMENTS.map((el) => {
      return {
        id: el.id,
        item: el.item,
        imageSrc: el.imageSrc,
        name: el.name,
        description: el.description,
        unlock: el.unlock,
        completed: achStatus[el.id] == 1,
      };
    });
  }
}