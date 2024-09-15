export type Achievement = { id: number, imageSrc: string, name: string, description: string, unlock: string, item?: { name: string, id: number, imageSrc: string, description: string, quality: number } }
export type AchievementStatus = Achievement & { completed: boolean }
export const ACHIEVEMENTS: Achievement[] = [
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ef/Achievement_Magdalene_icon.png",
        "name": "Magdalene",
        "description": "Unlocked a new character.",
        "unlock": "Have 7 or more Red Heart Containers at one time",
        "id": 1
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/22/Achievement_Cain_icon.png",
        "name": "Cain",
        "description": "Unlocked a new character.",
        "unlock": "Hold 55 Coins at one time",
        "id": 2
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/eb/Achievement_Judas_icon.png",
        "name": "Judas",
        "description": "Unlocked a new character.",
        "unlock": "Defeat Satan",
        "id": 3
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/92/Achievement_The_Womb_icon.png",
        "name": "The Womb",
        "description": "Chapter 4 - The Womb unlocked.",
        "unlock": "Defeat Mom",
        "id": 4
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/bd/Achievement_The_Harbingers_icon.png",
        "name": "The Harbingers",
        "description": "The horsemen are loose.",
        "unlock": "Defeat Mom",
        "id": 5
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/17/Achievement_A_Cube_of_Meat_icon.png",
        "name": "A Cube of Meat",
        "description": "Unlocked a new item. (Also unlocks the Ball of Bandages)",
        "unlock": "Defeat Mom",
        "id": 6,
        "item": {
            "name": "Cube of Meat",
            "id": 73,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/68/Collectible_Cube_of_Meat_icon.png",
            "description": "Creates an orbital familiar. Collecting additional copies gives it the ability to shoot tears, then chase enemies to deal contact damage, then deal even more contact damage.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4d/Achievement_The_Book_of_Revelations_icon.png",
        "name": "The Book of Revelations",
        "description": "Unlocked a new item.",
        "unlock": "Defeat a Harbinger",
        "id": 7,
        "item": {
            "name": "Book of Revelations",
            "id": 78,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/67/Collectible_Book_of_Revelations_icon.png",
            "description": "Increases the chance of a Devil Room / Angel Room appearing while held. Upon use, gives one  Soul Heart, and replaces the boss of the current floor with a Harbinger if possible.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0d/Achievement_A_Noose_icon.png",
        "name": "A Noose",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Mom's Heart 3 times",
        "id": 8,
        "item": {
            "name": "Transcendence",
            "id": 20,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ec/Collectible_Transcendence_icon.png",
            "description": "Grants flight.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/09/Achievement_The_Nail_icon.png",
        "name": "The Nail",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Azazel",
        "id": 9,
        "item": {
            "name": "The Nail",
            "id": 83,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3c/Collectible_The_Nail_icon.png",
            "description": " Gives one  Soul Heart. For the current room; +0.7 damage, -0.18 speed, Isaac breaks rocks and deals contact damage. Gives half a  Black Heart. For the current room; +2 damage, -0.18 speed, Isaac breaks rocks and deals contact damage.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/98/Achievement_A_Quarter_icon.png",
        "name": "A Quarter",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Mom's Heart 8 times",
        "id": 10,
        "item": {
            "name": "A Quarter",
            "id": 74,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/be/Collectible_A_Quarter_icon.png",
            "description": "Gives Isaac 25  coins.",
            "quality": 0
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/40/Achievement_A_Fetus_in_a_Jar_icon.png",
        "name": "A Fetus in a Jar",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Mom's Heart 9 times",
        "id": 11,
        "item": {
            "name": "Dr. Fetus",
            "id": 52,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/68/Collectible_Dr._Fetus_icon.png",
            "description": "Tears are replaced by  Bombs that benefit from bomb-enhancing effects and slide for a fixed time after being fired.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/24/Achievement_A_Small_Rock_icon.png",
        "name": "A Small Rock",
        "description": "Unlocked a new item.",
        "unlock": "Destroy 100 Tinted Rocks",
        "id": 12,
        "item": {
            "name": "The Small Rock",
            "id": 90,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b3/Collectible_The_Small_Rock_icon.png",
            "description": "+1 damage, +0.2 tears, -0.2 speed.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a6/Achievement_Monstro%27s_Tooth_icon.png",
        "name": "Monstro's Tooth",
        "description": "Unlocked a new item.",
        "unlock": "Beat Chapter 1",
        "id": 13,
        "item": {
            "name": "Monstro's Tooth",
            "id": 86,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5a/Collectible_Monstro%27s_Tooth_icon.png",
            "description": "A friendly  Monstro jumps on a random enemy, dealing 120 area damage. Targets Isaac if used in a room without enemies.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ef/Achievement_Lil%27_Chubby_icon.png",
        "name": "Lil' Chubby",
        "description": "Unlocked a new item.",
        "unlock": "Beat Chapter 2",
        "id": 14,
        "item": {
            "name": "Little Chubby",
            "id": 88,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/dc/Collectible_Little_Chubby_icon.png",
            "description": "Spawns a  Charger familiar that charges forward and deals contact damage to any enemies in its path.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/96/Achievement_Loki%27s_Horns_icon.png",
        "name": "Loki's Horns",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Lokii",
        "id": 15,
        "item": {
            "name": "Loki's Horns",
            "id": 87,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/95/Collectible_Loki%27s_Horns_icon.png",
            "description": "Gives a random chance for projectiles to fire in all 4 cardinal directions.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e6/Achievement_Something_From_The_Future_icon.png",
        "name": "Something From The Future",
        "description": "New boss in the basement!",
        "unlock": "Beat Basement 40 times",
        "id": 16
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/58/Achievement_Something_Cute_icon.png",
        "name": "Something Cute",
        "description": "New boss in the caves!",
        "unlock": "Beat Chapter 2 30 times",
        "id": 17
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/db/Achievement_Something_Sticky_icon.png",
        "name": "Something Sticky",
        "description": "New boss in the depths!",
        "unlock": "Beat Chapter 3 20 times",
        "id": 18
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/16/Achievement_A_Bandage_icon.png",
        "name": "A Bandage",
        "description": "Unlocked a new item.",
        "unlock": "Make a Super Bandage Girl by picking up 4 copies of Ball of Bandages in one run; see Unlocking Super Meat Boy &amp; Super Bandage Girl",
        "id": 19,
        "item": {
            "name": "Super Bandage",
            "id": 92,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/45/Collectible_Super_Bandage_icon.png",
            "description": "Grants one full Red Heart container and 2  Soul Hearts.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/86/Achievement_A_Cross_icon.png",
        "name": "A Cross",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Magdalene",
        "id": 20,
        "item": {
            "name": "The Relic",
            "id": 98,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/85/Collectible_The_Relic_icon.png",
            "description": "Spawns a cross familiar that drops a  Soul Heart after clearing enough rooms.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/db/Achievement_A_Bag_of_Pennies_icon.png",
        "name": "A Bag of Pennies",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Cain",
        "id": 21,
        "item": {
            "name": "Sack of Pennies",
            "id": 94,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f3/Collectible_Sack_of_Pennies_icon.png",
            "description": "Spawns a familiar that drops a  coin every 2 rooms.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/93/Achievement_The_Book_of_Sin_icon.png",
        "name": "The Book of Sin",
        "description": "Unlocked a new item.",
        "unlock": "Defeat all 7 Deadly Sins",
        "id": 22,
        "item": {
            "name": "The Book of Sin",
            "id": 97,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5a/Collectible_The_Book_of_Sin_icon.png",
            "description": "Spawns a random coin, heart, bomb, key, battery, pill or card near Isaac.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/59/Achievement_Little_Gish_icon.png",
        "name": "Little Gish",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Gish",
        "id": 23,
        "item": {
            "name": "Little Gish",
            "id": 99,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/99/Collectible_Little_Gish_icon.png",
            "description": "Spawns a familiar that follows Isaac around and fires slowing tears, impeding enemies' speed.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c7/Achievement_Little_Steven_icon.png",
        "name": "Little Steven",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Steven",
        "id": 24,
        "item": {
            "name": "Little Steven",
            "id": 100,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e1/Collectible_Little_Steven_icon.png",
            "description": "Spawns a familiar who follows Isaac around and fires homing tears.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0c/Achievement_Little_C.H.A.D._icon.png",
        "name": "Little C.H.A.D.",
        "description": "Unlocked a new item.",
        "unlock": "Defeat C.H.A.D.",
        "id": 25,
        "item": {
            "name": "Little C.H.A.D.",
            "id": 96,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3b/Collectible_Little_C.H.A.D._icon.png",
            "description": "Spawns a familiar who drops a  Half Red Heart every 3 rooms.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1d/Achievement_A_Gamekid_icon.png",
        "name": "A Gamekid",
        "description": "Unlocked a new item.",
        "unlock": "Visit 10 Arcades",
        "id": 26,
        "item": {
            "name": "The Gamekid",
            "id": 93,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8f/Collectible_The_Gamekid_icon.png",
            "description": "Turns Isaac into a Pac-Man-like creature for 6.5 seconds, granting invulnerability, inflicting fear on all enemies, and has a chance of replenishing a  Half Red Heart every time an enemy is killed.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6e/Achievement_A_Halo_icon.png",
        "name": "A Halo",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Mom, Mom's Heart, or It Lives! using The Bible or XV - The Devil?",
        "id": 27,
        "item": {
            "name": "The Halo",
            "id": 101,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0e/Collectible_The_Halo_icon.png",
            "description": " Grants one full Red Heart container, +0.3 damage, +0.2 tears, +0.25 range, +0.3 speed, and +0.5 tear falling speed. Grants one full Red Heart container, +0.3 damage, +0.2 tears, +1.5 range, and +0.3 speed. Heals 1 additional  Red Heart.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/56/Achievement_Mr._Mega_icon.png",
        "name": "Mr. Mega",
        "description": "Unlocked a new item.",
        "unlock": "Destroy 10 Tinted Rocks",
        "id": 28,
        "item": {
            "name": "Mr. Mega",
            "id": 106,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/93/Collectible_Mr._Mega_icon.png",
            "description": "+5  Bombs. Increases the size, blast radius, and damage of Isaac's bombs.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fe/Achievement_The_D6_icon.png",
        "name": "The D6",
        "description": "Isaac now holds the D6!",
        "unlock": "Defeat Isaac as  ???",
        "id": 29,
        "item": {
            "name": "The D6",
            "id": 105,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/01/Collectible_The_D6_icon.png",
            "description": "Re-rolls all items in the current room into other items, depending on the current room's Item Pool.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/58/Achievement_The_Scissors_icon.png",
        "name": "The Scissors",
        "description": "Unlocked a new item.",
        "unlock": "Die 100 times",
        "id": 30,
        "item": {
            "name": "Scissors",
            "id": 325,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9f/Collectible_Scissors_icon.png",
            "description": "Turns Isaac's head into a stationary familiar for the current room which fires tears automatically.  Isaac's body also shoots a controllable fountain of blood shots for the room.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/78/Achievement_The_Parasite_icon.png",
        "name": "The Parasite",
        "description": "Unlocked a new item.",
        "unlock": "Pick up any 2 of the following items in a single run: Bob's Rotten Head, Dead Cat, Cricket's Head, and Tammy's Head ( Any 2 items that have the 'dead' item tag)",
        "id": 31,
        "item": {
            "name": "The Parasite",
            "id": 104,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/72/Collectible_The_Parasite_icon.png",
            "description": "Isaac's tears split in two when they hit something.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/84/Achievement_Blue_Baby_Character_icon.png",
        "name": "???",
        "description": "Unlocked a new character.",
        "unlock": "Defeat Mom's Heart 10 times",
        "id": 32
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ac/Achievement_Everything_Is_Terrible%21%21%21_icon.png",
        "name": "Everything Is Terrible!!!",
        "description": "The game just got harder!",
        "unlock": "Defeat Mom's Heart 5 times",
        "id": 33
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8b/Achievement_It_Lives%21_icon.png",
        "name": "It Lives!",
        "description": "Your future's past waits.",
        "unlock": "Defeat Mom's Heart 11 times",
        "id": 34
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/25/Achievement_Mom%27s_Contact_icon.png",
        "name": "Mom's Contact",
        "description": "Unlocked a new item.",
        "unlock": "Obtain three Yes Mother? items in one run",
        "id": 35,
        "item": {
            "name": "Mom's Contacts",
            "id": 110,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/98/Collectible_Mom%27s_Contacts_icon.png",
            "description": "Adds a chance to shoot petrifying tears, which stop enemies in place and prevent them from moving or attacking.  +0.25 range.  +1.5 range.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/87/Achievement_The_Necronomicon_icon.png",
        "name": "The Necronomicon",
        "description": "Unlocked a new item.",
        "unlock": "Use XIII - Death 4 times",
        "id": 36,
        "item": {
            "name": "The Necronomicon",
            "id": 35,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e9/Collectible_The_Necronomicon_icon.png",
            "description": "Deals 40 damage to every enemy in the room.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/19/Achievement_Basement_Boy_icon.png",
        "name": "Basement Boy",
        "description": "Beat basement without taking damage.",
        "unlock": "Beat Chapter 1 without taking damage",
        "id": 37
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3c/Achievement_Spelunker_Boy_icon.png",
        "name": "Spelunker Boy",
        "description": "Beat caves without taking damage.",
        "unlock": "Beat Chapter 2 without taking damage",
        "id": 38
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3c/Achievement_Dark_Boy_icon.png",
        "name": "Dark Boy",
        "description": "Beat depths without taking damage.",
        "unlock": "Beat Chapter 3 without taking damage",
        "id": 39
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0a/Achievement_Mama%27s_Boy_icon.png",
        "name": "Mama's Boy",
        "description": "Beat womb without taking damage.",
        "unlock": "Beat Chapter 4 without taking damage",
        "id": 40
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9a/Achievement_Golden_God%21_icon.png",
        "name": "Golden God!",
        "description": "You are the best!!",
        "unlock": "Defeat ??? and The Lamb",
        "id": 41
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a7/Achievement_Eve_icon.png",
        "name": "Eve",
        "description": "Unlocked a new character.",
        "unlock": "Don't pick up any Hearts for 2 floors in a row",
        "id": 42
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ae/Achievement_Mom%27s_Knife_icon.png",
        "name": "Mom's Knife",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Isaac",
        "id": 43,
        "item": {
            "name": "Mom's Knife",
            "id": 114,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/79/Collectible_Mom%27s_Knife_icon.png",
            "description": "Isaac's tears are replaced by a knife that pierces enemies, can travel through obstacles, and can hurt enemies while Isaac is holding it. Holding down the fire button before firing increases its range and power.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/76/Achievement_The_Razor_icon.png",
        "name": "The Razor",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Eve",
        "id": 44,
        "item": {
            "name": "Razor Blade",
            "id": 126,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/70/Collectible_Razor_Blade_icon.png",
            "description": "Takes one  Heart of health and grants +1.2 damage for the current room.  Repeated uses in the same room only take half a heart.",
            "quality": 0
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1f/Achievement_Guardian_Angel_icon.png",
        "name": "Guardian Angel",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Magdalene",
        "id": 45,
        "item": {
            "name": "Guardian Angel",
            "id": 112,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fc/Collectible_Guardian_Angel_icon.png",
            "description": "Spawns an orbital familiar that blocks enemy shots, deals 7 damage per tick on contact, and increases the speed of all orbital familiars.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/61/Achievement_A_Bag_of_Bombs_icon.png",
        "name": "A Bag of Bombs",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Cain",
        "id": 46,
        "item": {
            "name": "Bomb Bag",
            "id": 131,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c6/Collectible_Bomb_Bag_icon.png",
            "description": "Spawns a familiar that drops a  Bomb every 3 rooms.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/df/Achievement_Demon_Baby_icon.png",
        "name": "Demon Baby",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Azazel",
        "id": 47,
        "item": {
            "name": "Demon Baby",
            "id": 113,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5e/Collectible_Demon_Baby_icon.png",
            "description": "Spawns a familiar that follows Isaac and automatically fires at enemies in its reach.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6a/Achievement_Forget_Me_Now_icon.png",
        "name": "Forget Me Now",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  ???",
        "id": 48,
        "item": {
            "name": "Forget Me Now",
            "id": 127,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3a/Collectible_Forget_Me_Now_icon.png",
            "description": "Restarts the current floor with a new layout. Isaac loses Forget Me Now, but keeps other items and consumables picked up on the original floor.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6c/Achievement_The_D20_icon.png",
        "name": "The D20",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Isaac",
        "id": 49,
        "item": {
            "name": "D20",
            "id": 166,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/78/Collectible_D20_icon.png",
            "description": "Rerolls all pickups in the current room.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0f/Achievement_Celtic_Cross_icon.png",
        "name": "Celtic Cross",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Magdalene",
        "id": 50,
        "item": {
            "name": "Celtic Cross",
            "id": 162,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d0/Collectible_Celtic_Cross_icon.png",
            "description": "Grants a chance to trigger the Book of Shadows effect upon taking damage, creating a shield that nullifies all types of damage for 7 seconds.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/35/Achievement_Abel_icon.png",
        "name": "Abel",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Cain",
        "id": 51,
        "item": {
            "name": "Abel",
            "id": 188,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/91/Collectible_Abel_icon.png",
            "description": " Spawns a familiar that mirrors Isaac's movements and shoots in the opposite direction. Spawns a familiar that mirrors Isaac's movements and shoots towards him.",
            "quality": 0
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/97/Achievement_Curved_Horn_icon.png",
        "name": "Curved Horn",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Judas",
        "id": 52
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/53/Achievement_Sacrificial_Dagger_icon.png",
        "name": "Sacrificial Dagger",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Eve",
        "id": 53,
        "item": {
            "name": "Sacrificial Dagger",
            "id": 172,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/35/Collectible_Sacrificial_Dagger_icon.png",
            "description": "Spawns a dagger orbital familiar, blocking enemy shots and dealing a high amount of damage to enemies in contact.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c9/Achievement_Bloody_Lust_icon.png",
        "name": "Bloody Lust",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Samson",
        "id": 54,
        "item": {
            "name": "Bloody Lust",
            "id": 157,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/86/Collectible_Bloody_Lust_icon.png",
            "description": "Increases Isaac's damage whenever he takes damage, up to six times. The bonus resets when entering a new floor.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/86/Achievement_Blood_Penny_icon.png",
        "name": "Blood Penny",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Samson",
        "id": 55
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b7/Achievement_Blood_Rights_icon.png",
        "name": "Blood Rights",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Samson",
        "id": 56,
        "item": {
            "name": "Blood Rights",
            "id": 186,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b8/Collectible_Blood_Rights_icon.png",
            "description": "Takes a full heart of health and deals 40 damage to all enemies in the room.  Repeated uses in the same room only take half a heart.",
            "quality": 0
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/95/Achievement_The_Polaroid_icon.png",
        "name": "The Polaroid",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac 5 times",
        "id": 57,
        "item": {
            "name": "The Polaroid",
            "id": 327,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5d/Collectible_The_Polaroid_icon.png",
            "description": "If Isaac has half a red heart or no red hearts after taking damage, he gains a shield that nullifies all types of damage for 5 seconds. Allows entrance into Chest.  Also allows access to Home.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/28/Achievement_Dad%27s_Key_icon.png",
        "name": "Dad's Key",
        "description": "Unlocked a new item.",
        "unlock": "Pick up both Key Pieces from the Angels in one run",
        "id": 58,
        "item": {
            "name": "Dad's Key",
            "id": 175,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a9/Collectible_Dad%27s_Key_icon.png",
            "description": "Opens all doors in the current room in almost all circumstances, including doors which require a  Key to open, entrances to Secret Rooms, and the door to  Mega Satan.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/dd/Achievement_Blue_Candle_icon.png",
        "name": "Blue Candle",
        "description": "Unlocked a new item.",
        "unlock": "Donate 900 coins to the Donation Machine",
        "id": 59,
        "item": {
            "name": "The Candle",
            "id": 164,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/ca/Collectible_The_Candle_icon.png",
            "description": "Throws out a flame that damages everything in its path, diminishing in size as it travels.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/cd/Achievement_Burnt_Penny_icon.png",
        "name": "Burnt Penny",
        "description": "Unlocked a new item.",
        "unlock": "Complete Beans! (challenge #13)",
        "id": 60
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/17/Achievement_Lucky_Toe_icon.png",
        "name": "Lucky Toe",
        "description": "Unlocked a new item.",
        "unlock": "Blow up 20 Shopkeepers",
        "id": 61
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/63/Achievement_Epic_Fetus_icon.png",
        "name": "Epic Fetus",
        "description": "Unlocked a new item.",
        "unlock": "Complete The Family Man (challenge #19)",
        "id": 62,
        "item": {
            "name": "Epic Fetus",
            "id": 168,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a8/Collectible_Epic_Fetus_icon.png",
            "description": "Isaac's tears are replaced with guided missiles, like those used by the Doctor's Remote.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/85/Achievement_SMB_Super_Fan_icon.png",
        "name": "SMB Super Fan",
        "description": "Unlocked a new item.",
        "unlock": "Complete It's in the Cards (challenge #14)",
        "id": 63,
        "item": {
            "name": "SMB Super Fan",
            "id": 189,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/77/Collectible_SMB_Super_Fan_icon.png",
            "description": " +1 Red Heart container, +0.3 damage, +0.2 tears, +0.2 speed, +0.5 range, +1 tear falling speed. Fully restores all red hearts. +1 Red Heart container, +0.3 damage, +0.2 tears, +0.2 speed, +2.5 range. Fully restores all red hearts.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/90/Achievement_Counterfeit_Coin_icon.png",
        "name": "Counterfeit Coin",
        "description": "Unlocked a new item.",
        "unlock": "Play either Shell Game or  Hell Game 100 times",
        "id": 64
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9e/Achievement_Guppy%27s_Hairball_icon.png",
        "name": "Guppy's Hairball",
        "description": "Unlocked a new item.",
        "unlock": "Become Guppy",
        "id": 65,
        "item": {
            "name": "Guppy's Hairball",
            "id": 187,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/ca/Collectible_Guppy%27s_Hairball_icon.png",
            "description": "Spawns a familiar that loosely follows behind Isaac, which blocks shots can be swung like a flail to damage enemies. Grows bigger by killing enemies.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a7/Achievement_A_Forgotten_Horseman_icon.png",
        "name": "A Forgotten Horseman",
        "description": "Unlocked a new boss!",
        "unlock": "Take 10 Angel Room items",
        "id": 66
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/65/Achievement_Samson_icon.png",
        "name": "Samson",
        "description": "Unlocked a new character.",
        "unlock": "Complete 2 floors in a row without taking damage",
        "id": 67
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d4/Achievement_Something_Icky_icon.png",
        "name": "Something Icky",
        "description": "New boss in the womb!",
        "unlock": "Defeat Isaac 10 times",
        "id": 68
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1b/Achievement_%21Platinum_God%21_icon.png",
        "name": "!Platinum God!",
        "description": "OMG!",
        "unlock": "Collect all non-DLC items in the game, and unlock all of the secrets and endings (minus  The Lost and his 6 unlockable items)",
        "id": 69
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/10/Achievement_Isaac%27s_Head_icon.png",
        "name": "Isaac's Head",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Isaac",
        "id": 70
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/92/Achievement_Maggy%27s_Faith_icon.png",
        "name": "Maggy's Faith",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Magdalene",
        "id": 71
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c8/Achievement_Judas%27_Tongue_icon.png",
        "name": "Judas' Tongue",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Judas",
        "id": 72
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f8/Achievement_Blue_Baby%27s_Soul_icon.png",
        "name": "???'s Soul",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  ???",
        "id": 73
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/80/Achievement_Samson%27s_Lock_icon.png",
        "name": "Samson's Lock",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Samson",
        "id": 74
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/04/Achievement_Cain%27s_Eye_icon.png",
        "name": "Cain's Eye",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Cain",
        "id": 75
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/47/Achievement_Eve%27s_Bird_Foot_icon.png",
        "name": "Eve's Bird Foot",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Eve",
        "id": 76
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/42/Achievement_The_Left_Hand_icon.png",
        "name": "The Left Hand",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Pride as any character, or ??? as  Judas",
        "id": 77
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/82/Achievement_The_Negative_icon.png",
        "name": "The Negative",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan 5 times",
        "id": 78,
        "item": {
            "name": "The Negative",
            "id": 328,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b7/Collectible_The_Negative_icon.png",
            "description": "If Isaac has half a red heart or no red hearts after taking damage, all enemies in the room take significant damage. Allows entrance into the Dark Room.  +1 Damage and also allows access to Home.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d4/Achievement_Azazel_icon.png",
        "name": "Azazel",
        "description": "Unlocked a new character.",
        "unlock": "Make 3 Deals with the Devil in one run",
        "id": 79
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/ff/Achievement_Lazarus_icon.png",
        "name": "Lazarus",
        "description": "Unlocked a new character.",
        "unlock": "Have 4 or more Soul Hearts at one time",
        "id": 80
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/39/Achievement_Eden_icon.png",
        "name": "Eden",
        "description": "Unlocked a new character.",
        "unlock": "Complete Chapter 4",
        "id": 81
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b9/Achievement_The_Lost_icon.png",
        "name": "The Lost",
        "description": "Unlocked a new character.",
        "unlock": " It's complicated Die in a Sacrifice Room while holding Missing Poster",
        "id": 82
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7b/Achievement_Dead_Boy_icon.png",
        "name": "Dead Boy",
        "description": "Beat Chest or Dark Room without taking damage.",
        "unlock": "Complete Chapter 6 without taking damage",
        "id": 83
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/60/Achievement_The_Real_Platinum_God_icon.png",
        "name": "The Real Platinum God",
        "description": "111% now stop playing!",
        "unlock": "Collect every non-DLC item, and unlock every secret and ending.",
        "id": 84
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/20/Achievement_Lucky_Rock_icon.png",
        "name": "Lucky Rock",
        "description": "Destroy 100 rocks.",
        "unlock": "Destroy 100 rocks",
        "id": 85
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1c/Achievement_The_Cellar_icon.png",
        "name": "The Cellar",
        "description": "Alt stage to the basement.",
        "unlock": "Beat all Basement bosses ( except Baby Plum) (not restricted to beating bosses in The Basement)",
        "id": 86
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/18/Achievement_The_Catacombs_icon.png",
        "name": "The Catacombs",
        "description": "Alt stage to the caves.",
        "unlock": "Beat all Caves bosses ( except Bumbino) (not restricted to beating bosses in The Caves)",
        "id": 87
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/74/Achievement_The_Necropolis_icon.png",
        "name": "The Necropolis",
        "description": "Alt stage to the depths.",
        "unlock": "Beat all Depths bosses ( except Reap Creep) (not restricted to beating bosses in The Depths)",
        "id": 88
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b8/Achievement_Rune_of_Hagalaz_icon.png",
        "name": "Rune of Hagalaz",
        "description": "Unlocked a new item.",
        "unlock": "Complete Pitch Black (challenge #1)",
        "id": 89
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/58/Achievement_Rune_of_Jera_icon.png",
        "name": "Rune of Jera",
        "description": "Unlocked a new item.",
        "unlock": "Complete High Brow (challenge #2)",
        "id": 90
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/09/Achievement_Rune_of_Ehwaz_icon.png",
        "name": "Rune of Ehwaz",
        "description": "Unlocked a new item.",
        "unlock": "Complete Head Trauma (challenge #3)",
        "id": 91
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/64/Achievement_Rune_of_Dagaz_icon.png",
        "name": "Rune of Dagaz",
        "description": "Unlocked a new item.",
        "unlock": "Complete Darkness Falls (challenge #4)",
        "id": 92
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/32/Achievement_Rune_of_Ansuz_icon.png",
        "name": "Rune of Ansuz",
        "description": "Unlocked a new item.",
        "unlock": "Complete The Tank (challenge #5)",
        "id": 93
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/08/Achievement_Rune_of_Perthro_icon.png",
        "name": "Rune of Perthro",
        "description": "Unlocked a new item.",
        "unlock": "Complete Solar System (challenge #6)",
        "id": 94
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/50/Achievement_Rune_of_Berkano_icon.png",
        "name": "Rune of Berkano",
        "description": "Unlocked a new item.",
        "unlock": "Complete Purist (challenge #20)",
        "id": 95
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/24/Achievement_Rune_of_Algiz_icon.png",
        "name": "Rune of Algiz",
        "description": "Unlocked a new item.",
        "unlock": "Complete Cat Got Your Tongue (challenge #8)",
        "id": 96
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7b/Achievement_Chaos_Card_icon.png",
        "name": "Chaos Card",
        "description": "Unlocked a new item.",
        "unlock": "Complete Demo Man (challenge #9)",
        "id": 97
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f9/Achievement_Credit_Card_icon.png",
        "name": "Credit Card",
        "description": "Unlocked a new item.",
        "unlock": "Complete Cursed! (challenge #10)",
        "id": 98
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/58/Achievement_Rules_Card_icon.png",
        "name": "Rules Card",
        "description": "Unlocked a new item.",
        "unlock": "Complete Glass Cannon (challenge #11)",
        "id": 99
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/89/Achievement_Card_Against_Humanity_icon.png",
        "name": "Card Against Humanity",
        "description": "Unlocked a new item.",
        "unlock": "Complete When Life Gives You Lemons (challenge #12)",
        "id": 100
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c7/Achievement_Swallowed_Penny_icon.png",
        "name": "Swallowed Penny",
        "description": "Unlocked a new item.",
        "unlock": "Complete Slow Roll (challenge #15)",
        "id": 101
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e4/Achievement_Robo-Baby_2.0_icon.png",
        "name": "Robo-Baby 2.0",
        "description": "Unlocked a new item.",
        "unlock": "Complete Computer Savvy (challenge #16)",
        "id": 102,
        "item": {
            "name": "Robo-Baby 2.0",
            "id": 267,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b0/Collectible_Robo-Baby_2.0_icon.png",
            "description": "Spawns a familiar that fires lasers at any enemy in its line of sight and moves based on the direction Isaac is firing tears.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/14/Achievement_Death%27s_Touch_icon.png",
        "name": "Death's Touch",
        "description": "Unlocked a new item.",
        "unlock": "Complete Waka Waka (challenge #17)",
        "id": 103,
        "item": {
            "name": "Death's Touch",
            "id": 237,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/47/Collectible_Death%27s_Touch_icon.png",
            "description": "+1.5 damage, -0.3 tears. Tears are replaced with large piercing scythes.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/81/Achievement_Technology_.5_icon.png",
        "name": "Technology .5",
        "description": "Unlocked a new item.",
        "unlock": "Complete The Host (challenge #18)",
        "id": 104,
        "item": {
            "name": "Tech.5",
            "id": 244,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8e/Collectible_Tech.5_icon.png",
            "description": "Isaac occasionally fires an unlimited range piercing laser alongside his normal tears. The laser can glitch, mimicking the effects of certain items and trinkets.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/aa/Achievement_Missing_No._icon.png",
        "name": "Missing No.",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Lazarus",
        "id": 105,
        "item": {
            "name": "Missing No.",
            "id": 258,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c2/Collectible_Missing_No._icon.png",
            "description": "Randomizes all passive items and stats upon pickup and at the start of each succeeding floor.",
            "quality": 0
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ac/Achievement_Isaac%27s_Tears_icon.png",
        "name": "Isaac's Tears",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Isaac",
        "id": 106,
        "item": {
            "name": "Isaac's Tears",
            "id": 323,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6b/Collectible_Isaac%27s_Tears_icon.png",
            "description": "Fires 8 tears around Isaac, which retain the damage, range, shot speed, and special tear effects of his tears. Each tear shot by Isaac increases item charge by one.  Tears from this item have a +5 flat damage bonus.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/29/Achievement_Guillotine_icon.png",
        "name": "Guillotine",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Judas",
        "id": 107,
        "item": {
            "name": "Guillotine",
            "id": 206,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7c/Collectible_Guillotine_icon.png",
            "description": "Isaac's head becomes an orbital familiar that blocks shots and deals contact damage. Tears are still fired from the rotating head.  +1 damage, -1 tear delay.  +1 damage, +0.5 fire rate.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/56/Achievement_Judas%27_Shadow_icon.png",
        "name": "Judas' Shadow",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Judas",
        "id": 108,
        "item": {
            "name": "Judas' Shadow",
            "id": 311,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c6/Collectible_Judas%27_Shadow_icon.png",
            "description": "Upon death, respawns Isaac as  Dark Judas with two  Black Hearts in the previous room.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d4/Achievement_Maggy%27s_Bow_icon.png",
        "name": "Maggy's Bow",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Magdalene",
        "id": 109,
        "item": {
            "name": "Maggy's Bow",
            "id": 312,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/45/Collectible_Maggy%27s_Bow_icon.png",
            "description": "Gives one Red Heart Container and doubles the healing provided by  Red Hearts.  Also heals 1 Red Heart when obtained.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/37/Achievement_Cain%27s_Other_Eye_icon.png",
        "name": "Cain's Other Eye",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Cain",
        "id": 110,
        "item": {
            "name": "Cain's Other Eye",
            "id": 319,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4f/Collectible_Cain%27s_Other_Eye_icon.png",
            "description": " Spawns a familiar that slowly floats around the room on a zig-zag pattern and shoots normal tears in the same direction as Isaac. Spawns a familiar that follows Isaac and fires tears in random cardinal directions that copy Isaac's tears and tear effects and scale with damage.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/cd/Achievement_Black_Lipstick_icon.png",
        "name": "Black Lipstick",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Eve",
        "id": 111
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a3/Achievement_Eve%27s_Mascara_icon.png",
        "name": "Eve's Mascara",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Eve",
        "id": 112,
        "item": {
            "name": "Eve's Mascara",
            "id": 310,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f4/Collectible_Eve%27s_Mascara_icon.png",
            "description": " Doubles damage, halves tears stat, and greatly reduces shot speed.  Doubles damage, 0.66x tears multiplier, and greatly reduces shot speed.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/75/Achievement_Fate_icon.png",
        "name": "Fate",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  ???",
        "id": 113,
        "item": {
            "name": "Fate",
            "id": 179,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/08/Collectible_Fate_icon.png",
            "description": "Grants flight and one  Eternal Heart.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/01/Achievement_Blue_Baby%27s_Only_Friend_icon.png",
        "name": "???'s Only Friend",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  ???",
        "id": 114,
        "item": {
            "name": "???'s Only Friend",
            "id": 320,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ee/Collectible_Blue_Baby%27s_Only_Friend_icon.png",
            "description": "Spawns a controllable familiar that deals 37.5 damage per second on touch. It can be moved using the shooting directional keys",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1a/Achievement_Samson%27s_Chains_icon.png",
        "name": "Samson's Chains",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Samson",
        "id": 115,
        "item": {
            "name": "Samson's Chains",
            "id": 321,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/80/Collectible_Samson%27s_Chains_icon.png",
            "description": "Attaches a ball and chain to Isaac that pulls behind him that damages enemies, blocks shots, and destroys most Obstacles.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3c/Achievement_Lazarus%27_Rags_icon.png",
        "name": "Lazarus' Rags",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Lazarus",
        "id": 116,
        "item": {
            "name": "Lazarus' Rags",
            "id": 332,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7f/Collectible_Lazarus%27_Rags_icon.png",
            "description": " Upon dying, resurrect as  Lazarus Risen in the current room with one Red Heart container and Anemic. Upon dying, resurrect as  Lazarus Risen in the current room with one less Red Heart container, Anemic, and +0.5 Damage. Transform into  Lazarus when reaching the next floor.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/23/Achievement_Broken_Ankh_icon.png",
        "name": "Broken Ankh",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Lazarus",
        "id": 117
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/71/Achievement_Store_Credit_icon.png",
        "name": "Store Credit",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Lazarus",
        "id": 118
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a5/Achievement_Pandora%27s_Box_icon.png",
        "name": "Pandora's Box",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Lazarus",
        "id": 119,
        "item": {
            "name": "Pandora's Box",
            "id": 297,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8f/Collectible_Pandora%27s_Box_icon.png",
            "description": "Spawns specific pickups or items depending on the floor it is used on. Disappears after use.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/91/Achievement_Suicide_King_icon.png",
        "name": "Suicide King",
        "description": "Unlocked a new item.",
        "unlock": "Complete Suicide King (challenge #7)",
        "id": 120
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/ce/Achievement_Blank_Card_icon.png",
        "name": "Blank Card",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Eden",
        "id": 121,
        "item": {
            "name": "Blank Card",
            "id": 286,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6c/Collectible_Blank_Card_icon.png",
            "description": " Copies the effect of the card or rune currently held by Isaac. Copies the effect of the card currently held by Isaac. The charge time is based on the power of the card.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f6/Achievement_Book_of_Secrets_icon.png",
        "name": "Book of Secrets",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Eden",
        "id": 122,
        "item": {
            "name": "Book of Secrets",
            "id": 287,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/36/Collectible_Book_of_Secrets_icon.png",
            "description": "Gives the effect of Treasure Map, The Compass, or Blue Map for the duration of the current floor.  If all effects are active,  X-Ray Vision is provided for the floor instead. Highlights any Tinted Rocks and rocks with Crawl Space in the room.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8a/Achievement_Mysterious_Paper_icon.png",
        "name": "Mysterious Paper",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Eden",
        "id": 123
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/14/Achievement_Mystery_Sack_icon.png",
        "name": "Mystery Sack",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Eden",
        "id": 124,
        "item": {
            "name": "Mystery Sack",
            "id": 271,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/ce/Collectible_Mystery_Sack_icon.png",
            "description": "Spawns a familiar that drops a Heart, coin,  Bomb, or  Key every 5-6 rooms.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c3/Achievement_Undefined_icon.png",
        "name": "Undefined",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Eden",
        "id": 125,
        "item": {
            "name": "Undefined",
            "id": 324,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2e/Collectible_Undefined_icon.png",
            "description": "Teleports Isaac to the Secret Room, Super Secret Room, Treasure Room, or I AM ERROR.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f3/Achievement_Satanic_Bible_icon.png",
        "name": "Satanic Bible",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Azazel",
        "id": 126,
        "item": {
            "name": "Satanic Bible",
            "id": 292,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e6/Collectible_Satanic_Bible_icon.png",
            "description": "Gives one  Black Heart.  Replaces the boss room item on the current floor with a Devil Deal.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a0/Achievement_Daemon%27s_Tail_icon.png",
        "name": "Daemon's Tail",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Azazel",
        "id": 127
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/ca/Achievement_Abaddon_icon.png",
        "name": "Abaddon",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Azazel",
        "id": 128,
        "item": {
            "name": "Abaddon",
            "id": 230,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f6/Collectible_Abaddon_icon.png",
            "description": " +1.5 damage, +0.2 speed. Removes all Red Heart containers, grants six  Black Hearts, and adds a chance to shoot fear tears. +1.5 damage, +0.2 speed. Grants two  Black Hearts, converts all Red Heart Containers into Black Hearts, and adds a chance to shoot fear tears.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1d/Achievement_Isaac%27s_Heart_icon.png",
        "name": "Isaac's Heart",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  The Lost",
        "id": 129,
        "item": {
            "name": "Isaac's Heart",
            "id": 276,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4b/Collectible_Isaac%27s_Heart_icon.png",
            "description": "Isaac himself is now immune to all damage, and a heart familiar follows him. If the heart is hurt, Isaac is hurt.  The heart charges up as Isaac shoots, firing 8 blood shots, knocking back enemies, and leaving a puddle of creep when released.",
            "quality": 0
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e1/Achievement_The_Mind_icon.png",
        "name": "The Mind",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  The Lost",
        "id": 130,
        "item": {
            "name": "The Mind",
            "id": 333,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/22/Collectible_The_Mind_icon.png",
            "description": "Reveals the entire map, including all special rooms and Secret Rooms.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/60/Achievement_The_Body_icon.png",
        "name": "The Body",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  The Lost",
        "id": 131,
        "item": {
            "name": "The Body",
            "id": 334,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/44/Collectible_The_Body_icon.png",
            "description": "Adds 3 Red Heart Containers.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a3/Achievement_The_Soul_icon.png",
        "name": "The Soul",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  The Lost",
        "id": 132,
        "item": {
            "name": "The Soul",
            "id": 335,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b1/Collectible_The_Soul_icon.png",
            "description": "Grants two  Soul Hearts. Isaac gains a pulsing aura that repels enemies and projectiles.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f2/Achievement_The_D100_icon.png",
        "name": "The D100",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  The Lost",
        "id": 133,
        "item": {
            "name": "D100",
            "id": 283,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b5/Collectible_D100_icon.png",
            "description": " Combines the effects of D4, The D6, and D20. Combines the effects of D1, D4, The D6, D7, D8, D10, D12, and D20.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c6/Achievement_Blue_Map_icon.png",
        "name": "Blue Map",
        "description": "Unlocked a new item.",
        "unlock": "Donate 10 Coins to the Donation Machine",
        "id": 134,
        "item": {
            "name": "Blue Map",
            "id": 246,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6b/Collectible_Blue_Map_icon.png",
            "description": "Reveals the locations of Secret Rooms and Super Secret Rooms on the map.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/da/Achievement_There%27s_Options_icon.png",
        "name": "There's Options",
        "description": "Unlocked a new item.",
        "unlock": "Donate 50 Coins to the Donation Machine",
        "id": 135,
        "item": {
            "name": "There's Options",
            "id": 249,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/89/Collectible_There%27s_Options_icon.png",
            "description": "Two items appear after defeating a Boss. Only one can be taken; the other will disappear.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f8/Achievement_Black_Candle_icon.png",
        "name": "Black Candle",
        "description": "Unlocked a new item",
        "unlock": "Donate 150 Coins to the Donation Machine",
        "id": 136,
        "item": {
            "name": "Black Candle",
            "id": 260,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/47/Collectible_Black_Candle_icon.png",
            "description": "Prevents curses. Grants one  Black Heart. Increases the chance for a Devil Room or Angel Room to appear.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/dd/Achievement_Red_Candle_icon.png",
        "name": "Red Candle",
        "description": "Unlocked a new item.",
        "unlock": "Donate 400 Coins to the Donation Machine",
        "id": 137,
        "item": {
            "name": "Red Candle",
            "id": 289,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/dc/Collectible_Red_Candle_icon.png",
            "description": "Throws out a flame that damages everything in its path, diminishing in size as it hits enemies or blocks shots.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f8/Achievement_Stop_Watch_icon.png",
        "name": "Stop Watch",
        "description": "Unlocked a new item",
        "unlock": "Donate 999 Coins to the Donation Machine",
        "id": 138,
        "item": {
            "name": "Stop Watch",
            "id": 232,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e5/Collectible_Stop_Watch_icon.png",
            "description": "+0.3 speed. Automatically inflicts slow to all enemies in every room.+0.3 speed. Upon taking damage, inflicts slow to all enemies for the current room.+0.3 speed. Slows all enemies in every room to 80% speed.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a2/Achievement_Wire_Coat_Hanger_icon.png",
        "name": "Wire Coat Hanger",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Mom's Heart 4 times",
        "id": 139,
        "item": {
            "name": "Wire Coat Hanger",
            "id": 32,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1d/Collectible_Wire_Coat_Hanger_icon.png",
            "description": "+0.7 tears.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/53/Achievement_Ipecac_icon.png",
        "name": "Ipecac",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Mom's Heart 6 times",
        "id": 140,
        "item": {
            "name": "Ipecac",
            "id": 149,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/13/Collectible_Ipecac_icon.png",
            "description": "Replaces tears with explosive and poisoning projectiles fired in an arc from the mouth.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ee/Achievement_Experimental_Treatment_icon.png",
        "name": "Experimental Treatment",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Mom's Heart 7 times",
        "id": 141,
        "item": {
            "name": "Experimental Treatment",
            "id": 240,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/de/Collectible_Experimental_Treatment_icon.png",
            "description": " Randomly increases and decreases some of Isaac's stats. Increases four random stats and decreases the other two.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/94/Achievement_Krampus_icon.png",
        "name": "Krampus",
        "description": "Unlocked another miniboss!",
        "unlock": "Take 20 items from Devil Rooms",
        "id": 142
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/74/Achievement_Head_of_Krampus_icon.png",
        "name": "Head of Krampus",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Krampus",
        "id": 143,
        "item": {
            "name": "Head of Krampus",
            "id": 293,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ef/Collectible_Head_of_Krampus_icon.png",
            "description": " Fires a powerful Brimstone beam in four cardinal directions, much like  Krampus shoots. Fires a powerful Brimstone beam in four cardinal directions, much like  Krampus shoots, with a 50% chance to rotate all beams around Isaac 90 degrees.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2b/Achievement_Super_Meat_Boy_icon.png",
        "name": "Super Meat Boy",
        "description": "Built him out of meat cubes.",
        "unlock": "Make a Super Meat Boy by picking up 4 copies of Cube of Meat in one run; see Unlocking Super Meat Boy &amp; Super Bandage Girl",
        "id": 144
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/dd/Achievement_Butter_Bean_icon.png",
        "name": "Butter Bean",
        "description": "Unlocked a new item.",
        "unlock": "Destroy 100 Poops",
        "id": 145,
        "item": {
            "name": "Butter Bean",
            "id": 294,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9f/Collectible_Butter_Bean_icon.png",
            "description": "Isaac farts and knocks back nearby enemies  and projectiles.  Enemies pushed into walls or obstacles take 12 damage.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/32/Achievement_Little_Baggy_icon.png",
        "name": "Little Baggy",
        "description": "Unlocked a new item.",
        "unlock": "Pick up any 2 of the following items in a single run: Roid Rage, The Virus, Growth Hormones, Experimental Treatment, and Speed Ball ( Any 2 items that have the 'syringe' item tag)",
        "id": 146,
        "item": {
            "name": "Little Baggy",
            "id": 252,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ea/Collectible_Little_Baggy_icon.png",
            "description": "Isaac can hold 2 pills at once and all cards and runes are replaced by pills.",
            "quality": 0
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/bb/Achievement_Blood_Bag_icon.png",
        "name": "Blood Bag",
        "description": "Unlocked a new item.",
        "unlock": "Use the Blood Donation Machine 30 times",
        "id": 147,
        "item": {
            "name": "Blood Bag",
            "id": 119,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a4/Collectible_Blood_Bag_icon.png",
            "description": "Grants one filled Red Heart container, restores 4  Red Hearts, and increases speed by 0.3.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0b/Achievement_The_D4_icon.png",
        "name": "The D4",
        "description": "Unlocked a new item.",
        "unlock": "Blow up 30 Slot Machine",
        "id": 148,
        "item": {
            "name": "D4",
            "id": 284,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/17/Collectible_D4_icon.png",
            "description": "Rerolls all of Isaac's passive items.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3c/Achievement_Missing_Poster_icon.png",
        "name": "Missing Poster",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Isaac",
        "id": 149
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1f/Achievement_Rubber_Cement_icon.png",
        "name": "Rubber Cement",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Mom's Heart 2 times",
        "id": 150,
        "item": {
            "name": "Rubber Cement",
            "id": 221,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c8/Collectible_Rubber_Cement_icon.png",
            "description": "Tears bounce off walls, enemies, and environmental objects.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8a/Achievement_Store_Upgrade_lv.1_icon.png",
        "name": "Store Upgrade lv.1",
        "description": "Donated 20 pennies to the shop.",
        "unlock": "Donate 20 Coins to the Donation Machine",
        "id": 151
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e0/Achievement_Store_Upgrade_lv.2_icon.png",
        "name": "Store Upgrade lv.2",
        "description": "Donated 100 pennies to the shop.",
        "unlock": "Donate 100 Coins to the Donation Machine",
        "id": 152
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d7/Achievement_Store_Upgrade_lv.3_icon.png",
        "name": "Store Upgrade lv.3",
        "description": "Donated 200 pennies to the shop.",
        "unlock": "Donate 200 Coins to the Donation Machine",
        "id": 153
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3e/Achievement_Store_Upgrade_lv.4_icon.png",
        "name": "Store Upgrade lv.4",
        "description": "Donated 600 pennies to the shop.",
        "unlock": "Donate 600 Coins to the Donation Machine",
        "id": 154
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/dd/Achievement_Angels_icon.png",
        "name": "Angels",
        "description": "They are waiting.",
        "unlock": "Complete Chapter 6",
        "id": 155
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/42/Achievement_Godhead_icon.png",
        "name": "Godhead",
        "description": "Unlocked a new item.",
        "unlock": "Earn all  5 /  9 /  10 /  12 Completion Marks on Hard mode as  The Lost",
        "id": 156,
        "item": {
            "name": "Godhead",
            "id": 331,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0c/Collectible_Godhead_icon.png",
            "description": " Grants homing tears with a damaging halo. +0.5 Damage, -0.3 Tears -0.3 Shot Speed, +0.8 Tear Falling Speed, and +1.2 Range. Grants homing tears with a damaging halo. +0.5 Damage, -0.3 Tears, and -0.3 Shot Speed.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a0/Achievement_Darkness_Falls_icon.png",
        "name": "Darkness Falls",
        "description": "Unlocked Challenge #4.",
        "unlock": " Defeat Mom's Heart 11 times and unlock  Eve Defeat Mom's Heart 11 times and defeat ??? as  Eve",
        "id": 157
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7f/Achievement_The_Tank_icon.png",
        "name": "The Tank",
        "description": "Unlocked Challenge #5.",
        "unlock": "Have 7 or more Red Heart Containers at one time",
        "id": 158
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d3/Achievement_Solar_System_icon.png",
        "name": "Solar System",
        "description": "Unlocked Challenge #6.",
        "unlock": "Defeat Mom's Heart 3 times",
        "id": 159
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/24/Achievement_Suicide_King_2_icon.png",
        "name": "Suicide King",
        "description": "Unlocked Challenge #7.",
        "unlock": "Defeat Mom's Heart 11 times and unlock  Lazarus",
        "id": 160
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6b/Achievement_Cat_Got_Your_Tongue_icon.png",
        "name": "Cat Got Your Tongue",
        "description": "Unlocked Challenge #8.",
        "unlock": "Become Guppy",
        "id": 161
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d6/Achievement_Demo_Man_icon.png",
        "name": "Demo Man",
        "description": "Unlocked Challenge #9.",
        "unlock": "Defeat Mom's Heart 9 times",
        "id": 162
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/45/Achievement_Cursed%21_icon.png",
        "name": "Cursed!",
        "description": "Unlocked Challenge #10.",
        "unlock": "Have 7 or more Red Heart Containers at one time",
        "id": 163
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fd/Achievement_Glass_Cannon_icon.png",
        "name": "Glass Cannon",
        "description": "Unlocked Challenge #11.",
        "unlock": "Beat The Family Man (challenge #19), defeat Lokii, and unlock  Judas",
        "id": 164
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f5/Achievement_The_Family_Man_icon.png",
        "name": "The Family Man",
        "description": "Unlocked Challenge #19.",
        "unlock": "Pick up both Key Pieces from the Angels in one run",
        "id": 165
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/27/Achievement_Purist_icon.png",
        "name": "Purist",
        "description": "Unlocked Challenge #20.",
        "unlock": "Defeat Mom",
        "id": 166
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6d/Achievement_Lost_Baby_icon.png",
        "name": "Lost Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  Isaac",
        "id": 167
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2f/Achievement_Cute_Baby_icon.png",
        "name": "Cute Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  Magdalene",
        "id": 168
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/ff/Achievement_Crow_Baby_icon.png",
        "name": "Crow Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  Eve",
        "id": 169
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3b/Achievement_Shadow_Baby_icon.png",
        "name": "Shadow Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  Judas",
        "id": 170
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4f/Achievement_Glass_Baby_icon.png",
        "name": "Glass Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  Cain",
        "id": 171
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f1/Achievement_Wrapped_Baby_icon.png",
        "name": "Wrapped Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": " Defeat Mom's Heart on Hard mode as  Azazel Defeat Mom's Heart on Hard mode as  Lazarus",
        "id": 172
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4c/Achievement_Begotten_Baby_icon.png",
        "name": "Begotten Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": " Defeat Mom's Heart on Hard mode as  Lazarus Defeat Mom's Heart on Hard mode as  Azazel",
        "id": 173
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/21/Achievement_Dead_Baby_icon.png",
        "name": "Dead Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  ???",
        "id": 174
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f9/Achievement_-0-_Baby_icon.png",
        "name": "-0- Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  The Lost",
        "id": 175
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/17/Achievement_Glitch_Baby_icon.png",
        "name": "Glitch Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  Eden",
        "id": 176
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/62/Achievement_Fighting_Baby_icon.png",
        "name": "Fighting Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  Samson",
        "id": 177
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c8/Achievement_Lord_of_the_Flies_icon.png",
        "name": "Lord of the Flies",
        "description": "You became Lord of the Flies.",
        "unlock": "Become Beelzebub",
        "id": 178
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/20/Achievement_Fart_Baby_icon.png",
        "name": " Fart Baby",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Isaac",
        "id": 179,
        "item": {
            "name": "Farting Baby",
            "id": 404,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/58/Collectible_Farting_Baby_icon.png",
            "description": "Spawns a familiar that follows Isaac and blocks enemy shots. If a shot hits Farting Baby, it has a chance to fart, which charms, poisons, or knocks back nearby enemies.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/53/Achievement_Purity_icon.png",
        "name": " Purity",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Magdalene",
        "id": 180,
        "item": {
            "name": "Purity",
            "id": 407,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/35/Collectible_Purity_icon.png",
            "description": "Boosts one of Isaac's stats depending on the color of the aura around him. The aura disappears upon taking damage and reappears with a random color upon entering a new room. Red boosts damage, blue boosts tears, yellow boosts speed, and orange boosts range.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/49/Achievement_D12_icon.png",
        "name": " D12",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Cain",
        "id": 181,
        "item": {
            "name": "D12",
            "id": 386,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/29/Collectible_D12_icon.png",
            "description": " Re-rolls all Rocks and Metal Blocks in the current room into other random obstacles. Re-rolls most types of Obstacles in the current room into other random obstacles.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/29/Achievement_Betrayal_icon.png",
        "name": " Betrayal",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Judas",
        "id": 182,
        "item": {
            "name": "Betrayal",
            "id": 391,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7f/Collectible_Betrayal_icon.png",
            "description": " Charms all enemies in the room when Isaac takes damage. Enemies are able to damage each other. If an enemy is damaged by another enemy, they will attack that enemy instead of Isaac.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/94/Achievement_Fate%27s_Reward_icon.png",
        "name": " Fate's Reward",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  ???",
        "id": 183,
        "item": {
            "name": "Fate's Reward",
            "id": 361,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/29/Collectible_Fate%27s_Reward_icon.png",
            "description": "A blue head familiar that will follow Isaac and fire tears copying his tear effects and damage.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6d/Achievement_Athame_icon.png",
        "name": " Athame",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Eve",
        "id": 184,
        "item": {
            "name": "Athame",
            "id": 408,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/58/Collectible_Athame_icon.png",
            "description": " When Isaac takes damage, a damaging black ring briefly appears around him. This ring can cause enemies to drop  Black Hearts. After Isaac kills an enemy, adds a luck-based chance to spawn a damaging black ring around them.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/85/Achievement_Blind_Rage_icon.png",
        "name": " Blind Rage",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Samson",
        "id": 185
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3f/Achievement_Maw_of_the_Void_icon.png",
        "name": " Maw of the Void",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Azazel",
        "id": 186,
        "item": {
            "name": "Maw Of The Void",
            "id": 399,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d8/Collectible_Maw_Of_The_Void_icon.png",
            "description": "Isaac can charge and unleash a black ring that rapidly deals damage around him.  The ring can cause enemies to drop  Black Hearts. +1 damage.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/18/Achievement_Empty_Vessel_icon.png",
        "name": " Empty Vessel",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Lazarus",
        "id": 187,
        "item": {
            "name": "Empty Vessel",
            "id": 409,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/16/Collectible_Empty_Vessel_icon.png",
            "description": "Grants two  Black Hearts. While Isaac has no red hearts, grants flight and periodically grants an invincibility shield for a few seconds.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ee/Achievement_Eden%27s_Blessing_icon.png",
        "name": " Eden's Blessing",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Eden",
        "id": 188,
        "item": {
            "name": "Eden's Blessing",
            "id": 381,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5f/Collectible_Eden%27s_Blessing_icon.png",
            "description": "+0.7 tears up. Grants a random item at the start of the next run.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/af/Achievement_Sworn_Protector_icon.png",
        "name": " Sworn Protector",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  The Lost",
        "id": 189,
        "item": {
            "name": "Sworn Protector",
            "id": 363,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9f/Collectible_Sworn_Protector_icon.png",
            "description": "Spawns an orbital familiar which does 105 damage per second and attracts and blocks enemy shots. Upon blocking 10 shots in a room, it drops an  Eternal Heart.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1d/Achievement_Incubus_icon.png",
        "name": " Incubus",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Lilith",
        "id": 190,
        "item": {
            "name": "Incubus",
            "id": 360,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5e/Collectible_Incubus_icon.png",
            "description": "Spawns a demonic familiar that shoots tears identical to Isaac's in terms of damage, tears, and tear effects.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fc/Achievement_Keeper_now_holds..._A_Penny%21_icon.png",
        "name": " Keeper now holds... A Penny!",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Keeper",
        "id": 191
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b0/Achievement_Lil%27_Chest_icon.png",
        "name": " Lil' Chest",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Isaac",
        "id": 192,
        "item": {
            "name": "Lil Chest",
            "id": 362,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/94/Collectible_Lil_Chest_icon.png",
            "description": "Spawns a chest familiar that spawns a random pickup (25% chance) or trinket (10% chance) upon clearing a room.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0e/Achievement_Censer_icon.png",
        "name": " Censer",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Magdalene",
        "id": 193,
        "item": {
            "name": "Censer",
            "id": 387,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0e/Collectible_Censer_icon.png",
            "description": "Spawns a familiar which creates a circular aura that slows down enemies and enemy shots inside.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6a/Achievement_Evil_Eye_icon.png",
        "name": " Evil Eye",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Cain",
        "id": 194,
        "item": {
            "name": "Evil Eye",
            "id": 410,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/43/Collectible_Evil_Eye_icon.png",
            "description": "Adds a chance to fire a slow-moving eye that fires tears in the same direction as Isaac. The eye is destroyed when it hits an enemy or obstacle.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3d/Achievement_My_Shadow_icon.png",
        "name": " My Shadow",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Judas",
        "id": 195,
        "item": {
            "name": "My Shadow",
            "id": 433,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4c/Collectible_My_Shadow_icon.png",
            "description": " Inflicts fear on all enemies in the room upon taking damage and spawns black friendly  Chargers that attack enemies.Spawns a shadow familiar that closely follows behind Isaac. It spawns a black friendly  Charger whenever an enemy touches it.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d4/Achievement_Cracked_Dice_icon.png",
        "name": " Cracked Dice",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  ???",
        "id": 196
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e9/Achievement_Black_Feather_icon.png",
        "name": " Black Feather",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Eve",
        "id": 197
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a4/Achievement_Lusty_Blood_icon.png",
        "name": " Lusty Blood",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Samson",
        "id": 198,
        "item": {
            "name": "Lusty Blood",
            "id": 411,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0c/Collectible_Lusty_Blood_icon.png",
            "description": "Isaac's damage increases for the current room each time he kills an enemy.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/29/Achievement_Lilith_icon.png",
        "name": " Lilith",
        "description": "Unlocked a new character.",
        "unlock": "Defeat Ultra Greed as  Azazel",
        "id": 199
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/da/Achievement_Key_Bum_icon.png",
        "name": " Key Bum",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Lazarus",
        "id": 200,
        "item": {
            "name": "Key Bum",
            "id": 388,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/bb/Collectible_Key_Bum_icon.png",
            "description": "Spawns a familiar that follows Isaac and collects  Keys for himself, giving random  Chests in return.",
            "quality": 0
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ac/Achievement_GB_Bug_icon.png",
        "name": " GB Bug",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Eden",
        "id": 201,
        "item": {
            "name": "GB Bug",
            "id": 405,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6c/Collectible_GB_Bug_icon.png",
            "description": " Spawns a familiar that bounces diagonally around the room, applying a random status effect to enemies it hits and has a chance to re-roll pickups it passes over. Spawns a familiar that follows Isaac. Double tapping the fire button launches it forward, causing it to reroll the first monster or pickup it hits.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/74/Achievement_Zodiac_icon.png",
        "name": " Zodiac",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  The Lost",
        "id": 202,
        "item": {
            "name": "Zodiac",
            "id": 392,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5b/Collectible_Zodiac_icon.png",
            "description": "Gives Isaac a random zodiac item effect that changes every floor.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/43/Achievement_Box_of_Friends_icon.png",
        "name": " Box of Friends",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Lilith",
        "id": 203,
        "item": {
            "name": "Box of Friends",
            "id": 357,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/bf/Collectible_Box_of_Friends_icon.png",
            "description": "Duplicates all of Isaac's familiars for the current room. If Isaac has no familiars, spawns a Demon Baby for the room instead.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c0/Achievement_Rib_of_Greed_icon.png",
        "name": " Rib of Greed",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Keeper",
        "id": 204
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/cb/Achievement_Cry_Baby_icon.png",
        "name": " Cry Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Isaac",
        "id": 205
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0b/Achievement_Red_Baby_icon.png",
        "name": " Red Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Magdalene",
        "id": 206
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d2/Achievement_Green_Baby_icon.png",
        "name": " Green Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Cain",
        "id": 207
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2a/Achievement_Brown_Baby_icon.png",
        "name": " Brown Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Judas",
        "id": 208
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fa/Achievement_Blue_Baby_icon.png",
        "name": " Blue Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  ???",
        "id": 209
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/27/Achievement_Lil%27_Baby_icon.png",
        "name": " Lil' Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Eve",
        "id": 210
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/06/Achievement_Rage_Baby_icon.png",
        "name": " Rage Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Samson",
        "id": 211
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/79/Achievement_Black_Baby_icon.png",
        "name": " Black Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Azazel",
        "id": 212
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/45/Achievement_Long_Baby_icon.png",
        "name": " Long Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Lazarus",
        "id": 213
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/72/Achievement_Yellow_Baby_icon.png",
        "name": " Yellow Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Eden",
        "id": 214
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/41/Achievement_White_Baby_icon.png",
        "name": " White Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  The Lost",
        "id": 215
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/cd/Achievement_Big_Baby_icon.png",
        "name": " Big Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Lilith",
        "id": 216
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ab/Achievement_Noose_Baby_icon.png",
        "name": " Noose Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Keeper",
        "id": 217
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0f/Achievement_Rune_Bag_icon.png",
        "name": " Rune Bag",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Lilith",
        "id": 218,
        "item": {
            "name": "Rune Bag",
            "id": 389,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0c/Collectible_Rune_Bag_icon.png",
            "description": "Spawns a familiar that drops a random rune after clearing enough rooms.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8e/Achievement_Cambion_Conception_icon.png",
        "name": " Cambion Conception",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Lilith",
        "id": 219,
        "item": {
            "name": "Cambion Conception",
            "id": 412,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8d/Collectible_Cambion_Conception_icon.png",
            "description": "After taking damage a certain amount of times, a permanent demonic familiar spawns.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6e/Achievement_Serpent%27s_Kiss_icon.png",
        "name": " Serpent's Kiss",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Lilith",
        "id": 220,
        "item": {
            "name": "Serpent's Kiss",
            "id": 393,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/dd/Collectible_Serpent%27s_Kiss_icon.png",
            "description": "Tears have a chance to apply a poison effect to enemies. Isaac poisons enemies on contact. Poisoned enemies have a chance to drop a  Black Heart when killed.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/00/Achievement_Succubus_icon.png",
        "name": " Succubus",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Lilith",
        "id": 221,
        "item": {
            "name": "Succubus",
            "id": 417,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/37/Collectible_Succubus_icon.png",
            "description": "Spawns a flying familiar that bounces around the room with a black aura, dealing rapid damage to any enemies inside it. While standing in the aura, Isaac gains a 1.5× tear damage multiplier.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/56/Achievement_Immaculate_Conception_icon.png",
        "name": " Immaculate Conception",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Lilith",
        "id": 222,
        "item": {
            "name": "Immaculate Conception",
            "id": 413,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/01/Collectible_Immaculate_Conception_icon.png",
            "description": "Upon picking up a certain amount of health, spawn a permanent angelic familiar.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a7/Achievement_Goat_Head_Baby_icon.png",
        "name": " Goat Head Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  Lilith",
        "id": 223
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d6/Achievement_Gold_Heart_icon.png",
        "name": " Gold Heart",
        "description": "Unlocked a new item.",
        "unlock": "Complete XXXXXXXXL (challenge #21)",
        "id": 224
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/db/Achievement_Get_out_of_Jail_Free_Card_icon.png",
        "name": " Get out of Jail Free Card",
        "description": "Unlocked a new item.",
        "unlock": "Complete SPEED! (challenge #22)",
        "id": 225
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/cd/Achievement_Gold_Bomb_icon.png",
        "name": " Gold Bomb",
        "description": "Unlocked a new item.",
        "unlock": "Complete Blue Bomber (challenge #23)",
        "id": 226
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e7/Achievement_2_new_pills_icon.png",
        "name": " 2 new pills",
        "description": "Unlocked a new item.",
        "unlock": "Complete PAY TO PLAY (challenge #24)",
        "id": 227
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/32/Achievement_2_new_pills_2_icon.png",
        "name": " 2 new pills",
        "description": "Unlocked a new item.",
        "unlock": "Complete Have a Heart (challenge #25)",
        "id": 228
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/df/Achievement_Poker_Chip_icon.png",
        "name": " Poker Chip",
        "description": "Unlocked a new item.",
        "unlock": "Complete I RULE! (challenge #26)",
        "id": 229
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d8/Achievement_Stud_Finder_icon.png",
        "name": " Stud Finder",
        "description": "Unlocked a new item.",
        "unlock": "Complete BRAINS! (challenge #27)",
        "id": 230
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9d/Achievement_D8_icon.png",
        "name": " D8",
        "description": "Unlocked a new item.",
        "unlock": "Complete PRIDE DAY! (challenge #28)",
        "id": 231,
        "item": {
            "name": "D8",
            "id": 406,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/04/Collectible_D8_icon.png",
            "description": "Re-rolls Isaac's damage, tears, range, and speed.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/19/Achievement_Kidney_Stone_icon.png",
        "name": " Kidney Stone",
        "description": "Unlocked a new item.",
        "unlock": " Complete The Guardian (challenge #30) Complete Onan's Streak (challenge #29)",
        "id": 232,
        "item": {
            "name": "Kidney Stone",
            "id": 440,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/eb/Collectible_Kidney_Stone_icon.png",
            "description": "Isaac is occasionally forced to stop firing and charge an attack that launches a massive piercing, spectral kidney stone and a barrage of tears.  -0.2 speed, decreases range.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f8/Achievement_Blank_Rune_icon.png",
        "name": " Blank Rune",
        "description": "Unlocked a new item.",
        "unlock": " Complete Onan's Streak (challenge #29) Complete The Guardian (challenge #30)",
        "id": 233
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1e/Achievement_Blue_Womb_icon.png",
        "name": " Blue Womb",
        "description": "Unlocked a hidden chapter.",
        "unlock": "Defeat Mom's Heart 10 times",
        "id": 234
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/ff/Achievement_1001%25_icon.png",
        "name": " 1001%",
        "description": "Nerd x 1000000",
        "unlock": "Unlock all secrets and endings, and collect every item in the game  Unlock as many of the previously mentioned things as there were in Afterbirth (Ex: Unlocking items that were not in Afterbirth, like Red Key, count towards this achievement, meaning you do not need to unlock items like Mega Blast to gain this achievement)",
        "id": 235
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/70/Achievement_Keeper_holds_Wooden_Nickel_icon.png",
        "name": " Keeper holds Wooden Nickel",
        "description": "Unlocked a new starting item.",
        "unlock": "Defeat Isaac as  Keeper",
        "id": 236
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b4/Achievement_Keeper_holds_Store_Key_icon.png",
        "name": " Keeper holds Store Key",
        "description": "Unlocked a new starting item.",
        "unlock": "Defeat Satan as  Keeper",
        "id": 237
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9f/Achievement_Deep_Pockets_icon.png",
        "name": " Deep Pockets",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Keeper",
        "id": 238,
        "item": {
            "name": "Deep Pockets",
            "id": 416,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/57/Collectible_Deep_Pockets_icon.png",
            "description": " Allows Isaac to carry two cards or pills (or a combination of both) at the same time. Increases the coin cap to 999. If a room would otherwise yield no reward, 1-3 coins will spawn.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/79/Achievement_Karma_icon.png",
        "name": " Karma",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Keeper",
        "id": 239
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ad/Achievement_Sticky_Nickels_icon.png",
        "name": " Sticky Nickels",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Keeper",
        "id": 240
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fb/Achievement_Super_Greed_Baby_icon.png",
        "name": " Super Greed Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  Keeper",
        "id": 241
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/01/Achievement_Lucky_Pennies_icon.png",
        "name": " Lucky Pennies",
        "description": "Unlocked a new item.",
        "unlock": "Donate 2 Coins to the Greed Donation Machine",
        "id": 242
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/24/Achievement_Special_Hanging_Shopkeepers_icon.png",
        "name": " Special Hanging Shopkeepers",
        "description": "Unlocked a secret.",
        "unlock": "Donate 14 Coins to the Greed Donation Machine",
        "id": 243
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/be/Achievement_Wooden_Nickel_icon.png",
        "name": " Wooden Nickel",
        "description": "Unlocked a new item.",
        "unlock": "Donate 33 Coins to the Greed Donation Machine",
        "id": 244,
        "item": {
            "name": "Wooden Nickel",
            "id": 349,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/ba/Collectible_Wooden_Nickel_icon.png",
            "description": "Has a roughly 50% chance to drop a penny, nickel or dime, and a roughly 50% chance to do nothing.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7e/Achievement_Cain_holds_Paperclip_icon.png",
        "name": " Cain holds Paperclip",
        "description": "Unlocked a new starting item.",
        "unlock": "Donate 68 Coins to the Greed Donation Machine",
        "id": 245
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/02/Achievement_Everything_is_Terrible_2%21%21%21_icon.png",
        "name": " Everything is Terrible 2!!!",
        "description": "Greed just got harder!",
        "unlock": "Donate 111 Coins to the Greed Donation Machine",
        "id": 246
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/52/Achievement_Special_Shopkeepers_icon.png",
        "name": " Special Shopkeepers",
        "description": "Unlocked a secret.",
        "unlock": "Donate 234 Coins to the Greed Donation Machine",
        "id": 247
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/23/Achievement_Eve_now_holds_Razor_Blade_icon.png",
        "name": " Eve now holds Razor Blade",
        "description": "Unlocked a new starting item.",
        "unlock": "Donate 439 Coins to the Greed Donation Machine",
        "id": 248
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/34/Achievement_Store_Key_icon.png",
        "name": " Store Key",
        "description": "Unlocked a new item.",
        "unlock": "Donate 666 Coins to the Greed Donation Machine",
        "id": 249
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/41/Achievement_Lost_holds_Holy_Mantle_icon.png",
        "name": " Lost holds Holy Mantle",
        "description": "Unlocked a new starting item.",
        "unlock": "Donate 879 Coins to the Greed Donation Machine",
        "id": 250
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/04/Achievement_Keeper_icon.png",
        "name": " Keeper",
        "description": "Unlocked a new character.",
        "unlock": "Donate 1000 Coins to the Greed Donation Machine",
        "id": 251
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/eb/Achievement_Hive_Baby_icon.png",
        "name": " Hive Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  ???",
        "id": 252
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3c/Achievement_Buddy_Baby_icon.png",
        "name": " Buddy Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Isaac",
        "id": 253
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e5/Achievement_Colorful_Baby_icon.png",
        "name": " Colorful Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Magdalene",
        "id": 254
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fc/Achievement_Whore_Baby_icon.png",
        "name": " Whore Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Eve",
        "id": 255
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f3/Achievement_Cracked_Baby_icon.png",
        "name": " Cracked Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Eden",
        "id": 256
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/22/Achievement_Dripping_Baby_icon.png",
        "name": " Dripping Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Lazarus",
        "id": 257
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/53/Achievement_Blinding_Baby_icon.png",
        "name": " Blinding Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Use Blank Card while holding XIX - The Sun",
        "id": 258
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/42/Achievement_Sucky_Baby_icon.png",
        "name": " Sucky Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Azazel",
        "id": 259
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/51/Achievement_Dark_Baby_icon.png",
        "name": " Dark Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Lilith",
        "id": 260
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/48/Achievement_Picky_Baby_icon.png",
        "name": " Picky Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Cain",
        "id": 261
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e2/Achievement_Revenge_Baby_icon.png",
        "name": " Revenge Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Samson",
        "id": 262
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/63/Achievement_Belial_Baby_icon.png",
        "name": " Belial Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Judas",
        "id": 263
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c5/Achievement_Sale_Baby_icon.png",
        "name": " Sale Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Keeper",
        "id": 264
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c6/Achievement_XXXXXXXXL_icon.png",
        "name": " XXXXXXXXL",
        "description": "Unlocked Challenge #21.",
        "unlock": "Defeat Mom",
        "id": 265
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6d/Achievement_SPEED%21_icon.png",
        "name": " SPEED!",
        "description": "Unlocked Challenge #22.",
        "unlock": "Defeat Mom",
        "id": 266
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d0/Achievement_Blue_Bomber_icon.png",
        "name": " Blue Bomber",
        "description": "Unlocked Challenge #23.",
        "unlock": "Destroy 10 Tinted Rocks and defeat Mom's Heart 11 times",
        "id": 267
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f1/Achievement_PAY_TO_PLAY_icon.png",
        "name": " PAY TO PLAY",
        "description": "Unlocked Challenge #24.",
        "unlock": "Defeat Isaac as  Cain and destroy 10 Tinted Rocks",
        "id": 268
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/85/Achievement_Have_a_Heart_icon.png",
        "name": " Have a Heart",
        "description": "Unlocked Challenge #25.",
        "unlock": "Defeat Mom",
        "id": 269
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7a/Achievement_I_RULE%21_icon.png",
        "name": " I RULE!",
        "description": "Unlocked Challenge #26.",
        "unlock": " Defeat ??? or The Lamb, defeat Satan as  Isaac, and unlock The Negative Defeat ??? or The Lamb, and defeat Satan as  Isaac Defeat Mega Satan and unlock The Negative",
        "id": 270
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/28/Achievement_BRAINS%21_icon.png",
        "name": " BRAINS!",
        "description": "Unlocked Challenge #27.",
        "unlock": "Defeat Isaac 5 times",
        "id": 271
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3d/Achievement_PRIDE_DAY%21_icon.png",
        "name": " PRIDE DAY!",
        "description": "Unlocked Challenge #28.",
        "unlock": "Defeat Mom",
        "id": 272
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d1/Achievement_Onan%27s_Streak_icon.png",
        "name": " Onan's Streak",
        "description": "Unlocked Challenge #29.",
        "unlock": " Defeat Mom Unlock  Judas and It Lives.",
        "id": 273
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c2/Achievement_The_Guardian_icon.png",
        "name": " The Guardian",
        "description": "Unlocked Challenge #30.",
        "unlock": "Defeat Mom",
        "id": 274
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/89/Achievement_Generosity_icon.png",
        "name": " Generosity",
        "description": "If only everyone was as generous as you are...",
        "unlock": "Donate 999 Coins to the Greed Donation Machine",
        "id": 275
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a5/Achievement_Mega_icon.png",
        "name": " Mega",
        "description": "Unlocked...",
        "unlock": "Defeat Mega Satan as every character ( except Tainted characters)",
        "id": 276,
        "item": {
            "name": "Mega Blast",
            "id": 441,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0f/Collectible_Mega_Blast_icon.png",
            "description": "Isaac fires a giant laser for approximately 15 seconds. This laser deals massive damage, pushes Isaac backwards, and persists between rooms and floors.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/61/Achievement_Backasswards_icon.png",
        "name": " Backasswards",
        "description": "Unlocked a new challenge.",
        "unlock": " Defeat ??? or The Lamb Defeat Mega Satan and unlock The Negative",
        "id": 277
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/30/Achievement_Aprils_fool_icon.png",
        "name": " Aprils fool",
        "description": "Unlocked a new challenge.",
        "unlock": "Defeat Mom",
        "id": 278
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/df/Achievement_Pokey_Mans_icon.png",
        "name": " Pokey Mans",
        "description": "Unlocked a new challenge.",
        "unlock": "Defeat Mom's Heart 11 times",
        "id": 279
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1b/Achievement_Ultra_Hard_icon.png",
        "name": " Ultra Hard",
        "description": "Unlocked a new challenge.",
        "unlock": " Defeat ??? or The Lamb. Possession of The Polaroid / The Negative is required, barring getting to Dark Room through a Sacrifice Room. Defeat Mega Satan and unlock The Negative",
        "id": 280
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/50/Achievement_PONG_icon.png",
        "name": " PONG",
        "description": "Unlocked a new challenge.",
        "unlock": "Defeat Isaac 5 times",
        "id": 281
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4c/Achievement_D_infinity_icon.png",
        "name": " D infinity",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Isaac",
        "id": 282,
        "item": {
            "name": "D infinity",
            "id": 489,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f2/Collectible_D_infinity_icon.png",
            "description": " Grants a random die item that changes each use. Acts as any die item, and can by cycled by pressing the drop key.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d7/Achievement_Eucharist_icon.png",
        "name": " Eucharist",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Magdalene",
        "id": 283,
        "item": {
            "name": "Eucharist",
            "id": 499,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f8/Collectible_Eucharist_icon.png",
            "description": "An Angel Room will always spawn after every boss fight, excluding the first floor and floors after Chapter 4.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/69/Achievement_Silver_Dollar_icon.png",
        "name": " Silver Dollar",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Cain",
        "id": 284
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/66/Achievement_Shade_icon.png",
        "name": " Shade",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Judas",
        "id": 285,
        "item": {
            "name": "Shade",
            "id": 468,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/59/Collectible_Shade_icon.png",
            "description": "Spawns a shadow familiar that follows Isaac's movements on a 1 second delay and deals contact damage to enemies. After dealing enough damage, it is absorbed by Isaac and spawns friendly  Chargers.",
            "quality": 0
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5e/Achievement_King_Baby_icon.png",
        "name": " King Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Delirium as  ???",
        "id": 286,
        "item": {
            "name": "King Baby",
            "id": 472,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f9/Collectible_King_Baby_icon.png",
            "description": "Spawns a familiar that follows Isaac and makes other familiars follow it. While firing tears, other familiars stop moving.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1f/Achievement_Bloody_Crown_icon.png",
        "name": " Bloody Crown",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Samson",
        "id": 287
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5a/Achievement_Dull_Razor_icon.png",
        "name": " Dull Razor",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Eve",
        "id": 288,
        "item": {
            "name": "Dull Razor",
            "id": 486,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9e/Collectible_Dull_Razor_icon.png",
            "description": "Hurts Isaac without depleting health, activating any items that trigger upon taking damage.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/24/Achievement_Eden%27s_Soul_icon.png",
        "name": " Eden's Soul",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Eden",
        "id": 289,
        "item": {
            "name": "Eden's Soul",
            "id": 490,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a9/Collectible_Eden%27s_Soul_icon.png",
            "description": "Spawns two item pedestals then is consumed. Begins with no charges.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e5/Achievement_Dark_Prince%27s_Crown_icon.png",
        "name": " Dark Prince's Crown",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Azazel",
        "id": 290,
        "item": {
            "name": "Dark Prince's Crown",
            "id": 442,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/01/Collectible_Dark_Prince%27s_Crown_icon.png",
            "description": " When at exactly one  Red Heart, +0.75 tears, +1.5 range, and +0.2 shot speed. When at exactly one  Red Heart, +2 fire rate, +1.5 range, and +0.2 shot speed.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/72/Achievement_Compound_Fracture_icon.png",
        "name": " Compound Fracture",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Lazarus",
        "id": 291,
        "item": {
            "name": "Compound Fracture",
            "id": 453,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e1/Collectible_Compound_Fracture_icon.png",
            "description": "Increases Range. Tears turn into bones, which shatter into 1-3 bone shards upon hitting an enemy or obstacle.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/09/Achievement_Euthanasia_icon.png",
        "name": " Euthanasia",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Lilith",
        "id": 292,
        "item": {
            "name": "Euthanasia",
            "id": 496,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/ca/Collectible_Euthanasia_icon.png",
            "description": "Adds a luck-based chance to fire needles that instantly kill basic enemies and deal triple damage to bosses. If a needle kills an enemy, it bursts into more tears/needles.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b8/Achievement_Holy_Card_icon.png",
        "name": " Holy Card",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  The Lost",
        "id": 293
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c8/Achievement_Crooked_Penny_icon.png",
        "name": " Crooked Penny",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Keeper",
        "id": 294,
        "item": {
            "name": "Crooked Penny",
            "id": 485,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/65/Collectible_Crooked_Penny_icon.png",
            "description": "Spawns a penny and has a 50% chance to double all items and pickups in the room. If the effect fails, the items and pickups disappear.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ab/Achievement_Void_icon.png",
        "name": " Void",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Apollyon",
        "id": 295,
        "item": {
            "name": "Void",
            "id": 477,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/84/Collectible_Void_icon.png",
            "description": "Consumes all pedestal items in the room. Active items will have their effects added to Void, and passive items will grant random stat upgrades.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3c/Achievement_D1_icon.png",
        "name": " D1",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Isaac",
        "id": 296,
        "item": {
            "name": "D1",
            "id": 476,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6e/Collectible_D1_icon.png",
            "description": "Duplicates a random pickup in the room.  The new pickup may be different than the original (i.e. a different card, etc).",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6a/Achievement_Glyph_of_Balance_icon.png",
        "name": " Glyph of Balance",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Magdalene",
        "id": 297,
        "item": {
            "name": "Glyph of Balance",
            "id": 464,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/50/Collectible_Glyph_of_Balance_icon.png",
            "description": "Grants 2  Soul Hearts and modifies drops from Champion monsters based on certain conditions.  Also modifies room clear drops.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/ff/Achievement_Sack_of_Sacks_icon.png",
        "name": " Sack of Sacks",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Cain",
        "id": 298,
        "item": {
            "name": "Sack of Sacks",
            "id": 500,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1e/Collectible_Sack_of_Sacks_icon.png",
            "description": "Spawns a familiar that drops a  Grab Bag every 5-6 rooms cleared.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/50/Achievement_Eye_of_Belial_icon.png",
        "name": " Eye of Belial",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Judas",
        "id": 299,
        "item": {
            "name": "Eye of Belial",
            "id": 462,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1f/Collectible_Eye_of_Belial_icon.png",
            "description": "Grants piercing tears. After piercing one enemy, tears start homing and deal double damage.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/aa/Achievement_Meconium_icon.png",
        "name": " Meconium",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  ???",
        "id": 300
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/47/Achievement_Stem_Cell_icon.png",
        "name": " Stem Cell",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Samson",
        "id": 301
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/33/Achievement_Crow_Heart_icon.png",
        "name": " Crow Heart",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Eve",
        "id": 302
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c3/Achievement_Metronome_icon.png",
        "name": " Metronome",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Eden",
        "id": 303,
        "item": {
            "name": "Metronome",
            "id": 488,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f2/Collectible_Metronome_icon.png",
            "description": "Grants a random item effect for the current room.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b5/Achievement_Bat_Wing_icon.png",
        "name": " Bat Wing",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Azazel",
        "id": 304
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7d/Achievement_Plan_C_icon.png",
        "name": " Plan C",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Lazarus",
        "id": 305,
        "item": {
            "name": "Plan C",
            "id": 475,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a8/Collectible_Plan_C_icon.png",
            "description": "Kills all enemies in the room, then kills Isaac three seconds later.",
            "quality": 0
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f5/Achievement_Duality_icon.png",
        "name": " Duality",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Lilith",
        "id": 306,
        "item": {
            "name": "Duality",
            "id": 498,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/dc/Collectible_Duality_icon.png",
            "description": "Whenever a Devil Room or Angel Room would spawn after defeating a boss, both rooms spawn. Only one can be entered.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7f/Achievement_Dad%27s_Lost_Coin_icon.png",
        "name": " Dad's Lost Coin",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  The Lost",
        "id": 307,
        "item": {
            "name": "Dad's Lost Coin",
            "id": 455,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d0/Collectible_Dad%27s_Lost_Coin_icon.png",
            "description": "+1.5 range, +1 tear falling speed. Drops a Lucky Penny.+2.5 range. Drops a Lucky Penny.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fd/Achievement_Eye_of_Greed_icon.png",
        "name": " Eye of Greed",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Keeper",
        "id": 308,
        "item": {
            "name": "Eye of Greed",
            "id": 450,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/26/Collectible_Eye_of_Greed_icon.png",
            "description": "Every 20 tears, Isaac loses 1  Penny and shoots an additional gold tear that petrifies enemies and turns them into gold. Any enemy killed while in this state will drop coins.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c3/Achievement_Black_Rune_icon.png",
        "name": " Black Rune",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Apollyon",
        "id": 309
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/99/Achievement_Locust_of_Wrath_icon.png",
        "name": " Locust of Wrath",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Apollyon",
        "id": 310
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/18/Achievement_Locust_of_Pestilence_icon.png",
        "name": " Locust of Pestilence",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Apollyon",
        "id": 311
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7a/Achievement_Locust_of_Famine_icon.png",
        "name": " Locust of Famine",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Apollyon",
        "id": 312
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0e/Achievement_Locust_of_Death_icon.png",
        "name": " Locust of Death",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Apollyon",
        "id": 313
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/19/Achievement_Locust_of_Conquest_icon.png",
        "name": " Locust of Conquest",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Apollyon",
        "id": 314
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ec/Achievement_Hushy_icon.png",
        "name": " Hushy",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Apollyon",
        "id": 315,
        "item": {
            "name": "Hushy",
            "id": 470,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8f/Collectible_Hushy_icon.png",
            "description": "Spawns a  Hush familiar that bounces diagonally around the room and deals contact damage. While firing tears, it stops moving.",
            "quality": 0
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/94/Achievement_Brown_Nugget_icon.png",
        "name": " Brown Nugget",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Apollyon",
        "id": 316,
        "item": {
            "name": "Brown Nugget",
            "id": 504,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/36/Collectible_Brown_Nugget_icon.png",
            "description": "Spawns a stationary fly turret that lasts for the current room and fires tears at nearby enemies.",
            "quality": 0
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/78/Achievement_Mort_Baby_icon.png",
        "name": " Mort Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Apollyon",
        "id": 317
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f5/Achievement_Smelter_icon.png",
        "name": " Smelter",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Mom's Heart or It Lives! on Hard mode as  Apollyon",
        "id": 318,
        "item": {
            "name": "Smelter",
            "id": 479,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fe/Collectible_Smelter_icon.png",
            "description": "Consumes Isaac's currently held trinket and applies its effect permanently.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/19/Achievement_Apollyon_Baby_icon.png",
        "name": " Apollyon Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Apollyon",
        "id": 319
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6c/Achievement_New_Area_icon.png",
        "name": " New Area",
        "description": "Unlocked a new area.",
        "unlock": "Defeat Hush",
        "id": 320
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c2/Achievement_Once_More_with_Feeling%21_icon.png",
        "name": " Once More with Feeling!",
        "description": "Unlocked a new item.",
        "unlock": "Complete a Victory Lap by defeating The Lamb",
        "id": 321
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d1/Achievement_Hat_trick%21_icon.png",
        "name": " Hat trick!",
        "description": "Unlocked a new item.",
        "unlock": "Get a 3-win streak",
        "id": 322
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/44/Achievement_5_Nights_at_Mom%27s_icon.png",
        "name": " 5 Nights at Mom's",
        "description": "Unlocked super special rocks.",
        "unlock": "Get a 5-win streak, using a different character each time ( this number can be reduced to 3, see the notes section)",
        "id": 323
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a9/Achievement_Sin_collector_icon.png",
        "name": " Sin collector",
        "description": "Unlocked a new item.",
        "unlock": "Collect every entry in the Bestiary (bugged v190 - Mobs that don't exist in the bestiary are being counted. This allows Sin Collector to be unlocked without a complete bestiary)",
        "id": 324
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/cc/Achievement_Dedication_icon.png",
        "name": " Dedication",
        "description": "Unlocked a new item.",
        "unlock": "Participate in 31 Daily Challenges (they don't have to be consecutive; it will still count if Isaac dies in the first room)",
        "id": 325
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/52/Achievement_ZIP%21_icon.png",
        "name": " ZIP!",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb in under 20 minutes",
        "id": 326
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d7/Achievement_It%27s_the_Key_icon.png",
        "name": " It's the Key",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb without taking Hearts, Coins, or Bombs through the entire run. Letting certain familiars (e.g. Bum Friend, Dark Bum, Bumbo or Lil Portal) or bosses (e.g. Bumbino) pick up the consumables fails this condition as well.",
        "id": 327
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/62/Achievement_Mr._Resetter%21_icon.png",
        "name": " Mr. Resetter!",
        "description": "Unlocked a new item.",
        "unlock": "Reset 7 times in a rowSwitchPS4 Get a minus 10-win streak",
        "id": 328
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/03/Achievement_Living_on_the_edge_icon.png",
        "name": " Living on the edge",
        "description": "Unlocked a new item.",
        "unlock": "Complete a Chapter (floors I and II) after Basement, start-to-finish, with only half a Heart total (can use  The Lost)",
        "id": 329
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/34/Achievement_U_Broke_It%21_icon.png",
        "name": " U Broke It!",
        "description": "Unlocked a new item.",
        "unlock": "Obtain 50 items in a run (duplicate passive items/familiars count towards the total, e.g., multiple Breakfast)",
        "id": 330
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/50/Achievement_Laz_Bleeds_More%21_icon.png",
        "name": " Laz Bleeds More!",
        "description": "Unlocked a new starting item.",
        "unlock": "Complete Backasswards (challenge #31)",
        "id": 331
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/92/Achievement_Maggy_Now_Holds_a_Pill%21_icon.png",
        "name": " Maggy Now Holds a Pill!",
        "description": "Unlocked a new starting item.",
        "unlock": "Complete Aprils Fool (challenge #32)",
        "id": 332
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5b/Achievement_Charged_Key_icon.png",
        "name": " Charged Key",
        "description": "Unlocked a new item.",
        "unlock": "Complete Pokey Mans (challenge #33)",
        "id": 333
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/56/Achievement_Samson_Feels_Healthy%21_icon.png",
        "name": " Samson Feels Healthy!",
        "description": "Unlocked a new starting item.",
        "unlock": "Complete Ultra Hard (challenge #34)",
        "id": 334
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/48/Achievement_Greed%27s_Gullet_icon.png",
        "name": " Greed's Gullet",
        "description": "Unlocked a new item.",
        "unlock": "Complete Pong (challenge #35)",
        "id": 335,
        "item": {
            "name": "Greed's Gullet",
            "id": 501,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/23/Collectible_Greed%27s_Gullet_icon.png",
            "description": "Grants a Red Heart container for every 25  Coins Isaac has.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/86/Achievement_The_Marathon_icon.png",
        "name": " The Marathon",
        "description": "Unlocked a new item.",
        "unlock": "Get a 5-win streak in the Daily Challenges (they don't have to be consecutive days, only the runs you play are counted)",
        "id": 336
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/83/Achievement_RERUN_icon.png",
        "name": " RERUN",
        "description": "Unlocked the power of RERUN.",
        "unlock": "Complete 3 Victory Laps by defeating The Lamb",
        "id": 337
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/10/Achievement_Delirious_icon.png",
        "name": " Delirious",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium",
        "id": 338,
        "item": {
            "name": "Delirious",
            "id": 510,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/aa/Collectible_Delirious_icon.png",
            "description": "Spawns  Delirium as a random friendly boss that fights for Isaac.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/15/Achievement_1000000%25_icon.png",
        "name": " 1000000%",
        "description": "Just Stop!",
        "unlock": "Collect every item in the game, unlock all secrets and endings, and complete the Bestiary",
        "id": 339
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/03/Achievement_Apollyon_icon.png",
        "name": " Apollyon",
        "description": "Unlocked a new character.",
        "unlock": "Defeat Mega Satan",
        "id": 340
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d7/Achievement_Greedier%21_icon.png",
        "name": " Greedier!",
        "description": "New mode unlocked!",
        "unlock": "Donate 500 Coins to the Greed Donation Machine",
        "id": 341
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3e/Achievement_Burning_Basement_icon.png",
        "name": " Burning Basement",
        "description": "Alt stage to the basement.",
        "unlock": "Defeat Mom's Heart 11 times",
        "id": 342
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e7/Achievement_Flooded_Caves_icon.png",
        "name": " Flooded Caves",
        "description": "Alt stage to the caves.",
        "unlock": "Defeat It Lives! 16 times",
        "id": 343
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2a/Achievement_Dank_Depths_icon.png",
        "name": " Dank Depths",
        "description": "Alt stage to the depths.",
        "unlock": "Defeat It Lives! 21 times",
        "id": 344
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/59/Achievement_Scarred_Womb_icon.png",
        "name": " Scarred Womb",
        "description": "Alt stage to the womb.",
        "unlock": "Defeat It Lives! 30 times",
        "id": 345
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0c/Achievement_Something_wicked_this_way_comes%21_icon.png",
        "name": " Something wicked this way comes!",
        "description": "Unlocked new bosses!",
        "unlock": "Defeat ??? as 3 different Characters",
        "id": 346
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b9/Achievement_Something_Wicked_This_Way_Comes_%E2%80%A0_icon.png",
        "name": " Something wicked this way comes+!",
        "description": "Unlocked even more bosses!",
        "unlock": "Defeat ??? as 6 different Characters",
        "id": 347
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/98/Achievement_The_gate_is_open%21_icon.png",
        "name": " The gate is open!",
        "description": "Unlocked new enemies!",
        "unlock": "Defeat The Lamb",
        "id": 348
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e8/Achievement_Black_Hole_icon.png",
        "name": " Black Hole",
        "description": "Unlocked a new item.",
        "unlock": "Defeat 20 Portals",
        "id": 349,
        "item": {
            "name": "Black Hole",
            "id": 512,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0e/Collectible_Black_Hole_icon.png",
            "description": "Throws a black hole on the ground which sucks in and damages enemies and destroys nearby obstacles.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/74/Achievement_Mystery_Gift_icon.png",
        "name": " Mystery Gift",
        "description": "Unlocked a new item.",
        "unlock": "Destroy 500 rocks",
        "id": 350,
        "item": {
            "name": "Mystery Gift",
            "id": 515,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/36/Collectible_Mystery_Gift_icon.png",
            "description": "Spawns a random item from the current room's item pool, with a chance to spawn A Lump of Coal or The Poop instead.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/73/Achievement_Sprinkler_icon.png",
        "name": " Sprinkler",
        "description": "Unlocked a new item.",
        "unlock": "Beat Chapter 1 without taking damage",
        "id": 351,
        "item": {
            "name": "Sprinkler",
            "id": 516,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e5/Collectible_Sprinkler_icon.png",
            "description": "Creates a stationary sprinkler for the current room that rotates and fires tears in 8 directions. The tears copy Isaac's stats and most tear effects.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/23/Achievement_Angry_Fly_icon.png",
        "name": " Angry Fly",
        "description": "Unlocked a new item.",
        "unlock": "Become Beelzebub",
        "id": 352,
        "item": {
            "name": "Angry Fly",
            "id": 511,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/07/Collectible_Angry_Fly_icon.png",
            "description": "Spawns a fly familiar that orbits around a random enemy and deals 30 damage per second to enemies it comes in contact with.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1d/Achievement_Bozo_icon.png",
        "name": " Bozo",
        "description": "Unlocked a new item.",
        "unlock": "Destroy 5 rainbow poops",
        "id": 353,
        "item": {
            "name": "Bozo",
            "id": 513,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c6/Collectible_Bozo_icon.png",
            "description": "+0.1 flat damage, grants a  Soul Heart. Enemies can randomly become briefly charmed or feared. Taking damage has a chance to spawn a  Rainbow Poop.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/aa/Achievement_Broken_Modem_icon.png",
        "name": " Broken Modem",
        "description": "Unlocked a new item.",
        "unlock": "Complete 7 Daily Challenges (by touching the trophy at the end)",
        "id": 354,
        "item": {
            "name": "Broken Modem",
            "id": 514,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6c/Collectible_Broken_Modem_icon.png",
            "description": "Enemies, enemy shots, tears, and pickups will briefly freeze in place at random intervals. The reward from clearing a room will sometimes be duplicated.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5d/Achievement_Buddy_in_a_Box_icon.png",
        "name": " Buddy in a Box",
        "description": "Unlocked a new item.",
        "unlock": "Pick up 5 familiars in a single run",
        "id": 355,
        "item": {
            "name": "Buddy in a Box",
            "id": 518,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/af/Collectible_Buddy_in_a_Box_icon.png",
            "description": "Spawns a familiar with a random tear effect. The familiar is randomized at the start of each floor.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/33/Achievement_Fast_Bombs_icon.png",
        "name": " Fast Bombs",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Little Horn 20 times",
        "id": 356,
        "item": {
            "name": "Fast Bombs",
            "id": 517,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ee/Collectible_Fast_Bombs_icon.png",
            "description": "+7  Bombs. Removes the delay between bomb placements, allowing them to be placed rapidly.  Bombs will no longer knock each other away.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f9/Achievement_Lil_Delirium_icon.png",
        "name": " Lil Delirium",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium for the 1st time",
        "id": 357,
        "item": {
            "name": "Lil Delirium",
            "id": 519,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7d/Collectible_Lil_Delirium_icon.png",
            "description": "Grants a familiar that transforms into another random familiar every 10 seconds.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/44/Achievement_Hairpin_icon.png",
        "name": " Hairpin",
        "description": "Unlocked a new item.",
        "unlock": "Recharge using Lil' Batteries 20 times",
        "id": 358
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/74/Achievement_Wooden_Cross_icon.png",
        "name": " Wooden Cross",
        "description": "Unlocked a new item.",
        "unlock": "Sleep in a bed",
        "id": 359
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3c/Achievement_Butter%21_icon.png",
        "name": " Butter!",
        "description": "Unlocked a new item.",
        "unlock": "Complete 2 Victory Laps by defeating The Lamb",
        "id": 360
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/94/Achievement_Huge_Growth_icon.png",
        "name": " Huge Growth",
        "description": "Unlocked a new item.",
        "unlock": "Increase in size 5 times in a single run via Magic Mushroom, \"One makes you larger\" pills, XI - Strength, etc.",
        "id": 361
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/19/Achievement_Ancient_Recall_icon.png",
        "name": " Ancient Recall",
        "description": "Unlocked a new item.",
        "unlock": "Use Cards and Runes 20 times",
        "id": 362
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/ce/Achievement_Era_Walk_icon.png",
        "name": " Era Walk",
        "description": "Unlocked a new item.",
        "unlock": "Add both the Broken Watch and the Stop Watch to your collection",
        "id": 363
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/26/Achievement_Coupon_icon.png",
        "name": " Coupon",
        "description": "Unlocked a new item.",
        "unlock": "Purchase anything from Shops, Devil Rooms, and/or Black Markets 50 times",
        "id": 364,
        "item": {
            "name": "Coupon",
            "id": 521,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/90/Collectible_Coupon_icon.png",
            "description": "While held, guarantees one item in every Shop will be on sale. On use, makes a random item in the current room free.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/69/Achievement_Telekinesis_icon.png",
        "name": " Telekinesis",
        "description": "Unlocked a new item.",
        "unlock": "Beat Chapter 2 without taking damage",
        "id": 365,
        "item": {
            "name": "Telekinesis",
            "id": 522,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4e/Collectible_Telekinesis_icon.png",
            "description": "Any enemy shots that come near Isaac for the next three seconds are held in place then fired back.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/07/Achievement_Moving_Box_icon.png",
        "name": " Moving Box",
        "description": "Unlocked a new item.",
        "unlock": "Use Pandora's Box in Dark Room",
        "id": 366,
        "item": {
            "name": "Moving Box",
            "id": 523,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/87/Collectible_Moving_Box_icon.png",
            "description": "If the box is empty, picks up items and pickups in a room and stores them. If the box is not empty, places all stored items and pickups in the current room.  Can carry up to 10 items or pickups at once.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/68/Achievement_Jumper_Cables_icon.png",
        "name": " Jumper Cables",
        "description": "Unlocked a new item.",
        "unlock": "Pick up any 2 of the following items/trinkets in a single run: 9 Volt, The Battery, Car Battery, AAA Battery, and Watch Battery ( Any 2 items that have the 'battery' item tag)",
        "id": 367,
        "item": {
            "name": "Jumper Cables",
            "id": 520,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0c/Collectible_Jumper_Cables_icon.png",
            "description": "Grants an active item charge every 15 enemies killed.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7b/Achievement_Leprosy_icon.png",
        "name": " Leprosy",
        "description": "Unlocked a new item.",
        "unlock": "Beat Chapter 3 without taking damage",
        "id": 368,
        "item": {
            "name": "Leprosy",
            "id": 525,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/01/Collectible_Leprosy_icon.png",
            "description": "Taking damage grants a body part orbital that blocks shots and deals contact damage, up to a maximum of three. The body parts are destroyed after blocking enough damage.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2f/Achievement_Technology_Zero_icon.png",
        "name": " Technology Zero",
        "description": "Unlocked a new item.",
        "unlock": "Pick up any 2 technology items in a single run ( Any 2 items that have the 'tech' item tag)",
        "id": 369,
        "item": {
            "name": "Technology Zero",
            "id": 524,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3b/Collectible_Technology_Zero_icon.png",
            "description": "Connects Isaac's tears with electricity that can damage enemies.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b0/Achievement_Filigree_Feather_icon.png",
        "name": " Filigree Feather",
        "description": "Unlocked a new item.",
        "unlock": "Acquire both Key Piece 1 and Key Piece 2",
        "id": 370
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e6/Achievement_Mr._ME%21_icon.png",
        "name": " Mr. ME!",
        "description": "Unlocked a new item.",
        "unlock": "Open 20 Locked Chests",
        "id": 371,
        "item": {
            "name": "Mr. ME!",
            "id": 527,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/da/Collectible_Mr._ME%21_icon.png",
            "description": "Summons a controllable ghost that can perform various tasks depending on what it targets.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/42/Achievement_7_Seals_icon.png",
        "name": " 7 Seals",
        "description": "Unlocked a new item.",
        "unlock": "Defeat all 5 Harbingers",
        "id": 372,
        "item": {
            "name": "7 Seals",
            "id": 526,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/90/Collectible_7_Seals_icon.png",
            "description": "Spawns a random Harbinger familiar that changes every 10 seconds. Harbingers have different behaviors and spawn themed Locusts.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/41/Achievement_Angelic_Prism_icon.png",
        "name": " Angelic Prism",
        "description": "Unlocked a new item.",
        "unlock": "Defeat an Angel 10 times",
        "id": 373,
        "item": {
            "name": "Angelic Prism",
            "id": 528,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c7/Collectible_Angelic_Prism_icon.png",
            "description": "Spawns an orbital familiar with a large orbital radius. Tears that pass through the prism split into four multi-colored tears.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/27/Achievement_Pop%21_icon.png",
        "name": " Pop!",
        "description": "Unlocked a new item.",
        "unlock": "Beat Chapter 4 without taking damage",
        "id": 374,
        "item": {
            "name": "Pop!",
            "id": 529,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/76/Collectible_Pop%21_icon.png",
            "description": "Replaces Isaac's tears with eyeballs that can bounce off of each other. The eyeballs are not limited by range, and will instead dissipate when they stop moving or when hitting an enemy or obstacle.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/99/Achievement_Door_Stop_icon.png",
        "name": " Door Stop",
        "description": "Unlocked a new item.",
        "unlock": "Blow up doors and Secret Room walls 50 times",
        "id": 375
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b1/Achievement_Death%27s_List_icon.png",
        "name": " Death's List",
        "description": "Unlocked a new item.",
        "unlock": "Take 25 Deals with the Devil",
        "id": 376,
        "item": {
            "name": "Death's List",
            "id": 530,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9d/Collectible_Death%27s_List_icon.png",
            "description": "Grants a pickup or stat upgrade if all enemies in a room are killed in the order they are marked.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5b/Achievement_Haemolacria_icon.png",
        "name": " Haemolacria",
        "description": "Unlocked a new item.",
        "unlock": "Acquire Blood Clot 10 times",
        "id": 377,
        "item": {
            "name": "Haemolacria",
            "id": 531,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/48/Collectible_Haemolacria_icon.png",
            "description": "Tears are now fired in an arc. Upon hitting the floor, an obstacle, or an enemy, they burst into many smaller tears in all directions. Increases tear delay.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2b/Achievement_Lachryphagy_icon.png",
        "name": " Lachryphagy",
        "description": "Unlocked a new item.",
        "unlock": "Collect 10 \"Tears Up\" items or pills in one run",
        "id": 378,
        "item": {
            "name": "Lachryphagy",
            "id": 532,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/30/Collectible_Lachryphagy_icon.png",
            "description": "Isaac's tears decelerate as they travel. Upon stopping or hitting an obstacle, they burst into 8 tears in all directions. Tears can be fired into other tears to feed them, increasing their damage.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6d/Achievement_Schoolbag_icon.png",
        "name": " Schoolbag",
        "description": "Unlocked a new item.",
        "unlock": "Enter 6 Shops in one run",
        "id": 379,
        "item": {
            "name": "Schoolbag",
            "id": 534,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d7/Collectible_Schoolbag_icon.png",
            "description": "Allows Isaac to hold two active items.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ae/Achievement_Trisagion_icon.png",
        "name": " Trisagion",
        "description": "Unlocked a new item.",
        "unlock": "Take 25 Angel Rooms items",
        "id": 380,
        "item": {
            "name": "Trisagion",
            "id": 533,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/25/Collectible_Trisagion_icon.png",
            "description": "Tears are replaced with piercing white blasts of light that deal less damage but can damage the same enemy multiple times.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a7/Achievement_Extension_Cord_icon.png",
        "name": " Extension Cord",
        "description": "Unlocked a new item.",
        "unlock": "Have The Battery, 9 Volt, and Car Battery in Isaac's collection",
        "id": 381
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7d/Achievement_Flat_Stone_icon.png",
        "name": " Flat Stone",
        "description": "Unlocked a new item.",
        "unlock": "Acquire Rubber Cement 5 times",
        "id": 382,
        "item": {
            "name": "Flat Stone",
            "id": 540,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/46/Collectible_Flat_Stone_icon.png",
            "description": "Tears bounce off the floor, creating splashes. Splashes deal 25% of Isaac's tear damage to all enemies in a small area.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/dc/Achievement_Sacrificial_Altar_icon.png",
        "name": " Sacrificial Altar",
        "description": "Unlocked a new item.",
        "unlock": "Take 50 Deals with the Devil",
        "id": 383,
        "item": {
            "name": "Sacrificial Altar",
            "id": 536,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a5/Collectible_Sacrificial_Altar_icon.png",
            "description": "Sacrifices up to 2 familiars and spawns an item for each familiar sacrificed. Converts all friendly spiders and flies into coins.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0e/Achievement_Lil_Spewer_icon.png",
        "name": " Lil Spewer",
        "description": "Unlocked a new item.",
        "unlock": "Have Isaac die to his own explosion from Ipecac, Bob's Rotten Head, or a Horf! pill",
        "id": 384,
        "item": {
            "name": "Lil Spewer",
            "id": 537,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a3/Collectible_Lil_Spewer_icon.png",
            "description": "Drops a random pill, and spawns a familiar that charges up and fires creep. Using pills changes the creep type.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a6/Achievement_Blanket_icon.png",
        "name": " Blanket",
        "description": "Unlocked a new item.",
        "unlock": "Sleep in 10 beds",
        "id": 385,
        "item": {
            "name": "Blanket",
            "id": 535,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e2/Collectible_Blanket_icon.png",
            "description": "Grants one  Soul Heart. Upon entering a boss room, grants a shield that blocks one hit, then disappears.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e7/Achievement_Marbles_icon.png",
        "name": " Marbles",
        "description": "Unlocked a new item.",
        "unlock": "Use 5 Gulp! pills in one run (Placebo uses count)",
        "id": 386,
        "item": {
            "name": "Marbles",
            "id": 538,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/38/Collectible_Marbles_icon.png",
            "description": "Spawns 3 random trinkets. Taking damage has a 5% chance to swallow Isaac's currently held trinket, gaining its effect permanently.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/20/Achievement_Mystery_Egg_icon.png",
        "name": " Mystery Egg",
        "description": "Unlocked a new item.",
        "unlock": "Spawn three charmed enemies in the same room",
        "id": 387,
        "item": {
            "name": "Mystery Egg",
            "id": 539,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5f/Collectible_Mystery_Egg_icon.png",
            "description": "Spawns an egg familiar, which hatches a random friendly monster when Isaac is hurt once per room. The power of the monster improves for each consecutive room cleared without taking damage.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fc/Achievement_Rotten_Penny_icon.png",
        "name": " Rotten Penny",
        "description": "Unlocked a new item.",
        "unlock": "Have 20 Blue Flies at the same time",
        "id": 388
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a1/Achievement_Baby-Bender_icon.png",
        "name": " Baby-Bender",
        "description": "Unlocked a new item.",
        "unlock": "Use I - The Magician or Telepathy For Dummies while already having homing tears",
        "id": 389
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f2/Achievement_The_Forgotten_icon.png",
        "name": " The Forgotten",
        "description": "Unlocked a new character.",
        "unlock": "It's complicated",
        "id": 390
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/89/Achievement_Bone_Heart_icon.png",
        "name": " Bone Heart",
        "description": "Unlocked a new item.",
        "unlock": "It's complicated",
        "id": 391
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/73/Achievement_Marrow_icon.png",
        "name": " Marrow",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Mom's Heart or It Lives! on Hard mode as  The Forgotten",
        "id": 392,
        "item": {
            "name": "Marrow",
            "id": 541,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/59/Collectible_Marrow_icon.png",
            "description": "Grants one  Bone Heart and spawns three  Red Hearts.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/71/Achievement_Slipped_Rib_icon.png",
        "name": " Slipped Rib",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  The Forgotten",
        "id": 393,
        "item": {
            "name": "Slipped Rib",
            "id": 542,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/77/Collectible_Slipped_Rib_icon.png",
            "description": "Spawns a bone familiar that circles around Isaac and reflects enemy shots.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/33/Achievement_Pointy_Rib_icon.png",
        "name": " Pointy Rib",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  The Forgotten",
        "id": 394,
        "item": {
            "name": "Pointy Rib",
            "id": 544,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b4/Collectible_Pointy_Rib_icon.png",
            "description": "Spawns a bone familiar that hovers back and forth in front of Isaac, dealing damage equal to Isaac's damage.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/44/Achievement_Jaw_Bone_icon.png",
        "name": " Jaw Bone",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  The Forgotten",
        "id": 395,
        "item": {
            "name": "Jaw Bone",
            "id": 548,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/bc/Collectible_Jaw_Bone_icon.png",
            "description": "Spawns a familiar that flies through the room while firing, dealing a flat 7 contact damage to enemies and retrieving pickups.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2b/Achievement_Brittle_Bones_icon.png",
        "name": " Brittle Bones",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  The Forgotten",
        "id": 396,
        "item": {
            "name": "Brittle Bones",
            "id": 549,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/49/Collectible_Brittle_Bones_icon.png",
            "description": "Replaces all  Red Heart Containers with 6 empty  Bone Hearts.  Upon losing a Bone Heart, Isaac fires bones in 8 directions and permanently gains a tears up.  Upon losing a Bone Heart, Isaac fires bones in 8 directions and permanently gains a fire rate up.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/21/Achievement_Divorce_Papers_icon.png",
        "name": " Divorce Papers",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  The Forgotten",
        "id": 397,
        "item": {
            "name": "Divorce Papers",
            "id": 547,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8e/Collectible_Divorce_Papers_icon.png",
            "description": "Grants one  Bone Heart, +0.7 tears, spawns a Mysterious Paper.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fe/Achievement_Hallowed_Ground_icon.png",
        "name": " Hallowed Ground",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  The Forgotten",
        "id": 398,
        "item": {
            "name": "Hallowed Ground",
            "id": 543,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/51/Collectible_Hallowed_Ground_icon.png",
            "description": "Spawns a white poop familiar, which turns into a  White Poop when Isaac is hurt. White poop has an aura that increases tear fire rate and can block enemy shots.  The aura also increases damage by 20% and gives homing.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f1/Achievement_Finger_Bone_icon.png",
        "name": " Finger Bone",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  The Forgotten",
        "id": 399
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/26/Achievement_Dad%27s_Ring_icon.png",
        "name": " Dad's Ring",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  The Forgotten",
        "id": 400,
        "item": {
            "name": "Dad's Ring",
            "id": 546,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e5/Collectible_Dad%27s_Ring_icon.png",
            "description": "Creates a ring of light around Isaac that petrifies enemies in contact.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a7/Achievement_Book_of_the_Dead_icon.png",
        "name": " Book of the Dead",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  The Forgotten",
        "id": 401,
        "item": {
            "name": "Book of the Dead",
            "id": 545,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/47/Collectible_Book_of_the_Dead_icon.png",
            "description": " Creates a friendly  Bony,  Black Bony, or an orbital bone for each enemy killed in the current room.Creates a friendly  Bony,  Black Bony,  Bone Fly,  Revenant, or an orbital bone for each enemy killed in the current room.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d6/Achievement_Bone_Baby_icon.png",
        "name": " Bone Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  The Forgotten",
        "id": 402
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5a/Achievement_Bound_Baby_icon.png",
        "name": " Bound Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  The Forgotten",
        "id": 403
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e6/Achievement_Bethany_icon.png",
        "name": " Bethany",
        "description": "Beat Hard mode as Lazarus without losing a life",
        "unlock": "Defeat Mom's Heart/It Lives! on hard mode as  Lazarus, without dying at all",
        "id": 404
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3b/Achievement_Jacob_and_Esau_icon.png",
        "name": " Jacob and Esau",
        "description": "You are just like your father...",
        "unlock": "Defeat Mother",
        "id": 405
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/81/Achievement_The_Planetarium_icon.png",
        "name": " The Planetarium",
        "description": "Kids shouldn't believe in fortunes...",
        "unlock": "Collect any 3 items with the 'stars' item tag in a single run",
        "id": 406
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/26/Achievement_A_Secret_Exit_icon.png",
        "name": " A Secret Exit",
        "description": "Complete  ??? 3 times.",
        "unlock": "Defeat Hush 3 times",
        "id": 407
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c6/Achievement_Forgotten_Lullaby_icon.png",
        "name": " Forgotten Lullaby",
        "description": "Get that song out of her head.",
        "unlock": "Blow up The Siren's skull after defeating her",
        "id": 408
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4c/Achievement_Fruity_Plum_icon.png",
        "name": " Fruity Plum",
        "description": "Defeat Baby Plum 10 times.",
        "unlock": "Defeat Baby Plum 10 times",
        "id": 409,
        "item": {
            "name": "Fruity Plum",
            "id": 649,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/66/Collectible_Fruity_Plum_icon.png",
            "description": "Gives Isaac a miniature  Baby Plum familiar that propels itself diagonally around the room, firing tears behind itself as it travels.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6c/Achievement_Plum_Flute_icon.png",
        "name": " Plum Flute",
        "description": "Make a new friend!",
        "unlock": "Allow Baby Plum to escape instead of defeating her",
        "id": 410,
        "item": {
            "name": "Plum Flute",
            "id": 650,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4b/Collectible_Plum_Flute_icon.png",
            "description": "Summons the boss  Baby Plum to fight for Isaac in the current room.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/58/Achievement_Rotten_Heart_icon.png",
        "name": " Rotten Heart",
        "description": "Enter the Corpse...",
        "unlock": "Enter Corpse for the first time",
        "id": 411
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/96/Achievement_Dross_icon.png",
        "name": " Dross",
        "description": "Defeat all bosses in Downpour.",
        "unlock": "Defeat all bosses in Downpour",
        "id": 412
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/09/Achievement_Ashpit_icon.png",
        "name": " Ashpit",
        "description": "Defeat all bosses in the Mines.",
        "unlock": "Defeat all bosses in Mines",
        "id": 413
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/90/Achievement_Gehenna_icon.png",
        "name": " Gehenna",
        "description": "Defeat all bosses in the Mausoleum.",
        "unlock": "Defeat all bosses in Mausoleum",
        "id": 414
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/05/Achievement_Red_Key_icon.png",
        "name": " Red Key",
        "description": "The other side is calling...",
        "unlock": "Open Mom's Chest in Home",
        "id": 415,
        "item": {
            "name": "Red Key",
            "id": 580,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1f/Collectible_Red_Key_icon.png",
            "description": "Creates a Red Room adjacent to a viable wall, indicated by the outline of a door. These rooms have a 10% chance to be a special room.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/98/Achievement_Wisp_Baby_icon.png",
        "name": " Wisp Baby",
        "description": "Beat the game in Hard mode with Bethany.",
        "unlock": "Defeat Mom's Heart or It Lives! on Hard mode as  Bethany",
        "id": 416
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/35/Achievement_Book_of_Virtues_icon.png",
        "name": " Book of Virtues",
        "description": "Complete the Cathedral with Bethany.",
        "unlock": "Defeat Isaac as  Bethany",
        "id": 417,
        "item": {
            "name": "Book of Virtues",
            "id": 584,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5e/Collectible_Book_of_Virtues_icon.png",
            "description": "Spawns a destroyable orbiting wisp familiar that fires tears and deals contact damage. Also acts as a passive item that causes other active items to spawn themed wisps.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/ba/Achievement_Urn_of_Souls_icon.png",
        "name": " Urn of Souls",
        "description": "Complete Sheol with Bethany.",
        "unlock": "Defeat Satan as  Bethany",
        "id": 418,
        "item": {
            "name": "Urn of Souls",
            "id": 640,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/79/Collectible_Urn_of_Souls_icon.png",
            "description": "Spews a stream of damaging flame. Gains Soul Charges each time an enemy dies, which are used to fuel the urn.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/25/Achievement_Blessed_Penny_icon.png",
        "name": " Blessed Penny",
        "description": "Complete the Chest with Bethany.",
        "unlock": "Defeat ??? as  Bethany",
        "id": 419
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5f/Achievement_Alabaster_Box_icon.png",
        "name": " Alabaster Box",
        "description": "Complete the Dark Room with Bethany.",
        "unlock": "Defeat The Lamb as  Bethany",
        "id": 420,
        "item": {
            "name": "Alabaster Box",
            "id": 585,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fd/Collectible_Alabaster_Box_icon.png",
            "description": "Spawns three  Soul Hearts and two Angel Room items and is consumed. Starts with no charges, and can only be charged by picking up 6 Soul Hearts.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/af/Achievement_Beth%27s_Faith_icon.png",
        "name": " Beth's Faith",
        "description": "Complete Boss Rush with Bethany.",
        "unlock": "Complete the Boss Rush as  Bethany",
        "id": 421
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/22/Achievement_Soul_Locket_icon.png",
        "name": " Soul Locket",
        "description": "Beat Greed mode with Bethany.",
        "unlock": "Defeat Ultra Greed as  Bethany",
        "id": 422,
        "item": {
            "name": "Soul Locket",
            "id": 686,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fc/Collectible_Soul_Locket_icon.png",
            "description": "Gives Isaac a permanent stat boost whenever he picks up a  Soul Heart.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b5/Achievement_Divine_Intervention_icon.png",
        "name": " Divine Intervention",
        "description": "Complete  ??? with Bethany.",
        "unlock": "Defeat Hush as  Bethany",
        "id": 423,
        "item": {
            "name": "Divine Intervention",
            "id": 568,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/86/Collectible_Divine_Intervention_icon.png",
            "description": "Double tapping a fire key creates a shield that pushes away enemies and reflects enemy projectiles and lasers.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ad/Achievement_Vade_Retro_icon.png",
        "name": " Vade Retro",
        "description": "Beat Greedier mode with Bethany.",
        "unlock": "Defeat Ultra Greedier as  Bethany",
        "id": 424,
        "item": {
            "name": "Vade Retro",
            "id": 653,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1b/Collectible_Vade_Retro_icon.png",
            "description": "While held, enemies leave behind ghosts on death. Stronger enemies leave bigger ghosts. Using the item causes the ghosts to explode and damage nearby enemies, and instantly kills all ghost enemies with less than 50% HP.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ed/Achievement_Star_of_Bethlehem_icon.png",
        "name": " Star of Bethlehem",
        "description": "Beat the Void with Bethany.",
        "unlock": "Defeat Delirium as  Bethany",
        "id": 425,
        "item": {
            "name": "Star of Bethlehem",
            "id": 651,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/07/Collectible_Star_of_Bethlehem_icon.png",
            "description": "Spawns a star familiar that slowly travels towards the Boss Room, giving an aura that increases damage and tears and grants homing tears.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0a/Achievement_Hope_Baby_icon.png",
        "name": " Hope Baby",
        "description": "Beat everything in Hard mode with Bethany.",
        "unlock": "Earn all Hard mode Completion Marks as  Bethany",
        "id": 426
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/27/Achievement_Glowing_Baby_icon.png",
        "name": " Glowing Baby",
        "description": "Defeat Mega Satan with Bethany.",
        "unlock": "Defeat Mega Satan as  Bethany",
        "id": 427
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a1/Achievement_Double_Baby_icon.png",
        "name": " Double Baby",
        "description": "Beat the game in Hard mode with Jacob and Esau.",
        "unlock": "Defeat Mom's Heart or It Lives! on Hard mode as  Jacob and Esau",
        "id": 428
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d1/Achievement_The_Stairway_icon.png",
        "name": " The Stairway",
        "description": "Complete the Cathedral with Jacob and Esau.",
        "unlock": "Defeat Isaac as  Jacob and Esau",
        "id": 429,
        "item": {
            "name": "The Stairway",
            "id": 586,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e9/Collectible_The_Stairway_icon.png",
            "description": "Generates a ladder at the start of every floor that leads to a unique Angel Room shop.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5b/Achievement_Red_Stew_icon.png",
        "name": " Red Stew",
        "description": "Complete Sheol with Jacob and Esau.",
        "unlock": "Defeat Satan as  Jacob and Esau",
        "id": 430,
        "item": {
            "name": "Red Stew",
            "id": 621,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a6/Collectible_Red_Stew_icon.png",
            "description": "Refills all heart containers. Grants an enormous damage boost that wears off over time.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9b/Achievement_Birthright_icon.png",
        "name": " Birthright",
        "description": "Complete the Chest with Jacob and Esau.",
        "unlock": "Defeat ??? as  Jacob and Esau",
        "id": 431,
        "item": {
            "name": "Birthright",
            "id": 619,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/70/Collectible_Birthright_icon.png",
            "description": "Grants a character-specific effect that enhances their special abilities.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3e/Achievement_Damocles_icon.png",
        "name": " Damocles",
        "description": "Complete the Dark Room with Jacob and Esau.",
        "unlock": "Defeat The Lamb as  Jacob and Esau",
        "id": 432,
        "item": {
            "name": "Damocles",
            "id": 577,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d1/Collectible_Damocles_icon.png",
            "description": "Spawns a sword above Isaac's head, which doubles all item pedestals. After Isaac takes damage, the sword can randomly fall at any point, instantly killing him.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b9/Achievement_Rock_Bottom_icon.png",
        "name": " Rock Bottom",
        "description": "Complete Boss Rush with Jacob and Esau.",
        "unlock": "Complete Boss Rush as  Jacob and Esau",
        "id": 433,
        "item": {
            "name": "Rock Bottom",
            "id": 562,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a5/Collectible_Rock_Bottom_icon.png",
            "description": "Locks Isaac's attributes to their highest values reached.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/95/Achievement_Inner_Child_icon.png",
        "name": " Inner Child",
        "description": "Beat Greed mode with Jacob and Esau.",
        "unlock": "Defeat Ultra Greed as  Jacob and Esau",
        "id": 434,
        "item": {
            "name": "Inner Child",
            "id": 688,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/00/Collectible_Inner_Child_icon.png",
            "description": "Upon death, Isaac respawns in the current room with half of a  Red Heart, a massive size down, and +0.2 Speed.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/48/Achievement_Vanishing_Twin_icon.png",
        "name": " Vanishing Twin",
        "description": "Complete  ??? with Jacob and Esau.",
        "unlock": "Defeat Hush as  Jacob and Esau",
        "id": 435,
        "item": {
            "name": "Vanishing Twin",
            "id": 697,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/58/Collectible_Vanishing_Twin_icon.png",
            "description": "Spawns a familiar that becomes a weaker clone of the floor's boss when entering the Boss Room. Defeating it drops an extra item.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/10/Achievement_Genesis_icon.png",
        "name": " Genesis",
        "description": "Beat Greedier mode with Jacob and Esau.",
        "unlock": "Defeat Ultra Greedier as  Jacob and Esau",
        "id": 436,
        "item": {
            "name": "Genesis",
            "id": 622,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/55/Collectible_Genesis_icon.png",
            "description": "Removes all of Isaac's items and pickups and takes him to a unique Bedroom with some pickups and  Chests and a trapdoor to the next floor. For every item Isaac lost, he gets to take an item from a set of three.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b9/Achievement_Suplex%21_icon.png",
        "name": " Suplex!",
        "description": "Complete the Void with Jacob and Esau.",
        "unlock": "Defeat Delirium as  Jacob and Esau",
        "id": 437,
        "item": {
            "name": "Suplex!",
            "id": 709,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/76/Collectible_Suplex%21_icon.png",
            "description": "Isaac dashes forward and picks up the first enemy hit. After a moment, he slams them into the ground to deal damage and create a circular rock wave.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e6/Achievement_Solomon%27s_Baby_icon.png",
        "name": " Solomon's Baby",
        "description": "Beat everything in Hard mode with Jacob and Esau.",
        "unlock": "Earn all Hard mode Completion Marks as  Jacob and Esau",
        "id": 438
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/68/Achievement_Illusion_Baby_icon.png",
        "name": " Illusion Baby",
        "description": "Defeat Mega Satan with Jacob and Esau.",
        "unlock": "Defeat Mega Satan as  Jacob and Esau",
        "id": 439
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/42/Achievement_Meat_Cleaver_icon.png",
        "name": " Meat Cleaver",
        "description": "Complete the Corpse with Isaac.",
        "unlock": "Defeat Mother as  Isaac",
        "id": 440,
        "item": {
            "name": "Meat Cleaver",
            "id": 631,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/67/Collectible_Meat_Cleaver_icon.png",
            "description": "Splits all enemies in the room into two smaller versions of themselves with much less health.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/51/Achievement_Options%3F_icon.png",
        "name": " Options?",
        "description": "Complete the final chapter with Isaac.",
        "unlock": "Defeat The Beast as  Isaac",
        "id": 441,
        "item": {
            "name": "Options?",
            "id": 670,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/06/Collectible_Options%3F_icon.png",
            "description": "If a room gives a reward when cleared, there will be two different rewards to chose from. Taking one causes the other to disappear.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f1/Achievement_Yuck_Heart_icon.png",
        "name": " Yuck Heart",
        "description": "Complete the Corpse with Magdalene.",
        "unlock": "Defeat Mother as  Magdalene",
        "id": 442,
        "item": {
            "name": "Yuck Heart",
            "id": 639,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b4/Collectible_Yuck_Heart_icon.png",
            "description": "Gives Isaac a  Rotten Heart.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6e/Achievement_Candy_Heart_icon.png",
        "name": " Candy Heart",
        "description": "Complete the final chapter with Magdalene.",
        "unlock": "Defeat The Beast as  Magdalene",
        "id": 443,
        "item": {
            "name": "Candy Heart",
            "id": 671,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/db/Collectible_Candy_Heart_icon.png",
            "description": "Gives Isaac a permanent stat boost whenever he heals with  Red Heart pickups.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/16/Achievement_Guppy%27s_Eye_icon.png",
        "name": " Guppy's Eye",
        "description": "Complete the Corpse with Cain.",
        "unlock": "Defeat Mother as  Cain",
        "id": 444,
        "item": {
            "name": "Guppy's Eye",
            "id": 665,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/17/Collectible_Guppy%27s_Eye_icon.png",
            "description": "Shows the contents of  Chests,  Fire Places,  Grab Bags, and  Shopkeepers before they're opened/destroyed.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d8/Achievement_A_Pound_of_Flesh_icon.png",
        "name": " A Pound of Flesh",
        "description": "Complete the final chapter with Cain.",
        "unlock": "Defeat The Beast as  Cain",
        "id": 445,
        "item": {
            "name": "A Pound of Flesh",
            "id": 672,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6c/Collectible_A_Pound_of_Flesh_icon.png",
            "description": "Devil deals now cost  Coins, Shop items now cost health, and consumables in shops are free but surrounded by spikes.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0e/Achievement_Akeldama_icon.png",
        "name": " Akeldama",
        "description": "Complete the Corpse with Judas.",
        "unlock": "Defeat Mother as  Judas",
        "id": 446,
        "item": {
            "name": "Akeldama",
            "id": 641,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/91/Collectible_Akeldama_icon.png",
            "description": "While in an uncleared room, Isaac forms a trail of bloody tears that drags behind him, bursting and dealing damage upon contact with enemies.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/56/Achievement_Redemption_icon.png",
        "name": " Redemption",
        "description": "Complete the final chapter with Judas.",
        "unlock": "Defeat The Beast as  Judas",
        "id": 447,
        "item": {
            "name": "Redemption",
            "id": 673,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/64/Collectible_Redemption_icon.png",
            "description": "If Isaac enters a Devil Room but leaves without taking/opening anything in it, he gets +1 Damage and a  Soul Heart at the start of the next floor.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/10/Achievement_Eternal_D6_icon.png",
        "name": " Eternal D6",
        "description": "Complete the Corpse with  ???.",
        "unlock": "Defeat Mother as  ???",
        "id": 448,
        "item": {
            "name": "Eternal D6",
            "id": 609,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b8/Collectible_Eternal_D6_icon.png",
            "description": "Rerolls all items in the room. Each item has a 25% chance to disappear instead.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e7/Achievement_Montezuma%27s_Revenge_icon.png",
        "name": " Montezuma's Revenge",
        "description": "Complete the final chapter with  ???.",
        "unlock": "Defeat The Beast as  ???",
        "id": 449,
        "item": {
            "name": "Montezuma's Revenge",
            "id": 680,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/58/Collectible_Montezuma%27s_Revenge_icon.png",
            "description": "While firing, Isaac charges up a short-ranged Brimstone-like diarrhea beam that shoots behind him.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f0/Achievement_Bird_Cage_icon.png",
        "name": " Bird Cage",
        "description": "Complete the Corpse with Eve.",
        "unlock": "Defeat Mother as  Eve",
        "id": 450,
        "item": {
            "name": "Bird Cage",
            "id": 610,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/87/Collectible_Bird_Cage_icon.png",
            "description": "The first time Isaac takes damage in a room, a familiar leaps on an enemy, dealing damage and releasing a rock wave. For the rest of the room, it chases enemies similar to Dead Bird.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0a/Achievement_Cracked_Orb_icon.png",
        "name": " Cracked Orb",
        "description": "Complete the final chapter with Eve.",
        "unlock": "Defeat The Beast as  Eve",
        "id": 451,
        "item": {
            "name": "Cracked Orb",
            "id": 675,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/39/Collectible_Cracked_Orb_icon.png",
            "description": "Unlocks doors and reveals a random room on the map when Isaac takes damage.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/40/Achievement_Bloody_Gust_icon.png",
        "name": " Bloody Gust",
        "description": "Complete the Corpse with Samson.",
        "unlock": "Defeat Mother as  Samson",
        "id": 452,
        "item": {
            "name": "Bloody Gust",
            "id": 695,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f3/Collectible_Bloody_Gust_icon.png",
            "description": "The first 6 times Isaac takes damage on a given floor, he gains Speed and Fire Rate for the rest of the floor, up to a maximum of +1.02 and +3.00, respectively.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/01/Achievement_Empty_Heart_icon.png",
        "name": " Empty Heart",
        "description": "Complete the final chapter with Samson.",
        "unlock": "Defeat The Beast as  Samson",
        "id": 453,
        "item": {
            "name": "Empty Heart",
            "id": 676,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3d/Collectible_Empty_Heart_icon.png",
            "description": "If Isaac has one red heart or fewer at the beginning of a floor, he gains an empty red heart container.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b8/Achievement_Devil%27s_Crown_icon.png",
        "name": " Devil's Crown",
        "description": "Complete the Corpse with Azazel.",
        "unlock": "Defeat Mother as  Azazel",
        "id": 454
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/40/Achievement_Lil_Abaddon_icon.png",
        "name": " Lil Abaddon",
        "description": "Complete the final chapter with Azazel.",
        "unlock": "Defeat The Beast as  Azazel",
        "id": 455,
        "item": {
            "name": "Lil Abaddon",
            "id": 679,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4c/Collectible_Lil_Abaddon_icon.png",
            "description": "Spawns a familiar that charges a miniature Maw Of The Void attack while Isaac shoots.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/81/Achievement_Tinytoma_icon.png",
        "name": " Tinytoma",
        "description": "Complete the Corpse with Lazarus.",
        "unlock": "Defeat Mother as  Lazarus",
        "id": 456,
        "item": {
            "name": "Tinytoma",
            "id": 645,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/ff/Collectible_Tinytoma_icon.png",
            "description": "Gives Isaac a  Teratoma orbital that blocks shots, deals contact damage, and splits into smaller versions of itself upon taking damage. The smaller versions break into blue spiders.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/09/Achievement_Astral_Projection_icon.png",
        "name": " Astral Projection",
        "description": "Complete the final chapter with Lazarus.",
        "unlock": "Defeat The Beast as  Lazarus",
        "id": 457,
        "item": {
            "name": "Astral Projection",
            "id": 677,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/84/Collectible_Astral_Projection_icon.png",
            "description": "Causes Isaac to turn into a ghost if he gets hit while in an uncleared room, giving him flight and spectral tears and blocking the next hit he takes.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/71/Achievement_%27M_icon.png",
        "name": " 'M",
        "description": "Complete the Corpse with Eden.",
        "unlock": "Defeat Mother as  Eden",
        "id": 458
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d3/Achievement_Everything_Jar_icon.png",
        "name": " Everything Jar",
        "description": "Complete the final chapter with Eden.",
        "unlock": "Defeat The Beast as  Eden",
        "id": 459,
        "item": {
            "name": "Everything Jar",
            "id": 720,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e4/Collectible_Everything_Jar_icon.png",
            "description": "Spawns certain pickups based on how many charges it has. If fully charged, instead has one of many unique effects.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/01/Achievement_Lost_Soul_icon.png",
        "name": " Lost Soul",
        "description": "Complete the Corpse with the Lost.",
        "unlock": "Defeat Mother as  The Lost",
        "id": 460,
        "item": {
            "name": "Lost Soul",
            "id": 612,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2e/Collectible_Lost_Soul_icon.png",
            "description": "Creates a ghostly familiar that closely follows behind Isaac. It dies in one hit, but respawns at the start of the next floor. Each time it survives until the next floor, it rewards Isaac with  Soul Hearts,  Eternal Hearts, or an Item.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c5/Achievement_Hungry_Soul_icon.png",
        "name": " Hungry Soul",
        "description": "Complete the final chapter with the Lost.",
        "unlock": "Defeat The Beast as  The Lost",
        "id": 461,
        "item": {
            "name": "Hungry Soul",
            "id": 684,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e0/Collectible_Hungry_Soul_icon.png",
            "description": "Enemies have a chance to spawn ghosts on death, which chase and deal contact damage to enemies and explode after a short time.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/28/Achievement_Blood_Puppy_icon.png",
        "name": " Blood Puppy",
        "description": "Complete the Corpse with Lilith.",
        "unlock": "Defeat Mother as  Lilith",
        "id": 462,
        "item": {
            "name": "Blood Puppy",
            "id": 565,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/78/Collectible_Blood_Puppy_icon.png",
            "description": "Spawns a familiar that chases enemies. After killing enough enemies, it becomes more powerful but will also try to hurt Isaac, it will also generate  Half Red Hearts on enemy kills. It can increase in power one more stage after killing even more enemies. Dealing enough damage to it returns it to normal.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8e/Achievement_C_Section_icon.png",
        "name": " C Section",
        "description": "Complete the final chapter with Lilith.",
        "unlock": "Defeat The Beast as  Lilith",
        "id": 463,
        "item": {
            "name": "C Section",
            "id": 678,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8b/Collectible_C_Section_icon.png",
            "description": "Replaces tears with fetuses that chase down enemies and deal contact damage. Each shot requires a brief charge up.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b4/Achievement_Keeper%27s_Sack_icon.png",
        "name": " Keeper's Sack",
        "description": "Complete the Corpse with Keeper.",
        "unlock": "Defeat Mother as  Keeper",
        "id": 464,
        "item": {
            "name": "Keeper's Sack",
            "id": 716,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/41/Collectible_Keeper%27s_Sack_icon.png",
            "description": "Gives range, speed, or damage when buying things from a shop. Also spawns three coins and a  Key on pickup.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f5/Achievement_Keeper%27s_Box_icon.png",
        "name": " Keeper's Box",
        "description": "Complete the final chapter with Keeper.",
        "unlock": "Defeat The Beast as  Keeper",
        "id": 465,
        "item": {
            "name": "Keeper's Box",
            "id": 719,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8f/Collectible_Keeper%27s_Box_icon.png",
            "description": "Spawns a random shop item or pickup which can be bought for its normal price.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/07/Achievement_Lil_Portal_icon.png",
        "name": " Lil Portal",
        "description": "Complete the Corpse with Apollyon.",
        "unlock": "Defeat Mother as  Apollyon",
        "id": 466,
        "item": {
            "name": "Lil Portal",
            "id": 681,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0a/Collectible_Lil_Portal_icon.png",
            "description": "A familiar that flies forward, consuming pickups in its path. Each one will increase its size and damage and spawn a Blue Fly. Every four pickups, it opens a portal that leads to an unexplored room.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/03/Achievement_Worm_Friend_icon.png",
        "name": " Worm Friend",
        "description": "Complete the final chapter with Apollyon.",
        "unlock": "Defeat The Beast as  Apollyon",
        "id": 467,
        "item": {
            "name": "Worm Friend",
            "id": 682,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7e/Collectible_Worm_Friend_icon.png",
            "description": "Gives Isaac a  Nerve Ending familiar that burrows out of the ground to grab and deal damage to enemies over time.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/59/Achievement_Bone_Spurs_icon.png",
        "name": " Bone Spurs",
        "description": "Complete the Corpse with the Forgotten.",
        "unlock": "Defeat Mother as  The Forgotten",
        "id": 468,
        "item": {
            "name": "Bone Spurs",
            "id": 683,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d5/Collectible_Bone_Spurs_icon.png",
            "description": "Enemies spawn floating bones on death, which block shots and damage/repel enemies that touch them.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/76/Achievement_Spirit_Shackles_icon.png",
        "name": " Spirit Shackles",
        "description": "Complete the final chapter with the Forgotten.",
        "unlock": "Defeat The Beast as  The Forgotten",
        "id": 469,
        "item": {
            "name": "Spirit Shackles",
            "id": 674,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/12/Collectible_Spirit_Shackles_icon.png",
            "description": "On death, Isaac's ghost is chained to his dead body and he can continue to fight with 1/2 of a heart, returning to life after 10 seconds. After it activates, it must be recharged by picking up a  Soul Heart.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4f/Achievement_Revelation_icon.png",
        "name": " Revelation",
        "description": "Complete the Corpse with Bethany.",
        "unlock": "Defeat Mother as  Bethany",
        "id": 470,
        "item": {
            "name": "Revelation",
            "id": 643,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/94/Collectible_Revelation_icon.png",
            "description": "Grants flight and two  Soul Hearts. In addition to tears, Isaac can charge up and fire a powerful holy laser.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3a/Achievement_Jar_of_Wisps_icon.png",
        "name": " Jar of Wisps",
        "description": "Complete the final chapter with Bethany.",
        "unlock": "Defeat The Beast as  Bethany",
        "id": 471,
        "item": {
            "name": "Jar of Wisps",
            "id": 685,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a7/Collectible_Jar_of_Wisps_icon.png",
            "description": "Spawns random wisps that shoot various tears, block shots, and deal contact damage. The number of wisps spawned increases every time the jar is used.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/01/Achievement_Magic_Skin_icon.png",
        "name": " Magic Skin",
        "description": "Complete the Corpse with Jacob and Esau.",
        "unlock": "Defeat Mother as  Jacob and Esau",
        "id": 472,
        "item": {
            "name": "Magic Skin",
            "id": 642,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/04/Collectible_Magic_Skin_icon.png",
            "description": "Consumes one heart container or two  Soul Hearts to spawn an item and give Isaac a broken heart container that can never be filled. If Magic Skin isn't being held after being used, it is very likely to replace any future items.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3e/Achievement_Friend_Finder_icon.png",
        "name": " Friend Finder",
        "description": "Complete the final chapter with Jacob and Esau.",
        "unlock": "Defeat The Beast as  Jacob and Esau",
        "id": 473,
        "item": {
            "name": "Friend Finder",
            "id": 687,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c8/Collectible_Friend_Finder_icon.png",
            "description": "Spawns a random friendly monster that mimics Isaac's movements and attacks.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0f/Achievement_The_Broken_icon.png",
        "name": " The Broken",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Isaac",
        "id": 474
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/db/Achievement_The_Dauntless_icon.png",
        "name": " The Dauntless",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Magdalene",
        "id": 475
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c8/Achievement_The_Hoarder_icon.png",
        "name": " The Hoarder",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Cain",
        "id": 476
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fc/Achievement_The_Deceiver_icon.png",
        "name": " The Deceiver",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Judas",
        "id": 477
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6b/Achievement_The_Soiled_icon.png",
        "name": " The Soiled",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  ???",
        "id": 478
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1d/Achievement_The_Curdled_icon.png",
        "name": " The Curdled",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Eve",
        "id": 479
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c8/Achievement_The_Savage_icon.png",
        "name": " The Savage",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Samson",
        "id": 480
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f2/Achievement_The_Benighted_icon.png",
        "name": " The Benighted",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Azazel",
        "id": 481
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c8/Achievement_The_Enigma_icon.png",
        "name": " The Enigma",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Lazarus",
        "id": 482
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ed/Achievement_The_Capricious_icon.png",
        "name": " The Capricious",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Eden",
        "id": 483
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/38/Achievement_The_Baleful_icon.png",
        "name": " The Baleful",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  The Lost",
        "id": 484
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/04/Achievement_The_Harlot_icon.png",
        "name": " The Harlot",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Lilith",
        "id": 485
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/97/Achievement_The_Miser_icon.png",
        "name": " The Miser",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Keeper",
        "id": 486
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5f/Achievement_The_Empty_icon.png",
        "name": " The Empty",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Apollyon",
        "id": 487
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c6/Achievement_The_Fettered_icon.png",
        "name": " The Fettered",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  The Forgotten",
        "id": 488
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/72/Achievement_The_Zealot_icon.png",
        "name": " The Zealot",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Bethany",
        "id": 489
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b2/Achievement_The_Deserter_icon.png",
        "name": " The Deserter",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Jacob and Esau",
        "id": 490
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f5/Achievement_Glitched_Crown_icon.png",
        "name": " Glitched Crown",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Isaac",
        "id": 491,
        "item": {
            "name": "Glitched Crown",
            "id": 689,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8c/Collectible_Glitched_Crown_icon.png",
            "description": "Item pedestals cycle between 5 random items before being picked up.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/10/Achievement_Belly_Jelly_icon.png",
        "name": " Belly Jelly",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Magdalene",
        "id": 492,
        "item": {
            "name": "Belly Jelly",
            "id": 690,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ac/Collectible_Belly_Jelly_icon.png",
            "description": "Causes enemies to bounce off of Isaac, dealing damage to them if they hit an enemy or obstacle. Also gives Isaac the chance to deflect enemy shots.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d1/Achievement_Blue_Key_icon.png",
        "name": " Blue Key",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Cain",
        "id": 493
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/58/Achievement_Sanguine_Bond_icon.png",
        "name": " Sanguine Bond",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Judas",
        "id": 494,
        "item": {
            "name": "Sanguine Bond",
            "id": 692,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fa/Collectible_Sanguine_Bond_icon.png",
            "description": "Spawns a special set of spikes in the Devil Room. Taking damage from the spikes has a chance to grant a reward.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f3/Achievement_The_Swarm_icon.png",
        "name": " The Swarm",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted  ???",
        "id": 495,
        "item": {
            "name": "The Swarm",
            "id": 693,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9d/Collectible_The_Swarm_icon.png",
            "description": "Spawns eight orbital flies, which turn into Blue Flies after they block a shot. Each time a room is cleared, spawns another orbital fly.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9d/Achievement_Heartbreak_icon.png",
        "name": " Heartbreak",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Eve",
        "id": 496,
        "item": {
            "name": "Heartbreak",
            "id": 694,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8e/Collectible_Heartbreak_icon.png",
            "description": "Grants 3 broken hearts and +0.25 damage for every broken heart Isaac has. Every otherwise fatal hit will add 2 more until Isaac has nothing but broken hearts.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9c/Achievement_Larynx_icon.png",
        "name": " Larynx",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Samson",
        "id": 497,
        "item": {
            "name": "Larynx",
            "id": 611,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b7/Collectible_Larynx_icon.png",
            "description": "Isaac shouts, damaging and pushing away nearby enemies. The shout gets stronger the more charges the item has. Larynx gains 1 charge whenever Isaac takes damage, in addition to charging normally.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/95/Achievement_Azazel%27s_Rage_icon.png",
        "name": " Azazel's Rage",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Azazel",
        "id": 498,
        "item": {
            "name": "Azazel's Rage",
            "id": 699,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ac/Collectible_Azazel%27s_Rage_icon.png",
            "description": "Isaac builds rage every time a room is cleared. After four rooms, fires a large Brimstone laser when entering the next room.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2b/Achievement_Salvation_icon.png",
        "name": " Salvation",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Lazarus",
        "id": 499,
        "item": {
            "name": "Salvation",
            "id": 696,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/56/Collectible_Salvation_icon.png",
            "description": "Gives Isaac a halo that summons beams of light on enemies inside it. The halo grows larger the more times Isaac has taken damage this floor.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/34/Achievement_TMTRAINER_icon.png",
        "name": " TMTRAINER",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Eden",
        "id": 500,
        "item": {
            "name": "TMTRAINER",
            "id": 721,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/62/Collectible_TMTRAINER_icon.png",
            "description": "Causes all future items to be \"glitched\", granting them completely random effects.",
            "quality": 0
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/60/Achievement_Sacred_Orb_icon.png",
        "name": " Sacred Orb",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Lost",
        "id": 501,
        "item": {
            "name": "Sacred Orb",
            "id": 691,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0f/Collectible_Sacred_Orb_icon.png",
            "description": "Prevents items of quality 0-1 from appearing, and items of quality 2 from appearing 33% of the time. Quest items are unaffected.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/20/Achievement_Twisted_Pair_icon.png",
        "name": " Twisted Pair",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Lilith",
        "id": 502,
        "item": {
            "name": "Twisted Pair",
            "id": 698,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3c/Collectible_Twisted_Pair_icon.png",
            "description": "Spawns two familiars that float on either side of Isaac and fire tears that use his tears, range, shot speed, and tear effects, and scale with damage.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1c/Achievement_Strawman_icon.png",
        "name": " Strawman",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Keeper",
        "id": 503,
        "item": {
            "name": "Strawman",
            "id": 667,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/49/Collectible_Strawman_icon.png",
            "description": "Spawns a controllable  Keeper to fight enemies alongside Isaac, functioning similarly to  Jacob and Esau. If Keeper dies, he spawns 5 blue spiders and Strawman is removed from Isaac's inventory.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/51/Achievement_Echo_Chamber_icon.png",
        "name": " Echo Chamber",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Apollyon",
        "id": 504,
        "item": {
            "name": "Echo Chamber",
            "id": 700,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f4/Collectible_Echo_Chamber_icon.png",
            "description": "When Isaac uses a Card, Pill, or Rune, he also uses a copy of the previous three Cards/Pills/Runes he used after picking up Echo Chamber.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/eb/Achievement_Isaac%27s_Tomb_icon.png",
        "name": " Isaac's Tomb",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Forgotten",
        "id": 505,
        "item": {
            "name": "Isaac's Tomb",
            "id": 701,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/96/Collectible_Isaac%27s_Tomb_icon.png",
            "description": "Spawns an  Old Chest at the start of each floor.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/42/Achievement_Vengeful_Spirit_icon.png",
        "name": " Vengeful Spirit",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Bethany",
        "id": 506,
        "item": {
            "name": "Vengeful Spirit",
            "id": 702,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0b/Collectible_Vengeful_Spirit_icon.png",
            "description": "After taking damage, spawns an orbital wisp that lasts for the entire floor, up to a maximum of six. They fire tears but do not block shots.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/58/Achievement_Esau_Jr._icon.png",
        "name": " Esau Jr.",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Jacob",
        "id": 507,
        "item": {
            "name": "Esau Jr.",
            "id": 703,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a7/Collectible_Esau_Jr._icon.png",
            "description": "Swaps between the current character and Esau Jr., who has +2 flat damage and flight. Characters have independent items and health. Dying as either character ends the run.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a1/Achievement_Bloody_Mary_icon.png",
        "name": " Bloody Mary",
        "description": "Unlocked a new challenge.",
        "unlock": "Unlock  Bethany, Blood Bag, and It Lives!",
        "id": 508
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c2/Achievement_Baptism_by_Fire_icon.png",
        "name": " Baptism by Fire",
        "description": "Unlocked a new challenge.",
        "unlock": "Defeat Satan as  Bethany, defeat Mom's Heart 11 times, and unlock Maggy's Faith",
        "id": 509
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f3/Achievement_Isaac%27s_Awakening_icon.png",
        "name": " Isaac's Awakening",
        "description": "Unlocked a new challenge.",
        "unlock": "Defeat Mother",
        "id": 510
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e3/Achievement_Seeing_Double_icon.png",
        "name": " Seeing Double",
        "description": "Unlocked a new challenge.",
        "unlock": "Defeat Mother",
        "id": 511
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3a/Achievement_Pica_Run_icon.png",
        "name": " Pica Run",
        "description": "Unlocked a new challenge.",
        "unlock": "Defeat Mom's Heart 11 times and unlock Marbles",
        "id": 512
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/39/Achievement_Hot_Potato_icon.png",
        "name": " Hot Potato",
        "description": "Unlocked a new challenge.",
        "unlock": "Unlock  Tainted Forgotten",
        "id": 513
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e3/Achievement_Cantripped%21_icon.png",
        "name": " Cantripped!",
        "description": "Unlocked a new challenge.",
        "unlock": "Unlock  Tainted Cain",
        "id": 514
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0b/Achievement_Red_Redemption_icon.png",
        "name": " Red Redemption",
        "description": "Unlocked a new challenge.",
        "unlock": "Unlock  Tainted Jacob",
        "id": 515
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7a/Achievement_DELETE_THIS_icon.png",
        "name": " DELETE THIS",
        "description": "TODO: remove this achievement",
        "unlock": "Unlock  Tainted Eden",
        "id": 516
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/71/Achievement_Dirty_Mind_icon.png",
        "name": " Dirty Mind",
        "description": "Complete Challenge 36.",
        "unlock": "Complete Scat Man (challenge #36)",
        "id": 517,
        "item": {
            "name": "Dirty Mind",
            "id": 576,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/60/Collectible_Dirty_Mind_icon.png",
            "description": "Destroying poop spawns Dip Familiars that follow Isaac and damage enemies. Destroying different types of poop spawns different Dips with special effects.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/64/Achievement_Sigil_of_Baphomet_icon.png",
        "name": " Sigil of Baphomet",
        "description": "Complete Challenge 37.",
        "unlock": "Complete Bloody Mary (challenge #37)",
        "id": 518
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/39/Achievement_Purgatory_icon.png",
        "name": " Purgatory",
        "description": "Complete Challenge 38.",
        "unlock": "Complete Baptism by Fire (challenge #38)",
        "id": 519,
        "item": {
            "name": "Purgatory",
            "id": 634,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/38/Collectible_Purgatory_icon.png",
            "description": "While in a room with enemies, spawns red cracks in the ground. Walking over these cracks summons ghosts that launch themselves at enemies and explode.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f1/Achievement_Spirit_Sword_icon.png",
        "name": " Spirit Sword",
        "description": "Complete Challenge 39.",
        "unlock": "Complete Isaac's Awakening (challenge #39)",
        "id": 520,
        "item": {
            "name": "Spirit Sword",
            "id": 579,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f9/Collectible_Spirit_Sword_icon.png",
            "description": "Instead of tears, Isaac swings a sword. Charging does a spin attack and fires a projectile, and a projectile is sometimes fired with normal swings if Isaac has no empty  Red Heart Containers.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/90/Achievement_Broken_Glasses_icon.png",
        "name": " Broken Glasses",
        "description": "Complete Challenge 40.",
        "unlock": "Complete Seeing Double (challenge #40)",
        "id": 521
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/47/Achievement_Ice_Cube_icon.png",
        "name": " Ice Cube",
        "description": "Complete Challenge 41.",
        "unlock": "Complete Pica Run (challenge #41)",
        "id": 522
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/02/Achievement_Charged_Penny_icon.png",
        "name": " Charged Penny",
        "description": "They will charge you up... for a small fee.",
        "unlock": "Donate to Battery Bums until they pay out with an item 5 times",
        "id": 523
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8d/Achievement_The_Fool_icon.png",
        "name": " The Fool",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Lost",
        "id": 524
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4d/Achievement_The_Magician_icon.png",
        "name": " The Magician",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Judas",
        "id": 525
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e2/Achievement_The_High_Priestess_icon.png",
        "name": " The High Priestess",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Lilith",
        "id": 526
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/36/Achievement_The_Empress_icon.png",
        "name": " The Empress",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Eve",
        "id": 527
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c0/Achievement_The_Emperor_icon.png",
        "name": " The Emperor",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted  ???",
        "id": 528
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/25/Achievement_The_Hierophant_icon.png",
        "name": " The Hierophant",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Bethany",
        "id": 529
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0a/Achievement_The_Lovers_icon.png",
        "name": " The Lovers",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Magdalene",
        "id": 530
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/71/Achievement_The_Chariot_icon.png",
        "name": " The Chariot",
        "description": "Complete Challenge 42.",
        "unlock": "Complete Hot Potato (challenge #42)",
        "id": 531
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8a/Achievement_Justice_icon.png",
        "name": " Justice",
        "description": "Complete Challenge 43.",
        "unlock": "Complete Cantripped (challenge #43)",
        "id": 532
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8a/Achievement_The_Hermit_icon.png",
        "name": " The Hermit",
        "description": "Complete Challenge 44.",
        "unlock": "Complete Red Redemption (challenge #44)",
        "id": 533
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7d/Achievement_Wheel_of_Fortune_icon.png",
        "name": " Wheel of Fortune",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Cain",
        "id": 534
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c3/Achievement_Strength_icon.png",
        "name": " Strength",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Samson",
        "id": 535
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/02/Achievement_The_Hanged_Man_icon.png",
        "name": " The Hanged Man",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Keeper",
        "id": 536
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/58/Achievement_Death_icon.png",
        "name": " Death",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Forgotten",
        "id": 537
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/ce/Achievement_Temperance_icon.png",
        "name": " Temperance",
        "description": "INVALID_DESCRIPTION",
        "unlock": "Complete DELETE THIS (challenge #45)",
        "id": 538
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/20/Achievement_The_Devil_icon.png",
        "name": " The Devil",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Azazel",
        "id": 539
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/33/Achievement_The_Tower_icon.png",
        "name": " The Tower",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Apollyon",
        "id": 540
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1b/Achievement_The_Stars_icon.png",
        "name": " The Stars",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Isaac",
        "id": 541
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ab/Achievement_The_Sun_and_the_Moon_icon.png",
        "name": " The Sun and the Moon",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Jacob",
        "id": 542
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f5/Achievement_Judgement_icon.png",
        "name": " Judgement",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Lazarus",
        "id": 543
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/97/Achievement_The_World_icon.png",
        "name": " The World",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Eden",
        "id": 544
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1c/Achievement_Old_Capacitor_icon.png",
        "name": " Old Capacitor",
        "description": "Kill 10 Battery Bums.",
        "unlock": "Kill 10 Battery Bums",
        "id": 545
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/53/Achievement_Brimstone_Bombs_icon.png",
        "name": " Brimstone Bombs",
        "description": "Kill Hornfel before he escapes!",
        "unlock": "After breaking Hornfel's minecart, kill him before he can escape",
        "id": 546,
        "item": {
            "name": "Brimstone Bombs",
            "id": 646,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/23/Collectible_Brimstone_Bombs_icon.png",
            "description": "+5  Bombs. Bombs fire four Brimstone lasers in the cardinal directions upon exploding.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b2/Achievement_Mega_Mush_icon.png",
        "name": " Mega Mush",
        "description": "Beat everything in Hard Mode as every character.",
        "unlock": "Earn all Hard mode Completion Marks for all non-Tainted characters",
        "id": 547,
        "item": {
            "name": "Mega Mush",
            "id": 625,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b6/Collectible_Mega_Mush_icon.png",
            "description": "Gigantifies Isaac for 30 seconds, increasing damage and range while lowering tears, granting invulnerability, and allowing Isaac to crush enemies and obstacles he walks on. The effect persists between rooms.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/22/Achievement_Mom%27s_Lock_icon.png",
        "name": " Mom's Lock",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Isaac",
        "id": 548
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/77/Achievement_Dice_Bag_icon.png",
        "name": " Dice Bag",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Isaac",
        "id": 549
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/da/Achievement_Holy_Crown_icon.png",
        "name": " Holy Crown",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Magdalene",
        "id": 550
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f1/Achievement_Mother%27s_Kiss_icon.png",
        "name": " Mother's Kiss",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Magdalene",
        "id": 551
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e4/Achievement_Gilded_Key_icon.png",
        "name": " Gilded Key",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Cain",
        "id": 552
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ec/Achievement_Lucky_Sack_icon.png",
        "name": " Lucky Sack",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Cain",
        "id": 553
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a2/Achievement_Your_Soul_icon.png",
        "name": " Your Soul",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Judas",
        "id": 554
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9e/Achievement_Number_Magnet_icon.png",
        "name": " Number Magnet",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Judas",
        "id": 555
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ac/Achievement_Dingle_Berry_icon.png",
        "name": " Dingle Berry",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted  ???",
        "id": 556
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f2/Achievement_Ring_Cap_icon.png",
        "name": " Ring Cap",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted  ???",
        "id": 557
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/31/Achievement_Strange_Key_icon.png",
        "name": " Strange Key",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Eve",
        "id": 558
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/da/Achievement_Lil_Clot_icon.png",
        "name": " Lil Clot",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Eve",
        "id": 559
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/40/Achievement_Temporary_Tattoo_icon.png",
        "name": " Temporary Tattoo",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Samson",
        "id": 560
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/21/Achievement_Swallowed_M80_icon.png",
        "name": " Swallowed M80",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Samson",
        "id": 561
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ad/Achievement_Wicked_Crown_icon.png",
        "name": " Wicked Crown",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Azazel",
        "id": 562
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2d/Achievement_Azazel%27s_Stump_icon.png",
        "name": " Azazel's Stump",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Azazel",
        "id": 563
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5a/Achievement_Torn_Pocket_icon.png",
        "name": " Torn Pocket",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Lazarus",
        "id": 564
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b8/Achievement_Torn_Card_icon.png",
        "name": " Torn Card",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Lazarus",
        "id": 565
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ab/Achievement_Nuh_Uh%21_icon.png",
        "name": " Nuh Uh!",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Eden",
        "id": 566
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c7/Achievement_Modeling_Clay_icon.png",
        "name": " Modeling Clay",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Eden",
        "id": 567
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/bd/Achievement_Kid%27s_Drawing_icon.png",
        "name": " Kid's Drawing",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Lost",
        "id": 568
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4f/Achievement_Crystal_Key_icon.png",
        "name": " Crystal Key",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Lost",
        "id": 569
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fb/Achievement_The_Twins_icon.png",
        "name": " The Twins",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Lilith",
        "id": 570
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/50/Achievement_Adoption_Papers_icon.png",
        "name": " Adoption Papers",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Lilith",
        "id": 571
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/bf/Achievement_Keeper%27s_Bargain_icon.png",
        "name": " Keeper's Bargain",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Keeper",
        "id": 572
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/44/Achievement_Cursed_Penny_icon.png",
        "name": " Cursed Penny",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Keeper",
        "id": 573
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/26/Achievement_Cricket_Leg_icon.png",
        "name": " Cricket Leg",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Apollyon",
        "id": 574
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c4/Achievement_Apollyon%27s_Best_Friend_icon.png",
        "name": " Apollyon's Best Friend",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Apollyon",
        "id": 575
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/cd/Achievement_Polished_Bone_icon.png",
        "name": " Polished Bone",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Forgotten",
        "id": 576
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5f/Achievement_Hollow_Heart_icon.png",
        "name": " Hollow Heart",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Forgotten",
        "id": 577
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3d/Achievement_Expansion_Pack_icon.png",
        "name": " Expansion Pack",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Bethany",
        "id": 578
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c9/Achievement_Beth%27s_Essence_icon.png",
        "name": " Beth's Essence",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Bethany",
        "id": 579
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/97/Achievement_RC_Remote_icon.png",
        "name": " RC Remote",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Jacob",
        "id": 580
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/38/Achievement_Found_Soul_icon.png",
        "name": " Found Soul",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Jacob",
        "id": 581
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3c/Achievement_Member_Card_icon.png",
        "name": " Member Card",
        "description": "Spend 40+ pennies in a single shop.",
        "unlock": "Spend 40+ coins in a single Shop",
        "id": 582,
        "item": {
            "name": "Member Card",
            "id": 602,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/27/Collectible_Member_Card_icon.png",
            "description": "Adds a trapdoor to every Shop that leads to a second shop with a unique stock and marked-up prices.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ab/Achievement_Golden_Razor_icon.png",
        "name": " Golden Razor",
        "description": "Obtain 99 pennies. Then spend every single one of them.",
        "unlock": "In a single run, obtain 99 Coins, then spend all of them",
        "id": 583,
        "item": {
            "name": "Golden Razor",
            "id": 555,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e2/Collectible_Golden_Razor_icon.png",
            "description": "Spends five  Pennies to increase Isaac's damage by 1.2 for the current room.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d1/Achievement_Spindown_Dice_icon.png",
        "name": " Spindown Dice",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Isaac",
        "id": 584,
        "item": {
            "name": "Spindown Dice",
            "id": 723,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fc/Collectible_Spindown_Dice_icon.png",
            "description": "Reduces the internal ID number of all items in the room by one, turning them into the item with that number.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f8/Achievement_Hypercoagulation_icon.png",
        "name": " Hypercoagulation",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Magdalene",
        "id": 585,
        "item": {
            "name": "Hypercoagulation",
            "id": 724,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7f/Collectible_Hypercoagulation_icon.png",
            "description": "After Isaac takes damage from an enemy or donates health, launches  Red Hearts from Isaac that despawn after 1.5 seconds.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b9/Achievement_Bag_of_Crafting_icon.png",
        "name": " Bag of Crafting",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Cain",
        "id": 586,
        "item": {
            "name": "Bag of Crafting",
            "id": 710,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1e/Collectible_Bag_of_Crafting_icon.png",
            "description": "Collects and holds up to 8 pickups, which can then be used to craft an item. The power level of the item is based on the quality of pickups used.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/17/Achievement_Dark_Arts_icon.png",
        "name": " Dark Arts",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Judas",
        "id": 587,
        "item": {
            "name": "Dark Arts",
            "id": 705,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/40/Collectible_Dark_Arts_icon.png",
            "description": "Briefly grants +1 speed and makes Isaac invulnerable and intangible. When the effect ends, destroys all projectiles and damages all enemies Isaac ran through.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d0/Achievement_IBS_icon.png",
        "name": " IBS",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted  ???",
        "id": 588,
        "item": {
            "name": "IBS",
            "id": 725,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/cb/Collectible_IBS_icon.png",
            "description": "Causes Isaac to throw poop, create buffing creep, or drop bombs while fighting enemies.",
            "quality": 0
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/07/Achievement_Sumptorium_icon.png",
        "name": " Sumptorium",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Eve",
        "id": 589,
        "item": {
            "name": "Sumptorium",
            "id": 713,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a0/Collectible_Sumptorium_icon.png",
            "description": "Removes half a heart and creates a Clot familiar that mimics Isaac's movements and tear effects. As  Tainted Eve, passively converts health into Clots while firing. Activating returns all Clots to health.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2c/Achievement_Berserk%21_icon.png",
        "name": " Berserk!",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Samson",
        "id": 590,
        "item": {
            "name": "Berserk!",
            "id": 704,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ee/Collectible_Berserk%21_icon.png",
            "description": "Isaac goes berserk for 5 seconds, greatly increasing his speed, tears, and damage, but restricting him to using a melee weapon instead of his tears. This item charges by dealing damage to enemies instead of clearing rooms.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ee/Achievement_Hemoptysis_icon.png",
        "name": " Hemoptysis",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Azazel",
        "id": 591,
        "item": {
            "name": "Hemoptysis",
            "id": 726,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8f/Collectible_Hemoptysis_icon.png",
            "description": "Double-tapping a fire button causes Isaac to sneeze blood, dealing damage to enemies in front of him. Affected enemies are cursed and take more damage from Brimstone-like attacks.",
            "quality": 1
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f9/Achievement_Flip_icon.png",
        "name": " Flip",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Lazarus",
        "id": 592,
        "item": {
            "name": "Flip",
            "id": 711,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/49/Collectible_Flip_icon.png",
            "description": "Item pedestals have a second uninteractable \"ghostly\" item behind them. Activating will flip the real and ghostly items around. If playing as  Tainted Lazarus, also flips between them and  Dead Tainted Lazarus.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/eb/Achievement_Corrupted_Data_icon.png",
        "name": " Corrupted Data",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Eden",
        "id": 593
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/60/Achievement_Ghost_Bombs_icon.png",
        "name": " Ghost Bombs",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Lost",
        "id": 594,
        "item": {
            "name": "Ghost Bombs",
            "id": 727,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0f/Collectible_Ghost_Bombs_icon.png",
            "description": "+5  Bombs. Bombs become spectral and spawn ghosts that deal contact damage to enemies and explode after 10 seconds.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f1/Achievement_Gello_icon.png",
        "name": " Gello",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Lilith",
        "id": 595,
        "item": {
            "name": "Gello",
            "id": 728,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/da/Collectible_Gello_icon.png",
            "description": "Spawns a demon familiar for the current room that's attached to Isaac and moves and fires in the direction Isaac shoots, using Isaac's damage, tears, range, shot speed, and special tear effects.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/59/Achievement_Keeper%27s_Kin_icon.png",
        "name": " Keeper's Kin",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Keeper",
        "id": 596,
        "item": {
            "name": "Keeper's Kin",
            "id": 717,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7d/Collectible_Keeper%27s_Kin_icon.png",
            "description": "Rocks and other Obstacles spawn blue spiders over time while in a room with enemies, and spawn two blue spiders when destroyed.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/bb/Achievement_Abyss_icon.png",
        "name": " Abyss",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Apollyon",
        "id": 597,
        "item": {
            "name": "Abyss",
            "id": 706,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/18/Collectible_Abyss_icon.png",
            "description": "Destroys all items in the room and gives Isaac a unique locust familiar for each item destroyed. Some items generate locusts with special effects.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ab/Achievement_Decap_Attack_icon.png",
        "name": " Decap Attack",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Forgotten",
        "id": 598,
        "item": {
            "name": "Decap Attack",
            "id": 729,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/11/Collectible_Decap_Attack_icon.png",
            "description": "Throws Isaac's head, which is still able to fire tears at the spot it lands. Reactivating the item or stepping on the head reattaches it.",
            "quality": 2
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8d/Achievement_Lemegeton_icon.png",
        "name": " Lemegeton",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Bethany",
        "id": 599,
        "item": {
            "name": "Lemegeton",
            "id": 712,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3c/Collectible_Lemegeton_icon.png",
            "description": "Spawns a wisp representing a random passive item, which orbits Isaac but can be destroyed. While the wisp is alive, Isaac gains that item's effects. Generation uses the current room's item pool 25% of the time, otherwise a random pool.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4c/Achievement_Anima_Sola_icon.png",
        "name": " Anima Sola",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Jacob",
        "id": 600,
        "item": {
            "name": "Anima Sola",
            "id": 722,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a2/Collectible_Anima_Sola_icon.png",
            "description": "Chains down the nearest enemy for 5 seconds, preventing them from acting.",
            "quality": 3
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d5/Achievement_Mega_Chest_icon.png",
        "name": " Mega Chest",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Isaac",
        "id": 601
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d3/Achievement_Queen_of_Hearts_icon.png",
        "name": " Queen of Hearts",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Magdalene",
        "id": 602
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2c/Achievement_Gold_Pill_icon.png",
        "name": " Gold Pill",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Cain",
        "id": 603
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/39/Achievement_Black_Sack_icon.png",
        "name": " Black Sack",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Judas",
        "id": 604
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b4/Achievement_Charming_Poop_icon.png",
        "name": " Charming Poop",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted  ???",
        "id": 605
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7c/Achievement_Horse_Pill_icon.png",
        "name": " Horse Pill",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Eve",
        "id": 606
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e7/Achievement_Crane_Game_icon.png",
        "name": " Crane Game",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Samson",
        "id": 607
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ae/Achievement_Hell_Game_icon.png",
        "name": " Hell Game",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Azazel",
        "id": 608
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5e/Achievement_Wooden_Chest_icon.png",
        "name": " Wooden Chest",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Lazarus",
        "id": 609
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fd/Achievement_Wild_Card_icon.png",
        "name": " Wild Card",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Eden",
        "id": 610
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b8/Achievement_Haunted_Chest_icon.png",
        "name": " Haunted Chest",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Lost",
        "id": 611
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/69/Achievement_Fool%27s_Gold_icon.png",
        "name": " Fool's Gold",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Lilith",
        "id": 612
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3b/Achievement_Golden_Penny_icon.png",
        "name": " Golden Penny",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Keeper",
        "id": 613
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5c/Achievement_Rotten_Beggar_icon.png",
        "name": " Rotten Beggar",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Apollyon",
        "id": 614
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d0/Achievement_Golden_Battery_icon.png",
        "name": " Golden Battery",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Forgotten",
        "id": 615
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e6/Achievement_Confessional_icon.png",
        "name": " Confessional",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Bethany",
        "id": 616
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1d/Achievement_Golden_Trinket_icon.png",
        "name": " Golden Trinket",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Jacob",
        "id": 617
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/88/Achievement_Soul_of_Isaac_icon.png",
        "name": " Soul of Isaac",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Isaac",
        "id": 618
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b8/Achievement_Soul_of_Magdalene_icon.png",
        "name": " Soul of Magdalene",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Magdalene",
        "id": 619
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/63/Achievement_Soul_of_Cain_icon.png",
        "name": " Soul of Cain",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Cain",
        "id": 620
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/42/Achievement_Soul_of_Judas_icon.png",
        "name": " Soul of Judas",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Judas",
        "id": 621
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/88/Achievement_Soul_of_%3F%3F%3F_icon.png",
        "name": " Soul of  ???",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted  ???",
        "id": 622
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b8/Achievement_Soul_of_Eve_icon.png",
        "name": " Soul of Eve",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Eve",
        "id": 623
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/23/Achievement_Soul_of_Samson_icon.png",
        "name": " Soul of Samson",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Samson",
        "id": 624
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2e/Achievement_Soul_of_Azazel_icon.png",
        "name": " Soul of Azazel",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Azazel",
        "id": 625
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/da/Achievement_Soul_of_Lazarus_icon.png",
        "name": " Soul of Lazarus",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Lazarus",
        "id": 626
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/83/Achievement_Soul_of_Eden_icon.png",
        "name": " Soul of Eden",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Eden",
        "id": 627
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/54/Achievement_Soul_of_the_Lost_icon.png",
        "name": " Soul of the Lost",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Lost",
        "id": 628
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1d/Achievement_Soul_of_Lilith_icon.png",
        "name": " Soul of Lilith",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Lilith",
        "id": 629
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/dd/Achievement_Soul_of_the_Keeper_icon.png",
        "name": " Soul of the Keeper",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Keeper",
        "id": 630
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fa/Achievement_Soul_of_Apollyon_icon.png",
        "name": " Soul of Apollyon",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Apollyon",
        "id": 631
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fd/Achievement_Soul_of_the_Forgotten_icon.png",
        "name": " Soul of the Forgotten",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Forgotten",
        "id": 632
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d6/Achievement_Soul_of_Bethany_icon.png",
        "name": " Soul of Bethany",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Bethany",
        "id": 633
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/68/Achievement_Soul_of_Jacob_and_Esau_icon.png",
        "name": " Soul of Jacob and Esau",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Jacob",
        "id": 634
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9c/Achievement_A_Strange_Door_icon.png",
        "name": " A Strange Door",
        "description": "Where could it lead to?",
        "unlock": "Defeat Mother",
        "id": 635
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e0/Achievement_Death_Certificate_icon.png",
        "name": " Death Certificate",
        "description": "...",
        "unlock": "Earn all Hard mode Completion Marks for all characters, including tainted ones",
        "id": 636,
        "item": {
            "name": "Death Certificate",
            "id": 628,
            "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/25/Collectible_Death_Certificate_icon.png",
            "description": "Takes Isaac to an abandoned and expanded version of Home, which has one copy of every item in the game. After taking an item, Isaac returns to the room he used Death Certificate in.",
            "quality": 4
        }
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/97/Achievement_Dead_God_icon.png",
        "name": " Dead God",
        "description": "",
        "unlock": "Unlock all the other achievements and collect every item in the game",
        "id": 637
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/90/Achievement_Play_Online_icon.png",
        "name": " Play Online",
        "description": "Played Online",
        "unlock": "Play an Online game",
        "id": 638
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/dd/Achievement_Win_Online_icon.png",
        "name": " Win Online",
        "description": "Won Online",
        "unlock": "Win an Online run",
        "id": 639
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/41/Achievement_Win_Online_Daily_icon.png",
        "name": " Win Online Daily",
        "description": "Won Online Daily",
        "unlock": "Win an Online Daily run",
        "id": 640
    }
]