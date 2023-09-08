// Instructions :
// Create a function that takes a date object and return string in the following format: YYYYMMDDHHmmSS.

// The format should contain a 4 digit year, 2 digit month, 2 digit day, 2 digit hour(00-23), 2 digit minute and 2 digit second.
// If any of the value has only single digit, you must use zero prefix, so that the result string length is always the same.

// Examples

// formatDate(new Date(2020, 6, 4, 8, 0, 0)) ➞ "20200704080000"

// formatDate(new Date(2019, 11, 31, 23, 59, 59)) ➞ "20191231235959"

// formatDate(new Date(2020, 6, 4)) ➞ "20200704000000"


// Notes
// Assume Date year input will always be greater than 1970.

// Try not to rely on the default Date.toString() output in your implementation.

// Be aware that the Date's month field is zero based (0 is January and 11 is December).




  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
  
    return `${year}${month}${day}${hour}${minute}${second}`;
  }
  
  const date = new Date();
  const formattedDate = formatDate(date);
  console.log(formattedDate);



  function formatDate(date = new Date()) {
  const year = date.toLocaleString('default', {year: 'numeric'});
  const month = date.toLocaleString('default', {
    month: '2-digit',
  });
  const day = date.toLocaleString('default', {day: '2-digit'});

  return [year, month, day].join('-');
}

// 2023-07-26 (YYYY-MM-DD)
console.log(formatDate(new Date()));

//2025-05-09 (YYYY-MM-DD)
console.log(formatDate(new Date(2025, 4, 9)));







