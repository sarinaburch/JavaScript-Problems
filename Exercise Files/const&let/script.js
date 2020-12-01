const MYCONSTANT = 5;
console.log(MYCONSTANT);
MYCONSTANT = 6; //throws assignment error in console


function logScope() {
    let localVar = 2;

    if (localVar) {
        let localVar = "I'm different!";
        
    }
    console.log(localVar);
}
