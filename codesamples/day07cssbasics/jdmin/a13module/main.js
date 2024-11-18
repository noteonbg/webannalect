// main.js

import { calculateEfficiency, logProduction } from './production.js';

// Example usage
const lineA = "Line A";
const producedA = 800;
const targetA = 1000;

logProduction(lineA, producedA, targetA);

const lineB = "Line B";
const producedB = 900;
const targetB = 1200;

logProduction(lineB, producedB, targetB);
