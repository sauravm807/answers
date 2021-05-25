//function to create array of fractions
function createFraction(n) {   
    let fractionArray = []; 

    for (let y = 1; y <= n; y++) {
        for (let x = 0; x <= y; x++) {
            //creating an array of an object 
            fractionArray.push({ frac: `${x}/${y}`, val: x / y }); //pushing objectcontaining fraction and its value
        }
    }
    return fractionArray;
}

//function to find the rank of a/b
function findRank(n, a, b) {
    let fracObjArray = createFraction(n); //calling createFraction()
    fracObjArray.sort((a, b) => a.val - b.val); //sorting the fracObjArray

    let finalResult = [];
    let includedVal = [];
    for (let i = 0; i < fracObjArray.length; i++) {
        let elem = fracObjArray[i];
        if (includedVal.includes(elem.val)) continue; //if includedVal already contain elem.val value then continue

        includedVal.push(elem.val); //pushing elem.val value inincludedVal array
        finalResult.push(elem.frac); //pushing fraction in in finalResult array
    }
    //finding position
    let pos = finalResult.indexOf(`${a}/${b}`);//finding the index of a/b
    //printing position of a/b if found
    if (pos >= 0) {
        return pos + 1;
    } else {
        return "Item not found";
    }
}

console.log(findRank(5, 3, 4));
console.log(findRank(8, 5, 7));

