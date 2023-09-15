'use strict';

const movieDB = {
    movies: [
        "Logan",
        "Justice League",
        "La La Land",
        "Whiplash",
        "Scott Pilgrim vs. the World"
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      form = document.querySelector('form.add'),
      watchedMovies = document.querySelector('.adding__input'),
      checkbox = document.querySelector('[type="checkbox"]');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    let watchedMoviesValue = watchedMovies.value;
    const checkboxChecked = checkbox.checked;

    if (watchedMoviesValue) {
        if (watchedMoviesValue.length > 21){
            watchedMoviesValue = `${watchedMoviesValue.substring(0, 22)}...`
        }
        movieDB.movies.push(watchedMoviesValue);
        sortMovies(movieDB.movies);
        createNewFilm(movieList, movieDB.movies);

    }    
    event.target.reset();      

})

const removeAdv = (adv) => {
    adv.forEach(item => {
        item.remove();
    });
}

const makeChanges = () => {
    genre.textContent = 'DRAMA';

    poster.style.backgroundImage = 'url("img/bg.jpg")';
}


const sortMovies = (movies) => {
    movies.sort();
};


function createNewFilm(parent, films) {
    parent.innerHTML = "";
    sortMovies(films);


    films.forEach((film, i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {

        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);

            createNewFilm(parent, films);
        })

    })


}

removeAdv(adv);
makeChanges();
createNewFilm(movieList, movieDB.movies);
    