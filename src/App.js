import { Router, Utils } from '@lightningjs/sdk'
import { default as routes } from './lib/routes'
import { Menu } from './widgets/menu/Menu'
export default class App extends Router.App {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      ...super._template(),

      Widgets: {
        Menu: { type: Menu },
      },
    }
  }
  fallbackBackdrop = "images/background.png"
  _setup() {
    Router.startRouter(routes, this)
    let favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies"))
    if (favoriteMovies === null) {
      localStorage.setItem('favoriteMovies', JSON.stringify([
        {
          "adult": false,
          "backdrop_path": "images/background.png",
          "genre_ids": [
            16,
            12,
            10751,
            14,
            35
          ],
          "id": 0,
          "original_language": "en",
          "original_title": "Favorite Movie Title",
          "overview": "Add movies to the favorites list using the add to favorites button on Movie Details Screen.",
          "popularity": 12929.143,
          "poster_path": "images/logo.png",
          "release_date": "2023-04-05",
          "title": "Favorite Movie Title",
          "video": false,
          "vote_average": 10,
          "vote_count": 896
        }


      ]));
      favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies"))
    }
  }

  _init() { }
}
