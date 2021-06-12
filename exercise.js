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


// Function.prototype.myBind = function (ctx) {
//   const fn = this;
//   const bindArgs = Array.from(arguments).slice(1);
//   return function _boundFn() {
//     const callArgs = Array.from(arguments);
//     return fn.apply(ctx, bindArgs.concat(callArgs));
//   };
// };


Function.prototype.myBind = function (ctx, ...bindArgs) {
  return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
};