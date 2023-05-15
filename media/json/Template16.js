//CTA Card
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
                  "sx": {
                      "display": "flex",
                      "alignItems": "center"
                  },
                  "title": "Rahul"
              },
              "children": [
                  {
                      "name": "avatar",
                      "tag": "mui-avatar",
                      "props": {
                          "sx": {
                              "backgroundColor": "red",
                              "width": 50,
                              "height": 50
                          },
                          "aria-label": "recipe",
                          "slotname": "avatar"
                      },
                      "children": [
                          {
                              "name": "typography",
                              "tag": "mui-typography",
                              "props": {
                                  "variant": "body1",
                                  "color": "white",
                                  "text": "R"
                              }
                          }
                      ]
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
                              "tag": "mui-icon-button",
                              "props": {
                                  "label": "settings",
                                  "icon": "Edit"
                              }
                          }
                      ]
                  },
                  {
                      "name": "typography",
                      "tag": "mui-typography",
                      "props": {
                          "variant": "h6",
                          "sx": {
                              "fontWeight": "bold"
                          },
                          "text": "Raul"
                      }
                  }
              ]
          },
          {
              "name": "box",
              "tag": "mui-box",
              "props": {
                  "sx": {
                      "display": "flex",
                      "gap": 0.5,
                      "mb": 0.5,
                      "flowDirection": "row",
                      "justifyContent": "space-between"
                  }
              },
              "children": [
                  {
                      "name": "box",
                      "tag": "mui-box",
                      "props": {
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
                                  "height": "150px",
                                  "width": "150px",
                                  "image": "https://images.pexels.com/photos/2157826/pexels-photo-2157826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                              }
                          }
                      ]
                  },
                  {
                      "name": "box",
                      "tag": "mui-box",
                      "props": {
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
                                  "height": "150",
                                  "image": "https://images.pexels.com/photos/3280524/pexels-photo-3280524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750& w=1260"
                              }
                          }
                      ]
                  },
                  {
                      "name": "box",
                      "tag": "mui-box",
                      "props": {
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
                                  "height": "150",
                                  "image": "https://images.pexels.com/photos/2158469/pexels-photo-2158469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                                  "slotname": "media"
                              }
                          }
                      ]
                  }
              ]
          },
          {
              "name": "box",
              "tag": "mui-box",
              "props": {
                  "sx": {
                      "display": "flex",
                      "gap": 0.5,
                      "justifyContent": "space-between"
                  }
              },
              "children": [
                  {
                      "name": "box",
                      "tag": "mui-box",
                      "props": {
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
                                  "image": "https://images.pexels.com/photos/33158/leaves-fall-colors-rainbow.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                                  "slotname": "media"
                              }
                          }
                      ]
                  },
                  {
                      "name": "box",
                      "tag": "mui-box",
                      "props": {
                          "sx": {
                              "display": "flex",
                              "justifyContent": "space-between"
                          }
                      },
                      "children": [
                          {
                              "name": "card-media",
                              "tag": "mui-card-media",
                              "props": {
                                  "component": "img",
                                  "width": "100%",
                                  "image": "https://images.pexels.com/photos/1161771/pexels-photo-1161771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                                  "slotname": "media"
                              }
                          }
                      ]
                  }
              ]
          },
          {
              "name": "box",
              "tag": "mui-box",
              "props": {
                  "sx": {
                      "backgroundColor": "grey",
                      "p": 3,
                      "display": "flex",
                      "justifyContent": "space-between"
                  }
              },
              "children": [
                  {
                      "name": "box",
                      "tag": "mui-box",
                      "props": {
                          "sx": {
                              "display": "flex",
                              "alignItems": "center"
                          }
                      },
                      "children": [
                          {
                              "name": "icon",
                              "tag": "mui-icon-button",
                              "props": {
                                  "path": "mdiCameraIris",
                                  "title": "Camera",
                                  "size": 1.3,
                                  "icon": "Camera"
                              }
                          },
                          {
                              "name": "typography",
                              "tag": "mui-typography",
                              "props": {
                                  "sx": {
                                      "ml": 1,
                                      "fontWeight": "bold"
                                  },
                                  "variant": "span",
                                  "text": "23"
                              }
                          }
                      ]
                  },
                  {
                      "name": "button",
                      "tag": "mui-button",
                      "props": {
                          "variant": "contained",
                          "color": "success",
                          "text": "Visit now"
                      },
                      "children": [
                          {
                              "name": "typography",
                              "tag": "mui-typography",
                              "props": {
                                  "gutterBottom": true,
                                  "variant": "h7",
                                  "color": "text.secondary",
                                  "sx": {
                                      "fontWeight": "bold"
                                  },
                                  "text": "VISIT NOW"
                              }
                          }
                      ]
                  }
              ]
          },
          {
              "name": "card-content",
              "tag": "mui-card-content",
              "children": [
                  {
                      "name": "typography",
                      "tag": "mui-typography",
                      "props": {
                          "gutterBottom": true,
                          "variant": "body1",
                          "color": "text.secondary",
                          "sx": {
                              "mb": 1
                          },
                          "text": "Photographic rolls"
                      }
                  },
                  {
                      "name": "typography",
                      "tag": "mui-typography",
                      "props": {
                          "gutterBottom": true,
                          "variant": "h4",
                          "color": "text.secondary",
                          "sx": {
                              "fontWeight": "bold"
                          },
                          "text": "Salou, Tarragona"
                      }
                  },
                  {
                      "name": "typography",
                      "tag": "mui-typography",
                      "props": {
                          "variant": "body1",
                          "color": "text.secondary",
                          "text": "Minim dolor in amet nulla laboris enim dolore consequat proident fugiat..."
                      }
                  }
              ]
          },
          {
              "name": "card-actions",
              "tag": "mui-card-actions",
              "children": [
                  {
                      "name": "button",
                      "tag": "mui-button",
                      "props": {
                          "size": "small",
                          "text": "Share"
                      },
                      "children": [
                          {
                              "name": "typography",
                              "tag": "mui-typography",
                              "props": {
                                  "variant": "body1",
                                  "color": "text.secondary",
                                  "text": "SHARE"
                              }
                          }
                      ]
                  },
                  {
                      "name": "button",
                      "tag": "mui-button",
                      "props": {
                          "size": "small",
                          "text": "Learn More"
                      },
                      "children": [
                          {
                              "name": "typography",
                              "tag": "mui-typography",
                              "props": {
                                  "variant": "body1",
                                  "color": "text.secondary",
                                  "text": "LEARN MORE"
                              }
                          }
                      ]
                  }
              ]
          }
      ]
  }
]