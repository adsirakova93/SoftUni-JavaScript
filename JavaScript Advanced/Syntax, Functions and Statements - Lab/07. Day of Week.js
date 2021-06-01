function dayOfTheWeek(input) {
    result = 0
    switch (input) {
        case 'Monday': result = 1; break;
        case 'Tuesday': result = 2; break;
        case 'Wednesday': result = 3; break;
        case 'Thursday': result = 4; break;
    }
    if (result === 0) {
        console.log('error')
    } else {
        console.log(result)
    }
    
}

dayOfTheWeek('Friday')
