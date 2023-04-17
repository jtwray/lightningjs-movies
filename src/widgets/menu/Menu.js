import { Lightning, Router, Utils } from '@lightningjs/sdk'
import { Icon } from './Icon'
export class Menu extends Lightning.Component {
  static _template() {
    return {
      // y: 495,//595
      y: 595, //495
      Background: {
        rect: true,
        w: 800,
        h: 110,
        x: 960,
        y: 540,
        mount: 0.5,
        color: 0x99000000,
        src: Utils.asset('images/background.png'),
        flex: {
          direction: 'row',
          justifyContent: 'space-evenly',
        },
        GoBack: {
          type: Icon,
          page: 'Go Back',
          // src: Utils.asset('images/video-w.png'),
          src: Utils.asset('images/goback-w.png'),
          // rotation: 30 * 9 * Math.PI / 180,
          //// src: Utils.asset('images/up-arrow.png'),
          //// rotation: 30 * 9 * Math.PI / 180,
          // shader: { type: Lightning.shaders.Inversion }
          // shader: null
          // shader: { type: Lightning.shaders.Perspective, rx:
          //    30 * 9 * Math.PI / 180
          //    }

        },
        Home: {
          type: Icon,
          page: 'home',
          src: Utils.asset('images/home-w.png'),
        },
        Favorites: {
          type: Icon,
          page: 'favorites',
          icon: '',
          routePath: 'favorites',
          src: Utils.asset('images/favorites-w.png'),
        },
      },
      Arrow: {
        x: 960,
        y: 400,
        mount: 0.5,
        src: Utils.asset('images/up-arrow.png'),
      },
    }
  }
  _init() {
    this.index = 0
  }

  _handleLeft() {
    if (this.index == 0) {
      return
    }
    this.index--
  }

  _handleRight() {
    if (this.index == this.tag('Background').children.length - 1) {
      return
    }
    this.index++
  }

  _handleEnter() {
    Router.focusPage()
    const isFirstPage = !Router.getHistory().length;
    if (this.getCurrentIcon().__ref == 'GoBack') {
      if (isFirstPage) { return; }
      else { Router.back(); }
    }
    else { Router.navigate(this.getCurrentIcon().page) }
  }

  _handleDown() {
    Router.focusPage()
  }
  _handleKey() { }

  _getFocused() {
    return this.getCurrentIcon()
  }

  getCurrentIcon() {
    return this.tag('Background').children[this.index]
  }

  _focus() {
    this.patch({
      smooth: {
        y: 495,
      },
      Arrow: {
        rotation: Math.PI,
      },
    })
  }

  _unfocus() {
    this.patch({
      smooth: { y: 595 },
      Arrow: { rotation: 0 },
    })
  }
}
