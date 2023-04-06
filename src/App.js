import { Router, Utils } from '@lightningjs/sdk'
import { default as routes } from './lib/routes'
// import { Menu } from './widgets/menu/Menu'
export default class App extends Router.App {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      ...super._template(),

      // Widgets: {
      //   Menu: { type: Menu },
      // },
    }
  }
  _setup() {
    Router.startRouter(routes, this)
  }

  _init() {}
}
