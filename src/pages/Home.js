import { Lightning, Utils, Router } from '@lightningjs/sdk'
// import { Carousel } from '@lightningjs/ui'
// import CarouselAsRow from '../components/CarouselAsRow';
import MovieCard from '../components/movies/MovieCard'
import {
  getSimilarMoviesByMovieID,
  getUpcomingMovies,
  movieData,
  similarMovies,
  upcomingMovies,
} from '../lib/api'

export class Home extends Lightning.Component {
  static _template() {
    return {
      // Background: {
      //   // zIndex: "auto",
      //   w: 1920,
      //   h: 1080,
      //   rect: true,
      //   color: 0xffdea6f4,
      // },
      // Title: {
      //   x: 960,
      //   y: 50,
      //   mount: 0.5,
      //   text: {
      //     text: 'Home',
      //     fontSize: 64,
      //   },
      // },
      // MyCarouselAsRow: {
      //   type: CarouselAsRow,

      // },
      // Logo: {
      //   x: 960,
      //   y: 540,
      //   mount: 0.5,
      //   src: Utils.asset('images/logo.png'),
      // },
      // ListComponent: {
      //   rect: true,
      //   // color: 0xff808080,
      //   // border: "solid blue 1px",
      //   w: 1920, h: 300,
      //   mount: .5,
      //   type:Lightning.components.ListComponent,
      //   flex: {
      //     direction: 'row',
      //     justifyContent: 'space-evenly'
      //   },
      // },
      Container: {
        rect: true,
        w: 1920,
        h: 250,
        x: 960,
        y: 540,
        mount: 0.5,
        flex: {
          justifyContent: 'space-evenly',
          alignItems: 'center',
        },
        // Box1: {
        //   // type: Box,
        //   rect: true,
        //   color: 0xff00ff00,
        //   h: 90,
        //   boxName: 'Box 1',
        //   w: (w) => {
        //     return w / 8
        //   }
        // },
        // Box2: {
        //   rect: true,
        //   // type: Box,
        //   color: 0xffff00ff,
        //   h: 70,
        //   boxName: 'Box 2',
        //   w: (w) => {
        //     return w / 8
        //   }
        // },
        // Box3: {
        //   rect: true,
        //   // type: Box,
        //   color: 0xff00ffff,
        //   h: 50,
        //   boxName: 'Box 3',
        //   w: (w) => {
        //     return w / 8
        //   }
        // }
      },
      Results: {
        // rect: true,
        // color: 0xff808080,
        // border: "solid blue 1px",
        w: 1920,
        // h: 300,
        // mount: .5,
        // type:FlexItem,
        // flex: {
        //   direction: 'row',
        //   justifyContent: 'space-evenly', padding: 20, margin: 10
        // },
        // children: []
        // Items: {

        // }
      },
      // MovieCarousel: {
      //   //   // zIndex: '2',
      //   //   type: Carousel,
      //   //   direction: "row",
      //   w: 1920,
      //   h: 200,
      //   flex: {
      //     direction: 'row',
      //     justifyContent: 'space-evenly'
      //   },
      //   // y: 200, w: 1920, h: 400, type: Carousel, scroll: 0.5, direction: 'row'
      // },
      // MyCarousel: {
      //   // zIndex: "auto",
      //   // type: Carousel,
      //   // direction: 'row'
      //   y: 200, w: 1920, h: 400, type: Carousel, scroll: 0.5, direction: 'row'
      // }
    }
  }

  // updateBackgroundImage(currMovieIDX) {
  //   this.tag('Background').patch({ src: moviesList.results[currMovieIDX].backdrop_path })
  // }
  _handleLeft() {
    console.log({ idx: this.currMovieIDX })
    const lastIDX = movieData.results.length
    this.currMovieIDX == 0 ? (this.currMovieIDX = lastIDX) : this.currMovieIDX--
  }
  _handleRight() {
    console.log({ idx: this.currMovieIDX })
    const lastIDX = movieData.results.length
    this.currMovieIDX == lastIDX ? (this.currMovieIDX = 0) : this.currMovieIDX++
  }
  // _handleEnter() {
  //   Router.focusPage()
  //   const aboutData = {
  //     movieID: movieData.results[this.currMovieIDX].id,
  //     movieData: movieData.results[this.currMovieIDX],
  //   }
  //   console.log(aboutData)
  //   Router.navigate(`/Details/:${movieData.results[this.currMovieIDX].id}`, {
  //     movie: movieData.results[this.currMovieIDX],
  //   })
  // }
  _handleEnter() {
    Router.navigate(`moviedetails/${movieData.results[this.currMovieIDX].id}`, {
      movie: movieData.results[this.currMovieIDX],
      message: "Hello Video PAGE, from the home page. Here's your data",
    })
  }
  _getFocused() {
    return this.getCurrentIcon()
  }

  getCurrentIcon() {
    return this.tag('Results').children[this.index]
  }

  async _init() {
    this.currMovieIDX = 0
    Router.focusPage('Results')
    // const { results: upcomingMovies } = await getUpcomingMovies();
    // const firstID = await upcomingMovies[0]['id'];
    // const { results: similarMovies } = await getSimilarMoviesByMovieID(firstID);

    // console.log({ similarMovies })
    const moviesList = movieData.results.slice(1, 5)
    console.log({ moviesList })

    const movieCardsList = movieData.results.map((movie) => {
      return { type: MovieCard, movie }
    })

    this.tag('Results').patch({
      flex: { direction: 'row', justifyContent: 'space-evenly' },
      children: movieCardsList,
    })
  }

  _logEl(el) {
    let _el = this.tag(`${el}`)
    console.log({ [el]: _el })
  }
  //   this._logEl("MovieCarousel")
  // _init() {  // this._logEl("Logo")}

  // _handleEnter() {
  //   Router.navigate(`details/${movieData.results[this.currMovieIDX].id}`, { movie: movieData.results[this.currMovieIDX], message: "Hello Video PAGE, from the home page. Here's your data" })
  // }

  pageTransition() {
    return 'up'
  }
  _handleBack() {
    //this.historyState
  }

  set params(data) {
    this.message = data.message
    console.log({ data: this.message })
    // alert(data.message);
  }
}
