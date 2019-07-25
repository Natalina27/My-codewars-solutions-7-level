/*
In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:

If a letter is a upper case consonants, replace that character with "Iron".
If a letter is a lower case consonants or a non-alpha character, do nothing to that character
If a letter is a upper case vowel, replace that character with "Iron Yard".
If a letter is a lower case vowel, replace that character with "Yard".
Ready?
 */
//My solution:
//1.
function tiyFizzBuzz(sentence){
    return sentence.split('').map((a) => {
        if(/[aeiou]/.test(a)) return 'Yard';
        if(/[AEIOU]/.test(a)) return 'Iron Yard';
        if(/[A-Z]/.test(a)) return 'Iron';
        else return a;
    }).join('');
}
// 2.
// function tiyFizzBuzz(s){
//   let str='';
//   for (let i=0; i<s.length; ++i)
//   {
//     if (s[i]>='A' && s[i]<='Z')
//     {
//       if (s[i]=='A' || s[i]=='E' || s[i]=='I' || s[i]=='O' || s[i]=='U')
//         str+='Iron Yard';
//       else
//         str+='Iron';
//     }
//     else
//     {
//       if (s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u')
//         str+='Yard';
//       else
//         str+=s[i];
//     }
//   }
//   return str;
// }
// 3.
// function tiyFizzBuzz(sentence){
//   return sentence.replace(/[A-Zaeiou]/g,m=>/[aeiou]/.test(m)?'Yard':/[AEIOU]/.test(m)?'Iron Yard':'Iron');
// }
