let btn = document.getElementById("btn");
let input = document.getElementById("input");
let result = document.getElementById("result");


btn.addEventListener("click", () => {
    let url = `https://www.omdbapi.com/?t=${input.value}&apikey=b5413271`;
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            if (data.Response === "False") {
                throw new Error(data.Error);
            }
            console.log(data);
            result.innerHTML = `<a href="https://www.imdb.com/title/${data.imdbID}" target="_blank">IMDB Link</a> <br><img src="${data.Poster}" alt="Movie Poster">`;
        })
        .catch((error) => {
            console.error('Error:', error);
            result.innerHTML = 'Error fetching movie data: ' + error.message;
        });
});
