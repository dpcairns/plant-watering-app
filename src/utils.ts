export type PlantHealth = 'dry' | 'overwatered' | 'healthy'

export function evaluatePlantHealth(moistureLevel) : PlantHealth {
    if (moistureLevel < 4) return 'dry';

    if (moistureLevel > 8) return 'overwatered';

    return 'healthy';
}

type HealthMessage = 'Your plant needs water!' | 'Your plant is a-ok!' | 'Your plant is drowining!';

export function getPlantHealthText(plantHealth : PlantHealth) : HealthMessage {
    if (plantHealth === 'dry') return 'Your plant needs water!';
    if (plantHealth === 'healthy') return 'Your plant is a-ok!';
    
    return 'Your plant is drowining!';
}