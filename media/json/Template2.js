//Reusable Block with block variables 
/*
[
        {"name":"title","label":"Title","fieldType":"string","mandatory":"true","defaultValue":"Test Title"},
        {"name":"toggle","label":"toggle","fieldType":"string","mandatory":"false"},
        {"name":"toggleShow","label":"toggle show","fieldType":"string","mandatory":"false"},
        {"name":"select","label":"Select","fieldType":"string","mandatory":"false"},
        {"name":"selectItems","label":"Select Items","fieldType":"string","mandatory":"false"},
        {"name":"selectShow","label":"Select Show","fieldType":"string","mandatory":"false"},
        {"name":"hilightText","label":"Hilight Text","fieldType":"string","mandatory":"false","defaultValue":"hilightedtext"},
        {"name":"hilightTextShow","label":"Hilight Text Show","fieldType":"string","mandatory":"false","defaultValue":"false"},
        {"name":"description","label":"Description","fieldType":"string","mandatory":"false","defaultValue":"Test description"},
        {"name":"footer","label":"Footer","fieldType":"string","mandatory":"false","defaultValue":"Test footer"},
        {"name":"footerLink","label":"Footer Link","fieldType":"string","mandatory":"false","defaultValue":"Test footer link"}
    ]
*/
export const data = {
    "block_id": "a7fd0671eb642110da1861c59c5228ed",
    "id": "a7fd0671eb642110da1861c59c5228ed",
    "parent_block_id": "",
    "active": true,
    "name": "Card Container",
    "label": "Card Container",
    "title": "",
    "subtitle": "",
    "order": "0",
    "type": {
        "group": "element",
        "name": "Generic Block",
        "id": "4cb9f85453db5110c733ddeeff7b12b4",
        "route": "generic",
        "props": [
            {
                "element": "component_name",
                "type": "string"
            },
            {
                "element": "component_properties",
                "type": "data_object"
            }
        ]
    },
    "lazyLoad": "0",
    "children": [
        {
            "block_id": "effdce35eb642110da1861c59c522825",
            "id": "effdce35eb642110da1861c59c522825",
            "parent_block_id": "a7fd0671eb642110da1861c59c5228ed",
            "active": true,
            "name": "Header container",
            "label": "Header container",
            "title": "",
            "subtitle": "",
            "order": "0",
            "type": {
                "group": "element",
                "name": "Generic Block",
                "id": "4cb9f85453db5110c733ddeeff7b12b4",
                "route": "generic",
                "props": [
                    {
                        "element": "component_name",
                        "type": "string"
                    },
                    {
                        "element": "component_properties",
                        "type": "data_object"
                    }
                ]
            },
            "lazyLoad": "0",
            "children": [
                {
                    "block_id": "a3fdce35eb642110da1861c59c522829",
                    "id": "a3fdce35eb642110da1861c59c522829",
                    "parent_block_id": "effdce35eb642110da1861c59c522825",
                    "active": true,
                    "name": "Title",
                    "label": "Title",
                    "title": "",
                    "subtitle": "",
                    "order": "0",
                    "type": {
                        "group": "element",
                        "name": "Generic Block",
                        "id": "4cb9f85453db5110c733ddeeff7b12b4",
                        "route": "generic",
                        "props": [
                            {
                                "element": "component_name",
                                "type": "string"
                            },
                            {
                                "element": "component_properties",
                                "type": "data_object"
                            }
                        ]
                    },
                    "lazyLoad": "0",
                    "children": [],
                    "props_details": {
                        "component_name": "now-heading",
                        "component_properties": "{\"variant\":\"title-secondary\",\"label\":\"${blockcontext.title}\",\"wontWrap\":false,\"hasNoMargin\":false,\"level\":\"1\"}"
                    },
                    "props_details_display": {},
                    "props_overrides": {},
                    "style": {
                        "padding-top": "10px"
                    },
                    "elementId": "",
                    "slotname": "@default",
                    "post_script": null,
                    "visibility": null,
                    "lazy_script": null,
                    "scope": "31774a2953839110a6f8ddeeff7b12cb",
                    "package": "31774a2953839110a6f8ddeeff7b12cb",
                    "slots": []
                },
                {
                    "block_id": "b6069301eb382110da1861c59c5228ec",
                    "id": "b6069301eb382110da1861c59c5228ec",
                    "parent_block_id": "effdce35eb642110da1861c59c522825",
                    "active": true,
                    "name": "Toggle button_control",
                    "label": "Toggle button_control",
                    "title": "",
                    "subtitle": "",
                    "order": "1",
                    "type": {
                        "group": "element",
                        "name": "Control Block",
                        "id": "c70afc5453db5110c733ddeeff7b1281",
                        "route": "ace-control",
                        "props": [
                            {
                                "element": "events_data",
                                "type": "json"
                            }
                        ]
                    },
                    "lazyLoad": "0",
                    "children": [
                        {
                            "block_id": "6760d6b5eb642110da1861c59c522882",
                            "id": "6760d6b5eb642110da1861c59c522882",
                            "parent_block_id": "b6069301eb382110da1861c59c5228ec",
                            "active": true,
                            "name": "Toggle button",
                            "label": "Toggle button",
                            "title": "",
                            "subtitle": "",
                            "order": "0",
                            "type": {
                                "group": "element",
                                "name": "Generic Block",
                                "id": "4cb9f85453db5110c733ddeeff7b12b4",
                                "route": "generic",
                                "props": [
                                    {
                                        "element": "component_name",
                                        "type": "string"
                                    },
                                    {
                                        "element": "component_properties",
                                        "type": "data_object"
                                    }
                                ]
                            },
                            "lazyLoad": "0",
                            "children": [],
                            "props_details": {
                                "component_name": "now-toggle",
                                "component_properties": "{\"size\":\"md\",\"checked\":\"${blockcontext.toggle}\",\"disabled\":false,\"label\":\"\",\"labelPosition\":\"start\"}"
                            },
                            "props_details_display": {},
                            "props_overrides": {
                                "visibility": "${blockcontext.toggleShow}"
                            },
                            "style": {
                                "padding": "10px"
                            },
                            "elementId": "",
                            "slotname": "",
                            "post_script": null,
                            "visibility": "answer=\"${blockcontext.toggle}\";",
                            "lazy_script": null,
                            "scope": "31774a2953839110a6f8ddeeff7b12cb",
                            "package": "31774a2953839110a6f8ddeeff7b12cb",
                            "slots": []
                        }
                    ],
                    "props_details": {
                        "events_data": "{\"NOW_TOGGLE#CHECKED_SET\":[{\"handler\":{\"name\":\"DISPATCH_EVENT\",\"eventName\":\"FEATURE_CARD_TOGGLE_CHANGED\",\"nowrap\":true},\"componentName\":\"now-toggle\"}]}"
                    },
                    "props_details_display": {},
                    "props_overrides": {},
                    "style": {},
                    "elementId": "",
                    "slotname": "@default",
                    "post_script": null,
                    "visibility": null,
                    "lazy_script": null,
                    "scope": "31774a2953839110a6f8ddeeff7b12cb",
                    "package": "31774a2953839110a6f8ddeeff7b12cb",
                    "slots": []
                }
            ],
            "props_details": {
                "component_name": "sn-styleable-container",
                "component_properties": "{\"styles\":{\"display\":\"flex\",\"justify-content\":\"space-between\"}}"
            },
            "props_details_display": {},
            "props_overrides": {},
            "style": {},
            "elementId": "",
            "slotname": "@default",
            "post_script": null,
            "visibility": null,
            "lazy_script": null,
            "scope": "31774a2953839110a6f8ddeeff7b12cb",
            "package": "31774a2953839110a6f8ddeeff7b12cb",
            "slots": [
                "@default"
            ]
        },
        {
            "block_id": "85f89deeeb382110da1861c59c522841",
            "id": "85f89deeeb382110da1861c59c522841",
            "parent_block_id": "a7fd0671eb642110da1861c59c5228ed",
            "active": true,
            "name": "Select_control",
            "label": "Select_control",
            "title": "",
            "subtitle": "",
            "order": "1",
            "type": {
                "group": "element",
                "name": "Control Block",
                "id": "c70afc5453db5110c733ddeeff7b1281",
                "route": "ace-control",
                "props": [
                    {
                        "element": "events_data",
                        "type": "json"
                    }
                ]
            },
            "lazyLoad": "0",
            "children": [
                {
                    "block_id": "8185def5eb642110da1861c59c5228aa",
                    "id": "8185def5eb642110da1861c59c5228aa",
                    "parent_block_id": "85f89deeeb382110da1861c59c522841",
                    "active": true,
                    "name": "Select",
                    "label": "Select",
                    "title": "",
                    "subtitle": "",
                    "order": "0",
                    "type": {
                        "group": "element",
                        "name": "Generic Block",
                        "id": "4cb9f85453db5110c733ddeeff7b12b4",
                        "route": "generic",
                        "props": [
                            {
                                "element": "component_name",
                                "type": "string"
                            },
                            {
                                "element": "component_properties",
                                "type": "data_object"
                            }
                        ]
                    },
                    "lazyLoad": "0",
                    "children": [
                        {
                            "block_id": "b477-b893-bb8a88-7ce2-8888aca9",
                            "id": "b477-b893-bb8a88-7ce2-8888aca9",
                            "active": true,
                            "name": "[Placeholder]",
                            "parent_block_id": "8185def5eb642110da1861c59c5228aa",
                            "slotname": "end",
                            "props_details": {
                                "component_name": "sn-ace-placeholder-content",
                                "component_properties": {
                                    "parentblockid": "8185def5eb642110da1861c59c5228aa",
                                    "popoverblock": {},
                                    "type": "BLOCK_TYPE",
                                    "popoverComponent": "sn-ace-base-builder-popover",
                                    "blockcontext": {},
                                    "resources": {
                                        "elementIdCollection": []
                                    },
                                    "slotname": "end",
                                    "placeholderBlockId": "b477-b893-bb8a88-7ce2-8888aca9"
                                }
                            },
                            "type": {
                                "route": "generic"
                            },
                            "children": [],
                            "slots": []
                        },
                        {
                            "block_id": "fade-134f-abb99b-706a-abaa4e99",
                            "id": "fade-134f-abb99b-706a-abaa4e99",
                            "active": true,
                            "name": "[Placeholder]",
                            "parent_block_id": "8185def5eb642110da1861c59c5228aa",
                            "slotname": "label-end",
                            "props_details": {
                                "component_name": "sn-ace-placeholder-content",
                                "component_properties": {
                                    "parentblockid": "8185def5eb642110da1861c59c5228aa",
                                    "popoverblock": {},
                                    "type": "BLOCK_TYPE",
                                    "popoverComponent": "sn-ace-base-builder-popover",
                                    "blockcontext": {},
                                    "resources": {
                                        "elementIdCollection": []
                                    },
                                    "slotname": "label-end",
                                    "placeholderBlockId": "fade-134f-abb99b-706a-abaa4e99"
                                }
                            },
                            "type": {
                                "route": "generic"
                            },
                            "children": [],
                            "slots": []
                        }
                    ],
                    "props_details": {
                        "component_name": "now-select",
                        "component_properties": "{\"size\":\"md\",\"search\":\"none\",\"label\":\"\",\"items\":\"${blockcontext.selectItems}\",\"optional\":false,\"required\":false,\"hideRequiredIndicator\":false,\"invalid\":false,\"messages\":[],\"itemsListConstrain\":{},\"selectedItem\":\"${blockcontext.select}\"}"
                    },
                    "props_details_display": {},
                    "props_overrides": {
                        "visibility": "${blockcontext.selectShow}"
                    },
                    "style": {
                        "width": "100%",
                        "height": "1%"
                    },
                    "elementId": "",
                    "slotname": "",
                    "post_script": null,
                    "visibility": null,
                    "lazy_script": null,
                    "scope": "31774a2953839110a6f8ddeeff7b12cb",
                    "package": "31774a2953839110a6f8ddeeff7b12cb",
                    "slots": [
                        "end",
                        "label-end"
                    ]
                }
            ],
            "props_details": {
                "events_data": "{\"NOW_SELECT#SELECTED_ITEM_SET\":[{\"handler\":{\"name\":\"DISPATCH_EVENT\",\"eventName\":\"FEATURE_CARD_ITEM_SELECTED\",\"nowrap\":true},\"componentName\":\"now-select\"}]}"
            },
            "props_details_display": {},
            "props_overrides": {},
            "style": {},
            "elementId": "",
            "slotname": "@default",
            "post_script": null,
            "visibility": null,
            "lazy_script": null,
            "scope": "31774a2953839110a6f8ddeeff7b12cb",
            "package": "31774a2953839110a6f8ddeeff7b12cb",
            "slots": []
        },
        {
            "block_id": "0985deb9eb642110da1861c59c5228f8",
            "id": "0985deb9eb642110da1861c59c5228f8",
            "parent_block_id": "a7fd0671eb642110da1861c59c5228ed",
            "active": true,
            "name": "Highlight Text",
            "label": "Highlight Text",
            "title": "",
            "subtitle": "",
            "order": "2",
            "type": {
                "group": "element",
                "name": "Generic Block",
                "id": "4cb9f85453db5110c733ddeeff7b12b4",
                "route": "generic",
                "props": [
                    {
                        "element": "component_name",
                        "type": "string"
                    },
                    {
                        "element": "component_properties",
                        "type": "data_object"
                    }
                ]
            },
            "lazyLoad": "0",
            "children": [],
            "props_details": {
                "component_name": "now-alert",
                "component_properties": "{\"status\":\"info\",\"content\":\"${blockcontext.highlightText}\",\"maxHeight\":\"\",\"expanded\":true,\"icon\":\"circle-info-outline\"}"
            },
            "props_details_display": {},
            "props_overrides": {
                "visibility": "${blockcontext.hilightTextShow}"
            },
            "style": {},
            "elementId": "",
            "slotname": "@default",
            "post_script": "(function(context, pageParams){ \n})(context, pageParams);",
            "visibility": null,
            "lazy_script": null,
            "scope": "31774a2953839110a6f8ddeeff7b12cb",
            "package": "31774a2953839110a6f8ddeeff7b12cb",
            "slots": []
        },
        {
            "block_id": "8985deb9eb642110da1861c59c5228fb",
            "id": "8985deb9eb642110da1861c59c5228fb",
            "parent_block_id": "a7fd0671eb642110da1861c59c5228ed",
            "active": true,
            "name": "description",
            "label": "description",
            "title": "",
            "subtitle": "",
            "order": "3",
            "type": {
                "group": "element",
                "name": "Generic Block",
                "id": "4cb9f85453db5110c733ddeeff7b12b4",
                "route": "generic",
                "props": [
                    {
                        "element": "component_name",
                        "type": "string"
                    },
                    {
                        "element": "component_properties",
                        "type": "data_object"
                    }
                ]
            },
            "lazyLoad": "0",
            "children": [],
            "props_details": {
                "component_name": "now-rich-text",
                "component_properties": "{\"html\":\"<p>${blockcontext.description}</p>\"}"
            },
            "props_details_display": {},
            "props_overrides": {},
            "style": {},
            "elementId": "",
            "slotname": "@default",
            "post_script": null,
            "visibility": null,
            "lazy_script": null,
            "scope": "31774a2953839110a6f8ddeeff7b12cb",
            "package": "31774a2953839110a6f8ddeeff7b12cb",
            "slots": []
        },
        {
            "block_id": "0d85deb9eb642110da1861c59c5228fe",
            "id": "0d85deb9eb642110da1861c59c5228fe",
            "parent_block_id": "a7fd0671eb642110da1861c59c5228ed",
            "active": true,
            "name": "footer",
            "label": "footer",
            "title": "",
            "subtitle": "",
            "order": "4",
            "type": {
                "group": "element",
                "name": "Generic Block",
                "id": "4cb9f85453db5110c733ddeeff7b12b4",
                "route": "generic",
                "props": [
                    {
                        "element": "component_name",
                        "type": "string"
                    },
                    {
                        "element": "component_properties",
                        "type": "data_object"
                    }
                ]
            },
            "lazyLoad": "0",
            "children": [],
            "props_details": {
                "component_name": "now-text-link",
                "component_properties": "{\"label\":\"${blockcontext.footer}\",\"href\":\"${blockcontext.footerLink}\",\"opensWindow\":false,\"variant\":\"primary\",\"underlined\":false,\"configAria\":{\"aria-label\":\"Accessible Label\"}}"
            },
            "props_details_display": {},
            "props_overrides": {},
            "style": {
                "padding-top": "20px",
                "position": "relative"
            },
            "elementId": "",
            "slotname": "@default",
            "post_script": null,
            "visibility": null,
            "lazy_script": null,
            "scope": "31774a2953839110a6f8ddeeff7b12cb",
            "package": "31774a2953839110a6f8ddeeff7b12cb",
            "slots": []
        }
    ],
    "props_details": {
        "component_name": "sn-styleable-container",
        "component_properties": "{\"styles\":{\"padding\":\"16px\",\"background\":\"#FFFFFF\",\"border\":\"1px solid #D3D6DC\",\"border-radius\":\"8px\",\"box-sizing\":\"border-box\",\"min-height\":\"13rem\",\"margin\":\"20px 0\",\"display\":\"flex\",\"flex-direction\":\"column\"}}"
    },
    "props_details_display": {},
    "props_overrides": {},
    "pageParams": null,
    "style": {},
    "elementId": "",
    "slotname": "",
    "post_script": null,
    "visibility": null,
    "lazy_script": null,
    "scope": "31774a2953839110a6f8ddeeff7b12cb",
    "package": "31774a2953839110a6f8ddeeff7b12cb",
    "slots": [
        "@default"
    ]
}