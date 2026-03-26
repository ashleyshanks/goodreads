"use strict";

let bookLists;
let communityRead;

console.log("script loaded");

const loadJsonBooks = async () => {
  try {
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

  //4 get community read info + users
  await renderCommunityRead(data.books);
  // WORKS console.log("communityRead inside initBook..");
  // console.log(communityRead);
}

// initBookLists();
// console.log("initialized booklists...");
// console.log(bookLists);
// console.log("communityRead AFTER INIT");
// console.log(communityRead);

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
//{ id: #, dateRead: ##-##-####, myRating: #.# }
function renderPrevRead(books) {
  let prevRead = [];

  // Only consider unused books
  let unusedBooks = books.filter((book) => !book.used);

  let count = 3;

  for (let i = 0; i < count; i++) {
    // pick random index
    let randomIndex = Math.floor(Math.random() * unusedBooks.length);

    // remove book from unusedBooks to prevent duplicates
    let book = unusedBooks.splice(randomIndex, 1)[0];

    prevRead.push({
      id: book.id,
      dateRead: `2025-${Math.floor(Math.random() * 12) + 1}-${
        Math.floor(Math.random() * 28) + 1
      }`,
      myRating: (Math.random() * 5).toFixed(1),
    });

    // mark as used in original array
    book.used = true;
  }

  return prevRead;
}
// --populate 2 books into currently reading--
function renderCurrReading(books) {
  let currReading = [];

  // Filter only unused books first
  let unusedBooks = books.filter((book) => !book.used);

  let count = 2;

  while (currReading.length < count) {
    // pick a random index from unusedBooks
    let randomIndex = Math.floor(Math.random() * unusedBooks.length);
    let book = unusedBooks.splice(randomIndex, 1)[0]; // remove it to avoid duplicates

    currReading.push({
      id: book.id,
      pagesRead: Math.floor(Math.random() * book.pages) + 1,
    });
  }

  return currReading;
}

//--populate 2 books into suggestedBooks--
//returns suggestedInfo. the book suggestions are based on + book suggestions
//suggestedInfo.similarToBook = the book ID
//suggestedInfo.suggested = array of 2 suggestedBooks
function renderSuggested(books) {
  console.log("entering renderSuggested");
  let suggestedBooks = [];
  let suggestionsFound = false;
  let usedList = getUsed(books);
  const unusedBooks = books.filter((book) => !book.used);
  let usedID;

  while (!suggestionsFound) {
    //get random book from usedList
    let randomUsedIndex = Math.floor(Math.random() * usedList.length);
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
    let count = 0;
    for (const book of unusedBooks) {
      let genresArr = book.genre;
      if (
        Array.isArray(genresArr) &&
        Array.isArray(usedGenresArr) &&
        genresArr.length === usedGenresArr.length &&
        usedGenresArr.every((genre) => genresArr.includes(genre))
      ) {
        suggestedBooks.push({ id: book.id });
        count++;
      }

      if (count == 2) {
        suggestionsFound = true;
        break;
      }
    }
  }
  console.log("creating suggestedBooks");
  console.log(suggestedBooks);

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

//----------community reading and users---------------------
async function fetchUsers() {
  try {
    const response = await fetch(
      "https://ashleyshanks.github.io/goodreads/users.json"
    );
    const users = await response.json();
    return users;
  } catch (exception) {
    console.log(exception);
    return [];
  }
}

async function renderCommunityRead(books) {
  let communityReadArr = initCommunityRead(books);

  let users = await fetchUsers();

  for (const entry of communityReadArr) {
    let username = getRandomUser(users);
    entry.username = username;
  }

  communityRead = communityReadArr;
  // WORKS console.log("communityRead inside renderCommunityRead..");
  // console.log(communityRead);
}

// function getRandomUser(users) {
//   let randomUsername;
//   let userFound = false;

//   while (!userFound) {
//     let randomIndex = Math.floor(Math.random() * users.length);

//     let user = users[randomIndex];

//     if (!user.used) {
//       randomUsername = user.username;
//       userFound = true;
//     }
//   }

//   return randomUsername;
// }
function getRandomUser(users) {
  let unusedUsers = users.filter((user) => !user.used);
  if (unusedUsers.length === 0) return null; // nothing available

  let randomIndex = Math.floor(Math.random() * unusedUsers.length);
  return unusedUsers[randomIndex].username;
}
//3 books for community reading (NOT SAVED)
// function initCommunityRead(books) {
//   let count = 0;
//   let randomID = Math.floor(Math.random() * books.length) + 1;
//   let communityReadingInitArr = [];

//   try {
//     while (count < 3) {
//       for (const book of books) {
//         if (!book.used) {
//           communityReadingInitArr.push({
//             id: book.id,
//             username: null,
//             rating: Math.floor(Math.random() * 5) + 1,
//           });

//           count++;
//         }
//       }
//     }
//   } catch (exception) {
//     console.log(exception);
//   }

//   return communityReadingInitArr;
// }
function initCommunityRead(books) {
  let unusedBooks = books.filter((book) => !book.used);
  let communityReadingInitArr = [];

  // pick 5 books
  for (let i = 0; i < 3; i++) {
    let book = unusedBooks[i];
    communityReadingInitArr.push({
      id: book.id,
      username: null,
      rating: Math.floor(Math.random() * 5) + 1,
    });
  }

  return communityReadingInitArr;
}

//populate html
// grab the doc nodes you need
//populate prev read, curr read, reccom, comm read

const UIprevReadShelf = document.querySelector("#prev-read div.books");
const UIcurrReadShelf = document.querySelector("#curr-read div.books");
const UIsuggestedShelf = document.querySelector("#suggested div.books");
const UIcommunityRead = document.querySelector("#community div.books");

async function renderUI() {
  await initBookLists();

  console.log("init done, bookLists..");
  console.log(bookLists);
  renderShelvesUI();
}

renderUI();

//include below in (dataset)
//prevRead { id: #, dateRead: ##-##-####, myRating: #.# }
//currReading {id: #, pagesRead: ###}
//suggestedInfo {similarToBook: id, suggested: [id, id]}
//communityRead {id: #, username: abc, rating: #}
function renderShelvesUI() {
  renderShelfUI(bookLists.prevRead, UIprevReadShelf, "prevRead");
  renderShelfUI(bookLists.currReading, UIcurrReadShelf, "currReading");
  renderShelfUI(
    bookLists.suggestedInfo.suggested,
    UIsuggestedShelf,
    "suggestedBooks"
  );
  renderShelfUI(communityRead, UIcommunityRead, "communityRead");
}

function renderShelfUI(bookList, shelfElement, shelfType) {
  // console.log("inside renderShelfUI");
  // console.log(bookList);
  shelfElement.innerHTML = "";

  bookList.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    //display book images for all
    bookDiv.innerHTML = `<img class='book-img' src='storage/b${book.id}.jpg' alt='book img'>`;

    const progressBar = `<div class='progressbar'>
            <div class='progressbar-bg'></div>
            <div class='progress'></div>
        </div>`;

    //attach data based on type
    switch (shelfType) {
      case "prevRead":
        bookDiv.innerHTML += progressBar;
        bookDiv.dataset.id = book.id;
        bookDiv.dataset.dateRead = book.dateRead;
        bookDiv.dataset.myRating = book.myRating;
        break;

      case "currReading":
        bookDiv.innerHTML += progressBar;
        bookDiv.dataset.id = book.id;
        bookDiv.dataset.pagesRead = book.pagesRead;
        break;

      case "communityRead":
        bookDiv.dataset.id = book.id;
        break;

      case "suggestedBooks":
        console.log("suggested books id");
        console.log(book.id);
        bookDiv.dataset.id = book.id;
        break;
    }

    shelfElement.appendChild(bookDiv);
    renderProgressUI();
  });
}

function renderProgressUI() {
  renderPrevReadProgress();
  renderCurrReadingProgress();
}

function renderPrevReadProgress() {
  const prevReadBooks = UIprevReadShelf.querySelectorAll(".book");

  prevReadBooks.forEach((book) => {
    const progressBar = book.querySelector(".progress");
    if (progressBar) {
      setTimeout(() => {
        progressBar.style.width = "100%";
      }, 50);
    }
  });
}

function renderCurrReadingProgress() {
  const currReadingBooks = UIcurrReadShelf.querySelectorAll(".book");

  currReadingBooks.forEach((book) => {
    const progressBar = book.querySelector(".progress");
    //fix me, not sure if bookID is saved as a number or string ?
    const bookID = book.dataset.id;
    const pagesRead = Number(book.dataset.pagesRead);

    const fullBook = bookLists.books.find((book) => book.id == bookID);

    if (progressBar && fullBook && fullBook.pages) {
      const percentRead = Math.floor((pagesRead / fullBook.pages) * 100);
      setTimeout(() => {
        progressBar.style.width = `${percentRead}%`;
      }, 50);
    }
  });
}
