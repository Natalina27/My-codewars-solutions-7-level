/*Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

    You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

    Examples:

spongeMeme("stop Making spongebob Memes!") // => 'StOp mAkInG SpOnGeBoB MeMeS!'
spongeMeme("colored teens cant Be successful in tech") // =>'CoLoReD TeEnS CaNt bE SuCcEsSfUl iN TeCh'*/
//My solution:

function spongeMeme(s) {
    let arr= s.split('')
    let arr1=[];
    for (let i=0; i<s.length; i++){
        if ((i+1) % 2){
            arr1+=(arr[i]+'').toUpperCase();
        }else{
            arr1+=(arr[i]+'').toLowerCase();
        }
    }
    return arr1;
}
/* or the best one:
function spongeMeme(sentence) {
return sentence.split('').map((v,i) => i % 2 ? v.toLowerCase(): v.toUpperCase()).join('');
}
*/
