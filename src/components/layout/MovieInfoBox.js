import { Lightning, Utils, Router } from '@lightningjs/sdk'
import { similarMovies } from '../../lib/api'
// import { similarMovies } from '../../lib/api'
import { MovieDetailsPage } from '../../pages/MovieDetailsPage'

import { Button } from './Button.js'
import { CardContentHorizontalLarge, Icon } from '@lightningjs/ui-components';

export class MovieInfoBox extends Lightning.Component {
    static _template() {
        // return {
        //     CardContentHorizontalLargeComponent: {
        //         type: CardContentHorizontalLarge, w: 1920 / 2, h: 1080 / 4,
        //         src: "",//tileImage,
        //         shouldCollapse: false,//args?.shouldCollapse,
        //         collapseToMetadata: false,//args?.collapseToMetadata,
        //         metadata: {
        //             details: '', title: '', description: '',
        //             provider: {
        //                 providers: [
        //                     {
        //                         type: Icon,
        //                         w: 96,
        //                         h: 48,
        //                         icon: null //xfinityLogo
        //                     }
        //                 ],
        //                 visibleCount: 3
        //             }
        //         }
        //     }
        // };

        return {
            x: 100,
            y: 100,
            w: 1920 / 2,
            h: 880,
            rect: true,
            color: 0xdd000000,
            flex: { direction: 'column', justifyContent: 'space-between', alignItems: 'stretch' },
            Top: {
                h: h => h / 2,
                flexItem: {
                    width: 1920 / 2,
                },
                flex: { direction: 'row', justifyContent: "space-evenly" },
                Metadata: {
                    y: 30,
                    flexItem: { width: 1920 / 4 },
                    flex: {
                        direction: 'column',
                        justifyContent: "flex-start"
                    },
                    Title: {
                        text:
                            { text: '' }
                    },
                    MetadataBTM: {
                        flex: { direction: 'row' },
                        ReleaseDate: { text: { fontSize: 24, text: '' } }, Language: { text: { fontSize: 24, text: '' } },
                    },
                    BTNS: {
                        flex: { direction: 'row' },
                        AddToFavBtn: { type: Button, label: '' }, SimilarMoviesBTN: { type: Button, label: 'view similar movies' },
                    }
                }, Poster: {
                    rect: true,
                    y: 30,
                    w: 200 * 1.5, h: (300 * 1.5) - 40
                },
            },
            Bottom: {
                rect: true,
                color: 0xaa010101,
                h: h => h / 2,
                flexItem: { width: (1920 / 2) - 30 },
                flex: { direction: 'row', justifyContent: "space-evenly" },
                BottomCol: {
                    flex: { direction: 'column', justifyContent: 'space-evenly', alignItems: 'stretch' },
                    RatingAndStars: {
                        Stars: {
                            text:
                                { text: '' }
                        },
                    },
                    Overview: {

                        w: (1920 / 2) - 60,
                        text:
                        {
                            wordWrap: true, wordWrapWidth: (1920 / 2) - 60,
                            fontSize: 32,
                            text: ''
                        }
                    },
                },
            }
        }
    }
    _init() {
        this.tag('Top.Metadata.Title').text.text = this.movieInfoBox.title;
        this.tag('Bottom.RatingAndStars.Stars').text.text = this.movieInfoBox.vote_average + '⭐' + " out of " + this.movieInfoBox.vote_count + " votes";
        this.tag('Overview').text.text = this.movieInfoBox.overview;
        this.tag('Top.Metadata.MetadataBTM.Language').text.text = " | " + this.movieInfoBox.original_language;
        this.tag('Top.Metadata.MetadataBTM.ReleaseDate').text.text = "released: " + this.movieInfoBox.release_date;
        this.tag('Top.Poster').src = `https://image.tmdb.org/t/p/w500/${this.movieInfoBox.poster_path}`;

        
        // this.tag('CardContentHorizontalLargeComponent').src = `https://image.tmdb.org/t/p/w500/${this.movieInfoBox.poster_path}`;
        // this.tag('CardContentHorizontalLargeComponent').metadata.title = this.movieInfoBox.title;
        // this.tag('CardContentHorizontalLargeComponent').metadata.details = this.movieInfoBox.release_date+ " | " + this.movieInfoBox.original_language+  this.movieInfoBox.vote_average + '⭐' + " out of " + this.movieInfoBox.vote_count + " votes";
        // this.tag('CardContentHorizontalLargeComponent').metadata.description = this.movieInfoBox.overview;
    }
    updateBackgroundImage(backdrop_path) {
        this.tag('Background').src = `https://image.tmdb.org/t/p/w500/${backdrop_path}`
    }
    updateBackgroundTitle(movieTitle) {
        this.tag('Top.Metadata.Title').text.text = movieTitle;

    }
}