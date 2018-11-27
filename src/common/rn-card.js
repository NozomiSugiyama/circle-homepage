import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import "./common-shared-styles";

class RNCard extends PolymerElement {
    static get template() {
        return html`
            <style include="common-shared-styles">
                :host {
                    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, .3);
                    border-radius: 8px;
                    overflow: hidden;
                    @apply --rn-card;
                }
                slot {
                }
            </style>
            <slot></slot>
        `;
    }

    static get properties() {
        return {
        }
    }
}

window.customElements.define("rn-card", RNCard);
