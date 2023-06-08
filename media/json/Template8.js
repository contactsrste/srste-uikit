//Three Banner layout
export const data = [
  {
    "name": "TopContainer",
    "elementId": "TopContainer",
    "tag": "srs-container",
    "props": {
      "styles": {
        "height": "100vh"
      },
      "embedded_styles": ""
    },
    "children": [
      {
        "name": "HeroSection",
        "elementId": "HeroSection",
        "tag": "srs-container",
        "props": {
          "styles": {
            "background-image": "",
            "background-size": "cover",
            "padding": "0 2rem",
            "min-height": "160px",
            "color": "#fff",
            "placeContent": "start",
            "backgroundColor": "#0c0326"
          },
          "embedded_styles": ""
        },
        "children": [
          {
            "name": "HeroContainer",
            "elementId": "HeroContainer",
            "tag": "srs-container",
            "props": {
              "styles": {
                "backgroundColor": "var(--cds-background-hover)",
                "minHeight": 50,
                "minWidth": "80%",
                "marginTop": "3rem"
              },
              "embedded_styles": ""
            },
            "children": []
          }
        ]
      },
      {
        "name": "ContentSection",
        "elementId": "ContentSection",
        "tag": "srs-container",
        "props": {
          "styles": {
            "minHeight": "calc(100vh - 160px)",
            "flex": 1,
            "--now-color-temp-border": "var(--now-color_border--tertiary)",
            "grid-template-columns": "70% 30%",
            "gap": "1.5rem",
            "display": "grid",
            "padding-left": "60px",
            "padding-right": "90px",
            "padding-top": "1.5rem",
            "z-index": 1,
            "position": "relative",
            "backgroundColor": "var(--cds-background-selected-hover)",
            "placeContent": "start"
          },
          "embedded_styles": ""
        },
        "children": [
          {
            "name": "LeftContainer",
            "elementId": "LeftContainer",
            "tag": "srs-container",
            "props": {
              "styles": {
                "margin-top": "-3rem",
                "minHeight": "15rem",
                "display": "grid",
                "gridTemplateColumns": "1fr 1fr 1fr",
                "gap": "20px 20px"
              },
              "embedded_styles": ""
            },
            "children": [
              {
                "name": "LeftContainerBanner1",
                "elementId": "LeftContainerBanner1",
                "tag": "srs-container",
                "props": {
                  "styles": {
                    "backgroundColor": "var(--cds-background)",
                    "box-shadow": "0px 2px 4px rgba(0, 0, 0, 0.25)",
                    "border-radius": "8px",
                    "padding": "8px",
                    "minHeight": "15rem"
                  },
                  "embedded_styles": ""
                },
                "children": []
              },
              {
                "name": "LeftContainerBanner2",
                "elementId": "LeftContainerBanner2",
                "tag": "srs-container",
                "props": {
                  "styles": {
                    "backgroundColor": "var(--cds-background)",
                    "box-shadow": "0px 2px 4px rgba(0, 0, 0, 0.25)",
                    "border-radius": "8px",
                    "padding": "8px",
                    "minHeight": "15rem"
                  },
                  "embedded_styles": ""
                },
                "children": []
              },
              {
                "name": "LeftContainerBanner3",
                "elementId": "LeftContainerBanner3",
                "tag": "srs-container",
                "props": {
                  "styles": {
                    "backgroundColor": "var(--cds-background)",
                    "box-shadow": "0px 2px 4px rgba(0, 0, 0, 0.25)",
                    "border-radius": "8px",
                    "padding": "8px",
                    "minHeight": "15rem"
                  },
                  "embedded_styles": ""
                },
                "children": []
              }
            ]
          },
          {
            "name": "RightContainer",
            "elementId": "RightContainer",
            "tag": "srs-container",
            "props": {
              "styles": {},
              "embedded_styles": ""
            },
            "children": [
              {
                "name": "RightContainerCardPlaceholder",
                "elementId": "RightContainerCardPlaceholder",
                "tag": "srs-card",
                "props": {},
                "children": []
              },
              {
                "name": "RightContainerTitle",
                "elementId": "RightContainerTitle",
                "tag": "srs-richtext",
                "props": {
                  "html_string": "<p style=\"font-size: 24px; font-weight: 600;  padding-left: 0.5rem;\">FAQs<p>"
                },
                "children": []
              },
              {
                "name": "RightContainerHelp",
                "elementId": "RightContainerHelp",
                "tag": "srs-accordion",
                "props": {},
                "children": [
                  {
                    "name": "AccordionItem1",
                    "elementId": "AccordionItem1",
                    "tag": "srs-accordion-item",
                    "props": {
                      "title": "What is cloning?"
                    },
                    "children": [
                      {
                        "name": "AccordionItem1Container",
                        "elementId": "AccordionItem1Container",
                        "tag": "srs-container",
                        "props": {
                          "styles": {
                            "border-top": "1px solid #B0B5BF"
                          },
                          "embedded_styles": ""
                        },
                        "children": [
                          {
                            "name": "AccordionItem1Contents",
                            "elementId": "AccordionItem1Contents",
                            "tag": "srs-richtext",
                            "props": {
                              "html_string": "<p>Use the System Clone application to copy everything in a database from one instance to another. <br /><br /> Cloning is typically used to copy a production instance to a pre-production instance to test changes. Cloning data comes from the most recent, nightly backup. </p>"
                            },
                            "children": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "AccordionItem2",
                    "elementId": "AccordionItem2",
                    "tag": "srs-accordion-item",
                    "props": {
                      "title": "How to rollback a clone?"
                    },
                    "children": [
                      {
                        "name": "AccordionItem2Container",
                        "elementId": "AccordionItem2Container",
                        "tag": "srs-container",
                        "props": {
                          "styles": {
                            "border-top": "1px solid #B0B5BF"
                          },
                          "embedded_styles": ""
                        },
                        "children": [
                          {
                            "name": "AccordionItem2Contents",
                            "elementId": "AccordionItem2Contents",
                            "tag": "srs-richtext",
                            "props": {
                              "html_string": "<p>Use the System Clone application to copy everything in a database from one instance to another. <br /><br /> Cloning is typically used to copy a production instance to a pre-production instance to test changes. Cloning data comes from the most recent, nightly backup. </p>"
                            },
                            "children": []
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
      }
    ]
  }
]
