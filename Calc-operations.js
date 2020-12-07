/*This module isfor mathematical calculations that will help to simplify a lot of work
for developers*/


/* Array methods*/
class CalcArray {
    //calculate operations with arrays.
    constructor() {}

    averageOfArray(array) {
        //Algoritm for obtain a average of 1 array.
        if (typeof(array) == Object) {
            let average = 0;
            for (let i in array) {
                average += array[i];
            }
            return average / array.length;

        } else return console.log("Parameter is not an array");

    }
}

const calcArray = new CalcArray();

