// Why Industry Prefers async/await
// - Cleaner syntax: Code looks synchronous, reducing mental overhead.
// - Better error handling: try...catch is familiar to all developers.
// - Easier debugging: Stack traces are clearer compared to nested .then() chains.
// - Adoption in frameworks: Modern frameworks (React, Angular, Node.js) encourage async/await.
// - Future-proof: It’s part of ES2017+ and widely supported across browsers and Node.js.

// Callbacks are legacy and prone to callback hell. Promises improved readability and error handling, but the industry standard today is async/await because it makes asynchronous code look synchronous, simplifies error handling, and is widely adopted in modern frameworks and libraries.


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


async function fetchData() {
  try {
    const user = await getUser(1);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);

    console.log("Final Result:", comments);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

fetchData();