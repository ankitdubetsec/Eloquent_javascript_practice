// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

function camelize(str) {
  let arr = str.split("-");
  console.log(arr);
  arr = arr
    .map((word, ind) => {
      if (ind != 0) {
        return word[0].toUpperCase() + word.slice(1);
      }

      return word;
    })
    .join("");
  console.log(arr);
}

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");

let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
arr.sort((a, b) => b - a);

console.log(arr); // 8, 5, 2, 1, -10
