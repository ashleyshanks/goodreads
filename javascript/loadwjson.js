"use strict";

let bookLists;
let communityReading;

const loadJsonBooks = async () => {
  try {
    //load unsuccessful
    //create copy of books.json
    const response = await fetch(
      "https://ashleyshanks.github.io/goodreads/books.json"
    );
    const books = await response.json();
    return books;
  } catch (exception) {
    console.log(exception);
    return [];
  }
};

//check to see if items existed in local storage, if not, create lists
async function initBookLists() {
  //1 try load from session storage loadSessionStorageBooks()
  let data = loadSessionStorageBooks();

  //2 if no data exists in session storage, use loadJsonBooks(); to get initial book list
  if (!data.books.length) {
    const books = await loadJsonBooks();

    //3 THEN, call renderBookLists with the json data to create bookLists
    data = renderBookLists(books);
  }

  bookLists = data;
}

initBookLists();

function loadSessionStorageBooks() {
  //attempt to load curr read, prev read, suggestedBooks
  let bookData = JSON.parse(sessionStorage.getItem("bookData"));
  const books = bookData?.books || [];
  const currReading = bookData?.currReading || [];
  const prevRead = bookData?.prevRead || [];
  const suggestedInfo = bookData?.suggestedInfo || [];

  return { books, currReading, prevRead, suggestedInfo };
}

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
  return { books, prevRead, currReading, suggestedInfo };
}

function getUsed(books) {
  let usedList = [];

  for (const book of books) {
    if (book.used === true) {
      usedList.push(book.id);
    }
  }

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

//--populate 5 books into previously read--
function renderPrevRead(books) {
  let count = 0;
  let prevRead = [];
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

  return currReading;
}

//--populate 2 books into suggestedBooks--
//returns suggestedInfo. the book suggestions are based on + book suggestions
//suggestedInfo.similarToBook = the book ID
//suggestedInfo.suggested = array of 2 suggestedBooks
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
        Array.isArray(genresArr) &&
        Array.isArray(usedGenresArr) &&
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
function saveData(data) {
  try {
    console.log("attempting save", data);
    sessionStorage.setItem("bookData", JSON.stringify(data));
    console.log("saveData successful");
  } catch (err) {
    console.error("saveData failed", err);
  }
}

//3 books for community reading (NOT SAVED)
function renderCommunityReadBooks(books) {
  let count = 0;
  let randomID = Math.floor(Math.random() * books.length) + 1;
  communityReadingArr = [];

  while (count < 3) {
    for (const book of books) {
      if (!book.used) {
        communityReading.push({
          id: book.id,
          username: getRandomUser(),
          rating: Math.floor(Math.random() * 5) + 1,
        });
      }
    }
  }

  return communityReadingArr;
}

//populate html
// grab the doc nodes you need
//populate prev read, curr read, reccom, comm read

const UIprevReadShelf = document.querySelector("#prev-read section.books");
const UIcurrReadShelf = document.querySelector("#curr-read section.books");
const UIsuggestedShelf = document.querySelector("#suggested section.books");
