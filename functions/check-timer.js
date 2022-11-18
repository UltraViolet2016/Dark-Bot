function check_timer() {
    var fs = require('node:fs');
    var array = fs.readFileSync('./data/timers.txt').toString().split("\n");
    let timestamps = []

    for (i in array) {
        let split_array = array[i].split(" ");
        timestamps.push(split_array[2]);
    }

    return timestamps;
}

// how to print multiple values in a loop 


module.exports = check_timer;