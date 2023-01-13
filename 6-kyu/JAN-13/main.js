/*
Everybody wants to become a millionaire, don't you? In this kata, we'll evaluate a game of "Who Wants to Be A Millionaire?"

* Note that we use a custom game format in this kata!

"Calculate the total cash prize a player earned while playing a game of "Who Wants to Be A Millionaire?", given the prize fund for each question, the correct answers, and the actions the player made during the game."
Input

prize fund:
an array containing 15 integers, each being the prize fund for the corresponding question. For instance: [100, 200, 300, 400, 800, ...]

correct answers:
an array containing 15 letters, each being the correct answer for the corresponding question. The letters represent each of the four possible answers: "A", "B", "C", "D"

player actions:
an array containing at most 15 strings (less if game ended earlier), each being one or more actions the player made for the corresponding question. Actions the player can take:
1. Answer a question: "A", "B", "C", "D"
2. Walk away before the host asks the next question: "W"
3. Stop after the hosts asks a question, without answering: "X"
4. In addition, the player can use zero, one or more life lines, these are prepended to the player action: "1A", "23X", "3B", ...
Possible life lines:
1. "1" 50/50
2. "2" Phone a Friend
3. "3" Ask the Audience
Output

return an array of 2 integers, the first integer being the total cash prize the player earned playing the game, and the second integer being the total amount of life lines used: example [20000, 1] player earned 20000 total cash prize and used 1 lifeline

Players addicted to risk - 100 random tests
Players taking calculated risk - 100 random tests
Players taking low risk - 100 random tests
Random players - 300 random tests

Perfect Scenario

The game is played by a single player, who's task is to answer questions asked by the host. There is a total of 15 questions to answer, each having a prize fund attached. For each question answered correctly, the player accumulates the prize fund to his total cash prize so far. If all questions are answered correctly, the player wins the maximum amount of cash prize.
Options the player has before proceeding with the next question

Before each question (even the first), the host asks the player if they want to proceed with the question. The player has two options:
1. The player can choose to walk away (player action: "W"), in which case the player leaves the game with the total amount of cash prize collected so far.
2. The player can choose to proceed, in which case the host continues with asking the question.
Options the player has after the host asks a question

After each question, the player is given the choice to either answer the question or stop. However, since the question has already been asked, there is no longer an option to walk away with the total cash prize collected so far. Four possible answers are presented to the player. Here are the options:
1. The player can choose to stop (player action: "X"), in which case the player leaves the game with the amount of cash collected at the last safe haven (explained below).
2. The player can choose to answer the question, in which case the player has to pick one of the four possible answers (player action: "A", "B", "C", "D" (pick one)), after which the host says whether the answer is correct or not.
Additional options the player has after the host asks a question

Before making a final decision after the host asked a question (stop vs answer), the player can choose to use any or all of his remaining life lines (prepended to current player action: "1", "2", "3" (pick 0, 1 or more)).
Life Lines available to the player

The player has 3 life lines available for the entire game of 15 questions. The player can use any number of these life lines or none at all. Each life line can only be used once, and there is no additional restriction on the number of life lines used per question. The life lines are:
1. 50/50: The host takes away two of the possible answers, which are definitely incorrect.
2. Phone a Friend: The player is allowed to phone a friend and discuss the possible answers with that friend.
3. Ask the Audience: The audience can vote on which possible answer they think is correct. The player can take into account the voting results.
The player gives an incorrect answer

If the player decided to answer the question, and gives a wrong answer, the player is eliminated, and leaves the game without any prize cash!
What is a safe haven?

After each n'th question, n being divisible by 5 (5th, 10th, 15th question), the total cash prize collected so far is marked as the safe haven. As explained earlier, when a player stops after the host asked a question, they can collect the amount of cash prize marked at the most recent safe haven.
*/ 

//My solution
function getTotalCashPrize(prizeFund, correctAnswers, playerActions) {
  let lifelines = 0;
  let winning = 0;
  for(let i = 0; i < playerActions.length; i++){
    if(playerActions[i].length > 1){
      lifelines += playerActions[i].length-1;
    }
    if(playerActions[i] === "W"){
      return [prizeFund.slice(0, i).reduce((acc, val)=> acc + val, 0), lifelines];
    } else if(playerActions[i][playerActions[i].length-1] === "X"){
      return [prizeFund.slice(0, i-i%5).reduce((acc, val)=> acc + val, 0), lifelines];
    } else if(playerActions[i][playerActions[i].length-1] !== correctAnswers[i]){
      return [0, lifelines];
    } 
    if (i === playerActions.length-1){
      return [prizeFund.reduce((acc, val)=> acc + val, 0), lifelines];
    }
  }
}
