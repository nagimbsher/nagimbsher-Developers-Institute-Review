const list = document.getElementsByClassName('listBooks');

let allBooks = [
  {
    title: "In search of lost time",
    author: "Marcel Proust",
    image:
      "https://markmanson.net/wp-content/themes/mm-main/images/book-cover-subtle-art.png",
    alreadyRead: true,
  },
  {
    title: "Ulysses",
    author: "James Joyce",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2MIyCvK7XVvlG_0j7kVuC9yz59acEq-hUXg&usqp=CAU",
    alreadyRead: false,
  },
];

const table = document.createElement("table")


for (let i = 0; i < allBooks.length; i++){
    let row = table.insertRow(i);
    let img = `<img style="width:100px" src = ${allBooks[i].image}/>`;
    row.innerHTML = allBooks[i].title + ' written by ' + allBooks[i].author + " " + img;
    if (allBooks[i].alreadyRead == true) {
        row.style.color = 'red'
    }
}

list[0].appendChild(table)