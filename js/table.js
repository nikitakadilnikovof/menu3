const url = new URLSearchParams(window.location.search);
console.log(url)

const tableNumber = url.get("table");
console.log(tableNumber)

export default tableNumber;
