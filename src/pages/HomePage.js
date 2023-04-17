import { Lightning, Utils, Router } from '@lightningjs/sdk'
// import { Carousel } from '@lightningjs/ui'
// import CarouselAsRow from '../components/CarouselAsRow';
import MovieCard from '../components/layout/MovieCard'
import {
  getSimilarMoviesByMovieID,
  getUpcomingMovies,
  // movieData,
  similarMovies,
  upcomingMovies,
} from '../lib/api'
import { Synopsis_Shortened } from '../components/layout/Synopsis_Shortened';
import { PaginatedMoviesRow } from '../components/layout/PaginatedMoviesRow';

export class HomePage extends Lightning.Component {

  static _template() {
    return {
      w: 1920, h: 1080,
      //  alpha: .1,
      Background: {

        w: 1920, h: 1080,
      },
      Results: {
      },
      CurrentTitle: {
        x: 540, y: 960,
        text: 'Title Holder', fontFace: "Regular",
        fontSize: 64, textColor: 0xfffdebca,
      },
      Synopsis_Shortened: {}
    }
  }
  async _init() {
    this.currIDX = 0;

    this.favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies"));
    let movieData = await getUpcomingMovies();
    this.setInitPaginatedMovieRow(movieData.results)
  }
  _getFocused() { return this.tag('Results').children[0] }
  _handleUp() {
    Router.focusWidget('Menu')
  }

  setInitPaginatedMovieRow(movieData) {
    this.tag('Results')
      .patch({
        children: [{
          type: PaginatedMoviesRow,
          movieData,
          signals: { handleChangeSynopsis: true, handleChangeBackgroundImage: true }
        }]
      })
  }

  handleChangeSynopsis(currentMovie) {
    this.tag('Synopsis_Shortened').patch({ children: [{ type: Synopsis_Shortened, movie: currentMovie, isfavorite: !!this?.favoriteMovies?.filter(movie => movie?.id == currentMovie?.id)?.length }] })
  }
  handleChangeBackgroundImage(backdrop_path) {
    let newBackDrop;
    if (backdrop_path === "images/background.png") {
      newBackDrop = Utils.asset(backdrop_path);
    } else {
      newBackDrop = `https://image.tmdb.org/t/p/w500/${backdrop_path}`
    }
    this.src = newBackDrop;
    this.tag('Background').patch({ src: newBackDrop, alpha: .51 })
  }
  pageTransition() {
    return 'fade'
  }
}
