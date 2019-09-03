import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// const data2 = [
//   "aardvark",
//   "bird",
//   "cheetah",
//   "deer",
//   "elephant",
//   "flamingo",
//   "gorilla",
//   "horse",
//   "impala",
//   "jaguar",
//   "kangaroo",
//   "llama",
//   "moose",
//   "newt",
//   "ostrich",
//   "parrot",
//   "quail",
//   "robin",
//   "snake",
//   "tortoise",
//   "umbrellabird",
//   "vulture",
//   "whale",
//   "x",
//   "yak",
//   "zebra"
// ];

const data3 = [4, 2, 5, 6, 7, 1, 0, 3, 2, 7, 8, 5, 2, 3];

// function useForEach(array) {
//   let newArray = [];
//   data2.forEach(item => {
//     if (item.includes("a")) {
//       // console.log(item);
//       newArray.push(item);
//     }
//   });
//   return newArray;
// }
// console.log(useForEach(data2));

//not working
// function useFor(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     // console.log(array[i])
//     for (let j = 0; j < array[i].length; j++) {
//       if (array[i][j] === "a" && !newArray.includes()) {
//         console.log(array[i]);
//       }
//     }
//   }
//   return newArray;
// }

// console.log(useFor(data2));
let bookArray = [];
// console.log(bookArray)

function addFavoriteBook(bookName) {
  if (!bookArray.includes(bookName)) {
    bookArray.push(bookName);
  } else {
    console.log(`${bookName} is already in this array!`);
  }
}

function printBooks(bookArray) {
  bookArray.forEach(book => console.log(book));
}

addFavoriteBook("The Lord of the Rings");
addFavoriteBook("War of the Worlds");
addFavoriteBook("Jurassic Park");
addFavoriteBook("The Lord of the Rings");
addFavoriteBook("The Hungry Catepillar");

printBooks(bookArray);

function isDivBy(numArray, number) {
  let newArray = [];
  for (let num in numArray) {
    //num is index!!
    if (numArray[num] % number === 0) {
      newArray.unshift(numArray[num]);
    }
    console.log(newArray);
  }
  const sum = newArray.reduce((total, value) => total + value, 0);
  console.log(sum);
}

isDivBy(data3, 3);
