import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import '@polymer/polymer/lib/elements/dom-repeat';
import "./common/rn-card";
import "./common/rn-image";
import "./common/rn-list";
import "./common/rn-list-item";
import "./common/rn-list-item-icon";
import "./common/rn-view-pager";
import blogList from "./data/blogList";


class RNSideBlogNav extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    @apply --rn-side-blog-nav;
                }

                rn-card {
                    display: flex;
                    flex-direction: column;
                }

                rn-card > :first-child {
                    white-space: nowrap;
                }

                rn-card > :last-child {
                    flex-grow: 1;
                }

                rn-card > :first-child rn-list-item {
                    display: inline-flex;
                    justify-content: center;
                }
            </style>
            <rn-card
                selectedIndex$="[[_selectedIndex]]"
            >
                <rn-list orientation="horizontal">
                    <dom-repeat items="[[blogList]]" as="__blog">
                        <template>
                            <rn-list-item
                                on-click="_selectType"
                                selected="[[_isTypeSelected(index, _selectedIndex)]]"
                                selective
                                size-scalable
                                hover-blur
                                selected-border
                                style$="width: [[_blogTypeListWidth]];"
                            >
                                [[_toUpperCase(__blog.type)]]
                            </rn-list-item>
                        </template>
                    </dom-repeat>
                </rn-list>
                <rn-view-pager selected-index="[[_selectedIndex]]">
                    <dom-repeat items="[[blogList]]" as="__blog">
                        <template>
                            <rn-list>
                                <dom-repeat items="[[__blog.items]]">
                                    <template>
                                        <rn-list-item
                                            selective
                                            data-id="[[item.id]]"
                                            hover-blur
                                        >
                                            <rn-list-item-icon>
                                                <rn-image source="[[item.image]]"></rn-image>
                                            </rn-list-item-icon>
                                            [[item.title]]
                                        </rn-list-item>
                                    </template>
                                </dom-repeat>
                            </rn-list>
                        </template>
                    </dom-repeat>
                </rn-view-pager>
            </rn-card>
        `;
    }

    static get properties() {
        return {
            /*
            * [
            *     {
            *         date: Date,
            *         title: String,
            *         tags: [String],
            *         image: String,
            *         writer: String
            *     }
            * ]
            */
            blogList: {
                type: Object,
                value: blogList
            },
            _blogTypeListWidth: {
                type: String,
                value: "100%",
                computed: "_toBlogTypeListWidth(blogList)"
            },
            _selectedIndex: {
                type: Number,
                value: 0,
            }
        };
    }

    _toBlogTypeListWidth(blogList) {
        return `${100 / blogList.length}%`;
    }

    _toUpperCase(string) {
        return string.toUpperCase()
    }

    _isTypeSelected(index) {
        return this._selectedIndex === index;
    }

    _selectType(e) {
        console.log( Number(e.model.get("index")));
        this._selectedIndex = Number(e.model.get("index"));
    }
}

window.customElements.define("rn-side-blog-nav", RNSideBlogNav);
