function theSumOfARange() {
    function range(start, end, step = 1) {
        let buildArr = [];
        for (let i = start; (start < end ? i <= end : i >= end); i += step) {
            buildArr.push(i);
        }
        return buildArr;
    }

    function sum(arr) {
        return arr.reduce((tot, current) => (tot += current), 0);
    }

    console.log(range(1, 10));
    // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(range(5, 2, -1));
    // → [5, 4, 3, 2]
    console.log(sum(range(1, 10)));
    // → 55
}

// theSumOfARange();

function reversingAnArray() {
    function reverseArray(arr) {
        let newArr = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            newArr.push(arr[i]);
        }
        return newArr;
    }

    function reverseArrayInPlace(arr) {
        const half = Math.floor(arr.length / 2);
        for (let i = 0; i < half; i++) {
            [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
        }
    }

    console.log(reverseArray(["A", "B", "C"]));
    // → ["C", "B", "A"];
    let arrayValue = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);
    // → [5, 4, 3, 2, 1]
}

// reversingAnArray();

function aList() {
    function arrayToList(arr) {
        let list = null;
        for (let i = arr.length - 1; i >= 0; i--) {
            list = list ? {value: arr[i], rest: list} : {value: arr[i], rest: null};
        }
        return list;
    }

    function listToArray(list) {
        let newArr = [];
        for (let node = list; node; node = node.rest) {
            newArr.push(node.value);
        }
        return newArr;
    }

    function prepend(elem, list) {
        // let newArr = listToArray(list);
        // newArr.unshift(elem);
        // return arrayToList(newArr);

        return list ? {value: elem, rest: list} : {value: elem, rest: null};
    }

    function nth(list, num) {
        const newArr = listToArray(list);
        return newArr[num];

        // TODO: Make this recursive
    }

    console.log(arrayToList([10, 20]));
    // → {value: 10, rest: {value: 20, rest: null}}
    console.log(listToArray(arrayToList([10, 20, 30])));
    // → [10, 20, 30]
    console.log(prepend(10, prepend(20, null)));
    // → {value: 10, rest: {value: 20, rest: null}}
    console.log(nth(arrayToList([10, 20, 30]), 1));
    // → 20
}

// aList();

function deepComparison() {
    function deepEqual(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }

    let obj = { here: { is: "an" }, object: 2 };
    console.log(deepEqual(obj, obj));
    // → true
    console.log(deepEqual(obj, { here: 1, object: 2 }));
    // → false
    console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
    // → true
}

// deepComparison();