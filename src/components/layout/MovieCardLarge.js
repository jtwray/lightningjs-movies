
import { Lightning, Utils, Router, Storage } from '@lightningjs/sdk'

export class MovieCardLarge extends Lightning.Component {
    static _template() {
        const SIZE = 450;
        const SRC = './images/sample1.jpg';
        return {
            w: 300, h: 450, rect: true, color: 0xffffff,

            Card: {
                w: 300, h: 450,
                rect: true,
                texture: Lightning.Tools.getRoundRect(300, 450, 4, 10, 0xff000000, false),//(w: number, h: number, radius: Lightning.Tools.CornerRadius, strokeWidth?: number | undefined, strokeColor?: number | undefined, fill?: boolean | undefined, fillColor?: number | undefined)
                texture: Lightning.Tools.getRoundRect(300, 450),//(w: number, h: number, radius: Lightning.Tools.CornerRadius, strokeWidth?: number | undefined, strokeColor?: number | undefined, fill?: boolean | undefined, fillColor?: number | undefined)
                shader: { type: Lightning.shaders.RoundedRectangle, topLeft: 0, stroke: 10, strokeColor: 0xff000000 },
                Poster: {
                    src: '',
                    w: 300, h: 450,
                }, // Image component to show poster
                // Title: { text: '' }, // Text component to show title
            },
        }
    }
    _init() {
        const { poster_path, title, id } = this.movie;
        this.tag('Card.Poster').src = `https://image.tmdb.org/t/p/w200/${poster_path}`
        this.tag('Card').page = this.movie.id

        this._animationDemoActive = this.tag('Card').animation(
            this.animationDemoActive
        );
        this._animationDemoInactive = this.tag('Card').animation(this.animationDemoInactive
        );
    }
    static get width() {
        return 300
    }
    static get spacing() {
        return 100;
    }
    static get height() {
        return 450
    }
    _focus() {
        this.tag
        this._animationDemoActive.start()
        this.zIndex = 10;

    }
    _unfocus() {
        this._animationDemoInactive.start()
        this.zIndex = 1;
    }
    _handleEnter() {
        const movieDetailsMovie = this.movie;

        Router.navigate(
            `moviedetails/${this.movie.title.split(" ").join('').split(':').join('_')}`,
            {
                message: 'hellow from movieCard!', movieDetailsMovie,
                //  similarToMovie: this.movie
            }
        )
    }
    pageTransition() {
        return 'fade'
    }
}