define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "hcb-comments/store/Comments",
    "dgrid/OnDemandGrid",
    "dgrid/extensions/ColumnHider",
    "dgrid/extensions/ColumnResizer",
    "dgrid/extensions/DijitRegistry",
    "hc-backend/dgrid/_Selection",
    "hc-backend/dgrid/_Refresher",
    "hc-backend/dgrid/columns/timestamp",
    "hc-backend/dgrid/columns/editor",
    "dgrid/Keyboard",
    "dgrid/selector",
    "dojo/i18n!../../nls/List"
], function(declare, lang, CommentsStore,
            OnDemandGrid, ColumnHider, ColumnResizer, DijitRegistry,
            _Selection, _Refresher, timestamp, editor, Keyboard,
            selector, translation) {
    
    return declare([ OnDemandGrid, ColumnHider, ColumnResizer,
                     Keyboard, _Selection, _Refresher, DijitRegistry ], {
        //  summary:
        //      Grid widget for displaying all available clients
        //      as list
        store: CommentsStore,

        columns: [
            selector({ label: "", width: 40, selectorType: "checkbox" }),
            {label: translation['labelId'], hidden: true, field: 'id', sortable: true, resizable: false},
            editor({label: translation['labelContent'], field: 'content', hidden: false,
                    sortable: true, resizable: true, route: '/show/:id'}),
            {label: translation['labelApprovedDeclined'], field: 'approved',
             sortable: true, resizable: true, formatter: function (value){
                return value && translation['labelApproved'] || translation['labelDeclined'];
            }},
            timestamp({label: translation['labelCreatedTimestamp'], field: 'createdTimestamp', sortable: true})
        ],

        loadingMessage: translation['loadingMessage'],
        noDataMessage: translation['noDataMessage'],

        showHeader: true,
        allowTextSelection: true
    });
});
