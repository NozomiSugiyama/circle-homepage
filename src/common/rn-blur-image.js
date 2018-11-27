import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import "./common-shared-styles";

class RNBlurImage extends PolymerElement {
    static get template() {
        return html`
            <style include="common-shared-styles">
                :host {
                    position: relative;
                    display: flex;
                    filter: blur(3px);
                    margin: -3px -5px -5px -3px;
                    @apply --rn-blur-image;
                }
            </style>
            <rn-image source={{source}}></img>
            <slot></slot>
        `;
    }

    static get properties() {
        return {
            source: String
        }
    }
}

window.customElements.define("rn-blur-image", RNBlurImage);
