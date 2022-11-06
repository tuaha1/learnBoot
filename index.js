
// console.log(sequence.length);

// let current = '';
// for(let i = sequence.length; i >= 0; i--){
//     current += sequence[i];
//     console.log(sequence[i]);
// }

// console.log(current);










// const sequence = "ilikeicecream";
// const dictionary = ["i" , "like" , "ice" , "cream" , "icecream"];

// let result = [];

// for(let i = sequence.length; i >= 0; i--){
    
//     for(let x = 0; x < sequence.length; x++){
        
//         const current = sequence.slice(x,i);
//         // console.log(current);
        
//         for(let j = 0; j < dictionary.length; j++){
//             console.log(current, dictionary[j]);
            
//             if(current == dictionary[j]){
//                 result.push(dictionary[j]);
//                 dictionary.splice(j, 1);
//             }
            
//         }
        
//         console.log('-------');
        
//     }
// }

// console.log("result: ", result);


// for(let i = sequence.length; i >= 0; i--){
    
//     const current = sequence.slice(0,i);

//     for(let j = 0; j < dictionary.length; j++){
//         console.log(current, dictionary[j]);

//         if(current == dictionary[j]){
//             result.push(dictionary[j]);
//         }
//     }
    
//     console.log('-------');
// }
















































// const dictionaryWords = ["i", "like", "ice", "cream", "icecream"];
// const sequence = "ilikeicecream";

// let current = "";
// let result = "";


//creat a forloop to traverse the sequnce array
// for (let i = 0; i < sequence.length; i++) {

    //add one lettter to current variable on each iteration
    // current += sequence[i];

    // create a variable to store elements of dictionaryWords
    // let dictionaryElement;

    //create a for loop to traverse dictionaryWords array
    // for (let d = 0; d < dictionaryWords.length; d++) {

        //store each dictionaryelement in a variable
        // dictionaryElement = dictionaryWords[d];

        //create a variable to store the letters of elements present in the dictionary array
        // let storeLetter = "";

        //create a forloop to traverse each element in the dictionary array
//         for (let x = 0; x < dictionaryElement.length; x++) {

//             storeLetter += dictionaryElement[x];
//             console.log("stored letter: ", storeLetter);
//             console.log("current letter: ", current)
//             if (current == storeLetter) {
//                 result += storeLetter;
//             }

//         }


//     }

// }




// let current = "";
// let result = "";

// for (let i = 0; i < sequence.length; i++) {
//     current += sequence[i];
//     console.log('current sequence word: ', current);

//     let dictWord;
//     for (let j = 0; j < dictionaryWords.length; j++) {
//         dictWord = dictionaryWords[j];
//         console.log("dictWord: ", dictWord);


//         let currentLetter = "";
//         for (x = 0; x < dictWord.length; x++) {
//             currentLetter += dictWord[x];
//             console.log("dictLetters: ", currentLetter);

//             if (currentLetter == dictWord) {
//                 result += currentLetter + ' ';
//                 current = "";
//             }
//         }



//     }

// }


// console.log("result: ", result);



// const para = "(((((abc)))((dde))((((((tr)))"
// console.log(para.length)

// let values = [];

// for(let i = 0; i < para.length; i++){
//     if(para[i + 1] == "(" || para[i - 1] == ")" || para[i + 1] == ")" || para[i - 1] == "("){
//         if(para[i] != "(" && para[i] != ")"){
//             values.push(i);
//         }
//     }
// }

// for(let i = 0; i < values.length; i = i+2){
//     let left = values[i];
//     let right = values[i + 1];
//     console.log(left, right);
    
//     if(para[left + 1] == "("){
        
//     }
    
// }


// console.log(values);