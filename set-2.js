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