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

function curriedSum(numArgs) {
  const numbers = [];

  function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      let total = 0;

      numbers.forEach((n) => { total += n; });

      return total;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

// Function.prototype.curry = function (numArgs) {
//   const args = [];
//   const fn = this;
//   function _curriedFn(arg) {
//     args.push(arg);
//     if (args.length === numArgs) {
//       return fn.apply(null, args);
//     } else {
//       return _curriedFn;
//     }
//   }
//   return _curriedFn;
// };

Function.prototype.curry = function (nArg) {
  const argArray = [];
  const _curriedFn = (arg) => {
    argArray.push(arg);
    if (argArray.length === nArg) {
      // spreading the array into individual arguments
      return this(...argArray); 
    } else {
      return _curriedFn;
    }
  };
  return _curriedFn;
};

Function.prototype.inherits = function (BaseClass) {
  function Surrogate () {}
  Surrogate.prototype = BaseClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};