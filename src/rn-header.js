import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import "./common/rn-link";


class RNHeader extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    display: flex;
                    align-items: center;
                    width: 100vw;
                    padding: 1rem 2rem;
                    background-color: var(--app-primary-color, black);
                    color: white;
                    height: var(--header-height, 52px);
                    max-height: var(--header-max-height, 52px);
                    position: fixed;
                    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, .3);
                    box-sizing: border-box;
                    @apply --rn-header;
                }

                .title rn-link {
                    font-size: 2rem;
                }

                nav {
                    flex-grow: 1;
                }

                ul {
                    float: right;
                    display: flex;
                }

                li {
                    display: flex;
                }

                li:not(:first-child) {
                    margin-left: 2rem;
                }

                nav rn-link {
                    font-size: 1.5rem;
                }
            </style>
            <div class="title">
                <rn-link to="/">Rabbit-null</rn-list>
            </div>
            <nav>
                <ul>
                    <li><rn-link to="/blog">Blog</rn-link></li>
                    <li><rn-link to="/products">Products</rn-link></li>
                    <li><rn-link to="/members">Members</rn-link></li>
                </ul>
            </nav>
        `;
    }
}

window.customElements.define("rn-header", RNHeader);
