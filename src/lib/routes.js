import { Boot } from '../pages/Boot'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Video } from '../pages/Video'
import { User } from '../pages/User'
import { Details } from '../pages/Details'
import { MovieDetails } from '../pages/MovieDetails'
export default {
  // root: () => Promise(resolve => {
  //     // ...
  //     // const isLoggedIn = await axios.get("authAPI");
  //     let isLoggenIn = true;
  //     if (isLoggedIn) { resolve('home') }
  //     else {
  //         resolve('login')
  //     }
  // }),
  root: 'home',
  routes: [
    {
      path: '$',
      component: Boot,
      // widgets: ['Menu'],
    },
    {
      path: 'home',
      component: Home,
      // widgets: ['Menu'],
    },
    // {
    //   path: 'about',
    //   component: About,
    //   widgets: ['Menu'],
    // },
    // {
    //   path: 'home/:message',
    //   component: Home,
    //   widgets: ['Menu'],
    // },
    // {
    //   path: 'user',
    //   component: User,
    //   widgets: ['Menu'],
    // },
    // {
    //   path: 'video',
    //   component: Video,
    //   widgets: ['Menu'],
    // },
    {
      path: 'moviedetails/:movieID',
      component: MovieDetails,
      name: 'moviedetails',
      // widgets: ['Menu'],
    },
    // {
    //   path: 'details',
    //   component: Details,
    //   // widgets: ['Menu'],
    // },
    {
      path: 'details/:movieID',
      component: Details,
      name: 'moredetails',
      // widgets: ['Menu'],
    },
  ],
  beforeEachRoute(from, to) {
    let isLoggedIn = true
    // let isLoggedIn = false;
    // isLoggedIn= await axios.post(/login,{creds});
    if (!isLoggedIn && to._hash == 'User') {
      console.log(" you can't access the User page")
      // return (true);   //true, to, from, 'path'
      // return (to);     //true, to, from, 'path'
      return from //true, to, from, 'path'
      // return ('path'); //true, to, from, 'path'
      // return (false);  //true, to, from, 'path'
    } else {
      console.log('user navigated to ' + to._hash)
      return true
    }

    // return new Promise((resolve, reject) => {
    //     let isLoggedIn = true;
    //     // isLoggedIn= await axios.post(/login,{creds});
    //     if (!isLoggedIn && to._hash == 'User') {
    //         console.log(' you can\'t access the User page');
    //         // resolve(true);   //true, to, from, 'path'
    //         // resolve(to);     //true, to, from, 'path'
    //         resolve(from);      //true, to, from, 'path'
    //         // resolve('path'); //true, to, from, 'path'
    //         // resolve(false);  //true, to, from, 'path'

    //     } else {
    //         console.log('user navigated to ' + to._hash);
    //         resolve(true)
    //     }
    // })
  },
  afterEachRoute(to) {
    console.log({ to })
  },
  // $ -- bootpage
  // * - 404 page
  // ! - error
  // home
  // /about
  // /user/User
  // /user/login
  // /products/:id
}
