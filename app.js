// import functions and grab DOM elements
import { evaluatePlantHealth } from './utils.js';

const button = document.getElementById('water-button');
const div = document.getElementById('health');
const image = document.getElementById('plant-image');

// initialize state
// state should usually be a "real world" thing that we're representing in code.
let moistureLevel = 1;

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    // - We need to incremenet the moisture level state
    moistureLevel++;

    // three options: 'dry', 'healthy', 'overwatered'
    const plantHealth = evaluatePlantHealth(moistureLevel);

    // - We change the image according to the new state
    image.src = `./assets/${plantHealth}.png`;
    // - We change the text according to the new state

    let healthString = 'Your plant is drowining!';
    
    if (plantHealth === 'dry') healthString = 'Your plant needs water!';
    else if (plantHealth === 'healthy') healthString = 'Your plant is a-ok!';

    div.textContent = healthString;
});