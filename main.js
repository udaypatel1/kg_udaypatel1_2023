
// grab command line inputs
let numsList = process.argv;
const startPos = 2;

if(numsList.length === startPos){
    return;
}

// remove file standard command line inputs from value array (the first two)
numsList.shift();
numsList.shift();

let numsListString = numsList.join();

let numberMap = new Map();

numberMap.set("0", "Zero");
numberMap.set("1", "One");
numberMap.set("2", "Two");
numberMap.set("3", "Three");
numberMap.set("4", "Four");
numberMap.set("5", "Five");
numberMap.set("6", "Six");
numberMap.set("7", "Seven");
numberMap.set("8", "Eight");
numberMap.set("9", "Nine");

// parse string form of inputs to phonetic meaning
function numberToPhonetic(numberString, numberMap){

    resultString = "";

    for(var idx = 0; idx < numberString.length; idx++){

        if(numberString[idx] === ","){
            resultString += ",";
            continue;
        }

        let phoneticWord = numberMap.get(numberString[idx]);

        // return invalid if anything besides 0-9 is given as input
        if(phoneticWord === undefined){
            return "invalid";
        }
        else{
            resultString += phoneticWord;
        }
    }

    return resultString;

}

let finalString = numberToPhonetic(numsListString, numberMap);
process.stdout.write(finalString);


