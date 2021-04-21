/** 
 * @desc script.js => This script hold functions for user interaction, manipulations,output generation and output display. 
 * @author Nesh
 * @required index.html, server.js
 **/

/* Global Variables */

var getQuantityValueFromUser = 0;
var wordSearchValue = "";
var wordSearchValueMeasuredLength = 0;

/* @desc assignToCorrectWordLengthEndPoint => This function will fetch correct data from dictionary according to user input */

function assignToCorrectWordLengthEndPoint(passedWordLengthQuantity, passedWordAsParams) {

    let assignProperWordLength = parseInt(passedWordLengthQuantity);
    let url = "http://localhost:3000/";
    let workingWordParams = passedWordAsParams;

    switch (assignProperWordLength) {
        case 0:
            break;
        case 1:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch(url + "oneWordLengthItems").then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "oneWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 2:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch(url + "twoWordLengthItems").then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "twoWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 3:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/threeWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "threeWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 4:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/fourWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "fourWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 5:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/fiveWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "fiveWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 6:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/sixWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "sixWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 7:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/sevenWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "sevenWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 8:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/eightWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "eightWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 9:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/nineWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "nineWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 10:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/tenWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "tenWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 11:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/elevenWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "elevenWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 12:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/twelveWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "twelveWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 13:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/thirteenWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "thirteenWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 14:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/fourteenWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "fourteenWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 15:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/fifteenWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "fifteenWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 16:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/sixteenWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "sixteenWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 17:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/seventeenWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "seventeenWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 18:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/eighteenWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "eighteenWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 19:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/nineteenWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "nineteenWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 20:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/twentyWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "twentyWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 21:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/twentyOneWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "twentyOneLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 22:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/twentyTwoWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "twentyTwoWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 23:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/twentyThreeWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "twentyThreeWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;
        case 24:
            if (workingWordParams === undefined || workingWordParams.length === 0) {
                fetch('http://localhost:3000/twentyFourWordLengthItems').then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            } else {
                fetch(url + "twentyFourWordLengthItems" + "/" + workingWordParams).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data === undefined || data.length === 0) {
                        document.getElementById("arrayOutput").innerHTML = "No such words are available in dictionary. Please try with other word length";
                    } else {
                        document.getElementById("arrayOutput").innerHTML = data;
                    }
                }).catch(function(err) {
                    console.warn('Something went wrong.', err);
                });
            }
            break;

        default:
            // switch ends here

    }
}


/* @desc checkWordLengthValidation=> This function will check for input validations*/

function checkWordLengthValidation(chosenWordLength, wordSearchPatternLength) {
    var quantityValueHolder, validationText, validationCorrectionFlag;
    quantityValueHolder = Number(chosenWordLength);

    if (isNaN(quantityValueHolder) || quantityValueHolder < 1 || quantityValueHolder > 24) {
        validationText = "Input is not valid. Please Enter value between 1 and 24";
        validationCorrectionFlag = false;
    } else {

        if (quantityValueHolder !== Number(wordSearchPatternLength)) {
            validationText = "Word length entered is not correct for entered word search pattern. Keep word length in both inputs same.";
            validationCorrectionFlag = false;
        } else {
            validationText = "";
            validationCorrectionFlag = true;
        }
    }
    document.getElementById("validationWordLengthOutput").innerHTML = validationText;
    return validationCorrectionFlag;
}

/* @desc form event listener=> This function will listen for form submission event*/

const element = document.querySelector('form');
element.addEventListener('submit', event => {
    event.preventDefault();
});


/* @desc calculateProcess => This function will trigger when user clicks submit button and perform actions to gather output from the dictionary */
function calculateProcess() {

    // clear the initialImage
    document.querySelector(".initialProcessImage").style.display = "none";

    // clear output section desk (viewerOutputDesk)
    document.querySelector(".viewerOutputDesk").style.display = "none";

    // Get wordlength value from the user
    getQuantityValueFromUser = document.getElementById("quantity").value;

    // Get search value from the user
    wordSearchValue = document.getElementById("wSearch").value;
    wordSearchValueMeasuredLength = wordSearchValue.length;

    // Input Validation Call For Word Length
    let verifyValidationCorrection = checkWordLengthValidation(getQuantityValueFromUser, wordSearchValueMeasuredLength);
    var convertedCapitalWordSearchValue = wordSearchValue.toUpperCase();

    if (verifyValidationCorrection === true) {
        assignToCorrectWordLengthEndPoint(document.getElementById("quantity").value, convertedCapitalWordSearchValue);
        document.querySelector(".viewerOutputDesk").style.display = "block";
    } else {
        document.querySelector(".viewerOutputDesk").style.display = "none";
    }
}

/* @desc InstructionsCard => This function will trigger when user clicks Instruction Panel */

var card = document.querySelector('.card');
card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
});

/*  @desc Copyright Year:  getCopyRightCurrentYear => This function will get value of year dynamically */

function getCopyRightCurrentYear() {
    var today = new Date();
    var year = today.getFullYear();
    return year;
}

document.getElementById("copyRightYear").innerHTML = getCopyRightCurrentYear();