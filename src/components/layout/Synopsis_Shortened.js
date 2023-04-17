import { Lightning, Utils, Router } from '@lightningjs/sdk'
import { Button } from './Button'
export class Synopsis_Shortened extends Lightning.Component {
    static _template() {
        const PADDING = 30;
        return {
            x: (1920 / 4) - (PADDING / 2),
            y: 680 - (PADDING / 2),
            w: (1920 / 2) + PADDING,
            h: (1080 - 780) + PADDING,
            rect: true,
            color: 0xaa000033,
            outline: "0xaa000033 1rem solid",

            flex: { direction: 'column', },
            Header: {
                flexItem: {
                    // minWidth: 400,
                    maxWidth: (1920 / 2) + PADDING,
                    // padding: 15
                    padding: PADDING / 2

                },
                flex: { direction: 'row', justifyContent: 'space-between' },
                // paddingColor: 0xff111111,
                Title: {
                    x: PADDING,
                    y: PADDING,

                    text:
                    {
                        // paddingLeft: PADDING / 2, paddingRight: PADDING / 2, 
                        text: ''
                    }
                },
                Stars: {
                    // x: PADDING,
                    y: PADDING,
                    text:
                        { paddingLeft: PADDING / 2, paddingRight: PADDING / 2, text: '' }
                },

            },
            Overview: {
                w: (1920 / 2) - (PADDING / 2),
                x: PADDING / 2,
                y: PADDING,
                text:
                {
                    paddingLeft: PADDING / 2, paddingRight: PADDING / 2,
                    wordWrap: true, wordWrapWidth: (1920 / 2) - 10,
                    // wordWrap: true,
                    fontSize: 32,
                    // textOverflow: 'ellipsis',
                    text: '',
                }
            },
            // FavoriteBtn: {}
        }
    }
    _init() {
        if (this.movie.noMovie) {
            this.tag('Overview').text.text = this.movie.fillerMessage ?? '...';

        } else {
            const stars = this.movie.vote_average + '⭐';
            this.tag('Overview').text.text = this.movie.overview;
            this.tag('Header.Stars').text.text = this.movie.vote_average + '⭐';
            this.tag('Header.Title').text.text = this.movie.title;
            // this.handlePatchFavLabel(this.isFavorite)
        }
    }
    _handleDown() { }
    _handleUp() { Router.focusPage() }
    _handleEnter() {
        this.handleToggleFavoriteButton();
    }
}
