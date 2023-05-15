export const data = [
    {
        "name": "card1",
        "tag": "mui-card",
        "props": {
            "sx": {
                "p": 3,
                "mb": 0
            }
        },
        "children": [
            {
                "name": "card-header",
                "tag": "mui-card-header",
                "props": {
                    "sx": "{p: 3}",
                    "title": "Card Header1",
                    "subheader": "Card Subheader1"
                },
                "children": [
                    {
                        "name": "avatar",
                        "tag": "mui-avatar",
                        "props": {
                            "sx": "{bgcolor: purple[500], width: 50, height: 50}",
                            "aria-label": "recipe",
                            "src": "https://randomuser.me/api/portraits/women/47.jpg",
                            "slotname": "avatar"
                        }
                    },
                    {
                        "name": "actions-container",
                        "tag": "srs-container",
                        "props": {
                            "slotname": "action"
                        },
                        "children": [
                            {
                                "name": "open-button",
                                "tag": "mui-button",
                                "props": {
                                    "label": "settings"
                                },
                                "children": [
                                    {
                                        "name": "typography",
                                        "tag": "mui-typography",
                                        "props": {
                                            "variant": "body1",
                                            "color": "white",
                                            "sx": "{mb: 3}",
                                            "text": "Open"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "card-content",
                "tag": "mui-card-content",
                "props": {
                    "sx": "{p: 3}"
                },
                "children": [
                    {
                        "name": "typography",
                        "tag": "mui-typography",
                        "props": {
                            "variant": "body1",
                            "color": "white",
                            "sx": "{mb: 3}",
                            "text": "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen.."
                        }
                    },
                    {
                        "name": "button",
                        "tag": "mui-button",
                        "props": {
                            "variant": "body1",
                            "aria-label": "Read more"
                        },
                        "children": [
                            {
                                "name": "typography",
                                "tag": "mui-typography",
                                "props": {
                                    "variant": "body1",
                                    "color": "white",
                                    "sx": "{mb: 3}",
                                    "text": "Read more"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
]