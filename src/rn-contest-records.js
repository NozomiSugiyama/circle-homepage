import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import '@polymer/polymer/lib/elements/dom-if';
import '@polymer/polymer/lib/elements/dom-repeat';
import "./common/rn-image";
import "./common/rn-list-item-icon";
import "./common/rn-list-item";
import "./common/rn-list";
import "./common/rn-view-pager";
import contests from "./data/contests";


class RNContestRecords extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    @apply --contest-recordes;
                }

                .contest-recordes-widget {
                    display: flex;
                    justify-content: center;
                    position: relative;
                    @apply --contest-recordes-widget;
                }

                .contest-recordes-widget > :first-child {
                    width: 25rem;
                    flex-grow: 1;
                    display: flex;
                    position: relative;
                    align-items: flex-start;
                    --rn-image-img: {
                        max-height: 20rem;
                    }
                }

                .contest-recordes-widget > :last-child {
                    display: flex;
                    flex-direction: column;
                    max-width: 25rem;
                }

                .information {
                    position: absolute;
                    padding: .5rem 1rem;
                    text-align: right;
                    letter-spacing: 2px;
                    background-color: rgba(0, 0, 0, .4);
                    color: white;
                    margin: 8px;
                    bottom: 0;
                    right: 0;
                }

                .information > :nth-child(1) {
                    font-size: 1.8rem;
                }

                .information > :nth-child(2) {
                    font-size: 1.3rem;
                }

                .year-selector {
                    margin: 0 2rem .5rem;
                }

                .year-selector rn-list-item {
                    --rn-list-item: {
                        min-height: 2rem;
                    }
                }

                .item-list {
                }

                .item-list rn-list-item {
                    display: flex;
                    position: relative;
                }

                .item-list rn-list-item[selected]::before {
                    position: absolute;
                    content: "";
                    background-color: var(--app-primary-color);
                    width: 2px;
                    height: 100%;
                    top: 0;
                    bottom: 0;
                    left: 0;
                }

                .item-list .result {
                    position: relative;
                    text-align: right;
                    flex-grow: 1;
                }

                .item-list .result > * {
                    position: relative;
                    float: right;
                }

                .item-list .result > *::before {
                    content: "";
                    position: absolute;
                    top: calc(100% / 2);
                    left: -20px;
                    height: 1px;
                    width: 16px;
                    background-color: #333;
                }

                rn-view-pager {
                    margin: 0 2rem;
                }

                @media (max-width: 1280px) {
                    .contest-recordes-widget {
                        flex-direction: column;
                    }

                    .contest-recordes-widget > :first-child,
                    .contest-recordes-widget > :last-child {
                        width: 100%;
                        margin-top: 1rem;
                        max-width: none;
                    }
                }
            </style>
            <div class="contest-recordes-widget">
                <div>
                    <rn-image source="[[selectedContest.image]]"></rn-image>
                    <div class="information">
                        <div>[[selectedContest.name]]</div>
                        <div>[[selectedContest.result]]</div>
                    </div>
                </div>
                <div>
                    <rn-list orientation="horizontal" class="year-selector">
                        <dom-repeat items="[[_years]]" as="__year">
                            <template>
                                <rn-list-item
                                    selective
                                    on-click="_selectYear"
                                    data-year="[[__year]]"
                                    selected=[[_isSelectedYear(__year,selectedYear)]]
                                    selected-border
                                >
                                    [[__year]]
                                </rn-list-item>
                            </template>
                        </dom-repeat>
                    </rn-list>
                    <rn-view-pager selected-index=[[_selectedIndex]]>
                        <dom-repeat items="[[_formatedContests]]" as="__contests">
                            <template>
                                <rn-list class="item-list">
                                    <dom-repeat items="[[__contests]]">
                                        <template>
                                            <rn-list-item
                                                selective
                                                on-click="_selectContest"
                                                size-scalable="true"
                                                selected=[[_isSelectedContest(item,selectedContest)]]
                                                hover-blur
                                            >
                                                <rn-list-item-icon>
                                                    <rn-image source="[[item.icon]]" ></rn-image>
                                                </rn-list-item-icon>
                                                <div>[[item.name]]</div>
                                                <div class="result">
                                                    <div>[[item.result]]</div>
                                                </div>
                                            </rn-list-item>
                                        </template>
                                    </dom-repeat>
                                </rn-list>
                            </template>
                        </dom-repeat>
                    </rn-view-pager>
                </div>
            </div>
        `;
    }

    static get properties() {
        return {
            /*
            * [
            *     {
            *         date: Date,
            *         name: String,
            *         result: String,
            *         image: String
            *     }
            * ]
            */
            contests: {
                type: Object,
                value: contests,
            },
            selectedYear: {
                type: Number,
            },
            selectedContest: {
                type: Object
            },
            _formatedContests: {
                type: Object,
                computed: "_formatContests(contests)"
            },
            _years: {
                type: Array,
                computed: "_getYears(contests)"
            },
            _selectedIndex: {
                type: Number,
                computed: "_getSelectedIndex(_years, selectedYear)"
            }
        };
    }

    ready() {
        super.ready();
        if (this.selectedYear === undefined)
            this.selectedYear = Math.max(...this._getYears(this.contests))

        if (this.selectedContest === undefined)
            this.selectedContest =  this._formatedContests[this._selectedIndex][0];
    }

    _getYears(contests) {
        return (
            contests.map(x => x.date.getFullYear())
                .filter((x, i, self) => self.indexOf(x) === i)
        )
    }

    _formatContests(contests) {
        return this._getYears(this.contests).map(year =>
            this.contests.filter(x => x.date.getFullYear() === Number(year))
        );
    }

    // Click Event
    _selectYear(e) {
        this.selectedYear = Number(e.target.dataYear);
    }

    // Click Event
    _selectContest(e) {
        this.selectedContest = this._formatedContests[this._selectedIndex][e.model.get("index")];
    }

    _isSelectedContest(contest) {
        return this.selectedContest === contest;
    }

    _isSelectedYear(year) {
        return this.selectedYear === year;
    }

    _getSelectedIndex(_years, year) {
        return _years.indexOf(year);
    }
}

window.customElements.define("rn-contest-records", RNContestRecords);
