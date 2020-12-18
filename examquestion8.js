function lin(array, x) {
    var n = array.length;
    for (var i = 0; i <= n - 1; i++) {
        if (array[i] == x) {
            return true;
        }
    }
    return false;
}


console.log(lin([1,2,3,4,5,6],6));
console.log(lin([1,2,3,4,5,6],8))

