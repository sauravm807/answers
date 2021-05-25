function printParadoxOrNot() {

    let n = 6; // dynamically taking the value of n
    // dynamically take the value and get space seperated statments
    let statementArr = ["2 false", "1 true","4 true", "3 true","6 true", "5 false"];
    let statementObjArr = [];//creating an empty array

    for (let i = 0; i < n; i++) {
        const [statementNo, statementValue] = statementArr[i].split(" ");
        statementObjArr.push({
            statementNo, statementValue //pushing object to the array 
        });
    }

    for (let i = 0; i < statementObjArr.length; i++) {
        const statement = statementObjArr[i]; //storing the element of statementObjArr to statement 
        const foundStatement = statementObjArr[statement.statementNo - 1]; //storing the next element of statementObjArr to foundStatement

        //comparing the statement value of both variable if equal then print NOT PARADOX else print PARADOX
        if (statement.statementValue == foundStatement.statementValue) {
            console.log("NOT PARADOX");
        } else {
            console.log("PARADOX");
        }
    }
}

console.log(printParadoxOrNot());