
exports.min = function min (array) {
    let res;
    if (array === undefined) {
        res = 0;
    }
    else if(array.length === 0) {
        res = 0;
    }
    else {
        for(let i = 0; i < array.length; i++) {
            res = array[0];
            for(let i = 1; i < array.length; i++) {
                if(array[i] < res) {
                    res = array[i];
                }
            }
        }
    }
    return res;
}

exports.max = function max (array) {
    let res;
    if (array === undefined) {
        res = 0;
    }
    else if(array.length === 0) {
        res = 0;
    }
    else {
        res = array[0];
        for(let i = 1; i < array.length; i++) {
            if(array[i] > res) {
                res = array[i];
            }
        }
    }
    return res;
}

exports.avg = function avg (array) {
    let res;
    if (array === undefined) {
        res = 0;
    }
    else if(array.length === 0) {
        res = 0;
    }
    else {
        let total = 0;
        for(let i = 0; i < array.length; i++) {
            total += array[i];
        }
        res = total / array.length;
    }
    return res;
}
