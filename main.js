
let numsList = process.argv;

numsList.shift();
numsList.shift();

let numsListString = numsList.join();

//process.stdout.write(numsListString);

let numberMap = new Map();

numberMap.set("1", "One");
numberMap.set("2", "Two");
numberMap.set("3", "Three");
numberMap.set("4", "Four");
numberMap.set("5", "Five");
numberMap.set("6", "Six");
numberMap.set("7", "Seven");
numberMap.set("8", "Eight");
numberMap.set("9", "Nine");

function numberToPhonetic(numberString, numberMap){

    resultString = "";

    for(var idx = 0; idx < numberString.length; idx++){

        if(numberString[idx] === ","){
            resultString += ",";
            continue;
        }

        let phoneticWord = numberMap.get(numberString[idx]);

        if(phoneticWord === undefined){
            return "invalid";
        }
        else{
            resultString += numberMap.get(numberString[idx]);
        }
    }

    return resultString;

}

let finalString = numberToPhonetic(numsListString, numberMap);
process.stdout.write(finalString);


