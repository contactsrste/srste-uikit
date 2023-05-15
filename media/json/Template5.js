//Clone Banner
export const data = [
    {
        "name": "card1",
        "tag": "mui-card",
        "props": {
            "elevation": 0
        },
        "children": [
            {
                "name": "paper",
                "tag": "mui-paper",
                "props": {
                    "sx": {
                        "display": "flex",
                        "flexDirection": "column",
                        "justifyContent": "space-between",
                        "padding": "20px"
                    }
                },
                "children": [
                    {
                        "name": "card-media",
                        "tag": "mui-card-media",
                        "props": {
                            "component": "img",
                            "height": "194",
                            "image": "https://images.pexels.com/photos/1161771/pexels-photo-1161771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        }
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
                                    "gutterBottom": true,
                                    "variant": "h5",
                                    "sx": {
                                        "fontWeight": "bold"
                                    },
                                    "color": "text.secondary",
                                    "text": "Bessie Cooper"
                                }
                            },
                            {
                                "name": "typography",
                                "tag": "mui-typography",
                                "props": {
                                    "variant": "body1",
                                    "color": "text.secondary",
                                    "text": "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                                }
                            }
                        ]
                    },
                    {
                        "name": "card-actions",
                        "tag": "mui-card-actions",
                        "props": {
                            "sx": {
                                "pt": 0,
                                "px": 3,
                                "pb": 3
                            }
                        },
                        "children": [
                            {
                                "name": "button",
                                "tag": "mui-button",
                                "props": {
                                    "size": "small"
                                },
                                "children": [
                                    {
                                        "name": "typography",
                                        "tag": "mui-typography",
                                        "props": {
                                            "variant": "body1",
                                            "color": "white",
                                            "sx": "{mb: 3}",
                                            "text": "Share"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "button",
                                "tag": "mui-button",
                                "props": {
                                    "size": "small"
                                },
                                "children": [
                                    {
                                        "name": "typography",
                                        "tag": "mui-typography",
                                        "props": {
                                            "variant": "body1",
                                            "color": "white",
                                            "sx": "{mb: 3}",
                                            "text": "Learn More"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]