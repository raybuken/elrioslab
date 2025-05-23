//Rigomor

const stages = [
  {
    stage: 1,
    glaciem: 2000,
    amethyst: 3,
    crystal: 100,
    ed: 300000,
    attempt: 10,
    percentage: 10,
    effect: "-",
  },
  {
    stage: 2,
    glaciem: 2000,
    amethyst: 3,
    crystal: 100,
    ed: 300000,
    attempt: 15,
    percentage: 6.667,
    effect: "-",
  },
  {
    stage: 3,
    glaciem: 2000,
    amethyst: 3,
    crystal: 100,
    ed: 300000,
    attempt: 20,
    percentage: 5,
    effect: "Critical Damage +3%",
  },
  {
    stage: 4,
    glaciem: 2000,
    amethyst: 3,
    crystal: 100,
    ed: 300000,
    attempt: 10,
    percentage: 10,
    effect: "-",
  },
  {
    stage: 5,
    glaciem: 2000,
    amethyst: 3,
    crystal: 100,
    ed: 300000,
    attempt: 15,
    percentage: 6.667,
    effect: "-",
  },
  {
    stage: 6,
    glaciem: 2000,
    amethyst: 3,
    crystal: 100,
    ed: 300000,
    attempt: 31,
    percentage: 3.333,
    effect: "Specific Skill Damage +5%",
  },
  {
    stage: 7,
    glaciem: 2000,
    amethyst: 3,
    crystal: 100,
    ed: 300000,
    attempt: 10,
    percentage: 10,
    effect: "-",
  },
  {
    stage: 8,
    glaciem: 2000,
    amethyst: 3,
    crystal: 100,
    ed: 300000,
    attempt: 20,
    percentage: 5,
    effect: "-",
  },
  {
    stage: 9,
    glaciem: 2000,
    amethyst: 3,
    crystal: 100,
    ed: 300000,
    attempt: 40,
    percentage: 2.5,
    effect: "Critical Damage +3%",
  },
  {
    stage: 10,
    glaciem: 4000,
    amethyst: 6,
    crystal: 200,
    ed: 900000,
    attempt: 10,
    percentage: 10,
    effect: "-",
  },
  {
    stage: 11,
    glaciem: 4000,
    amethyst: 6,
    crystal: 200,
    ed: 900000,
    attempt: 31,
    percentage: 3.333,
    effect: "-",
  },
  {
    stage: 12,
    glaciem: 4000,
    amethyst: 6,
    crystal: 200,
    ed: 900000,
    attempt: 60,
    percentage: 1.667,
    effect: "Specific Skill Damage +5%",
  },
  {
    stage: 13,
    glaciem: 4000,
    amethyst: 6,
    crystal: 200,
    ed: 900000,
    attempt: 20,
    percentage: 5,
    effect: "-",
  },
  {
    stage: 14,
    glaciem: 4000,
    amethyst: 6,
    crystal: 200,
    ed: 900000,
    attempt: 40,
    percentage: 2.5,
    effect: "-",
  },
  {
    stage: 15,
    glaciem: 4000,
    amethyst: 6,
    crystal: 200,
    ed: 900000,
    attempt: 80,
    percentage: 1.25,
    effect: "Adaptation +1%",
  },
  {
    stage: 16,
    glaciem: 6000,
    amethyst: 9,
    crystal: 300,
    ed: 1800000,
    attempt: 40,
    percentage: 2.5,
    effect: "-",
  },
  {
    stage: 17,
    glaciem: 6000,
    amethyst: 9,
    crystal: 300,
    ed: 1800000,
    attempt: 121,
    percentage: 0.833,
    effect: "-",
  },
  {
    stage: 18,
    glaciem: 6000,
    amethyst: 9,
    crystal: 300,
    ed: 1800000,
    attempt: 240,
    percentage: 0.417,
    effect: "Critical Damage +3%",
  },
  {
    stage: 19,
    glaciem: 6000,
    amethyst: 9,
    crystal: 300,
    ed: 1800000,
    attempt: 40,
    percentage: 2.5,
    effect: "-",
  },
  {
    stage: 20,
    glaciem: 6000,
    amethyst: 9,
    crystal: 300,
    ed: 1800000,
    attempt: 180,
    percentage: 0.556,
    effect: "-",
  },
  {
    stage: 21,
    glaciem: 6000,
    amethyst: 9,
    crystal: 300,
    ed: 1800000,
    attempt: 360,
    percentage: 0.278,
    effect: "+3% Physical/Magical Attack Power",
  },
];

