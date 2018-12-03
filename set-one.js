function createGreeting(name, age) {
    if (name !== undefined || age !== undefined) {
        const yearOfBirth = getYearOfBirth(age);
        return 'Hi, my name is Khari';
    } else {
        throw new Error("Arguments not valid")
    }
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
const greeting1 = createGreeting("David", 20);
console.log(greeting1);