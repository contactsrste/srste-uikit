//Aggregator Card
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
                          "src": "https://randomuser.me/api/portraits/women/17.jpg",
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
                  "sx": "{pl: 3, pr: 3, pt: 0, pb: 3, mb: 0}"
              },
              "children": [
                  {
                      "name": "typography",
                      "tag": "mui-typography",
                      "props": {
                          "variant": "h5",
                          "color": "text.secondary",
                          "sx": {
                              "fontWeight": "800"
                          },
                          "text": "Web Design templates Selection"
                      }
                  },
                  {
                      "name": "box",
                      "tag": "mui-box",
                      "props": {
                          "sx": {
                              "display": "flex",
                              "justifyContent": "space-between",
                              "gap": 1
                          }
                      },
                      "children": [
                          {
                              "name": "link",
                              "tag": "mui-link",
                              "props": {
                                  "href": "#/",
                                  "sx": {
                                      "display": "flex"
                                  }
                              },
                              "children": [
                                  {
                                      "name": "card-media",
                                      "tag": "mui-card-media",
                                      "props": {
                                          "component": "img",
                                          "width": "100%",
                                          "image": "https://images.pexels.com/photos/1789968/pexels-photo-1789968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                                          "alt": "Image",
                                          "sx": {
                                              "my": 3,
                                              "borderRadius": 3,
                                              "flex": 50
                                          }
                                      }
                                  }
                              ]
                          },
                          {
                              "name": "link",
                              "tag": "mui-link",
                              "props": {
                                  "href": "#/",
                                  "sx": {
                                      "display": "flex"
                                  }
                              },
                              "children": [
                                  {
                                      "name": "card-media",
                                      "tag": "mui-card-media",
                                      "props": {
                                          "component": "img",
                                          "width": "100%",
                                          "image": "https://images.pexels.com/photos/68525/soap-colorful-color-fruit-68525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                                          "alt": "Image",
                                          "sx": {
                                              "my": 3,
                                              "borderRadius": 3,
                                              "flex": 50
                                          }
                                      }
                                  }
                              ]
                          }
                      ]
                  },
                  {
                      "name": "typography",
                      "tag": "mui-typography",
                      "props": {
                          "variant": "body1",
                          "color": "text.secondary",
                          "sx": {
                              "mb": 3,
                              "color": "#000"
                          },
                          "text": "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen.."
                      }
                  }
              ]
          }
      ]
  }
]