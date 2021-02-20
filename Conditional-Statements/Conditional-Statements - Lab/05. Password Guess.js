function password(word) {

    let keyword = "s3cr3t!P@ssw0rd"
    let pass = word[0]

    if (pass === keyword) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!")
    }
}

password(["s3cr3t!P@ssw0rd"])