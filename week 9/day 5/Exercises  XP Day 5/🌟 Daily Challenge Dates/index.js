
// function getDateFmString(){
// Date getDateFmString(String dateString)
// {

//  SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//  Date convertedCurrentDate = sdf.parse(dateString);
//  return convertedCurrentDate ;
// }
// }

 

//  Create a function that takes a date object and return string in the following format: YYYYMMDDHHmmSS.

// The format should contain a 4 digit year, 2 digit month, 2 digit day, 2 digit hour(00-23), 2 digit minute and 2 digit second.
// If any of the value has only single digit, you must use zero prefix, so that the result string length is always the same.

// Examples
 
 
formatDate(new Date(2020, 6, 4, 8, 0, 0)) 

formatDate(new Date(2019, 11, 31, 23, 59, 59))

formatDate(new Date(2020, 6, 4)) 


function formatDate(date = new Date()) {
    const year = date.toLocaleString('default', {year: 'numeric'});
    const month = date.toLocaleString('default', {month: '2-digit'});
    const day = date.toLocaleString('default', {day: '2-digit'});
    

    return [year, month, day,].join('-');
  }
  
  
  console.log(formatDate(new Date()));
  
  
  console.log(formatDate(new Date(2025, 4, 9)));
  




  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date) {
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }
  

  console.log(formatDate(new Date()));
  

  console.log(formatDate(new Date('May 04, 2025 05:24:07')));
  













