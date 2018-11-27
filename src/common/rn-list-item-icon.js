import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import "./common-shared-styles";

class RNListItemIcon extends PolymerElement {
    static get template() {
        return html`
            <style include="common-shared-styles">
                :host {
                    width: var(--rn-list-item-icon-width, 2rem);
                    max-height: var(--rn-list-item-icon-max-height, 2rem);
                    margin: var(--rn-list-item-icon-margin, 0 1rem 0 0);
                    @apply --rn-list-item-icon;
                }
            </style>
            <slot></slot>
        `;
    }
}

window.customElements.define("rn-list-item-icon", RNListItemIcon);
