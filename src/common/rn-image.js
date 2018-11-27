import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import "./common-shared-styles";

class RNImage extends PolymerElement {
    static get template() {
        return html`
            <style include="common-shared-styles">
                :host {
                    position: relative;
                    display: flex;
                    @apply --rn-image;
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    @apply --rn-image-img;
                }
                ::slotted(*) {
                    position: absolute;
                }
            </style>
            <img src={{source}}></img>
            <slot></slot>
        `;
    }

    static get properties() {
        return {
            source: String
        }
    }
}

window.customElements.define("rn-image", RNImage);
