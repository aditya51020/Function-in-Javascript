function curry(fun){
    return function curried(...args){
        if(args.length >= fun.length){
            return fun(...args);
        }else{
            return function(...nextArgs){
                return curried(...args, ...nextArgs);
            };
        }
    };
}

function add(a,b){
    return a + b
}
const curriedAdd = curry(add);

console.log(curriedAdd(8,9))