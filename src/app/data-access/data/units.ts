import { Unit, UnitsObject } from "../models/unit.models";

export const MOCK_UNITS_DATA: UnitsObject ={
  units: [
    {
      id: 1,
      name: "Archer",
      description: "Quick and light. Weak at close range; excels at battle from distance",
      expansion: "Age of Kings",
      age: "Feudal",
      cost: {
        Wood: 25,
        Gold: 45
      },
      build_time: 35,
      reload_time: 2,
      attack_delay: 0.35,
      movement_rate: 0.96,
      line_of_sight: 6,
      hit_points: 4,
      range: 30,
      attack: 4,
      armor: "0/0",
      accuracy: "80%"
    },
    {
      id: 2,
      name: "Crossbowman",
      description: "Upgraded archer",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Wood: 25,
        Gold: 45
      },
      build_time: 27,
      reload_time: 2,
      attack_delay: 0.35,
      movement_rate: 0.96,
      line_of_sight: 7,
      hit_points: 35,
      range: 5,
      attack: 5,
      armor: "0/0",
      attack_bonus: [
        "+3 spearmen"
      ],
      accuracy: "85%"
    },
    {
      id: 3,
      name: "Arbalest",
      description: "Upgraded crossbowman",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Wood: 25,
        Gold: 45
      },
      build_time: 27,
      reload_time: 2,
      attack_delay: 0.35,
      movement_rate: 0.96,
      line_of_sight: 7,
      hit_points: 40,
      range: 5,
      attack: 6,
      armor: "0/0",
      attack_bonus: [
        "+3 spearmen"
      ],
      accuracy: "90%"
    },
    {
      id: 4,
      name: "Cavalry Archer",
      description: "Fast with ranged attack. Ideal for hit-and-run attacks",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Wood: 40,
        Gold: 70
      },
      build_time: 34,
      reload_time: 2,
      attack_delay: 1,
      movement_rate: 1.4,
      line_of_sight: 5,
      hit_points: 50,
      range: 4,
      attack: 6,
      armor: "0/0",
      attack_bonus: [
        "+2 spearmen"
      ],
      search_radius: 6,
      accuracy: "50%"
    },
    {
      id: 5,
      name: "Heavy Cavalry Archer",
      description: "Upgraded Cavalry Archer",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Wood: 40,
        Gold: 70
      },
      build_time: 27,
      reload_time: 2,
      attack_delay: 1,
      movement_rate: 1.4,
      line_of_sight: 6,
      hit_points: 60,
      range: 4,
      attack: 7,
      armor: "1/0",
      attack_bonus: [
        "+2 spearmen"
      ],
      accuracy: "50%"
    },
    {
      id: 6,
      name: "Hand Cannoneer",
      description: "Powerful close attack; inaccurate at range. Attack bonus against spearman +11 in total",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Food: 45,
        Gold: 50
      },
      build_time: 34,
      reload_time: 3.45,
      attack_delay: 0.45,
      movement_rate: 0.96,
      line_of_sight: 9,
      hit_points: 35,
      range: 7,
      attack: 17,
      armor: "1/0",
      attack_bonus: [
        "1 spearmen",
        "+10 infantry",
        "+2 rams"
      ],
      accuracy: "65%"
    },
    {
      id: 7,
      name: "Skirmisher",
      description: "Ranged unit equipped with armor vs. archer attacks",
      expansion: "Age of Kings",
      age: "Feudal",
      cost: {
        Food: 25,
        Wood: 35
      },
      build_time: 22,
      reload_time: 3,
      attack_delay: 0.5,
      movement_rate: 0.96,
      line_of_sight: 6,
      hit_points: 30,
      range: "1-4",
      attack: 2,
      armor: "0/3",
      attack_bonus: [
        "+3 spearmen",
        "+3 archers/hand cannon/skirms/conquistadors"
      ],
      accuracy: "90%"
    },
    {
      id: 8,
      name: "Elite Skirmisher",
      description: "Upgraded skirmisher",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Food: 25,
        Wood: 35
      },
      build_time: 22,
      reload_time: 3,
      attack_delay: 0.5,
      movement_rate: 0.96,
      line_of_sight: 7,
      hit_points: 35,
      range: "1-5",
      attack: 3,
      armor: "0/4",
      attack_bonus: [
        "+3 spearmen",
        "+4 archers/hand cannon/skirms/conquistadors",
        "+6 against cavalry archers"
      ],
      accuracy: "90%"
    },
    {
      id: 9,
      name: "Eagle Warrior",
      description: "Fast infantry with extensive sight; resists conversion; attack bonus vs. Monks",
      expansion: "The Conquerors",
      age: "Dark",
      cost: null,
      reload_time: 2,
      movement_rate: 1.1,
      line_of_sight: 6,
      hit_points: 50,
      attack: 4,
      armor: "0/2",
      attack_bonus: [
        "+8 monks",
        "+3 siege"
      ]
    },
    {
      id: 10,
      name: "Eagle Warrior",
      description: "Fast infantry with extensive sight; resists conversion; attack bonus vs. Monks",
      expansion: "The Conquerors",
      age: "Castle",
      cost: {
        Food: 20,
        Gold: 50
      },
      build_time: 35,
      reload_time: 2,
      movement_rate: 1.1,
      line_of_sight: 6,
      hit_points: 50,
      attack: 7,
      armor: "0/2",
      attack_bonus: [
        "+8 monks",
        "+3 siege",
        "+2 cavalry",
        "+1 ship/camel"
      ]
    },
    {
      id: 11,
      name: "Elite Eagle Warrior",
      description: "Upgraded Eagle Warrior",
      expansion: "The Conquerors",
      age: "Imperial",
      cost: {
        Food: 20,
        Gold: 50
      },
      build_time: 20,
      reload_time: 2,
      movement_rate: 1.3,
      line_of_sight: 6,
      hit_points: 60,
      attack: 9,
      armor: "0/4",
      attack_bonus: [
        "+10 monks",
        "+5 siege",
        "+4 cavalry",
        "+2 ship/camel"
      ]
    },
    {
      id: 12,
      name: "Spearman",
      description: "Medium infantry",
      expansion: "Age of Kings",
      age: "Feudal",
      cost: {
        Food: 35,
        Wood: 15
      },
      build_time: 22,
      reload_time: 3,
      movement_rate: 1,
      line_of_sight: 4,
      hit_points: 45,
      attack: 3,
      armor: "0/0",
      attack_bonus: [
        "+1 eagles",
        "+1 buildings",
        "+30 war elephants",
        "+15 cavalry",
        "+7 camels/ships"
      ]
    },
    {
      id: 13,
      name: "Pikeman",
      description: "Upgraded Spearman",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Food: 35,
        Wood: 25
      },
      build_time: 22,
      reload_time: 3,
      movement_rate: 1,
      line_of_sight: 4,
      hit_points: 55,
      attack: 4,
      armor: "0/0",
      attack_bonus: [
        "+1 eagles",
        "+1 buildings",
        "+47 war elephants",
        "+22 cavalry",
        "+11 camels/ships"
      ]
    },
    {
      id: 14,
      name: "Halberdier",
      description: "Upgraded Pikeman",
      expansion: "The Conquerors",
      age: "Imperial",
      cost: {
        Food: 35,
        Wood: 25
      },
      build_time: 22,
      reload_time: 3,
      movement_rate: 1,
      line_of_sight: 4,
      hit_points: 60,
      attack: 6,
      armor: "0/0",
      attack_bonus: [
        "+1 eagles",
        "+1 buildings",
        "+60 war elephants",
        "+32 cavalry",
        "+16 camels/ships"
      ]
    },
    {
      id: 15,
      name: "Militia",
      description: "Basic infantry swordsman. Quick and cheap to create",
      expansion: "Age of Kings",
      age: "Dark",
      cost: {
        Food: 60,
        Gold: 20
      },
      build_time: 21,
      reload_time: 2,
      movement_rate: 0.9,
      line_of_sight: 4,
      hit_points: 40,
      attack: 4,
      armor: "0/1"
    },
    {
      id: 16,
      name: "Man At Arms",
      description: "Upgraded Militia. Attack bonus vs. buildings",
      expansion: "Age of Kings",
      age: "Feudal",
      cost: {
        Food: 60,
        Gold: 20
      },
      build_time: 21,
      reload_time: 2,
      movement_rate: 0.9,
      line_of_sight: 4,
      hit_points: 45,
      attack: 6,
      armor: "0/1",
      attack_bonus: [
        "+2 eagles",
        "+1 buildings"
      ]
    },
    {
      id: 17,
      name: "Long Swordman",
      description: "Upgraded Man-at-Arms",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Food: 60,
        Gold: 20
      },
      build_time: 21,
      reload_time: 2,
      movement_rate: 0.9,
      line_of_sight: 4,
      hit_points: 55,
      attack: 9,
      armor: "0/1",
      attack_bonus: [
        "+4 eagles",
        "+2 buildings"
      ]
    },
    {
      id: 18,
      name: "Two Handed Swordsman",
      description: "Upgraded Long Swordsman. Attack bonus vs. buildings",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Food: 60,
        Gold: 20
      },
      build_time: 21,
      reload_time: 2,
      movement_rate: 0.9,
      line_of_sight: 5,
      hit_points: 60,
      attack: 11,
      armor: "0/1",
      attack_bonus: [
        "+6 eagles",
        "+3 buildings"
      ],
      search_radius: 4
    },
    {
      id: 19,
      name: "Champion",
      description: "Upgraded Two-Handed Swordsman",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Food: 60,
        Gold: 20
      },
      build_time: 21,
      reload_time: 2,
      movement_rate: 0.9,
      line_of_sight: 5,
      hit_points: 70,
      attack: 13,
      armor: "1/1",
      attack_bonus: [
        "+6 eagles",
        "+3 buildings"
      ],
      search_radius: 5
    },
    {
      id: 20,
      name: "King",
      description: "Cannot be produced so the cost and build time just for the sake of interest",
      expansion: "Age of Kings",
      age: "Dark",
      cost: {
        Food: 50
      },
      build_time: 30,
      movement_rate: 1.32,
      line_of_sight: 6,
      hit_points: 75,
      armor: "0/0"
    },
    {
      id: 21,
      name: "Petard",
      description: "Demolition infantry unit armed with explosives. Bonuses add up - for example against walls and gates: +500 buildings +900 walls = +1400 bonus attack",
      expansion: "The Conquerors",
      age: "Castle",
      cost: {
        Food: 80,
        Gold: 20
      },
      build_time: 25,
      movement_rate: 0.8,
      line_of_sight: 4,
      hit_points: 50,
      attack: 25,
      armor: "0/2",
      attack_bonus: [
        "+500 buildings",
        "+100 castle",
        "+60 siege",
        "+900 walls & gates"
      ],
      blast_radius: 0.5
    },
    {
      id: 22,
      name: "Trebuchet",
      description: "Powerful siege weapon used to destroy buildings and walls from long distance. Cannot fire on close units. Must be packed to move and unpacked to attack. Can cut paths through forests. Unpack time: 0:11",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Wood: 200,
        Gold: 200
      },
      build_time: 50,
      reload_time: 10,
      attack_delay: 0.6,
      line_of_sight: 18,
      hit_points: 150,
      range: "4-16",
      attack: 200,
      armor: "1/150",
      attack_bonus: [
        "+250 buildings"
      ],
      accuracy: "15%"
    },
    {
      id: 23,
      name: "Trebuchet (packed)",
      description: "Powerful siege weapon used to destroy buildings and walls from long distance. Cannot fire on close units. Must be packed to move and unpacked to attack. Can cut paths through forests. Unpack time: 0:11",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Wood: 200,
        Gold: 200
      },
      build_time: 50,
      movement_rate: 0.8,
      line_of_sight: 18,
      hit_points: 150,
      armor: "2/8",
      attack_bonus: [
        "+250 buildings"
      ],
      accuracy: "15% (80% if walls/towers/buildings with target radius 1)"
    },
    {
      id: 24,
      name: "Cannon Galleon",
      description: "Long-range warship used to attack targets on shore to establish beachhead. Fires slowly and has minimum range",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Wood: 200,
        Gold: 150
      },
      build_time: 46,
      reload_time: 10,
      movement_rate: 1.1,
      line_of_sight: 15,
      hit_points: 120,
      range: "3-13",
      attack: 35,
      armor: "0/6",
      attack_bonus: [
        "+200 buildings",
        "+15 infantry",
        "+15 archers",
        "+15 cavalry",
        "+40 siege"
      ],
      accuracy: "50%"
    },
    {
      id: 25,
      name: "Elite Cannon Galleon",
      description: "Upgraded Cannon Galleon",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Wood: 200,
        Gold: 150
      },
      build_time: 46,
      reload_time: 10,
      movement_rate: 1.1,
      line_of_sight: 17,
      hit_points: 150,
      range: "3-15",
      attack: 45,
      armor: "0/8",
      attack_bonus: [
        "+275 buildings",
        "+15 infantry",
        "+15 archers",
        "+15 cavalry",
        "+40 siege"
      ],
      accuracy: "50%"
    },
    {
      id: 26,
      name: "Demolition Ship",
      description: "Filled with explosives. Self-destructs when used. Pilot near enemy ships and detonate to wrest control of the sea from an entrenched opponent",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Wood: 70,
        Gold: 50
      },
      build_time: 31,
      movement_rate: 1.6,
      line_of_sight: 6,
      hit_points: 50,
      attack: 110,
      armor: "0/3",
      attack_bonus: [
        "+220 buildings"
      ],
      armor_bonus: [
        "+3 ships/camel"
      ],
      blast_radius: 2.5
    },
    {
      id: 27,
      name: "Heavy Demolition Ship",
      description: "Upgraded Demolition Ship",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Wood: 70,
        Gold: 50
      },
      build_time: 31,
      movement_rate: 1.6,
      line_of_sight: 6,
      hit_points: 60,
      attack: 140,
      armor: "0/3",
      attack_bonus: [
        "+280 buildings"
      ],
      armor_bonus: [
        "+5 ships/camel"
      ],
      search_radius: 5,
      blast_radius: 3.5
    },
    {
      id: 28,
      name: "Fire Ship",
      description: "Spews fire at other ships. Good at sinking galleys. Attack shows pierce attack",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Wood: 75,
        Gold: 45
      },
      build_time: 36,
      reload_time: 0.25,
      movement_rate: 1.35,
      line_of_sight: 5,
      hit_points: 100,
      range: "2.49",
      attack: 2,
      armor: "0/6",
      attack_bonus: [
        "+2 buildings",
        "+3 ships/camels",
        "+2 turtle ships",
        "+1 melee"
      ],
      armor_bonus: [
        "+5 ships/camel"
      ]
    },
    {
      id: 29,
      name: "Fast Fire Ship",
      description: "Upgraded Fire Ship",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Wood: 75,
        Gold: 45
      },
      build_time: 36,
      reload_time: 0.25,
      movement_rate: 1.43,
      line_of_sight: 6,
      hit_points: 120,
      range: "2.49",
      attack: 3,
      armor: "0/8",
      attack_bonus: [
        "+3 buildings",
        "+4 ships/camels",
        "+3 turtle ships",
        "+1 melee"
      ],
      armor_bonus: [
        "+7 ships/camel"
      ]
    },
    {
      id: 30,
      name: "Galley",
      description: "Small and fast ship with weak attack. Used to scout the water and for early attacks on enemy fishing fleets",
      expansion: "Age of Kings",
      age: "Feudal",
      cost: {
        Wood: 90,
        Gold: 30
      },
      build_time: 60,
      reload_time: 3,
      movement_rate: 1.43,
      line_of_sight: 7,
      hit_points: 120,
      range: 5,
      attack: 6,
      armor: "0/6",
      attack_bonus: [
        "+6 buildings",
        "+8 ships/camels",
        "+3 rams"
      ]
    },
    {
      id: 31,
      name: "War Galley",
      description: "Upgraded Galley",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Wood: 90,
        Gold: 30
      },
      build_time: 36,
      reload_time: 3,
      movement_rate: 1.43,
      line_of_sight: 8,
      hit_points: 135,
      range: 6,
      attack: 7,
      armor: "0/6",
      attack_bonus: [
        "+7 buildings",
        "+9 ships/camels",
        "+4 rams"
      ]
    },
    {
      id: 32,
      name: "Galleon",
      description: "Upgraded War Galley",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Wood: 90,
        Gold: 30
      },
      build_time: 36,
      reload_time: 3,
      movement_rate: 1.43,
      line_of_sight: 9,
      hit_points: 165,
      range: 7,
      attack: 8,
      armor: "0/8",
      attack_bonus: [
        "+8 buildings",
        "+11 ships/camels",
        "+4 rams"
      ]
    },
    {
      id: 33,
      name: "Longboat",
      description: "Viking unique unit. Fires multiple arrows. volley of 4 arrows (7-1-1-1). Castle needed. Because of the multiple arrows the delay between starts of attacks is roughly 3.34",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Wood: 80,
        Gold: 40
      },
      build_time: 25,
      reload_time: 3,
      attack_delay: 9,
      movement_rate: 1.54,
      line_of_sight: 8,
      hit_points: 130,
      range: 6,
      attack: 7,
      armor: "0/6",
      attack_bonus: [
        "+7 buildings",
        "+9 ships",
        "+4 rams"
      ],
      accuracy: "100%"
    },
    {
      id: 34,
      name: "Elite Longboat",
      description: "Upgraded Longboat",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Wood: 80,
        Gold: 40
      },
      build_time: 25,
      reload_time: 3,
      movement_rate: 1.54,
      line_of_sight: 9,
      hit_points: 160,
      range: 7,
      attack: 8,
      armor: "0/8",
      attack_bonus: [
        "+8 buildings",
        "+11 ships",
        "+4 rams"
      ],
      accuracy: "100%"
    },
    {
      id: 35,
      name: "Fishing Ship",
      description: "Ship to harvest fish (resource)",
      expansion: "Age of Kings",
      age: "Dark",
      cost: {
        Wood: 75
      },
      build_time: 40,
      movement_rate: 1.26,
      line_of_sight: 5,
      hit_points: 60,
      armor: "0/6",
      search_radius: 12
    },
    {
      id: 36,
      name: "Trade Cog",
      description: "Movement rate 2.00 with caravan",
      expansion: "Age of Kings",
      age: "Feudal",
      cost: {
        Wood: 100,
        Gold: 50
      },
      build_time: 36,
      movement_rate: 1.32,
      line_of_sight: 6,
      hit_points: 80,
      armor: "0/6"
    },
    {
      id: 37,
      name: "Transport Ship",
      description: "Ship to carry units. Garrison inside 5 (10 with careening and 20 with dry dock)",
      expansion: "Age of Kings",
      age: "Feudal",
      cost: {
        Wood: 125
      },
      build_time: 45,
      movement_rate: 1.45,
      line_of_sight: 5,
      hit_points: 100,
      armor: "4/8"
    },
    {
      id: 38,
      name: "Turtle Ship",
      description: "Korean unique unit. Slow and ironclad battleship used to destroy other ships at close range",
      expansion: "The Conquerors",
      age: "Castle",
      cost: {
        Wood: 200,
        Gold: 200
      },
      build_time: 50,
      reload_time: 6,
      movement_rate: 0.9,
      line_of_sight: 8,
      hit_points: 200,
      range: 6,
      attack: 50,
      armor: "6/5",
      armor_bonus: [
        "+8 ships"
      ],
      blast_radius: 0.5
    },
    {
      id: 39,
      name: "Elite Turtle Ship",
      description: "Upgraded Turtle Ship",
      expansion: "The Conquerors",
      age: "Imperial",
      cost: {
        Wood: 200,
        Gold: 200
      },
      build_time: 50,
      reload_time: 6,
      movement_rate: 0.9,
      line_of_sight: 8,
      hit_points: 300,
      range: 6,
      attack: 50,
      armor: "8/6",
      armor_bonus: [
        "+11 ships",
        "+1 turtle ship armor"
      ],
      blast_radius: 0.5
    },
    {
      id: 40,
      name: "Wild Boar",
      description: "Wild boar",
      expansion: "Age of Kings",
      age: "Dark",
      cost: null,
      reload_time: 2,
      movement_rate: 0.96,
      line_of_sight: 4,
      hit_points: 75,
      attack: 7,
      armor: "0/0"
    },
    {
      id: 41,
      name: "Deer",
      description: "Wild deers running around",
      expansion: "Age of Kings",
      age: "Dark",
      cost: null,
      movement_rate: 0.737,
      line_of_sight: 2,
      hit_points: 5,
      armor: "0/0"
    },
    {
      id: 42,
      name: "Horse",
      description: "Can be used as scout",
      expansion: "Age of Kings",
      age: "Dark",
      cost: null,
      movement_rate: 1.2,
      line_of_sight: 2,
      hit_points: 50,
      armor: "0/0"
    },
    {
      id: 43,
      name: "Sheep",
      description: "Can be picked up by player and used to scout",
      expansion: "Age of Kings",
      age: "Dark",
      cost: null,
      movement_rate: 0.7,
      line_of_sight: 3,
      hit_points: 7,
      armor: "0/0"
    },
    {
      id: 44,
      name: "Turkey",
      description: "Alternative to sheep",
      expansion: "The Conquerors",
      age: "Dark",
      cost: null,
      movement_rate: 0.7,
      line_of_sight: 3,
      hit_points: 7,
      armor: "0/0"
    },
    {
      id: 45,
      name: "Wolf",
      description: "Wild wolf. Gives no food just kills people. Line of sight also depends on difficulty (4-12 LOS)",
      expansion: "Age of Kings",
      age: "Dark",
      cost: null,
      reload_time: 2,
      movement_rate: 1.05,
      line_of_sight: 12,
      hit_points: 25,
      attack: 3,
      armor: "0/0"
    },
    {
      id: 46,
      name: "Jaguar",
      description: "Wild jaguar. Same as wolf on yucatan and other americas maps",
      expansion: "Age of Kings",
      age: "Dark",
      cost: null,
      reload_time: 2,
      movement_rate: 1.05,
      line_of_sight: 12,
      hit_points: 25,
      attack: 3,
      armor: "0/0"
    },
    {
      id: 47,
      name: "Trade Cart",
      description: "Used to trade with other players by land. Carries goods from your Market to another player's Market and brings back gold. The farther the Market the higher your profit",
      expansion: "Age of Kings",
      age: "Feudal",
      cost: {
        Wood: 100,
        Gold: 50
      },
      build_time: 50,
      movement_rate: 1,
      line_of_sight: 7,
      hit_points: 70,
      armor: "0/0"
    },
    {
      id: 48,
      name: "Missionary",
      description: "Spanish unique unit. Mounted monk",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Gold: 100
      },
      build_time: 51,
      movement_rate: 1.1,
      line_of_sight: 9,
      hit_points: 30,
      range: "7 (4 heal range)",
      armor: "0/0"
    },
    {
      id: 49,
      name: "Monk",
      description: "Slow and weak. Converts enemy units and ships to your civilization (player color). Heals wounded villagers and military units (except siege weapons)",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Gold: 100
      },
      build_time: 51,
      reload_time: 5.5,
      movement_rate: 0.7,
      line_of_sight: 11,
      hit_points: 30,
      range: "9 (4 heal range)",
      armor: "0/0"
    },
    {
      id: 50,
      name: "Bombard Cannon",
      description: "Powerful mobile anti-building siege weapon",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Wood: 225,
        Gold: 225
      },
      build_time: 56,
      reload_time: 6.5,
      attack_delay: 0.21,
      movement_rate: 0.7,
      line_of_sight: 14,
      hit_points: 80,
      range: "5-12",
      attack: 40,
      armor: "2/5",
      attack_bonus: [
        "+200 buildings",
        "+40 siege/camels",
        "+20 siege",
        "+40 stone defense"
      ],
      accuracy: "92%",
      blast_radius: 0.5
    },
    {
      id: 51,
      name: "Mangonel",
      description: "Wheeled siege weapon used to attack a small mass of units. Area of effect attack. Can attack ground. Weak vs. close nonranged units",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Wood: 160,
        Gold: 135
      },
      build_time: 46,
      reload_time: 6,
      movement_rate: 0.6,
      line_of_sight: 9,
      hit_points: 50,
      range: "3-7",
      attack: 40,
      armor: "0/6",
      attack_bonus: [
        "+35 buildings",
        "+12 siege"
      ],
      blast_radius: 1
    },
    {
      id: 52,
      name: "Onager",
      description: "Upgraded Mangonel",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Wood: 160,
        Gold: 135
      },
      build_time: 46,
      reload_time: 6,
      movement_rate: 0.6,
      line_of_sight: 10,
      hit_points: 60,
      range: "3-8",
      attack: 50,
      armor: "0/7",
      attack_bonus: [
        "+45 buildings",
        "+12 siege"
      ],
      blast_radius: 1.25
    },
    {
      id: 53,
      name: "Siege Onager",
      description: "Upgraded Onager",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Wood: 160,
        Gold: 135
      },
      build_time: 46,
      reload_time: 6,
      movement_rate: 0.6,
      line_of_sight: 10,
      hit_points: 70,
      range: "3-8",
      attack: 75,
      armor: "0/8",
      attack_bonus: [
        "+60 buildings",
        "+12 siege"
      ],
      blast_radius: 1.5
    },
    {
      id: 54,
      name: "Battering Ram",
      description: "Slow and lumbering siege weapon used to reduce enemy towns to ruins. Can garrison 4 units (affects movement rate +0.05 per unit)",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Wood: 160,
        Gold: 75
      },
      build_time: 36,
      reload_time: 5,
      movement_rate: 0.5,
      line_of_sight: 3,
      hit_points: 175,
      attack: 2,
      armor: "0/180",
      attack_bonus: [
        "+125 (+165 full) buildings",
        "+40 siege",
        "+150 (+190 full) with siege engineers buildings"
      ],
      armor_bonus: [
        "-3 melee"
      ]
    },
    {
      id: 55,
      name: "Capped Ram",
      description: "Upgraded Battering Ram. Can garrison 4 units (affects movement rate +0.05 per unit). Max speed at 0.7",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Wood: 160,
        Gold: 75
      },
      build_time: 36,
      reload_time: 5,
      movement_rate: 0.5,
      line_of_sight: 3,
      hit_points: 200,
      attack: 3,
      armor: "0/190",
      attack_bonus: [
        "+150 (+190 full) buildings",
        "+50 siege",
        "+180 (+220 full) with siege engineers buildings"
      ],
      armor_bonus: [
        "-3 melee",
        "+1 ram armor"
      ],
      blast_radius: 1.5
    },
    {
      id: 56,
      name: "Siege Ram",
      description: "Upgraded Capped Ram. Can garrison 6 units (affects movement rate +0.05 per unit)",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Wood: 160,
        Gold: 75
      },
      build_time: 36,
      reload_time: 5,
      movement_rate: 0.6,
      line_of_sight: 3,
      hit_points: 270,
      attack: 4,
      armor: "0/195",
      attack_bonus: [
        "+200 (+260 full) buildings",
        "+65 siege",
        "+240 (+300 full) with siege engineers buildings"
      ],
      armor_bonus: [
        "-3 melee",
        "+2 ram armor"
      ],
      blast_radius: 2
    },
    {
      id: 57,
      name: "Scorpion",
      description: "Damage to all units in the path",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Wood: 75,
        Gold: 75
      },
      build_time: 30,
      reload_time: 3.6,
      attack_delay: 0.21,
      movement_rate: 0.65,
      line_of_sight: 9,
      hit_points: 40,
      range: "2-7",
      attack: 12,
      armor: "0/6",
      attack_bonus: [
        "+2 buildings",
        "+6 war elephants",
        "+0 melee",
        "+1 rams"
      ],
      accuracy: "100%"
    },
    {
      id: 58,
      name: "Heavy Scorpion",
      description: "Upgraded Scorpion",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Wood: 75,
        Gold: 75
      },
      build_time: 30,
      reload_time: 3.6,
      attack_delay: 0.21,
      movement_rate: 0.65,
      line_of_sight: 9,
      hit_points: 50,
      range: "2-7",
      attack: 16,
      armor: "0/7",
      attack_bonus: [
        "+4 buildings",
        "+8 war elephants",
        "+0 melee",
        "+2 rams"
      ],
      accuracy: "100%"
    },
    {
      id: 59,
      name: "Camel",
      description: "Excels at killing other mounted units. (not classified as cavalry)",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Food: 55,
        Gold: 60
      },
      build_time: 22,
      reload_time: 2,
      movement_rate: 1.45,
      line_of_sight: 4,
      hit_points: 100,
      attack: 5,
      armor: "0/0",
      attack_bonus: [
        "+10 against cavalry",
        "+5 ships/camels"
      ]
    },
    {
      id: 60,
      name: "Heavy Camel",
      description: "Upgraded Camel. Attack bonus vs. cavalry. (not classified as cavalry)",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Food: 55,
        Gold: 60
      },
      build_time: 22,
      reload_time: 2,
      movement_rate: 1.45,
      line_of_sight: 5,
      hit_points: 120,
      attack: 7,
      armor: "0/0",
      attack_bonus: [
        "+18 against cavalry",
        "+9 ships/camels"
      ],
      search_radius: 4
    },
    {
      id: 61,
      name: "Knight",
      description: "Fast and heavy cavalry",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Food: 60,
        Gold: 75
      },
      build_time: 30,
      reload_time: 1.8,
      movement_rate: 1.35,
      line_of_sight: 4,
      hit_points: 100,
      attack: 10,
      armor: "2/2"
    },
    {
      id: 62,
      name: "Cavalier",
      description: "Upgraded Knight",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Food: 60,
        Gold: 75
      },
      build_time: 30,
      reload_time: 1.8,
      movement_rate: 1.35,
      line_of_sight: 4,
      hit_points: 120,
      attack: 12,
      armor: "2/2"
    },
    {
      id: 63,
      name: "Paladin",
      description: "Upgraded Cavalier",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Food: 60,
        Gold: 75
      },
      build_time: 30,
      reload_time: 1.9,
      movement_rate: 1.35,
      line_of_sight: 5,
      hit_points: 160,
      attack: 14,
      armor: "2/3"
    },
    {
      id: 64,
      name: "Scout Cavalry",
      description: "Fast with extensive line of sight. Resistant to conversion and +2 Line of sight per age",
      expansion: "Age of Kings",
      age: "Dark",
      cost: null,
      reload_time: 2,
      movement_rate: 1.2,
      line_of_sight: 4,
      hit_points: 45,
      attack: 3,
      armor: "0/2",
      attack_bonus: [
        "+6 monks"
      ]
    },
    {
      id: 65,
      name: "Scout Cavalry",
      description: "Fast with extensive line of sight. Resistant to conversion +2 Line of sight per age",
      expansion: "Age of Kings",
      age: "Feudal",
      cost: {
        Food: 80
      },
      build_time: 30,
      reload_time: 2.04,
      movement_rate: 1.55,
      line_of_sight: 6,
      hit_points: 45,
      attack: 5,
      armor: "0/2",
      attack_bonus: [
        "+6 monks"
      ]
    },
    {
      id: 66,
      name: "Light Cavalry",
      description: "Upgraded scout cavalry. +2 Line of sight per age",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Food: 80
      },
      build_time: 30,
      reload_time: 2,
      movement_rate: 1.5,
      line_of_sight: 8,
      hit_points: 60,
      attack: 7,
      armor: "0/2",
      attack_bonus: [
        "+10 monks"
      ]
    },
    {
      id: 67,
      name: "Hussar",
      description: "Upgraded Light Cavalry. +2 Line of sight per age",
      expansion: "The Conquerors",
      age: "Imperial",
      cost: {
        Food: 80
      },
      build_time: 30,
      reload_time: 1.9,
      movement_rate: 1.5,
      line_of_sight: 10,
      hit_points: 75,
      attack: 7,
      armor: "0/2",
      attack_bonus: [
        "+12 monks"
      ]
    },
    {
      id: 68,
      name: "Villager",
      description: "Gathers resources. Builds and repairs buildings. Also repairs ships and siege weapons",
      expansion: "Age of Kings",
      age: "Dark",
      cost: {
        Food: 50
      },
      build_time: 25,
      reload_time: 2,
      movement_rate: 0.8,
      line_of_sight: 4,
      hit_points: 25,
      attack: 3,
      armor: "0/0",
      attack_bonus: [
        "+3 buildings",
        "+6 stone defense"
      ]
    },
    {
      id: 69,
      name: "Berserk",
      description: "Viking unique unit. Infantry that slowly heals itself",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Food: 65,
        Gold: 25
      },
      build_time: 16,
      reload_time: 2,
      movement_rate: 1.05,
      line_of_sight: 3,
      hit_points: 55,
      attack: 9,
      armor: "0/1",
      attack_bonus: [
        "+2 eagles",
        "+2 buildings"
      ]
    },
    {
      id: 70,
      name: "Elite Berserk",
      description: "Upgraded Berserk",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Food: 65,
        Gold: 25
      },
      build_time: 16,
      reload_time: 2,
      movement_rate: 1.05,
      line_of_sight: 5,
      hit_points: 72,
      attack: 14,
      armor: "2/1",
      attack_bonus: [
        "+3 eagles",
        "+3 buildings"
      ]
    },
    {
      id: 71,
      name: "Cataphract",
      description: "Byzantine unique unit. Heavily armored cavalry",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Food: 70,
        Gold: 75
      },
      build_time: 20,
      reload_time: 1.8,
      movement_rate: 1.35,
      line_of_sight: 4,
      hit_points: 110,
      attack: 9,
      armor: "2/1",
      attack_bonus: [
        "+9 infantry"
      ],
      armor_bonus: [
        "+12 cavalry"
      ]
    },
    {
      id: 72,
      name: "Elite Cataphract",
      description: "Upgraded Cataphract",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Food: 70,
        Gold: 75
      },
      build_time: 20,
      reload_time: 1.7,
      movement_rate: 1.35,
      line_of_sight: 5,
      hit_points: 150,
      attack: 12,
      armor: "2/1",
      attack_bonus: [
        "+12 infantry"
      ],
      armor_bonus: [
        "+16 cavalry"
      ]
    },
    {
      id: 73,
      name: "Chu Ko Nu",
      description: "Chinese unique unit. Archer with mediocre range. Shoots a volley of 2 extra arrows with 3 attack. Because of the multiple arrows the delay between starts of attacks is more (roughly 3.6)",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Wood: 40,
        Gold: 35
      },
      build_time: 19,
      reload_time: 3.6,
      attack_delay: 0.21,
      movement_rate: 0.96,
      line_of_sight: 6,
      hit_points: 45,
      range: 4,
      attack: 8,
      armor: "0/0",
      attack_bonus: [
        "+2 spearmen"
      ],
      accuracy: "85%"
    },
    {
      id: 74,
      name: "Elite Chu Ko Nu",
      description: "Upgraded Chu Ko NU",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Wood: 40,
        Gold: 35
      },
      build_time: 13,
      reload_time: 3.75,
      attack_delay: 0.21,
      movement_rate: 0.96,
      line_of_sight: 6,
      hit_points: 50,
      range: 6,
      attack: 8,
      armor: "0/0",
      attack_bonus: [
        "+2 spearmen"
      ],
      accuracy: "85%"
    },
    {
      id: 75,
      name: "Conquistador",
      description: "Spanish unique unit. Mounted Hand Cannoneer. Powerful close attack but inaccurate at range. (Only archer armor upgrades apply from blacksmith not range or attack)",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Food: 60,
        Gold: 70
      },
      build_time: 24,
      reload_time: 2.9,
      attack_delay: 0.4,
      movement_rate: 1.3,
      line_of_sight: 8,
      hit_points: 55,
      range: 6,
      attack: 16,
      armor: "2/2",
      attack_bonus: [
        "+4 rams"
      ],
      accuracy: "65%"
    },
    {
      id: 76,
      name: "Elite Conquistador",
      description: "Upgraded Conquistador",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Food: 60,
        Gold: 70
      },
      build_time: 24,
      reload_time: 2.9,
      attack_delay: 0.4,
      movement_rate: 1.3,
      line_of_sight: 8,
      hit_points: 70,
      range: 6,
      attack: 18,
      armor: "2/2",
      attack_bonus: [
        "+6 ram",
        "+2 buildings"
      ],
      accuracy: "70%"
    },
    {
      id: 77,
      name: "Huskarl",
      description: "Gothic unique unit. Infantry with substantial pierce armor; virtually immune to archer fire. Attack bonus vs. buildings and archers",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Food: 52,
        Gold: 26
      },
      build_time: 16,
      reload_time: 2,
      movement_rate: 1.05,
      line_of_sight: 3,
      hit_points: 60,
      attack: 10,
      armor: "0/6",
      attack_bonus: [
        "+2 eagles",
        "+2 buildings",
        "+6 archers/hand cannoneers"
      ]
    },
    {
      id: 78,
      name: "Elite Huskarl",
      description: "Upgraded Huskarl",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Food: 52,
        Gold: 26
      },
      build_time: 16,
      reload_time: 2,
      movement_rate: 1.05,
      line_of_sight: 5,
      hit_points: 70,
      attack: 12,
      armor: "0/8",
      attack_bonus: [
        "+3 eagles",
        "+3 buildings",
        "+10 archers/hand cannoneers"
      ]
    },
    {
      id: 79,
      name: "Jaguar Warrior",
      description: "Aztec unique unit. Attack bonus vs. other infantry",
      expansion: "The Conquerors",
      age: "Castle",
      cost: {
        Food: 60,
        Gold: 30
      },
      build_time: 17,
      reload_time: 2,
      movement_rate: 1,
      line_of_sight: 3,
      hit_points: 50,
      attack: 10,
      armor: "1/0",
      attack_bonus: [
        "+12 eagles",
        "+2 buildings",
        "+10 infantry"
      ]
    },
    {
      id: 80,
      name: "Elite Jaguar Warrior",
      description: "Upgraded Jaguar Warrior",
      expansion: "The Conquerors",
      age: "Castle",
      cost: {
        Food: 60,
        Gold: 30
      },
      build_time: 17,
      reload_time: 2,
      movement_rate: 1,
      line_of_sight: 5,
      hit_points: 75,
      attack: 12,
      armor: "2/0",
      attack_bonus: [
        "+12 eagles",
        "+2 buildings",
        "+10 infantry"
      ]
    },
    {
      id: 81,
      name: "Janissary",
      description: "Turkish unique unit. Hand Cannoneer with longer range and no minimum range",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Food: 60,
        Gold: 55
      },
      build_time: 17,
      reload_time: 3.45,
      attack_delay: 0.28,
      movement_rate: 0.96,
      line_of_sight: 10,
      hit_points: 44,
      range: 8,
      attack: 17,
      armor: "1/0",
      attack_bonus: [
        "+2 rams"
      ],
      accuracy: "50%"
    },
    {
      id: 82,
      name: "Elite Janissary",
      description: "Upgraded Janissary",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Food: 60,
        Gold: 55
      },
      build_time: 17,
      reload_time: 3.45,
      movement_rate: 0.96,
      line_of_sight: 10,
      hit_points: 50,
      range: 8,
      attack: 22,
      armor: "2/0",
      attack_bonus: [
        "+3 rams"
      ],
      accuracy: "50%"
    },
    {
      id: 83,
      name: "Longbowman",
      description: "British unique unit. Powerful archer with long range",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Wood: 35,
        Gold: 40
      },
      build_time: 19,
      reload_time: 2,
      attack_delay: 0.35,
      movement_rate: 0.96,
      line_of_sight: 8,
      hit_points: 35,
      range: 6,
      attack: 6,
      armor: "0/0",
      attack_bonus: [
        "+2 spearmen"
      ],
      accuracy: "70%"
    },
    {
      id: 84,
      name: "Elite Longbowman",
      description: "Upgraded Longbowman",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Wood: 35,
        Gold: 40
      },
      build_time: 19,
      reload_time: 2,
      attack_delay: 0.35,
      movement_rate: 0.96,
      line_of_sight: 10,
      hit_points: 40,
      range: 8,
      attack: 7,
      armor: "0/1",
      attack_bonus: [
        "+2 spearmen"
      ],
      accuracy: "70%"
    },
    {
      id: 85,
      name: "Mameluke",
      description: "Saracen unique unit. Camel with hand-to-hand attack at distance. Excels vs. other mounted units",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Food: 55,
        Gold: 85
      },
      build_time: 23,
      reload_time: 2,
      attack_delay: 0.6,
      movement_rate: 1.4,
      line_of_sight: 5,
      hit_points: 65,
      range: 3,
      attack: 7,
      armor: "0/0",
      attack_bonus: [
        "+9 cavalry"
      ],
      armor_bonus: [
        "+11 cavalry"
      ]
    },
    {
      id: 86,
      name: "Elite Mameluke",
      description: "Upgraded Mameluke",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Food: 55,
        Gold: 85
      },
      build_time: 23,
      reload_time: 2,
      movement_rate: 1.4,
      line_of_sight: 5,
      hit_points: 80,
      range: 3,
      attack: 10,
      armor: "1/0",
      attack_bonus: [
        "+12 cavalry"
      ],
      armor_bonus: [
        "+11 cavalry"
      ]
    },
    {
      id: 87,
      name: "Mangudai",
      description: "Mongol unique unit. Cavalry archer with attack bonus vs. siege weapons",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Wood: 55,
        Gold: 65
      },
      build_time: 26,
      reload_time: 1.68,
      attack_delay: 1,
      movement_rate: 1.45,
      line_of_sight: 6,
      hit_points: 60,
      range: 4,
      attack: 6,
      armor: "0/0",
      attack_bonus: [
        "+1 spearmen",
        "+3 siege"
      ],
      search_radius: 5,
      accuracy: "95%"
    },
    {
      id: 88,
      name: "Elite Mangudai",
      description: "Upgraded Mangudai",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Wood: 55,
        Gold: 65
      },
      build_time: 26,
      reload_time: 1.68,
      movement_rate: 1.45,
      line_of_sight: 6,
      hit_points: 60,
      range: 4,
      attack: 8,
      armor: "0/1",
      attack_bonus: [
        "+1 spearmen",
        "+5 siege"
      ],
      search_radius: 6,
      accuracy: "95%"
    },
    {
      id: 89,
      name: "Plumed Archer",
      description: "Mayan unique unit. Strong fast and well-armored archer with less attack than other archers",
      expansion: "The Conquerors",
      age: "Castle",
      cost: {
        Wood: 37,
        Gold: 37
      },
      build_time: 16,
      reload_time: 1.9,
      attack_delay: 0.5,
      movement_rate: 1.2,
      line_of_sight: 6,
      hit_points: 50,
      range: 4,
      attack: 5,
      armor: "0/1",
      attack_bonus: [
        "+1 infantry",
        "+2 spearmen"
      ],
      accuracy: "80%"
    },
    {
      id: 90,
      name: "Elite Plumed Archer",
      description: "Upgraded Plumed Archer",
      expansion: "The Conquerors",
      age: "Castle",
      cost: {
        Wood: 32,
        Gold: 32
      },
      build_time: 16,
      reload_time: 1.9,
      attack_delay: 0.5,
      movement_rate: 1.2,
      line_of_sight: 7,
      hit_points: 65,
      range: 5,
      attack: 5,
      armor: "0/2",
      attack_bonus: [
        "+2 infantry",
        "+2 spearmen"
      ],
      accuracy: "80%"
    },
    {
      id: 91,
      name: "Samurai",
      description: "Japanese unique unit. Infantry with fast attack. Attack bonus vs. other unique units and buildings",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Food: 60,
        Gold: 30
      },
      build_time: 9,
      reload_time: 1.425,
      movement_rate: 1,
      line_of_sight: 4,
      hit_points: 60,
      attack: 8,
      armor: "1/1",
      attack_bonus: [
        "+2 eagles",
        "+2 buildings",
        "+10 unique units"
      ]
    },
    {
      id: 92,
      name: "Elite Samurai",
      description: "Upgraded Samurai",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Food: 60,
        Gold: 30
      },
      build_time: 9,
      reload_time: 1.425,
      movement_rate: 1,
      line_of_sight: 5,
      hit_points: 80,
      attack: 12,
      armor: "1/1",
      attack_bonus: [
        "+3 eagles",
        "+3 buildings",
        "+12 unique units"
      ]
    },
    {
      id: 93,
      name: "Tarkan",
      description: "Hun unique unit. Cavalry with attack bonus vs. buildings. (Attack bonuses stack - for example +16 against a palisade wall (8 buildings + 8 walls))",
      expansion: "The Conquerors",
      age: "Castle",
      cost: {
        Food: 60,
        Gold: 60
      },
      build_time: 14,
      reload_time: 2.1,
      movement_rate: 1.35,
      line_of_sight: 5,
      hit_points: 90,
      attack: 7,
      armor: "1/2",
      attack_bonus: [
        "+10 castle",
        "+8 buildings",
        "+12 stone defense",
        "+8 walls and gates"
      ]
    },
    {
      id: 94,
      name: "Elite Tarkan",
      description: "Upgraded Tarkan",
      expansion: "The Conquerors",
      age: "Castle",
      cost: {
        Food: 60,
        Gold: 60
      },
      build_time: 14,
      reload_time: 2.1,
      movement_rate: 1.35,
      line_of_sight: 7,
      hit_points: 150,
      attack: 11,
      armor: "1/3",
      attack_bonus: [
        "+10 castle",
        "+10 buildings",
        "+12 stone defense",
        "+10 walls and gates"
      ]
    },
    {
      id: 95,
      name: "Teutonic Knight",
      description: "Teutonic unique unit. Infantry with effective armor and slow but powerful attack",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Food: 85,
        Gold: 40
      },
      build_time: 12,
      reload_time: 2,
      movement_rate: 0.65,
      line_of_sight: 3,
      hit_points: 70,
      attack: 12,
      armor: "5/2",
      attack_bonus: [
        "+4 eagles",
        "+4 buildings"
      ]
    },
    {
      id: 96,
      name: "Elite Teutonic Knight",
      description: "Upgraded Teutonic Knight",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Food: 85,
        Gold: 40
      },
      build_time: 12,
      reload_time: 2,
      movement_rate: 0.65,
      line_of_sight: 5,
      hit_points: 100,
      attack: 17,
      armor: "10/2",
      attack_bonus: [
        "+4 eagles",
        "+4 buildings"
      ]
    },
    {
      id: 97,
      name: "Throwing Axeman",
      description: "Frankish unique unit. Infantry with ranged attack",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Food: 55,
        Gold: 25
      },
      build_time: 17,
      reload_time: 2,
      attack_delay: 1.2,
      movement_rate: 0.9,
      line_of_sight: 5,
      hit_points: 50,
      range: 3,
      attack: 7,
      armor: "0/0",
      attack_bonus: [
        "+1 eagles",
        "+1 buildings"
      ]
    },
    {
      id: 98,
      name: "Elite Throwing Axeman",
      description: "Upgraded Throwing Axeman",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Food: 55,
        Gold: 25
      },
      build_time: 17,
      reload_time: 2,
      attack_delay: 0.8,
      movement_rate: 0.9,
      line_of_sight: 6,
      hit_points: 60,
      range: 4,
      attack: 8,
      armor: "1/0",
      attack_bonus: [
        "+2 eagles",
        "+2 buildings"
      ]
    },
    {
      id: 99,
      name: "War Elephant",
      description: "Persian unique unit. Slow powerful strong and well-armored cavalry",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Food: 200,
        Gold: 75
      },
      build_time: 31,
      reload_time: 2,
      movement_rate: 0.6,
      line_of_sight: 4,
      hit_points: 450,
      attack: 15,
      armor: "1/2",
      attack_bonus: [
        "+7 buildings",
        "+7 stone defense"
      ]
    },
    {
      id: 100,
      name: "Elite War Elephant",
      description: "Upgraded War Elephant",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Food: 200,
        Gold: 75
      },
      build_time: 31,
      reload_time: 2,
      movement_rate: 0.6,
      line_of_sight: 5,
      hit_points: 600,
      attack: 20,
      armor: "1/3",
      attack_bonus: [
        "+10 buildings",
        "+10 stone defense"
      ]
    },
    {
      id: 101,
      name: "War Wagon",
      description: "Korean unique unit. Heavily armored horse-drawn archery unit",
      expansion: "The Conquerors",
      age: "Castle",
      cost: {
        Wood: 120,
        Gold: 60
      },
      build_time: 25,
      reload_time: 2.5,
      attack_delay: 1,
      movement_rate: 1.2,
      line_of_sight: 6,
      hit_points: 150,
      range: 4,
      attack: 9,
      armor: "0/3",
      attack_bonus: [
        "+5 buildings"
      ],
      search_radius: 6,
      accuracy: "100%"
    },
    {
      id: 102,
      name: "Elite War Wagon",
      description: "Upgraded War Wagon",
      expansion: "The Conquerors",
      age: "Imperial",
      cost: {
        Wood: 120,
        Gold: 60
      },
      build_time: 25,
      reload_time: 2.5,
      attack_delay: 1,
      movement_rate: 1.2,
      line_of_sight: 8,
      hit_points: 200,
      range: 5,
      attack: 9,
      armor: "0/4",
      attack_bonus: [
        "+5 buildings"
      ],
      search_radius: 7,
      accuracy: "100%"
    },
    {
      id: 103,
      name: "Woad Raider",
      description: "Celtic unique unit. Exceptionally quick infantry. Attack bonus vs. buildings",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Food: 65,
        Gold: 25
      },
      build_time: 10,
      reload_time: 2,
      movement_rate: 1.38,
      line_of_sight: 3,
      hit_points: 65,
      attack: 8,
      armor: "0/1",
      attack_bonus: [
        "+2 eagles",
        "+2 buildings"
      ]
    },
    {
      id: 104,
      name: "Elite Woad Raider",
      description: "Upgraded Woad Raider",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Food: 65,
        Gold: 25
      },
      build_time: 10,
      reload_time: 2,
      movement_rate: 1.38,
      line_of_sight: 5,
      hit_points: 80,
      attack: 13,
      armor: "0/1",
      attack_bonus: [
        "+3 eagles",
        "+3 buildings"
      ]
    }
  ]
}
