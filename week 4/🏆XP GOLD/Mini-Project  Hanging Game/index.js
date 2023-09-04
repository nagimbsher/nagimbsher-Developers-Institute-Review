let hidden_word = [];
let input_tmp = "";
let host_word = "";
let player_guess = "";
let attempts_record = "";
let attempts = 10;
let tip = "";
let good_guess = false;

// check that input is letter only
function check_alphabetic(my_str){
    return /^[A-Za-z]*$/.test(my_str);
};

function check_input(check_str){
    let length = check_str.length;
    if (host_word == ""){
        if (length < 8){
            console.log("The word must be at least 8 letters long");
            return false;
        }
        else if (check_alphabetic(check_str) == false){
            console.log("The word must contain English letters only");
            return false;
        }
        else {
            return true;
        };
    }
    else {
        if (length != 1){
            console.log("You can input only 1 letter at a time");
            return false;
        }
        else if (check_alphabetic(check_str) == false){
            console.log("You must input English letters only");
            return false;
        }
        else {
            return true;
        }
    };
};

// get the host word to start guessing
while (host_word == ""){
    input_tmp = prompt("Host, please input a word");
    if (check_input(input_tmp)){
        host_word = input_tmp.toLowerCase()
        hidden_word = Array(host_word.length).fill("*");
    }
    // else if (input_tmp == "stop"){  // test backdoor
    //     break;
    // }
};

// start 10 attempts of guessing
while (attempts >= 0){
    console.log(`You have ${attempts} attempts to guess the word \n ${hidden_word.join("")}`);
    input_tmp = prompt("Guess a letter");
    if (check_input(input_tmp) == false){
        continue;
    };
    if (attempts_record.includes(input_tmp)){
        tip = `You've tried this letter already`;
        continue;
    };
    // else if (input_tmp == "stop"){ // backdoor for test
    //     break;
    // }
    input_tmp = input_tmp.toLowerCase();
    tip = `Sorry, there is no letter ${input_tmp}. Try again!`
    attempts_record = attempts_record.concat(input_tmp + " ");
    for (let i = 0; i < host_word.length; i++){
        if (input_tmp == host_word[i]){
            hidden_word[i] = input_tmp;
            tip = `Good job! there is a letter ${input_tmp}`
            good_guess = true;
        }
    };
    console.log(tip);
    console.log(`You've tried letters: ${attempts_record}`);

    if (host_word == hidden_word.join("")){
        console.log(`You won! The word was "${host_word}"`);
        break;
    };
    
    if (good_guess == false){
        if (--attempts == 0){
            console.log("You lost this one, sory. Better luck next time");
        };
    };
    good_guess = false;
};