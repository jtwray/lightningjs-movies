import { Lightning, Utils, Router } from '@lightningjs/sdk'
import { MovieCardLarge } from './MovieCardLarge'
// import {MovieCard} from './MovieCard'

export class PaginatedMoviesRow extends Lightning.Component {

    static _template() {
        return {
            Row: {
                rect: true, src: "", x: 0, y: 0, h: 1080, w: 1920, flex: { wrap: true, direction: 'row' },
            }
        }
    }
    _construct() {
        this.currMovieIDX = 0;
        this.currPageIDX = 0;
        this.currItemIDX = 0;
        this.pages = [];
    }
    async _init() {
        this.handleCreateListChunks(5, this.movieData);
        const movieCardsList = this.handleCreateCurrPageOfMovieList()
        this.handlePatchResultsMoviesList(movieCardsList);

        this.signal('handleChangeSynopsis', this.pages?.[this.currPageIDX]?.[this.currItemIDX] ?? { noMovie: true, fillerMessage: 'Add a movie to Favorites List to see more information about it here!', isFavorite: this.pages })
        this.signal('handleChangeBackgroundImage', this.pages?.[this.currPageIDX]?.[this.currItemIDX]?.backdrop_path ?? '')
    }
    getCurrentIcon() { return this.tag('Row').children[this.currItemIDX] }
    _getFocused() { return this.getCurrentIcon() }

    _handleLeft() {
        let prevPage = this.currPageIDX;
        let prevItemIDX = this.currItemIDX;

        const { currItemIDX, currPageIDX } = this.decrementItemIDX(this.currItemIDX, this.currPageIDX, this.pages);
        this.currItemIDX = currItemIDX;
        this.currPageIDX = currPageIDX;
        if (prevPage != this.currPageIdx) {
            const movieCardsList = this.handleCreateCurrPageOfMovieList()
            this.handlePatchResultsMoviesList(movieCardsList);
        }

        this.signal('handleChangeSynopsis', this.pages[this.currPageIDX][this.currItemIDX])
        this.signal('handleChangeBackgroundImage', this.pages[this.currPageIDX][this.currItemIDX].backdrop_path)
    }
    _handleRight() {
        let currPage = this.currPageIDX;

        const { currItemIDX, currPageIDX } = this.incrementItemIDX(this.currItemIDX, this.currPageIDX, this.pages);
        this.currItemIDX = currItemIDX;
        this.currPageIDX = currPageIDX;

        if (currPage != this.currPageIdx) {
            const movieCardsList = this.handleCreateCurrPageOfMovieList()
            this.handlePatchResultsMoviesList(movieCardsList);
        }

        this.signal('handleChangeSynopsis', this.pages[this.currPageIDX][this.currItemIDX])
        this.signal('handleChangeBackgroundImage', this.pages[this.currPageIDX][this.currItemIDX].backdrop_path)
    }
    decrementItemIDX(currItemIDX, currPageIDX, pages) {
        const finalPageIDX = pages.length - 1;
        const finalPageFinalItemIDX = pages[finalPageIDX].length - 1;
        const isFirstItem = currItemIDX == 0;
        const isFirstPage = currPageIDX == 0;
        const prevItemIDX = currItemIDX - 1;
        const prevPageIDX = currPageIDX == 0 ? finalPageIDX : currPageIDX - 1;
        const prevPageFinalItemIDX = pages[prevPageIDX].length - 1;

        if (isFirstItem && isFirstPage) { return { currItemIDX: finalPageFinalItemIDX, currPageIDX: finalPageIDX } }
        if (isFirstItem) { return { currItemIDX: prevPageFinalItemIDX, currPageIDX: prevPageIDX } }
        return { currItemIDX: prevItemIDX, currPageIDX: currPageIDX }
    }
    incrementItemIDX(currItemIDX, currPageIDX, pages) {
        const isFinalItem = currItemIDX === pages[currPageIDX].length - 1;
        const isFinalPage = currPageIDX === pages.length - 1;
        const nextItemIDX = currItemIDX + 1;
        const nextPageIDX = currPageIDX + 1;

        if (isFinalItem && isFinalPage) { return { currItemIDX: 0, currPageIDX: 0 } }
        if (isFinalItem) { return { currItemIDX: 0, currPageIDX: nextPageIDX } }
        return { currItemIDX: nextItemIDX, currPageIDX: currPageIDX }
    }

    handleCreateListChunks(chunkSize, movieData = []) {
        for (let i = 0; i < movieData.length; i += chunkSize) {
            const chunk = movieData.slice(i, i + chunkSize);
            this.pages.push(chunk)
        }
    }
    handleCreateCurrPageOfMovieList() {
        return this.pages?.[this.currPageIDX]?.map(movie => ({
            flexItem: { minWidth: 300 },

            type: MovieCardLarge, animationDemoActive: {
                duration: .3, actions: [
                    { p: 'shader.strokeColor', v: { 1: 0xffffffff, 0: 0xff000000 } },
                    { p: 'scale', v: { 0: 1, 1: 1.2 } },
                    { p: 'y', v: { 0: 0, 1: 100 } },
                ]
            }, animationDemoInactive: {
                duration: .3, actions: [
                    { p: 'shader.strokeColor', v: { 0: 0xffffffff, 1: 0xff000000 } },
                    { p: 'scale', v: { 1: 1, 0: 1.2 } },
                    { p: 'y', v: { 1: 0, 0: 100 } },
                ]
            },

            movie, testValue: 'testvaluestring'
        }));

    }
    handlePatchResultsMoviesList(movieCardsList) {
        this.tag('Row').patch({
            flex: { direction: 'row', justifyContent: 'center', wrap: true, h: 1080, w: 1920, gap: 200 },
            //  src: this.pages[this.currPageIDX][this.currItemIDX],
            children: movieCardsList,
        })
    }
}

