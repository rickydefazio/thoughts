export function getNewExpirationTime() {
  return Date.now() + 5 * 1000;
}

let nextId = 0;
export function generateId() {
  console.log('nextId', nextId);
  return nextId++;
}
