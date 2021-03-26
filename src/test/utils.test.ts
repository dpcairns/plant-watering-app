// IMPORT MODULES under test here:
import { evaluatePlantHealth, PlantHealth } from '../utils';

const test = QUnit.test;

test('should take in an integer, and return the plant health as "healthy", "dry", "overwatered"', (expect) => {
    const actualDry : PlantHealth = evaluatePlantHealth(3);
    const actualHealthy : PlantHealth = evaluatePlantHealth(5);
    const actualOverwatered : PlantHealth = evaluatePlantHealth(9);

    // three arguments: actual, expected, some description
    expect.equal(actualDry, 'dry', 'less than 4 is too dry');
    expect.equal(actualHealthy, 'healthy', 'between 5 and 8 is healthy');
    expect.equal(actualOverwatered, 'overwatered', 'anything over 8 is overwatered');
});
