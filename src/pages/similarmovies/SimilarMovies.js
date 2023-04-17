import { Lightning, Utils, Router } from '@lightningjs/sdk'
import { getSimilarMoviesByMovieID } from '../../lib/api'

export class SimilarMovies extends Lightning.Component {
    static _template() {
        return {
            Background: {
                x: 0,
                w: 1920,
                h: 1080,
                rect: true,
                // color: 0xff000000,

                color: 0xffdaa0004,
                // alpha: .4
                // src: '',
            },
            Title: {
                x: 960,
                w: 960,
                y: 150,
                // h: 100,
                mount: 0.5,
                text: {
                    text: "",

                    fontSize: 64,
                },
            },
            //   SimilarMovies: {
            //     type: SimilarMovies,
            //   },
            // Logo: {
            //     x: 960,
            //     y: 540,
            //     mount: 0.5,
            //     src: Utils.asset("images/logo.png"),
            // },
        }
    }
    _init() {
        this.movie = ''
    }
    set params(data) {
        this.message = data.message
        this.movie = data.movie
        this.updateBackgroundImage(this.movie.backdrop_path)
        this.updateBackgroundTitle(this.movie.title)
    }
    async hangleGetSimilarMovies(movieID) {
        const similarMovies = await getSimilarMoviesByMovieID(movieID)
        return similarMovies
    }


    updateBackgroundImage(backdrop_path) {
        let newBackDrop;
        if (backdrop_path === "images/background.png") {
            newBackDrop = Utils.asset(backdrop_path);
        } else {
            newBackDrop = `https://image.tmdb.org/t/p/w500/${backdrop_path}`
        }
        this.tag('Background').src = newBackDrop;
    }
    updateBackgroundTitle(movieTitle) {
        this.tag('Title').text.text = movieTitle
    }
    pageTransition() {
        return 'up'
    }
}
