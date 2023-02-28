/* function functionname(perameters) {
    // function body
    // return
}

var returnedValue = functionname(perameters value) */


function getAverage(assigment1, assigment2, assigment3){
    const total = assigment1 + assigment2 + assigment3;
    const average = total / 3;
    return average;
}
const assigment1Marks = 60;
const assigment2Marks = 58;
const assigment3Marks = 59;

var myAverage = getAverage(assigment1Marks, assigment2Marks, assigment3Marks);
console.log('my average so far:', myAverage);

