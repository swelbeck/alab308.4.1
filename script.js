// --------------- Part 1: Refactoring Old Code ---------------
console.log(`---------- Part One ----------`);
// Variables
let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Memory allocation for future values
let cell = ``;
let row = [];
// let outerArray = []

for (let i in string) {
  // For index in string

  switch (string[i]) {
    case ",":
      row.push(cell); // Add cell to row
      cell = ``; // Emptying cell to reuse
      break;

    case "\n":
      row.push(cell); // Add cell to row
      // outerArray.push(row)
      console.log(row); //****uncomment****
      cell = ``;
      row = [];
      break;

    default:
      cell += string[i];
      break;
  }
  // If we reach final character in string, print
  if (i == string.length - 1) {
    row.push(cell); // Add final cell to row
    // outerArray.push(row);
    console.log(row); // Print row ****uncomment****
    // console.log(`Part One:`, outerArray)
    // console.log(`^^^End of Part One^^^`);
  }
}

// --------------- Part 2: Expanding Functionality ---------------
console.log(`---------- Part Two ----------`);
// Memory allocation for future values
cell = ``;
row = [];
let parentArr = [];
let colCounter = [];
let rowCounter = 0;

for (let j in string) {
  // For index in string

  switch (string[j]) {
    case ",":
      row.push(cell); // Add cell to row
      cell = ``; // Emptying cell to reuse
      break;

    case "\n":
      row.push(cell); // Add cell to row
      parentArr.push(row);
      colCounter.push(row.length);
      //   rowCounter++;
      cell = ``;
      row = [];
      break;

    default:
      cell += string[j];
      break;
  }
  // If we reach final character in string, print
  if (j == string.length - 1) {
    row.push(cell); // Add final cell to row
    parentArr.push(row);
    console.log(parentArr); // ****uncomment****
    numColumns = colCounter[0];
    // console.log(numColumns);
    // console.log(`^^^End of Part Two^^^`);
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
console.log(`---------- Part Three ----------`);
let copyParentArr = parentArr.concat();
let header = parentArr.shift();
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
// console.log(`^^^End of Part Three^^^`);

// --------------- Part 4: Sorting and Manipulating Data ---------------
console.log(`---------- Part Four ----------`);
// console.log(newArray);
let copyNewArray = newArray.concat();
// console.log(copyNewArray)

// Remove the last element from the sorted array .
copyNewArray.pop();
console.log(`Pop last element:`, copyNewArray);

// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
copyNewArray.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});
console.log(`Splice at index 1:`, copyNewArray);

// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
copyNewArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(`Push object:`, copyNewArray);

/** Finally, use the values of each object within the array and the array’s length property to calculate the
average age of the group. This calculation should be accomplished using a loop. */
//
let ageList = [];
let sum = 0;
let avg = 0;

for (const key in copyNewArray) {
  ageNum = Number(copyNewArray[key].age);
  ageList.push(ageNum);
}

for (i = 0; i < ageList.length; i++) {
  sum += ageList[i];
}
avg = sum / ageList.length;
console.log(`Avg age:`, avg);
// console.log(`^^^End of Part Four^^^`);
// --------------- Part 5: Full Circle ---------------
console.log(`---------- Part Five ----------`);
//As a final task, transform the final set of data back into CSV format.
console.log(copyNewArray);
// What to do
  // Change keys back to a row of strings
  //


// console.log(`^^^End of Part Five^^^`);

