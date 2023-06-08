//CTA Card
export const data = [
    {
      "name": "card1",
      "elementId": "card1",
      "tag": "mui-card",
      "props": {
        "sx": {
          "borderRadius": 4,
          "p": 3
        }
      },
      "children": [
        {
          "name": "box",
          "elementId": "box1",
          "tag": "mui-box",
          "props": {
            "sx": {
              "mb": 4,
              "display": "flex",
              "flexDirection": "row",
              "alignItems": "center",
              "justifyContent": "space-between"
            }
          },
          "children": [
            {
              "name": "box",
              "elementId": "box2",
              "tag": "mui-box",
              "props": {
                "sx": {
                  "display": "flex",
                  "flexDirection": "row",
                  "alignItems": "center"
                }
              },
              "children": [
                {
                  "name": "avatar",
                  "elementId": "avatar1",
                  "tag": "mui-avatar",
                  "props": {
                    "sx": {
                      "backgroundColor": "lime",
                      "width": 60,
                      "height": 60,
                      "mr": 2
                    },
                    "src": "https://randomuser.me/api/portraits/men/88.jpg"
                  }
                },
                {
                  "name": "box",
                  "elementId": "box3",
                  "tag": "mui-box",
                  "props": {
                    "sx": {
                      "display": "flex",
                      "flexDirection": "column",
                      "alignItems": "start"
                    }
                  },
                  "children": [
                    {
                      "name": "typography",
                      "elementId": "typography1",
                      "tag": "mui-typography",
                      "props": {
                        "variant": "body1",
                        "color": "text.secondary",
                        "sx": {
                          "ml": 1
                        },
                        "text": "Andres"
                      }
                    },
                    {
                      "name": "typography",
                      "elementId": "typography2",
                      "tag": "mui-typography",
                      "props": {
                        "variant": "body1",
                        "color": "text.secondary",
                        "sx": {
                          "ml": 1
                        },
                        "text": "Proyecto"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "box",
              "elementId": "box4",
              "tag": "mui-box",
              "props": {
                "sx": {
                  "display": "inline-flex",
                  "flexDirection": "row",
                  "alignItems": "center"
                }
              },
              "children": [
                {
                  "name": "icon",
                  "elementId": "icon1",
                  "tag": "mui-icon",
                  "props": {
                    "path": "mdiClockTimeFourOutline",
                    "size": 0.7,
                    "color": "#00000099",
                    "icon": "Add"
                  }
                },
                {
                  "name": "typography",
                  "elementId": "typography3",
                  "tag": "mui-typography",
                  "props": {
                    "variant": "body1",
                    "color": "text.secondary",
                    "sx": {
                      "ml": 1
                    },
                    "text": "3 min ago"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "card-content",
          "elementId": "card-content1",
          "tag": "mui-card-content",
          "props": {
            "sx": {
              "p": 0,
              "mb": 0
            }
          },
          "children": [
            {
              "name": "typography",
              "elementId": "typography4",
              "tag": "mui-typography",
              "props": {
                "variant": "h5",
                "color": "text.secondary",
                "sx": {
                  "mb": 2,
                  "fontWeight": "bold"
                },
                "text": "Collaborative work"
              }
            },
            {
              "name": "typography",
              "elementId": "typography5",
              "tag": "mui-typography",
              "props": {
                "variant": "body1",
                "color": "text.secondary",
                "sx": {
                  "mb": 1
                },
                "text": "Introduction"
              }
            },
            {
              "name": "typography",
              "elementId": "typography6",
              "tag": "mui-typography",
              "props": {
                "variant": "body1",
                "color": "text.secondary",
                "sx": {
                  "mb": 3
                },
                "text": "Minim dolor in amet nulla laboris enim dolore consequat.."
              }
            }
          ]
        },
        {
          "name": "box",
          "elementId": "box5",
          "tag": "mui-box",
          "props": {
            "sx": {
              "display": "flex",
              "flexDirection": "row",
              "alignItems": "center",
              "justifyContent": "space-between"
            }
          },
          "children": [
            {
              "name": "avatar-group",
              "elementId": "avatar-group1",
              "tag": "mui-avatar-group",
              "props": {
                "max": 4
              },
              "children": [
                {
                  "name": "avatar",
                  "elementId": "avatar2",
                  "tag": "mui-avatar",
                  "props": {
                    "alt": "Remy Sharp",
                    "src": "https://randomuser.me/api/portraits/women/44.jpg"
                  }
                },
                {
                  "name": "avatar",
                  "elementId": "avatar3",
                  "tag": "mui-avatar",
                  "props": {
                    "alt": "Travis Howard",
                    "src": "https://randomuser.me/api/portraits/women/24.jpg"
                  }
                },
                {
                  "name": "avatar",
                  "elementId": "avatar4",
                  "tag": "mui-avatar",
                  "props": {
                    "alt": "Cindy Baker",
                    "src": "https://randomuser.me/api/portraits/men/54.jpg"
                  }
                },
                {
                  "name": "avatar",
                  "elementId": "avatar5",
                  "tag": "mui-avatar",
                  "props": {
                    "alt": "Agnes Walker",
                    "src": "https://randomuser.me/api/portraits/women/92.jpg"
                  }
                },
                {
                  "name": "avatar",
                  "elementId": "avatar6",
                  "tag": "mui-avatar",
                  "props": {
                    "alt": "Trevor Henderson",
                    "src": "/static/images/avatar/5.jpg"
                  }
                }
              ]
            },
            {
              "name": "icon-button",
              "elementId": "icon-button1",
              "tag": "mui-icon-button",
              "props": {
                "aria-label": "Write",
                "size": "large",
                "icon": "Add"
              },
              "children": []
            }
          ]
        }
      ]
    }
  ]
  