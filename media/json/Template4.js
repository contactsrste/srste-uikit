export const data = {
    "block_id": "ba2ec45c77a1211029d09d7aaf5a993a",
    "id": "ba2ec45c77a1211029d09d7aaf5a993a",
    "parent_block_id": "",
    "active": true,
    "name": "Lower Ace Container",
    "label": "Lower Ace Container",
    "title": "",
    "subtitle": "",
    "order": "2",
    "type": {
        "group": "container",
        "name": "Dynamic Container",
        "id": "439e03fbeb610110d05213b347522802",
        "route": "dynamic-container",
        "props": [
            {
                "element": "allow_child_event_propagation",
                "type": "boolean"
            },
            {
                "element": "columns",
                "type": "string"
            }
        ],
        "macroponent": "4cf8ead277112110e07ab7fb8e5a9944"
    },
    "lazyLoad": "0",
    "children": [
        {
            "block_id": "f2c7189477e1211029d09d7aaf5a998e",
            "id": "f2c7189477e1211029d09d7aaf5a998e",
            "parent_block_id": "ba2ec45c77a1211029d09d7aaf5a993a",
            "active": true,
            "name": "Enhance the Journey heading",
            "label": "Enhance the Journey heading",
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
                "component_properties": "{\"variant\":\"header-secondary\",\"label\":\"Enhance the Journey\",\"wontWrap\":false,\"hasNoMargin\":true,\"level\":\"1\"}"
            },
            "props_details_display": {},
            "props_overrides": {},
            "style": {
                "margin-top": "12px"
            },
            "elementId": "heading_2",
            "slotname": "content",
            "post_script": null,
            "visibility": null,
            "lazy_script": null,
            "scope": "70b67750c7010110eadc357098c26026",
            "package": "70b67750c7010110eadc357098c26026"
        },
        {
            "block_id": "c3c750d477e1211029d09d7aaf5a998f",
            "id": "c3c750d477e1211029d09d7aaf5a998f",
            "parent_block_id": "ba2ec45c77a1211029d09d7aaf5a993a",
            "active": true,
            "name": "Enhance the Journey description",
            "label": "Enhance the Journey description",
            "title": "",
            "subtitle": "",
            "order": "1",
            "type": {
                "group": "element",
                "name": "Rich Text",
                "id": "bac3ad57eba10110d05213b34752281e",
                "route": "rich-text",
                "props": [
                    {
                        "element": "vars",
                        "type": "simple_name_values"
                    },
                    {
                        "element": "html",
                        "type": "html"
                    }
                ],
                "macroponent": "68f36197eba10110d05213b34752282e"
            },
            "lazyLoad": "0",
            "children": [],
            "props_details": {
                "vars": "{}",
                "html": "<p>Add optional features to help employees, managers and mentors get the most from their journey. For more details on setting any of these up, see the <a href=\"/$guided_setup.do#/content/92c5423c53174110fb2addeeff7b122a\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">guided setup</a>.</p>"
            },
            "props_details_display": {},
            "props_overrides": {},
            "style": {},
            "elementId": "rich_text_1",
            "slotname": "content",
            "post_script": null,
            "visibility": null,
            "lazy_script": null,
            "scope": "70b67750c7010110eadc357098c26026",
            "package": "70b67750c7010110eadc357098c26026"
        },
        {
            "block_id": "a45858d477e1211029d09d7aaf5a99f3",
            "id": "a45858d477e1211029d09d7aaf5a99f3",
            "parent_block_id": "ba2ec45c77a1211029d09d7aaf5a993a",
            "active": true,
            "name": "Enhance the Journey card repeater",
            "label": "Enhance the Journey card repeater",
            "title": "",
            "subtitle": "",
            "order": "2",
            "type": {
                "group": "element",
                "name": "Repeater",
                "id": "6458c173c300611044104fb9c840ddab",
                "route": "repeater",
                "props": [
                    {
                        "element": "items",
                        "type": "data_object"
                    }
                ]
            },
            "lazyLoad": "0",
            "children": [
                {
                    "block_id": "3d6755647729211029d09d7aaf5a996c",
                    "id": "3d6755647729211029d09d7aaf5a996c",
                    "parent_block_id": "a45858d477e1211029d09d7aaf5a99f3",
                    "active": true,
                    "name": "Enhance the journey reusable block",
                    "label": "Enhance the journey reusable block",
                    "title": "",
                    "subtitle": "",
                    "order": "0",
                    "type": {
                        "group": "element",
                        "name": "Reusable Block",
                        "id": "27ea3c9453db5110c733ddeeff7b126a",
                        "route": "reusable",
                        "props": [
                            {
                                "element": "block_parameters",
                                "type": "data_object"
                            },
                            {
                                "element": "clone",
                                "type": "boolean"
                            },
                            {
                                "element": "block_id",
                                "type": "string"
                            }
                        ]
                    },
                    "lazyLoad": "0",
                    "children": [
                        {
                            "block_id": "cec6145477e1211029d09d7aaf5a9927",
                            "id": "cec6145477e1211029d09d7aaf5a9927",
                            "parent_block_id": "",
                            "active": true,
                            "name": "Card base container",
                            "label": "Card base container",
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
                                    "block_id": "a2535d207729211029d09d7aaf5a998d",
                                    "id": "a2535d207729211029d09d7aaf5a998d",
                                    "parent_block_id": "cec6145477e1211029d09d7aaf5a9927",
                                    "active": true,
                                    "name": "Title no badge",
                                    "label": "Title no badge",
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
                                        "component_name": "now-stylized-text",
                                        "component_properties": "{\"tag\":\"h4\",\"text\":\"Title no badge\",\"css\":\"* { margin: 0;    overflow: hidden;    text-overflow: ellipsis;    display: -webkit-box;    -webkit-line-clamp: 1;             line-clamp: 1;     -webkit-box-orient: vertical; }\"}"
                                    },
                                    "props_details_display": {},
                                    "props_overrides": {
                                        "props_details": {
                                            "component_properties": {
                                                "text": "${blockcontext.title}"
                                            }
                                        },
                                        "visibility": "${blockcontext.no_badge}"
                                    },
                                    "style": {},
                                    "elementId": "stylized_text_4",
                                    "slotname": "@default",
                                    "post_script": null,
                                    "visibility": null,
                                    "lazy_script": null,
                                    "scope": "70b67750c7010110eadc357098c26026",
                                    "package": "70b67750c7010110eadc357098c26026"
                                },
                                {
                                    "block_id": "9d1be06477a5211029d09d7aaf5a99e0",
                                    "id": "9d1be06477a5211029d09d7aaf5a99e0",
                                    "parent_block_id": "cec6145477e1211029d09d7aaf5a9927",
                                    "active": true,
                                    "name": "Card Header container",
                                    "label": "Card Header container",
                                    "title": "",
                                    "subtitle": "",
                                    "order": "1",
                                    "type": {
                                        "group": "container",
                                        "name": "Dynamic Container",
                                        "id": "439e03fbeb610110d05213b347522802",
                                        "route": "dynamic-container",
                                        "props": [
                                            {
                                                "element": "allow_child_event_propagation",
                                                "type": "boolean"
                                            },
                                            {
                                                "element": "columns",
                                                "type": "string"
                                            }
                                        ],
                                        "macroponent": "4cf8ead277112110e07ab7fb8e5a9944"
                                    },
                                    "lazyLoad": "0",
                                    "children": [
                                        {
                                            "block_id": "6b73c9e877e5211029d09d7aaf5a999a",
                                            "id": "6b73c9e877e5211029d09d7aaf5a999a",
                                            "parent_block_id": "9d1be06477a5211029d09d7aaf5a99e0",
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
                                                "component_name": "now-stylized-text",
                                                "component_properties": "{\"text\":\"Title\",\"tag\":\"h4\",\"css\":\"* { margin: 0;    overflow: hidden;    text-overflow: ellipsis;    display: -webkit-box;    -webkit-line-clamp: 1;             line-clamp: 1;     -webkit-box-orient: vertical; }\"}"
                                            },
                                            "props_details_display": {},
                                            "props_overrides": {
                                                "props_details": {
                                                    "component_properties": {
                                                        "text": "${blockcontext.title}"
                                                    }
                                                },
                                                "visibility": "${blockcontext.show_badge}"
                                            },
                                            "style": {},
                                            "elementId": "stylized_text_3",
                                            "slotname": "content",
                                            "post_script": null,
                                            "visibility": null,
                                            "lazy_script": null,
                                            "scope": "70b67750c7010110eadc357098c26026",
                                            "package": "70b67750c7010110eadc357098c26026"
                                        },
                                        {
                                            "block_id": "e51be06477a5211029d09d7aaf5a99f6",
                                            "id": "e51be06477a5211029d09d7aaf5a99f6",
                                            "parent_block_id": "9d1be06477a5211029d09d7aaf5a99e0",
                                            "active": true,
                                            "name": "Card badge",
                                            "label": "Card badge",
                                            "title": "",
                                            "subtitle": "",
                                            "order": "1",
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
                                                "component_name": "now-highlighted-value",
                                                "component_properties": "{\"label\":\"badge\",\"variant\":\"tertiary\",\"color\":\"low\",\"icon\":\"presence-fill\"}"
                                            },
                                            "props_details_display": {},
                                            "props_overrides": {
                                                "props_details": {
                                                    "component_properties": {
                                                        "label": "${blockcontext.badge_label}",
                                                        "color": "${blockcontext.badge_color}",
                                                        "variant": "${blockcontext.badge_variant}",
                                                        "icon": "${blockcontext.badge_icon}"
                                                    }
                                                },
                                                "visibility": "${blockcontext.badge_label}"
                                            },
                                            "style": {},
                                            "elementId": "highlighted_value_1",
                                            "slotname": "content",
                                            "post_script": null,
                                            "visibility": null,
                                            "lazy_script": null,
                                            "scope": "70b67750c7010110eadc357098c26026",
                                            "package": "70b67750c7010110eadc357098c26026"
                                        }
                                    ],
                                    "props_details": {
                                        "allow_child_event_propagation": "false",
                                        "columns": "68,32"
                                    },
                                    "props_details_display": {},
                                    "props_overrides": {
                                        "visibility": "${blockcontext.show_badge}"
                                    },
                                    "style": {},
                                    "elementId": "dynamic_container_1",
                                    "slotname": "@default",
                                    "post_script": null,
                                    "visibility": null,
                                    "lazy_script": null,
                                    "scope": "70b67750c7010110eadc357098c26026",
                                    "package": "70b67750c7010110eadc357098c26026"
                                },
                                {
                                    "block_id": "c2c6509477e1211029d09d7aaf5a998b",
                                    "id": "c2c6509477e1211029d09d7aaf5a998b",
                                    "parent_block_id": "cec6145477e1211029d09d7aaf5a9927",
                                    "active": true,
                                    "name": "Card description",
                                    "label": "Card description",
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
                                        "component_name": "now-stylized-text",
                                        "component_properties": "{\"text\":\"subtitle\",\"tag\":\"p\",\"css\":\"* { \\toverflow: hidden; \\ttext-overflow: ellipsis; \\tdisplay: -webkit-box; \\t-webkit-line-clamp: 2; \\tline-clamp: 2; \\t-webkit-box-orient: vertical; }\"}"
                                    },
                                    "props_details_display": {},
                                    "props_overrides": {
                                        "props_details": {
                                            "component_properties": {
                                                "text": "${blockcontext.subtitle}"
                                            }
                                        }
                                    },
                                    "style": {},
                                    "elementId": "stylized_text_1",
                                    "slotname": "@default",
                                    "post_script": null,
                                    "visibility": null,
                                    "lazy_script": null,
                                    "scope": "70b67750c7010110eadc357098c26026",
                                    "package": "70b67750c7010110eadc357098c26026"
                                },
                                {
                                    "block_id": "ed077d2477a9211029d09d7aaf5a99e1",
                                    "id": "ed077d2477a9211029d09d7aaf5a99e1",
                                    "parent_block_id": "cec6145477e1211029d09d7aaf5a9927",
                                    "active": true,
                                    "name": "Button 1",
                                    "label": "Button 1",
                                    "title": "",
                                    "subtitle": "",
                                    "order": "3",
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
                                            "block_id": "c2c6509477e1211029d09d7aaf5a998f",
                                            "id": "c2c6509477e1211029d09d7aaf5a998f",
                                            "parent_block_id": "ed077d2477a9211029d09d7aaf5a99e1",
                                            "active": true,
                                            "name": "Button link",
                                            "label": "Button link",
                                            "title": "Button text",
                                            "subtitle": "",
                                            "order": "0",
                                            "type": {
                                                "group": "action",
                                                "name": "Button",
                                                "id": "02c8c279c3e401104b8e88c7c840dde2",
                                                "route": "button",
                                                "props": [
                                                    {
                                                        "element": "action_type",
                                                        "type": "string"
                                                    },
                                                    {
                                                        "element": "button_size",
                                                        "type": "string"
                                                    },
                                                    {
                                                        "element": "variant",
                                                        "type": "string"
                                                    },
                                                    {
                                                        "element": "link",
                                                        "type": "url"
                                                    },
                                                    {
                                                        "element": "event_name",
                                                        "type": "string"
                                                    },
                                                    {
                                                        "element": "disabled",
                                                        "type": "boolean"
                                                    },
                                                    {
                                                        "element": "icon",
                                                        "type": "string"
                                                    }
                                                ],
                                                "macroponent": "87b330a2536141102958ddeeff7b12b2"
                                            },
                                            "lazyLoad": "0",
                                            "children": [],
                                            "props_details": {
                                                "action_type": "event",
                                                "button_size": "sm",
                                                "variant": "tertiary",
                                                "link": "",
                                                "event_name": "",
                                                "disabled": "false",
                                                "icon": ""
                                            },
                                            "props_details_display": {},
                                            "props_overrides": {
                                                "title": "${blockcontext.button_text}"
                                            },
                                            "style": {
                                                "width": "100%"
                                            },
                                            "elementId": "button_1",
                                            "slotname": "@default",
                                            "post_script": null,
                                            "visibility": null,
                                            "lazy_script": null,
                                            "scope": "70b67750c7010110eadc357098c26026",
                                            "package": "70b67750c7010110eadc357098c26026"
                                        }
                                    ],
                                    "props_details": {
                                        "events_data": "{\"ACE_ACTION_PERFORMED\":[{\"handler\":{\"name\":\"NAVIGATE_TO_URL\",\"navigationType\":\"url\",\"url\":\"${blockcontext.button_link}\"},\"componentName\":\"\"}]}"
                                    },
                                    "props_details_display": {},
                                    "props_overrides": {},
                                    "style": {},
                                    "elementId": "",
                                    "slotname": "@default",
                                    "post_script": null,
                                    "visibility": "answer=true;",
                                    "lazy_script": null,
                                    "scope": "70b67750c7010110eadc357098c26026",
                                    "package": "70b67750c7010110eadc357098c26026"
                                }
                            ],
                            "props_details": {
                                "component_name": "now-card",
                                "component_properties": "{\"size\":\"lg\",\"interaction\":\"none\",\"hideShadow\":false,\"selected\":false,\"sidebar\":{},\"configAria\":{}}"
                            },
                            "props_details_display": {},
                            "props_overrides": {},
                            "style": {},
                            "elementId": "card_base_container_1",
                            "slotname": "",
                            "post_script": null,
                            "visibility": null,
                            "lazy_script": null,
                            "scope": "70b67750c7010110eadc357098c26026",
                            "package": "70b67750c7010110eadc357098c26026"
                        }
                    ],
                    "props_details": {
                        "block_parameters": "{\"title\":\"${item.title}\",\"subtitle\":\"${item.subtitle}\",\"button_text\":\"${item.button_text}\",\"button_link\":\"${item.button_link}\",\"badge_label\":\"${item.badge.label}\",\"badge_icon\":\"${item.badge.icon}\",\"badge_variant\":\"${item.badge.variant}\",\"badge_color\":\"${item.badge.color}\",\"show_badge\":\"${item.show_badge}\",\"no_badge\":\"${item.no_badge}\"}",
                        "clone": "false",
                        "block_id": "78c314d077e1211029d09d7aaf5a995a"
                    },
                    "props_details_display": {},
                    "props_overrides": {},
                    "style": {},
                    "elementId": "enhance_the_journey_card_1",
                    "slotname": "@default",
                    "post_script": null,
                    "visibility": null,
                    "lazy_script": null,
                    "scope": "70b67750c7010110eadc357098c26026",
                    "package": "70b67750c7010110eadc357098c26026"
                }
            ],
            "props_details": {
                "items": [
                    {
                        "title": "Personalized message",
                        "subtitle": "Set up email templates to send personalized messages to employees throughout a journey.",
                        "button_text": "Manage messages",
                        "button_link": "/now/nav/ui/classic/params/target/sn_hr_core_email_content_list.do?sysparm_query=type=journey_message^table=sn_jny_journey",
                        "no_badge": true,
                        "show_badge": false
                    },
                    {
                        "title": "Quick links",
                        "subtitle": "Give employees access to helpful resources throughout their journey.",
                        "button_text": "Manage quick links",
                        "button_link": "/now/nav/ui/classic/params/target/sn_jny_m2m_journey_config_quick_link_list.do",
                        "no_badge": true,
                        "show_badge": false
                    },
                    {
                        "title": "Learning posts",
                        "subtitle": "Personalize journeys or tasks with AI-powered learning recommendations.",
                        "button_text": "Install learning posts",
                        "button_link": "https://store.servicenow.com/sn_appstore_store.do#!/store/application/20f2dbe30f312010ff5ac8337a767e7b",
                        "show_badge": true,
                        "no_badge": false,
                        "badge": {
                            "label": "Available to install",
                            "variant": "tertiary",
                            "color": "info",
                            "icon": "circle-exclamation-outline"
                        }
                    },
                    {
                        "title": "Microsoft Exchange Online Spoke",
                        "subtitle": "Install the Microsoft Exchange online spoke to enable meeting scheduling from journey accelerator tasks.",
                        "button_text": "Install spoke",
                        "button_link": "https://store.servicenow.com/sn_appstore_store.do#!/store/application/ab1889e6db6cb700308ddd384b9619e0",
                        "show_badge": true,
                        "no_badge": false,
                        "badge": {
                            "label": "Available to install",
                            "variant": "tertiary",
                            "color": "info",
                            "icon": "circle-exclamation-outline"
                        }
                    },
                    {
                        "title": "Listening posts",
                        "subtitle": "Create simple pulse-check surveys to gain insights at various stages of the employee's journey.",
                        "button_text": "Install listening posts",
                        "button_link": "https://store.servicenow.com/sn_appstore_store.do#!/store/application/d52bb3b1732210102983fd2927f6a7a7",
                        "show_badge": true,
                        "no_badge": false,
                        "badge": {
                            "label": "Available to install",
                            "variant": "tertiary",
                            "color": "info",
                            "icon": "circle-exclamation-outline"
                        }
                    }
                ]
            },
            "props_details_display": {},
            "props_overrides": {},
            "style": {
                "width": "100%",
                "display": "grid",
                "grid-template-columns": "repeat(3, 1fr)",
                "grid-template-rows": "1fr 1fr",
                "grid-auto-rows": "1fr",
                "grid-auto-columns": "1fr",
                "gap": "12px"
            },
            "elementId": "repeater_1",
            "slotname": "content",
            "post_script": "(function(context) {\n        })(context);",
            "visibility": null,
            "lazy_script": null,
            "scope": "70b67750c7010110eadc357098c26026",
            "package": "70b67750c7010110eadc357098c26026"
        }
    ],
    "props_details": {
        "allow_child_event_propagation": "false",
        "columns": "100"
    },
    "props_details_display": {},
    "props_overrides": {},
    "style": {
        "margin-top": "var(--now-static-space--lg)"
    },
    "elementId": "dynamic_container_3",
    "slotname": "",
    "post_script": "(function(context, pageParams){  /*   context = {    'block_id': @sysId,    'name': @String,    'title': @String,    'subtitle': @String,    'order': @Number,    'type': @Object,    'children': @Array[context],    'props_details': @Object   };  */ })(context, pageParams);",
    "visibility": "answer=true;",
    "lazy_script": null,
    "scope": "70b67750c7010110eadc357098c26026",
    "package": "70b67750c7010110eadc357098c26026",
    "isRoot": true
}