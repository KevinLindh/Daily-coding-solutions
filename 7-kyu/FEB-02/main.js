/*
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/ 

//My solution
export function unluckyDays(year: number): number {
  let answer = 0;
  for(let i = 1; i < 13; i++){
    const date = new Date(`${i} 13, ${year}`);
    if(date.getDay() === 5){
      answer++;
    }
  }
  return answer;
}
