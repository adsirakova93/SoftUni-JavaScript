function speedInfo(num) {

    let speed = Number(num);

    if (speed <= 10) {
        console.log("slow")
    }
    else if (10 < speed <= 50) {
        console.log("average")
    }
    else if (50 < speed <= 150) {
        console.log("fast")
    }
    else if (150 < speed <= 1000) {
        console.log("ultra fast")
    }
    else {
        console.log("extremely fast")
    }

}

speedInfo(["8"])
speedInfo(["49.5"])
speedInfo(["126"])