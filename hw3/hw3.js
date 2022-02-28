// Question 1
function max(iterable, key) {
    var maximum = iterable[Symbol.iterator].next();
    for (var item in iterable) {
        var keyItem = key(item);
        if (keyItem >= maximum) {
            maximum = item;
        }
    }
    return maximum;
}

// Question 2
const reverser = (value) => -1 * value;

// Question 4
function changer(object, key, value) {
    var prev = object.key; // why do we need this line?
    if (Array.isArray(prev)) {
        prev.append(value);
    } else if (typeof prev == 'object' && prev != null) {
        prev.key = value;
    } else {
        prev = value;
    }
    return null;
}

// Question 5
async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(1);
        resolve(5);
    });
    console.log(2);
    console.log(3);
    console.log(4);
    const five = await a;
    console.log(five);
    return five;
}