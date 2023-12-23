export function createPhoneNumber(numbers){
    let phoneNum = '';
    let count = 0; // add missing semicolon
    phoneNum += '(';
    while(count < 3){
        phoneNum += numbers[count];
        count++;
    }
    phoneNum += ') '; // add missing semicolon
    while(count < 6){
        phoneNum += numbers[count];
        count++;
    }
    phoneNum += '-';
    while(count <= numbers.length -1){ // update the condition
        phoneNum += numbers[count];
        count++;
    }
    return phoneNum;
}

// createPhoneNumber([1,2,3,4,5,6,7,8,9,0]); // => returns "(123) 456-7890"