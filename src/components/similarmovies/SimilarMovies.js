import { Lightning, Utils, Router } from '@lightningjs/sdk'
import { similarMovies } from '../lib/api'

export class SimilarMovies extends Lightning.Component {
  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        rect: true,
        color: 0xffdaa0004,
        src: '',
      },
      Title: {
        x: 960,
        y: 50,
        mount: 0.5,
        text: {
          text: 'About',
          fontSize: 64,
        },
      },
      SimilarMovies: {
        type: SimilarMovies,
      },
      // Logo: {
      //     x: 960,
      //     y: 540,
      //     mount: 0.5,
      //     src: Utils.asset('images/logo.png'),
      // },
    }
  }

  _handleEnter() {
    Router.navigate('home')
  }
  _handleUp() {
    Router.navigate('Video')
  }

  // pageTransition(){
  //     return 'fade'
  // }
  updateBackgroundImage(backdrop_path) {
    // this.tag("Background").patch({ src: moviesList.results[currMovieIDX].backdrop_path })
    this.tag('Background').src = `https://image.tmdb.org/t/p/w500/${backdrop_path}`
  }
  updateBackgroundTitle(movieTitle) {
    // this.tag("Background").patch({ src: moviesList.results[currMovieIDX].movieTitle })
    this.tag('Title').text.text = movieTitle
  }

  pageTransition() {
    return 'up'
  }
  _init() {
    this.movie = ''
    console.log('DETAILS COMPONENT INIT!', 'backdrop_path:', this.movie.backdrop_path)
  }
  set params(data) {
    this.message = data.message
    this.movie = data.movie
    console.log({ data: this.message, movie: this.movie })
    // this.tag('Background').patch({ src: this.movie.backdrop_path })
    this.updateBackgroundImage(this.movie.backdrop_path)
    this.updateBackgroundTitle(this.movie.title)
    // alert(data.message);
  }
}
