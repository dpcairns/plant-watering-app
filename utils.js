export function evaluatePlantHealth(moistureLevel) {
    if (moistureLevel < 4) return 'dry';

    if (moistureLevel > 8) return 'overwatered';

    return 'healthy';
}

export function getPlantHealthText(plantHealth) {
    if (plantHealth === 'dry') return 'Your plant needs water!';
    if (plantHealth === 'healthy') return 'Your plant is a-ok!';
    
    return 'Your plant is drowining!';
}

