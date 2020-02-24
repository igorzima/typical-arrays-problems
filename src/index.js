
exports.min = function min (array) {
    if (array == undefined || array == "") {
        return 0;
    }

    let min = array.sort(function(a, b) {
        return a - b;
    });

    return min[0];
}

exports.max = function max (array) {
    if (array == undefined || array == "") {
        return 0;
    }

    let max = array.sort(function(a, b) {
        return a - b;
    });
    
    return max[array.length-1];
}

exports.avg = function avg (array) {
    if (array == undefined || array == "") {
        return 0;
    }

    let sum = array.reduce(function(a, b) {
        return a + b;
    })
    
    return sum / array.length;
}
