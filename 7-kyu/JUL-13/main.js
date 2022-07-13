/*
Your retro heavy metal band, VÄxën, originally started as kind of a joke, just because why would anyone want to use the crappy foosball table in your startup's game room when they could be rocking out at top volume in there instead? Yes, a joke, but now all the top tech companies are paying you top dollar to play at their conferences and big product-release events. And just as how in the early days of the Internet companies were naming everything "i"-this and "e"-that, now that VÄxënmänïä has conquered the tech world, any company that doesn't use Hëävÿ Mëtäl Ümläüts in ëvëry pössïblë pläcë is looking hopelessly behind the times.

Well, with great power chords there must also come great responsibility! You need to help these companies out by writing a function that will guarantee that their web sites and ads and everything else will RÖCK ÄS MÜCH ÄS PÖSSÏBLË! Just think about it -- with the licensing fees you'll be getting from Gööglë, Fäcëböök, Äpplë, and Ämäzön alone, you'll probably be able to end world hunger, make college and Marshall stacks free to all, and invent self-driving bumper cars. Sö lët's gët röckïng and röllïng! Pëdal tö thë MËTÄL!

Here's a little cheatsheet that will help you write your function to replace the so-last-year letters a-e-i-o-u-and-sometimes-y with the following totally rocking letters:

A = Ä = \u00c4     E = Ë = \u00cb     I = Ï = \u00cf
O = Ö = \u00d6     U = Ü = \u00dc     Y = Ÿ = \u0178
a = ä = \u00e4     e = ë = \u00eb     i = ï = \u00ef
o = ö = \u00f6     u = ü = \u00fc     y = ÿ = \u00ff
*/

//My solution
function heavyMetalUmlauts(boringText) {
  let answer = '';
  let replace = ['A', 'Ä', 'E', 'Ë', 'I','Ï', 'O', 'Ö', 'U', 'Ü', 'Y', 'Ÿ', 'a', 'ä', 'e', 'ë', 'i','ï', 'o', 'ö', 'u', 'ü', 'y', 'ÿ']
  let newArr = boringText.split('');
  for(let i = 0; i < newArr.length; i++){
    if(replace.includes(newArr[i])){
      answer += replace[replace.indexOf(newArr[i])+1]
    } else {
      answer += newArr[i];
    }
  }
    return answer
}
