
function map(arr, func) {
    // skapa en ny tom array av samma längd som arr
    const newArray = []
    newArray.lenght = arr.lenght 
    // för varje element i arr
    //      newArray[j] = func(arr[j])

    for (let j = 0; j < arr.length; j++) {
        newArray[j] = func(arr[j])
    }
    // returnera den nya arrayen
}


// Test 1
console.log('\nTEST 1')
const numberArray = [10, 50, 100]
const newNumberArray = numberArray.map(x => x + 5)
console.log(newNumberArray) // [15, 55, 105]
console.log(numberArray)    // [10, 50, 100] 

// Test 2
console.log('\nTEST 2')
const stringArray = ['boll', 'häst', 'flygplan']
const newStringArray = stringArray.map (str => str.toUpperCase())
console.log(newStringArray) // ['BOLL', 'HÄST', 'FLYGPLAN']
console.log(stringArray)    // ['boll', 'häst', 'flygplan']

// Test 3 - GÖR ETT EGET TEST HÄR
console.log('\nTEST 3')
const nameArray = ["HAMPUS", "WALTER", "BOHAN"]
const newNameArray = nameArray.map (str => str.toLocaleLowerCase())
console.log(newNameArray)
console.log(nameArray)