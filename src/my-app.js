import { PolymerElement, html } from "@polymer/polymer";
import "@polymer/app-route/app-location";
import "@polymer/app-route/app-route";
import "@polymer/iron-pages/iron-pages";
import "./rn-header";


class SampleElement extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    --app-primary-color: #694A9A;
                    --header-height: 3.5rem;
                    --header-max-height: 3.5rem;
                    --content-background-color: #FAFBFD;
                }

                .content {
                    top: var(--header-height);
                    position: relative;
                    background-color: var(--content-background-color, black);
                    min-height: calc(100vh - var(--header-height));
                }

                rn-header {
                    z-index: 100;
                }
            </style>
            <app-location route="{{route}}"></app-location>
            <app-route
                route="{{route}}"
                pattern="/:page"
                data="{{routeData}}"
                tail="{{subroute}}">
            </app-route>
            <app-route
                route="{{subroute}}"
                pattern="/:id"
                data="{{subrouteData}}">
            </app-route>
            <rn-header></rn-header>
            <iron-pages class="content" selected={{page}} attr-for-selected="page-name" fallback-selection="fallback">
                <rn-top-page page-name="home"></rn-top-page>
                <div page-name="blog">
                    page2
                    <a href="/">top-page</a>
                </div>
                <div page-name="fallback">
                    NotFound
                    <a href="/">TopPage</a>
                </div>
            </iron-pages>
        `;
    }

    static get properties() {
        return {
            page: {
                type: String,
                reflectToAttribute: true,
                observer: "_pageChanged"
            },
            route: {
                type: Object,
                reflectToAttribute: true,
                observer: "_routeChanged"
            },
            tail: Boolean
        };
    }

    _routeChanged(route) {
        this.page = (
            ["/", "/blog"].includes(route.path) ? (
                route.path === "/" ? "home"
              :                     route.path.split("/")[1]
            )                                   : "fallback"
        );
    }

    _pageChanged(page) {
        switch (page) {
            case "home":
                import("./rn-top-page");
                break;
            case "blog":
                break;
            case "fallback":
                break;
        }
    }
}

customElements.define("my-app", SampleElement);
