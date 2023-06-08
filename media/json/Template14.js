//CTA Card
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
          "name": "box1",
          "elementId": "box1",
          "tag": "mui-box",
          "props": {
            "sx": {
              "display": "flex"
            }
          },
          "children": [
            {
              "name": "box2",
              "elementId": "box2",
              "tag": "mui-box",
              "props": {
                "sx": {
                  "display": "flex",
                  "flexDirection": "column"
                }
              },
              "children": [
                {
                  "name": "card-content",
                  "elementId": "card-content",
                  "tag": "mui-card-content",
                  "props": {
                    "sx": {
                      "flex": "1 0 auto"
                    }
                  },
                  "children": [
                    {
                      "name": "typography1",
                      "elementId": "typography1",
                      "tag": "mui-typography",
                      "props": {
                        "component": "div",
                        "variant": "h5",
                        "color": "text.secondary",
                        "sx": {
                          "fontWeight": 500
                        },
                        "text": "Live From Space"
                      }
                    },
                    {
                      "name": "typography2",
                      "elementId": "typography2",
                      "tag": "mui-typography",
                      "props": {
                        "variant": "subtitle1",
                        "color": "text.secondary",
                        "component": "div",
                        "text": "Mac Miller"
                      }
                    }
                  ]
                },
                {
                  "name": "box3",
                  "elementId": "box3",
                  "tag": "mui-box",
                  "props": {
                    "sx": {
                      "display": "flex",
                      "alignItems": "center",
                      "pl": 1,
                      "pb": 1
                    }
                  },
                  "children": [
                    {
                      "name": "icon-button1",
                      "elementId": "icon-button1",
                      "tag": "mui-icon-button",
                      "props": {
                        "aria-label": "previous",
                        "icon": "Info"
                      },
                      "children": []
                    },
                    {
                      "name": "icon-button2",
                      "elementId": "icon-button2",
                      "tag": "mui-icon-button",
                      "props": {
                        "aria-label": "play/pause",
                        "icon": "Add"
                      },
                      "children": []
                    },
                    {
                      "name": "icon-button3",
                      "elementId": "icon-button3",
                      "tag": "mui-icon-button",
                      "props": {
                        "aria-label": "next",
                        "icon": "Info"
                      },
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "name": "card-media",
              "elementId": "card-media",
              "tag": "mui-card-media",
              "props": {
                "component": "img",
                "image": "https://unsplash.com/photos/3hWg9QKl5k8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTB8fHZpbnRhZ2UlMjBtdXNpY3x8MHwxfHx8MTY0MDEyNTY4NQ&force=true&w=640",
                "height": "240",
                "alt": "Live from space album cover"
              }
            }
          ]
        }
      ]
    }
  ]
  