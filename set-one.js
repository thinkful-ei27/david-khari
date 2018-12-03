function createGreeting(name, age) {
    if (typeof name !== "string" || typeof age !== "number"){
        throw new TypeError('Name must be a string and age must be a number');
      }
      try{
        
      }
      catch(e){
        console.error(e.message);
      }
      if (name !== undefined || age !== undefined) {
          const yearOfBirth = getYearOfBirth(age);
          return 'Hi, my name is ' + name;
      } else {
          throw new Error("Arguments not valid")
      }
  }
  
  function getYearOfBirth(age){
      if (age < 0) {
          throw new Error('Age can not be negative');
      }
      try {
      } catch(e) {
          console.error(e.message);
      }
      return 2018 - age;
  }   
  const greeting1 = createGreeting("David", -25);
  console.log(greeting1);
  