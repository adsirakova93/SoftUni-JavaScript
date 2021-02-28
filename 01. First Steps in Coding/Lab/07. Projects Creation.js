function creation_of_projects(data) {

    let name = data[0];
    let hour = Number(data[1]);
    let totalHours = hour * 3;
    console.log(`The architect ${name} will need ${totalHours} hours to complete ${hour} project/s.`)
}

creation_of_projects(["George", "9"])
