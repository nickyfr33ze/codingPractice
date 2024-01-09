import { youSpinMeRightRound } from './spinWords.js';
import { test, expect } from 'vitest';

test('words with length less than 5 should remain unchanged', () => {

    expect(youSpinMeRightRound("Hello world")).toBe("olleH dlrow");
}
);

test('words with length equal to 5 should be reversed', () => {
    
        expect(youSpinMeRightRound("apple orange")).toBe("elppa egnaro");
    }
);

test('words with length greater than 5 should be reversed', () => {

    expect(youSpinMeRightRound("programming is fun")).toBe("gnimmargorp is fun");
}
);

test('empty string should return an empty string', () => {
    
        expect(youSpinMeRightRound("")).toBe("");
    }
);

test('words with length equal to 5 should be reversed, multiple words', () => {
    
        expect(youSpinMeRightRound("hello world, how are you")).toBe("olleh ,dlrow how are you");
    }
);


//// Test case 1: words with length less than 5 should remain unchanged
//console.log(youSpinMeRightRound("Hello world")); // Output: Hello world
//
//// Test case 2: words with length equal to 5 should be reversed
//console.log(youSpinMeRightRound("apple orange")); // Output: elppa orange
//
//// Test case 3: words with length greater than 5 should be reversed
//console.log(youSpinMeRightRound("programming is fun")); // Output: gnimmargorp is fun
//
//// Test case 4: empty string should return an empty string
//console.log(youSpinMeRightRound("")); // Output: 
//
//// Test case 5: words with length equal to 5 should be reversed, multiple words
//console.log(youSpinMeRightRound("hello world, how are you")); // Output: olleh world, how are you