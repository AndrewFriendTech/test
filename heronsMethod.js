//herons method
//exam question 12

function heronsMethod(y)
{
    var g = y;
    var mean;

    while (Math.round((y/g))!= Math.round(g) )
    {
        mean = (1/2)*(g + y/g);
        g = mean;
    }
    return g;
}

console.log(Math.round(heronsMethod(14480)));