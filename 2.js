function starRating(arr) {
    let result, roundedResult;
    let starRate = 0,
        sum = 0,
        starsStr = '';
    
    arr.forEach((curVal, index) => {
        starRate += curVal * (index + 1);
        sum += curVal;
    });

    result = starRate / sum;
    result = result.toFixed(2);

    roundedResult = Math.round(result);
    for (let i = 0; i < roundedResult; i++) {
        starsStr += '*';
    }
    console.log(`${[result]} ${starsStr}`);

}
starRating([55, 67, 98, 115, 61]);
starRating([0, 2, 0, 1, 23]);
starRating([16, 17, 23, 40, 45]);
