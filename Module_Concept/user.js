export var userCity = "LKO";


// There are two ways to export Javascript code
// 1. Named export (prefix export before the variable/function)
// 2. Default export (using export default keyword)

export function getUser() {
    console.log("User from user.js file");
}

export var userInfo = {
    name: "Zeeshan",
    age: 26,
    city: "LKO"
}
// Any number of named exports are allowed in a module

// But only one default export is allowed in a module