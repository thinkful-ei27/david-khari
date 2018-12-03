function jediName(firstName, lastName) {

    return lastName.charAt(lastName.length - 3) 
    + lastName.charAt(lastName.length - 2) 
    + lastName.charAt(lastName.length - 1) 
    + firstName.charAt(0)
    + firstName.charAt(1);
}

console.log(jediName("David", "Johnson"));

function beyond(num){
    
    if (num > Infinity || num< Infinity){
        console.log('And Beyond');}
    else if (num>0){
        console.log('To infinity');}
    else if (num<0){
        console.log('To negative infinity');}
    else if (num==0){
        console.log('Staying home');}
    }


beyond(5);

function decode(inputWord) {

    switch (inputWord.charAt(0)) {
        case 'a':
            return inputWord.charAt(1);
        case 'b':
            return inputWord.charAt(2);
        case 'c':
            return inputWord.charAt(3);
        case 'd':
            stringIndex = 4;
            return inputWord.charAt(4);
        default:
            return " ";
    }   

}
decode("cycle");
 
function daysInMonth(month, leapYear){
    const input = month.toLowerCase();
    switch(input){
        case 'january':
            return 31;
            break;
        case 'febuary':
            if(leapYear){
                return 29;
            } else return 28;
            break;
        case 'march':
            return 31;
            break;
        case 'april':
            return 30;
            break;
        case 'may':
            return 31;
            break;
        case 'june':
            return 30;
            break;
        case 'july':
            return 31;
            break;
        case 'august':
            return 31;
            break;
        case 'september':
            return 30;
            break;
        case 'october':
            return 31;
            break;
        case 'november':
            return 30;
            break;
        case 'december':
            return 31;
            break;
        default:
            try{
              throw new Error('Must provide valid month');
            } catch(e){
              console.error(e.message);
            }
    }
}
daysInMonth("January", false);