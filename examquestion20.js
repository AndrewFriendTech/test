function Stack() {
    this.arr = [];
    this.pop = function() {
        if (this.arr.length == 0) {
            return "Underflow";
        }
        return this.arr.pop();
    };
    this.push = function(el) {
        return this.arr.push(el);
    };
    this.peek = function() {
        return this.arr[this.arr.length - 1];
    };
    this.isEmpty = function() {
        return (this.arr.length === 0);
    };
}

function arrayStack(array) {
    var f = new Stack();
    var n = array.length;
    for (var i = 0; i < n; i++) {
        f.push(array[i]);
    }
    return f;
}

console.log(arrayStack([1, 2, 3]).peek());

console.log(arrayStack([1, 3]).isEmpty());
