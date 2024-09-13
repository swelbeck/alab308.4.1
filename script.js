// --------------- Part 1: Refactoring Old Code ---------------

// Variables
let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Memory allocation for future values
let cell = ``;
let row = [];

// for (let i in string) {
//   // For index in string

//   switch (string[i]) {
//     case ",":
//       row.push(cell); // Add cell to row
//       cell = ``; // Emptying cell to reuse
//       break;

//     case "\n":
//       row.push(cell); // Add cell to row
//       console.log(row);
//       cell = ``;
//       row = [];
//       break;

//     default:
//       cell += string[i];
//       break;
//   }
//   // If we reach final character in string, prn
//   if (i == string.length - 1) {
//     row.push(cell); // Add final cell to row
//     console.log(row); // Print row
//   }
// }

// --------------- Part 2: Expanding Functionality ---------------

// Memory allocation for future values
let parentArr = [];
let colCounter = [];
let rowCounter = 0;

for (let i in string) {
  // For index in string

  switch (string[i]) {
    case ",":
      row.push(cell); // Add cell to row
      cell = ``; // Emptying cell to reuse
      break;

    case "\n":
      row.push(cell); // Add cell to row
      parentArr.push(row);
      //   console.log(row);
      colCounter.push(row.length);
      //   rowCounter++;
      cell = ``;
      row = [];
      break;

    default:
      cell += string[i];
      break;
  }
  // If we reach final character in string, prn
  if (i == string.length - 1) {
    row.push(cell); // Add final cell to row
    // console.log(row); // Print row
    parentArr.push(row);
    // console.log(parentArr);
    numColumns = colCounter[0];
    // console.log(numColumns);
  }
}
// console.log(rowCounter);
// console.log(colCounter);
// console.log(parentArr[0])

// --------------- Part 3: Transforming Data ---------------
// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency .
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

let copyParentArr = parentArr.concat();
let header = parentArr.shift();
// const obj = {};
let newArray = [];

parentArr.forEach((line, index) => {
  const obj = {};
  header.forEach((el, i) => {
    // console.log(i, el);
    el = el.toLowerCase();
    obj[el] = line[i];
    // console.log(index, line, i, el, obj)
  });
  newArray.push(obj);

  if (index == parentArr.length - 1) {
    console.log(newArray);
  }
});

// --------------- Part 4: Sorting and Manipulating Data ---------------

// --------------- Part 5: Full Circle ---------------
