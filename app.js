// ASYNC BASICS EXERCISE

// Unclear on the instructions in this exercise
// Did not realize we needed to remove the original logs from the file after running it

// 1
let name1 = "Luke Skywalker";

function lukeName() {
  console.log(`Question 1`);
  console.log(name1);
}

function luke(n, callback) {
  setTimeout(() => {
    name1 = n;
    callback(name1);
  }, 1000);
}
luke(`Mark Hamill`, a => {
    console.log(a);
});
lukeName();

// Answer 1
// function luke(n, callback) {
//   setTimeout(() => {
//     name1 = n;
//     callback();
//   }, 1000);
// }
// luke(`Mark Hamill`, lukeName);

// Answer 2
// function lukeName(n, callback){
//   setTimeout(() => {
//     callback(n);
//   }, 1000);
// }
// lukeName(`Mark Hamill`, (name1) => {
//   console.log(name1)
// });

// 2
let name2 = "Han Solo";

function hanName() {
  console.log(`Question 2`);
  console.log(name2);
}

function han(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          name2 = n;
          resolve(name2); // change to resolve();
        }, 2000);
    })
}
han(`Harrison Ford`)
.then(solo => console.log(solo)); // change to han(`Harrison Ford`).then(hanName);
hanName();


// 3
let name3 = "Leia Organa";

function leiaName() {
  console.log(`Question 3`);
  console.log(name3);
}

function leia(n){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          name3 = n;
          resolve(n); // change to resolve();
        }, 3000);
    });
}
async function princess(){
    const organa = await leia('Carrie Fisher');
    console.log(organa);
}
leiaName(princess()); // move leiaName() into the async function and run the princess function outside of it

// Bonus 
// 4
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('First Promise')
    }, 2000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Second Promise')
    }, 3000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Third Promise')
    }, 4000);
  });

// Waits until the longest (Time Wise) Promise is complete before it runs the ".then" (aka Callback function)
Promise.all([p1, p2, p3])
// The value passed in for the "values" parameter are the values returned from each of the Promises still inside an array
.then((values) => {
    console.log(values);
});
