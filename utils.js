export function evaluatePlantHealth(moistureLevel) {
    if (moistureLevel < 4) return 'dry';

    if (moistureLevel > 8) return 'overwatered';

    return 'healthy';
}