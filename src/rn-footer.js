import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import "./common/rn-link";


class RNHeader extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    background-color: black;
                    @apply --rn-footer;
                }
            </style>
            <footer>
            </footer>
        `;
    }
}

window.customElements.define("rn-header", RNHeader);
