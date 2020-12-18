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

function stackPalindrome(array)
{
    var x = arrayStack(array);
    var i = 0;
    while( x.isEmpty() == false )
    {
        if(x.peek()== array[i])
        {
            i=i+1;
            x.pop();
        }
        else
        {
            return false;
        }
    }
    return true;
}

console.log(stackPalindrome([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]))