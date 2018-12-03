function jediName(firstName, lastName) {

    return lastName.charAt(lastName.length - 3) 
    + lastName.charAt(lastName.length - 2) 
    + lastName.charAt(lastName.length - 1) 
    + firstName.charAt(0)
    + firstName.charAt(1);
}

console.log(jediName("David", "Johnson"));

function beyond(num){
    
    if (num>1.797693134862315E+308 || num<-1.797693134862315E+308){
        console.log('And Beyond');}
    else if (num>0){
        console.log('To infinity');}
    else if (num<0){
        console.log('To negative infinity');}
    else if (num==0){
        console.log('Staying home');}
    }


beyond(5);