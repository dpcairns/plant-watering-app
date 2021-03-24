// IMPORT MODULES under test here:
import { evaluatePlantHealth } from '../utils.js';

const test = QUnit.test;

test('should take in an integer, and return the plant health as "healthy", "dry", "overwatered"', (expect) => {
    const actualDry = evaluatePlantHealth(3);
    const actualHealthy = evaluatePlantHealth(5);
    const actualOverwatered = evaluatePlantHealth(9);

    // three arguments: actual, expected, some description
    expect.equal(actualDry, 'dry', 'less than 4 is too dry');
    expect.equal(actualHealthy, 'healthy', 'between 5 and 8 is healthy');
    expect.equal(actualOverwatered, 'overwatered', 'anything over 8 is overwatered');
});
