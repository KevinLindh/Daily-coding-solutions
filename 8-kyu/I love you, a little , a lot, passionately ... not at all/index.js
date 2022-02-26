/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/javascript
*/

// My solution

function howMuchILoveYou(nbPetals) {
  let amount = (nbPetals-1)%6;
  switch(amount){
      case 0:
      return "I love you"
      break;
      case 1:
      return "a little"
      break;
      case 2:
      return "a lot"
      break;
      case 3:
      return "passionately"
      break;
      case 4:
      return "madly"
      break;
      case 5:
      return "not at all"
      break;
  }
}
