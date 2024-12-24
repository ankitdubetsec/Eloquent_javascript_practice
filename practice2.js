let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];
console.log(users);

// let usersMapped =
/* ... your code ... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

let usersMapped = users.map((name) => {
  return {
    fullName: name.name + " " + name.surname,
    id: name.id,
  };
});
console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
console.log(usersMapped);