const stagesKR = [
  {
    stage: 1,
    glaciem: 2000,
    amethyst: 3,
    crystal: 100,
    ed: 300000,
    attempt: 2,
    percentage: 50,
    effect: "-",
  },
  {
    stage: 2,
    glaciem: 2000,
    amethyst: 3,
    crystal: 100,
    ed: 300000,
    attempt: 2,
    percentage: 50,
    effect: "-",
  },
  {
    stage: 3,
    glaciem: 2000,
    amethyst: 3,
    crystal: 100,
    ed: 300000,
    attempt: 2,
    percentage: 50,
    effect: "Critical Damage +3%",
  },
  {
    stage: 4,
    glaciem: 2000,
    amethyst: 3,
    crystal: 100,
    ed: 300000,
    attempt: 2,
    percentage: 50,
    effect: "-",
  },
  {
    stage: 5,
    glaciem: 2000,
    amethyst: 3,
    crystal: 100,
    ed: 300000,
    attempt: 2,
    percentage: 50,
    effect: "-",
  },
  {
    stage: 6,
    glaciem: 2000,
    amethyst: 3,
    crystal: 100,
    ed: 300000,
    attempt: 2,
    percentage: 50,
    effect: "All Skill Damage +3%",
  },
  {
    stage: 7,
    glaciem: 2000,
    amethyst: 3,
    crystal: 100,
    ed: 300000,
    attempt: 2,
    percentage: 50,
    effect: "-",
  },
  {
    stage: 8,
    glaciem: 2000,
    amethyst: 3,
    crystal: 100,
    ed: 300000,
    attempt: 2,
    percentage: 50,
    effect: "-",
  },
  {
    stage: 9,
    glaciem: 2000,
    amethyst: 3,
    crystal: 100,
    ed: 300000,
    attempt: 2,
    percentage: 50,
    effect: "Critical Damage +3%",
  },
  {
    stage: 10,
    glaciem: 4000,
    amethyst: 6,
    crystal: 200,
    ed: 900000,
    attempt: 2,
    percentage: 50,
    effect: "-",
  },
  {
    stage: 11,
    glaciem: 4000,
    amethyst: 6,
    crystal: 200,
    ed: 900000,
    attempt: 2,
    percentage: 50,
    effect: "-",
  },
  {
    stage: 12,
    glaciem: 4000,
    amethyst: 6,
    crystal: 200,
    ed: 900000,
    attempt: 2,
    percentage: 50,
    effect: "All Skill Damage +4%",
  },
  {
    stage: 13,
    glaciem: 4000,
    amethyst: 6,
    crystal: 200,
    ed: 900000,
    attempt: 2,
    percentage: 50,
    effect: "-",
  },
  {
    stage: 14,
    glaciem: 4000,
    amethyst: 6,
    crystal: 200,
    ed: 900000,
    attempt: 2,
    percentage: 50,
    effect: "-",
  },
  {
    stage: 15,
    glaciem: 4000,
    amethyst: 6,
    crystal: 200,
    ed: 900000,
    attempt: 2,
    percentage: 50,
    effect: "Adaptation +1%",
  },
  {
    stage: 16,
    glaciem: 6000,
    amethyst: 9,
    crystal: 300,
    ed: 1800000,
    attempt: 5,
    percentage: 20,
    effect: "-",
  },
  {
    stage: 17,
    glaciem: 6000,
    amethyst: 9,
    crystal: 300,
    ed: 1800000,
    attempt: 7,
    percentage: 14.286,
    effect: "-",
  },
  {
    stage: 18,
    glaciem: 6000,
    amethyst: 9,
    crystal: 300,
    ed: 1800000,
    attempt: 10,
    percentage: 11.111,
    effect: "Critical Damage +3%",
  },
  {
    stage: 19,
    glaciem: 6000,
    amethyst: 9,
    crystal: 300,
    ed: 1800000,
    attempt: 11,
    percentage: 9.091,
    effect: "-",
  },
  {
    stage: 20,
    glaciem: 6000,
    amethyst: 9,
    crystal: 300,
    ed: 1800000,
    attempt: 14,
    percentage: 7.692,
    effect: "-",
  },
  {
    stage: 21,
    glaciem: 6000,
    amethyst: 9,
    crystal: 300,
    ed: 1800000,
    attempt: 25,
    percentage: 4,
    effect: "+3% Physical/Magical Attack Power",
  },
];

