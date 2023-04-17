import { Lightning, Utils, Router } from '@lightningjs/sdk'
import { SimilarMovies } from '../components/similarmovies/SimilarMovies'

export class SimilarMoviesPage extends Lightning.Component {
    static _template() {
        return {
            SimilarMovies: {
            },
            text: { text: 'Simliar Movies Page' },
            w: 1920,
            h: 1080,
            x: 0, y: 0,
            rect: true,
            src: '',
        }
    }
    _init() { this.currItemIDX = 0 }
    set params(data) {
        this.similarToMovie = data?.similarToMovie ?? this.historyState()?.similarToMovie;
        this.updateBackgroundImage(this.similarToMovie.backdrop_path)
        this.setSimilarMovies(this.similarToMovie.id)
    }

    // focus and events
    getCurrentIcon() { return this.tag('SimilarMovies').children[this.currItemIDX] }
    _getFocused() { return this.getCurrentIcon() }
    _handleLeft() {
        this.currItemIDX > 0
        this.currItemIDX--
        this.currItemIDX = this.tag('SimilarMovies').children.length;
    }
    _handleRight() {
        this.currItemIDX < this.tag('SimilarMovies').children.length ?
            this.currItemIDX++ : this.currItemIDX = 0
    }
    _handleUp() {
        Router.focusWidget('Menu')
        //this.historyState
    }

    //  ui and template updates 
    updateBackgroundImage(backdrop_path) { this.src = `https://image.tmdb.org/t/p/w500/${backdrop_path}` }
    updateBackgroundTitle(movieTitle) { }
    setSimilarMovies(movieID) {
        this.tag('SimilarMovies').patch({
            children: [{
                type: SimilarMovies,
                movieID,
                similarToMovie: this.similarToMovie,
                //  movieDetailsMovie: this.similarToMovie
            }]
        })
    }

    historyState() {
        return {
            // movie: this.movie,
            similarToMovie: this.similarToMovie,
            movieDetailsMovie: this.similarToMovie
            // focusIndex: 12,
            // someVal: Math.random()
        }
    }
    // routing
    pageTransition() { return 'fade' }
}
