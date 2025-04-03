const arr = [['name', 'John'], ['age', 30], ['city', 'New York']];
const updatedObj = Object.fromEntries(
  arr.map(([key, value]) => [key, value.toUpperCase ? value.toUpperCase() : value])
);

console.log(updatedObj);
// আউটপুট: { name: 'JOHN', age: 30, city: 'NEW YORK' }
