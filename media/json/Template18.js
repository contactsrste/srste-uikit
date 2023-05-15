//Two Cards Container
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
              "name": "card-content",
              "tag": "mui-card-content",
              "props": {},
              "children": [
                  {
                      "name": "typography",
                      "tag": "mui-typography",
                      "props": {
                          "gutterBottom": true,
                          "variant": "h5",
                          "color": "text.secondary",
                          "sx": {
                              "fontWeight": "bold"
                          },
                          "text": "Lizard"
                      }
                  },
                  {
                      "name": "typography",
                      "tag": "mui-typography",
                      "props": {
                          "variant": "body1",
                          "color": "text.secondary",
                          "text": "Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod proident sed excepteur excepteur."
                      }
                  }
              ]
          },
          {
              "name": "card-media",
              "tag": "mui-card-media",
              "props": {
                  "component": "img",
                  "image": "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              }
          },
          {
              "name": "card-actions",
              "tag": "mui-card-actions",
              "props": {},
              "children": [
                  {
                      "name": "button",
                      "tag": "mui-button",
                      "props": {
                          "size": "small",
                          "content": "Share"
                      }
                  },
                  {
                      "name": "button",
                      "tag": "mui-button",
                      "props": {
                          "size": "small",
                          "content": "Learn More"
                      }
                  }
              ]
          }
      ]
  }
]