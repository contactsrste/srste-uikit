//Settings page card
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
                        "backgroundColor": "green",
                        "display": "flex",
                        "flexDirection": "column",
                        "justifyContent": "space-between",
                        "padding": 5
                    }
                },
                "children": [
                    {
                        "name": "typography",
                        "tag": "mui-typography",
                        "props": {
                            "variant": "h4",
                            "color": "white",
                            "sx": {
                                "fontWeight": "bold"
                            },
                            "text": "Card design with material"
                        }
                    },
                    {
                        "name": "typography",
                        "tag": "mui-typography",
                        "props": {
                            "variant": "body1",
                            "color": "white",
                            "sx": {
                                "fontWeight": "bold"
                            },
                            "text": "16 January 2017"
                        }
                    }
                ]
            }
        ]
    }
]