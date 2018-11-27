import "@polymer/polymer/polymer-element";

const $_documentContainer = document.createElement("template");
$_documentContainer.innerHTML = `<dom-module id="common-shared-styles">
    <template>
        <style>
            * {
                margin: 0;
            }
            @media (max-width: 767px) {
                html {
                    font-size: 14px;
                }
            }
        </style>
    </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
