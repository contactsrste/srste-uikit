//Settings page card
export const data = [
    {
      "name": "card1",
      "elementId": "card1",
      "tag": "mui-card",
      "props": {
        "elevation": 0
      },
      "children": [
        {
          "name": "paper",
          "elementId": "paper",
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
              "name": "typography1",
              "elementId": "typography1",
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
              "name": "typography2",
              "elementId": "typography2",
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
  