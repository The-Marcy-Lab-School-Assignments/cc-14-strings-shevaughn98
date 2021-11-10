// first is to add a parameter to function 
// create a for loop that checks every character of the string
// then run a if statement 
// then have it return a new string without capitol letters

function stripUpperCase(str){
    let string = ""
    for(let i = 0; i < str.length; i++){
        if(str[i] !== str[i].toUpperCase() ){
          
            string += str[i]
        }
    }
    return string
}
console.log(stripUpperCase("Hello!"))