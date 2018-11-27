import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import "./common-shared-styles";

export class RNListItem extends PolymerElement {
    static get template() {
        return html`
            <style include="common-shared-styles">
                :host {
                    display: flex;
                    align-items: center;
                    position: relative;
                    letter-spacing: .06rem;
                    list-style-type: none;
                    min-height: 3rem;
                    transition: all .3s ease;
                    @apply --rn-list-item;
                }

                :host-context(rn-list[orientation="horizontal"]) {
                    padding: 0 1.5rem;
                }

                :host-context(rn-list[orientation="vertical"]) {
                    padding: 0 1rem;
                }

                :host([selective]) {
                    cursor: pointer;
                }

                :host([selective][hover-blur]:hover) {
                    background-color: rgba(0, 0, 0, .07);
                }

                :host([selective][size-scalable]:hover)
                    transform: scale(1.025);
                }

                :host([selective][size-scalable]:active) {
                    transform: scale(0.975);
                }

                :host-context(rn-list[orientation="vertical"]):host([selected-border][selected])::after,
                :host-context(rn-list[orientation="vertical"]):host([border])::after {
                    content: "";
                    position: absolute;
                    left: 2px;
                    right: 2px;
                    bottom: 0;
                    height: 1px;
                    border-bottom: 1px solid var(--app-primary-color ,#333);
                    opacity: .7;
                }

                :host-context(rn-list[orientation="horizontal"]):host([selected-border][selected])::after,
                :host-context(rn-list[orientation="horizontal"]):host([border])::after {
                    content: "";
                    position: absolute;
                    left: 8px;
                    right: 8px;
                    bottom: -1px;
                    height: 1px;
                    border-bottom: 1px solid var(--app-primary-color ,#333);
                    opacity: .7;
                    transition: all .3s ease;
                }

                :host-context(rn-list[orientation="horizontal"]):host([border]:hover)::after {
                    left: 2px;
                    right: 2px;
                }
            </style>
            <slot></slot>
        `;
    }

    static get properties() {
        return {
            selective: {
                type: Boolean,
                reflectToAttribute: true
            },
            hoverBlur: {
                type: Boolean,
                reflectToAttribute: true
            },
            border: {
                type: Boolean,
                reflectToAttribute: true
            },
            sizeScalable: {
                type: Boolean,
                reflectToAttribute: true
            },
            selected: {
                type: Boolean,
                reflectToAttribute: true
            },
            selectedBorder: {
                type: Boolean,
                reflectToAttribute: true
            }
        }
    }
}

window.customElements.define("rn-list-item", RNListItem);
