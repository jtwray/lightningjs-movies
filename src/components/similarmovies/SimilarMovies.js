import { Lightning, Utils, Router } from '@lightningjs/sdk'
import { getSimilarMoviesByMovieID, getUpcomingMovies } from '../../lib/api'
import { MovieCard } from '../layout/MovieCard'
export class SimilarMovies extends Lightning.Component {
    static _template() {
        return {
            SimilarMoviesGrid: {
                flex: { direction: "column", justifyContent: 'center', wrap: true },
                y: 0,
                h: 1080, w: 1920,
            },
        }
    }
    _init() {
        this.currItemIDX = 0;
    }
    set similarToMovie(data) {
        this._similarToMovie = data;
        this.handleSetSimilarMovies(this._similarToMovie.id);
    }

    // focus and events
    getCurrentIcon() {
        return this.tag('SimilarMoviesGrid').children[this.currItemIDX]
    }
    _getFocused() { return this.getCurrentIcon() }

    _handleLeft() {
        this.currItemIDX > 0 ?
            this.currItemIDX-- :
            this.currItemIDX = this.tag('SimilarMoviesGrid').children.length;
    }
    _handleRight() {
        this.currItemIDX < this.tag('SimilarMoviesGrid').children.length ?
            this.currItemIDX++ : this.currItemIDX = 0
    }

    async handleSetSimilarMovies(movieID) {
        let similarMovies;
        if (movieID === 0) { similarMovies = await getUpcomingMovies(); }
        else { similarMovies = await getSimilarMoviesByMovieID(movieID); }

        const movieCardsList = similarMovies.results.map((movie, idx) => ({
            flexItem: { minWidth: 220, minHeight: 320, },
            type: MovieCard, movie, testValue: 'testvaluestring',
            shader: idx == this.currItemIDX ? {
                type: Lightning.shaders.RoundedRectangle,
                radius: 15,
            } : {},
        }))
        this.tag('SimilarMoviesGrid').patch({
            h: 1080, w: 1920,
            flex: { direction: "column", justifyContent: 'center', wrap: true, },
            children: movieCardsList
        })
    }

    historyState() {
        return {
            // movie: this.movie,
            similarToMovie: this._similarToMovie,
            movieID: this.movieID,
            movieDetailsMovie: this._similarToMovie
            // focusIndex: 12,
            // someVal: Math.random()
        }
    }
    pageTransition() {
        return 'up'
    }
}

