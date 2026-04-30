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
    console.log("username");
    console.log(username);
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

  renderProfileIntro(user);
});
