//get data

const loadData = () => {
  //attempt to load curr read, prev read, recommendeded
  const currReading = JSON.parse(localStorage.getItem("currReading")) || [];
  const prevRead = JSON.parse(localStorage.getItem("prevRead")) || [];
  const recommended = JSON.parse(localStorage.getItem("recommended")) || [];

  return { currReading, prevRead, recommended };
};

const { currReading, prevRead, recommended } = loadData();

//check to see if items existed in local storage
if (
  currReading.length === 0 ||
  prevRead.length === 0 ||
  recommended.length === 0
) {
  //load unsuccessful
  //create copy of books.json
  fetch("books.json")
    .then((response) => response.json())
    .then((data) => {
      let books = structuredClone(data);
    })
    .catch((error) => console.error("books.json failed to load: ", error));
  console.log("TEST");
  console.log("books");
} else {
  //load successful
  //load copy of book obj array
  let books = JSON.parse(localStorage.getItem("books"));
}

//if it is successful, load copy of book obj array
//if not //make boolean booksloaded false recopy og
//book obj array for all are unused, and begin below functions

//--populate five books into previously read if not done already--
//start count at 0
//loop until count is 5
//get a random number 1-27
//make sure this number b# is not used
//add to prev read obj array
//mark as used
//add to count
//--add info into temp prev read obj array--
//give each a random date using 2025 as year
//give random rating
//--done--

//--populate 2 books into currently reading if curr read obj does not exist--
//start count at 0
//loop until count is 2
//get a random number 1-27
//make sure this number b# is not used
//add to curr read obj array
//mark as used
//add to count
//save these books into a temp curr read obj array
//save book total pages into temp var
//get random number for pages read using pages var
//--done--

//--populate 2 books into recommended if recc array is not filled--
//start counter at 0
//while loop through books array until count is 2
//check to make sure book is not used
//for first book, save genres list in temp var
//add first book id into recommended array
//add to count
//mark as used in original book obj
//if genres list var exists, go into a second loop through book obj array
//check book is not used
//check book genre matches genre var
//if it not used and matches genre var, add to recc array
//add count
//--done--

//save curr read, prev, recommended, and book obj array copy
//make sure this save only lasts until site is closed

//end primary functions, below will not be saved

//--populate 3 books into what community is reading--
//start 0 count
//loop through book obj arr until count is 3
//get random number 1-27
//check to see if book w random number id is used
//if not used, add to comm read array
//mark as used
//add to count

//populate html
// grab the doc nodes you need
//populate prev read, curr read, reccom, comm read
