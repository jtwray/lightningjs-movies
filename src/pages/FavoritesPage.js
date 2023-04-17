
import { Lightning, Utils, Router, Storage } from '@lightningjs/sdk'
import { Carousel } from '@lightningjs/ui'
import { getUpcomingMovies } from '../lib/api'
import { Synopsis_Shortened } from '../components/layout/Synopsis_Shortened'
import { MovieCardLarge } from '../components/layout/MovieCardLarge'

export class FavoritesPage extends Lightning.Component {

    static _template() {
        return {
            x: 0, y: 0, rect: true,
            w: 1920, h: 1080,

            MyCarousel: {
                w: 1920, h: 1080,
                y: (1080 / 2) - (450 * 2 / 3),
                spacing: 50,
                type: Carousel,
                direction: 'row',
                scroll: .5,
                signals: { onIndexChanged: true }
            },
            Synopsis_Shortened: {}
        }
    }
    onIndexChanged(idxPrevidxDataLen) {

        const {
            index,
            previousIndex,
            dataLength
        } = idxPrevidxDataLen;
        const currMovieCardOBJ = this.movieList[index]?.movie;
        this.handleChangeBackgroundImage(currMovieCardOBJ?.backdrop_path);
        this.handleChangeSynopsis(currMovieCardOBJ);

    }
    handleCreateMovieList(list) {
        return list?.map(movie => ({


            type: MovieCardLarge,
            animationDemoActive: {
                duration: .3, actions: [
                    { p: 'shader.strokeColor', v: { 1: 0xffffffff, 0: 0xff000000 } },
                    { p: 'scale', v: { 0: 1, 1: 1.2 } },
                    { p: 'y', v: { 0: 0, 1: -100 } },
                ]
            }, animationDemoInactive: {
                duration: .3, actions: [
                    { p: 'shader.strokeColor', v: { 0: 0xffffffff, 1: 0xff000000 } },
                    { p: 'scale', v: { 1: 1, 0: 1.2 } },
                    { p: 'y', v: { 1: 0, 0: -100 } },
                ]
            },
            movie, testValue: 'testvaluestring'
        }));
    }


    handleChangeBackgroundImage(backdrop_path) {
        this.src = `https://image.tmdb.org/t/p/w500/${backdrop_path}`
    }
    handleChangeSynopsis(currentMovie) {
        this.tag('Synopsis_Shortened').patch({
            children: [{
                type: Synopsis_Shortened, movie: currentMovie,
            }]
        })
    }
    _getCurrentIndex() {
        return this.tag('MyCarousel')
    }
    _getFocused() {
        return this.tag('MyCarousel')
    }

    async _init() {

        this.favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
        this.upComingMovies = await getUpcomingMovies();
        if (this?.favoriteMovies?.length == 0) {
            this.favoriteMovies = this.upComingMovies.results;
        }

        this.movieList = this.handleCreateMovieList(this.favoriteMovies)
        this.myC = this.tag("MyCarousel");
        this.myC.autoResize = true;
        this.myC.add(this.movieList);
        this.myC.first();
    }
    _active() {
        this.favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
        this.movieList = this.handleCreateMovieList(this.favoriteMovies)
        this.myC.reload(this.movieList)
    }

    _handleUp() { Router.focusWidget('Menu') }    //this.historyState
}
