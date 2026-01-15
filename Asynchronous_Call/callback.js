// Simulated async functions using callbacks
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Fetched user from DB");
    callback(null, { id: id, name: "Zeeshan" });
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    console.log("Fetched posts for user");
    callback(null, [{ id: 101, title: "JavaScript Promises" }]);
  }, 1000);
}

function getComments(postId, callback) {
  setTimeout(() => {
    console.log("Fetched comments for post");
    callback(null, ["Great article!", "Very helpful"]);
  }, 1000);
}

// Nested callbacks (callback hell)
getUser(1, (err, user) => {
  if (err) return console.error(err);

  getPosts(user.id, (err, posts) => {
    if (err) return console.error(err);

    getComments(posts[0].id, (err, comments) => {
      if (err) return console.error(err);

      console.log("Final Result:", comments);
    });
  });
});