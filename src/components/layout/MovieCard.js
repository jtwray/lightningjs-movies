import { Lightning, Utils, Router } from '@lightningjs/sdk'

export class MovieCard extends Lightning.Component {
  static _template() {
    const SIZE = 300
    const SRC = './images/sample1.jpg'
    return {
      Card: {
        flexItem: { minWidth: 220 },

        rect: true,
        texture: Lightning.Tools.getRoundRect(200, 300, 4, 10, 0xff000000, false), //(w: number, h: number, radius: Lightning.Tools.CornerRadius, strokeWidth?: number | undefined, strokeColor?: number | undefined, fill?: boolean | undefined, fillColor?: number | undefined)
        texture: Lightning.Tools.getRoundRect(200, 300), //(w: number, h: number, radius: Lightning.Tools.CornerRadius, strokeWidth?: number | undefined, strokeColor?: number | undefined, fill?: boolean | undefined, fillColor?: number | undefined)
        shader: {
          type: Lightning.shaders.RoundedRectangle,
          topLeft: 0,
          stroke: 10,
          strokeColor: 0xff000000,
        },
        Poster: {
          src: '',
          w: 200,
          h: 300,
        }, // Image component to show poster
      },
    }
  }
  _init() {
    const { poster_path, title, id } = this.movie

    // this.tag('Card.Poster').src = `https://image.tmdb.org/t/p/w200/${poster_path}`
    this.updatePosterImage(poster_path)
    this.tag('Card').page = this.movie.id

    this._animationDemoActive = this.tag('Card').animation({
      duration: 0.3,
      actions: [
        { p: 'shader.strokeColor', v: { 1: 0xffffffff, 0: 0xff000000 } },
        { p: 'scale', v: { 0: 1, 1: 1.2 } },
      ],
    })

    this._animationDemoInactive = this.tag('Card').animation({
      duration: 0.3,
      actions: [
        { p: 'shader.strokeColor', v: { 1: 0xff000000, 0: 0xffffffff } },
        { p: 'scale', v: { 0: 1.2, 1: 1 } },
      ],
    })
  }
  _focus() {
    this._animationDemoActive.start()
  }
  _unfocus() {
    this._animationDemoInactive.start()
  }
  _handleEnter() {
    const movieDetailsMovie = this.movie
    Router.navigate(`moviedetails/${this.movie.title.split(' ').join('').split(':').join('_')}`, {
      message: 'hellow from movieCard!',
      movieDetailsMovie,
    })
  }

  updatePosterImage(poster_path) {
    let newPoster
    if (poster_path === 'images/logo.png') {
      newPoster = Utils.asset('images/logo.png')
    } else {
      newPoster = `https://image.tmdb.org/t/p/w200/${poster_path}`
    }
    this.tag('Card.Poster').src = newPoster
  }
}
