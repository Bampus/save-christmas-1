
function max(arr) {
    let largestValue = 0 

    for (let i = 0; i < array.length; i++) {
        if (arr[i] > largestValue) {
            largestValue = arr[i]
        }
    }
    return largestValue
}

function min(arr) {

}

function mean(arr) {
    let result = 0 

    for (let i = 0; i < array.length; i++) {
       result = result + arr[i];
        
    }  
    console.log(result)
    return result / arr.length
}