//Tenebrous
const stagesTenebrous = [
  {
    stage: 1,
    glaciem: 2000,
    ed: 300000,
    effect: "-",
    attempt: 5,
    percentage: 20,
    crystal: 100,
    amethyst: 15,
  },
  {
    stage: 2,
    glaciem: 2000,
    ed: 300000,
    effect: "-",
    attempt: 10,
    percentage: 10,
    crystal: 100,
    amethyst: 15,
  },
  {
    stage: 3,
    glaciem: 2000,
    ed: 300000,
    effect: "Critical Damage +3%",
    attempt: 15,
    percentage: 6.667,
    crystal: 100,
    amethyst: 15,
  },
  {
    stage: 4,
    glaciem: 2000,
    ed: 300000,
    effect: "-",
    attempt: 5,
    percentage: 20,
    crystal: 100,
    amethyst: 15,
  },
  {
    stage: 5,
    glaciem: 2000,
    ed: 300000,
    effect: "-",
    attempt: 10,
    percentage: 10,
    crystal: 100,
    amethyst: 15,
  },
  {
    stage: 6,
    glaciem: 2000,
    ed: 300000,
    effect: "Specific Skill Damage +5%",
    attempt: 15,
    percentage: 6.667,
    crystal: 100,
    amethyst: 15,
  },
  {
    stage: 7,
    glaciem: 2000,
    ed: 300000,
    effect: "-",
    attempt: 5,
    percentage: 20,
    crystal: 100,
    amethyst: 15,
  },
  {
    stage: 8,
    glaciem: 2000,
    ed: 300000,
    effect: "-",
    attempt: 15,
    percentage: 6.667,
    crystal: 100,
    amethyst: 15,
  },
  {
    stage: 9,
    glaciem: 2000,
    ed: 300000,
    effect: "Critical Damage +3%",
    attempt: 20,
    percentage: 5,
    crystal: 100,
    amethyst: 15,
  },
  {
    stage: 10,
    glaciem: 4000,
    ed: 900000,
    effect: "-",
    attempt: 10,
    percentage: 10,
    crystal: 200,
    amethyst: 30,
  },
  {
    stage: 11,
    glaciem: 4000,
    ed: 900000,
    effect: "-",
    attempt: 15,
    percentage: 6.667,
    crystal: 200,
    amethyst: 30,
  },
  {
    stage: 12,
    glaciem: 4000,
    ed: 900000,
    effect: "Specific Skill Damage +5%",
    attempt: 20,
    percentage: 5,
    crystal: 200,
    amethyst: 30,
  },
  {
    stage: 13,
    glaciem: 4000,
    ed: 900000,
    effect: "-",
    attempt: 20,
    percentage: 5,
    crystal: 200,
    amethyst: 30,
  },
  {
    stage: 14,
    glaciem: 4000,
    ed: 900000,
    effect: "-",
    attempt: 31,
    percentage: 3.333,
    crystal: 200,
    amethyst: 30,
  },
  {
    stage: 15,
    glaciem: 4000,
    ed: 900000,
    effect: "+2% Physical/Magical Attack Power",
    attempt: 40,
    percentage: 2.5,
    crystal: 200,
    amethyst: 30,
  },
  {
    stage: 16,
    glaciem: 6000,
    ed: 1800000,
    effect: "-",
    attempt: 40,
    percentage: 2.5,
    crystal: 300,
    amethyst: 45,
  },
  {
    stage: 17,
    glaciem: 6000,
    ed: 1800000,
    effect: "-",
    attempt: 80,
    percentage: 1.25,
    crystal: 300,
    amethyst: 45,
  },
  {
    stage: 18,
    glaciem: 6000,
    ed: 1800000,
    effect: "Specific Skill Damage +5%",
    attempt: 160,
    percentage: 0.625,
    crystal: 300,
    amethyst: 45,
  },
  {
    stage: 19,
    glaciem: 6000,
    ed: 1800000,
    effect: "-",
    attempt: 40,
    percentage: 2.5,
    crystal: 300,
    amethyst: 45,
  },
  {
    stage: 20,
    glaciem: 6000,
    ed: 1800000,
    effect: "-",
    attempt: 121,
    percentage: 0.833,
    crystal: 300,
    amethyst: 45,
  },
  {
    stage: 21,
    glaciem: 6000,
    ed: 1800000,
    effect: "+2% Adaptation",
    attempt: 241,
    percentage: 0.416,
    crystal: 300,
    amethyst: 45,
  },
];

