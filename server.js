/** 
 * @desc server.js => This app starts a server and listens on port 3000 for connections.
 * @author Nesh
 **/

var express = require('express');
var path = require('path');
var open = require('open');
var port = 3000;
var app = express();

/* Global Variables */

var oneLengthStoreObject = [],
    twoLengthStoreObject = [],
    threeLengthStoreObject = [],
    fourLengthStoreObject = [],
    fiveLengthStoreObject = [],
    sixLengthStoreObject = [],
    sevenLengthStoreObject = [],
    eightLengthStoreObject = [],
    nineLengthStoreObject = [],
    tenLengthStoreObject = [],
    elevenLengthStoreObject = [],
    twelveLengthStoreObject = [],
    thirteenLengthStoreObject = [],
    fourteenLengthStoreObject = [],
    fifteenLengthStoreObject = [],
    sixteenLengthStoreObject = [],
    seventeenLengthStoreObject = [],
    eighteenLengthStoreObject = [],
    ninteenLengthStoreObject = [],
    twentyLengthStoreObject = [],
    twentyOneLengthStoreObject = [],
    twentyTwoLengthStoreObject = [],
    twentyThreeLengthStoreObject = [],
    twentyFourLengthStoreObject = [];

var oneLengthCounter = 0,
    twoLengthCounter = 0,
    threeLengthCounter = 0,
    fourLengthCounter = 0,
    fiveLengthCounter = 0,
    sixLengthCounter = 0,
    sevenLengthCounter = 0,
    eightLengthCounter = 0,
    nineLengthCounter = 0,
    tenLengthCounter = 0,
    elevenLengthCounter = 0,
    twelveLengthCounter = 0,
    thirteenLengthCounter = 0,
    fourteenLengthCounter = 0,
    fifteenLengthCounter = 0,
    sixteenLengthCounter = 0,
    seventeenLengthCounter = 0,
    eighteenLengthCounter = 0,
    ninteenLengthCounter = 0,
    twentyLengthCounter = 0,
    twentyOneLengthCounter = 0,
    twentyTwoLengthCounter = 0,
    twentyThreeLengthCounter = 0,
    twentyFourLengthCounter = 0;

var oneLengthWordStorageCarrier = "",
    twoLengthWordStorageCarrier = "",
    threeLengthWordStorageCarrier = "",
    fourLengthWordStorageCarrier = "",
    fiveLengthWordStorageCarrier = "",
    sixLengthWordStorageCarrier = "",
    sevenLengthWordStorageCarrier = "",
    eightLengthWordStorageCarrier = "",
    nineLengthWordStorageCarrier = "",
    tenLengthWordStorageCarrier = "",
    elevenLengthWordStorageCarrier = "",
    twelveLengthWordStorageCarrier = "",
    thirteenLengthWordStorageCarrier = "",
    fourteenLengthWordStorageCarrier = "",
    fifteenLengthWordStorageCarrier = "",
    sixteenLengthWordStorageCarrier = "",
    seventeenLengthWordStorageCarrier = "",
    eighteenLengthWordStorageCarrier = "",
    nineteenLengthWordStorageCarrier = "",
    twentyLengthWordStorageCarrier = "",
    twentyOneLengthWordStorageCarrier = "",
    twentyTwoLengthWordStorageCarrier = "",
    twentyThreeLengthWordStorageCarrier = "",
    twentyFourLengthWordStorageCarrier = "";


/* @desc Routes creations */

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.use(express.static('src'));
app.use('/css', express.static(__dirname + 'src/css'));
app.use('/js', express.static(__dirname + 'src/js'));
app.use('/img', express.static(__dirname + 'src/images'));
app.use('/json', express.static(__dirname + 'src/json'));


app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});


/* @desc Read the file content */

const fs = require('fs');
let rawdata = fs.readFileSync('src/json/csvjson.json');
const englishDicCompleteData = JSON.parse(rawdata);
createClusters(englishDicCompleteData);



/* @desc Make clusters based on word length */
function createClusters(dataToUse) {
    for (let i = 0; i <= 174888; i++) {
        let wordCountLength = findWordLength(dataToUse[i].word);
        makeGroups(wordCountLength, dataToUse[i].word);
    }
}

/*  @desc Find word length */

function findWordLength(word) {
    return word.toString().length;
}

/* @desc Segregate into groups */

