import { PolymerElement, html } from "@polymer/polymer/polymer-element";
// import "./common/rn-link";

class RNAccess extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    @apply --rn-access;
                }
            </style>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5074.333695949035!2d139.3402230837746!3d35.625359723948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x811a18d0cc4e5e0e!2z5pel5pys5bel5a2m6Zmi5YWr546L5a2Q5bCC6ZaA5a2m5qCh!5e0!3m2!1sja!2sjp!4v1540780078019"
                width="600"
                height="450"
                frameborder="0"
                style="border:0"
                allowfullscreen
            ></iframe>
        `;
    }
}

window.customElements.define("rn-access", RNAccess);
