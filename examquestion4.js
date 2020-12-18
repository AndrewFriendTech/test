function thing(n) {
    var x = 0;
    for (var i = 1; i < n; i++) {
        if (n / i == 1) {
            x++;
        }
    }
    i--;
    return i;
}

console.log(thing(2));
