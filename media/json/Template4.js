export const data = [
    {
      "name": "card1",
      "elementId": "card1",
      "tag": "mui-card",
      "props": {
        "sx": {
          "p": 3,
          "mb": 0
        }
      },
      "children": [
        {
          "name": "card-header1",
          "elementId": "card-header1",
          "tag": "mui-card-header",
          "props": {
            "sx": "{p: 3}",
            "title": "Card Header1",
            "subheader": "Card Subheader1"
          },
          "children": [
            {
              "name": "avatar1",
              "elementId": "avatar1",
              "tag": "mui-avatar",
              "props": {
                "sx": "{bgcolor: purple[500], width: 50, height: 50}",
                "aria-label": "recipe",
                "src": "https://randomuser.me/api/portraits/women/47.jpg",
                "slotname": "avatar"
              }
            },
            {
              "name": "actions-container1",
              "elementId": "actions-container1",
              "tag": "srs-container",
              "props": {
                "slotname": "action"
              },
              "children": [
                {
                  "name": "open-button1",
                  "elementId": "open-button1",
                  "tag": "mui-button",
                  "props": {
                    "label": "settings"
                  },
                  "children": [
                    {
                      "name": "typography1",
                      "elementId": "typography1",
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
          "name": "card-content2",
          "elementId": "card-content2",
          "tag": "mui-card-content",
          "props": {
            "sx": "{p: 3}"
          },
          "children": [
            {
              "name": "typography2",
              "elementId": "typography2",
              "tag": "mui-typography",
              "props": {
                "variant": "body1",
                "color": "white",
                "sx": "{mb: 3}",
                "text": "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen.."
              }
            },
            {
              "name": "button2",
              "elementId": "button2",
              "tag": "mui-button",
              "props": {
                "variant": "body1",
                "aria-label": "Read more"
              },
              "children": [
                {
                  "name": "typography3",
                  "elementId": "typography3",
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
  