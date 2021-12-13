
const stages = [
    {
        stage: 1,
        glaciem: 2000,
        amethyst: 3,
        crystal: 100,
        ed: 300000,
        attempt: 11,
        percentage: 10,
        effect: '-'
    },
    {
        stage: 2,
        glaciem: 2000,
        amethyst: 3,
        crystal: 100,
        ed: 300000,
        attempt: 16,
        percentage: 6.667,
        effect: '-'
    },
    {
        stage: 3,
        glaciem: 2000,
        amethyst: 3,
        crystal: 100,
        ed: 300000,
        attempt: 21,
        percentage: 5,
        effect: 'Critical Damage +3%'
    },
    {
        stage: 4,
        glaciem: 2000,
        amethyst: 3,
        crystal: 100,
        ed: 300000,
        attempt: 11,
        percentage: 10,
        effect: '-'
    },
    {
        stage: 5,
        glaciem: 2000,
        amethyst: 3,
        crystal: 100,
        ed: 300000,
        attempt: 16,
        percentage: 6.667,
        effect: '-'
    },
    {
        stage: 6,
        glaciem: 2000,
        amethyst: 3,
        crystal: 100,
        ed: 300000,
        attempt: 32,
        percentage: 3.333,
        effect: 'Specific Skill Damage +5%'
    },
    {
        stage: 7,
        glaciem: 2000,
        amethyst: 3,
        crystal: 100,
        ed: 300000,
        attempt: 11,
        percentage: 10,
        effect: '-'
    },
    {
        stage: 8,
        glaciem: 2000,
        amethyst: 3,
        crystal: 100,
        ed: 300000,
        attempt: 21,
        percentage: 5,
        effect: '-'
    },
    {
        stage: 9,
        glaciem: 2000,
        amethyst: 3,
        crystal: 100,
        ed: 300000,
        attempt: 41,
        percentage: 2.5,
        effect: 'Critical Damage +3%'
    },
    {
        stage: 10,
        glaciem: 4000,
        amethyst: 6,
        crystal: 200,
        ed: 900000,
        attempt: 11,
        percentage: 10,
        effect: '-'
    },
    {
        stage: 11,
        glaciem: 4000,
        amethyst: 6,
        crystal: 200,
        ed: 900000,
        attempt: 32,
        percentage: 3.333,
        effect: '-'
    },
    {
        stage: 12,
        glaciem: 4000,
        amethyst: 6,
        crystal: 200,
        ed: 900000,
        attempt: 61,
        percentage: 1.667,
        effect: 'Specific Skill Damage +5%'
    },
    {
        stage: 13,
        glaciem: 4000,
        amethyst: 6,
        crystal: 200,
        ed: 900000,
        attempt: 21,
        percentage: 5,
        effect: '-'
    },
    {
        stage: 14,
        glaciem: 4000,
        amethyst: 6,
        crystal: 200,
        ed: 900000,
        attempt: 41,
        percentage: 2.5,
        effect: '-'
    },
    {
        stage: 15,
        glaciem: 4000,
        amethyst: 6,
        crystal: 200,
        ed: 900000,
        attempt: 81,
        percentage: 1.250,
        effect: 'Adaptation +1%'
    },
    {
        stage: 16,
        glaciem: 6000,
        amethyst: 9,
        crystal: 300,
        ed: 1800000,
        attempt: 41,
        percentage: 2.5,
        effect: '-'
    },
    {
        stage: 17,
        glaciem: 6000,
        amethyst: 9,
        crystal: 300,
        ed: 1800000,
        attempt: 161,
        percentage: 0.625,
        effect: '-'
    },
    {
        stage: 18,
        glaciem: 6000,
        amethyst: 9,
        crystal: 300,
        ed: 1800000,
        attempt: 321,
        percentage: 0.313,
        effect: 'Critical Damage +3%'
    },
    {
        stage: 19,
        glaciem: 6000,
        amethyst: 9,
        crystal: 300,
        ed: 1800000,
        attempt: 41,
        percentage: 2.5,
        effect: '-'
    },
    {
        stage: 20,
        glaciem: 6000,
        amethyst: 9,
        crystal: 300,
        ed: 1800000,
        attempt: 241,
        percentage: 0.417,
        effect: '-'
    },
    {
        stage: 21,
        glaciem: 6000,
        amethyst: 9,
        crystal: 300,
        ed: 1800000,
        attempt: 482,
        percentage: 0.208,
        effect: '+3% Physical/Magical Attack Power'
    },
]

