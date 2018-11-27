import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import "./common-shared-styles";

class RNLink extends PolymerElement {
    static get template() {
        return html`
            <style include="common-shared-styles">
                :host {
                    @apply --rn-link;
                }
                a {
                    color: inherit;
                    text-decoration: none;
                    @apply --rn-link-a;
                }
            </style>
            <a href={{to}}><slot></slot></a>
        `;
    }

    static get properties() {
        return {
            to: String
        }
    }
}

window.customElements.define("rn-link", RNLink);
