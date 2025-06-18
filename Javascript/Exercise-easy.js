let fruits = ["Apple", "Pear", "Pineapple"];
fruits.shift(); //Delete first items or like that
console.log(fruits);

//Exercise #2
let numbers = [2, 3, 5, 6, 10];
let NewNumber = 1;

numbers.push(NewNumber);
console.log(numbers);

//Exercise #3
let Word = ["One"]
let FirstWord = "No";

Word.unshift(FirstWord);
console.log(Word);

//Exercise #4
let colors = ["blue", "red", "yellow"];
let LastColor = colors.pop();
console.log(colors);


//For Loop
let sentence = "This is a sentence"
for(let word of sentence){console.log(word)}


//exer 2
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//Exer 3
let palabra = "hola";
for (let i in palabra) {
  console.log(`Posición: ${i}, Carácter: ${palabra[i]}`);
}
