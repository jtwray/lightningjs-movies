import { Lightning, Utils, Router } from '@lightningjs/sdk'
import { similarMovies } from '../lib/api'
import { SimilarMovies } from '../components/similarmovies/SimilarMovies'
import { Button, MovieInfoBox, Synopsis_Shortened } from '../components/layout'
// import {  } from '../components/layout/Button'
export class MovieDetailsPage extends Lightning.Component {
    static _template() {
        return {
            Container: {
                w: 1920,
                h: 1080,
                rect: true,
                src: '',
                Background: {
                    w: 1920,
                    h: 1080,
                    rect: true,
                    src: '',
                },
                MovieInfoBox: {},
            }
        }
    }
    _init() {
        this.currIDX = 0;
    }
    set params(data) {
        this.movieDetailsMovie = data?.movieDetailsMovie ?? this.historyState()?.movieDetailsMovie;
        this.updateBackgroundImage(this.movieDetailsMovie.backdrop_path)
        this.updateMovieInfoBox(this.movieDetailsMovie)
        const isFav = this.checkIsFav(this.movieDetailsMovie.id)
        this.handleFavoriteButton_setText(isFav)
    }
    // focus and events
    // _getMovieInfoBoxBtns() { return this.tag('MovieInfoBox').children[0].children[0].children[0].children[2].children[0]; }

    _getFocused() { return this.tag('MovieInfoBox').children[0].children[0].children[0].children[2].children[this.currIDX] }

    _handleUp() {
        Router.focusWidget('Menu')
        //this.historyState
    }
    _handleLeft() {
        this.currIDX == 0 ? this.currIDX = 1 : this.currIDX--;
    }
    _handleRight() {
        this.currIDX == 1 ? this.currIDX = 0 : this.currIDX++;
    }
    _handleEnter() {
        this.currIDX == 0 ? this.handleFavoriteButton_Toggle() : this.handleNavigateToSimilarMovies();

    }
    checkIsFav(movieID) {
        const storedFavs = JSON.parse(localStorage.getItem("favoriteMovies"));
        const isFav = !!storedFavs?.filter(movie => movie?.id == movieID)?.length;
        return isFav;
    }
    handleFavoriteButton_Toggle() {
        const isFav = this.checkIsFav(this.movieDetailsMovie.id);
        this.handleFavoriteButton_setText(!isFav);
        isFav ? this.handleFavoritesList_RemoveMovie(this.movieDetailsMovie.id) : this.handleFavoritesList_AddMovie(this.movieDetailsMovie);

    }
    handleFavoriteButton_setText(newFav) {
        this.tag('MovieInfoBox').children[0].children[0].children[0].children[2].children[0].patch({ label: newFav ? 'remove favorite' : 'add favorite' })
    }

    async handleFavoritesList_CreateList({ name, description, language }) {
        localStorage.setItem('favoriteMovies', []);
        // return await favoritesList_CreateList({ name, description, language })
    }
    async handleFavoritesList_GetList(listID) {
        return localStorage.getItem('favoriteMovies');
        // return await favoritesList_GetList(listID)
    }
    async handleFavoritesList_AddMovie(movie) {
        let updatedFavMovies = [...JSON.parse(localStorage.getItem('favoriteMovies')), movie]
        // updatedFavMovies.push(movie)
        localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavMovies))
        // return await favoritesList_AddMovie(listID, movieID)
    }
    async handleFavoritesList_RemoveMovie(movieID) {
        let favMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
        let updatedFavMovies = favMovies?.filter(movie => movie.id !== movieID)
        localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavMovies))
        // return await favoritesList_RemoveMovie(listID, movieID)
    }
    async handleFavoritesList_LoadFromStorage() {
        // let favoritesListID;

        // const storageDOTget = Storage.get("favoritesListID");
        // // console.log({ favoritesListID, storageDOTget })
        // if (favoritesListID == null) {
        //     // const { name, description, language }     
        //     // favoritesListID = await this.handleFavoritesList_CreateList({ "name": 'movieDBFavList', "description": "movieDBfavoristsList", "language": "en" });
        //     favoritesListID = process.env.APP_MOVIEDB_FAVLISTID
        //     // console.log({ favoritesListID })
        //     Storage.set("favoritesListID", favoritesListID);
        // }
        // const favoritesList = await this.handleFavoritesList_GetList(favoritesListID);
        // return favoritesList

    }

    // ui template updates
    updateBackgroundImage(backdrop_path) {
        this.tag('Container.Background').src = `https://image.tmdb.org/t/p/w500/${backdrop_path}`
    }
    updateMovieInfoBox(movieInfoBox) {
        this.tag('Container.MovieInfoBox')
            .patch({ children: [{ type: MovieInfoBox, movieInfoBox }] })
    }
    setSimilarMovies(movieID) {
        this.tag("SimilarMovies").patch({ children: [{ type: SimilarMovies, movieID, similarToMovie: this.movieDetailsMovie, movieDetailsMovie: this.movieDetailsMovie }] })
    }

    handleNavigateToSimilarMovies() {
        Router.navigate(
            `similarmovies/${this.movieDetailsMovie.title.split(" ").join('').split(':').join('_')}`,
            {
                message: 'hello simlar movies from moviedetails!',
                similarToMovie: this.movieDetailsMovie,
            }
        )
    }
    historyState() {
        return {
            movieDetailsMovie: this.movieDetailsMovie,
            similarToMovie: this.movieDetailsMovie
        }
    }
    pageTransition() {
        return 'fade'
    }
}

