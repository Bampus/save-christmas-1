
function max(arr) {
    let largestValue = 0 

    for (let i = 0; i < array.length; i++) {
        if (arr[i] > largestValue) {
            largestValue = arr[i]
        }
    }
    return largestValue
    console.log(largestValue)
}

function min(arr) {
    let smallestValue = arr[0]

    for (let i = 0; i < array.length; i++) {
        if (arr[i] < smallestValue) {
            samllestValue = arr[i]
        }
     return smallestValue
}

function mean(arr) {
    let result = 0 

    for (let i = 0; i < array.length; i++) {
       result = result + arr[i];
        
    }  
    console.log(result)
    return result / arr.length
}
