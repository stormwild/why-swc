// eslint-disable-next-line import/extensions
import getData from './getData.js';

console.log('getData Starts');

const data = await getData();

// eslint-disable-next-line no-console
console.log('data', data);
