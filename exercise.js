// function sum(){
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];}
//         return sum;
// }

function sum(...args){
    let sum = 0;
    args.forEach(arg => {
        sum += arg;
         });
        return sum;
}
