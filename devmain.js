//Creator of method for easy tolls


/* Arrays tools*/
/* Array methods*/
class CalcArray {
    //calculate operations with arrays.
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




}

//objects to export. 

const ofArray = new CalcArray();
console.log(ofArray.minimunValue([4, 2, -1, 2, 12]));


//Testing zone.