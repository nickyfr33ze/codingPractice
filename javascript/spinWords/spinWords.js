//import { split } from "postcss/lib/list";
//function spinWords(words){
//  return words.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ')
//}

export function youSpinMeRightRound(words){
    let spunWords = [];
    for (let word of words.split(' ')) {
        if (word.length >= 5){
            spunWords.push(word.split('').reverse().join(''));
        }
        else{
            spunWords.push(word);
        }
    }
    return spunWords.join(' ');

}