function makeGroups(wordlength, dataItem) {
    switch (wordlength) {
        case 1:
            oneLengthStoreObject[oneLengthCounter] = dataItem;
            oneLengthCounter++;
            break;
        case 2:
            twoLengthStoreObject[twoLengthCounter] = dataItem;
            twoLengthCounter++;
            break;
        case 3:
            threeLengthStoreObject[threeLengthCounter] = dataItem;
            threeLengthCounter = threeLengthCounter + 1;
            break;
        case 4:
            fourLengthStoreObject[fourLengthCounter] = dataItem;
            fourLengthCounter++;
            break;
        case 5:
            fiveLengthStoreObject[fiveLengthCounter] = dataItem;
            fiveLengthCounter++;
            break;
        case 6:
            sixLengthStoreObject[sixLengthCounter] = dataItem;
            sixLengthCounter++;
            break;
        case 7:
            sevenLengthStoreObject[sevenLengthCounter] = dataItem;
            sevenLengthCounter++;
            break;
        case 8:
            eightLengthStoreObject[eightLengthCounter] = dataItem;
            eightLengthCounter++;
            break;
        case 9:
            nineLengthStoreObject[nineLengthCounter] = dataItem;
            nineLengthCounter++;
            break;
        case 10:
            tenLengthStoreObject[tenLengthCounter] = dataItem;
            tenLengthCounter++;
            break;
        case 11:
            elevenLengthStoreObject[elevenLengthCounter] = dataItem;
            elevenLengthCounter++;
            break;
        case 12:
            twelveLengthStoreObject[twelveLengthCounter] = dataItem;
            twelveLengthCounter++;
            break;
        case 13:
            thirteenLengthStoreObject[thirteenLengthCounter] = dataItem;
            thirteenLengthCounter++;
            break;
        case 14:
            fourteenLengthStoreObject[fourteenLengthCounter] = dataItem;
            fourteenLengthCounter++;
            break;
        case 15:
            fifteenLengthStoreObject[fifteenLengthCounter] = dataItem;
            fifteenLengthCounter++;
            break;
        case 16:
            sixteenLengthStoreObject[sixteenLengthCounter] = dataItem;
            sixteenLengthCounter++;
            break;
        case 17:
            seventeenLengthStoreObject[seventeenLengthCounter] = dataItem;
            seventeenLengthCounter++;
            break;
        case 18:
            eighteenLengthStoreObject[eighteenLengthCounter] = dataItem;
            eighteenLengthCounter++;
            break;
        case 19:
            ninteenLengthStoreObject[ninteenLengthCounter] = dataItem;
            ninteenLengthCounter++;
            break;
        case 20:
            twentyLengthStoreObject[twentyLengthCounter] = dataItem;
            twentyLengthCounter++;
            break;
        case 21:
            twentyOneLengthStoreObject[twentyOneLengthCounter] = dataItem;
            twentyOneLengthCounter++;
            break;
        case 22:
            twentyTwoLengthStoreObject[twentyTwoLengthCounter] = dataItem;
            twentyTwoLengthCounter++;
            break;
        case 23:
            twentyThreeLengthStoreObject[twentyThreeLengthCounter] = dataItem;
            twentyThreeLengthCounter++;
            break;
        case 24:
            twentyFourLengthStoreObject[twentyFourLengthCounter] = dataItem;
            twentyFourLengthCounter++;
            break;
        default:
            console.log("no matching lenght found");

    }
}

/* @desc  Make Routes based on word length */

/* OneWordLengthItems */

app.get('/oneWordLengthItems', (request, response) => {
    response.json(oneLengthStoreObject);
});

app.get('/oneWordLengthItems/:word', (request, response) => {
    oneLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(oneLengthWordStorageCarrier, oneLengthStoreObject);
    response.json(outputResponse);
});

/* TwoWordLengthItems */

app.get('/twoWordLengthItems', (request, response) => {
    response.json(twoLengthStoreObject);
});

app.get('/twoWordLengthItems/:word', (request, response) => {
    twoLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(twoLengthWordStorageCarrier, twoLengthStoreObject);
    response.json(outputResponse);
});

/* ThreeWordLengthItems */

app.get('/threeWordLengthItems', (request, response) => {
    response.json(threeLengthStoreObject);
});

