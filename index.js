



function receivesAFunction(func) {

    return func();
}

function returnsANamedFunction() {
    return function call() {
        return 1;
    }
}


function returnsAnAnonymousFunction() {
    return () => 0
}