document.addEventListener("DOMContentLoaded", async () => {
  const usernameEl = document.getElementById("username");
  const booksCountEl = document.getElementById("book-count");
  const friendCountEl = document.getElementById("friend-count");
  const reviewCountEl = document.getElementById("review-count");
  const fNameEl = document.getElementsByClassName("f-name");
  const lNameEl = document.getElementsByClassName("l-name");
  const bioEl = document.getElementById("bio");

  const favBookDiv = document.querySelector("#book-faves .books");
  const quoteEl = document.querySelector("#user-qt blockquote");
  const quoteAuthorEl = document.querySelector("#user-qt button.tertiary");
  const recapPages = document.querySelector("#pg-ct dd");
  const recapBooks = document.querySelector("#bk-ct dd");
  const recapFriends = document.querySelector("#fr-ct dd");
  const recapGenre = document.querySelector("#top-genre dd");
  const recapAuthTopRev = document.querySelector("#top-reviewed-author dd");
  const recapAuthMostRead = document.querySelector("#most-read-author dd");

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

  async function getProfileInfo() {
    const users = await fetchUsers();
    return users[0];
  }

  // {
  //   "username": "PageTurnerX",
  //   "fName": "Olivia",
  //   "lName": "Hartman",
  //   "img": "u1",
  //   "favBooks": [1, 4, 7, 8, 10],
  //   "bio": "Hi, I'm Ella! I've been using GR forever and I LOVE the new site look. xxx",
  //   "quote": "You cannot swim for new horizons until you have courage to lose sight of the shore.",
  //   "quoteAuthor": "William Faulkner",
  //   "booksCount": 142,
  //   "friendsCount": 85,
  //   "reviewCount": 97,
  //   "used": false,
  //   "topGenre": "Non-Fiction",
  //   "topReviewedAuthor": "Samantha Harvey",
  //   "mostReadAuthor": "Amber Lyon"
  // }
  function renderProfileIntro({
    img,
    username,
    fName,
    lName,
    bio,
    booksCount,
    friendsCount,
    reviewCount,
  }) {
    usernameEl.textContent = username;
    booksCountEl.textContent = booksCount;
    friendCountEl.textContent = friendsCount;
    reviewCountEl.textContent = reviewCount;
    [...fNameEl].forEach((el) => {
      el.textContent = fName;
    });
    [...lNameEl].forEach((el) => {
      el.textContent = lName;
    });
    bioEl.textContent = bio;
  }

  const user = await getProfileInfo();

  async function renderFavBooks({ favBooks }) {
    const books = await loadJsonBooks();

    // get only the user's favorite books
    const favoriteBooks = books.filter((book) => favBooks.includes(book.id));

    // clear container (important if re-rendering)
    favBookDiv.innerHTML = "";

    favoriteBooks.forEach((book) => {
      const bookDiv = document.createElement("div");
      bookDiv.classList.add("book");

      bookDiv.innerHTML = `
        <img class="book-img" src="storage/b${book.id}.jpg" alt="${book.title}">
      `;

      favBookDiv.appendChild(bookDiv);
    });
  }

  function renderUserQuote({ quote, quoteAuthor }) {
    quoteEl.textContent = quote;
    quoteAuthorEl.textContent = quoteAuthor;

    if (quote.length < 48) {
      quoteEl.classList.add("inline");
    } else {
      quoteEl.classList.remove("inline");
    }
  }

  renderProfileIntro(user);
  renderFavBooks(user);
  renderUserQuote(user);
});
