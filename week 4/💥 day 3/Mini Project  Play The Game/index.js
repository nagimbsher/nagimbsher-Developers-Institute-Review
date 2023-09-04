function playTheGame(){
    let attempts = 0;
    let answer_tmp = "";
    let computer_number = (Math.floor(Math.random() * 10) + 1);
    let user_number="";
    if (confirm("Do you want to play a game?") == false){
        alert("No problem, Goodbye");
    }
    else{
        while(attempts < 4){
            user_number = prompt("give a number from 1 to 10")
            // if (user_number == "stop"){ //backdoor stop
            //     break;
            // }  
            if (isNaN(user_number)){
                alert("Sorry Not a number, try again");
                continue;
            }
            else{
                user_number = parseInt(user_number);  
                if (user_number <= 0 || user_number > 10 ){
                    alert("Sorry it’s not a good number, try again");
                    continue;    
                }
                else{
                    if (user_number == computer_number){
                        alert("WINNER, WINNER! Chicken dinner!");
                        break;
                    }
                    else{
                        if (user_number > computer_number){
                            answer_tmp = "your number is bigger"
                        }
                        else{ 
                            answer_tmp = "your number is smaller"
                        }
                        alert(`Sorry, that's wrong, ${answer_tmp}. You have ${3-attempts} more attempts`);
                        attempts++
                        continue;
                    }                    
                }
            }
        
        }
    }
    if (attempts == 3) {alert("Sorry... you've lost the game")};   
};