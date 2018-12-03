function createGreeting(name, age) {
    const yearOfBirth = getYearOfBirth(age);
    return 'Hi, my name is Khari';
}

function getYearOfBirth(age){
    return 2018 - age;
}
const greeting1 = createGreeting();
console.log(greeting1);