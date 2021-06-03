function lastK(n, k) {
    let seq = [];

    while (seq.length !== n) {
        if (seq.length > 0) {
            let temp = 0;
            for (let i = seq.length - k; i <= seq.length - 1; i++) {
                if (i >= 0) {
                    temp += seq[i];
                }
            }
            seq.push(temp);
        } else {
            seq.push(1);
        }
    }
    return seq
}

console.log(lastK(6, 3))