window.onload = function () {
  axios.get('http://localhost:3000/movies')
    .then( (response) => {
      const movieData = response.data
      let str=``
      movieData.forEach(element => {
        str += `
        <li class="movie-box">
          <div class="mpost">
              <img src="${element.src}" alt="${element.title}">
          </div>
          <div class="mtitle">${element.title}</div>
          <div class="mscore">${element.score}</div>
          <div class="mdate">${element.date}</div>
        </li>
        `
      });
      let movieRow = document.getElementById('movie-row')
      movieRow.innerHTML += str;
    })
    .catch( (error) => {
      console.log(error);
    });
}