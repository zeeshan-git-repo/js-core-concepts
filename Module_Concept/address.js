var city = "HYD";

function getAddress(newCity) {
    console.log("Address from address.js file");
    console.log("City is: " + city);
    console.log("New City is: " + newCity);
}
function printCity() {
    console.log("printCity is: " + city);
}
export default getAddress;
// export default printCity;
// Note: Only one default export is allowed per module