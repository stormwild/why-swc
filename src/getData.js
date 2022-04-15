import fetch from 'node-fetch';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const json = await res.json();
  // eslint-disable-next-line no-console
  console.log('data', json);
}

export default getData;
