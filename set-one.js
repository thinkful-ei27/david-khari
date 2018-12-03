function createGreeting(name, age) {
    const yearOfBirth = getYearOfBirth(age);
    return 'Hi, my name is Khari';
}

function getYearOfBirth(age){
    if (age < 0) {
        throw new Error("Age can not be negative");
    }
    try {
        const greeting1 = createGreating(age);
    } catch {
        console.error(Error.message);
    }
    return 2018 - age;
}   
const greeting1 = createGreeting();
console.log(greeting1);