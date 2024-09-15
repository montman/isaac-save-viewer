import { ACHIEVEMENTS, AchievementStatus } from "./achievements";

export class IsaacProgress {
    achievementStatus: AchievementStatus[] = [];
    get completedAchievementsCount(): number {
        return this.achievementStatus.filter(el => el.completed).length
    }
    constructor(saveGame: IsaacSaveFile) {
        console.log(saveGame);
        let achStatus = (saveGame.chunks[0].body as AchievementsChunk).achievements;
        this.achievementStatus = ACHIEVEMENTS.map(el => {
            return {
                id: el.id,
                imageSrc: el.imageSrc,
                name: el.name,
                description: el.description,
                unlock: el.unlock,
                completed: achStatus[el.id] == 1
            }
        })
        console.log(this)
    }
}