/* 
- Rules of hangman -
1. a letter of the alphabet is guessed by the player
2. if the word or phrase contains the letter the player
guessed, the player gets to guess a new letter
3. if the word or phrase does not contain the letter the 
player guessed, a new portion of the hangman is added
4. if the hangman is assembled completely before the 
word or phrase is filled out, the player loses. 

- Action Plan -
1. Create array of possible words and pick one
-loop through the words to identify special game word 
-create an array of letters guessed correctly
-create an array of letters guessed incorrectly
-limit number of guesses to 6 
2. ask user to pick letter
-check to see if special word contains chosen letter
-display if the letter is or is not in special word
-display how many remaining chances player has
3. diplay game state on screen
-display current word status
-display guessed letters that were incorrect 
4 Continue until game over
-ask if player would like to play again