const stagesTenebrousKR = [
  {
    stage: 1,
    glaciem: 2000,
    ed: 300000,
    effect: "-",
    attempt: 2,
    percentage: 50,
    crystal: 100,
    amethyst: 15,
  },
  {
    stage: 2,
    glaciem: 2000,
    ed: 300000,
    effect: "-",
    attempt: 4,
    percentage: 33.333,
    crystal: 100,
    amethyst: 15,
  },
  {
    stage: 3,
    glaciem: 2000,
    ed: 300000,
    effect: "Critical Damage +3%",
    attempt: 5,
    percentage: 20,
    crystal: 100,
    amethyst: 15,
  },
  {
    stage: 4,
    glaciem: 2000,
    ed: 300000,
    effect: "-",
    attempt: 2,
    percentage: 50,
    crystal: 100,
    amethyst: 15,
  },
  {
    stage: 5,
    glaciem: 2000,
    ed: 300000,
    effect: "-",
    attempt: 4,
    percentage: 33.333,
    crystal: 100,
    amethyst: 15,
  },
  {
    stage: 6,
    glaciem: 2000,
    ed: 300000,
    effect: "All Skill Damage +3%",
    attempt: 5,
    percentage: 20,
    crystal: 100,
    amethyst: 15,
  },
  {
    stage: 7,
    glaciem: 2000,
    ed: 300000,
    effect: "-",
    attempt: 2,
    percentage: 50,
    crystal: 100,
    amethyst: 15,
  },
  {
    stage: 8,
    glaciem: 2000,
    ed: 300000,
    effect: "-",
    attempt: 5,
    percentage: 20,
    crystal: 100,
    amethyst: 15,
  },
  {
    stage: 9,
    glaciem: 2000,
    ed: 300000,
    effect: "Critical Damage +3%",
    attempt: 7,
    percentage: 14.286,
    crystal: 100,
    amethyst: 15,
  },
  {
    stage: 10,
    glaciem: 4000,
    ed: 900000,
    effect: "-",
    attempt: 4,
    percentage: 33.333,
    crystal: 200,
    amethyst: 30,
  },
  {
    stage: 11,
    glaciem: 4000,
    ed: 900000,
    effect: "-",
    attempt: 5,
    percentage: 20,
    crystal: 200,
    amethyst: 30,
  },
  {
    stage: 12,
    glaciem: 4000,
    ed: 900000,
    effect: "All Skill Damage +3%",
    attempt: 7,
    percentage: 14.286,
    crystal: 200,
    amethyst: 30,
  },
  {
    stage: 13,
    glaciem: 4000,
    ed: 900000,
    effect: "-",
    attempt: 7,
    percentage: 14.286,
    crystal: 200,
    amethyst: 30,
  },
  {
    stage: 14,
    glaciem: 4000,
    ed: 900000,
    effect: "-",
    attempt: 10,
    percentage: 10,
    crystal: 200,
    amethyst: 30,
  },
  {
    stage: 15,
    glaciem: 4000,
    ed: 900000,
    effect: "+2% Physical/Magical Attack Power",
    attempt: 14,
    percentage: 7.692,
    crystal: 200,
    amethyst: 30,
  },
  {
    stage: 16,
    glaciem: 6000,
    ed: 1800000,
    effect: "-",
    attempt: 14,
    percentage: 7.692,
    crystal: 300,
    amethyst: 45,
  },
  {
    stage: 17,
    glaciem: 6000,
    ed: 1800000,
    effect: "-",
    attempt: 27,
    percentage: 3.704,
    crystal: 300,
    amethyst: 45,
  },
  {
    stage: 18,
    glaciem: 6000,
    ed: 1800000,
    effect: "All Skill Damage +4%",
    attempt: 53,
    percentage: 1.887,
    crystal: 300,
    amethyst: 45,
  },
  {
    stage: 19,
    glaciem: 6000,
    ed: 1800000,
    effect: "-",
    attempt: 14,
    percentage: 7.692,
    crystal: 300,
    amethyst: 45,
  },
  {
    stage: 20,
    glaciem: 6000,
    ed: 1800000,
    effect: "-",
    attempt: 35,
    percentage: 2.941,
    crystal: 300,
    amethyst: 45,
  },
  {
    stage: 21,
    glaciem: 6000,
    ed: 1800000,
    effect: "+2% Adaptation",
    attempt: 60,
    percentage: 1.667,
    crystal: 300,
    amethyst: 45,
  },
];

