import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import "./common-shared-styles";

class RNList extends PolymerElement {
    static get template() {
        return html`
            <style include="common-shared-styles">
                :host {
                    display: flex;
                    @apply --rn-list;
                }

                :host([orientation="horizontal"]) {
                    flex-direction: row;
                }

                :host([orientation="vertical"]) {
                    flex-direction: column;
                    margin: 0 2rem;
                }
            </style>
            <slot></slot>
        `;
    }

    static get properties() {
        return {
            orientation: {
                type: String,
                // horizontal | vertical
                value: "vertical",
                reflectToAttribute: true
            }
        }
    }
}

window.customElements.define("rn-list", RNList);
