//Responsive One Column Layout with changing to one column at width below 600px. 
export const data = [
  {
    "name": "Container 1",
    "tag": "srs-container",
    "props": {
      "styles": {
        "display": "grid",
        "grid-template-columns": "var(--gridtemplatecolumns, 1fr)",
        "gap": "20px 20px"
      },
      "embedded_styles": "@media screen and (max-width: 600px) {  :host{  --gridtemplatecolumns: 1fr !important;  } }"
    },
    "children": [
      {
        "name": "Container 2",
        "tag": "srs-container",
        "props": {
          "styles": {
            "backgroundColor": "#86c7b7",
            "width": "100%",
            "height": "100%",
            "minHeight": 100
          },
          "embedded_styles": ""
        },
        "children": []
      },
      {
        "name": "Container 3",
        "tag": "srs-container",
        "props": {
          "styles": {
            "backgroundColor": "#86c7b7",
            "width": "100%",
            "height": "100%",
            "minHeight": 100
          },
          "embedded_styles": ""
        },
        "children": []
      },
      {
        "name": "Container 4",
        "tag": "srs-container",
        "props": {
          "styles": {
            "backgroundColor": "#86c7b7",
            "width": "100%",
            "height": "100%",
            "minHeight": 100
          },
          "embedded_styles": ""
        },
        "children": []
      }
    ]
  }
]