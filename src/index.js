function func_for_integrate(x) {
    return 4 * x - x * x;
}

function Integrate(a, b, f, l) {
    var sum = 0;
    for (var i = a + 0.5 * l; i < b; i += l) {
        sum += f(i) * l;
    }
    return sum;
}

var a = Number(prompt('a:'));
var b = Number(prompt('b:'));
var func = Integrate(a, b, func_for_integrate, 0.001);
alert('' + func);