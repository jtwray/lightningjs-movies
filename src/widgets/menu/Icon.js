import { Lightning, Utils } from '@lightningjs/sdk'

export class Icon extends Lightning.Component {
  static _template() {
    return {
      y: 10,
    }
  }
  _init() {

    if (this.page == 'Go Back') { this.patch({ src: Utils.asset('images/goback-w.png'), shader: null }) }// normally black use shader on focus to set highlighted == white
    else this.patch({ src: Utils.asset('images/' + this.page + '-w.png'), shader: { type: Lightning.shaders.Inversion } })// shader off if white on focus
  }

  _unfocus() {

    if (this.page == 'Go Back') { this.patch({ src: Utils.asset('images/goback-w.png'), shader: null }) }// normally black use shader on focus to set highlighted == white
    else this.patch({ src: Utils.asset('images/' + this.page + '-w.png'), shader: { type: Lightning.shaders.Inversion } })// shader off if white on focus
  }
  _focus() {
    if (this.page == 'Go Back') { this.patch({ src: Utils.asset('images/goback-w.png'), shader: { type: Lightning.shaders.Inversion } }) }// normally black use shader on focus to set highlighted == white
    else this.patch({ src: Utils.asset('images/' + this.page + '-w.png'), shader: null })// shader off if white on focus
  }

}
