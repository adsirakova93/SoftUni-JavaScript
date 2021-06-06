function biggest(array) {
    let [first, ...nums] = array;
    let newArray = [first];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= first) {
            first = nums[i];
            newArray.push(first);
        }
    }
    return newArray
}

console.log(biggest([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(biggest([1, 2, 3, 4]));
console.log(biggest([20, 3, 2, 15, 6, 1]))