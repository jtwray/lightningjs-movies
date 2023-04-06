import { Lightning, Utils, Router } from '@lightningjs/sdk'

export class About extends Lightning.Component {
  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        rect: true,
        color: 0xffdaa0004,
      },
      Title: {
        x: 960,
        y: 50,
        mount: 0.5,
        text: {
          text: 'About',
          fontSize: 64,
        },
      },
      Logo: {
        x: 960,
        y: 540,
        mount: 0.5,
        src: Utils.asset('images/logo.png'),
      },
    }
  }

  _handleEnter() {
    Router.navigate('home')
  }
  _handleUp() {
    Router.navigate('Video')
  }

  // pageTransition(){
  //     return 'fade'
  // }

  pageTransition() {
    return 'up'
  }
  set params(data) {
    this.message = data.message
    console.log({ data: this.message })
    // alert(data.message);
  }
}
