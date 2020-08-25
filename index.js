
function fetchBooks() {

  return(
    fetch("https://anapioficeandfire.com/api/books")
    .then(function(response) {
      return response.json();
    })
    .then(function(json){
     // return console.log(json)
      return renderBooks(json)
    })
  );

}

// function renderBooks(books) {
function renderBooks(json) {
  const main = document.querySelector('main')
  // books.forEach(book => {
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
