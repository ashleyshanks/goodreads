"use strict";

console.log("script loaded");

const initializeBookData = () => {
  //attempt to load curr read, prev read, suggestedBooks
  let bookData = JSON.parse(sessionStorage.getItem("bookData"));
  const currReading = JSON.parse(sessionStorage.getItem("currReading")) || [];
  const prevRead = JSON.parse(sessionStorage.getItem("prevRead")) || [];
  const suggestedBooks =
    JSON.parse(sessionStorage.getItem("recommended")) || [];

  return { currReading, prevRead, suggestedBooks };
};

let { currReading, prevRead, suggestedBooks } = initializeBookData();
let books = [];

//check to see if items existed in local storage, if not, create lists
const getBooks = async () => {
  if (
    currReading.length === 0 ||
    prevRead.length === 0 ||
    suggestedBooks.length === 0
  ) {
    try {
      //load unsuccessful
      //create copy of books.json
      const response = await fetch(
        "https://ashleyshanks.github.io/goodreads/books.json"
      );
      books = await response.json();
      // instead of returning, call functions that use books
      console.log("calling renderBookLists");
      renderBookLists(books);
    } catch (exception) {
      console.log(exception);
    }
  } else {
    //load successful
    //load copy of book obj array
    return JSON.parse(localStorage.getItem("books"));
  }
};

getBooks();

function renderBookLists(books) {
  markUnused(books);
  let prevRead = renderPrevRead(books);
  markUsed(books, prevRead);
  let currReading = renderCurrReading(books);
  markUsed(books, currReading);
  let suggestedInfo = renderSuggested(books);
  let suggestedBooks = suggestedInfo.suggested;
  markUsed(books, suggestedBooks);

  saveData({ books, prevRead, currReading, suggestedInfo });
}

function getUsed(books) {
  let usedList = [];

  for (const book of books) {
    if (book.used === true) {
      usedList.push(book.id);
    }
  }

  console.log("used list is");
  console.log(usedList);

  return usedList;
}

function markUnused(books) {
  for (const book of books) {
    book.used = false;
  }
  return books;
}

function markUsed(books, bookList) {
  for (const usedBook of bookList) {
    let usedID = usedBook.id;
    for (const book of books) {
      if (usedID === book.id) {
        book.used = true;
      }
    }
  }
}

//--populate five books into previously read--
function renderPrevRead(books) {
  let count = 0;
  prevRead = [];
  while (count < 5) {
    let bookID = Math.floor(Math.random() * 27) + 1;
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
    book.myRating = (Math.random() * 5).toFixed(1);
  }

  return prevRead;
}

// --populate 2 books into currently reading--
function renderCurrReading(books) {
  let currReading = [];
  let count = 0;
  while (count < 2) {
    let bookID = Math.floor(Math.random() * 27) + 1;

    //ensure random selection is unused
    for (const book of books) {
      if (bookID === book.id) {
        if (book.used === false) {
          currReading.push({
            id: book.id,
            pagesRead: Math.floor(Math.random() * book.pages) + 1,
          });
        }

        count++;
      }
    }
  }

  // console.log("currReading is...");
  // console.log(currReading);

  return currReading;
}

//--populate 2 books into suggestedBooks--
function renderSuggested(books) {
  let suggestedBooks = [];
  let count = 0;
  let usedList = getUsed(books);
  let usedID;

  while (count < 2) {
    //get random book from usedList
    let randomUsedIndex = Math.floor(Math.random() * usedList.length) + 1;
    //get the id to look up genre in og books arr
    usedID = usedList[randomUsedIndex];
    //grab the genre list from the book
    let usedGenresArr;
    for (const book of books) {
      if (book.id === usedID) {
        usedGenresArr = book.genre;
      }
    }

    //attempt to find 2 unused books with the same genre arrays
    for (const book of books) {
      let genresArr = book.genre;
      if (
        genresArr.length === usedGenresArr.length &&
        usedGenresArr.every((genre) => genresArr.includes(genre))
      ) {
        suggestedBooks.push(book.id);
        count++;
      }
    }
  }

  let suggestionInfo = { similarToBook: usedID, suggested: suggestedBooks };

  return suggestionInfo;
}

//save curr read, prev, recommended, and book obj array copy
//make sure this save only lasts until site is closed
function saveData(data) {
  sessionStorage.setItem("bookListData", JSON.stringify(data));
}

//attempt to load data from session storage
//if the data does not exist, do getBooks() should be able to get rid of the
//if statement inside getBooks() and instead rely on if data exists, set variables, if not
//do getBooks

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
