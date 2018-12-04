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
        case 'march':
        case 'may':
        case 'july':
        case 'august':
        case 'october':
        case 'december':
            return 31;

        case 'febuary':
            if(leapYear){
                return 29;
            } else return 28;

        case 'april':
        case 'june':
        case 'september':
        case 'november':
            return 30;

        default:
            try{
              throw new Error('Must provide valid month');
            } catch(e){
              console.error(e.message);
            }
    }
}
daysInMonth("January", false);

function rockPaperScissor(num) {

    const randomNo = Math.floor(Math.random() * 3) + 1;

        if (num < 1 || num > 3) {
            throw new Error("Must enter a number between 1 and 3.")
        }

        if ((num === 1 && randomNo === 1) 
        || (num === 2 && randomNo === 2) 
        || (num === 3 && randomNo === 3)) {

            return "It's a tie!";
        } 
        else if 
        ((num === 1 && randomNo === 3) 
        || (num === 2 && randomNo === 1) 
        || (num === 3 && randomNo === 2)) {

            return "You win";
        }
        else if 
        ((num === 3 && randomNo === 1) 
        || (num === 1 && randomNo === 2) 
        || (num === 2 && randomNo === 3)) {

            return "The computer wins";
        }
    }
rockPaperScissor(1);