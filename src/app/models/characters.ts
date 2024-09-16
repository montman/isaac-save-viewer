export type Character = {
  name: string;
  image: string;
  achievementId?: number;
  description: string;
}
export type CharacterStatus = Character & { unlocked: boolean };
export const CHARACTERS: Character[] = [
  {
    name: 'Isaac',
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e5/Character_Isaac_appearance.png',
    description: '',
  },
  {
    name: 'Magdalene',
    achievementId: 1,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/bf/Character_Magdalene_appearance.png',
    description: '',
  },
  {
    name: 'Cain',
    achievementId: 2,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/db/Character_Cain_appearance.png',
    description: '',
  },
  {
    name: 'Judas',
    achievementId: 3,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8d/Character_Judas_appearance.png',
    description: '',
  },
  {
    name: '???',
    achievementId: 32,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9a/Character_%3F%3F%3F_appearance.png',
    description: '',
  },
  {
    name: 'Eve',
    achievementId: 42,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/91/Character_Eve_appearance.png',
    description: '',
  },
  {
    name: 'Samson',
    achievementId: 67,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8c/Character_Samson_appearance.png',
    description: '',
  },
  {
    name: 'Azazel',
    achievementId: 79,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/06/Character_Azazel_appearance.png',
    description: '',
  },
  {
    name: 'Lazarus',
    achievementId: 80,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/78/Character_Lazarus_appearance.png',
    description: '',
  },
  {
    name: 'Eden',
    achievementId: 81,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/83/Character_Eden_appearance.png',
    description: '',
  },
  {
    name: 'The Lost',
    achievementId: 82,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f0/Character_The_Lost_appearance.png',
    description: '',
  },
  {
    name: 'Lilith',
    achievementId: 199,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a8/Character_Lilith_appearance.png',
    description: '',
  },
  {
    name: 'Keeper',
    achievementId: 251,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/20/Character_Keeper_appearance.png',
    description: '',
  },
  {
    name: 'Apollyon',
    achievementId: 340,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/40/Character_Apollyon_appearance.png',
    description: '',
  },
  {
    name: 'The Forgotten',
    achievementId: 390,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/21/Character_The_Forgotten_appearance.png',
    description: '',
  },
  {
    name: 'Bethany',
    achievementId: 404,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/82/Character_Bethany_appearance.png',
    description: '',
  },
  {
    name: 'Jacob and Esau',
    achievementId: 405,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1d/Character_Jacob_and_Esau_appearance.png',
    description: '',
  },
  {
    name: 'Tainted Isaac',
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ec/Character_Tainted_Isaac_appearance.png',
    achievementId: 474,
    description: '',
  },
  {
    name: 'Tainted Magdalene',
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f1/Character_Tainted_Magdalene_appearance.png',
    achievementId: 475,
    description: '',
  },
  {
    name: 'Tainted Cain',
    achievementId: 476,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2e/Tainted_Cain_App.png',
    description: '',
  },
  {
    name: 'Tainted Judas',
    achievementId: 477,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0e/Tainted_Judas_App.png',
    description: '',
  },
  {
    name: 'Tainted ???',
    achievementId: 478,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c1/Tainted_Blue_Baby_App.png',
    description: '',
  },
  {
    name: 'Tainted Eve',
    achievementId: 479,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/04/Tainted_Eve_App.png',
    description: '',
  },
  {
    name: 'Tainted Samson',
    achievementId: 480,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/72/Tainted_Samson_App.png',
    description: '',
  },
  {
    name: 'Tainted Azazel',
    achievementId: 481,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/61/Tainted_Azazel_App.png',
    description: '',
  },
  {
    name: 'Tainted Lazarus',
    achievementId: 482,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/70/Character_Tainted_Lazarus_appearance.png',
    description: '',
  },
  {
    name: 'Tainted Eden',
    achievementId: 483,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/57/Character_Tainted_Eden_appearance.png',
    description: '',
  },
  {
    name: 'Tainted Lost',
    achievementId: 484,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b7/Tainted_Lost_App.png',
    description: '',
  },
  {
    name: 'Tainted Lilith',
    achievementId: 485,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a7/Tainted_Lilith_App.png',
    description: '',
  },
  {
    name: 'Tainted Keeper',
    achievementId: 486,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/05/Tainted_Keeper_App.png',
    description: '',
  },
  {
    name: 'Tainted Apollyon',
    achievementId: 487,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/27/Tainted_Apollyon_App.png',
    description: '',
  },
  {
    name: 'Tainted Forgotten',
    achievementId: 488,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1f/Character_Tainted_Forgotten_appearance.png',
    description: '',
  },
  {
    name: 'Tainted Bethany',
    achievementId: 489,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ed/Tainted_Bethany_App.png',
    description: '',
  },
  {
    name: 'Tainted Jacob',
    achievementId: 490,
    image:
      'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0b/Tainted_Jacob_App.png',
    description: '',
  },
];
