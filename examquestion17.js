function flippedArray(array) {
    var n = array.length;
    var flip = [];
    for (var i = 0; i < n; i++) {
        flip.push(array[n-1-i]);
    }
   return flip;
}

console.log( flippedArray([1,2,3,4,5]));
