import { PolymerElement, html } from "@polymer/polymer/polymer-element";


class RNSectionTitle extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    display: flex;
                    justify-content: center;
                    margin-top: 1rem;
                    margin-bottom: 2rem;
                    @apply --rn-section-title;
                }

                h2 {
                    text-align: center;
                    font-size: 2rem;
                    border-bottom: 2px solid #333;
                    width: fit-content;
                    margin: 0 0 1rem;
                    padding: 0 .5rem;
                    letter-spacing: 2px;
                }
            </style>
            <h2><slot></slot></h2>
        `;
    }
}

window.customElements.define("rn-section-title", RNSectionTitle);
