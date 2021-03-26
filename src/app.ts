// import functions and grab DOM elements
import { evaluatePlantHealth, getPlantHealthText, PlantHealth } from './utils';
const button = <HTMLButtonElement>document.getElementById('water-button');
const div = <HTMLDivElement>document.getElementById('health');
const image = <HTMLImageElement>document.getElementById('plant-image');

// initialize state
// state should usually be a "real world" thing that we're representing in code.
let moistureLevel : number = 1;

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    // - We need to incremenet the moisture level state
    moistureLevel++;

    // three options: 'dry', 'healthy', 'overwatered'
    const plantHealth : PlantHealth = evaluatePlantHealth(moistureLevel);

    // - We change the image according to the new state
    image.src = `./assets/${plantHealth}.png`;
    // - We change the text according to the new state

    let healthString = getPlantHealthText(plantHealth);

    div.textContent = healthString;
});

