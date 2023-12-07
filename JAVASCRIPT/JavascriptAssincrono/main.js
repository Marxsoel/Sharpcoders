const names= ["Felipe", "Joao", "Julia", 10, false];

const joao = names[1]; 

names.push('Pedro');

names.unshift('Fernanda');

names.pop();
names.pop();
names.pop();

names[3] = "Gustavo";

 console.log(names.indexOf('Felipe'));

const indexOfFelipe = names.indexOf("Felipe");

const sortedNames = names.sort();

const namesIsArray = Array.isArray(indexOfFelipe);

console.log(names.length);
console.log(sortedNames);
console.log(namesIsArray);