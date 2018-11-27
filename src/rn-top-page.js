import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import "./common/rn-blur-image";
import "./common/rn-image";
import "./common/rn-link";
import "./common/rn-list";
import "./common/rn-selective-card";
import "./rn-access";
import "./rn-contest-records";
import "./rn-section-title";
import "./rn-side-blog-nav";

class RNTopPage extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                }

                section + section {
                    margin-top: 8rem;
                }

                .first-view {
                    position: relative;
                    max-height: calc(100vh - var(--header-height, 0));
                    box-shadow: inset 0px 0px 7px 3px rgba(0, 0, 0, .3);
                    overflow: hidden;
                }

                .first-view .name-wrapper {
                    color: white;
                    text-align: center;
                    position: absolute;
                    top: 40%;
                    left: 0;
                    right: 0;
                    z-index: 1;
                }

                .first-view .name-wrapper .title {
                    font-size: 5rem;
                    letter-spacing: .3rem;
                }

                .first-view .name-wrapper .subtitle {
                    font-size: 1.5rem;
                    letter-spacing: .1rem;
                }

                .first-view .page-list {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly;
                    align-items: center;
                    position: absolute;
                    bottom: 2rem;
                    z-index: 1;
                    color: white;
                    width: 100%;
                    box-sizing: border-box;
                }

                .first-view rn-link {
                    margin: 0 1rem;
                }

                .first-view .page-list rn-selective-card {
                    width: 12rem;
                    background-color: rgba(0, 0, 0, .3);
                }

                .first-view .page-list .content-name {
                    font-size: 1.5rem;
                    text-align: center;
                }

                .content-body {
                    display: flex;
                    width: 1280px;
                    margin: 4rem auto 0;
                    padding-bottom: 4rem;
                }

                .content-body > :first-child {
                    position: sticky;
                    height: fit-content;
                    top: calc(var(--header-heigh, 3.5rem) + 3rem);
                }

                .content-body > :last-child {
                    flex-grow: 1;
                }

                main {
                    margin-left: 3rem;
                }

                section {
                    margin: 0 auto;
                }

                @media (max-width: 1280px) and (min-width: 1081px) {
                    .content-body {
                        width: 960px;
                    }
                }

                @media (max-width: 1080px) {
                    .content-body {
                        width: calc(100% - 8rem);
                        margin: 4rem 4rem 0;
                    }
                }

                @media (max-width: 767px) {
                    rn-side-blog-nav {
                        display: none;
                    }

                    main {
                        margin: 0;
                        max-width: 100%;
                    }
                }
            </style>
            <div>
                <div class="first-view">
                    <div class="name-wrapper">
                        <div class="title">Rabbit-null</div>
                        <div class="subtitle">日本工学院八王子専門学校 情報技術研究部</div>
                    </div>
                    <div class="page-list">
                        <rn-link to="/blog">
                            <rn-selective-card>
                                <div class="content-name">Blog</div>
                            </rn-selective-card>
                        </rn-link>
                        <rn-link to="/products">
                            <rn-selective-card>
                                <div class="content-name">Products</div>
                            </rn-selective-card>
                        </rn-link>
                        <rn-link to="/members">
                            <rn-selective-card>
                                <div class="content-name">Members</div>
                            </rn-selective-card>
                        </rn-link>
                    </div>
                    <rn-blur-image source="/images/server-rack.jpg"></rn-blur-image>
                </div>
                <div class="content-body">
                    <div>
                        <rn-side-blog-nav></rn-side-blog-nav>
                    </div>
                    <main>
                        <section class="contest-records">
                            <rn-section-title>Contest Records</rn-section-title>
                            <rn-contest-records></rn-contest-records>
                        </section>
                        <section>
                            <rn-section-title>Access</rn-section-title>
                            <rn-access></rn-access>
                        </section>
                    </main>
                </div>
            </div>
        `;
    }

    ready() {
        super.ready();
    }

    _udpateStyle() {
        this.getClientRects();
    }
}

window.customElements.define("rn-top-page", RNTopPage);
