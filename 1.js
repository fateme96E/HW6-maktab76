function accumulatingArray(arr) {

    let result = [];
    let sum = 0;
    result = arr.map( item =>  sum += item)
    console.log(result);
}
accumulatingArray([1, 2, 3, 4]);    //[1, 3, 6, 10]
accumulatingArray([1, 5, 7]);       //[1, 6, 13]
accumulatingArray([1, 0, 1, 0, 1]); //[1, 1, 2, 2, 3]
accumulatingArray([]);              //[]