app.get('/threeWordLengthItems/:word', (request, response) => {
    threeLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(threeLengthWordStorageCarrier, threeLengthStoreObject);
    response.json(outputResponse);
});

/* FourWordLengthItems */

app.get('/fourWordLengthItems', (request, response) => {
    response.json(fourLengthStoreObject);
});

app.get('/fourWordLengthItems/:word', (request, response) => {
    fourLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(fourLengthWordStorageCarrier, fourLengthStoreObject);
    response.json(outputResponse);
});

/* FiveWordLengthItems */

app.get('/fiveWordLengthItems', (request, response) => {
    response.json(fiveLengthStoreObject);
});

app.get('/fiveWordLengthItems/:word', (request, response) => {
    fiveLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(fiveLengthWordStorageCarrier, fiveLengthStoreObject);
    response.json(outputResponse);
});

/* SixWordLengthItems */

app.get('/sixWordLengthItems', (request, response) => {
    response.json(sixLengthStoreObject);
});

app.get('/sixWordLengthItems/:word', (request, response) => {
    sixLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(sixLengthWordStorageCarrier, sixLengthStoreObject);
    response.json(outputResponse);
});

/* SevenWordLengthItems */

app.get('/sevenWordLengthItems', (request, response) => {
    response.json(sevenLengthStoreObject);
});

app.get('/sevenWordLengthItems/:word', (request, response) => {
    sevenLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(sevenLengthWordStorageCarrier, sevenLengthStoreObject);
    response.json(outputResponse);
});

/* EightWordLengthItems */

app.get('/eightWordLengthItems', (request, response) => {
    response.json(eightLengthStoreObject);
});

app.get('/eightWordLengthItems/:word', (request, response) => {
    eightLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(eightLengthWordStorageCarrier, eightLengthStoreObject);
    response.json(outputResponse);
});

/* NineWordLengthItems */

app.get('/nineWordLengthItems', (request, response) => {
    response.json(nineLengthStoreObject);
});

app.get('/nineWordLengthItems/:word', (request, response) => {
    nineLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(nineLengthWordStorageCarrier, nineLengthStoreObject);
    response.json(outputResponse);
});

/* TenWordLengthItems */

app.get('/tenWordLengthItems', (request, response) => {
    response.json(tenLengthStoreObject);
});

app.get('/tenWordLengthItems/:word', (request, response) => {
    tenLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(tenLengthWordStorageCarrier, tenLengthStoreObject);
    response.json(outputResponse);
});

/* ElevenWordLengthItems */

app.get('/elevenWordLengthItems', (request, response) => {
    response.json(elevenLengthStoreObject);
});

app.get('/elevenWordLengthItems/:word', (request, response) => {
    elevenLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(elevenLengthWordStorageCarrier, elevenLengthStoreObject);
    response.json(outputResponse);
});

/* TwelveWordLengthItems */

app.get('/twelveWordLengthItems', (request, response) => {
    response.json(twelveLengthStoreObject);
});

app.get('/twelveWordLengthItems/:word', (request, response) => {
    twelveLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(twelveLengthWordStorageCarrier, twelveLengthStoreObject);
    response.json(outputResponse);
});

/* ThirteenWordLengthItems */

app.get('/thirteenWordLengthItems', (request, response) => {
    response.json(thirteenLengthStoreObject);
});

app.get('/thirteenWordLengthItems/:word', (request, response) => {
    thirteenLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(thirteenLengthWordStorageCarrier, thirteenLengthStoreObject);
    response.json(outputResponse);
});

/* FourteenWordLengthItems */

app.get('/fourteenWordLengthItems', (request, response) => {
    response.json(fourteenLengthStoreObject);
});

app.get('/fourteenWordLengthItems/:word', (request, response) => {
    fourteenLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(fourteenLengthWordStorageCarrier, fourteenLengthStoreObject);
    response.json(outputResponse);
});

/* FifteenWordLengthItems */

app.get('/fifteenWordLengthItems', (request, response) => {
    response.json(fifteenLengthStoreObject);
});

app.get('/fifteenWordLengthItems/:word', (request, response) => {
    fifteenLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(fifteenLengthWordStorageCarrier, fifteenLengthStoreObject);
    response.json(outputResponse);
});

/* SixteenWordLengthItems */

app.get('/sixteenWordLengthItems', (request, response) => {
    response.json(sixteenLengthStoreObject);
});

