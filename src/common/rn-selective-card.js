import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import "./common-shared-styles";

class RNSelectiveCard extends PolymerElement {
    static get template() {
        return html`
            <style include="common-shared-styles">
                :host {
                    position: relative;
                    display: flex;
                    cursor: pointer;
                    border: 1px solid #ccc;
                    box-sizing: border-box;
                    @apply --rn-selective-card;
                }

                .animation-content {
                    width: 100%;
                }

                .animation-inner-content {
                    padding: 1rem;
                }

                .animation-content::after,
                .animation-content::before,
                .animation-inner-content::before,
                .animation-inner-content::after {
                    background-color: var(--app-primary-color, #3498db);
                    content: "";
                    display: block;
                    position: absolute;
                    z-index: 10;
                    transition: all .3s ease;
                }

                .animation-content::after {
                    height: 1px;
                    left: -1px;
                    top: -1px;
                    width: 0px;
                }

                .animation-content::before {
                    bottom: -1px;
                    height: 1px;
                    right: -1px;
                    width: 0px;
                }

                .animation-inner-content::after {
                    bottom: -1px;
                    height: 0px;
                    left: -1px;
                    width: 1px;
                }

                .animation-inner-content::before {
                    height: 0px;
                    right: -1px;
                    top: -1px;
                    width: 1px;
                }

                .animation-content:hover::after,
                .animation-content:hover::before {
                    width: 100%;
                    width: calc(100% + 1px);
                }

                .animation-content:hover .animation-inner-content::after,
                .animation-content:hover .animation-inner-content::before {
                    height: 100%;
                    height: calc(100% + 1px);
                }
            </style>
            <div class="animation-content">
                <div class="animation-inner-content">
                    <slot></slot>
                </div>
            </div>
        `;
    }
}

window.customElements.define("rn-selective-card", RNSelectiveCard);
