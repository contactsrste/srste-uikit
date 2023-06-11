export const getComponentMetadata = () => {
    return {
        "mui-accordion": {
            "props": [
                { 
                    "name": "sx", 
                    "label": "Styles", 
                    "type": "styles" 
                }
            ],
            "events": [
            ],
            "slots": [
                {
                    name: "accordion_summary",
                    allowed: []
                },
                {
                    name: "accordion_details",
                    allowed: []
                }
            ]
        },
        "mui-alert": {
            "props": [
                {
                    "name": "severity",
                    "defaultValue": "info",
                    "type": "string"
                },
                {
                    "name": "icon",
                    "defaultValue": "Info",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-alert-title": {
            "props": [
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-appbar": {
            "props": [
                {
                    "name": "color",
                    "defaultValue": "primary",
                    "type": "string"
                },
                {
                    "name": "position",
                    "defaultValue": "fixed",
                    "type": "string"
                },
                {
                    "name": "elevation",
                    "defaultValue": 4,
                    "type": "number"
                },
                {
                    "name": "disableGutters",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "variant",
                    "defaultValue": "elevation",
                    "type": "string"
                },
                {
                    "name": "className",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-autocomplete": {
            "props": [
                {
                    "name": "id",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "options",
                    "defaultValue": [],
                    "type": "object"
                },
                {
                    "name": "value",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "onChange",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "renderInput",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "className",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-avatar": {
            "props": [
                {
                    "name": "alt",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "src",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "srcSet",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "sizes",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "variant",
                    "defaultValue": "circular",
                    "type": "string"
                },
                {
                    "name": "color",
                    "defaultValue": "default",
                    "type": "string"
                },
                {
                    "name": "content",
                    "defaultValue": null,
                    "type": "object"
                },
                {
                    "name": "className",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-avatar-group": {
            "props": [
                {
                    "name": "max",
                    "defaultValue": 5,
                    "type": "number"
                },
                {
                    "name": "spacing",
                    "defaultValue": "small",
                    "type": "string"
                },
                {
                    "name": "variant",
                    "defaultValue": "circular",
                    "type": "string"
                },
                {
                    "name": "className",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": ["mui-avatar"]
                }
            ]
        },
        "mui-backdrop": {
            "props": [
                {
                    "name": "open",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "invisible",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "transitionDuration",
                    "defaultValue": 300,
                    "type": "number"
                },
                {
                    "name": "timeout",
                    "defaultValue": 0,
                    "type": "number"
                },
                {
                    "name": "onClick",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "onMouseDown",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "onMouseUp",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-badge": {
            "props": [
                {
                    "name": "badgeContent",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "color",
                    "defaultValue": "primary",
                    "type": "string"
                },
                {
                    "name": "variant",
                    "defaultValue": "standard",
                    "type": "string"
                },
                {
                    "name": "invisible",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "overlap",
                    "defaultValue": "rectangular",
                    "type": "string"
                },
                {
                    "name": "anchorOrigin",
                    "defaultValue": {
                        "vertical": "top",
                        "horizontal": "right"
                    },
                    "type": "object"
                },
                {
                    "name": "max",
                    "defaultValue": 99,
                    "type": "number"
                },
                {
                    "name": "showZero",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-bottom-navigation": {
            "props": [
                {
                    "name": "value",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "showLabels",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "color",
                    "defaultValue": "primary",
                    "type": "string"
                },
                {
                    "name": "onChange",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-bottom-navigation-action": {
            "props": [
                {
                    "name": "icon",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "label",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "value",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "showLabel",
                    "defaultValue": true,
                    "type": "boolean"
                },
                {
                    "name": "selected",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "onChange",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-box": {
            "props": [
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-breadcrumbs": {
            "props": [
                {
                    "name": "separator",
                    "defaultValue": "/",
                    "type": "string"
                },
                {
                    "name": "maxItems",
                    "defaultValue": null,
                    "type": "number"
                },
                {
                    "name": "aria-label",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "expandText",
                    "defaultValue": "Show path",
                    "type": "string"
                },
                {
                    "name": "collapseText",
                    "defaultValue": "Hide path",
                    "type": "string"
                },
                {
                    "name": "onClick",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": [
                        "srs-breadcrumb"
                    ]
                }
            ]
        },
        "mui-button": {
            "props": [
                {
                    "name": "variant",
                    "defaultValue": "contained",
                    "type": "string"
                },
                {
                    "name": "label",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "color",
                    "defaultValue": "primary",
                    "type": "string"
                },
                {
                    "name": "size",
                    "defaultValue": "medium",
                    "type": "string"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "onClick",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "startIcon",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "endIcon",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "fullWidth",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [
                {
                    "name": "SrsMuiButton#clicked",
                    "payload": {}
                }
            ],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-button-base": {
            "props": [
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "onClick",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "component",
                    "defaultValue": "button",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-button-group": {
            "props": [
                {
                    "name": "variant",
                    "defaultValue": "outlined",
                    "type": "string"
                },
                {
                    "name": "color",
                    "defaultValue": "default",
                    "type": "string"
                },
                {
                    "name": "size",
                    "defaultValue": "medium",
                    "type": "string"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "fullWidth",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "aria-label",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": ["mui-button"]
                }
            ]
        },
        "mui-card": {
            "props": [
                {
                    "name": "variant",
                    "defaultValue": "outlined",
                    "type": "string"
                },
                {
                    "name": "raised",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "elevation",
                    "defaultValue": 1,
                    "type": "number"
                },
                {
                    "name": "square",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-card-action-area": {
            "props": [
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disableRipple",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-card-actions": {
            "props": [
                {
                    "name": "disableSpacing",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-card-content": {
            "props": [
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-card-header": {
            "props": [
                {
                    "name": "title",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "subheader",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "disableTypography",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-card-media": {
            "props": [
                {
                    "name": "component",
                    "defaultValue": "img",
                    "type": "string"
                },
                {
                    "name": "image",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "src",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "alt",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "title",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-checkbox": {
            "props": [
                {
                    "name": "checked",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "color",
                    "defaultValue": "primary",
                    "type": "string"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "inputProps",
                    "defaultValue": {},
                    "type": "object"
                },
                {
                    "name": "indeterminate",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "onChange",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-chip": {
            "props": [
                {
                    "name": "label",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "color",
                    "defaultValue": "default",
                    "type": "string"
                },
                {
                    "name": "variant",
                    "defaultValue": "filled",
                    "type": "string"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "clickable",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "onClick",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-circular-progress": {
            "props": [
                {
                    "name": "color",
                    "defaultValue": "primary",
                    "type": "string"
                },
                {
                    "name": "size",
                    "defaultValue": 40,
                    "type": "number"
                },
                {
                    "name": "thickness",
                    "defaultValue": 4,
                    "type": "number"
                },
                {
                    "name": "value",
                    "defaultValue": null,
                    "type": "number"
                },
                {
                    "name": "min",
                    "defaultValue": 0,
                    "type": "number"
                },
                {
                    "name": "max",
                    "defaultValue": 100,
                    "type": "number"
                },
                {
                    "name": "disableShrink",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "variant",
                    "defaultValue": "indeterminate",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-collapse": {
            "props": [
                {
                    "name": "in",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "collapsedHeight",
                    "defaultValue": "0px",
                    "type": "string"
                },
                {
                    "name": "timeout",
                    "defaultValue": "auto",
                    "type": "string"
                },
                {
                    "name": "orientation",
                    "defaultValue": "vertical",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-container": {
            "props": [
                {
                    "name": "maxWidth",
                    "defaultValue": "lg",
                    "type": "string"
                },
                {
                    "name": "disableGutters",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "fixed",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-cssbaseline": {
            "props": [
                {
                    "name": "content",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-table": {
            "props": [
                {
                    "name": "rows",
                    "defaultValue": [],
                    "type": "object"
                },
                {
                    "name": "columns",
                    "defaultValue": [],
                    "type": "object"
                },
                {
                    "name": "page_number",
                    "defaultValue": 0,
                    "type": "number"
                },
                {
                    "name": "page_size",
                    "defaultValue": 10,
                    "type": "number"
                },
                {
                    "name": "enable_selection",
                    "defaultValue": true,
                    "type": "boolean"
                },
                {
                    "name": "display_mode",
                    "defaultValue": "simple",
                    "type": "string"
                },
                {
                    "name": "enable_row_select_onclick",
                    "defaultValue": true,
                    "type": "boolean"
                }
            ],
            "events": [],
            "slots": []
        },
        "mui-dialog": {
            "props": [
                {
                    "name": "open",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disableEscapeKeyDown",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "maxWidth",
                    "defaultValue": "sm",
                    "type": "string"
                },
                {
                    "name": "fullWidth",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "scroll",
                    "defaultValue": "paper",
                    "type": "string"
                },
                {
                    "name": "aria-labelledby",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-dialog-actions": {
            "props": [
                {
                    "name": "disableSpacing",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-dialog-content": {
            "props": [
                {
                    "name": "dividers",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-dialog-content-text": {
            "props": [
                {
                    "name": "content",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "color",
                    "defaultValue": "initial",
                    "type": "string"
                },
                {
                    "name": "component",
                    "defaultValue": "div",
                    "type": "string"
                },
                {
                    "name": "id",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "variant",
                    "defaultValue": "body1",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-dialog-title": {
            "props": [
                {
                    "name": "content",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "disableTypography",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "id",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-divider": {
            "props": [
                {
                    "name": "orientation",
                    "defaultValue": "horizontal",
                    "type": "string"
                },
                {
                    "name": "variant",
                    "defaultValue": "fullWidth",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-drawer": {
            "props": [
                {
                    "name": "anchor",
                    "defaultValue": "left",
                    "type": "string"
                },
                {
                    "name": "open",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "variant",
                    "defaultValue": "permanent",
                    "type": "string"
                },
                {
                    "name": "width",
                    "defaultValue": 240,
                    "type": "number"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-fab": {
            "props": [
                {
                    "name": "color",
                    "defaultValue": "primary",
                    "type": "string"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disableFocusRipple",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disableRipple",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-filled-input": {
            "props": [
                {
                    "name": "content",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "error",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "id",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "multiline",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "placeholder",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "value",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-formcontrol": {
            "props": [
                {
                    "name": "content",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "error",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "required",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "variant",
                    "defaultValue": "standard",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": ["mui-input", "mui-select", "mui-autocomplete"]
                }
            ]
        },
        "mui-formcontrollabel": {
            "props": [
                {
                    "name": "label",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "labelPlacement",
                    "defaultValue": "end",
                    "type": "string"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": ["input", "mui-input", "mui-switch"]
                },
                {
                    "name": "control",
                    "allowed": ["input", "mui-input", "mui-switch"]
                }
            ]
        },
        "mui-formgroup": {
            "props": [
                {
                    "name": "row",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": ["mui-form-control-label"]
                }
            ]
        },
        "mui-formlabel": {
            "props": [
                {
                    "name": "error",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "required",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "focused",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "filled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "variant",
                    "defaultValue": "standard",
                    "type": "string"
                },
                {
                    "name": "htmlFor",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-grid": {
            "props": [
                {
                    "name": "griditemdata",
                    "defaultValue": [],
                    "type": "object"
                },
                {
                    "name": "container",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "item",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "xs",
                    "defaultValue": 12,
                    "type": "number"
                },
                {
                    "name": "sm",
                    "defaultValue": 12,
                    "type": "number"
                },
                {
                    "name": "md",
                    "defaultValue": 12,
                    "type": "number"
                },
                {
                    "name": "lg",
                    "defaultValue": 12,
                    "type": "number"
                },
                {
                    "name": "xl",
                    "defaultValue": 12,
                    "type": "number"
                },
                {
                    "name": "spacing",
                    "defaultValue": 0,
                    "type": "number"
                },
                {
                    "name": "direction",
                    "defaultValue": "row",
                    "type": "string"
                },
                {
                    "name": "justify",
                    "defaultValue": "flex-start",
                    "type": "string"
                },
                {
                    "name": "alignItems",
                    "defaultValue": "stretch",
                    "type": "string"
                },
                {
                    "name": "alignContent",
                    "defaultValue": "stretch",
                    "type": "string"
                },
                {
                    "name": "wrap",
                    "defaultValue": "wrap",
                    "type": "string"
                },
                {
                    "name": "component",
                    "defaultValue": "div",
                    "type": "string"
                },
                {
                    "name": "xsAuto",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "smAuto",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "mdAuto",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "lgAuto",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "xlAuto",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "zeroMinWidth",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-icon-button": {
            "props": [
                {
                    "name": "color",
                    "defaultValue": "default",
                    "type": "string"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "edge",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "size",
                    "defaultValue": "medium",
                    "type": "string"
                },
                {
                    "name": "icon",
                    "defaultValue": "Add",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [
                {
                    "name": "iconButtonClicked",
                    "payload": {
                        "payload": {
                            "id": ""
                        }
                    }
                }
            ],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-image-list": {
            "props": [
                {
                    "name": "cols",
                    "defaultValue": 2,
                    "type": "number"
                },
                {
                    "name": "rowHeight",
                    "defaultValue": 180,
                    "type": "number"
                },
                {
                    "name": "gap",
                    "defaultValue": 8,
                    "type": "number"
                },
                {
                    "name": "variant",
                    "defaultValue": "standard",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": [
                        "srs-image-list-item"
                    ]
                }
            ]
        },
        "mui-image-list-item": {
            "props": [
                {
                    "name": "cols",
                    "defaultValue": 1,
                    "type": "number"
                },
                {
                    "name": "rows",
                    "defaultValue": 1,
                    "type": "number"
                },
                {
                    "name": "onClick",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-image-list-item-bar": {
            "props": [
                {
                    "name": "title",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "subtitle",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "position",
                    "defaultValue": "bottom",
                    "type": "string"
                },
                {
                    "name": "actionIcon",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "actionPosition",
                    "defaultValue": "right",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-input": {
            "props": [
                {
                    "name": "defaultValue",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "value",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "required",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "placeholder",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "type",
                    "defaultValue": "text",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-input-adornment": {
            "props": [
                {
                    "name": "disablePointerEvents",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disableTypography",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-input-base": {
            "props": [
                {
                    "name": "multiline",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "rows",
                    "defaultValue": 1,
                    "type": "number"
                },
                {
                    "name": "rowsMax",
                    "defaultValue": 1000,
                    "type": "number"
                },
                {
                    "name": "inputComponent",
                    "defaultValue": "input",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-input-label": {
            "props": [
                {
                    "name": "htmlFor",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "disableAnimation",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "shrink",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "variant",
                    "defaultValue": "standard",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-linear-progress": {
            "props": [
                {
                    "name": "variant",
                    "defaultValue": "indeterminate",
                    "type": "string"
                },
                {
                    "name": "value",
                    "defaultValue": 0,
                    "type": "number"
                },
                {
                    "name": "color",
                    "defaultValue": "primary",
                    "type": "string"
                },
                {
                    "name": "bufferValue",
                    "defaultValue": null,
                    "type": "number"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-link": {
            "props": [
                {
                    "name": "href",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "color",
                    "defaultValue": "inherit",
                    "type": "string"
                },
                {
                    "name": "underline",
                    "defaultValue": "none",
                    "type": "string"
                },
                {
                    "name": "target",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "rel",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "onClick",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-list": {
            "props": [
                {
                    "name": "dense",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disablePadding",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "subheader",
                    "defaultValue": null,
                    "type": "object"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": ["srs-list-item"]
                }
            ]
        },
        "mui-list-item": {
            "props": [
                {
                    "name": "disablePadding",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "dense",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "button",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "selected",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "onClick",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-list-item-avatar": {
            "props": [
                {
                    "name": "className",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-list-item-button": {
            "props": [
                {
                    "name": "disablePadding",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "dense",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "selected",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "onClick",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-list-item-icon": {
            "props": [
                {
                    "name": "className",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-list-item-secondary-action": {
            "props": [
                {
                    "name": "disableSpacing",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-list-item-text": {
            "props": [
                {
                    "name": "primary",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "secondary",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-list-subheader": {
            "props": [
                {
                    "name": "content",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "color",
                    "defaultValue": "default",
                    "type": "string"
                },
                {
                    "name": "disableSticky",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-menu-item": {
            "props": [
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "selected",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "onClick",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-menu-list": {
            "props": [
                {
                    "name": "autoFocusItem",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disablePadding",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": ["srs-menu-item"]
                }
            ]
        },
        "mui-mobile-stepper": {
            "props": [
                {
                    "name": "variant",
                    "defaultValue": "dots",
                    "type": "string"
                },
                {
                    "name": "steps",
                    "defaultValue": 0,
                    "type": "number"
                },
                {
                    "name": "position",
                    "defaultValue": "bottom",
                    "type": "string"
                },
                {
                    "name": "activeStep",
                    "defaultValue": 0,
                    "type": "number"
                },
                {
                    "name": "nextButton",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "backButton",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "LinearProgressProps",
                    "defaultValue": {},
                    "type": "object"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-modal": {
            "props": [
                {
                    "name": "open",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disableEnforceFocus",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disableAutoFocus",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disableBackdropClick",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disableEscapeKeyDown",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [
                {
                    "name": "MODAL_CLOSED"
                }
            ],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                },
                {
                    "name": "close_modal",
                    "allowed": []
                }
            ]
        },
        "mui-native-select": {
            "props": [
                {
                    "name": "value",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "onChange",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": [
                        "option",
                        "optgroup"
                    ]
                }
            ]
        },
        "mui-pagination": {
            "props": [
                {
                    "name": "count",
                    "defaultValue": 1,
                    "type": "number"
                },
                {
                    "name": "page",
                    "defaultValue": 1,
                    "type": "number"
                },
                {
                    "name": "onChange",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "color",
                    "defaultValue": "primary",
                    "type": "string"
                },
                {
                    "name": "size",
                    "defaultValue": "medium",
                    "type": "string"
                },
                {
                    "name": "shape",
                    "defaultValue": "round",
                    "type": "string"
                },
                {
                    "name": "variant",
                    "defaultValue": "text",
                    "type": "string"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "hidePrevButton",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "hideNextButton",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "showFirstButton",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "showLastButton",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "siblingCount",
                    "defaultValue": 1,
                    "type": "number"
                },
                {
                    "name": "boundaryCount",
                    "defaultValue": 1,
                    "type": "number"
                },
                {
                    "name": "renderItem",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-pagination-item": {
            "props": [
                {
                    "name": "page",
                    "defaultValue": null,
                    "type": "number"
                },
                {
                    "name": "selected",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "href",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "onClick",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-paper": {
            "props": [
                {
                    "name": "elevation",
                    "defaultValue": 1,
                    "type": "number"
                },
                {
                    "name": "square",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "variant",
                    "defaultValue": "elevation",
                    "type": "string"
                },
                {
                    "name": "className",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "style",
                    "defaultValue": {},
                    "type": "object"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-popover": {
            "props": [
                {
                    "name": "open",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "anchorEl",
                    "defaultValue": null,
                    "type": "object"
                },
                {
                    "name": "anchorOrigin",
                    "defaultValue": {
                        "vertical": "bottom",
                        "horizontal": "left"
                    },
                    "type": "object"
                },
                {
                    "name": "transformOrigin",
                    "defaultValue": {
                        "vertical": "top",
                        "horizontal": "left"
                    },
                    "type": "object"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-popper": {
            "props": [
                {
                    "name": "anchorEl",
                    "defaultValue": null,
                    "type": "object"
                },
                {
                    "name": "open",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "placement",
                    "defaultValue": "bottom-start",
                    "type": "string"
                },
                {
                    "name": "modifiers",
                    "defaultValue": [],
                    "type": "object"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-radio": {
            "props": [
                {
                    "name": "checked",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "color",
                    "defaultValue": "primary",
                    "type": "string"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "value",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-radio-group": {
            "props": [
                {
                    "name": "name",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "value",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "onChange",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": ["mui-radio"]
                }
            ]
        },
        "mui-rating": {
            "props": [
                {
                    "name": "name",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "value",
                    "defaultValue": null,
                    "type": "number"
                },
                {
                    "name": "precision",
                    "defaultValue": 1,
                    "type": "number"
                },
                {
                    "name": "onChange",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-scoped-css-baseline": {
            "props": [
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-select": {
            "props": [
                {
                    "name": "value",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "onChange",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "native",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "autoWidth",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "displayEmpty",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": ["srs-select-option"]
                }
            ]
        },
        "mui-skeleton": {
            "props": [
                {
                    "name": "animation",
                    "defaultValue": "pulse",
                    "type": "string"
                },
                {
                    "name": "variant",
                    "defaultValue": "rectangular",
                    "type": "string"
                },
                {
                    "name": "width",
                    "defaultValue": null,
                    "type": "number"
                },
                {
                    "name": "height",
                    "defaultValue": null,
                    "type": "number"
                },
                {
                    "name": "classes",
                    "defaultValue": null,
                    "type": "object"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": []
        },
        "mui-slider": {
            "props": [
                {
                    "name": "value",
                    "defaultValue": 0,
                    "type": "number"
                },
                {
                    "name": "defaultValue",
                    "defaultValue": 0,
                    "type": "number"
                },
                {
                    "name": "min",
                    "defaultValue": 0,
                    "type": "number"
                },
                {
                    "name": "max",
                    "defaultValue": 100,
                    "type": "number"
                },
                {
                    "name": "step",
                    "defaultValue": 1,
                    "type": "number"
                },
                {
                    "name": "marks",
                    "defaultValue": null,
                    "type": "object"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "onChange",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": []
        },
        "mui-snackbar": {
            "props": [
                {
                    "name": "open",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "autoHideDuration",
                    "defaultValue": null,
                    "type": "number"
                },
                {
                    "name": "onClose",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "message",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "action",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "TransitionComponent",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "anchorOrigin",
                    "defaultValue": {
                        "vertical": "bottom",
                        "horizontal": "left"
                    },
                    "type": "object"
                },
                {
                    "name": "ContentProps",
                    "defaultValue": null,
                    "type": "object"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": []
        },
        "mui-snackbar-content": {
            "props": [
                {
                    "name": "message",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "action",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "role",
                    "defaultValue": "alert",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": []
        },
        "mui-speed-dial": {
            "props": [
                {
                    "name": "aria-label",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "direction",
                    "defaultValue": "up",
                    "type": "string"
                },
                {
                    "name": "icon",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "open",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "onOpen",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "onClose",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": ["mui-speed-dial-action"]
                }
            ]
        },
        "mui-speed-dial-action": {
            "props": [
                {
                    "name": "icon",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "tooltipTitle",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "tooltipOpen",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "tooltipPlacement",
                    "defaultValue": "left",
                    "type": "string"
                },
                {
                    "name": "onClick",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": []
        },
        "mui-speed-dial-icon": {
            "props": [
                {
                    "name": "icon",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "openIcon",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "aria-label",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-stack": {
            "props": [
                {
                    "name": "direction",
                    "defaultValue": "row",
                    "type": "string"
                },
                {
                    "name": "spacing",
                    "defaultValue": 0,
                    "type": "number"
                },
                {
                    "name": "justifyContent",
                    "defaultValue": "flex-start",
                    "type": "string"
                },
                {
                    "name": "alignItems",
                    "defaultValue": "stretch",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-step": {
            "props": [
                {
                    "name": "active",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "completed",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "expanded",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": ["srs-step-label"]
                }
            ]
        },
        "mui-step-button": {
            "props": [
                {
                    "name": "active",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "completed",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "icon",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "optional",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "onClick",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-step-connector": {
            "props": [
                {
                    "name": "active",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "alternativeLabel",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "completed",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "index",
                    "defaultValue": 0,
                    "type": "number"
                },
                {
                    "name": "orientation",
                    "defaultValue": "horizontal",
                    "type": "string"
                },
                {
                    "name": "position",
                    "defaultValue": "left",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-step-content": {
            "props": [
                {
                    "name": "active",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "alternativeLabel",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "completed",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "last",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-step-icon": {
            "props": [
                {
                    "name": "active",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "completed",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "error",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "icon",
                    "defaultValue": null,
                    "type": "node"
                },
                {
                    "name": "alternativeLabel",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": []
        },
        "mui-step-label": {
            "props": [
                {
                    "name": "content",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "active",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "completed",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "error",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "icon",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "optional",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "orientation",
                    "defaultValue": "horizontal",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": []
        },
        "mui-stepper": {
            "props": [
                {
                    "name": "activeStep",
                    "defaultValue": 0,
                    "type": "number"
                },
                {
                    "name": "alternativeLabel",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "orientation",
                    "defaultValue": "horizontal",
                    "type": "string"
                },
                {
                    "name": "nonLinear",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "connector",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": ["srs-step"]
                }
            ]
        },
        "mui-svg-icon": {
            "props": [
                {
                    "name": "component",
                    "defaultValue": "svg",
                    "type": "string"
                },
                {
                    "name": "color",
                    "defaultValue": "inherit",
                    "type": "string"
                },
                {
                    "name": "fontSize",
                    "defaultValue": "medium",
                    "type": "string"
                },
                {
                    "name": "htmlColor",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-swipeable-drawer": {
            "props": [
                {
                    "name": "anchor",
                    "defaultValue": "left",
                    "type": "string"
                },
                {
                    "name": "open",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "onClose",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "onOpen",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "disableBackdropTransition",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disableDiscovery",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disableSwipeToOpen",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "hideBackdrop",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "ModalProps",
                    "defaultValue": {},
                    "type": "object"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-switch": {
            "props": [
                {
                    "name": "checked",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "color",
                    "defaultValue": "primary",
                    "type": "string"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "onChange",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-tab": {
            "props": [
                {
                    "name": "label",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "value",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "icon",
                    "defaultValue": null,
                    "type": "object"
                },
                {
                    "name": "wrapped",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "onClick",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-table": {
            "props": [
                {
                    "name": "size",
                    "defaultValue": "medium",
                    "type": "string"
                },
                {
                    "name": "aria-label",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "stickyHeader",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": ["srs-table-row"]
                }
            ]
        },
        "mui-table-body": {
            "props": [
                {
                    "name": "content",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": ["mui-table-row"]
                }
            ]
        },
        "mui-table-cell": {
            "props": [
                {
                    "name": "align",
                    "defaultValue": "inherit",
                    "type": "string"
                },
                {
                    "name": "padding",
                    "defaultValue": "normal",
                    "type": "string"
                },
                {
                    "name": "size",
                    "defaultValue": "medium",
                    "type": "string"
                },
                {
                    "name": "sortDirection",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-table-container": {
            "props": [
                {
                    "name": "component",
                    "defaultValue": "div",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": ["mui-table"]
                }
            ]
        },
        "mui-table-footer": {
            "props": [],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": ["mui-table-row"]
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ]
        },
        "mui-table-head": {
            "props": [
                {
                    "name": "component",
                    "defaultValue": "thead",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-table-pagination": {
            "props": [
                {
                    "name": "count",
                    "defaultValue": 0,
                    "type": "number"
                },
                {
                    "name": "page",
                    "defaultValue": 0,
                    "type": "number"
                },
                {
                    "name": "rowsPerPage",
                    "defaultValue": 10,
                    "type": "number"
                },
                {
                    "name": "rowsPerPageOptions",
                    "defaultValue": [10, 25, 50],
                    "type": "object"
                },
                {
                    "name": "onChangePage",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "onChangeRowsPerPage",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-table-row": {
            "props": [
                {
                    "name": "hover",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "selected",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": [
                        "srs-table-cell"
                    ]
                }
            ]
        },
        "mui-table-sort-label": {
            "props": [
                {
                    "name": "active",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "direction",
                    "defaultValue": "asc",
                    "type": "string"
                },
                {
                    "name": "hideSortIcon",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "onClick",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-tabs": {
            "props": [
                {
                    "name": "tabitems",
                    "defaultValue": [],
                    "type": "object"
                },
                {
                    "name": "value",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "classes",
                    "defaultValue": {},
                    "type": "object"
                },
                {
                    "name": "tabsclass",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "tabclass",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "onChange",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "indicatorColor",
                    "defaultValue": "primary",
                    "type": "string"
                },
                {
                    "name": "textColor",
                    "defaultValue": "inherit",
                    "type": "string"
                },
                {
                    "name": "centered",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "variant",
                    "defaultValue": "standard",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": [
                        "srs-tab"
                    ]
                }
            ]
        },
        "mui-textfield": {
            "props": [
                {
                    "name": "label",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "value",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "defaultvalue",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "onChange",
                    "defaultValue": null,
                    "type": "function"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "variant",
                    "defaultValue": "standard",
                    "type": "string"
                },
                {
                    "name": "helperText",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "error",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "fullWidth",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "multiline",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "rows",
                    "defaultValue": 1,
                    "type": "number"
                },
                {
                    "name": "inputProps",
                    "defaultValue": {},
                    "type": "object"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": [
                        "srs-tab"
                    ]
                }
            ]
        },
        "mui-togglebutton": {
            "props": [
                {
                    "name": "value",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disableRipple",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "selected",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-togglebuttongroup": {
            "props": [
                {
                    "name": "value",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "exclusive",
                    "defaultValue": true,
                    "type": "boolean"
                },
                {
                    "name": "disabled",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "orientation",
                    "defaultValue": "horizontal",
                    "type": "string"
                },
                {
                    "name": "size",
                    "defaultValue": "medium",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": [
                        "srs-toggle-button"
                    ]
                }
            ]
        },
        "mui-toolbar": {
            "props": [
                {
                    "name": "disableGutters",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "variant",
                    "defaultValue": "regular",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-tooltip": {
            "props": [
                {
                    "name": "title",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "arrow",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disableFocusListener",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disableHoverListener",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "disableTouchListener",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "enterDelay",
                    "defaultValue": 0,
                    "type": "number"
                },
                {
                    "name": "enterTouchDelay",
                    "defaultValue": 700,
                    "type": "number"
                },
                {
                    "name": "placement",
                    "defaultValue": "bottom",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        },
        "mui-typography": {
            "props": [
                {
                    "name": "text",
                    "defaultValue": "",
                    "type": "string"
                },
                {
                    "name": "align",
                    "defaultValue": "inherit",
                    "type": "string"
                },
                {
                    "name": "classes",
                    "defaultValue": null,
                    "type": "object"
                },
                {
                    "name": "className",
                    "defaultValue": null,
                    "type": "string"
                },
                {
                    "name": "color",
                    "defaultValue": "initial",
                    "type": "string"
                },
                {
                    "name": "component",
                    "defaultValue": "span",
                    "type": "string"
                },
                {
                    "name": "display",
                    "defaultValue": "initial",
                    "type": "string"
                },
                {
                    "name": "gutterBottom",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "noWrap",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "paragraph",
                    "defaultValue": false,
                    "type": "boolean"
                },
                {
                    "name": "variant",
                    "defaultValue": "body1",
                    "type": "string"
                },
                {
                    "name": "sx",
                    "defaultValue": {},
                    "type": "styles"
                }
            ],
            "events": [],
            "slots": [
                {
                    "name": "default",
                    "allowed": []
                }
            ]
        }
    };
}