app.get('/sixteenWordLengthItems/:word', (request, response) => {
    sixteenLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(sixteenLengthWordStorageCarrier, sixteenLengthStoreObject);
    response.json(outputResponse);
});

/* SeventeenWordLengthItems */

app.get('/seventeenWordLengthItems', (request, response) => {
    response.json(seventeenLengthStoreObject);
});

app.get('/seventeenWordLengthItems/:word', (request, response) => {
    seventeenLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(seventeenLengthWordStorageCarrier, seventeenLengthStoreObject);
    response.json(outputResponse);
});

/* EighteenWordLengthItems */

app.get('/eighteenWordLengthItems', (request, response) => {
    response.json(eighteenLengthStoreObject);
});

app.get('/eighteenWordLengthItems/:word', (request, response) => {
    eighteenLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(eighteenLengthWordStorageCarrier, eighteenLengthStoreObject);
    response.json(outputResponse);
});

/* NineteenWordLengthItems */

app.get('/nineteenWordLengthItems', (request, response) => {
    response.json(ninteenLengthStoreObject);
});

app.get('/nineteenWordLengthItems/:word', (request, response) => {
    nineteenLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(nineteenLengthWordStorageCarrier, ninteenLengthStoreObject);
    response.json(outputResponse);
});

/* TwentyWordLengthItems */

app.get('/twentyWordLengthItems', (request, response) => {
    response.json(twentyLengthStoreObject);
});

app.get('/twentyWordLengthItems/:word', (request, response) => {
    twentyLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(twentyLengthWordStorageCarrier, twentyLengthStoreObject);
    response.json(outputResponse);
});

/* TwentyOneWordLengthItems */

app.get('/twentyOneWordLengthItems', (request, response) => {
    response.json(twentyOneLengthStoreObject);
});

app.get('/twentyOneWordLengthItems/:word', (request, response) => {
    twentyOneLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(twentyOneLengthWordStorageCarrier, twentyOneLengthStoreObject);
    response.json(outputResponse);
});

/* TwentyTwoWordLengthItems */

app.get('/twentyTwoWordLengthItems', (request, response) => {
    response.json(twentyTwoLengthStoreObject);
});

app.get('/twentyTwoWordLengthItems/:word', (request, response) => {
    twentyTwoLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(twentyTwoLengthWordStorageCarrier, twentyTwoLengthStoreObject);
    response.json(outputResponse);
});

/* TwentyThreeWordLengthItems */

app.get('/twentyThreeWordLengthItems', (request, response) => {
    response.json(twentyThreeLengthStoreObject);
});

app.get('/twentyThreeWordLengthItems/:word', (request, response) => {
    twentyThreeLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(twentyThreeLengthWordStorageCarrier, twentyThreeLengthStoreObject);
    response.json(outputResponse);
});

/* TwentyFourWordLengthItems */

app.get('/twentyFourWordLengthItems', (request, response) => {
    response.json(twentyFourLengthStoreObject);
});

app.get('/twentyFourWordLengthItems/:word', (request, response) => {
    twentyFourLengthWordStorageCarrier = String(request.params.word);
    let outputResponse = preparatorWordSearch(twentyFourLengthWordStorageCarrier, twentyFourLengthStoreObject);
    response.json(outputResponse);
});

/* @desc  stripCharWord => removes particular character from word. For this application it removes unknown character represented as Hyphen '-' */

function stripCharWord(word) {
    let convertedArray = splitWordIntoCharacters(word);
    let stripTempHolder = convertSplitArrayIntoObject(convertedArray);
    let allKeys = Object.keys(stripTempHolder).filter(k => stripTempHolder[k] === '-');
    for (let i = 0; i < allKeys.length; i++) {
        delete stripTempHolder[allKeys[i]];
    }
    return stripTempHolder;
}

/* @desc  splitWordIntoCharacter => split word into individual character Array */

function splitWordIntoCharacters(word) {
    let outputArray = [];
    outputArray = word.split("");
    return outputArray;

}

/* @desc convertSplitArrayIntoObject => convert the splited Array into Object with ids */

function convertSplitArrayIntoObject(wordArray) {
    let tempObject = Object.assign({}, wordArray);
    return tempObject;
}

