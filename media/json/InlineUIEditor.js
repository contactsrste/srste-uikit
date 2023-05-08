import { EventAPI } from "../../../srste-v2/srste/src/commons/EventAPI";

//Two Banner layout
export const data = [{
    name: "TopContainer",
    tag: "srs-container",
    props: {
        styles: {
            height: "100vh",
            justifyContent: "flex-start"
        },
        embedded_styles: ""
    },
    children: [
        {
            name: "HeroSection",
            tag: "srs-container",
            props: {
                styles: {
                    "background-image": "",
                    "background-size": "cover",
                    "padding": "2rem",
                    "min-height": "160px",
                    "color": "#fff",
                    placeContent: "start",
                    backgroundColor: "#0c0326"
                },
                embedded_styles: ""
            },
            children: [
                {
                    name: "HeroContainer",
                    tag: "srs-container",
                    props: {
                        styles: {
                            backgroundColor: "#0c0326",
                            minHeight: 50,
                            minWidth: "80%",
                            backgroundColor: "var(--cds-background-hover)"
                        },
                        embedded_styles: ""
                    },
                    children: [
                        {
                            name: "Hero Title",
                            tag: "srs-richtext",
                            props: {
                                html_string: "<h3>UI Editor</h3><br/><h5>Build user interfaces with JSON based editor</h5>"
                            },
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            name: "ActionContainer",
            tag: "srs-container",
            props: {
                styles: {
                    justifyContent: "flex-end"
                }
            },
            children: [
                {
                    name: "Actions",
                    tag: "srs-button",
                    props: {
                        label: "Apply"
                    },
                    children: [
                    ]
                }
            ]
        },
        {
            name: "ContentSection",
            tag: "srs-container",
            props: {
                styles: {
                    minHeight: "calc(100vh - 160px)",
                    "flex": 1,
                    "--now-color-temp-border": "var(--now-color_border--tertiary)",
                    "grid-template-columns": "1fr 1fr",
                    "gap": "20px",
                    "display": "grid",
                    "padding-left": "5px",
                    "padding-right": "5px",
                    "padding-top": "5px",
                    "z-index": 1,
                    "position": "relative",
                    backgroundColor: "var(--cds-background-selected-hover)",
                    placeContent: "start"
                },
                embedded_styles: ""
            },
            children: [
                {
                    name: "LeftContainer",
                    tag: "srs-codeeditor",
                    props: {
                        language: "json",
                        height: "800px",
                        width: "100%"
                    },
                    children: [
                    ]
                }, {
                    name: "RightContainer",
                    tag: "srs-contentrenderer",
                    props: {
                    },
                    overrides: {
                        overrides: "[[api.helper.getContents(api)]]",
                        ts: "" + Date.now()
                    },
                    children: []
                }]
        }]
},
{
    name: "PageController1",
    tag: "srs-controller",
    elementId: "pageController1",
    props: {
        handlers: [
            {
                eventName: "SrsCodeEditor#changed",
                type: "script",
                script: `(async function() {
            console.log(eventPayload);
            console.log(context);
            let ctx = context || {};
            let codeEditorValue = eventPayload?.payload?.value || "[]";
            ctx.pageData = codeEditorValue || [];
            return {context: ctx};
          })`,
                stopPropagation: true
            },
            {
                eventName: "SrsButton#clicked",
                type: "script",
                script: `(async function() {
                debugger;
                console.log(eventPayload);
                let pageData = context.pageData || "[]";
                pageData = JSON.parse(pageData);
                let ctx = context || {};
                ctx.previewData = JSON.stringify({contents: pageData});
                return {context: ctx};
            })`,
                stopPropagation: true
            }
        ]
    }
}]