export type Achievement = { id: number, imageSrc: string, name: string, description: string, unlock: string }
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
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/22/Achievement_Cain_icon.png/revision/latest?cb=20210821061223",
        "name": "Cain",
        "description": "Unlocked a new character.",
        "unlock": "Hold 55 Coins at one time",
        "id": 2
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/eb/Achievement_Judas_icon.png/revision/latest?cb=20210821062019",
        "name": "Judas",
        "description": "Unlocked a new character.",
        "unlock": "Defeat Satan",
        "id": 3
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/92/Achievement_The_Womb_icon.png/revision/latest?cb=20210821061250",
        "name": "The Womb",
        "description": "Chapter 4 - The Womb unlocked.",
        "unlock": "Defeat Mom",
        "id": 4
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/bd/Achievement_The_Harbingers_icon.png/revision/latest?cb=20210821061316",
        "name": "The Harbingers",
        "description": "The horsemen are loose.",
        "unlock": "Defeat Mom",
        "id": 5
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/17/Achievement_A_Cube_of_Meat_icon.png/revision/latest?cb=20210821061342",
        "name": "A Cube of Meat",
        "description": "Unlocked a new item. (Also unlocks the Ball of Bandages)",
        "unlock": "Defeat Mom",
        "id": 6
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4d/Achievement_The_Book_of_Revelations_icon.png/revision/latest?cb=20210821061409",
        "name": "The Book of Revelations",
        "description": "Unlocked a new item.",
        "unlock": "Defeat a Harbinger",
        "id": 7
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0d/Achievement_A_Noose_icon.png/revision/latest?cb=20210821061526",
        "name": "A Noose",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Mom's Heart 3 times",
        "id": 8
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/09/Achievement_The_Nail_icon.png/revision/latest?cb=20210821061500",
        "name": "The Nail",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Azazel",
        "id": 9
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/98/Achievement_A_Quarter_icon.png/revision/latest?cb=20210821061435",
        "name": "A Quarter",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Mom's Heart 8 times",
        "id": 10
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/40/Achievement_A_Fetus_in_a_Jar_icon.png/revision/latest?cb=20210821062046",
        "name": "A Fetus in a Jar",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Mom's Heart 9 times",
        "id": 11
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/24/Achievement_A_Small_Rock_icon.png/revision/latest?cb=20210821062112",
        "name": "A Small Rock",
        "description": "Unlocked a new item.",
        "unlock": "Destroy 100 Tinted Rocks",
        "id": 12
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a6/Achievement_Monstro%27s_Tooth_icon.png/revision/latest?cb=20210821062138",
        "name": "Monstro's Tooth",
        "description": "Unlocked a new item.",
        "unlock": "Beat Chapter 1",
        "id": 13
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ef/Achievement_Lil%27_Chubby_icon.png/revision/latest?cb=20210821062204",
        "name": "Lil' Chubby",
        "description": "Unlocked a new item.",
        "unlock": "Beat Chapter 2",
        "id": 14
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/96/Achievement_Loki%27s_Horns_icon.png/revision/latest?cb=20210821062230",
        "name": "Loki's Horns",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Lokii",
        "id": 15
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e6/Achievement_Something_From_The_Future_icon.png/revision/latest?cb=20210821062255",
        "name": "Something From The Future",
        "description": "New boss in the basement!",
        "unlock": "Beat Basement 40 times",
        "id": 16
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/58/Achievement_Something_Cute_icon.png/revision/latest?cb=20210821062320",
        "name": "Something Cute",
        "description": "New boss in the caves!",
        "unlock": "Beat Chapter 2 30 times",
        "id": 17
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/db/Achievement_Something_Sticky_icon.png/revision/latest?cb=20210821062345",
        "name": "Something Sticky",
        "description": "New boss in the depths!",
        "unlock": "Beat Chapter 3 20 times",
        "id": 18
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/16/Achievement_A_Bandage_icon.png/revision/latest?cb=20210821062409",
        "name": "A Bandage",
        "description": "Unlocked a new item.",
        "unlock": "Make a Super Bandage Girl by picking up 4 copies of Ball of Bandages in one run; see Unlocking Super Meat Boy & Super Bandage Girl",
        "id": 19
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/86/Achievement_A_Cross_icon.png/revision/latest?cb=20210821062434",
        "name": "A Cross",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Magdalene",
        "id": 20
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/db/Achievement_A_Bag_of_Pennies_icon.png/revision/latest?cb=20210821062500",
        "name": "A Bag of Pennies",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Cain",
        "id": 21
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/93/Achievement_The_Book_of_Sin_icon.png/revision/latest?cb=20210821062527",
        "name": "The Book of Sin",
        "description": "Unlocked a new item.",
        "unlock": "Defeat all 7 Deadly Sins",
        "id": 22
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/59/Achievement_Little_Gish_icon.png/revision/latest?cb=20210821062551",
        "name": "Little Gish",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Gish",
        "id": 23
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c7/Achievement_Little_Steven_icon.png/revision/latest?cb=20210821062617",
        "name": "Little Steven",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Steven",
        "id": 24
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0c/Achievement_Little_C.H.A.D._icon.png/revision/latest?cb=20210821062643",
        "name": "Little C.H.A.D.",
        "description": "Unlocked a new item.",
        "unlock": "Defeat C.H.A.D.",
        "id": 25
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1d/Achievement_A_Gamekid_icon.png/revision/latest?cb=20210821063515",
        "name": "A Gamekid",
        "description": "Unlocked a new item.",
        "unlock": "Visit 10 Arcades",
        "id": 26
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6e/Achievement_A_Halo_icon.png/revision/latest?cb=20210821063542",
        "name": "A Halo",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Mom, Mom's Heart, or It Lives! using The Bible or XV - The Devil?",
        "id": 27
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/56/Achievement_Mr._Mega_icon.png/revision/latest?cb=20210821062708",
        "name": "Mr. Mega",
        "description": "Unlocked a new item.",
        "unlock": "Destroy 10 Tinted Rocks",
        "id": 28
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fe/Achievement_The_D6_icon.png/revision/latest?cb=20210821062734",
        "name": "The D6",
        "description": "Isaac now holds the D6!",
        "unlock": "Defeat Isaac as  ???",
        "id": 29
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/58/Achievement_The_Scissors_icon.png/revision/latest?cb=20210821062800",
        "name": "The Scissors",
        "description": "Unlocked a new item.",
        "unlock": "Die 100 times",
        "id": 30
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/78/Achievement_The_Parasite_icon.png/revision/latest?cb=20210821062826",
        "name": "The Parasite",
        "description": "Unlocked a new item.",
        "unlock": "Pick up any 2 of the following items in a single run: Bob's Rotten Head, Dead Cat, Cricket's Head, and Tammy's Head ( Any 2 items that have the 'dead' item tag)",
        "id": 31
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/84/Achievement_Blue_Baby_Character_icon.png/revision/latest?cb=20210821062852",
        "name": "???",
        "description": "Unlocked a new character.",
        "unlock": "Defeat Mom's Heart 10 times",
        "id": 32
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ac/Achievement_Everything_Is_Terrible%21%21%21_icon.png/revision/latest?cb=20210821062917",
        "name": "Everything Is Terrible!!!",
        "description": "The game just got harder!",
        "unlock": "Defeat Mom's Heart 5 times",
        "id": 33
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8b/Achievement_It_Lives%21_icon.png/revision/latest?cb=20210821062943",
        "name": "It Lives!",
        "description": "Your future's past waits.",
        "unlock": "Defeat Mom's Heart 11 times",
        "id": 34
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/25/Achievement_Mom%27s_Contact_icon.png/revision/latest?cb=20210821063010",
        "name": "Mom's Contact",
        "description": "Unlocked a new item.",
        "unlock": "Obtain three Yes Mother? items in one run",
        "id": 35
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/87/Achievement_The_Necronomicon_icon.png/revision/latest?cb=20210821063036",
        "name": "The Necronomicon",
        "description": "Unlocked a new item.",
        "unlock": "Use XIII - Death 4 times",
        "id": 36
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/19/Achievement_Basement_Boy_icon.png/revision/latest?cb=20210821063102",
        "name": "Basement Boy",
        "description": "Beat basement without taking damage.",
        "unlock": "Beat Chapter 1 without taking damage",
        "id": 37
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3c/Achievement_Spelunker_Boy_icon.png/revision/latest?cb=20210821063127",
        "name": "Spelunker Boy",
        "description": "Beat caves without taking damage.",
        "unlock": "Beat Chapter 2 without taking damage",
        "id": 38
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3c/Achievement_Dark_Boy_icon.png/revision/latest?cb=20210821063152",
        "name": "Dark Boy",
        "description": "Beat depths without taking damage.",
        "unlock": "Beat Chapter 3 without taking damage",
        "id": 39
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0a/Achievement_Mama%27s_Boy_icon.png/revision/latest?cb=20210821063218",
        "name": "Mama's Boy",
        "description": "Beat womb without taking damage.",
        "unlock": "Beat Chapter 4 without taking damage",
        "id": 40
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9a/Achievement_Golden_God%21_icon.png/revision/latest?cb=20210821063242",
        "name": "Golden God!",
        "description": "You are the best!!",
        "unlock": "Defeat ??? and The Lamb",
        "id": 41
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a7/Achievement_Eve_icon.png/revision/latest?cb=20210821063306",
        "name": "Eve",
        "description": "Unlocked a new character.",
        "unlock": "Don't pick up any Hearts for 2 floors in a row",
        "id": 42
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ae/Achievement_Mom%27s_Knife_icon.png/revision/latest?cb=20210821063332",
        "name": "Mom's Knife",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Isaac",
        "id": 43
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/76/Achievement_The_Razor_icon.png/revision/latest?cb=20210821063358",
        "name": "The Razor",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Eve",
        "id": 44
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1f/Achievement_Guardian_Angel_icon.png/revision/latest?cb=20210821063422",
        "name": "Guardian Angel",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Magdalene",
        "id": 45
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/61/Achievement_A_Bag_of_Bombs_icon.png/revision/latest?cb=20210821063448",
        "name": "A Bag of Bombs",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Cain",
        "id": 46
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/df/Achievement_Demon_Baby_icon.png/revision/latest?cb=20210821063607",
        "name": "Demon Baby",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Azazel",
        "id": 47
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6a/Achievement_Forget_Me_Now_icon.png/revision/latest?cb=20210821063633",
        "name": "Forget Me Now",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  ???",
        "id": 48
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6c/Achievement_The_D20_icon.png/revision/latest?cb=20210821063658",
        "name": "The D20",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Isaac",
        "id": 49
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0f/Achievement_Celtic_Cross_icon.png/revision/latest?cb=20210821064323",
        "name": "Celtic Cross",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Magdalene",
        "id": 50
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/35/Achievement_Abel_icon.png/revision/latest?cb=20210821063724",
        "name": "Abel",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Cain",
        "id": 51
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/97/Achievement_Curved_Horn_icon.png/revision/latest?cb=20210821063750",
        "name": "Curved Horn",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Judas",
        "id": 52
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/53/Achievement_Sacrificial_Dagger_icon.png/revision/latest?cb=20210821063815",
        "name": "Sacrificial Dagger",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Eve",
        "id": 53
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c9/Achievement_Bloody_Lust_icon.png/revision/latest?cb=20210821063842",
        "name": "Bloody Lust",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Samson",
        "id": 54
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/86/Achievement_Blood_Penny_icon.png/revision/latest?cb=20210821063906",
        "name": "Blood Penny",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Samson",
        "id": 55
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b7/Achievement_Blood_Rights_icon.png/revision/latest?cb=20210821064256",
        "name": "Blood Rights",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Samson",
        "id": 56
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/95/Achievement_The_Polaroid_icon.png/revision/latest?cb=20210821063932",
        "name": "The Polaroid",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac 5 times",
        "id": 57
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/28/Achievement_Dad%27s_Key_icon.png/revision/latest?cb=20210821063957",
        "name": "Dad's Key",
        "description": "Unlocked a new item.",
        "unlock": "Pick up both Key Pieces from the Angels in one run",
        "id": 58
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/dd/Achievement_Blue_Candle_icon.png/revision/latest?cb=20210821064023",
        "name": "Blue Candle",
        "description": "Unlocked a new item.",
        "unlock": "Donate 900 coins to the Donation Machine",
        "id": 59
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/cd/Achievement_Burnt_Penny_icon.png/revision/latest?cb=20210821064048",
        "name": "Burnt Penny",
        "description": "Unlocked a new item.",
        "unlock": "Complete Beans! (challenge #13)",
        "id": 60
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/17/Achievement_Lucky_Toe_icon.png/revision/latest?cb=20210821064113",
        "name": "Lucky Toe",
        "description": "Unlocked a new item.",
        "unlock": "Blow up 20 Shopkeepers",
        "id": 61
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/63/Achievement_Epic_Fetus_icon.png/revision/latest?cb=20210821064139",
        "name": "Epic Fetus",
        "description": "Unlocked a new item.",
        "unlock": "Complete The Family Man (challenge #19)",
        "id": 62
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/85/Achievement_SMB_Super_Fan_icon.png/revision/latest?cb=20210821064206",
        "name": "SMB Super Fan",
        "description": "Unlocked a new item.",
        "unlock": "Complete It's in the Cards (challenge #14)",
        "id": 63
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/90/Achievement_Counterfeit_Coin_icon.png/revision/latest?cb=20210821064231",
        "name": "Counterfeit Coin",
        "description": "Unlocked a new item.",
        "unlock": "Play either Shell Game or  Hell Game 100 times",
        "id": 64
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9e/Achievement_Guppy%27s_Hairball_icon.png/revision/latest?cb=20210821064349",
        "name": "Guppy's Hairball",
        "description": "Unlocked a new item.",
        "unlock": "Become Guppy",
        "id": 65
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a7/Achievement_A_Forgotten_Horseman_icon.png/revision/latest?cb=20210821064414",
        "name": "A Forgotten Horseman",
        "description": "Unlocked a new boss!",
        "unlock": "Take 10 Angel Room items",
        "id": 66
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/65/Achievement_Samson_icon.png/revision/latest?cb=20210821064439",
        "name": "Samson",
        "description": "Unlocked a new character.",
        "unlock": "Complete 2 floors in a row without taking damage",
        "id": 67
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d4/Achievement_Something_Icky_icon.png/revision/latest?cb=20210821064503",
        "name": "Something Icky",
        "description": "New boss in the womb!",
        "unlock": "Defeat Isaac 10 times",
        "id": 68
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1b/Achievement_%21Platinum_God%21_icon.png/revision/latest?cb=20210821072552",
        "name": "!Platinum God!",
        "description": "OMG!",
        "unlock": "Collect all non-DLC items in the game, and unlock all of the secrets and endings (minus  The Lost and his 6 unlockable items)",
        "id": 69
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/10/Achievement_Isaac%27s_Head_icon.png/revision/latest?cb=20210821064528",
        "name": "Isaac's Head",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Isaac",
        "id": 70
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/92/Achievement_Maggy%27s_Faith_icon.png/revision/latest?cb=20210821064553",
        "name": "Maggy's Faith",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Magdalene",
        "id": 71
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c8/Achievement_Judas%27_Tongue_icon.png/revision/latest?cb=20210821064618",
        "name": "Judas' Tongue",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Judas",
        "id": 72
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f8/Achievement_Blue_Baby%27s_Soul_icon.png/revision/latest?cb=20210821072618",
        "name": "???'s Soul",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  ???",
        "id": 73
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/80/Achievement_Samson%27s_Lock_icon.png/revision/latest?cb=20210821064644",
        "name": "Samson's Lock",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Samson",
        "id": 74
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/04/Achievement_Cain%27s_Eye_icon.png/revision/latest?cb=20210821064709",
        "name": "Cain's Eye",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Cain",
        "id": 75
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/47/Achievement_Eve%27s_Bird_Foot_icon.png/revision/latest?cb=20210821064737",
        "name": "Eve's Bird Foot",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Eve",
        "id": 76
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/42/Achievement_The_Left_Hand_icon.png/revision/latest?cb=20210821064803",
        "name": "The Left Hand",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Pride as any character, or ??? as  Judas",
        "id": 77
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/82/Achievement_The_Negative_icon.png/revision/latest?cb=20210821064828",
        "name": "The Negative",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan 5 times",
        "id": 78
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d4/Achievement_Azazel_icon.png/revision/latest?cb=20210821065512",
        "name": "Azazel",
        "description": "Unlocked a new character.",
        "unlock": "Make 3 Deals with the Devil in one run",
        "id": 79
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/ff/Achievement_Lazarus_icon.png/revision/latest?cb=20210821064853",
        "name": "Lazarus",
        "description": "Unlocked a new character.",
        "unlock": "Have 4 or more Soul Hearts at one time",
        "id": 80
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/39/Achievement_Eden_icon.png/revision/latest?cb=20210821064919",
        "name": "Eden",
        "description": "Unlocked a new character.",
        "unlock": "Complete Chapter 4",
        "id": 81
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b9/Achievement_The_Lost_icon.png/revision/latest?cb=20210821064945",
        "name": "The Lost",
        "description": "Unlocked a new character.",
        "unlock": " It's complicated Die in a Sacrifice Room while holding Missing Poster",
        "id": 82
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7b/Achievement_Dead_Boy_icon.png/revision/latest?cb=20210821073724",
        "name": "Dead Boy",
        "description": "Beat Chest or Dark Room without taking damage.",
        "unlock": "Complete Chapter 6 without taking damage",
        "id": 83
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/60/Achievement_The_Real_Platinum_God_icon.png/revision/latest?cb=20210821072643",
        "name": "The Real Platinum God",
        "description": "111% now stop playing!",
        "unlock": "Collect every non-DLC item, and unlock every secret and ending.",
        "id": 84
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/20/Achievement_Lucky_Rock_icon.png/revision/latest?cb=20210821065011",
        "name": "Lucky Rock",
        "description": "Destroy 100 rocks.",
        "unlock": "Destroy 100 rocks",
        "id": 85
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1c/Achievement_The_Cellar_icon.png/revision/latest?cb=20210821072708",
        "name": "The Cellar",
        "description": "Alt stage to the basement.",
        "unlock": "Beat all Basement bosses ( except Baby Plum) (not restricted to beating bosses in The Basement)",
        "id": 86
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/18/Achievement_The_Catacombs_icon.png/revision/latest?cb=20210821072735",
        "name": "The Catacombs",
        "description": "Alt stage to the caves.",
        "unlock": "Beat all Caves bosses ( except Bumbino) (not restricted to beating bosses in The Caves)",
        "id": 87
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/74/Achievement_The_Necropolis_icon.png/revision/latest?cb=20210821072801",
        "name": "The Necropolis",
        "description": "Alt stage to the depths.",
        "unlock": "Beat all Depths bosses ( except Reap Creep) (not restricted to beating bosses in The Depths)",
        "id": 88
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b8/Achievement_Rune_of_Hagalaz_icon.png/revision/latest?cb=20210821065433",
        "name": "Rune of Hagalaz",
        "description": "Unlocked a new item.",
        "unlock": "Complete Pitch Black (challenge #1)",
        "id": 89
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/58/Achievement_Rune_of_Jera_icon.png/revision/latest?cb=20210821065035",
        "name": "Rune of Jera",
        "description": "Unlocked a new item.",
        "unlock": "Complete High Brow (challenge #2)",
        "id": 90
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/09/Achievement_Rune_of_Ehwaz_icon.png/revision/latest?cb=20210821065103",
        "name": "Rune of Ehwaz",
        "description": "Unlocked a new item.",
        "unlock": "Complete Head Trauma (challenge #3)",
        "id": 91
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/64/Achievement_Rune_of_Dagaz_icon.png/revision/latest?cb=20210821065129",
        "name": "Rune of Dagaz",
        "description": "Unlocked a new item.",
        "unlock": "Complete Darkness Falls (challenge #4)",
        "id": 92
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/32/Achievement_Rune_of_Ansuz_icon.png/revision/latest?cb=20210821065154",
        "name": "Rune of Ansuz",
        "description": "Unlocked a new item.",
        "unlock": "Complete The Tank (challenge #5)",
        "id": 93
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/08/Achievement_Rune_of_Perthro_icon.png/revision/latest?cb=20210821065221",
        "name": "Rune of Perthro",
        "description": "Unlocked a new item.",
        "unlock": "Complete Solar System (challenge #6)",
        "id": 94
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/50/Achievement_Rune_of_Berkano_icon.png/revision/latest?cb=20210821065247",
        "name": "Rune of Berkano",
        "description": "Unlocked a new item.",
        "unlock": "Complete Purist (challenge #20)",
        "id": 95
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/24/Achievement_Rune_of_Algiz_icon.png/revision/latest?cb=20210821065313",
        "name": "Rune of Algiz",
        "description": "Unlocked a new item.",
        "unlock": "Complete Cat Got Your Tongue (challenge #8)",
        "id": 96
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7b/Achievement_Chaos_Card_icon.png/revision/latest?cb=20210821065340",
        "name": "Chaos Card",
        "description": "Unlocked a new item.",
        "unlock": "Complete Demo Man (challenge #9)",
        "id": 97
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f9/Achievement_Credit_Card_icon.png/revision/latest?cb=20210821065406",
        "name": "Credit Card",
        "description": "Unlocked a new item.",
        "unlock": "Complete Cursed! (challenge #10)",
        "id": 98
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/58/Achievement_Rules_Card_icon.png/revision/latest?cb=20210821065656",
        "name": "Rules Card",
        "description": "Unlocked a new item.",
        "unlock": "Complete Glass Cannon (challenge #11)",
        "id": 99
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/89/Achievement_Card_Against_Humanity_icon.png/revision/latest?cb=20210821065629",
        "name": "Card Against Humanity",
        "description": "Unlocked a new item.",
        "unlock": "Complete When Life Gives You Lemons (challenge #12)",
        "id": 100
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c7/Achievement_Swallowed_Penny_icon.png/revision/latest?cb=20210821065539",
        "name": "Swallowed Penny",
        "description": "Unlocked a new item.",
        "unlock": "Complete Slow Roll (challenge #15)",
        "id": 101
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e4/Achievement_Robo-Baby_2.0_icon.png/revision/latest?cb=20210821065604",
        "name": "Robo-Baby 2.0",
        "description": "Unlocked a new item.",
        "unlock": "Complete Computer Savvy (challenge #16)",
        "id": 102
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/14/Achievement_Death%27s_Touch_icon.png/revision/latest?cb=20210821070218",
        "name": "Death's Touch",
        "description": "Unlocked a new item.",
        "unlock": "Complete Waka Waka (challenge #17)",
        "id": 103
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/81/Achievement_Technology_.5_icon.png/revision/latest?cb=20210821070244",
        "name": "Technology .5",
        "description": "Unlocked a new item.",
        "unlock": "Complete The Host (challenge #18)",
        "id": 104
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/aa/Achievement_Missing_No._icon.png/revision/latest?cb=20210821070310",
        "name": "Missing No.",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Lazarus",
        "id": 105
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ac/Achievement_Isaac%27s_Tears_icon.png/revision/latest?cb=20210821070337",
        "name": "Isaac's Tears",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Isaac",
        "id": 106
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/29/Achievement_Guillotine_icon.png/revision/latest?cb=20210821070404",
        "name": "Guillotine",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Judas",
        "id": 107
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/56/Achievement_Judas%27_Shadow_icon.png/revision/latest?cb=20210821070430",
        "name": "Judas' Shadow",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Judas",
        "id": 108
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d4/Achievement_Maggy%27s_Bow_icon.png/revision/latest?cb=20210821070857",
        "name": "Maggy's Bow",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Magdalene",
        "id": 109
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/37/Achievement_Cain%27s_Other_Eye_icon.png/revision/latest?cb=20210821070924",
        "name": "Cain's Other Eye",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Cain",
        "id": 110
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/cd/Achievement_Black_Lipstick_icon.png/revision/latest?cb=20210821070950",
        "name": "Black Lipstick",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Eve",
        "id": 111
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a3/Achievement_Eve%27s_Mascara_icon.png/revision/latest?cb=20210821071016",
        "name": "Eve's Mascara",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Eve",
        "id": 112
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/75/Achievement_Fate_icon.png/revision/latest?cb=20210821071042",
        "name": "Fate",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  ???",
        "id": 113
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/01/Achievement_Blue_Baby%27s_Only_Friend_icon.png/revision/latest?cb=20210821073632",
        "name": "???'s Only Friend",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  ???",
        "id": 114
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1a/Achievement_Samson%27s_Chains_icon.png/revision/latest?cb=20210821071108",
        "name": "Samson's Chains",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Samson",
        "id": 115
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3c/Achievement_Lazarus%27_Rags_icon.png/revision/latest?cb=20210821071133",
        "name": "Lazarus' Rags",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Lazarus",
        "id": 116
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/23/Achievement_Broken_Ankh_icon.png/revision/latest?cb=20210821071158",
        "name": "Broken Ankh",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Lazarus",
        "id": 117
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/71/Achievement_Store_Credit_icon.png/revision/latest?cb=20210821071223",
        "name": "Store Credit",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Lazarus",
        "id": 118
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a5/Achievement_Pandora%27s_Box_icon.png/revision/latest?cb=20210821071248",
        "name": "Pandora's Box",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Lazarus",
        "id": 119
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/91/Achievement_Suicide_King_icon.png/revision/latest?cb=20210821073539",
        "name": "Suicide King",
        "description": "Unlocked a new item.",
        "unlock": "Complete Suicide King (challenge #7)",
        "id": 120
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/ce/Achievement_Blank_Card_icon.png/revision/latest?cb=20210821071314",
        "name": "Blank Card",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Eden",
        "id": 121
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f6/Achievement_Book_of_Secrets_icon.png/revision/latest?cb=20210821071340",
        "name": "Book of Secrets",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Eden",
        "id": 122
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8a/Achievement_Mysterious_Paper_icon.png/revision/latest?cb=20210821071406",
        "name": "Mysterious Paper",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Eden",
        "id": 123
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/14/Achievement_Mystery_Sack_icon.png/revision/latest?cb=20210821071432",
        "name": "Mystery Sack",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Eden",
        "id": 124
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c3/Achievement_Undefined_icon.png/revision/latest?cb=20210821071458",
        "name": "Undefined",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Eden",
        "id": 125
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f3/Achievement_Satanic_Bible_icon.png/revision/latest?cb=20210821071524",
        "name": "Satanic Bible",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Azazel",
        "id": 126
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a0/Achievement_Daemon%27s_Tail_icon.png/revision/latest?cb=20210821071550",
        "name": "Daemon's Tail",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Azazel",
        "id": 127
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/ca/Achievement_Abaddon_icon.png/revision/latest?cb=20210821071615",
        "name": "Abaddon",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Azazel",
        "id": 128
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1d/Achievement_Isaac%27s_Heart_icon.png/revision/latest?cb=20210821071642",
        "name": "Isaac's Heart",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  The Lost",
        "id": 129
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e1/Achievement_The_Mind_icon.png/revision/latest?cb=20210821071733",
        "name": "The Mind",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  The Lost",
        "id": 130
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/60/Achievement_The_Body_icon.png/revision/latest?cb=20210821071758",
        "name": "The Body",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  The Lost",
        "id": 131
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a3/Achievement_The_Soul_icon.png/revision/latest?cb=20210821071824",
        "name": "The Soul",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  The Lost",
        "id": 132
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f2/Achievement_The_D100_icon.png/revision/latest?cb=20210821071851",
        "name": "The D100",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  The Lost",
        "id": 133
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c6/Achievement_Blue_Map_icon.png/revision/latest?cb=20210821071917",
        "name": "Blue Map",
        "description": "Unlocked a new item.",
        "unlock": "Donate 10 Coins to the Donation Machine",
        "id": 134
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/da/Achievement_There%27s_Options_icon.png/revision/latest?cb=20210821071944",
        "name": "There's Options",
        "description": "Unlocked a new item.",
        "unlock": "Donate 50 Coins to the Donation Machine",
        "id": 135
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f8/Achievement_Black_Candle_icon.png/revision/latest?cb=20210821072011",
        "name": "Black Candle",
        "description": "Unlocked a new item",
        "unlock": "Donate 150 Coins to the Donation Machine",
        "id": 136
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/dd/Achievement_Red_Candle_icon.png/revision/latest?cb=20210821072037",
        "name": "Red Candle",
        "description": "Unlocked a new item.",
        "unlock": "Donate 400 Coins to the Donation Machine",
        "id": 137
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f8/Achievement_Stop_Watch_icon.png/revision/latest?cb=20210821072104",
        "name": "Stop Watch",
        "description": "Unlocked a new item",
        "unlock": "Donate 999 Coins to the Donation Machine",
        "id": 138
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a2/Achievement_Wire_Coat_Hanger_icon.png/revision/latest?cb=20210821072131",
        "name": "Wire Coat Hanger",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Mom's Heart 4 times",
        "id": 139
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/53/Achievement_Ipecac_icon.png/revision/latest?cb=20210821072157",
        "name": "Ipecac",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Mom's Heart 6 times",
        "id": 140
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ee/Achievement_Experimental_Treatment_icon.png/revision/latest?cb=20210821072223",
        "name": "Experimental Treatment",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Mom's Heart 7 times",
        "id": 141
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/94/Achievement_Krampus_icon.png/revision/latest?cb=20210821072825",
        "name": "Krampus",
        "description": "Unlocked another miniboss!",
        "unlock": "Take 20 items from Devil Rooms",
        "id": 142
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/74/Achievement_Head_of_Krampus_icon.png/revision/latest?cb=20210821072249",
        "name": "Head of Krampus",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Krampus",
        "id": 143
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2b/Achievement_Super_Meat_Boy_icon.png/revision/latest?cb=20210821072852",
        "name": "Super Meat Boy",
        "description": "Built him out of meat cubes.",
        "unlock": "Make a Super Meat Boy by picking up 4 copies of Cube of Meat in one run; see Unlocking Super Meat Boy & Super Bandage Girl",
        "id": 144
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/dd/Achievement_Butter_Bean_icon.png/revision/latest?cb=20210821072315",
        "name": "Butter Bean",
        "description": "Unlocked a new item.",
        "unlock": "Destroy 100 Poops",
        "id": 145
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/32/Achievement_Little_Baggy_icon.png/revision/latest?cb=20210821072343",
        "name": "Little Baggy",
        "description": "Unlocked a new item.",
        "unlock": "Pick up any 2 of the following items in a single run: Roid Rage, The Virus, Growth Hormones, Experimental Treatment, and Speed Ball ( Any 2 items that have the 'syringe' item tag)",
        "id": 146
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/bb/Achievement_Blood_Bag_icon.png/revision/latest?cb=20210821072410",
        "name": "Blood Bag",
        "description": "Unlocked a new item.",
        "unlock": "Use the Blood Donation Machine 30 times",
        "id": 147
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0b/Achievement_The_D4_icon.png/revision/latest?cb=20210821072435",
        "name": "The D4",
        "description": "Unlocked a new item.",
        "unlock": "Blow up 30 Slot Machine",
        "id": 148
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3c/Achievement_Missing_Poster_icon.png/revision/latest?cb=20210821072501",
        "name": "Missing Poster",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Isaac",
        "id": 149
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1f/Achievement_Rubber_Cement_icon.png/revision/latest?cb=20210821072527",
        "name": "Rubber Cement",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Mom's Heart 2 times",
        "id": 150
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8a/Achievement_Store_Upgrade_lv.1_icon.png/revision/latest?cb=20210821072917",
        "name": "Store Upgrade lv.1",
        "description": "Donated 20 pennies to the shop.",
        "unlock": "Donate 20 Coins to the Donation Machine",
        "id": 151
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e0/Achievement_Store_Upgrade_lv.2_icon.png/revision/latest?cb=20210821072941",
        "name": "Store Upgrade lv.2",
        "description": "Donated 100 pennies to the shop.",
        "unlock": "Donate 100 Coins to the Donation Machine",
        "id": 152
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d7/Achievement_Store_Upgrade_lv.3_icon.png/revision/latest?cb=20210821073005",
        "name": "Store Upgrade lv.3",
        "description": "Donated 200 pennies to the shop.",
        "unlock": "Donate 200 Coins to the Donation Machine",
        "id": 153
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3e/Achievement_Store_Upgrade_lv.4_icon.png/revision/latest?cb=20210821073029",
        "name": "Store Upgrade lv.4",
        "description": "Donated 600 pennies to the shop.",
        "unlock": "Donate 600 Coins to the Donation Machine",
        "id": 154
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/dd/Achievement_Angels_icon.png/revision/latest?cb=20210821073053",
        "name": "Angels",
        "description": "They are waiting.",
        "unlock": "Complete Chapter 6",
        "id": 155
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/42/Achievement_Godhead_icon.png/revision/latest?cb=20210821073119",
        "name": "Godhead",
        "description": "Unlocked a new item.",
        "unlock": "Earn all  5 /  9 /  10 /  12 Completion Marks on Hard mode as  The Lost",
        "id": 156
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a0/Achievement_Darkness_Falls_icon.png/revision/latest?cb=20210821073210",
        "name": "Darkness Falls",
        "description": "Unlocked Challenge #4.",
        "unlock": " Defeat Mom's Heart 11 times and unlock  Eve Defeat Mom's Heart 11 times and defeat ??? as  Eve",
        "id": 157
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7f/Achievement_The_Tank_icon.png/revision/latest?cb=20210821073145",
        "name": "The Tank",
        "description": "Unlocked Challenge #5.",
        "unlock": "Have 7 or more Red Heart Containers at one time",
        "id": 158
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d3/Achievement_Solar_System_icon.png/revision/latest?cb=20210821073238",
        "name": "Solar System",
        "description": "Unlocked Challenge #6.",
        "unlock": "Defeat Mom's Heart 3 times",
        "id": 159
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/24/Achievement_Suicide_King_2_icon.png/revision/latest?cb=20210821073606",
        "name": "Suicide King",
        "description": "Unlocked Challenge #7.",
        "unlock": "Defeat Mom's Heart 11 times and unlock  Lazarus",
        "id": 160
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6b/Achievement_Cat_Got_Your_Tongue_icon.png/revision/latest?cb=20210821073305",
        "name": "Cat Got Your Tongue",
        "description": "Unlocked Challenge #8.",
        "unlock": "Become Guppy",
        "id": 161
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d6/Achievement_Demo_Man_icon.png/revision/latest?cb=20210821073331",
        "name": "Demo Man",
        "description": "Unlocked Challenge #9.",
        "unlock": "Defeat Mom's Heart 9 times",
        "id": 162
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/45/Achievement_Cursed%21_icon.png/revision/latest?cb=20210821073357",
        "name": "Cursed!",
        "description": "Unlocked Challenge #10.",
        "unlock": "Have 7 or more Red Heart Containers at one time",
        "id": 163
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fd/Achievement_Glass_Cannon_icon.png/revision/latest?cb=20210821073423",
        "name": "Glass Cannon",
        "description": "Unlocked Challenge #11.",
        "unlock": "Beat The Family Man (challenge #19), defeat Lokii, and unlock  Judas",
        "id": 164
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f5/Achievement_The_Family_Man_icon.png/revision/latest?cb=20210821073514",
        "name": "The Family Man",
        "description": "Unlocked Challenge #19.",
        "unlock": "Pick up both Key Pieces from the Angels in one run",
        "id": 165
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/27/Achievement_Purist_icon.png/revision/latest?cb=20210821073449",
        "name": "Purist",
        "description": "Unlocked Challenge #20.",
        "unlock": "Defeat Mom",
        "id": 166
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6d/Achievement_Lost_Baby_icon.png/revision/latest?cb=20210821070152",
        "name": "Lost Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  Isaac",
        "id": 167
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2f/Achievement_Cute_Baby_icon.png/revision/latest?cb=20210821070125",
        "name": "Cute Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  Magdalene",
        "id": 168
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/ff/Achievement_Crow_Baby_icon.png/revision/latest?cb=20210821070058",
        "name": "Crow Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  Eve",
        "id": 169
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3b/Achievement_Shadow_Baby_icon.png/revision/latest?cb=20210821070031",
        "name": "Shadow Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  Judas",
        "id": 170
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4f/Achievement_Glass_Baby_icon.png/revision/latest?cb=20210821070004",
        "name": "Glass Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  Cain",
        "id": 171
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f1/Achievement_Wrapped_Baby_icon.png/revision/latest?cb=20210821065936",
        "name": "Wrapped Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": " Defeat Mom's Heart on Hard mode as  Azazel Defeat Mom's Heart on Hard mode as  Lazarus",
        "id": 172
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4c/Achievement_Begotten_Baby_icon.png/revision/latest?cb=20210821065907",
        "name": "Begotten Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": " Defeat Mom's Heart on Hard mode as  Lazarus Defeat Mom's Heart on Hard mode as  Azazel",
        "id": 173
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/21/Achievement_Dead_Baby_icon.png/revision/latest?cb=20210821065840",
        "name": "Dead Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  ???",
        "id": 174
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f9/Achievement_-0-_Baby_icon.png/revision/latest?cb=20210821065814",
        "name": "-0- Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  The Lost",
        "id": 175
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/17/Achievement_Glitch_Baby_icon.png/revision/latest?cb=20210821065748",
        "name": "Glitch Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  Eden",
        "id": 176
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/62/Achievement_Fighting_Baby_icon.png/revision/latest?cb=20210821065722",
        "name": "Fighting Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  Samson",
        "id": 177
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c8/Achievement_Lord_of_the_Flies_icon.png/revision/latest?cb=20210821073658",
        "name": "Lord of the Flies",
        "description": "You became Lord of the Flies.",
        "unlock": "Become Beelzebub",
        "id": 178
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/20/Achievement_Fart_Baby_icon.png/revision/latest?cb=20210821143712",
        "name": " Fart Baby",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Isaac",
        "id": 179
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/53/Achievement_Purity_icon.png/revision/latest?cb=20210821144920",
        "name": " Purity",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Magdalene",
        "id": 180
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/49/Achievement_D12_icon.png/revision/latest?cb=20210821143434",
        "name": " D12",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Cain",
        "id": 181
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/29/Achievement_Betrayal_icon.png/revision/latest?cb=20210821142526",
        "name": " Betrayal",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Judas",
        "id": 182
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/94/Achievement_Fate%27s_Reward_icon.png/revision/latest?cb=20210821143737",
        "name": " Fate's Reward",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  ???",
        "id": 183
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6d/Achievement_Athame_icon.png/revision/latest?cb=20210821142435",
        "name": " Athame",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Eve",
        "id": 184
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/85/Achievement_Blind_Rage_icon.png/revision/latest?cb=20210821142736",
        "name": " Blind Rage",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Samson",
        "id": 185
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3f/Achievement_Maw_of_the_Void_icon.png/revision/latest?cb=20210821144622",
        "name": " Maw of the Void",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Azazel",
        "id": 186
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/18/Achievement_Empty_Vessel_icon.png/revision/latest?cb=20210821143620",
        "name": " Empty Vessel",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Lazarus",
        "id": 187
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ee/Achievement_Eden%27s_Blessing_icon.png/revision/latest?cb=20210821143554",
        "name": " Eden's Blessing",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Eden",
        "id": 188
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/af/Achievement_Sworn_Protector_icon.png/revision/latest?cb=20210821145400",
        "name": " Sworn Protector",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  The Lost",
        "id": 189
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1d/Achievement_Incubus_icon.png/revision/latest?cb=20210821144228",
        "name": " Incubus",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Lilith",
        "id": 190
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fc/Achievement_Keeper_now_holds..._A_Penny%21_icon.png/revision/latest?cb=20210821185920",
        "name": " Keeper now holds... A Penny!",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Keeper",
        "id": 191
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b0/Achievement_Lil%27_Chest_icon.png/revision/latest?cb=20210821144412",
        "name": " Lil' Chest",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Isaac",
        "id": 192
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0e/Achievement_Censer_icon.png/revision/latest?cb=20210821143158",
        "name": " Censer",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Magdalene",
        "id": 193
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6a/Achievement_Evil_Eye_icon.png/revision/latest?cb=20210821143646",
        "name": " Evil Eye",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Cain",
        "id": 194
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3d/Achievement_My_Shadow_icon.png/revision/latest?cb=20210821144647",
        "name": " My Shadow",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Judas",
        "id": 195
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d4/Achievement_Cracked_Dice_icon.png/revision/latest?cb=20210821143316",
        "name": " Cracked Dice",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  ???",
        "id": 196
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e9/Achievement_Black_Feather_icon.png/revision/latest?cb=20210821142643",
        "name": " Black Feather",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Eve",
        "id": 197
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a4/Achievement_Lusty_Blood_icon.png/revision/latest?cb=20210821144556",
        "name": " Lusty Blood",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Samson",
        "id": 198
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/29/Achievement_Lilith_icon.png/revision/latest?cb=20210821144437",
        "name": " Lilith",
        "description": "Unlocked a new character.",
        "unlock": "Defeat Ultra Greed as  Azazel",
        "id": 199
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/da/Achievement_Key_Bum_icon.png/revision/latest?cb=20210821144254",
        "name": " Key Bum",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Lazarus",
        "id": 200
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ac/Achievement_GB_Bug_icon.png/revision/latest?cb=20210821143803",
        "name": " GB Bug",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Eden",
        "id": 201
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/74/Achievement_Zodiac_icon.png/revision/latest?cb=20210821145706",
        "name": " Zodiac",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  The Lost",
        "id": 202
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/43/Achievement_Box_of_Friends_icon.png/revision/latest?cb=20210821142921",
        "name": " Box of Friends",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Lilith",
        "id": 203
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c0/Achievement_Rib_of_Greed_icon.png/revision/latest?cb=20210821185804",
        "name": " Rib of Greed",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Keeper",
        "id": 204
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/cb/Achievement_Cry_Baby_icon.png/revision/latest?cb=20210821143342",
        "name": " Cry Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Isaac",
        "id": 205
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0b/Achievement_Red_Baby_icon.png/revision/latest?cb=20210821145011",
        "name": " Red Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Magdalene",
        "id": 206
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d2/Achievement_Green_Baby_icon.png/revision/latest?cb=20210821144015",
        "name": " Green Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Cain",
        "id": 207
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2a/Achievement_Brown_Baby_icon.png/revision/latest?cb=20210821143013",
        "name": " Brown Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Judas",
        "id": 208
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fa/Achievement_Blue_Baby_icon.png/revision/latest?cb=20210821145732",
        "name": " Blue Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  ???",
        "id": 209
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/27/Achievement_Lil%27_Baby_icon.png/revision/latest?cb=20210821144346",
        "name": " Lil' Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Eve",
        "id": 210
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/06/Achievement_Rage_Baby_icon.png/revision/latest?cb=20210821144946",
        "name": " Rage Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Samson",
        "id": 211
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/79/Achievement_Black_Baby_icon.png/revision/latest?cb=20210821142617",
        "name": " Black Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Azazel",
        "id": 212
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/45/Achievement_Long_Baby_icon.png/revision/latest?cb=20210821144504",
        "name": " Long Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Lazarus",
        "id": 213
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/72/Achievement_Yellow_Baby_icon.png/revision/latest?cb=20210821145639",
        "name": " Yellow Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Eden",
        "id": 214
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/41/Achievement_White_Baby_icon.png/revision/latest?cb=20210821145453",
        "name": " White Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  The Lost",
        "id": 215
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/cd/Achievement_Big_Baby_icon.png/revision/latest?cb=20210821142552",
        "name": " Big Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Lilith",
        "id": 216
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ab/Achievement_Noose_Baby_icon.png/revision/latest?cb=20210821185830",
        "name": " Noose Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Keeper",
        "id": 217
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0f/Achievement_Rune_Bag_icon.png/revision/latest?cb=20210821145102",
        "name": " Rune Bag",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Lilith",
        "id": 218
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8e/Achievement_Cambion_Conception_icon.png/revision/latest?cb=20210821143132",
        "name": " Cambion Conception",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Lilith",
        "id": 219
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6e/Achievement_Serpent%27s_Kiss_icon.png/revision/latest?cb=20210821145128",
        "name": " Serpent's Kiss",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Lilith",
        "id": 220
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/00/Achievement_Succubus_icon.png/revision/latest?cb=20210821145310",
        "name": " Succubus",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Lilith",
        "id": 221
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/56/Achievement_Immaculate_Conception_icon.png/revision/latest?cb=20210821144202",
        "name": " Immaculate Conception",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Lilith",
        "id": 222
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a7/Achievement_Goat_Head_Baby_icon.png/revision/latest?cb=20210821143856",
        "name": " Goat Head Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  Lilith",
        "id": 223
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d6/Achievement_Gold_Heart_icon.png/revision/latest?cb=20210821143949",
        "name": " Gold Heart",
        "description": "Unlocked a new item.",
        "unlock": "Complete XXXXXXXXL (challenge #21)",
        "id": 224
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/db/Achievement_Get_out_of_Jail_Free_Card_icon.png/revision/latest?cb=20210821143829",
        "name": " Get out of Jail Free Card",
        "description": "Unlocked a new item.",
        "unlock": "Complete SPEED! (challenge #22)",
        "id": 225
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/cd/Achievement_Gold_Bomb_icon.png/revision/latest?cb=20210821143922",
        "name": " Gold Bomb",
        "description": "Unlocked a new item.",
        "unlock": "Complete Blue Bomber (challenge #23)",
        "id": 226
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e7/Achievement_2_new_pills_icon.png/revision/latest?cb=20210821142409",
        "name": " 2 new pills",
        "description": "Unlocked a new item.",
        "unlock": "Complete PAY TO PLAY (challenge #24)",
        "id": 227
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/32/Achievement_2_new_pills_2_icon.png/revision/latest?cb=20210821142344",
        "name": " 2 new pills",
        "description": "Unlocked a new item.",
        "unlock": "Complete Have a Heart (challenge #25)",
        "id": 228
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/df/Achievement_Poker_Chip_icon.png/revision/latest?cb=20210821144829",
        "name": " Poker Chip",
        "description": "Unlocked a new item.",
        "unlock": "Complete I RULE! (challenge #26)",
        "id": 229
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d8/Achievement_Stud_Finder_icon.png/revision/latest?cb=20210821145245",
        "name": " Stud Finder",
        "description": "Unlocked a new item.",
        "unlock": "Complete BRAINS! (challenge #27)",
        "id": 230
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9d/Achievement_D8_icon.png/revision/latest?cb=20210821143409",
        "name": " D8",
        "description": "Unlocked a new item.",
        "unlock": "Complete PRIDE DAY! (challenge #28)",
        "id": 231
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/19/Achievement_Kidney_Stone_icon.png/revision/latest?cb=20210821144320",
        "name": " Kidney Stone",
        "description": "Unlocked a new item.",
        "unlock": " Complete The Guardian (challenge #30) Complete Onan's Streak (challenge #29)",
        "id": 232
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f8/Achievement_Blank_Rune_icon.png/revision/latest?cb=20210821142708",
        "name": " Blank Rune",
        "description": "Unlocked a new item.",
        "unlock": " Complete Onan's Streak (challenge #29) Complete The Guardian (challenge #30)",
        "id": 233
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1e/Achievement_Blue_Womb_icon.png/revision/latest?cb=20210821142853",
        "name": " Blue Womb",
        "description": "Unlocked a hidden chapter.",
        "unlock": "Defeat Mom's Heart 10 times",
        "id": 234
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/ff/Achievement_1001%25_icon.png/revision/latest?cb=20210821190232",
        "name": " 1001%",
        "description": "Nerd x 1000000",
        "unlock": "Unlock all secrets and endings, and collect every item in the game  Unlock as many of the previously mentioned things as there were in Afterbirth (Ex: Unlocking items that were not in Afterbirth, like Red Key, count towards this achievement, meaning you do not need to unlock items like Mega Blast to gain this achievement)",
        "id": 235
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/70/Achievement_Keeper_holds_Wooden_Nickel_icon.png/revision/latest?cb=20210821185648",
        "name": " Keeper holds Wooden Nickel",
        "description": "Unlocked a new starting item.",
        "unlock": "Defeat Isaac as  Keeper",
        "id": 236
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b4/Achievement_Keeper_holds_Store_Key_icon.png/revision/latest?cb=20210821185947",
        "name": " Keeper holds Store Key",
        "description": "Unlocked a new starting item.",
        "unlock": "Defeat Satan as  Keeper",
        "id": 237
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9f/Achievement_Deep_Pockets_icon.png/revision/latest?cb=20210821185738",
        "name": " Deep Pockets",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Keeper",
        "id": 238
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/79/Achievement_Karma_icon.png/revision/latest?cb=20210821185713",
        "name": " Karma",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Keeper",
        "id": 239
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ad/Achievement_Sticky_Nickels_icon.png/revision/latest?cb=20210821185557",
        "name": " Sticky Nickels",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Keeper",
        "id": 240
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fb/Achievement_Super_Greed_Baby_icon.png/revision/latest?cb=20210821185622",
        "name": " Super Greed Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mom's Heart on Hard mode as  Keeper",
        "id": 241
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/01/Achievement_Lucky_Pennies_icon.png/revision/latest?cb=20210821144530",
        "name": " Lucky Pennies",
        "description": "Unlocked a new item.",
        "unlock": "Donate 2 Coins to the Greed Donation Machine",
        "id": 242
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/24/Achievement_Special_Hanging_Shopkeepers_icon.png/revision/latest?cb=20210821145155",
        "name": " Special Hanging Shopkeepers",
        "description": "Unlocked a secret.",
        "unlock": "Donate 14 Coins to the Greed Donation Machine",
        "id": 243
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/be/Achievement_Wooden_Nickel_icon.png/revision/latest?cb=20210821145544",
        "name": " Wooden Nickel",
        "description": "Unlocked a new item.",
        "unlock": "Donate 33 Coins to the Greed Donation Machine",
        "id": 244
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7e/Achievement_Cain_holds_Paperclip_icon.png/revision/latest?cb=20210821143107",
        "name": " Cain holds Paperclip",
        "description": "Unlocked a new starting item.",
        "unlock": "Donate 68 Coins to the Greed Donation Machine",
        "id": 245
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/02/Achievement_Everything_is_Terrible_2%21%21%21_icon.png/revision/latest?cb=20210821185255",
        "name": " Everything is Terrible 2!!!",
        "description": "Greed just got harder!",
        "unlock": "Donate 111 Coins to the Greed Donation Machine",
        "id": 246
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/52/Achievement_Special_Shopkeepers_icon.png/revision/latest?cb=20210821185410",
        "name": " Special Shopkeepers",
        "description": "Unlocked a secret.",
        "unlock": "Donate 234 Coins to the Greed Donation Machine",
        "id": 247
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/23/Achievement_Eve_now_holds_Razor_Blade_icon.png/revision/latest?cb=20210821185229",
        "name": " Eve now holds Razor Blade",
        "description": "Unlocked a new starting item.",
        "unlock": "Donate 439 Coins to the Greed Donation Machine",
        "id": 248
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/34/Achievement_Store_Key_icon.png/revision/latest?cb=20210821185434",
        "name": " Store Key",
        "description": "Unlocked a new item.",
        "unlock": "Donate 666 Coins to the Greed Donation Machine",
        "id": 249
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/41/Achievement_Lost_holds_Holy_Mantle_icon.png/revision/latest?cb=20210821185320",
        "name": " Lost holds Holy Mantle",
        "description": "Unlocked a new starting item.",
        "unlock": "Donate 879 Coins to the Greed Donation Machine",
        "id": 250
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/04/Achievement_Keeper_icon.png/revision/latest?cb=20210821190258",
        "name": " Keeper",
        "description": "Unlocked a new character.",
        "unlock": "Donate 1000 Coins to the Greed Donation Machine",
        "id": 251
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/eb/Achievement_Hive_Baby_icon.png/revision/latest?cb=20210821144108",
        "name": " Hive Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  ???",
        "id": 252
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3c/Achievement_Buddy_Baby_icon.png/revision/latest?cb=20210821143040",
        "name": " Buddy Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Isaac",
        "id": 253
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e5/Achievement_Colorful_Baby_icon.png/revision/latest?cb=20210821143224",
        "name": " Colorful Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Magdalene",
        "id": 254
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fc/Achievement_Whore_Baby_icon.png/revision/latest?cb=20210821145519",
        "name": " Whore Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Eve",
        "id": 255
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f3/Achievement_Cracked_Baby_icon.png/revision/latest?cb=20210821143250",
        "name": " Cracked Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Eden",
        "id": 256
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/22/Achievement_Dripping_Baby_icon.png/revision/latest?cb=20210821143527",
        "name": " Dripping Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Lazarus",
        "id": 257
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/53/Achievement_Blinding_Baby_icon.png/revision/latest?cb=20210821142802",
        "name": " Blinding Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Use Blank Card while holding XIX - The Sun",
        "id": 258
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/42/Achievement_Sucky_Baby_icon.png/revision/latest?cb=20210821145336",
        "name": " Sucky Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Azazel",
        "id": 259
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/51/Achievement_Dark_Baby_icon.png/revision/latest?cb=20210821143500",
        "name": " Dark Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Lilith",
        "id": 260
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/48/Achievement_Picky_Baby_icon.png/revision/latest?cb=20210821144805",
        "name": " Picky Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Cain",
        "id": 261
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e2/Achievement_Revenge_Baby_icon.png/revision/latest?cb=20210821145036",
        "name": " Revenge Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Samson",
        "id": 262
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/63/Achievement_Belial_Baby_icon.png/revision/latest?cb=20210821142500",
        "name": " Belial Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Judas",
        "id": 263
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c5/Achievement_Sale_Baby_icon.png/revision/latest?cb=20210821185855",
        "name": " Sale Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Keeper",
        "id": 264
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c6/Achievement_XXXXXXXXL_icon.png/revision/latest?cb=20210821145612",
        "name": " XXXXXXXXL",
        "description": "Unlocked Challenge #21.",
        "unlock": "Defeat Mom",
        "id": 265
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6d/Achievement_SPEED%21_icon.png/revision/latest?cb=20210821145220",
        "name": " SPEED!",
        "description": "Unlocked Challenge #22.",
        "unlock": "Defeat Mom",
        "id": 266
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d0/Achievement_Blue_Bomber_icon.png/revision/latest?cb=20210821142828",
        "name": " Blue Bomber",
        "description": "Unlocked Challenge #23.",
        "unlock": "Destroy 10 Tinted Rocks and defeat Mom's Heart 11 times",
        "id": 267
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f1/Achievement_PAY_TO_PLAY_icon.png/revision/latest?cb=20210821144738",
        "name": " PAY TO PLAY",
        "description": "Unlocked Challenge #24.",
        "unlock": "Defeat Isaac as  Cain and destroy 10 Tinted Rocks",
        "id": 268
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/85/Achievement_Have_a_Heart_icon.png/revision/latest?cb=20210821144041",
        "name": " Have a Heart",
        "description": "Unlocked Challenge #25.",
        "unlock": "Defeat Mom",
        "id": 269
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7a/Achievement_I_RULE%21_icon.png/revision/latest?cb=20210821144135",
        "name": " I RULE!",
        "description": "Unlocked Challenge #26.",
        "unlock": " Defeat ??? or The Lamb, defeat Satan as  Isaac, and unlock The Negative Defeat ??? or The Lamb, and defeat Satan as  Isaac Defeat Mega Satan and unlock The Negative",
        "id": 270
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/28/Achievement_BRAINS%21_icon.png/revision/latest?cb=20210821142947",
        "name": " BRAINS!",
        "description": "Unlocked Challenge #27.",
        "unlock": "Defeat Isaac 5 times",
        "id": 271
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3d/Achievement_PRIDE_DAY%21_icon.png/revision/latest?cb=20210821144855",
        "name": " PRIDE DAY!",
        "description": "Unlocked Challenge #28.",
        "unlock": "Defeat Mom",
        "id": 272
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d1/Achievement_Onan%27s_Streak_icon.png/revision/latest?cb=20210821144712",
        "name": " Onan's Streak",
        "description": "Unlocked Challenge #29.",
        "unlock": " Defeat Mom Unlock  Judas and It Lives.",
        "id": 273
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c2/Achievement_The_Guardian_icon.png/revision/latest?cb=20210821145426",
        "name": " The Guardian",
        "description": "Unlocked Challenge #30.",
        "unlock": "Defeat Mom",
        "id": 274
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/89/Achievement_Generosity_icon.png/revision/latest?cb=20210821183806",
        "name": " Generosity",
        "description": "If only everyone was as generous as you are...",
        "unlock": "Donate 999 Coins to the Greed Donation Machine",
        "id": 275
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a5/Achievement_Mega_icon.png/revision/latest?cb=20210821185346",
        "name": " Mega",
        "description": "Unlocked...",
        "unlock": "Defeat Mega Satan as every character ( except Tainted characters)",
        "id": 276
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/61/Achievement_Backasswards_icon.png/revision/latest?cb=20210822022151",
        "name": " Backasswards",
        "description": "Unlocked a new challenge.",
        "unlock": " Defeat ??? or The Lamb Defeat Mega Satan and unlock The Negative",
        "id": 277
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/30/Achievement_Aprils_fool_icon.png/revision/latest?cb=20210822022113",
        "name": " Aprils fool",
        "description": "Unlocked a new challenge.",
        "unlock": "Defeat Mom",
        "id": 278
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/df/Achievement_Pokey_Mans_icon.png/revision/latest?cb=20210822024616",
        "name": " Pokey Mans",
        "description": "Unlocked a new challenge.",
        "unlock": "Defeat Mom's Heart 11 times",
        "id": 279
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1b/Achievement_Ultra_Hard_icon.png/revision/latest?cb=20210822025130",
        "name": " Ultra Hard",
        "description": "Unlocked a new challenge.",
        "unlock": " Defeat ??? or The Lamb. Possession of The Polaroid / The Negative is required, barring getting to Dark Room through a Sacrifice Room. Defeat Mega Satan and unlock The Negative",
        "id": 280
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/50/Achievement_PONG_icon.png/revision/latest?cb=20210822024647",
        "name": " PONG",
        "description": "Unlocked a new challenge.",
        "unlock": "Defeat Isaac 5 times",
        "id": 281
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4c/Achievement_D_infinity_icon.png/revision/latest?cb=20210822022712",
        "name": " D infinity",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Isaac",
        "id": 282
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d7/Achievement_Eucharist_icon.png/revision/latest?cb=20210822023225",
        "name": " Eucharist",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Magdalene",
        "id": 283
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/69/Achievement_Silver_Dollar_icon.png/revision/latest?cb=20210822024915",
        "name": " Silver Dollar",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Cain",
        "id": 284
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/66/Achievement_Shade_icon.png/revision/latest?cb=20210822024848",
        "name": " Shade",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Judas",
        "id": 285
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5e/Achievement_King_Baby_icon.png/revision/latest?cb=20210822023732",
        "name": " King Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Delirium as  ???",
        "id": 286
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1f/Achievement_Bloody_Crown_icon.png/revision/latest?cb=20210822022328",
        "name": " Bloody Crown",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Samson",
        "id": 287
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5a/Achievement_Dull_Razor_icon.png/revision/latest?cb=20210822023128",
        "name": " Dull Razor",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Eve",
        "id": 288
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/24/Achievement_Eden%27s_Soul_icon.png/revision/latest?cb=20210822023157",
        "name": " Eden's Soul",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Eden",
        "id": 289
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e5/Achievement_Dark_Prince%27s_Crown_icon.png/revision/latest?cb=20210822022906",
        "name": " Dark Prince's Crown",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Azazel",
        "id": 290
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/72/Achievement_Compound_Fracture_icon.png/revision/latest?cb=20210822022518",
        "name": " Compound Fracture",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Lazarus",
        "id": 291
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/09/Achievement_Euthanasia_icon.png/revision/latest?cb=20210822023259",
        "name": " Euthanasia",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Lilith",
        "id": 292
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b8/Achievement_Holy_Card_icon.png/revision/latest?cb=20210822023556",
        "name": " Holy Card",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  The Lost",
        "id": 293
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c8/Achievement_Crooked_Penny_icon.png/revision/latest?cb=20210822022558",
        "name": " Crooked Penny",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Keeper",
        "id": 294
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ab/Achievement_Void_icon.png/revision/latest?cb=20210822025155",
        "name": " Void",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  Apollyon",
        "id": 295
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3c/Achievement_D1_icon.png/revision/latest?cb=20210822022749",
        "name": " D1",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Isaac",
        "id": 296
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6a/Achievement_Glyph_of_Balance_icon.png/revision/latest?cb=20210822023410",
        "name": " Glyph of Balance",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Magdalene",
        "id": 297
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/ff/Achievement_Sack_of_Sacks_icon.png/revision/latest?cb=20210822024755",
        "name": " Sack of Sacks",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Cain",
        "id": 298
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/50/Achievement_Eye_of_Belial_icon.png/revision/latest?cb=20210822023336",
        "name": " Eye of Belial",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Judas",
        "id": 299
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/aa/Achievement_Meconium_icon.png/revision/latest?cb=20210822024220",
        "name": " Meconium",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  ???",
        "id": 300
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/47/Achievement_Stem_Cell_icon.png/revision/latest?cb=20210822025038",
        "name": " Stem Cell",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Samson",
        "id": 301
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/33/Achievement_Crow_Heart_icon.png/revision/latest?cb=20210822022634",
        "name": " Crow Heart",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Eve",
        "id": 302
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c3/Achievement_Metronome_icon.png/revision/latest?cb=20210822024253",
        "name": " Metronome",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Eden",
        "id": 303
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b5/Achievement_Bat_Wing_icon.png/revision/latest?cb=20210822022229",
        "name": " Bat Wing",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Azazel",
        "id": 304
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7d/Achievement_Plan_C_icon.png/revision/latest?cb=20210822024542",
        "name": " Plan C",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Lazarus",
        "id": 305
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f5/Achievement_Duality_icon.png/revision/latest?cb=20210822023051",
        "name": " Duality",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Lilith",
        "id": 306
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7f/Achievement_Dad%27s_Lost_Coin_icon.png/revision/latest?cb=20210822022828",
        "name": " Dad's Lost Coin",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  The Lost",
        "id": 307
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fd/Achievement_Eye_of_Greed_icon.png/revision/latest?cb=20210822025249",
        "name": " Eye of Greed",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Keeper",
        "id": 308
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c3/Achievement_Black_Rune_icon.png/revision/latest?cb=20210822022257",
        "name": " Black Rune",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  Apollyon",
        "id": 309
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/99/Achievement_Locust_of_Wrath_icon.png/revision/latest?cb=20210822024123",
        "name": " Locust of Wrath",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  Apollyon",
        "id": 310
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/18/Achievement_Locust_of_Pestilence_icon.png/revision/latest?cb=20210822024049",
        "name": " Locust of Pestilence",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  Apollyon",
        "id": 311
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7a/Achievement_Locust_of_Famine_icon.png/revision/latest?cb=20210822024011",
        "name": " Locust of Famine",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  Apollyon",
        "id": 312
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0e/Achievement_Locust_of_Death_icon.png/revision/latest?cb=20210822023938",
        "name": " Locust of Death",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  Apollyon",
        "id": 313
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/19/Achievement_Locust_of_Conquest_icon.png/revision/latest?cb=20210822023907",
        "name": " Locust of Conquest",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  Apollyon",
        "id": 314
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ec/Achievement_Hushy_icon.png/revision/latest?cb=20210822023629",
        "name": " Hushy",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  Apollyon",
        "id": 315
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/94/Achievement_Brown_Nugget_icon.png/revision/latest?cb=20210822022404",
        "name": " Brown Nugget",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  Apollyon",
        "id": 316
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/78/Achievement_Mort_Baby_icon.png/revision/latest?cb=20210822024327",
        "name": " Mort Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  Apollyon",
        "id": 317
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f5/Achievement_Smelter_icon.png/revision/latest?cb=20210822025012",
        "name": " Smelter",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Mom's Heart or It Lives! on Hard mode as  Apollyon",
        "id": 318
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/19/Achievement_Apollyon_Baby_icon.png/revision/latest?cb=20210822022045",
        "name": " Apollyon Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  Apollyon",
        "id": 319
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6c/Achievement_New_Area_icon.png/revision/latest?cb=20210822024429",
        "name": " New Area",
        "description": "Unlocked a new area.",
        "unlock": "Defeat Hush",
        "id": 320
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c2/Achievement_Once_More_with_Feeling%21_icon.png/revision/latest?cb=20210822024505",
        "name": " Once More with Feeling!",
        "description": "Unlocked a new item.",
        "unlock": "Complete a Victory Lap by defeating The Lamb",
        "id": 321
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d1/Achievement_Hat_trick%21_icon.png/revision/latest?cb=20210822023521",
        "name": " Hat trick!",
        "description": "Unlocked a new item.",
        "unlock": "Get a 3-win streak",
        "id": 322
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/44/Achievement_5_Nights_at_Mom%27s_icon.png/revision/latest?cb=20210822021954",
        "name": " 5 Nights at Mom's",
        "description": "Unlocked super special rocks.",
        "unlock": "Get a 5-win streak, using a different character each time ( this number can be reduced to 3, see the notes section)",
        "id": 323
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a9/Achievement_Sin_collector_icon.png/revision/latest?cb=20210822024946",
        "name": " Sin collector",
        "description": "Unlocked a new item.",
        "unlock": "Collect every entry in the Bestiary (bugged v190 - Mobs that don't exist in the bestiary are being counted. This allows Sin Collector to be unlocked without a complete bestiary)",
        "id": 324
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/cc/Achievement_Dedication_icon.png/revision/latest?cb=20210822022938",
        "name": " Dedication",
        "description": "Unlocked a new item.",
        "unlock": "Participate in 31 Daily Challenges (they don't have to be consecutive; it will still count if Isaac dies in the first room)",
        "id": 325
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/52/Achievement_ZIP%21_icon.png/revision/latest?cb=20210822025222",
        "name": " ZIP!",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb in under 20 minutes",
        "id": 326
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d7/Achievement_It%27s_the_Key_icon.png/revision/latest?cb=20210822023700",
        "name": " It's the Key",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb without taking Hearts, Coins, or Bombs through the entire run. Letting certain familiars (e.g. Bum Friend, Dark Bum, Bumbo or Lil Portal) or bosses (e.g. Bumbino) pick up the consumables fails this condition as well.",
        "id": 327
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/62/Achievement_Mr._Resetter%21_icon.png/revision/latest?cb=20210822024353",
        "name": " Mr. Resetter!",
        "description": "Unlocked a new item.",
        "unlock": "Reset 7 times in a rowSwitchPS4 Get a minus 10-win streak",
        "id": 328
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/03/Achievement_Living_on_the_edge_icon.png/revision/latest?cb=20210822023840",
        "name": " Living on the edge",
        "description": "Unlocked a new item.",
        "unlock": "Complete a Chapter (floors I and II) after Basement, start-to-finish, with only half a Heart total (can use  The Lost)",
        "id": 329
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/34/Achievement_U_Broke_It%21_icon.png/revision/latest?cb=20210822025315",
        "name": " U Broke It!",
        "description": "Unlocked a new item.",
        "unlock": "Obtain 50 items in a run (duplicate passive items/familiars count towards the total, e.g., multiple Breakfast)",
        "id": 330
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/50/Achievement_Laz_Bleeds_More%21_icon.png/revision/latest?cb=20210822023803",
        "name": " Laz Bleeds More!",
        "description": "Unlocked a new starting item.",
        "unlock": "Complete Backasswards (challenge #31)",
        "id": 331
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/92/Achievement_Maggy_Now_Holds_a_Pill%21_icon.png/revision/latest?cb=20210822024149",
        "name": " Maggy Now Holds a Pill!",
        "description": "Unlocked a new starting item.",
        "unlock": "Complete Aprils Fool (challenge #32)",
        "id": 332
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5b/Achievement_Charged_Key_icon.png/revision/latest?cb=20210822022441",
        "name": " Charged Key",
        "description": "Unlocked a new item.",
        "unlock": "Complete Pokey Mans (challenge #33)",
        "id": 333
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/56/Achievement_Samson_Feels_Healthy%21_icon.png/revision/latest?cb=20210822024820",
        "name": " Samson Feels Healthy!",
        "description": "Unlocked a new starting item.",
        "unlock": "Complete Ultra Hard (challenge #34)",
        "id": 334
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/48/Achievement_Greed%27s_Gullet_icon.png/revision/latest?cb=20210822023446",
        "name": " Greed's Gullet",
        "description": "Unlocked a new item.",
        "unlock": "Complete Pong (challenge #35)",
        "id": 335
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/86/Achievement_The_Marathon_icon.png/revision/latest?cb=20210822025103",
        "name": " The Marathon",
        "description": "Unlocked a new item.",
        "unlock": "Get a 5-win streak in the Daily Challenges (they don't have to be consecutive days, only the runs you play are counted)",
        "id": 336
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/83/Achievement_RERUN_icon.png/revision/latest?cb=20210822024724",
        "name": " RERUN",
        "description": "Unlocked the power of RERUN.",
        "unlock": "Complete 3 Victory Laps by defeating The Lamb",
        "id": 337
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/10/Achievement_Delirious_icon.png/revision/latest?cb=20210822023015",
        "name": " Delirious",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium",
        "id": 338
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/15/Achievement_1000000%25_icon.png/revision/latest?cb=20210822022022",
        "name": " 1000000%",
        "description": "Just Stop!",
        "unlock": "Collect every item in the game, unlock all secrets and endings, and complete the Bestiary",
        "id": 339
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/03/Achievement_Apollyon_icon.png/revision/latest?cb=20210822063004",
        "name": " Apollyon",
        "description": "Unlocked a new character.",
        "unlock": "Defeat Mega Satan",
        "id": 340
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d7/Achievement_Greedier%21_icon.png/revision/latest?cb=20210822063031",
        "name": " Greedier!",
        "description": "New mode unlocked!",
        "unlock": "Donate 500 Coins to the Greed Donation Machine",
        "id": 341
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3e/Achievement_Burning_Basement_icon.png/revision/latest?cb=20210822063125",
        "name": " Burning Basement",
        "description": "Alt stage to the basement.",
        "unlock": "Defeat Mom's Heart 11 times",
        "id": 342
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e7/Achievement_Flooded_Caves_icon.png/revision/latest?cb=20210822063153",
        "name": " Flooded Caves",
        "description": "Alt stage to the caves.",
        "unlock": "Defeat It Lives! 16 times",
        "id": 343
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2a/Achievement_Dank_Depths_icon.png/revision/latest?cb=20210822063220",
        "name": " Dank Depths",
        "description": "Alt stage to the depths.",
        "unlock": "Defeat It Lives! 21 times",
        "id": 344
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/59/Achievement_Scarred_Womb_icon.png/revision/latest?cb=20210822063247",
        "name": " Scarred Womb",
        "description": "Alt stage to the womb.",
        "unlock": "Defeat It Lives! 30 times",
        "id": 345
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0c/Achievement_Something_wicked_this_way_comes%21_icon.png/revision/latest?cb=20210822064509",
        "name": " Something wicked this way comes!",
        "description": "Unlocked new bosses!",
        "unlock": "Defeat ??? as 3 different Characters",
        "id": 346
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b9/Achievement_Something_Wicked_This_Way_Comes_%E2%80%A0_icon.png/revision/latest?cb=20210822064535",
        "name": " Something wicked this way comes+!",
        "description": "Unlocked even more bosses!",
        "unlock": "Defeat ??? as 6 different Characters",
        "id": 347
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/98/Achievement_The_gate_is_open%21_icon.png/revision/latest?cb=20210822063058",
        "name": " The gate is open!",
        "description": "Unlocked new enemies!",
        "unlock": "Defeat The Lamb",
        "id": 348
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e8/Achievement_Black_Hole_icon.png/revision/latest?cb=20210822063526",
        "name": " Black Hole",
        "description": "Unlocked a new item.",
        "unlock": "Defeat 20 Portals",
        "id": 349
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/74/Achievement_Mystery_Gift_icon.png/revision/latest?cb=20210822064231",
        "name": " Mystery Gift",
        "description": "Unlocked a new item.",
        "unlock": "Destroy 500 rocks",
        "id": 350
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/73/Achievement_Sprinkler_icon.png/revision/latest?cb=20210822064323",
        "name": " Sprinkler",
        "description": "Unlocked a new item.",
        "unlock": "Beat Chapter 1 without taking damage",
        "id": 351
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/23/Achievement_Angry_Fly_icon.png/revision/latest?cb=20210822063500",
        "name": " Angry Fly",
        "description": "Unlocked a new item.",
        "unlock": "Become Beelzebub",
        "id": 352
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1d/Achievement_Bozo_icon.png/revision/latest?cb=20210822063552",
        "name": " Bozo",
        "description": "Unlocked a new item.",
        "unlock": "Destroy 5 rainbow poops",
        "id": 353
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/aa/Achievement_Broken_Modem_icon.png/revision/latest?cb=20210822063619",
        "name": " Broken Modem",
        "description": "Unlocked a new item.",
        "unlock": "Complete 7 Daily Challenges (by touching the trophy at the end)",
        "id": 354
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5d/Achievement_Buddy_in_a_Box_icon.png/revision/latest?cb=20210822063645",
        "name": " Buddy in a Box",
        "description": "Unlocked a new item.",
        "unlock": "Pick up 5 familiars in a single run",
        "id": 355
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/33/Achievement_Fast_Bombs_icon.png/revision/latest?cb=20210822063833",
        "name": " Fast Bombs",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Little Horn 20 times",
        "id": 356
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f9/Achievement_Lil_Delirium_icon.png/revision/latest?cb=20210822064112",
        "name": " Lil Delirium",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium for the 1st time",
        "id": 357
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/44/Achievement_Hairpin_icon.png/revision/latest?cb=20210822063924",
        "name": " Hairpin",
        "description": "Unlocked a new item.",
        "unlock": "Recharge using Lil' Batteries 20 times",
        "id": 358
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/74/Achievement_Wooden_Cross_icon.png/revision/latest?cb=20210822064441",
        "name": " Wooden Cross",
        "description": "Unlocked a new item.",
        "unlock": "Sleep in a bed",
        "id": 359
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3c/Achievement_Butter%21_icon.png/revision/latest?cb=20210822063712",
        "name": " Butter!",
        "description": "Unlocked a new item.",
        "unlock": "Complete 2 Victory Laps by defeating The Lamb",
        "id": 360
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/94/Achievement_Huge_Growth_icon.png/revision/latest?cb=20210822063952",
        "name": " Huge Growth",
        "description": "Unlocked a new item.",
        "unlock": "Increase in size 5 times in a single run via Magic Mushroom, \"One makes you larger\" pills, XI - Strength, etc.",
        "id": 361
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/19/Achievement_Ancient_Recall_icon.png/revision/latest?cb=20210822063406",
        "name": " Ancient Recall",
        "description": "Unlocked a new item.",
        "unlock": "Use Cards and Runes 20 times",
        "id": 362
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/ce/Achievement_Era_Walk_icon.png/revision/latest?cb=20210822063806",
        "name": " Era Walk",
        "description": "Unlocked a new item.",
        "unlock": "Add both the Broken Watch and the Stop Watch to your collection",
        "id": 363
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/26/Achievement_Coupon_icon.png/revision/latest?cb=20210822063739",
        "name": " Coupon",
        "description": "Unlocked a new item.",
        "unlock": "Purchase anything from Shops, Devil Rooms, and/or Black Markets 50 times",
        "id": 364
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/69/Achievement_Telekinesis_icon.png/revision/latest?cb=20210822064415",
        "name": " Telekinesis",
        "description": "Unlocked a new item.",
        "unlock": "Beat Chapter 2 without taking damage",
        "id": 365
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/07/Achievement_Moving_Box_icon.png/revision/latest?cb=20210822064138",
        "name": " Moving Box",
        "description": "Unlocked a new item.",
        "unlock": "Use Pandora's Box in Dark Room",
        "id": 366
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/68/Achievement_Jumper_Cables_icon.png/revision/latest?cb=20210822064019",
        "name": " Jumper Cables",
        "description": "Unlocked a new item.",
        "unlock": "Pick up any 2 of the following items/trinkets in a single run: 9 Volt, The Battery, Car Battery, AAA Battery, and Watch Battery ( Any 2 items that have the 'battery' item tag)",
        "id": 367
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7b/Achievement_Leprosy_icon.png/revision/latest?cb=20210822064045",
        "name": " Leprosy",
        "description": "Unlocked a new item.",
        "unlock": "Beat Chapter 3 without taking damage",
        "id": 368
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2f/Achievement_Technology_Zero_icon.png/revision/latest?cb=20210822064349",
        "name": " Technology Zero",
        "description": "Unlocked a new item.",
        "unlock": "Pick up any 2 technology items in a single run ( Any 2 items that have the 'tech' item tag)",
        "id": 369
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b0/Achievement_Filigree_Feather_icon.png/revision/latest?cb=20210822063859",
        "name": " Filigree Feather",
        "description": "Unlocked a new item.",
        "unlock": "Acquire both Key Piece 1 and Key Piece 2",
        "id": 370
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e6/Achievement_Mr._ME%21_icon.png/revision/latest?cb=20210822064204",
        "name": " Mr. ME!",
        "description": "Unlocked a new item.",
        "unlock": "Open 20 Locked Chests",
        "id": 371
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/42/Achievement_7_Seals_icon.png/revision/latest?cb=20210822063339",
        "name": " 7 Seals",
        "description": "Unlocked a new item.",
        "unlock": "Defeat all 5 Harbingers",
        "id": 372
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/41/Achievement_Angelic_Prism_icon.png/revision/latest?cb=20210822063433",
        "name": " Angelic Prism",
        "description": "Unlocked a new item.",
        "unlock": "Defeat an Angel 10 times",
        "id": 373
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/27/Achievement_Pop%21_icon.png/revision/latest?cb=20210822064257",
        "name": " Pop!",
        "description": "Unlocked a new item.",
        "unlock": "Beat Chapter 4 without taking damage",
        "id": 374
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/99/Achievement_Door_Stop_icon.png/revision/latest?cb=20210822063312",
        "name": " Door Stop",
        "description": "Unlocked a new item.",
        "unlock": "Blow up doors and Secret Room walls 50 times",
        "id": 375
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b1/Achievement_Death%27s_List_icon.png/revision/latest?cb=20210822092814",
        "name": " Death's List",
        "description": "Unlocked a new item.",
        "unlock": "Take 25 Deals with the Devil",
        "id": 376
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5b/Achievement_Haemolacria_icon.png/revision/latest?cb=20210822092840",
        "name": " Haemolacria",
        "description": "Unlocked a new item.",
        "unlock": "Acquire Blood Clot 10 times",
        "id": 377
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2b/Achievement_Lachryphagy_icon.png/revision/latest?cb=20210822092906",
        "name": " Lachryphagy",
        "description": "Unlocked a new item.",
        "unlock": "Collect 10 \"Tears Up\" items or pills in one run",
        "id": 378
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6d/Achievement_Schoolbag_icon.png/revision/latest?cb=20210822092934",
        "name": " Schoolbag",
        "description": "Unlocked a new item.",
        "unlock": "Enter 6 Shops in one run",
        "id": 379
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ae/Achievement_Trisagion_icon.png/revision/latest?cb=20210822092959",
        "name": " Trisagion",
        "description": "Unlocked a new item.",
        "unlock": "Take 25 Angel Rooms items",
        "id": 380
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a7/Achievement_Extension_Cord_icon.png/revision/latest?cb=20210822093026",
        "name": " Extension Cord",
        "description": "Unlocked a new item.",
        "unlock": "Have The Battery, 9 Volt, and Car Battery in Isaac's collection",
        "id": 381
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7d/Achievement_Flat_Stone_icon.png/revision/latest?cb=20210822093051",
        "name": " Flat Stone",
        "description": "Unlocked a new item.",
        "unlock": "Acquire Rubber Cement 5 times",
        "id": 382
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/dc/Achievement_Sacrificial_Altar_icon.png/revision/latest?cb=20210822093118",
        "name": " Sacrificial Altar",
        "description": "Unlocked a new item.",
        "unlock": "Take 50 Deals with the Devil",
        "id": 383
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0e/Achievement_Lil_Spewer_icon.png/revision/latest?cb=20210822093147",
        "name": " Lil Spewer",
        "description": "Unlocked a new item.",
        "unlock": "Have Isaac die to his own explosion from Ipecac, Bob's Rotten Head, or a Horf! pill",
        "id": 384
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a6/Achievement_Blanket_icon.png/revision/latest?cb=20210822093213",
        "name": " Blanket",
        "description": "Unlocked a new item.",
        "unlock": "Sleep in 10 beds",
        "id": 385
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e7/Achievement_Marbles_icon.png/revision/latest?cb=20210822093244",
        "name": " Marbles",
        "description": "Unlocked a new item.",
        "unlock": "Use 5 Gulp! pills in one run (Placebo uses count)",
        "id": 386
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/20/Achievement_Mystery_Egg_icon.png/revision/latest?cb=20210822093311",
        "name": " Mystery Egg",
        "description": "Unlocked a new item.",
        "unlock": "Spawn three charmed enemies in the same room",
        "id": 387
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fc/Achievement_Rotten_Penny_icon.png/revision/latest?cb=20210822093338",
        "name": " Rotten Penny",
        "description": "Unlocked a new item.",
        "unlock": "Have 20 Blue Flies at the same time",
        "id": 388
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a1/Achievement_Baby-Bender_icon.png/revision/latest?cb=20210822093405",
        "name": " Baby-Bender",
        "description": "Unlocked a new item.",
        "unlock": "Use I - The Magician or Telepathy For Dummies while already having homing tears",
        "id": 389
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f2/Achievement_The_Forgotten_icon.png/revision/latest?cb=20210822093432",
        "name": " The Forgotten",
        "description": "Unlocked a new character.",
        "unlock": "It's complicated",
        "id": 390
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/89/Achievement_Bone_Heart_icon.png/revision/latest?cb=20210822093500",
        "name": " Bone Heart",
        "description": "Unlocked a new item.",
        "unlock": "It's complicated",
        "id": 391
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/73/Achievement_Marrow_icon.png/revision/latest?cb=20210822092319",
        "name": " Marrow",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Mom's Heart or It Lives! on Hard mode as  The Forgotten",
        "id": 392
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/71/Achievement_Slipped_Rib_icon.png/revision/latest?cb=20210822092440",
        "name": " Slipped Rib",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Isaac as  The Forgotten",
        "id": 393
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/33/Achievement_Pointy_Rib_icon.png/revision/latest?cb=20210822092413",
        "name": " Pointy Rib",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Satan as  The Forgotten",
        "id": 394
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/44/Achievement_Jaw_Bone_icon.png/revision/latest?cb=20210822092533",
        "name": " Jaw Bone",
        "description": "Unlocked a new item.",
        "unlock": "Defeat ??? as  The Forgotten",
        "id": 395
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2b/Achievement_Brittle_Bones_icon.png/revision/latest?cb=20210822092505",
        "name": " Brittle Bones",
        "description": "Unlocked a new item.",
        "unlock": "Defeat The Lamb as  The Forgotten",
        "id": 396
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/21/Achievement_Divorce_Papers_icon.png/revision/latest?cb=20210822092346",
        "name": " Divorce Papers",
        "description": "Unlocked a new item.",
        "unlock": "Complete the Boss Rush as  The Forgotten",
        "id": 397
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fe/Achievement_Hallowed_Ground_icon.png/revision/latest?cb=20210822092654",
        "name": " Hallowed Ground",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Hush as  The Forgotten",
        "id": 398
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f1/Achievement_Finger_Bone_icon.png/revision/latest?cb=20210822092559",
        "name": " Finger Bone",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greed as  The Forgotten",
        "id": 399
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/26/Achievement_Dad%27s_Ring_icon.png/revision/latest?cb=20210822092626",
        "name": " Dad's Ring",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Ultra Greedier as  The Forgotten",
        "id": 400
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a7/Achievement_Book_of_the_Dead_icon.png/revision/latest?cb=20210822092253",
        "name": " Book of the Dead",
        "description": "Unlocked a new item.",
        "unlock": "Defeat Delirium as  The Forgotten",
        "id": 401
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d6/Achievement_Bone_Baby_icon.png/revision/latest?cb=20210822092747",
        "name": " Bone Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Earn all Hard mode Completion Marks as  The Forgotten",
        "id": 402
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5a/Achievement_Bound_Baby_icon.png/revision/latest?cb=20210822092720",
        "name": " Bound Baby",
        "description": "Unlocked a new co-player baby.",
        "unlock": "Defeat Mega Satan as  The Forgotten",
        "id": 403
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e6/Achievement_Bethany_icon.png/revision/latest?cb=20210822132056",
        "name": " Bethany",
        "description": "Beat Hard mode as Lazarus without losing a life",
        "unlock": "Defeat Mom's Heart/It Lives! on hard mode as  Lazarus, without dying at all",
        "id": 404
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3b/Achievement_Jacob_and_Esau_icon.png/revision/latest?cb=20210822132120",
        "name": " Jacob and Esau",
        "description": "You are just like your father...",
        "unlock": "Defeat Mother",
        "id": 405
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/81/Achievement_The_Planetarium_icon.png/revision/latest?cb=20210822132144",
        "name": " The Planetarium",
        "description": "Kids shouldn't believe in fortunes...",
        "unlock": "Collect any 3 items with the 'stars' item tag in a single run",
        "id": 406
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/26/Achievement_A_Secret_Exit_icon.png/revision/latest?cb=20210822132211",
        "name": " A Secret Exit",
        "description": "Complete ??? 3 times.",
        "unlock": "Defeat Hush 3 times",
        "id": 407
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c6/Achievement_Forgotten_Lullaby_icon.png/revision/latest?cb=20210822132239",
        "name": " Forgotten Lullaby",
        "description": "Get that song out of her head.",
        "unlock": "Blow up The Siren's skull after defeating her",
        "id": 408
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4c/Achievement_Fruity_Plum_icon.png/revision/latest?cb=20210822132305",
        "name": " Fruity Plum",
        "description": "Defeat Baby Plum 10 times.",
        "unlock": "Defeat Baby Plum 10 times",
        "id": 409
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6c/Achievement_Plum_Flute_icon.png/revision/latest?cb=20210822132328",
        "name": " Plum Flute",
        "description": "Make a new friend!",
        "unlock": "Allow Baby Plum to escape instead of defeating her",
        "id": 410
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/58/Achievement_Rotten_Heart_icon.png/revision/latest?cb=20210822132352",
        "name": " Rotten Heart",
        "description": "Enter the Corpse...",
        "unlock": "Enter Corpse for the first time",
        "id": 411
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/96/Achievement_Dross_icon.png/revision/latest?cb=20210822132416",
        "name": " Dross",
        "description": "Defeat all bosses in Downpour.",
        "unlock": "Defeat all bosses in Downpour",
        "id": 412
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/09/Achievement_Ashpit_icon.png/revision/latest?cb=20210822132440",
        "name": " Ashpit",
        "description": "Defeat all bosses in the Mines.",
        "unlock": "Defeat all bosses in Mines",
        "id": 413
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/90/Achievement_Gehenna_icon.png/revision/latest?cb=20210822132502",
        "name": " Gehenna",
        "description": "Defeat all bosses in the Mausoleum.",
        "unlock": "Defeat all bosses in Mausoleum",
        "id": 414
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/05/Achievement_Red_Key_icon.png/revision/latest?cb=20210822132526",
        "name": " Red Key",
        "description": "The other side is calling...",
        "unlock": "Open Mom's Chest in Home",
        "id": 415
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/98/Achievement_Wisp_Baby_icon.png/revision/latest?cb=20210822132552",
        "name": " Wisp Baby",
        "description": "Beat the game in Hard mode with Bethany.",
        "unlock": "Defeat Mom's Heart or It Lives! on Hard mode as  Bethany",
        "id": 416
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/35/Achievement_Book_of_Virtues_icon.png/revision/latest?cb=20210822132614",
        "name": " Book of Virtues",
        "description": "Complete the Cathedral with Bethany.",
        "unlock": "Defeat Isaac as  Bethany",
        "id": 417
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/ba/Achievement_Urn_of_Souls_icon.png/revision/latest?cb=20210822132639",
        "name": " Urn of Souls",
        "description": "Complete Sheol with Bethany.",
        "unlock": "Defeat Satan as  Bethany",
        "id": 418
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/25/Achievement_Blessed_Penny_icon.png/revision/latest?cb=20210822132704",
        "name": " Blessed Penny",
        "description": "Complete the Chest with Bethany.",
        "unlock": "Defeat ??? as  Bethany",
        "id": 419
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5f/Achievement_Alabaster_Box_icon.png/revision/latest?cb=20210822132730",
        "name": " Alabaster Box",
        "description": "Complete the Dark Room with Bethany.",
        "unlock": "Defeat The Lamb as  Bethany",
        "id": 420
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/af/Achievement_Beth%27s_Faith_icon.png/revision/latest?cb=20210822132757",
        "name": " Beth's Faith",
        "description": "Complete Boss Rush with Bethany.",
        "unlock": "Complete the Boss Rush as  Bethany",
        "id": 421
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/22/Achievement_Soul_Locket_icon.png/revision/latest?cb=20210822132824",
        "name": " Soul Locket",
        "description": "Beat Greed mode with Bethany.",
        "unlock": "Defeat Ultra Greed as  Bethany",
        "id": 422
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b5/Achievement_Divine_Intervention_icon.png/revision/latest?cb=20210822132848",
        "name": " Divine Intervention",
        "description": "Complete ??? with Bethany.",
        "unlock": "Defeat Hush as  Bethany",
        "id": 423
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ad/Achievement_Vade_Retro_icon.png/revision/latest?cb=20210822132911",
        "name": " Vade Retro",
        "description": "Beat Greedier mode with Bethany.",
        "unlock": "Defeat Ultra Greedier as  Bethany",
        "id": 424
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ed/Achievement_Star_of_Bethlehem_icon.png/revision/latest?cb=20210822132936",
        "name": " Star of Bethlehem",
        "description": "Beat the Void with Bethany.",
        "unlock": "Defeat Delirium as  Bethany",
        "id": 425
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0a/Achievement_Hope_Baby_icon.png/revision/latest?cb=20210822133001",
        "name": " Hope Baby",
        "description": "Beat everything in Hard mode with Bethany.",
        "unlock": "Earn all Hard mode Completion Marks as  Bethany",
        "id": 426
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/27/Achievement_Glowing_Baby_icon.png/revision/latest?cb=20210822133027",
        "name": " Glowing Baby",
        "description": "Defeat Mega Satan with Bethany.",
        "unlock": "Defeat Mega Satan as  Bethany",
        "id": 427
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a1/Achievement_Double_Baby_icon.png/revision/latest?cb=20210822133051",
        "name": " Double Baby",
        "description": "Beat the game in Hard mode with Jacob and Esau.",
        "unlock": "Defeat Mom's Heart or It Lives! on Hard mode as  Jacob and Esau",
        "id": 428
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d1/Achievement_The_Stairway_icon.png/revision/latest?cb=20210822133116",
        "name": " The Stairway",
        "description": "Complete the Cathedral with Jacob and Esau.",
        "unlock": "Defeat Isaac as  Jacob and Esau",
        "id": 429
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5b/Achievement_Red_Stew_icon.png/revision/latest?cb=20210822133141",
        "name": " Red Stew",
        "description": "Complete Sheol with Jacob and Esau.",
        "unlock": "Defeat Satan as  Jacob and Esau",
        "id": 430
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9b/Achievement_Birthright_icon.png/revision/latest?cb=20210822133206",
        "name": " Birthright",
        "description": "Complete the Chest with Jacob and Esau.",
        "unlock": "Defeat ??? as  Jacob and Esau",
        "id": 431
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3e/Achievement_Damocles_icon.png/revision/latest?cb=20210822133232",
        "name": " Damocles",
        "description": "Complete the Dark Room with Jacob and Esau.",
        "unlock": "Defeat The Lamb as  Jacob and Esau",
        "id": 432
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b9/Achievement_Rock_Bottom_icon.png/revision/latest?cb=20210822133302",
        "name": " Rock Bottom",
        "description": "Complete Boss Rush with Jacob and Esau.",
        "unlock": "Complete Boss Rush as  Jacob and Esau",
        "id": 433
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/95/Achievement_Inner_Child_icon.png/revision/latest?cb=20210822133339",
        "name": " Inner Child",
        "description": "Beat Greed mode with Jacob and Esau.",
        "unlock": "Defeat Ultra Greed as  Jacob and Esau",
        "id": 434
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/48/Achievement_Vanishing_Twin_icon.png/revision/latest?cb=20210822133404",
        "name": " Vanishing Twin",
        "description": "Complete ??? with Jacob and Esau.",
        "unlock": "Defeat Hush as  Jacob and Esau",
        "id": 435
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/10/Achievement_Genesis_icon.png/revision/latest?cb=20210822133428",
        "name": " Genesis",
        "description": "Beat Greedier mode with Jacob and Esau.",
        "unlock": "Defeat Ultra Greedier as  Jacob and Esau",
        "id": 436
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b9/Achievement_Suplex%21_icon.png/revision/latest?cb=20210822133453",
        "name": " Suplex!",
        "description": "Complete the Void with Jacob and Esau.",
        "unlock": "Defeat Delirium as  Jacob and Esau",
        "id": 437
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e6/Achievement_Solomon%27s_Baby_icon.png/revision/latest?cb=20210822133518",
        "name": " Solomon's Baby",
        "description": "Beat everything in Hard mode with Jacob and Esau.",
        "unlock": "Earn all Hard mode Completion Marks as  Jacob and Esau",
        "id": 438
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/68/Achievement_Illusion_Baby_icon.png/revision/latest?cb=20210822133542",
        "name": " Illusion Baby",
        "description": "Defeat Mega Satan with Jacob and Esau.",
        "unlock": "Defeat Mega Satan as  Jacob and Esau",
        "id": 439
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/42/Achievement_Meat_Cleaver_icon.png/revision/latest?cb=20210822133606",
        "name": " Meat Cleaver",
        "description": "Complete the Corpse with Isaac.",
        "unlock": "Defeat Mother as  Isaac",
        "id": 440
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/51/Achievement_Options%3F_icon.png/revision/latest?cb=20210822133632",
        "name": " Options?",
        "description": "Complete the final chapter with Isaac.",
        "unlock": "Defeat The Beast as  Isaac",
        "id": 441
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f1/Achievement_Yuck_Heart_icon.png/revision/latest?cb=20210822133655",
        "name": " Yuck Heart",
        "description": "Complete the Corpse with Magdalene.",
        "unlock": "Defeat Mother as  Magdalene",
        "id": 442
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6e/Achievement_Candy_Heart_icon.png/revision/latest?cb=20210822133719",
        "name": " Candy Heart",
        "description": "Complete the final chapter with Magdalene.",
        "unlock": "Defeat The Beast as  Magdalene",
        "id": 443
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/16/Achievement_Guppy%27s_Eye_icon.png/revision/latest?cb=20210822133743",
        "name": " Guppy's Eye",
        "description": "Complete the Corpse with Cain.",
        "unlock": "Defeat Mother as  Cain",
        "id": 444
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d8/Achievement_A_Pound_of_Flesh_icon.png/revision/latest?cb=20210822133807",
        "name": " A Pound of Flesh",
        "description": "Complete the final chapter with Cain.",
        "unlock": "Defeat The Beast as  Cain",
        "id": 445
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0e/Achievement_Akeldama_icon.png/revision/latest?cb=20210822133832",
        "name": " Akeldama",
        "description": "Complete the Corpse with Judas.",
        "unlock": "Defeat Mother as  Judas",
        "id": 446
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/56/Achievement_Redemption_icon.png/revision/latest?cb=20210822133855",
        "name": " Redemption",
        "description": "Complete the final chapter with Judas.",
        "unlock": "Defeat The Beast as  Judas",
        "id": 447
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/10/Achievement_Eternal_D6_icon.png/revision/latest?cb=20210822133919",
        "name": " Eternal D6",
        "description": "Complete the Corpse with ???.",
        "unlock": "Defeat Mother as  ???",
        "id": 448
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e7/Achievement_Montezuma%27s_Revenge_icon.png/revision/latest?cb=20210822133943",
        "name": " Montezuma's Revenge",
        "description": "Complete the final chapter with ???.",
        "unlock": "Defeat The Beast as  ???",
        "id": 449
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f0/Achievement_Bird_Cage_icon.png/revision/latest?cb=20210822134007",
        "name": " Bird Cage",
        "description": "Complete the Corpse with Eve.",
        "unlock": "Defeat Mother as  Eve",
        "id": 450
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0a/Achievement_Cracked_Orb_icon.png/revision/latest?cb=20210822134034",
        "name": " Cracked Orb",
        "description": "Complete the final chapter with Eve.",
        "unlock": "Defeat The Beast as  Eve",
        "id": 451
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/40/Achievement_Bloody_Gust_icon.png/revision/latest?cb=20210822134059",
        "name": " Bloody Gust",
        "description": "Complete the Corpse with Samson.",
        "unlock": "Defeat Mother as  Samson",
        "id": 452
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/01/Achievement_Empty_Heart_icon.png/revision/latest?cb=20210822134122",
        "name": " Empty Heart",
        "description": "Complete the final chapter with Samson.",
        "unlock": "Defeat The Beast as  Samson",
        "id": 453
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b8/Achievement_Devil%27s_Crown_icon.png/revision/latest?cb=20210822134146",
        "name": " Devil's Crown",
        "description": "Complete the Corpse with Azazel.",
        "unlock": "Defeat Mother as  Azazel",
        "id": 454
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/40/Achievement_Lil_Abaddon_icon.png/revision/latest?cb=20210822134211",
        "name": " Lil Abaddon",
        "description": "Complete the final chapter with Azazel.",
        "unlock": "Defeat The Beast as  Azazel",
        "id": 455
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/81/Achievement_Tinytoma_icon.png/revision/latest?cb=20210822134234",
        "name": " Tinytoma",
        "description": "Complete the Corpse with Lazarus.",
        "unlock": "Defeat Mother as  Lazarus",
        "id": 456
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/09/Achievement_Astral_Projection_icon.png/revision/latest?cb=20210822134259",
        "name": " Astral Projection",
        "description": "Complete the final chapter with Lazarus.",
        "unlock": "Defeat The Beast as  Lazarus",
        "id": 457
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/71/Achievement_%27M_icon.png/revision/latest?cb=20210822134322",
        "name": " 'M",
        "description": "Complete the Corpse with Eden.",
        "unlock": "Defeat Mother as  Eden",
        "id": 458
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d3/Achievement_Everything_Jar_icon.png/revision/latest?cb=20210822134346",
        "name": " Everything Jar",
        "description": "Complete the final chapter with Eden.",
        "unlock": "Defeat The Beast as  Eden",
        "id": 459
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/01/Achievement_Lost_Soul_icon.png/revision/latest?cb=20210822134412",
        "name": " Lost Soul",
        "description": "Complete the Corpse with the Lost.",
        "unlock": "Defeat Mother as  The Lost",
        "id": 460
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c5/Achievement_Hungry_Soul_icon.png/revision/latest?cb=20210822134436",
        "name": " Hungry Soul",
        "description": "Complete the final chapter with the Lost.",
        "unlock": "Defeat The Beast as  The Lost",
        "id": 461
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/28/Achievement_Blood_Puppy_icon.png/revision/latest?cb=20210822134459",
        "name": " Blood Puppy",
        "description": "Complete the Corpse with Lilith.",
        "unlock": "Defeat Mother as  Lilith",
        "id": 462
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8e/Achievement_C_Section_icon.png/revision/latest?cb=20210822134524",
        "name": " C Section",
        "description": "Complete the final chapter with Lilith.",
        "unlock": "Defeat The Beast as  Lilith",
        "id": 463
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b4/Achievement_Keeper%27s_Sack_icon.png/revision/latest?cb=20210822134551",
        "name": " Keeper's Sack",
        "description": "Complete the Corpse with Keeper.",
        "unlock": "Defeat Mother as  Keeper",
        "id": 464
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f5/Achievement_Keeper%27s_Box_icon.png/revision/latest?cb=20210822134614",
        "name": " Keeper's Box",
        "description": "Complete the final chapter with Keeper.",
        "unlock": "Defeat The Beast as  Keeper",
        "id": 465
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/07/Achievement_Lil_Portal_icon.png/revision/latest?cb=20210822134637",
        "name": " Lil Portal",
        "description": "Complete the Corpse with Apollyon.",
        "unlock": "Defeat Mother as  Apollyon",
        "id": 466
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/03/Achievement_Worm_Friend_icon.png/revision/latest?cb=20210822134702",
        "name": " Worm Friend",
        "description": "Complete the final chapter with Apollyon.",
        "unlock": "Defeat The Beast as  Apollyon",
        "id": 467
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/59/Achievement_Bone_Spurs_icon.png/revision/latest?cb=20210822134726",
        "name": " Bone Spurs",
        "description": "Complete the Corpse with the Forgotten.",
        "unlock": "Defeat Mother as  The Forgotten",
        "id": 468
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/76/Achievement_Spirit_Shackles_icon.png/revision/latest?cb=20210822134751",
        "name": " Spirit Shackles",
        "description": "Complete the final chapter with the Forgotten.",
        "unlock": "Defeat The Beast as  The Forgotten",
        "id": 469
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4f/Achievement_Revelation_icon.png/revision/latest?cb=20210822134823",
        "name": " Revelation",
        "description": "Complete the Corpse with Bethany.",
        "unlock": "Defeat Mother as  Bethany",
        "id": 470
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3a/Achievement_Jar_of_Wisps_icon.png/revision/latest?cb=20210822134847",
        "name": " Jar of Wisps",
        "description": "Complete the final chapter with Bethany.",
        "unlock": "Defeat The Beast as  Bethany",
        "id": 471
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/01/Achievement_Magic_Skin_icon.png/revision/latest?cb=20210822134912",
        "name": " Magic Skin",
        "description": "Complete the Corpse with Jacob and Esau.",
        "unlock": "Defeat Mother as  Jacob and Esau",
        "id": 472
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3e/Achievement_Friend_Finder_icon.png/revision/latest?cb=20210822134936",
        "name": " Friend Finder",
        "description": "Complete the final chapter with Jacob and Esau.",
        "unlock": "Defeat The Beast as  Jacob and Esau",
        "id": 473
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0f/Achievement_The_Broken_icon.png/revision/latest?cb=20210822135001",
        "name": " The Broken",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Isaac",
        "id": 474
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/db/Achievement_The_Dauntless_icon.png/revision/latest?cb=20210822135028",
        "name": " The Dauntless",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Magdalene",
        "id": 475
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c8/Achievement_The_Hoarder_icon.png/revision/latest?cb=20210822135051",
        "name": " The Hoarder",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Cain",
        "id": 476
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fc/Achievement_The_Deceiver_icon.png/revision/latest?cb=20210822135114",
        "name": " The Deceiver",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Judas",
        "id": 477
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/6b/Achievement_The_Soiled_icon.png/revision/latest?cb=20210822135139",
        "name": " The Soiled",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  ???",
        "id": 478
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1d/Achievement_The_Curdled_icon.png/revision/latest?cb=20210822135201",
        "name": " The Curdled",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Eve",
        "id": 479
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c8/Achievement_The_Savage_icon.png/revision/latest?cb=20210822135225",
        "name": " The Savage",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Samson",
        "id": 480
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f2/Achievement_The_Benighted_icon.png/revision/latest?cb=20210822135248",
        "name": " The Benighted",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Azazel",
        "id": 481
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c8/Achievement_The_Enigma_icon.png/revision/latest?cb=20210822135311",
        "name": " The Enigma",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Lazarus",
        "id": 482
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ed/Achievement_The_Capricious_icon.png/revision/latest?cb=20210822135333",
        "name": " The Capricious",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Eden",
        "id": 483
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/38/Achievement_The_Baleful_icon.png/revision/latest?cb=20210822135359",
        "name": " The Baleful",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  The Lost",
        "id": 484
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/04/Achievement_The_Harlot_icon.png/revision/latest?cb=20210822135425",
        "name": " The Harlot",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Lilith",
        "id": 485
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/97/Achievement_The_Miser_icon.png/revision/latest?cb=20210822135456",
        "name": " The Miser",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Keeper",
        "id": 486
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5f/Achievement_The_Empty_icon.png/revision/latest?cb=20210822135519",
        "name": " The Empty",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Apollyon",
        "id": 487
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c6/Achievement_The_Fettered_icon.png/revision/latest?cb=20210822135541",
        "name": " The Fettered",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  The Forgotten",
        "id": 488
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/72/Achievement_The_Zealot_icon.png/revision/latest?cb=20210822135605",
        "name": " The Zealot",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Bethany",
        "id": 489
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b2/Achievement_The_Deserter_icon.png/revision/latest?cb=20210822135630",
        "name": " The Deserter",
        "description": "???",
        "unlock": "Use Red Key (etc.) to open the hidden closet in Home as  Jacob and Esau",
        "id": 490
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f5/Achievement_Glitched_Crown_icon.png/revision/latest?cb=20210822135654",
        "name": " Glitched Crown",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Isaac",
        "id": 491
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/10/Achievement_Belly_Jelly_icon.png/revision/latest?cb=20210822135718",
        "name": " Belly Jelly",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Magdalene",
        "id": 492
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d1/Achievement_Blue_Key_icon.png/revision/latest?cb=20210822135742",
        "name": " Blue Key",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Cain",
        "id": 493
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/58/Achievement_Sanguine_Bond_icon.png/revision/latest?cb=20210822135806",
        "name": " Sanguine Bond",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Judas",
        "id": 494
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f3/Achievement_The_Swarm_icon.png/revision/latest?cb=20210822135832",
        "name": " The Swarm",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted ???",
        "id": 495
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9d/Achievement_Heartbreak_icon.png/revision/latest?cb=20210822135856",
        "name": " Heartbreak",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Eve",
        "id": 496
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9c/Achievement_Larynx_icon.png/revision/latest?cb=20210822135920",
        "name": " Larynx",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Samson",
        "id": 497
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/95/Achievement_Azazel%27s_Rage_icon.png/revision/latest?cb=20210822135945",
        "name": " Azazel's Rage",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Azazel",
        "id": 498
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2b/Achievement_Salvation_icon.png/revision/latest?cb=20210822140009",
        "name": " Salvation",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Lazarus",
        "id": 499
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/34/Achievement_TMTRAINER_icon.png/revision/latest?cb=20210822140033",
        "name": " TMTRAINER",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Eden",
        "id": 500
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/60/Achievement_Sacred_Orb_icon.png/revision/latest?cb=20210822140057",
        "name": " Sacred Orb",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Lost",
        "id": 501
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/20/Achievement_Twisted_Pair_icon.png/revision/latest?cb=20210822140121",
        "name": " Twisted Pair",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Lilith",
        "id": 502
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1c/Achievement_Strawman_icon.png/revision/latest?cb=20210822140145",
        "name": " Strawman",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Keeper",
        "id": 503
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/51/Achievement_Echo_Chamber_icon.png/revision/latest?cb=20210822140208",
        "name": " Echo Chamber",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Apollyon",
        "id": 504
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/eb/Achievement_Isaac%27s_Tomb_icon.png/revision/latest?cb=20210822140233",
        "name": " Isaac's Tomb",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Forgotten",
        "id": 505
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/42/Achievement_Vengeful_Spirit_icon.png/revision/latest?cb=20210822140257",
        "name": " Vengeful Spirit",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Bethany",
        "id": 506
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/58/Achievement_Esau_Jr._icon.png/revision/latest?cb=20210822140320",
        "name": " Esau Jr.",
        "description": "???",
        "unlock": "Defeat The Beast as  Tainted Jacob",
        "id": 507
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a1/Achievement_Bloody_Mary_icon.png/revision/latest?cb=20210822140349",
        "name": " Bloody Mary",
        "description": "Unlocked a new challenge.",
        "unlock": "Unlock  Bethany, Blood Bag, and It Lives!",
        "id": 508
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c2/Achievement_Baptism_by_Fire_icon.png/revision/latest?cb=20210822140415",
        "name": " Baptism by Fire",
        "description": "Unlocked a new challenge.",
        "unlock": "Defeat Satan as  Bethany, defeat Mom's Heart 11 times, and unlock Maggy's Faith",
        "id": 509
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f3/Achievement_Isaac%27s_Awakening_icon.png/revision/latest?cb=20210822140438",
        "name": " Isaac's Awakening",
        "description": "Unlocked a new challenge.",
        "unlock": "Defeat Mother",
        "id": 510
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e3/Achievement_Seeing_Double_icon.png/revision/latest?cb=20210822140501",
        "name": " Seeing Double",
        "description": "Unlocked a new challenge.",
        "unlock": "Defeat Mother",
        "id": 511
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3a/Achievement_Pica_Run_icon.png/revision/latest?cb=20210822140525",
        "name": " Pica Run",
        "description": "Unlocked a new challenge.",
        "unlock": "Defeat Mom's Heart 11 times and unlock Marbles",
        "id": 512
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/39/Achievement_Hot_Potato_icon.png/revision/latest?cb=20210822140550",
        "name": " Hot Potato",
        "description": "Unlocked a new challenge.",
        "unlock": "Unlock  Tainted Forgotten",
        "id": 513
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e3/Achievement_Cantripped%21_icon.png/revision/latest?cb=20210822140614",
        "name": " Cantripped!",
        "description": "Unlocked a new challenge.",
        "unlock": "Unlock  Tainted Cain",
        "id": 514
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0b/Achievement_Red_Redemption_icon.png/revision/latest?cb=20210822140640",
        "name": " Red Redemption",
        "description": "Unlocked a new challenge.",
        "unlock": "Unlock  Tainted Jacob",
        "id": 515
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7a/Achievement_DELETE_THIS_icon.png/revision/latest?cb=20210822140704",
        "name": " DELETE THIS",
        "description": "TODO: remove this achievement",
        "unlock": "Unlock  Tainted Eden",
        "id": 516
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/71/Achievement_Dirty_Mind_icon.png/revision/latest?cb=20210822140728",
        "name": " Dirty Mind",
        "description": "Complete Challenge 36.",
        "unlock": "Complete Scat Man (challenge #36)",
        "id": 517
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/64/Achievement_Sigil_of_Baphomet_icon.png/revision/latest?cb=20210822140752",
        "name": " Sigil of Baphomet",
        "description": "Complete Challenge 37.",
        "unlock": "Complete Bloody Mary (challenge #37)",
        "id": 518
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/39/Achievement_Purgatory_icon.png/revision/latest?cb=20210822140816",
        "name": " Purgatory",
        "description": "Complete Challenge 38.",
        "unlock": "Complete Baptism by Fire (challenge #38)",
        "id": 519
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f1/Achievement_Spirit_Sword_icon.png/revision/latest?cb=20210822140839",
        "name": " Spirit Sword",
        "description": "Complete Challenge 39.",
        "unlock": "Complete Isaac's Awakening (challenge #39)",
        "id": 520
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/90/Achievement_Broken_Glasses_icon.png/revision/latest?cb=20210822140905",
        "name": " Broken Glasses",
        "description": "Complete Challenge 40.",
        "unlock": "Complete Seeing Double (challenge #40)",
        "id": 521
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/47/Achievement_Ice_Cube_icon.png/revision/latest?cb=20210822140931",
        "name": " Ice Cube",
        "description": "Complete Challenge 41.",
        "unlock": "Complete Pica Run (challenge #41)",
        "id": 522
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/02/Achievement_Charged_Penny_icon.png/revision/latest?cb=20210822140955",
        "name": " Charged Penny",
        "description": "They will charge you up... for a small fee.",
        "unlock": "Donate to Battery Bums until they pay out with an item 5 times",
        "id": 523
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8d/Achievement_The_Fool_icon.png/revision/latest?cb=20210822141019",
        "name": " The Fool",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Lost",
        "id": 524
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4d/Achievement_The_Magician_icon.png/revision/latest?cb=20210822141044",
        "name": " The Magician",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Judas",
        "id": 525
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e2/Achievement_The_High_Priestess_icon.png/revision/latest?cb=20210822141108",
        "name": " The High Priestess",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Lilith",
        "id": 526
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/36/Achievement_The_Empress_icon.png/revision/latest?cb=20210822141132",
        "name": " The Empress",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Eve",
        "id": 527
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c0/Achievement_The_Emperor_icon.png/revision/latest?cb=20210822141156",
        "name": " The Emperor",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted ???",
        "id": 528
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/25/Achievement_The_Hierophant_icon.png/revision/latest?cb=20210822141220",
        "name": " The Hierophant",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Bethany",
        "id": 529
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/0a/Achievement_The_Lovers_icon.png/revision/latest?cb=20210822141245",
        "name": " The Lovers",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Magdalene",
        "id": 530
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/71/Achievement_The_Chariot_icon.png/revision/latest?cb=20210822141309",
        "name": " The Chariot",
        "description": "Complete Challenge 42.",
        "unlock": "Complete Hot Potato (challenge #42)",
        "id": 531
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8a/Achievement_Justice_icon.png/revision/latest?cb=20210822141333",
        "name": " Justice",
        "description": "Complete Challenge 43.",
        "unlock": "Complete Cantripped (challenge #43)",
        "id": 532
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8a/Achievement_The_Hermit_icon.png/revision/latest?cb=20210822141359",
        "name": " The Hermit",
        "description": "Complete Challenge 44.",
        "unlock": "Complete Red Redemption (challenge #44)",
        "id": 533
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7d/Achievement_Wheel_of_Fortune_icon.png/revision/latest?cb=20210822141424",
        "name": " Wheel of Fortune",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Cain",
        "id": 534
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c3/Achievement_Strength_icon.png/revision/latest?cb=20210822141448",
        "name": " Strength",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Samson",
        "id": 535
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/02/Achievement_The_Hanged_Man_icon.png/revision/latest?cb=20210822141513",
        "name": " The Hanged Man",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Keeper",
        "id": 536
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/58/Achievement_Death_icon.png/revision/latest?cb=20210822141538",
        "name": " Death",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Forgotten",
        "id": 537
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/ce/Achievement_Temperance_icon.png/revision/latest?cb=20210822141602",
        "name": " Temperance",
        "description": "INVALID_DESCRIPTION",
        "unlock": "Complete DELETE THIS (challenge #45)",
        "id": 538
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/20/Achievement_The_Devil_icon.png/revision/latest?cb=20210822141626",
        "name": " The Devil",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Azazel",
        "id": 539
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/33/Achievement_The_Tower_icon.png/revision/latest?cb=20210822141651",
        "name": " The Tower",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Apollyon",
        "id": 540
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1b/Achievement_The_Stars_icon.png/revision/latest?cb=20210822141716",
        "name": " The Stars",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Isaac",
        "id": 541
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ab/Achievement_The_Sun_and_the_Moon_icon.png/revision/latest?cb=20210822141741",
        "name": " The Sun and the Moon",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Jacob",
        "id": 542
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f5/Achievement_Judgement_icon.png/revision/latest?cb=20210822141805",
        "name": " Judgement",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Lazarus",
        "id": 543
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/97/Achievement_The_World_icon.png/revision/latest?cb=20210822141832",
        "name": " The World",
        "description": "???",
        "unlock": "Defeat Ultra Greedier as  Tainted Eden",
        "id": 544
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1c/Achievement_Old_Capacitor_icon.png/revision/latest?cb=20210822141857",
        "name": " Old Capacitor",
        "description": "Kill 10 Battery Bums.",
        "unlock": "Kill 10 Battery Bums",
        "id": 545
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/53/Achievement_Brimstone_Bombs_icon.png/revision/latest?cb=20210822141921",
        "name": " Brimstone Bombs",
        "description": "Kill Hornfel before he escapes!",
        "unlock": "After breaking Hornfel's minecart, kill him before he can escape",
        "id": 546
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b2/Achievement_Mega_Mush_icon.png/revision/latest?cb=20210822141949",
        "name": " Mega Mush",
        "description": "Beat everything in Hard Mode as every character.",
        "unlock": "Earn all Hard mode Completion Marks for all non-Tainted characters",
        "id": 547
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/22/Achievement_Mom%27s_Lock_icon.png/revision/latest?cb=20210822142014",
        "name": " Mom's Lock",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Isaac",
        "id": 548
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/77/Achievement_Dice_Bag_icon.png/revision/latest?cb=20210822142039",
        "name": " Dice Bag",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Isaac",
        "id": 549
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/da/Achievement_Holy_Crown_icon.png/revision/latest?cb=20210822142105",
        "name": " Holy Crown",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Magdalene",
        "id": 550
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f1/Achievement_Mother%27s_Kiss_icon.png/revision/latest?cb=20210822142128",
        "name": " Mother's Kiss",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Magdalene",
        "id": 551
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e4/Achievement_Gilded_Key_icon.png/revision/latest?cb=20210822142154",
        "name": " Gilded Key",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Cain",
        "id": 552
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ec/Achievement_Lucky_Sack_icon.png/revision/latest?cb=20210822142218",
        "name": " Lucky Sack",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Cain",
        "id": 553
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a2/Achievement_Your_Soul_icon.png/revision/latest?cb=20210822142242",
        "name": " Your Soul",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Judas",
        "id": 554
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9e/Achievement_Number_Magnet_icon.png/revision/latest?cb=20210822142306",
        "name": " Number Magnet",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Judas",
        "id": 555
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ac/Achievement_Dingle_Berry_icon.png/revision/latest?cb=20210822142329",
        "name": " Dingle Berry",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted ;???",
        "id": 556
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f2/Achievement_Ring_Cap_icon.png/revision/latest?cb=20210822142353",
        "name": " Ring Cap",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted ???",
        "id": 557
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/31/Achievement_Strange_Key_icon.png/revision/latest?cb=20210822142418",
        "name": " Strange Key",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Eve",
        "id": 558
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/da/Achievement_Lil_Clot_icon.png/revision/latest?cb=20210822142441",
        "name": " Lil Clot",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Eve",
        "id": 559
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/40/Achievement_Temporary_Tattoo_icon.png/revision/latest?cb=20210822142504",
        "name": " Temporary Tattoo",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Samson",
        "id": 560
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/21/Achievement_Swallowed_M80_icon.png/revision/latest?cb=20210822142528",
        "name": " Swallowed M80",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Samson",
        "id": 561
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ad/Achievement_Wicked_Crown_icon.png/revision/latest?cb=20210822142555",
        "name": " Wicked Crown",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Azazel",
        "id": 562
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2d/Achievement_Azazel%27s_Stump_icon.png/revision/latest?cb=20210822142618",
        "name": " Azazel's Stump",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Azazel",
        "id": 563
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5a/Achievement_Torn_Pocket_icon.png/revision/latest?cb=20210822142643",
        "name": " Torn Pocket",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Lazarus",
        "id": 564
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b8/Achievement_Torn_Card_icon.png/revision/latest?cb=20210822142706",
        "name": " Torn Card",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Lazarus",
        "id": 565
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ab/Achievement_Nuh_Uh%21_icon.png/revision/latest?cb=20210822142730",
        "name": " Nuh Uh!",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Eden",
        "id": 566
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c7/Achievement_Modeling_Clay_icon.png/revision/latest?cb=20210822142754",
        "name": " Modeling Clay",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Eden",
        "id": 567
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/bd/Achievement_Kid%27s_Drawing_icon.png/revision/latest?cb=20210822142817",
        "name": " Kid's Drawing",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Lost",
        "id": 568
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4f/Achievement_Crystal_Key_icon.png/revision/latest?cb=20210822142840",
        "name": " Crystal Key",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Lost",
        "id": 569
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fb/Achievement_The_Twins_icon.png/revision/latest?cb=20210822142903",
        "name": " The Twins",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Lilith",
        "id": 570
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/50/Achievement_Adoption_Papers_icon.png/revision/latest?cb=20210822142927",
        "name": " Adoption Papers",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Lilith",
        "id": 571
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/bf/Achievement_Keeper%27s_Bargain_icon.png/revision/latest?cb=20210822142951",
        "name": " Keeper's Bargain",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Keeper",
        "id": 572
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/44/Achievement_Cursed_Penny_icon.png/revision/latest?cb=20210822143016",
        "name": " Cursed Penny",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Keeper",
        "id": 573
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/26/Achievement_Cricket_Leg_icon.png/revision/latest?cb=20210822143041",
        "name": " Cricket Leg",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Apollyon",
        "id": 574
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c4/Achievement_Apollyon%27s_Best_Friend_icon.png/revision/latest?cb=20210822143105",
        "name": " Apollyon's Best Friend",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Apollyon",
        "id": 575
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/cd/Achievement_Polished_Bone_icon.png/revision/latest?cb=20210822143128",
        "name": " Polished Bone",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Forgotten",
        "id": 576
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5f/Achievement_Hollow_Heart_icon.png/revision/latest?cb=20210822143152",
        "name": " Hollow Heart",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Forgotten",
        "id": 577
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3d/Achievement_Expansion_Pack_icon.png/revision/latest?cb=20210822143215",
        "name": " Expansion Pack",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Bethany",
        "id": 578
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c9/Achievement_Beth%27s_Essence_icon.png/revision/latest?cb=20210822143238",
        "name": " Beth's Essence",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Bethany",
        "id": 579
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/97/Achievement_RC_Remote_icon.png/revision/latest?cb=20210822143302",
        "name": " RC Remote",
        "description": "???",
        "unlock": "Defeat Isaac, ???, Satan, and The Lamb as  Tainted Jacob",
        "id": 580
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/38/Achievement_Found_Soul_icon.png/revision/latest?cb=20210822143325",
        "name": " Found Soul",
        "description": "???",
        "unlock": "Defeat Mother as  Tainted Jacob",
        "id": 581
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3c/Achievement_Member_Card_icon.png/revision/latest?cb=20210822143349",
        "name": " Member Card",
        "description": "Spend 40+ pennies in a single shop.",
        "unlock": "Spend 40+ coins in a single Shop",
        "id": 582
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ab/Achievement_Golden_Razor_icon.png/revision/latest?cb=20210822143413",
        "name": " Golden Razor",
        "description": "Obtain 99 pennies. Then spend every single one of them.",
        "unlock": "In a single run, obtain 99 Coins, then spend all of them",
        "id": 583
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d1/Achievement_Spindown_Dice_icon.png/revision/latest?cb=20210822143436",
        "name": " Spindown Dice",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Isaac",
        "id": 584
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f8/Achievement_Hypercoagulation_icon.png/revision/latest?cb=20210822143503",
        "name": " Hypercoagulation",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Magdalene",
        "id": 585
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b9/Achievement_Bag_of_Crafting_icon.png/revision/latest?cb=20210822143527",
        "name": " Bag of Crafting",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Cain",
        "id": 586
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/17/Achievement_Dark_Arts_icon.png/revision/latest?cb=20210822143556",
        "name": " Dark Arts",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Judas",
        "id": 587
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d0/Achievement_IBS_icon.png/revision/latest?cb=20210822143620",
        "name": " IBS",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted ???",
        "id": 588
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/07/Achievement_Sumptorium_icon.png/revision/latest?cb=20210822143644",
        "name": " Sumptorium",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Eve",
        "id": 589
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2c/Achievement_Berserk%21_icon.png/revision/latest?cb=20210822143709",
        "name": " Berserk!",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Samson",
        "id": 590
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ee/Achievement_Hemoptysis_icon.png/revision/latest?cb=20210822143733",
        "name": " Hemoptysis",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Azazel",
        "id": 591
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f9/Achievement_Flip_icon.png/revision/latest?cb=20210822143758",
        "name": " Flip",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Lazarus",
        "id": 592
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/eb/Achievement_Corrupted_Data_icon.png/revision/latest?cb=20210822143823",
        "name": " Corrupted Data",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Eden",
        "id": 593
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/60/Achievement_Ghost_Bombs_icon.png/revision/latest?cb=20210822143848",
        "name": " Ghost Bombs",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Lost",
        "id": 594
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f1/Achievement_Gello_icon.png/revision/latest?cb=20210822143913",
        "name": " Gello",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Lilith",
        "id": 595
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/59/Achievement_Keeper%27s_Kin_icon.png/revision/latest?cb=20210822143937",
        "name": " Keeper's Kin",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Keeper",
        "id": 596
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/bb/Achievement_Abyss_icon.png/revision/latest?cb=20210822144002",
        "name": " Abyss",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Apollyon",
        "id": 597
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ab/Achievement_Decap_Attack_icon.png/revision/latest?cb=20210822144035",
        "name": " Decap Attack",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Forgotten",
        "id": 598
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8d/Achievement_Lemegeton_icon.png/revision/latest?cb=20210822144058",
        "name": " Lemegeton",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Bethany",
        "id": 599
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/4c/Achievement_Anima_Sola_icon.png/revision/latest?cb=20210822144125",
        "name": " Anima Sola",
        "description": "???",
        "unlock": "Defeat Delirium as  Tainted Jacob",
        "id": 600
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d5/Achievement_Mega_Chest_icon.png/revision/latest?cb=20210822144151",
        "name": " Mega Chest",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Isaac",
        "id": 601
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d3/Achievement_Queen_of_Hearts_icon.png/revision/latest?cb=20210822144224",
        "name": " Queen of Hearts",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Magdalene",
        "id": 602
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2c/Achievement_Gold_Pill_icon.png/revision/latest?cb=20210822144255",
        "name": " Gold Pill",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Cain",
        "id": 603
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/39/Achievement_Black_Sack_icon.png/revision/latest?cb=20210822144319",
        "name": " Black Sack",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Judas",
        "id": 604
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b4/Achievement_Charming_Poop_icon.png/revision/latest?cb=20210822144343",
        "name": " Charming Poop",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted ???",
        "id": 605
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/7c/Achievement_Horse_Pill_icon.png/revision/latest?cb=20210822144406",
        "name": " Horse Pill",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Eve",
        "id": 606
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e7/Achievement_Crane_Game_icon.png/revision/latest?cb=20210822144436",
        "name": " Crane Game",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Samson",
        "id": 607
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ae/Achievement_Hell_Game_icon.png/revision/latest?cb=20210822144459",
        "name": " Hell Game",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Azazel",
        "id": 608
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5e/Achievement_Wooden_Chest_icon.png/revision/latest?cb=20210822144523",
        "name": " Wooden Chest",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Lazarus",
        "id": 609
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fd/Achievement_Wild_Card_icon.png/revision/latest?cb=20210822144559",
        "name": " Wild Card",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Eden",
        "id": 610
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b8/Achievement_Haunted_Chest_icon.png/revision/latest?cb=20210822144626",
        "name": " Haunted Chest",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Lost",
        "id": 611
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/69/Achievement_Fool%27s_Gold_icon.png/revision/latest?cb=20210822144649",
        "name": " Fool's Gold",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Lilith",
        "id": 612
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/3b/Achievement_Golden_Penny_icon.png/revision/latest?cb=20210822144714",
        "name": " Golden Penny",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Keeper",
        "id": 613
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5c/Achievement_Rotten_Beggar_icon.png/revision/latest?cb=20210822144741",
        "name": " Rotten Beggar",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Apollyon",
        "id": 614
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d0/Achievement_Golden_Battery_icon.png/revision/latest?cb=20210822144808",
        "name": " Golden Battery",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Forgotten",
        "id": 615
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e6/Achievement_Confessional_icon.png/revision/latest?cb=20210822144832",
        "name": " Confessional",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Bethany",
        "id": 616
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1d/Achievement_Golden_Trinket_icon.png/revision/latest?cb=20210822144855",
        "name": " Golden Trinket",
        "description": "???",
        "unlock": "Defeat Mega Satan as  Tainted Jacob",
        "id": 617
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/88/Achievement_Soul_of_Isaac_icon.png/revision/latest?cb=20210822144920",
        "name": " Soul of Isaac",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Isaac",
        "id": 618
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b8/Achievement_Soul_of_Magdalene_icon.png/revision/latest?cb=20210822144952",
        "name": " Soul of Magdalene",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Magdalene",
        "id": 619
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/63/Achievement_Soul_of_Cain_icon.png/revision/latest?cb=20210822145016",
        "name": " Soul of Cain",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Cain",
        "id": 620
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/42/Achievement_Soul_of_Judas_icon.png/revision/latest?cb=20210822145041",
        "name": " Soul of Judas",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Judas",
        "id": 621
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/88/Achievement_Soul_of_%3F%3F%3F_icon.png/revision/latest?cb=20210822145107",
        "name": " Soul of ???",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted ???",
        "id": 622
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b8/Achievement_Soul_of_Eve_icon.png/revision/latest?cb=20210822145130",
        "name": " Soul of Eve",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Eve",
        "id": 623
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/23/Achievement_Soul_of_Samson_icon.png/revision/latest?cb=20210822145153",
        "name": " Soul of Samson",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Samson",
        "id": 624
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/2/2e/Achievement_Soul_of_Azazel_icon.png/revision/latest?cb=20210822145218",
        "name": " Soul of Azazel",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Azazel",
        "id": 625
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/da/Achievement_Soul_of_Lazarus_icon.png/revision/latest?cb=20210822145241",
        "name": " Soul of Lazarus",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Lazarus",
        "id": 626
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/83/Achievement_Soul_of_Eden_icon.png/revision/latest?cb=20210822145306",
        "name": " Soul of Eden",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Eden",
        "id": 627
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/54/Achievement_Soul_of_the_Lost_icon.png/revision/latest?cb=20210822145331",
        "name": " Soul of the Lost",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Lost",
        "id": 628
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/1d/Achievement_Soul_of_Lilith_icon.png/revision/latest?cb=20210822145403",
        "name": " Soul of Lilith",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Lilith",
        "id": 629
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/dd/Achievement_Soul_of_the_Keeper_icon.png/revision/latest?cb=20210822145431",
        "name": " Soul of the Keeper",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Keeper",
        "id": 630
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fa/Achievement_Soul_of_Apollyon_icon.png/revision/latest?cb=20210822145455",
        "name": " Soul of Apollyon",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Apollyon",
        "id": 631
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fd/Achievement_Soul_of_the_Forgotten_icon.png/revision/latest?cb=20210822145519",
        "name": " Soul of the Forgotten",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Forgotten",
        "id": 632
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/d6/Achievement_Soul_of_Bethany_icon.png/revision/latest?cb=20210822145543",
        "name": " Soul of Bethany",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Bethany",
        "id": 633
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/68/Achievement_Soul_of_Jacob_and_Esau_icon.png/revision/latest?cb=20210822145606",
        "name": " Soul of Jacob and Esau",
        "description": "???",
        "unlock": "Defeat Hush and Boss Rush as  Tainted Jacob",
        "id": 634
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/9c/Achievement_A_Strange_Door_icon.png/revision/latest?cb=20210822145629",
        "name": " A Strange Door",
        "description": "Where could it lead to?",
        "unlock": "Defeat Mother",
        "id": 635
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e0/Achievement_Death_Certificate_icon.png/revision/latest?cb=20210822145655",
        "name": " Death Certificate",
        "description": "...",
        "unlock": "Earn all Hard mode Completion Marks for all characters, including tainted ones",
        "id": 636
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/97/Achievement_Dead_God_icon.png/revision/latest?cb=20210822145720",
        "name": " Dead God",
        "description": "",
        "unlock": "Unlock all the other achievements and collect every item in the game",
        "id": 637
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/9/90/Achievement_Play_Online_icon.png/revision/latest?cb=20231201153454",
        "name": " Play Online",
        "description": "Played Online",
        "unlock": "Play an Online game",
        "id": 638
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/dd/Achievement_Win_Online_icon.png/revision/latest?cb=20231201153530",
        "name": " Win Online",
        "description": "Won Online",
        "unlock": "Win an Online run",
        "id": 639
    },
    {
        "imageSrc": "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/4/41/Achievement_Win_Online_Daily_icon.png/revision/latest?cb=20231201153557",
        "name": " Win Online Daily",
        "description": "Won Online Daily",
        "unlock": "Win an Online Daily run",
        "id": 640
    }
].map(el => {
    let indexOfRevision = el.imageSrc.indexOf('/revision/')
    if (indexOfRevision !== -1) el.imageSrc = el.imageSrc.substring(0, indexOfRevision)
    return el
})