//Exascale
const stagesExascale = [
  {
    stage: 1,
    glaciem: 2000,
    ed: 300000,
    effect: "-",
    attempt: 5,
    percentage: 20,
    crystal: 100,
    amethyst: 20,
  },
  {
    stage: 2,
    glaciem: 2000,
    ed: 300000,
    effect: "-",
    attempt: 10,
    percentage: 10,
    crystal: 100,
    amethyst: 20,
  },
  {
    stage: 3,
    glaciem: 2000,
    ed: 300000,
    effect: "Critical Damage +3%",
    attempt: 15,
    percentage: 6.667,
    crystal: 100,
    amethyst: 20,
  },
  {
    stage: 4,
    glaciem: 2000,
    ed: 300000,
    effect: "-",
    attempt: 5,
    percentage: 20,
    crystal: 100,
    amethyst: 20,
  },
  {
    stage: 5,
    glaciem: 2000,
    ed: 300000,
    effect: "-",
    attempt: 10,
    percentage: 10,
    crystal: 100,
    amethyst: 20,
  },
  {
    stage: 6,
    glaciem: 2000,
    ed: 300000,
    effect: "Specific Skill Damage +4%",
    attempt: 15,
    percentage: 6.667,
    crystal: 100,
    amethyst: 20,
  },
  {
    stage: 7,
    glaciem: 2000,
    ed: 300000,
    effect: "-",
    attempt: 5,
    percentage: 20,
    crystal: 100,
    amethyst: 20,
  },
  {
    stage: 8,
    glaciem: 2000,
    ed: 300000,
    effect: "-",
    attempt: 15,
    percentage: 6.667,
    crystal: 100,
    amethyst: 20,
  },
  {
    stage: 9,
    glaciem: 2000,
    ed: 300000,
    effect: "Critical Damage +3%",
    attempt: 20,
    percentage: 5,
    crystal: 100,
    amethyst: 20,
  },
  {
    stage: 10,
    glaciem: 4000,
    ed: 900000,
    effect: "-",
    attempt: 10,
    percentage: 10,
    crystal: 200,
    amethyst: 40,
  },
  {
    stage: 11,
    glaciem: 4000,
    ed: 900000,
    effect: "-",
    attempt: 15,
    percentage: 6.667,
    crystal: 200,
    amethyst: 40,
  },
  {
    stage: 12,
    glaciem: 4000,
    ed: 900000,
    effect: "Specific Skill Damage +5%",
    attempt: 20,
    percentage: 5,
    crystal: 200,
    amethyst: 40,
  },
  {
    stage: 13,
    glaciem: 4000,
    ed: 900000,
    effect: "-",
    attempt: 20,
    percentage: 5,
    crystal: 200,
    amethyst: 40,
  },
  {
    stage: 14,
    glaciem: 4000,
    ed: 900000,
    effect: "-",
    attempt: 31,
    percentage: 3.333,
    crystal: 200,
    amethyst: 40,
  },
  {
    stage: 15,
    glaciem: 4000,
    ed: 900000,
    effect: "+2% Physical/Magical Attack Power",
    attempt: 40,
    percentage: 2.5,
    crystal: 200,
    amethyst: 40,
  },
  {
    stage: 16,
    glaciem: 6000,
    ed: 1800000,
    effect: "-",
    attempt: 40,
    percentage: 2.5,
    crystal: 300,
    amethyst: 60,
  },
  {
    stage: 17,
    glaciem: 6000,
    ed: 1800000,
    effect: "-",
    attempt: 80,
    percentage: 1.25,
    crystal: 300,
    amethyst: 60,
  },
  {
    stage: 18,
    glaciem: 6000,
    ed: 1800000,
    effect: "Specific Skill Damage +5%",
    attempt: 160,
    percentage: 0.625,
    crystal: 300,
    amethyst: 60,
  },
  {
    stage: 19,
    glaciem: 6000,
    ed: 1800000,
    effect: "-",
    attempt: 40,
    percentage: 2.5,
    crystal: 300,
    amethyst: 60,
  },
  {
    stage: 20,
    glaciem: 6000,
    ed: 1800000,
    effect: "-",
    attempt: 121,
    percentage: 0.833,
    crystal: 300,
    amethyst: 60,
  },
  {
    stage: 21,
    glaciem: 6000,
    ed: 1800000,
    effect: "+2% Adaptation",
    attempt: 241,
    percentage: 0.416,
    crystal: 300,
    amethyst: 60,
  },
];

const REFORGE_STAGES_MAPPING = {
  stages,
  stagesKR,
  stagesTenebrous,
  stagesTenebrousKR,
  stagesExascale,
};

export { REFORGE_STAGES_MAPPING };
