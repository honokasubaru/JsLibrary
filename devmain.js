/*
Easy tools, simple and usefull library
*/




/* Arrays tools*/

class CalcArray {
    //calculate operations and tolls for use with arrays.
    constructor() {}

    adition(array) {
        //Obtain the add of all elements of an array 
        let addArray = 0;
        for (let i in array) {
            addArray += array[i];
        }
        return addArray;
    }

    average(array) {
        //Obtain a average of an array.

        let average = 0;
        for (let i in array) {
            average += array[i];
        }
        return average / array.length;
    }

    maximunValue(array) {

        //Obtain maximun value of an array

        let maximun = 0;
        for (let i in array) {
            if (maximun < array[i]) {
                maximun = array[i];
            }
        }

        return maximun;
    }
    minimunValue(array) {

        //Obtain minimun value of an array

        let minimun = array[0]

        for (let i in array) {

            if (array[i] < minimun) {
                minimun = array[i];
            }
        }
        return minimun;
    }


    generateArray(numberof) {

        //Generating an array

        let array = [];
        if (numberof < 1000000) {
            let generator;
            console.log(numberof);
            for (let i = 0; i < numberof; i++) {

                generator = parseInt(Math.random() * 100);
                array.push(generator);
            }
            return array;
        }

    }
    arrayTObject(array) {

        //return an object with index = id of array and value is the argument of array

        let object = {};

        for (let i in array) {

            object[i] = array[i];

        }
        return object;
    }

}

class Stack {

    // Does the simulation of a stack with its methods

    constructor() {
        this.stack = []

    }
    insertNewElement(element) {

        this.stack.push(element);
        return this.stack;
    }
    deleteElement() {
        this.stack.pop();
        return this.stack;
    }
    showSize() {
        return this.stack.length;
    }
    viewElements() {
        return this.stack;
    }

}

class Queue {
    //Does the simulation of a queue with its methods
    constructor() {
        this.queue = [];
    }

    insertNewElement(element) {

        this.queue.push(element);
        return this.queue;
    }
    deleteElement() {
        return this.queue.shift();
    }
    showSize() {
        return this.queue.length;
    }
    viewElements() {
        return this.queue;
    }
}

const quicksort = (array) => {

    //Algorithm quicksort for order arrays

    if (array.length <= 1) {
        return array;
    }
    var index = array[0];

    var left = [];
    var right = [];

    for (var i = 1; i < array.length; i++) {
        if (array[i] < index) {

            left.push(array[i]);

        } else {

            right.push(array[i]);

        }
    }
    return quicksort(left).concat(index, quicksort(right));
};

const bubbleSort = (array) => {
    //sort the array with bubble sorting algorithm 
    let sortVar;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                sortVar = array[j];
                array[j] = array[j + 1];
                array[j + 1] = sortVar;
            }
        }
    }
    return array;
}

const binarySearch = (value, array) => {

    //Obtain index of a specific value in an array

    let first = 0; //left endpoint
    let last = array.length - 1; //right endpoint
    let position = false;
    let found = false;
    let middle;

    while (found === false && first <= last) {
        middle = Math.floor((first + last) / 2);
        if (array[middle] == value) {
            found = true;
            position = middle;
        } else if (array[middle] > value) { //if in lower half
            last = middle - 1;
        } else { //in in upper half
            first = middle + 1;
        }
    }
    return position;
}

//Objects to export. 

const ofArray = new CalcArray();
const stack = new Stack()
const queue = new Queue()




//Exporting all objects and functions



//Testing zone.