const stagesKR = [
    {
        stage: 1,
        glaciem: 2000,
        amethyst: 3,
        crystal: 100,
        ed: 300000,
        attempt: 10,
        percentage: 10,
        effect: '-'
    },
    {
        stage: 2,
        glaciem: 2000,
        amethyst: 3,
        crystal: 100,
        ed: 300000,
        attempt: 15,
        percentage: 6.667,
        effect: '-'
    },
    {
        stage: 3,
        glaciem: 2000,
        amethyst: 3,
        crystal: 100,
        ed: 300000,
        attempt: 20,
        percentage: 5,
        effect: 'Critical Damage +3%'
    },
    {
        stage: 4,
        glaciem: 2000,
        amethyst: 3,
        crystal: 100,
        ed: 300000,
        attempt: 10,
        percentage: 10,
        effect: '-'
    },
    {
        stage: 5,
        glaciem: 2000,
        amethyst: 3,
        crystal: 100,
        ed: 300000,
        attempt: 15,
        percentage: 6.667,
        effect: '-'
    },
    {
        stage: 6,
        glaciem: 2000,
        amethyst: 3,
        crystal: 100,
        ed: 300000,
        attempt: 31,
        percentage: 3.333,
        effect: 'Specific Skill Damage +5%'
    },
    {
        stage: 7,
        glaciem: 2000,
        amethyst: 3,
        crystal: 100,
        ed: 300000,
        attempt: 10,
        percentage: 10,
        effect: '-'
    },
    {
        stage: 8,
        glaciem: 2000,
        amethyst: 3,
        crystal: 100,
        ed: 300000,
        attempt: 20,
        percentage: 5,
        effect: '-'
    },
    {
        stage: 9,
        glaciem: 2000,
        amethyst: 3,
        crystal: 100,
        ed: 300000,
        attempt: 40,
        percentage: 2.5,
        effect: 'Critical Damage +3%'
    },
    {
        stage: 10,
        glaciem: 4000,
        amethyst: 6,
        crystal: 200,
        ed: 900000,
        attempt: 10,
        percentage: 10,
        effect: '-'
    },
    {
        stage: 11,
        glaciem: 4000,
        amethyst: 6,
        crystal: 200,
        ed: 900000,
        attempt: 31,
        percentage: 3.333,
        effect: '-'
    },
    {
        stage: 12,
        glaciem: 4000,
        amethyst: 6,
        crystal: 200,
        ed: 900000,
        attempt: 60,
        percentage: 1.667,
        effect: 'Specific Skill Damage +5%'
    },
    {
        stage: 13,
        glaciem: 4000,
        amethyst: 6,
        crystal: 200,
        ed: 900000,
        attempt: 20,
        percentage: 5,
        effect: '-'
    },
    {
        stage: 14,
        glaciem: 4000,
        amethyst: 6,
        crystal: 200,
        ed: 900000,
        attempt: 40,
        percentage: 2.5,
        effect: '-'
    },
    {
        stage: 15,
        glaciem: 4000,
        amethyst: 6,
        crystal: 200,
        ed: 900000,
        attempt: 80,
        percentage: 1.250,
        effect: 'Adaptation +1%'
    },
    {
        stage: 16,
        glaciem: 6000,
        amethyst: 9,
        crystal: 300,
        ed: 1800000,
        attempt: 40,
        percentage: 2.5,
        effect: '-'
    },
    {
        stage: 17,
        glaciem: 6000,
        amethyst: 9,
        crystal: 300,
        ed: 1800000,
        attempt: 121,
        percentage: 0.833,
        effect: '-'
    },
    {
        stage: 18,
        glaciem: 6000,
        amethyst: 9,
        crystal: 300,
        ed: 1800000,
        attempt: 240,
        percentage: 0.417,
        effect: 'Critical Damage +3%'
    },
    {
        stage: 19,
        glaciem: 6000,
        amethyst: 9,
        crystal: 300,
        ed: 1800000,
        attempt: 40,
        percentage: 2.5,
        effect: '-'
    },
    {
        stage: 20,
        glaciem: 6000,
        amethyst: 9,
        crystal: 300,
        ed: 1800000,
        attempt: 180,
        percentage: 0.556,
        effect: '-'
    },
    {
        stage: 21,
        glaciem: 6000,
        amethyst: 9,
        crystal: 300,
        ed: 1800000,
        attempt: 360,
        percentage: 0.278,
        effect: '+3% Physical/Magical Attack Power'
    },
]

export { stages, stagesKR }