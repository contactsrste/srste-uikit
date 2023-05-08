//Three Banner layout
export const data = [
    {
      "name": "TopContainer",
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
          "tag": "srs-container",
          "props": {
            "styles": {
              "background-image": "",
              "background-size": "cover",
              "padding": "2rem",
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
              "tag": "srs-container",
              "props": {
                "styles": {
                  "backgroundColor": "var(--cds-background-hover)",
                  "minHeight": 50,
                  "minWidth": "80%"
                },
                "embedded_styles": ""
              },
              "children": []
            }
          ]
        },
        {
          "name": "ContentSection",
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
              "tag": "srs-container",
              "props": {
                "styles": {
                  "margin-top": "-5rem",
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
              "tag": "srs-container",
              "props": {
                "styles": {
                  "margin-top": "-5rem"
                },
                "embedded_styles": ""
              },
              "children": [
                {
                  "name": "RightContainerCardPlaceholder",
                  "tag": "srs-card",
                  "props": {},
                  "children": []
                },
                {
                  "name": "RightContainerTitle",
                  "tag": "srs-richtext",
                  "props": {
                    "html_string": "<p style=\"font-size: 24px; font-weight: 600;  padding-left: 0.5rem;\">FAQs<p>"
                  },
                  "children": []
                },
                {
                  "name": "RightContainerHelp",
                  "tag": "srs-accordion",
                  "props": {},
                  "children": [
                    {
                      "name": "AccordionItem1",
                      "tag": "srs-accordion-item",
                      "props": {
                        "title": "What is cloning?"
                      },
                      "children": [
                        {
                          "name": "AccordionItem1Container",
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
                      "tag": "srs-accordion-item",
                      "props": {
                        "title": "How to rollback a clone?"
                      },
                      "children": [
                        {
                          "name": "AccordionItem2Container",
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
  ];