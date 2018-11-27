import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import "./common-shared-styles";

class RNViewPager extends PolymerElement {
    static get template() {
        return html`
            <style include="common-shared-styles">
                :host {
                    display : flex;
                    overflow: hidden;
                    transition: all 1s ease-out;
                    position  : relative;
                    @apply --rn-view-pager;
                }

                ::slotted(*) {
                    position  : relative;
                    overflow  : auto;
                    max-width : 100%;
                    min-width : 100%;
                    box-sizing: border-box;
                    transition: transform .3s ease;
                    margin    : 0;
                    width     : 0; /* chrome bug */
                }
            </style>
            <slot id="slot"></slot>
        `;
    }

    static get properties() {
        return {
            selectedIndex: {
                type: Number,
                observer: "_setSlotStyle",
                value: 0
            }
        }
    }

    ready() {
        super.ready();
        this.$.slot.addEventListener('slotchange', e => this._setSlotStyle(this.selectedIndex));
    }

    _setSlotStyle(index) {
        Array.from(this.children).forEach((child, i) => {
            child.style.left = `${-100 * i}%`;
            child.style.transform = `translate3d(${100 * (i - index)}%, 0, 0)`;
        });
    }
}

window.customElements.define("rn-view-pager", RNViewPager);
