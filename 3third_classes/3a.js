// Funkcja licząca silnię zadanej liczby 
// rekurencyjnie
let factorialRec = function (x) {
    if (x == 0) {
        return 1;
    } else {
        console.log(x * factorialRec(x - 1));
    }
}

// iteracyjnie
function factorialIterl(n) {
    var rval = 1;
    for (var i = 2; i <= n; i++)
        rval = rval * i;
    console.log(rval);
}