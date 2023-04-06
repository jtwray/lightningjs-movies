import { Lightning, Utils } from '@lightningjs/sdk'

export default class MovieCard extends Lightning.Component {
  static _template() {
    return {
      Card: {
        rect: true,
        padding: 20,
        w: 400,
        h: 400,
        margin: 10,
        // w: (w) => {
        //     return w / 4
        //   },
        // border: { Lightning.RoundedRectangle: [10]},
        // shader: {
        //     type: Lightning.shaders.RoundedRectangle,
        //     radius: 15,
        //   },
        Poster: {
          // w: "20%",
          //  w:"auto"
          // w: (w) => {
          //     let cardWidth=this._cardWidth;
          //     console.log({cardWidth,w})
          //     return (cardWidth||w / 4)
          // }
          //  w:MediaStreamAudioDestinationNode,
        }, // Image component to show poster
        Title: {}, // Text component to show title
      },
    }
  }
  _cardWidth() {
    return 400
  }

  set movie(value) {
    console.log({ value })
    const { poster_path, title } = value
    this.tag('Card.Poster').src = `https://image.tmdb.org/t/p/w500/${poster_path}`
    this.tag('Card.Title').text = title
    this.tag('Card').page = value.id
  }
}
