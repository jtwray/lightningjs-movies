import { Boot } from '../pages/Boot'
import { HomePage } from '../pages/HomePage'
import { MovieDetailsPage } from '../pages/MovieDetailsPage'
import { SimilarMoviesPage } from '../pages/SimilarMoviesPage'
import { FavoritesPage } from '../pages/FavoritesPage'
export default {
  root: 'home',
  routes: [
    {
      path: '$',
      component: Boot,
    },

    {
      path: 'home',
      component: HomePage,
      widgets: ['Menu'],
    },

    {
      path: 'moviedetails/:movieID',
      component: MovieDetailsPage,
      name: 'moviedetails',
      widgets: ['Menu'],
    },
    {
      path: 'similarmovies/:movieID',
      component: SimilarMoviesPage,
      name: 'similarmovies',
      widgets: ['Menu'],
    },
    {
      path: 'favorites',
      component: FavoritesPage,
      name: 'favorites',
      widgets: ['Menu'],
    },
  ],
  beforeEachRoute(from, to) {
    let isLoggedIn = true
    if (!isLoggedIn && to._hash == 'User') {
      return from
    } else {
      return true
    }
  },
  afterEachRoute(to) { },
}
