# movies

## com.domain.app.movies

### Getting started
> get an API KEY from THE MOVIEDB @ https://www.themoviedb.org/ 

> Open .env

> update the value of APP_MOVIEDB_API_KEY with your API KEY

```
.env
APP_MOVIEDB_API_KEY=<YOUR KEY HERE>
```

> Before you follow the steps below, make sure you have the
[Lightning-CLI](https://rdkcentral.github.io/Lightning-CLI/#/) installed _globally_ only your system

```
npm install -g @lightningjs/cli
```

#### Running the App

1. Install the NPM dependencies by running `npm install`

2. add moviedb api key to .env

3. Build the App using the _Lightning-CLI_ by running `lng build` inside the root of your project

4. Fire up a local webserver and open the App in a browser by running `lng serve` inside the root of your project

#### Developing the App

During development you can use the **watcher** functionality of the _Lightning-CLI_.

- use `lng watch` to automatically _rebuild_ your App whenever you make a change in the `src` or  `static` folder
- use `lng dev` to start the watcher and run a local webserver / open the App in a browser _at the same time_

#### Documentation

Use `lng docs` to open up the Lightning-SDK documentation.
