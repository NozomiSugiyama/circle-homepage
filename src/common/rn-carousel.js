/*
* TODO: WIP
* absolute view item and auto change view item
*/

import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import "./common-shared-styles";

class RNCarousel extends PolymerElement {
    static get template() {
        return html`
            <style include="common-shared-styles">
                :host {
                }

                slot {
                }

                .carousel {
                    display: flex;
                    position: relative;
                    overflow: hidden;
                }

                .prev-button,
                .next-button {
                    width: 32px;
                    max-width: 32px;
                    position: relative;
                    background: rgba(0, 0, 0, .6);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .prev-button-icon,
                .next-button-icon {
                    width: 16px;
                    height: 16px;
                    border-left: 1px solid #FDFBFD;
                    border-bottom: 1px solid #FDFBFD;
                    position: relative;
                    transition: all .1s;
                }

                .prev-button-icon {
                    transform: rotate(45deg);
                    left: 6px;
                }

                .prev-button:hover .prev-button-icon {
                    left: 2px;
                }

                .next-button-icon {
                    transform: rotate(-135deg);
                    right: 6px;
                }

                .next-button:hover .next-button-icon {
                    right: 2px;
                }

                .item-list {
                    display: flex;
                    width: calc(100% - 32px * 2);
                    overflow: auto;
                }
            </style>
            <div class="carousel">
                <div class="prev-button">
                    <div class="prev-button-icon"></div>
                </div>
                <div class="item-list">
                    <slot id="slot"></slot>
                </div>
                <div class="next-button">
                    <div class="next-button-icon"></div>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    ready() {
        super.ready();
    }

    static get properties() {
        return {
            displayedItemCount: {
                type: Number,
                value: 3
            }
        }
    }
}

window.customElements.define("rn-carousel", RNCarousel);
