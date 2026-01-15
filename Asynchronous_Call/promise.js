//Promises solve the issues of callback-based asynchronous programming: they prevent callback hell by allowing chaining, simplify error handling with a unified .catch(), and give developers more control and predictability over async flows. They also provide powerful combinators (all, race, etc.) to manage multiple async tasks elegantly.

// Simulated async functions returning Promises
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched user from DB");
      resolve({ id: id, name: "Zeeshan" });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched posts for user");
      resolve([{ id: 101, title: "JavaScript Promises" }]);
    }, 1000);
  });
}

function getComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched comments for post");
      resolve(["Great article!", "Very helpful"]);
    }, 1000);
  });
}

// Promise chaining
getUser(1)
  .then(user => getPosts(user.id))
  .then(posts => getComments(posts[0].id))
  .then(comments => {
    console.log("Final Result:", comments);
  })
  .catch(error => {
    console.error("Error occurred:", error);
  });


  //- A Promise in JavaScript represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// - It acts as a placeholder for a value that will be available in the future.
// - Promises have three states:
// - Pending → initial state, neither fulfilled nor rejected.
// - Fulfilled → operation completed successfully, returns a value.
// - Rejected → operation failed, returns a reason (error).

// - Why Promises?
// - They solve the problem of callback hell (nested callbacks that make code unreadable).
// - Provide cleaner, chainable syntax for async operations.
