const person = {
    firstName: "Marxsoel",
    lastName: "Elias",
    age: "21",
    hobbies: ["Jogar magic", "Assistir filmes", "Descansar"],
};

// const firstName = person.firstName;
// const age = person.age;
// const hobbies = person.hobbies;
// const lastName = person.lastName;


const {firstName, lastName, age, hobbies} = person

const rest = person.hobbies[2];

console.log(`${firstName} ${lastName}, ${age} anos, gosta de ${hobbies}`);
