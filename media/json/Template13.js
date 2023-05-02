//Settings page card
export const data = {
  "block_id": "2125baa243d0211061d09a549cb8f26b",
  "id": "2125baa243d0211061d09a549cb8f26b",
  "parent_block_id": "05ec47f94324611061d09a549cb8f212",
  "active": true,
  "name": "Exclusions",
  "label": "Exclusions",
  "title": "Exclusions",
  "subtitle": "The exclusions task lists the tables that are not copied during a system clone. By default, the system excludes tables for logging, auditing, notifications, workflow contexts, and license usage. ",
  "order": "0",
  "type": {
      "group": "element",
      "name": "Simple card with button",
      "id": "115fe59ceb38011090fa99602a5228b5",
      "route": "simple_card_with_button",
      "props": [
          {
              "element": "footer_text",
              "type": "translated_text"
          }
      ],
      "macroponent": "7dd3c4e4eb986510da1861c59c522898"
  },
  "lazyLoad": "0",
  "children": [
      {
          "block_id": "6125faa243d0211061d09a549cb8f267",
          "id": "6125faa243d0211061d09a549cb8f267",
          "parent_block_id": "2125baa243d0211061d09a549cb8f26b",
          "active": true,
          "name": "Exclusions View All",
          "label": "Exclusions View All",
          "title": "View All",
          "subtitle": "View All",
          "order": "0",
          "type": {
              "group": "action",
              "name": "Button",
              "id": "02c8c279c3e401104b8e88c7c840dde2",
              "route": "button",
              "props": [
                  {
                      "element": "action_type",
                      "type": "string"
                  },
                  {
                      "element": "button_size",
                      "type": "string"
                  },
                  {
                      "element": "variant",
                      "type": "string"
                  },
                  {
                      "element": "link",
                      "type": "url"
                  },
                  {
                      "element": "event_name",
                      "type": "string"
                  },
                  {
                      "element": "disabled",
                      "type": "boolean"
                  },
                  {
                      "element": "icon",
                      "type": "string"
                  }
              ],
              "macroponent": "87b330a2536141102958ddeeff7b12b2"
          },
          "lazyLoad": "0",
          "children": [],
          "props_details": {
              "action_type": "event",
              "button_size": "sm",
              "variant": "secondary",
              "link": "",
              "event_name": "EXCLUSIONS_VIEW_ALL",
              "disabled": "false",
              "icon": ""
          },
          "props_details_display": {},
          "props_overrides": {},
          "pageParams": {
              "bare": true,
              "scrollable": "y",
              "headerLevel": "1"
          },
          "style": {},
          "elementId": "",
          "slotname": "",
          "post_script": "",
          "visibility": "",
          "lazy_script": "",
          "scope": "31774a2953839110a6f8ddeeff7b12cb",
          "package": "31774a2953839110a6f8ddeeff7b12cb"
      }
  ],
  "props_details": {
      "footer_text": "Exclusions (152)"
  },
  "props_details_display": {},
  "props_overrides": {},
  "pageParams": {
      "bare": true,
      "scrollable": "y",
      "headerLevel": "1"
  },
  "style": {},
  "elementId": "",
  "slotname": "",
  "post_script": "(function(context){\n\tcontext.props_details.footer_text = gs.getMessage('Exclusions ({0})',new sn_instance_clone.CloneUtils().getRowCountByTableName('clone_data_exclude'));\n})(context);",
  "visibility": "",
  "lazy_script": "",
  "scope": "31774a2953839110a6f8ddeeff7b12cb",
  "package": "31774a2953839110a6f8ddeeff7b12cb"
}