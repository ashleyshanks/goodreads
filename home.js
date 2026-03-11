//get data
let dataLoadedSuccess = false;

const initializeBookData = () => {
  //attempt to load curr read, prev read, recommendeded
  const currReading = JSON.parse(localStorage.getItem("currReading")) || [];
  const prevRead = JSON.parse(localStorage.getItem("prevRead")) || [];
  const recommended = JSON.parse(localStorage.getItem("recommended")) || [];

  return { currReading, prevRead, recommended };
};

let { currReading, prevRead, recommended } = initializeBookData();
let books = {};

//check to see if items existed in local storage
const getBooks = async () => {
  if (
    currReading.length === 0 ||
    prevRead.length === 0 ||
    recommended.length === 0
  ) {
    //load unsuccessful
    //create copy of books.json
    const response = await fetch(
      "https://ashleyshanks.github.io/goodreads/books.json"
    );
    const data = await response.json();
    return structuredClone(data);
  } else {
    //load successful
    //load copy of book obj array
    dataLoadedSuccess = true;
    return JSON.parse(localStorage.getItem("books"));
  }
};

//--populate five books into previously read if not done already--
const renderPrevRead = (books) => {
  let count = 0;
  prevRead = [];
  while (count < 5) {
    let bookID = `b${Math.floor(Math.random() * 27) + 1}`;
    //loop through books obj array to find matching book
    for (const book of books) {
      if (book.id === bookID) {
        if (!book.used) {
          prevRead.push({ id: book.id, dateRead: null, myRating: null });
          count++;
          book.used = true;
        }
      }
    }
  }
  //--add info into temp prev read obj array--
  for (const book of prevRead) {
    book.dateRead = `2025-${Math.floor(Math.random() * 11) + 1}-${
      Math.floor(Math.random() * 29) + 1
    }`;
    book.myRating = Math.round(Math.random() * 5);
  }

  return prevRead;
};

const loadData = async () => {
  console.log("check");
  books = await getBooks();

  if (!dataLoadedSuccess) {
    prevRead = renderPrevRead(books);
  }

  console.log("prevRead is..");
  console.log(prevRead);
};

loadData();

//if it is successful, load copy of book obj array
//if not //make boolean booksloaded false recopy og
//book obj array for all are unused, and begin below functions

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