/* @desc makeStorageBarn => create storage barn */
function makeStorageBarn(store) {
    var storageBarn = [],
        tempStore = [];
    for (let i = 0; i < store.length; i++) {
        tempStore = splitWordIntoCharacters(store[i]);
        storageBarn[i] = convertSplitArrayIntoObject(tempStore);
    }
    return storageBarn;
}

/* @desc findAllMatch => find matching data from the storageMatchBarn */
function findAllMatch(storageMatchBarn, sampleobject, sampleObjectPorperyToProcessAsArray) {

    var takeLength = storageMatchBarn.length;
    var storageCan = [];

    for (let i = 0; i < takeLength; i++) {
        var testArray = [];
        if (sampleObjectPorperyToProcessAsArray.includes('0')) {
            if (storageMatchBarn[i]['0'] === sampleobject['0']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('1')) {
            if (storageMatchBarn[i]['1'] === sampleobject['1']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('2')) {
            if (storageMatchBarn[i]['2'] === sampleobject['2']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('3')) {
            if (storageMatchBarn[i]['3'] === sampleobject['3']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('4')) {
            if (storageMatchBarn[i]['4'] === sampleobject['4']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('5')) {
            if (storageMatchBarn[i]['5'] === sampleobject['5']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('6')) {
            if (storageMatchBarn[i]['6'] === sampleobject['6']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('7')) {
            if (storageMatchBarn[i]['7'] === sampleobject['7']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('8')) {
            if (storageMatchBarn[i]['8'] === sampleobject['8']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('9')) {
            if (storageMatchBarn[i]['9'] === sampleobject['9']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('10')) {
            if (storageMatchBarn[i]['10'] === sampleobject['10']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('11')) {
            if (storageMatchBarn[i]['11'] === sampleobject['11']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('12')) {
            if (storageMatchBarn[i]['12'] === sampleobject['12']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('13')) {
            if (storageMatchBarn[i]['13'] === sampleobject['13']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('14')) {
            if (storageMatchBarn[i]['14'] === sampleobject['14']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('15')) {
            if (storageMatchBarn[i]['15'] === sampleobject['15']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('16')) {
            if (storageMatchBarn[i]['16'] === sampleobject['16']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('17')) {
            if (storageMatchBarn[i]['17'] === sampleobject['17']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('18')) {
            if (storageMatchBarn[i]['18'] === sampleobject['18']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('19')) {
            if (storageMatchBarn[i]['19'] === sampleobject['19']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('20')) {
            if (storageMatchBarn[i]['20'] === sampleobject['20']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('21')) {
            if (storageMatchBarn[i]['21'] === sampleobject['21']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('22')) {
            if (storageMatchBarn[i]['22'] === sampleobject['22']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        if (sampleObjectPorperyToProcessAsArray.includes('23')) {
            if (storageMatchBarn[i]['23'] === sampleobject['23']) {
                testArray.push(true);
            } else {
                testArray.push(false);
                continue;
            }
        }

        const isBelowThreshold = (currentValue) => currentValue === true;
        if (testArray.every(isBelowThreshold)) {
            storageCan.push(storageMatchBarn[i]);
        }
    }
    return storageCan;
}

/* @desc  createRepresentableOutput => prepares response in form which user can understand or readable */

function createRepresentableOutput(inputData) {
    var outputResponseArray = [];
    for (let data in inputData) {
        let responseData = (((Object.values(inputData[data])).join("")));
        outputResponseArray.push(responseData);
    }
    return outputResponseArray;
}

/* @desc  Preperator Function: preparatorWordSearch => prepares response for word search choices */

function preparatorWordSearch(searchWord, numberedStorageObject) {

    //Task-1- Remove unknown characters '-'  from search word

    let finalSearchWord = stripCharWord(searchWord);

    //Task-2- Create storage barn which contains all objects in form of matched length dictionary words

    let finalstorageMatchBarn = makeStorageBarn(numberedStorageObject);

    //Task-3- Collect property values of finalSearchWord

    let finalSampleObjectPorperyToProcessAsArray = Object.getOwnPropertyNames(finalSearchWord);

    //Task-4- Find all possible match of words for given input searchWord

    let finalMatchedWordsList = findAllMatch(finalstorageMatchBarn, finalSearchWord, finalSampleObjectPorperyToProcessAsArray);

    //Task-5- put all matched words list into representable form

    let finalResponse = createRepresentableOutput(finalMatchedWordsList);

    return finalResponse;

}