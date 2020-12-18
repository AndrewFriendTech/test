

function flippedArray(array) {
    var n = array.length;
    var flip = [];
    for (var i = 0; i < n; i++) {
        flip.push(array[n-1-i]);
    }
   return flip;
}


function checkPalindrome(array) {
    var flipped = flippedArray(array);
    if (array.length !== flipped.length) {
        return false;
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== flipped[i]) {
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome([1,2,3,4,3,2,1]));