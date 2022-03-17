document.addEventListener("submit", (e) => {

  if (e.target.matches("#form")) {
    e.preventDefault();
    let query = e.target.search.value;
    
    location.href = `https://www.google.com/search?q=${query}`;
  }
});


