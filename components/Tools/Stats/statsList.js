
const statList = {
    maximize: {
        name: 'maximize',
        efficiency: [100,75,50,25,0],
        normalize: [0,40,70,90,100],
        unnormalized:[0,40,80,120,160]
    },
    critical: {
        name: 'critical',
        efficiency: [100,80,60,40,0],
        normalize: [0,40,68,86,100],
        unnormalized:[0,40,75,105,140]
    },
    'action speed': {
        name: 'action speed',
        efficiency: [100,30,20,10,0],
        normalize: [0,20,24.5,28.5,30],
        unnormalized:[0,20,35,55,75]
    },
    'additional damage':{
        name: 'additional damage',
        efficiency: [100,75,50,25,0],
        normalize: [0,40,70,92.5,102.5],
        unnormalized:[0,40,80,125,165]
    },
    'movement speed': {
        name: 'movement speed',
        efficiency: [100,30,20,10,0],
        normalize: [0,20,24.5,28.5,30],
        unnormalized:[0,20,35,55,75]
    },
    'jump speed': {
        name: 'jump speed',
        efficiency: [100,30,20,10,0],
        normalize: [0,20,24.5,28.5,30],
        unnormalized:[0,20,35,55,75]
    },
    'mp gain when attacked': {
        name: 'mp gain when attacked',
        efficiency: [100,35,25,15,0],
        normalize: [0,30,38.75,46.25,50],
        unnormalized:  [0,30,55,85,110]
    },
    'mp gain when attacking': {
        name: 'mp gain when attacking',
        efficiency: [100,35,25,15,0],
        normalize: [0,30,38.75,46.25,50],
        unnormalized:  [0,30,55,85,110]
    },
    'damage reduction':{
        name: 'damage reduction',
        efficiency: [100,50,35,15,0],
        normalize: [0,20,32.5,41.25,45],
        unnormalized:  [0,20,45,70,95]
    },
    'awakening charge speed': {
        name: 'awakening charge speed',
        efficiency: [100,85,75,65,0],
        normalize: [0,20,32.75,40.25,50],
        unnormalized:  [0,20,35,45,60]
    }
}

const getStatsName = Object.keys(statList)

export {statList,getStatsName}