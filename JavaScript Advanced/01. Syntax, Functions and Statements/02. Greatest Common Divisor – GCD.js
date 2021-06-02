function gcd_rec(a, b) {
    result = 0;

    if (b) {
        result = gcd_rec(b, a % b);
    } else {
        result = Math.abs(a);
    
    console.log(result)
    }
    
}

gcd_rec(15, 5)
gcd_rec(2154, 458)