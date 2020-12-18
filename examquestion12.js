function sum(n) {
    if (n==0) {
        return 0;
    }
    return n + sum(n-1);
}

console.log(sum(6));
console.log(6+5+4+3+2+1);
