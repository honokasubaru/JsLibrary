/*This module isfor mathematical calculations that will help to simplify a lot of work
for developers*/


/* Array methods*/
class CalcArray {
    //calculate operations with arrays.
    constructor() {}

    averageOfArray(array) {
        //Algoritm for obtain a average of 1 array.
        console.log(typeof(array));

        let average = 0;
        for (let i in array) {
            average += array[i];
        }
        return average / array.length;
    }
}

const calcArray = new CalcArray();