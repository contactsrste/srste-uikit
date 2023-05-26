export const getPageDetails = async () => {
    let onNewFnBtnClicked = `(async function() {
        let elementId = eventPayload?.payload?.id || "";
        if(elementId == "functionsNewBtn") { 
            context.addFunctionOpenModal = true;
        }else if(elementId == "modalApplyBtn") { 
            context.addFunctionOpenModal = false; 
            context.pageData = context.pageData || {}; 
            context.pageData.functions = context.pageData.functions || {}; 
            context.pageData.functions[context.tempFunctionName] = "(function() {})"; 
            context.selectedFunctionName = context.tempFunctionName; 
            context.selectedFunctionCode = "(function() {})"; 
        } 
        return {context};
    })`;
    let codeEditorChanged = `(async function() {
        console.log(eventPayload);    
        console.log(context);    
        let ctx = context || {};    
        let elementId = eventPayload?.payload?.id;    
        let codeEditorValue = eventPayload?.payload?.value || {};
        if(elementId == "functionEditor") {
            ctx.pageData = ctx.pageData || {};        
            ctx.pageData.functions = ctx.pageData.functions || {};       
            if(ctx.selectedFunctionName) {
                ctx.pageData.functions[ctx.selectedFunctionName] = codeEditorValue;
                ctx.selectedFunctionCode = codeEditorValue;        
            }    
        }else if(elementId == "contextEditor") {        
            ctx.pageData = ctx.pageData || {};        
            ctx.pageData.context = codeEditorValue;    
        }else {
            ctx.pageData = ctx.pageData || {};        
            ctx.pageData.contents = codeEditorValue || [];
        }    
        return {context: ctx};
    })`;

    let buttonClicked = `(async function() {
        let elementId = eventPayload?.payload?.id;   
        let ctx = context || {}; 
        if(elementId == "UpdatePreview") {    
            let pageData = context.pageData || "{}";
            pageData = typeof context.pageData == "string"? JSON.parse(pageData): pageData;    
            let pageContents = pageData?.contents || [];
            pageContents = typeof pageContents == "string"? JSON.parse(pageContents): pageContents;    
            let pageContext = pageData?.context || {};    
            pageContext = typeof pageContext == "string"? JSON.parse(pageContext): pageContext;    
            let pageFunctions = pageData?.functions || {};    
            pageFunctions = typeof pageFunctions == "string"? JSON.parse(pageFunctions): pageFunctions;  
            ctx.previewData = JSON.stringify({contents: pageContents, context: pageContext, functions: pageFunctions});
        }
        return {context: ctx};
    })`;

    const embeddedCodeTemplate = `<script>
        document.addEventListener('DOMContentLoaded', function () {
        // Create the script element
        var script = document.createElement('script');
        script.src = 'https://know.srste.in/srste.js';
        script.defer = true;
    
        // Create the link element for the stylesheet
        var link = document.createElement('link');
        link.href = 'https://know.srste.in/static/css/main.621ff9de.css';
        link.rel = 'stylesheet';
    
        // Create the div element
        var div = document.createElement('div');
        div.id = '__srsteroot__';
    
        // Append the elements to the document body
        document.body.appendChild(script);
        document.head.appendChild(link);
        document.body.appendChild(div);
        });

        window.__SRS__ = window.__SRS__ || {};
        window.__SRS__.mode = "sandbox";
        window.__SRS__.contents = $$contents$$;
        window.__SRS__.context = $$context$$;
        window.__SRS__.functions = $$functions$$;
    </script>`;

    let getEmbeddedCodeExpression = `data.template.replace('$$contents$$', JSON.stringify(data.contents)).replace('$$context$$', JSON.stringify(data.context)).replace('$$functions$$', JSON.stringify(data.functions))`;

    let showEmbedCodeClicked = `(async function() {
        let elementId = eventPayload?.payload?.id;   
        let ctx = context || {}; 
        if(elementId == "ShowEmbedCode") {    
            let pageData = context.pageData || "{}";
            pageData = typeof context.pageData == "string"? JSON.parse(pageData): pageData;    
            let pageContents = pageData?.contents || [];
            pageContents = typeof pageContents == "string"? JSON.parse(pageContents): pageContents;    
            let pageContext = pageData?.context || {};    
            pageContext = typeof pageContext == "string"? JSON.parse(pageContext): pageContext;    
            let pageFunctions = pageData?.functions || {};    
            pageFunctions = typeof pageFunctions == "string"? JSON.parse(pageFunctions): pageFunctions;  
            let getEmbeddedCode = new Function("data", "with(data) { return ${getEmbeddedCodeExpression}; }");
            ctx.embeddedCode = getEmbeddedCode({template: \`${embeddedCodeTemplate}\`, contents: pageContents, context: pageContext, functions: pageFunctions});
            ctx.showEmbeddedCodeModal = true;
            context.openedModals = context.openedModals || [];
            let currentModal = context.openedModals.pop();
            if(currentModal) {
                context[currentModal] = false;
                context.openedModals.push(currentModal);
            }
            context.openedModals.push("showEmbeddedCodeModal");
        }
        return {context: ctx};
    })`;

    
    let selectChanged = `(async function() {    
            
        console.log(eventPayload);    
        let elementId = eventPayload?.payload?.id || "";    
        let pageData = context.pageData || "{}";    
        pageData = typeof context.pageData == "string"? JSON.parse(pageData): pageData;   
        let pageFunctions = pageData?.functions || {};   
        pageFunctions = typeof pageFunctions == "string"? JSON.parse(pageFunctions): pageFunctions;        
        if(elementId == "functionsList") {        
            let selectedFunction = eventPayload?.payload?.value || "";
            context.selectedFunctionName = selectedFunction || "";        
            context.selectedFunctionCode = pageFunctions[selectedFunction] || "";    
        }    
        return {context};
    })`;
    let onRemoveFunctionBtnClicked = `(async function() {    
        let elementId = eventPayload?.payload?.id || "";    
        if(elementId == "functionsRemoveBtn") { 
            context.removeFunctionOpenModal = true;
            context.openedModals = context.openedModals || [];
            let currentModal = context.openedModals.pop();
            if(currentModal) {
                context[currentModal] = false;
                context.openedModals.push(currentModal);
            }
            context.openedModals.push("removeFunctionOpenModal");
        }else if(elementId == "removeFnModalApplyBtn") { 
            context.pageData = context.pageData || {}; 
            context.pageData.functions = context.pageData.functions || {}; 
            delete context.pageData.functions[context.tempFunctionName]; 
            let functionNames = Object.keys(context.pageData.functions || {}); 
            context.selectedFunctionName = functionNames && functionNames.length > 0? functionNames[0]: ""; 
            context.selectedFunctionCode = functionNames && functionNames.length > 0? context.pageData.functions[functionNames[0]]: ""; 
            context.removeFunctionOpenModal = false;
        } 
        return {context} 
    })`;
    let onEditFunctionBtnClicked = `(async function() {    
        
        let elementId = eventPayload?.payload?.id || "";    
        if(elementId == "functionsEditBtn") { 
            context.editFunctionOpenModal = true;
            context.openedModals = context.openedModals || [];
            let currentModal = context.openedModals.pop();
            if(currentModal) {
                context[currentModal] = false;
                context.openedModals.push(currentModal);
            }
            context.openedModals.push("editFunctionOpenModal");
        }else if(elementId == "editFnModalApplyBtn") { 
            context.pageData = context.pageData || {}; 
            context.pageData.functions = context.pageData.functions || {}; 
            let selectedFunctionCode = context.pageData.functions[context.selectedFunctionName] + "";
            delete context.pageData.functions[context.selectedFunctionName];
            context.pageData.functions[context.tempFunctionName] = selectedFunctionCode;
            context.selectedFunctionName = context.tempFunctionName;
            context.editFunctionOpenModal = false;
        } 
        return {context} 
    })`;

    let onAddFunctionModalClosed = `(async function() {    
        if(eventPayload?.payload?.id == "modalCancelBtn") { 
            context.addFunctionOpenModal = false; 
            let currentModal = context.openedModals.pop();
            if(currentModal) {
                context[currentModal] = false;
            }
            let previousModal = context.openedModals.pop();
            if(previousModal) {
                context[previousModal] = true;
                context.openedModals.push(previousModal);
            }
        } 
        return {context}
    })`;
    
    let onRemoveFunctionModalClosed = `(async function() {    
        if(eventPayload?.payload?.id == "removeFnModalCancelBtn") { 
            context.removeFunctionOpenModal = false; 
            let currentModal = context.openedModals.pop();
            if(currentModal) {
                context[currentModal] = false;
            }
            let previousModal = context.openedModals.pop();
            if(previousModal) {
                context[previousModal] = true;
                context.openedModals.push(previousModal);
            }
        } 
        return {context}
    })`;
    let onEditFunctionModalClosed = `(async function() {    
        
        if(eventPayload?.payload?.id == "editFnModalCancelBtn") { 
            context.editFunctionOpenModal = false; 
            let currentModal = context.openedModals.pop();
            if(currentModal) {
                context[currentModal] = false;
            }
            let previousModal = context.openedModals.pop();
            if(previousModal) {
                context[previousModal] = true;
                context.openedModals.push(previousModal);
            }
        } 
        return {context}
    })`;
    let onPreviewModalClosed = `(async function() {    
        if(eventPayload?.payload?.id == "previewModalCancelBtn") { 
            context.previewOpenModal = false;
            let currentModal = context.openedModals.pop();
            if(currentModal) {
                context[currentModal] = false;
            }
            let previousModal = context.openedModals.pop();
            if(previousModal) {
                context[previousModal] = true;
                context.openedModals.push(previousModal);
            } 
        } 
        return {context}
    })`;
    let onShowEmbeddedCodeModalClosed = `(async function() {    
        if(eventPayload?.payload?.id == "showEmbeddedCodeModalCancelBtn") { 
            context.showEmbeddedCodeModal = false;
            let currentModal = context.openedModals.pop();
            if(currentModal) {
                context[currentModal] = false;
            }
            let previousModal = context.openedModals.pop();
            if(previousModal) {
                context[previousModal] = true;
                context.openedModals.push(previousModal);
            } 
        } 
        return {context}
    })`;
    
    let onComponentAddModalClosed = `(async function() {  
        debugger;  
        if(eventPayload?.payload?.id == "componentSettingsModalCancelBtn") { 
            context.componentAddOpenModal = false;
            let currentModal = context.openedModals.pop();
            if(currentModal) {
                context[currentModal] = false;
            }
            let previousModal = context.openedModals.pop();
            if(previousModal) {
                context[previousModal] = true;
                context.openedModals.push(previousModal);
            }
            context.selectedComponentForAdd = "";
        } 
        return {context}
    })`;
    let onFunctionNameChanged = `(async function() {    
        let elementId = eventPayload?.payload?.id || "";    
        if(elementId == "functionNameField" || elementId == "editFunctionNameField") { 
            context.tempFunctionName = eventPayload?.payload?.value; 
        } 
        // return {context}
    })`;

    let showPreviewScreen = `(async function() {
        let elementId = eventPayload?.payload?.id || "";
        if(elementId == "previewScreen") {
            context.previewOpenModal = true;
            context.openedModals = context.openedModals || [];
            let currentModal = context.openedModals.pop();
            if(currentModal) {
                context[currentModal] = false;
                context.openedModals.push(currentModal);
            }
            context.openedModals.push("previewOpenModal");
            context.screenType = "desktop";
            context.screenOrientation = 1;
        }
        return {context};
    })`;

    let onAddComponentClicked = `(async function() {    
        debugger;
        let elementId = eventPayload?.payload?.id || "";    
        console.log("in onAddComponentClicked", elementId);
        context.selectedComponentForAdd = elementId;
        context.componentAddOpenModal = true;
        context.openedModals = context.openedModals || [];
        let currentModal = context.openedModals.pop();
        if(currentModal) {
            context[currentModal] = false;
            context.openedModals.push(currentModal);
        }
        context.openedModals.push("componentAddOpenModal");
        return {context}
    })`;

    let setPreviewPanelMode = `(async function() {
        debugger;
        let elementId = eventPayload?.payload?.id || "";
        if(elementId) {
            switch(elementId) {
                case "FullPreviewScreen": 
                    context.previewPanelMode = 1;
                    context.leftContainerColumns = 1;
                    context.rightContainerColumns = 11;
                    context.leftContainerWidth = "5vw";
                    break;
                case "MorePreviewScreen": 
                    context.previewPanelMode = 2;
                    context.leftContainerColumns = 3,
                    context.rightContainerColumns = 9,
                    context.leftContainerWidth = "23vw"
                    break;
                case "MidPreviewScreen": 
                    context.previewPanelMode = 3;
                    context.leftContainerColumns = 6,
                    context.rightContainerColumns = 6,
                    context.leftContainerWidth = "47vw"
                    break;
                case "LessPreviewScreen":
                    context.previewPanelMode = 4;
                    context.leftContainerColumns = 9,
                    context.rightContainerColumns = 3,
                    context.leftContainerWidth = "70vw"
                    break;
            }
        }
        return {context};
    })`;
    let setResponsiveness = `(async function() {
        
        let elementId = eventPayload?.payload?.id || "";
        if(elementId) {
            switch(elementId) {
                case "largeScreen": 
                    context.screenType = "largeScreen";
                    break;
                case "desktopScreen": 
                    context.screenType = "desktop";
                    break;
                case "laptopScreen": 
                    context.screenType = "laptop";
                    break;
                case "tabletScreen": 
                    context.screenType = "tablet";
                    break;
                case "mobileScreen": 
                    context.screenType = "mobile";
                    break;
                case "rotateScreen": 
                    context.screenOrientation = (context.screenOrientation  == 1)? 0: 1;
                    break;
            }   
        }

        let screenOrientation = context.screenOrientation == 0? "portrait": "landscape"; //landscape = 1 and portrait = 0

        let screenHeight = "calc(100vh - 12rem)";
        let screenWidth = "calc(100vw - 10rem)";

        if(screenOrientation == "portrait") {
            screenHeight = "calc(100vw - 10rem)";
            screenWidth = "calc(100vh - 12rem)";
        }
        
        if(context.screenType) {
            switch(context.screenType) {
                case "largeScreen": 
                    if(screenOrientation == "landscape") {
                        context.screenWidth = "3840px";
                        context.screenHeight = "2160px";
                    }else {
                        context.screenWidth = "2160px";
                        context.screenHeight = "3840px";
                    }
                    break;
                case "desktop":
                    if(screenOrientation == "landscape") {
                        context.screenWidth = "1920px";
                        context.screenHeight = "1080px";
                    }else {
                        context.screenWidth = "1080px";
                        context.screenHeight = "1920px";
                    }
                    break;
                case "laptop": 
                    if(screenOrientation == "landscape") {
                        context.screenWidth = "1366px";
                        context.screenHeight = "768px";
                    }else {
                        context.screenWidth = "768px";
                        context.screenHeight = "1366px";
                    }
                    break;
                case "tablet": 
                    if(screenOrientation == "landscape") {
                        context.screenWidth = "820px";
                        context.screenHeight = "1180px";
                    }else {
                        context.screenWidth = "1180px";
                        context.screenHeight = "820px";
                    }
                    break;
                case "mobile":
                    if(screenOrientation == "landscape") {
                        context.screenWidth = "390px";
                        context.screenHeight = "850px";
                    }else {
                        context.screenWidth = "850px";
                        context.screenHeight = "390px";
                    }
                    break;
            }
        }

        return {context};
    })`;

    let pageContents = [
        {
            "name": "TopContainer",
            "tag": "srs-container",
            "props": {
                "styles": {
                    "height": "calc(100vh - 5rem)",
                    "overflow": "hidden",
                    "justifyContent": "flex-start"
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
                            "min-height": "50px",
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
                                    "minHeight": 25,
                                    "minWidth": "80%"
                                },
                                "embedded_styles": ""
                            },
                            "children": [
                                {
                                    "name": "Hero Title",
                                    "tag": "srs-richtext",
                                    "props": {
                                        "html_string": "<h3>UI Editor</h3>"
                                    },
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "ActionContainer",
                    "tag": "srs-container",
                    "props": {
                        "styles": {
                            "display": "flex",
                            "flexDirection": "row-reverse",
                            "placeContent": "end"
                        }
                    },
                    "children": [
                        {
                            "name": "UpdatePreview",
                            "elementId": "UpdatePreview",
                            "tag": "mui-icon-button",
                            "props": {
                                "icon": "PlayArrow"
                            }
                        },
                        {
                            "name": "previewScreen",
                            "elementId": "previewScreen",
                            "tag": "mui-icon-button",
                            "props": {
                                "icon": "ViewCozy"
                            }
                        },
                        {
                            "name": "ShowEmbedCode",
                            "elementId": "ShowEmbedCode",
                            "tag": "mui-icon-button",
                            "props": {
                                "icon": "Html"
                            }
                        }
                    ]
                },
                {
                    "name": "ContentSection",
                    "tag": "mui-grid",
                    "props": {
                        "container": true,
                        "sx": {
                            "width": "100%"
                        }
                    },
                    "children": [
                        {
                            "name": "LeftContainer",
                            "tag": "mui-grid",
                            "props": {
                                "item": true,
                                "md": 6,
                                "sx": {
                                    "width": "100%"
                                }
                            },
                            "overrides": {
                                "md": "[[api.context.leftContainerColumns]]"
                            },
                            "children": [
                                {
                                    "name": "tabs1",
                                    "elementId": "tabs1",
                                    "tag": "mui-tabs",
                                    "props": {
                                        "sx": {
                                            "color": "var(--cds-background-inverse)"
                                        }
                                    },
                                    "children": [
                                        {
                                            "name": "tab1",
                                            "elmentId": "tab1",
                                            "tag": "mui-tab",
                                            "props": {
                                                "label": "Contents",
                                                "value": "tab1"
                                            },
                                            "children": [{
                                                "name": "code-editor",
                                                "elementId": "contentEditor",
                                                "tag": "srs-codeeditor",
                                                "props": {
                                                    "language": "json",
                                                    "height": "calc(100vh - 20rem)",
                                                    "width": "47vw"
                                                },
                                                "overrides": {
                                                    "value": "[[api.context.pageData.contents]]",
                                                    "width": "[[api.context.leftContainerWidth]]"
                                                },
                                                "children": []
                                            }]
                                        },
                                        {
                                            "name": "tab2",
                                            "elmentId": "tab2",
                                            "tag": "mui-tab",
                                            "props": {
                                                "label": "Context",
                                                "value": "tab2"
                                            },
                                            "children": [{
                                                "name": "code-editor",
                                                "elementId": "contextEditor",
                                                "tag": "srs-codeeditor",
                                                "props": {
                                                    "language": "json",
                                                    "height": "calc(100vh - 20rem)",
                                                    "width": "47vw"
                                                },
                                                "overrides": {
                                                    "value": "[[api.context.pageData.context]]",
                                                    "width": "[[api.context.leftContainerWidth]]"
                                                },
                                                "children": []
                                            }]
                                        },
                                        {
                                            "name": "tab3",
                                            "elmentId": "tab3",
                                            "tag": "mui-tab",
                                            "props": {
                                                "label": "Functions",
                                                "value": "tab3"
                                            },
                                            "children": [{
                                                "name": "functionsBody",
                                                "elementId": "functionsBody",
                                                "tag": "srs-container",
                                                "props": {
                                                    "styles": {
                                                        "display": "flex",
                                                        "flexDirection": "column"
                                                    }
                                                },
                                                "children": [
                                                    {
                                                        "name": "functionsSelector",
                                                        "elementId": "functionsSelector",
                                                        "tag": "srs-container",
                                                        "props": {
                                                            "styles": {
                                                                "display": "flex",
                                                                "flexDirection": "row",
                                                                "justifyContent": "flex-start"
                                                            }
                                                        },
                                                        "children": [
                                                            {
                                                                "name": "functionsList",
                                                                "elementId": "functionsList",
                                                                "tag": "srs-select",
                                                                "props": {
                                                                    "label": "",
                                                                    "options": []
                                                                },
                                                                "overrides": {
                                                                    "options": "[[api.helper.getOptionsForPageFunctions(api)]]",
                                                                    "selected": "[[api.helper.getSelectedFunctionName(api)]]"
                                                                },
                                                                "children": []
                                                            },
                                                            {
                                                                "name": "functionsNewBtn",
                                                                "elementId": "functionsNewBtn",
                                                                "tag": "mui-icon-button",
                                                                "props": {
                                                                    "icon": "Add"
                                                                },
                                                                "children": []
                                                            },
                                                            {
                                                                "name": "functionsRemoveBtn",
                                                                "elementId": "functionsRemoveBtn",
                                                                "tag": "mui-icon-button",
                                                                "props": {
                                                                    "icon": "Remove"
                                                                },
                                                                "children": []
                                                            },
                                                            {
                                                                "name": "functionsEditBtn",
                                                                "elementId": "functionsEditBtn",
                                                                "tag": "mui-icon-button",
                                                                "props": {
                                                                    "icon": "Edit"
                                                                },
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "name": "code-editor",
                                                        "elementId": "functionEditor",
                                                        "tag": "srs-codeeditor",
                                                        "props": {
                                                            "language": "json",
                                                            "height": "calc(100vh - 23rem)",
                                                            "width": "47vw",
                                                            "value": ""
                                                        },
                                                        "overrides": {
                                                            "value": "[[api.context.selectedFunctionCode]]",
                                                            "width": "[[api.context.leftContainerWidth]]"
                                                        },
                                                        "children": []
                                                    }
                                                ]
                                            }]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "RightContainer",
                            "tag": "mui-grid",
                            "props": {
                                "item": true,
                                "md": 6,
                                "sx": {
                                    "width": "100%",
                                    "justifyContent": "flex-start",
                                    "height": "calc(100vh - 16rem)"
                                }
                            },
                            "overrides": {
                                "md": "[[api.context.rightContainerColumns]]"
                            },
                            "children": [
                                {
                                    "name": "RightcontainerToolkit",
                                    "elementId": "RightcontainerToolkit",
                                    "tag": "srs-container",
                                    "props": {
                                        "styles": {
                                            "height": "3rem",
                                            "justifyContent": "center",
                                            "display": "flex",
                                            "flexDirection": "row"
                                        }
                                    },
                                    "children": [
                                        {
                                            "name": "FullPreviewScreen",
                                            "elementId": "FullPreviewScreen",
                                            "tag": "mui-icon-button",
                                            "props": {
                                                "icon": "FiberManualRecord"
                                            },
                                            "overrides": {
                                                "sx": "[[api.helper.getPreviewPanelSpreadStyle(api, 1)]]"
                                            }
                                        },
                                        {
                                            "name": "MorePreviewScreen",
                                            "elementId": "MorePreviewScreen",
                                            "tag": "mui-icon-button",
                                            "props": {
                                                "icon": "Brightness2"
                                            },
                                            "overrides": {
                                                "sx": "[[api.helper.getPreviewPanelSpreadStyle(api, 2)]]"
                                            }
                                        },
                                        {
                                            "name": "MidPreviewScreen",
                                            "elementId": "MidPreviewScreen",
                                            "tag": "mui-icon-button",
                                            "props": {
                                                "icon": "Tonality"
                                            },
                                            "overrides": {
                                                "sx": "[[api.helper.getPreviewPanelSpreadStyle(api, 3)]]"
                                            }
                                        },
                                        {
                                            "name": "LessPreviewScreen",
                                            "elementId": "LessPreviewScreen",
                                            "tag": "mui-icon-button",
                                            "props": {
                                                "icon": "Brightness3"
                                            },
                                            "overrides": {
                                                "sx": "[[api.helper.getPreviewPanelSpreadStyle(api, 4)]]"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "elementId": "RightcontainerContents",
                                    "name": "RightcontainerContents",
                                    "tag": "srs-container",
                                    "props": {
                                        "styles": {
                                            "height": "3rem",
                                            "justifyContent": "center",
                                            "boxShadow": "-2px 2px 7px 0px grey",
                                            "height": "calc(100vh - 20rem)",
                                            "justifyContent": "flex-start"
                                        }
                                    },
                                    "children": [
                                        {
                                            "name": "RightContents",
                                            "tag": "srs-contentrenderer",
                                            "props": {
                                                "styles": {
                                                    "minHeight": "300px",
                                                    "height": "calc(100vh - 20rem)",
                                                    "maxHeight": "calc(100vh - 20rem)",
                                                    "overflow": "auto"
                                                }
                                            },
                                            "overrides": {
                                                "overrides": "[[api.helper.getContents(api)]]",
                                                "ts": "1683941616850"
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
        },
        {
            "name": "PageController1",
            "tag": "srs-controller",
            "elementId": "pageController1",
            "props": {
                "handlers": [
                    {
                        "eventName": "SrsCodeEditor#changed",
                        "type": "script",
                        "script": codeEditorChanged,
                        "stopPropagation": true
                    },
                    {
                        "eventName": "SrsSelect#changed",
                        "type": "script",
                        "script": selectChanged,
                        "stopPropagation": true
                    },
                    {
                        "name": "ApplyChanges",
                        "eventName": "IconButton#clicked",
                        "type": "script",
                        "script": buttonClicked,
                        "stopPropagation": true
                    },
                    {
                        "name": "ShowEmbeddedCode",
                        "eventName": "IconButton#clicked",
                        "type": "script",
                        "script": showEmbedCodeClicked,
                        "stopPropagation": true
                    },
                    {
                        "name": "onNewFunctionBtnClicked",
                        "eventName": "IconButton#clicked",
                        "type": "script",
                        "script": onNewFnBtnClicked,
                        "stopPropagation": true
                    },
                    {
                        "name": "onRemoveFunctionBtnClicked",
                        "eventName": "IconButton#clicked",
                        "type": "script",
                        "script": onRemoveFunctionBtnClicked,
                        "stopPropagation": true
                    },
                    {
                        "name": "onEditFunctionBtnClicked",
                        "eventName": "IconButton#clicked",
                        "type": "script",
                        "script": onEditFunctionBtnClicked,
                        "stopPropagation": true
                    },
                    {
                        "name": "onPreviewBtnClicked",
                        "eventName": "IconButton#clicked",
                        "type": "script",
                        "script": showPreviewScreen,
                        "stopPropagation": true
                    },
                    {
                        "name": "onResponsiveScreenClicked",
                        "eventName": "IconButton#clicked",
                        "type": "script",
                        "script": setResponsiveness,
                        "stopPropagation": true
                    },
                    {
                        "name": "onSetPreviewPanelMode",
                        "eventName": "IconButton#clicked",
                        "type": "script",
                        "script": setPreviewPanelMode,
                        "stopPropagation": true
                    },
                    {
                        "name": "onAddFunctionModalClosed",
                        "eventName": "MODAL_CLOSED",
                        "type": "script",
                        "script": onAddFunctionModalClosed,
                        "stopPropagation": true
                    },{
                        "name": "RemoveFunctionModalClosed",
                        "eventName": "MODAL_CLOSED",
                        "type": "script",
                        "script": onRemoveFunctionModalClosed,
                        "stopPropagation": true
                    },{
                        "name": "EditFunctionModalClosed",
                        "eventName": "MODAL_CLOSED",
                        "type": "script",
                        "script": onEditFunctionModalClosed,
                        "stopPropagation": true
                    }, {
                        "name": "PreviewModalClosed",
                        "eventName": "MODAL_CLOSED",
                        "type": "script",
                        "script": onPreviewModalClosed,
                        "stopPropagation": true
                    }, 
                    {
                        "name": "ShowEmbeddedCodeModalClosed",
                        "eventName": "MODAL_CLOSED",
                        "type": "script",
                        "script": onShowEmbeddedCodeModalClosed,
                        "stopPropagation": true
                    },
                    {
                        "name": "ComponentSettingsModalClosed",
                        "eventName": "MODAL_CLOSED",
                        "type": "script",
                        "script": onComponentAddModalClosed,
                        "stopPropagation": true
                    },
                    {
                        "name": "functionNameChanged",
                        "eventName": "MuiTextField#changed",
                        "type": "script",
                        "script": onFunctionNameChanged,
                        "stopPropagation": true
                    }, 
                    {
                        "name": "AddComponentClicked",
                        "eventName": "DESIGNTIME_ADD_CLICKED",
                        "type": "script",
                        "script": onAddComponentClicked,
                        "stopPropagation": true
                    }
                ]
            }
        },
        {
            "name": "addFunctionModalContainer",
            "elementId": "addFunctionModalContainer",
            "tag": "mui-modal",
            "props": {
                "open": true
            },
            "overrides": {
                "open": "[[api.context.addFunctionOpenModal]]"
            },
            "children": [
                {
                    "name": "modalContents",
                    "elementId": "modalContents",
                    "tag": "mui-box",
                    "props": {
                        "sx": {
                            "position": "absolute",
                            "top": "50%",
                            "left": "50%",
                            "transform": "translate(-50%, -50%)",
                            "width": 400,
                            "bgcolor": "background.paper",
                            "border": "2px solid #000",
                            "boxShadow": 24,
                            "p": 4
                        }
                    },
                    "children": [{
                        "name": "NewFunctionModalTitle",
                        "elementId": "NewFunctionModalTitle",
                        "tag": "mui-typography",
                        "props": {
                            "text": "New Function Details",
                            "color": "var(--cds-text-secondary)",
                            "variant": "h5"
                        }
                    },
                    {
                            "name": "functionNameField",
                            "elementId": "functionNameField",
                            "tag": "mui-text-field",
                            "props": {
                                "label": "Function Name",
                                "variant": "outlined",
                                "placeholder": "Enter function name",
                                "sx": {
                                    "width": "100%"
                                }
                            },
                            "overrides": {
                                "defaultvalue": "[[api.context.tempFunctionName]]"
                            }
                        },
                        {
                            "name": "modalActions",
                            "elementId": "modalActions",
                            "tag": "mui-box",
                            "props": {
                                "sx": {
                                    "display": "flex",
                                    "flexDirection": "row",
                                    "justifyContent": "flex-end",
                                    "width": "100%"
                                }
                            },
                            "children": [{
                                "name": "modalCancelBtnContainer",
                                "elementId": "modalCancelBtnContainer",
                                "tag": "srs-relay",
                                "props": {
                                    "relaylist": [{
                                        "source": "IconButton#clicked",
                                        "target": "MODAL_CLOSED"
                                    }]
                                },
                                "children": [
                                    {
                                        "name": "modalCancelBtn",
                                        "elementId": "modalCancelBtn",
                                        "tag": "mui-icon-button",
                                        "props": {
                                            "icon": "Clear"
                                        }
                                    }
                                ]
                            }, {
                                "name": "modalApplyBtn",
                                "elementId": "modalApplyBtn",
                                "tag": "mui-icon-button",
                                "props": {
                                    "icon": "Check"
                                }
                            }]
                        }
                    ]
                }
            ]
        },
        {
            "name": "removeFunctionModalContainer",
            "elementId": "removeFunctionModalContainer",
            "tag": "mui-modal",
            "props": {
                "open": false
            },
            "overrides": {
                "open": "[[api.context.removeFunctionOpenModal]]"
            },
            "children": [
                {
                    "name": "removeFunctionModalContents",
                    "elementId": "removeFunctionModalContents",
                    "tag": "mui-box",
                    "props": {
                        "sx": {
                            "position": "absolute",
                            "top": "50%",
                            "left": "50%",
                            "transform": "translate(-50%, -50%)",
                            "width": 400,
                            "bgcolor": "background.paper",
                            "border": "2px solid #000",
                            "boxShadow": 24,
                            "p": 4
                        }
                    },
                    "children": [{
                        "name": "removeFunctionModalTitle",
                        "elementId": "removeFunctionModalTitle",
                        "tag": "mui-typography",
                        "props": {
                            "text": "Delete Confirmation",
                            "color": "var(--cds-text-secondary)",
                            "variant": "h5"
                        },
                        "overrides": {
                            "value": "[[api.context.tempFunctionName]]"
                        }
                    },{
                            "name": "removeFunctionNameField",
                            "elementId": "removeFunctionNameField",
                            "tag": "mui-typography",
                            "props": {
                                "text": "Are you sure you want to delete the function",
                                "color": "var(--cds-text-secondary)"
                            },
                            "overrides": {
                                "text": "[[api.helper.getDeleteConfirmText(api)]]"
                            }
                        },
                        {
                            "name": "removeFunctionModalActions",
                            "elementId": "removeFunctionModalActions",
                            "tag": "mui-box",
                            "props": {
                                "sx": {
                                    "display": "flex",
                                    "flexDirection": "row",
                                    "justifyContent": "flex-end",
                                    "width": "100%"
                                }
                            },
                            "children": [{
                                "name": "removeFnModalCancelBtnContainer",
                                "elementId": "removeFnModalCancelBtnContainer",
                                "tag": "srs-relay",
                                "props": {
                                    "relaylist": [{
                                        "source": "IconButton#clicked",
                                        "target": "MODAL_CLOSED"
                                    }]
                                },
                                "children": [
                                    {
                                        "name": "removeFnModalCancelBtn",
                                        "elementId": "removeFnModalCancelBtn",
                                        "tag": "mui-icon-button",
                                        "props": {
                                            "icon": "Clear"
                                        }
                                    }
                                ]
                            }, {
                                "name": "removeFnModalApplyBtn",
                                "elementId": "removeFnModalApplyBtn",
                                "tag": "mui-icon-button",
                                "props": {
                                    "icon": "Check"
                                }
                            }]
                        }
                    ]
                }
            ]
        },
        {
            "name": "editFunctionModalContainer",
            "elementId": "editFunctionModalContainer",
            "tag": "mui-modal",
            "props": {
                "open": false
            },
            "overrides": {
                "open": "[[api.context.editFunctionOpenModal]]"
            },
            "children": [
                {
                    "name": "editFunctionModalContents",
                    "elementId": "editFunctionModalContents",
                    "tag": "mui-box",
                    "props": {
                        "sx": {
                            "position": "absolute",
                            "top": "50%",
                            "left": "50%",
                            "transform": "translate(-50%, -50%)",
                            "width": 400,
                            "bgcolor": "background.paper",
                            "border": "2px solid #000",
                            "boxShadow": 24,
                            "p": 4
                        }
                    },
                    "children": [{
                        "name": "editFunctionModalTitle",
                        "elementId": "editFunctionModalTitle",
                        "tag": "mui-typography",
                        "props": {
                            "text": "Rename the function",
                            "color": "var(--cds-text-secondary)",
                            "variant": "h5"
                        }
                    },{
                            "name": "editFunctionNameField",
                            "elementId": "editFunctionNameField",
                            "tag": "mui-text-field",
                            "props": {
                                "label": "Function Name",
                                "variant": "outlined",
                                "placeholder": "Enter function name",
                                "sx": {
                                    "width": "100%"
                                }
                            },
                            "overrides": {
                                "defaultvalue": "[[api.context.selectedFunctionName]]"
                            }
                        },
                        {
                            "name": "editFunctionModalActions",
                            "elementId": "editFunctionModalActions",
                            "tag": "mui-box",
                            "props": {
                                "sx": {
                                    "display": "flex",
                                    "flexDirection": "row",
                                    "justifyContent": "flex-end",
                                    "width": "100%"
                                }
                            },
                            "children": [{
                                "name": "editFnModalCancelBtnContainer",
                                "elementId": "editFnModalCancelBtnContainer",
                                "tag": "srs-relay",
                                "props": {
                                    "relaylist": [{
                                        "source": "IconButton#clicked",
                                        "target": "MODAL_CLOSED"
                                    }]
                                },
                                "children": [
                                    {
                                        "name": "editFnModalCancelBtn",
                                        "elementId": "editFnModalCancelBtn",
                                        "tag": "mui-icon-button",
                                        "props": {
                                            "icon": "Clear"
                                        }
                                    }
                                ]
                            }, {
                                "name": "editFnModalApplyBtn",
                                "elementId": "editFnModalApplyBtn",
                                "tag": "mui-icon-button",
                                "props": {
                                    "icon": "Check"
                                }
                            }]
                        }
                    ]
                }
            ]
        },
        {
            "name": "previewModalContainer",
            "elementId": "previewModalContainer",
            "tag": "mui-modal",
            "props": {
                "open": false
            },
            "overrides": {
                "open": "[[api.context.previewOpenModal]]"
            },
            "children": [
                {
                    "name": "previewModalContents",
                    "elementId": "previewModalContents",
                    "tag": "mui-box",
                    "props": {
                        "sx": {
                            "position": "absolute",
                            "top": "3%",
                            "left": "2%",
                            "transform": "translate(0%, 0%)",
                            "width": "calc(100vw - 4%)",
                            "height": "calc(100vh - 6%)",
                            "bgcolor": "background.paper",
                            "border": "2px solid #000",
                            "boxShadow": 24,
                            "overflow": "auto",
                            "p": 4
                        }
                    },
                    "children": [{
                        "name": "previewModalTitleContainer",
                        "elementId": "previewModalTitleContainer",
                        "tag": "srs-container",
                        "props": {
                            "styles": {
                                "display": "flex",
                                "flexDirection": "row",
                                "alignItems": "stretch",
                                "flexDirection": "row",
                                "justifyContent": "space-between",
                                "position": "sticky"
                            }
                        },
                        "children": [{
                            "name": "previewModalTitle",
                            "elementId": "previewModalTitle",
                            "tag": "mui-typography",
                            "props": {
                                "text": "Preview",
                                "color": "var(--cds-text-secondary)",
                                "variant": "h5"
                            }
                        }, {
                            "name": "previewModalCancelBtnContainer",
                            "elementId": "previewModalCancelBtnContainer",
                            "tag": "srs-relay",
                            "props": {
                                "relaylist": [{
                                    "source": "IconButton#clicked",
                                    "target": "MODAL_CLOSED"
                                }]
                            },
                            "children": [
                                {
                                    "name": "previewModalCancelBtn",
                                    "elementId": "previewModalCancelBtn",
                                    "tag": "mui-icon-button",
                                    "props": {
                                        "icon": "Clear"
                                    }
                                }
                            ]
                        }]
                    }, {
                        "name": "previewModalResponsiveContainer",
                        "elementId": "previewModalResponsiveContainer",
                        "tag": "srs-container",
                        "props": {
                            "styles": {
                                "display": "flex",
                                "flexDirection": "row",
                                "justifyContent": "center"
                            }
                        },
                        "children": [{
                            "name": "largeScreen",
                            "elementId": "largeScreen",
                            "tag": "mui-icon-button",
                            "props": {
                                "icon": "AddToQueue",
                            },
                            "overrides": {
                                "sx": "[[api.helper.getScreenSelectionStyle(api, 1)]]"
                            }
                        }, {
                            "name": "desktopScreen",
                            "elementId": "desktopScreen",
                            "tag": "mui-icon-button",
                            "props": {
                                "icon": "Monitor"
                            },
                            "overrides": {
                                "sx": "[[api.helper.getScreenSelectionStyle(api, 2)]]"
                            }
                        }, {
                            "name": "laptopScreen",
                            "elementId": "laptopScreen",
                            "tag": "mui-icon-button",
                            "props": {
                                "icon": "LaptopMac"
                            },
                            "overrides": {
                                "sx": "[[api.helper.getScreenSelectionStyle(api, 3)]]"
                            }
                        }, {
                            "name": "tabletScreen",
                            "elementId": "tabletScreen",
                            "tag": "mui-icon-button",
                            "props": {
                                "icon": "TabletMac"
                            },
                            "overrides": {
                                "sx": "[[api.helper.getScreenSelectionStyle(api, 4)]]"
                            }
                        }, {
                            "name": "mobileScreen",
                            "elementId": "mobileScreen",
                            "tag": "mui-icon-button",
                            "props": {
                                "icon": "Smartphone"
                            },
                            "overrides": {
                                "sx": "[[api.helper.getScreenSelectionStyle(api, 5)]]"
                            }
                        }, {
                            "name": "rotateScreen",
                            "elementId": "rotateScreen",
                            "tag": "mui-icon-button",
                            "props": {
                                "icon": "ScreenRotation"
                            },
                            "overrides": {
                                "sx": "[[api.helper.getScreenSelectionStyle(api, 6)]]"
                            }
                        },]
                    }, {
                        "name": "previewContentRendererContainer",
                        "elementId": "previewContentRendererContainer",
                        "tag": "srs-container",
                        "props": {
                            "styles": {
                                "display": "flex",
                                "flexDirection": "row",
                                "justifyContent": "center",
                                "boxShadow": "inset -2px -2px 9px grey"
                            }
                        },
                        "overrides": {
                            "styles": "[[api.helper.getPreviewContentContainerStyles(api)]]"
                        },
                        "children": [{
                            "name": "PreviewContentRenderer",
                            "elementId": "PreviewContentRenderer",
                            "tag": "srs-contentrenderer",
                            "props": {
                                "styles": {
                                }
                            },
                            "overrides": {
                                "overrides": "[[api.helper.getContents(api)]]",
                                "ts": "1683941616851",
                                "style": "[[api.helper.getPreviewContentStyles(api)]]"
                            },
                            "children": []
                        }]
                    }]
                }
            ]
        },
        {
            "name": "componentSettingsModalContainer",
            "elementId": "componentSettingsModalContainer",
            "tag": "mui-modal",
            "props": {
                "open": false
            },
            "overrides": {
                "open": "[[api.context.componentAddOpenModal]]"
            },
            "children": [
                {
                    "name": "componentSettingsModalContents",
                    "elementId": "componentSettingsModalContents",
                    "tag": "mui-box",
                    "props": {
                        "sx": {
                            "position": "absolute",
                            "top": "3%",
                            "left": "2%",
                            "transform": "translate(0%, 0%)",
                            "width": "calc(100vw - 4%)",
                            "height": "calc(100vh - 6%)",
                            "bgcolor": "background.paper",
                            "border": "2px solid #000",
                            "boxShadow": 24,
                            "p": 4
                        }
                    },
                    "children": [{
                        "name": "componentSettingsTitleContainer",
                        "elementId": "componentSettingsTitleContainer",
                        "tag": "srs-container",
                        "props": {
                            "styles": {
                                "display": "flex",
                                "flexDirection": "row",
                                "alignItems": "stretch",
                                "flexDirection": "row",
                                "justifyContent": "space-between"
                            }
                        },
                        "children": [{
                            "name": "componentSettingsTitle",
                            "elementId": "componentSettingsTitle",
                            "tag": "mui-typography",
                            "props": {
                                "text": "Component Properties",
                                "color": "var(--cds-text-secondary)",
                                "variant": "h5"
                            }
                        }, {
                            "name": "componentSettingsModalCancelBtnContainer",
                            "elementId": "componentSettingsModalCancelBtnContainer",
                            "tag": "srs-relay",
                            "props": {
                                "relaylist": [{
                                    "source": "IconButton#clicked",
                                    "target": "MODAL_CLOSED"
                                }]
                            },
                            "children": [
                                {
                                    "name": "componentSettingsModalCancelBtn",
                                    "elementId": "componentSettingsModalCancelBtn",
                                    "tag": "mui-icon-button",
                                    "props": {
                                        "icon": "Clear"
                                    }
                                }
                            ]
                        }]
                    }, 
                    {
                        "name": "componentSettingsContentContainer",
                        "elementId": "componentSettingsContentContainer",
                        "tag": "mui-grid",
                        "props": {
                            "container": true
                        },
                        "children": [
                            {
                                "name": "componentSettingsContents",
                                "elementId": "componentSettingsContents",
                                "tag": "mui-grid",
                                "props": {
                                    "item": true, 
                                    "md": 6
                                },
                                "children": [
                                    {
                                        "name": "componentSettingsContentsTabs",
                                        "elementId": "componentSettingsContentsTabs",
                                        "tag": "mui-tabs",
                                        "props": {
                                            "value": "properties",
                                            "sx": {
                                                "color": "var(--cds-background-inverse)"
                                            }
                                        },
                                        "children": [
                                            {
                                                "name": "componentSettingsTemplateTab",
                                                "elementId": "componentSettingsTemplateTab",
                                                "tag": "mui-tab",
                                                "props": {
                                                    "label": "Content Template",
                                                    "value": "Template"
                                                },
                                                "children": [
                                                    {
                                                        "name": "componentSettingsTemplateTabContent",
                                                        "elementId": "componentSettingsTemplateTabContent",
                                                        "tag": "mui-typography",
                                                        "props": {
                                                            "text": "Content Template",
                                                            "color": "var(--cds-text-secondary)"
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                "name": "componentSettingsComponentPropsTab",
                                                "elementId": "componentSettingsComponentPropsTab",
                                                "tag": "mui-tab",
                                                "props": {
                                                    "label": "Properties",
                                                    "value": "properties"
                                                },
                                                "children": [
                                                    {
                                                        "name": "componentSettingsComponentPropsTabContent",
                                                        "elementId": "componentSettingsComponentPropsTabContent",
                                                        "tag": "mui-typography",
                                                        "props": {
                                                            "text": "Component Properties",
                                                            "color": "var(--cds-text-secondary)"
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                "name": "componentSettingsComponentStylesTab",
                                                "elementId": "componentSettingsComponentStylesTab",
                                                "tag": "mui-tab",
                                                "props": {
                                                    "label": "Styles",
                                                    "value": "styles"
                                                },
                                                "children": [
                                                    {
                                                        "name": "componentSettingsComponentStylesTabContent",
                                                        "elementId": "componentSettingsComponentStylesTabContent",
                                                        "tag": "mui-typography",
                                                        "props": {
                                                            "text": "Component Styles",
                                                            "color": "var(--cds-text-secondary)"
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "componentPreviewContainer",
                                "elementId": "componentPreviewContainer",
                                "tag": "mui-grid",
                                "props": {
                                    "item": true, 
                                    "md": 6
                                },
                                "children": [
                                    {
                                        "name": "componentPreviewContainer2",
                                        "elementId": "componentPreviewContainer2",
                                        "tag": "mui-box",
                                        "props": {
                                            "sx": {
                                                "minHeight": "300px",
                                                "height": "calc(100vh - 20rem)",
                                                "maxHeight": "calc(100vh - 20rem)",
                                                "overflow": "hidden",
                                                "width": "50rem",
                                                "position": "absolute",
                                                "top": "20%"
                                            }
                                        },
                                        "children": [
                                            {
                                                "name": "componentPreviewContentRenderer",
                                                "tag": "srs-contentrenderer",
                                                "props": {
                                                    "styles": {
                                                        "minHeight": "300px",
                                                        "overflow": "auto"
                                                    }
                                                },
                                                "overrides": {
                                                    "overrides": "[[api.helper.getComponentContents(api)]]",
                                                    "ts": "1683941616850"
                                                },
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }]
                }
            ]
        },
        {
            "name": "showEmbeddedCodeModal",
            "elementId": "showEmbeddedCodeModal",
            "tag": "mui-modal",
            "props": {
                "open": false
            },
            "overrides": {
                "open": "[[api.context.showEmbeddedCodeModal]]"
            },
            "children": [
                {
                    "name": "showEmbeddedCodeContents",
                    "elementId": "showEmbeddedCodeContents",
                    "tag": "mui-box",
                    "props": {
                        "sx": {
                            "position": "absolute",
                            "top": "3%",
                            "left": "2%",
                            "transform": "translate(0%, 0%)",
                            "width": "calc(100vw - 4%)",
                            "height": "calc(100vh - 6%)",
                            "bgcolor": "background.paper",
                            "border": "2px solid #000",
                            "boxShadow": 24,
                            "overflow": "auto",
                            "p": 4
                        }
                    },
                    "children": [{
                        "name": "showEmbeddedCodeTitleContainer",
                        "elementId": "showEmbeddedCodeTitleContainer",
                        "tag": "srs-container",
                        "props": {
                            "styles": {
                                "display": "flex",
                                "flexDirection": "row",
                                "alignItems": "stretch",
                                "flexDirection": "row",
                                "justifyContent": "space-between",
                                "position": "sticky"
                            }
                        },
                        "children": [{
                            "name": "showEmbeddedCodeTitle",
                            "elementId": "showEmbeddedCodeTitle",
                            "tag": "mui-typography",
                            "props": {
                                "text": "Embedded Code",
                                "color": "var(--cds-text-secondary)",
                                "variant": "h5"
                            }
                        }, {
                            "name": "showEmbeddedCodeModalCancelBtnContainer",
                            "elementId": "showEmbeddedCodeModalCancelBtnContainer",
                            "tag": "srs-relay",
                            "props": {
                                "relaylist": [{
                                    "source": "IconButton#clicked",
                                    "target": "MODAL_CLOSED"
                                }]
                            },
                            "children": [
                                {
                                    "name": "showEmbeddedCodeModalCancelBtn",
                                    "elementId": "showEmbeddedCodeModalCancelBtn",
                                    "tag": "mui-icon-button",
                                    "props": {
                                        "icon": "Clear"
                                    }
                                }
                            ]
                        }]
                    }, {
                        "name": "showEmbeddedCodeContentEditor",
                        "elementId": "showEmbeddedCodeContentEditor",
                        "tag": "srs-codeeditor",
                        "props": {
                            "language": "html",
                            "height": "calc(100vh - 20rem)",
                            "width": "90vw"
                        },
                        "overrides": {
                            "value": "[[api.context.embeddedCode]]"
                        },
                        "children": []
                    }]
                }
            ]
        }
    ];

    
    let pageContext = {
        selectedFunctionName: "",
        selectedFunctionCode: "",
        tempFunctionName: "",
        addFunctionOpenModal: false,
        removeFunctionOpenModal: false,
        editFunctionOpenModal: false,
        componentAddOpenModal: false,
        openedModals: [],
        previewPanelMode: 3,
        leftContainerColumns: 6,
        rightContainerColumns: 6,
        leftContainerWidth: "47vw",
        pageData: {
            functions: {
                "Item1": "(function() {})"
            },
            contents: "[]",
            context: "{}"
        }
    };
    let pageFunctions = {
        "getContents": function(api) {
            let result = api.context.previewData || {contents: [], context: {}, functions: {}, designtime: true};
            if(typeof result == "string") {
                result = JSON.parse(result);
            }
            return {...result, designtime: true};
        },
        "getComponentContents": function(api) {
            return {
                contents: [{
                    "name": "componentToPreview",
                    "tag": "mui-typography",
                    "props": {
                        "text": "hello world!",
                        "color": "var(--cds-text-secondary)"
                    }
                }],
                context: {},
                functions: {},
                designtime: false
            };
        },
        "getSelectedFunctionName": function(api) {
            return [api.context.selectedFunctionName || ""];
        },
        "getOptionsForPageFunctions": function(api) {
            let options = [];
            let pageFunctions = api.context?.pageData?.functions || {};
            let functionNames = Object.keys(pageFunctions);
            functionNames.map((functionName) => {
                options.push({label: functionName, value: functionName});
            });
            return options;
        }, 
        "getDeleteConfirmText": function(api) {
            return "Are you sure you want to delete the function " + (api.context?.selectedFunctionName || "");
        },
        "getPreviewContentStyles": function(api) {
            
            return `width: ${api.context.screenWidth}; height: ${api.context.screenHeight}; overflow: hidden;`;
        },
        "getPreviewContentContainerStyles": function(api) {
            
            let baseStyles = {
                "display": "flex",
                "flexDirection": "row",
                "justifyContent": "center",
                "boxShadow": "inset -2px -2px 9px grey",
                "position": "absolute",
                "left": "calc((100vw - " + api.context.screenWidth + ") / 2)"    
            };

            return {...baseStyles, width: api.context.screenWidth, height: api.context.screenHeight };
        },
        "getPreviewPanelSpreadStyle": function(api, inputPreviewPanelMode) {
            let previewPanelMode = api.context.previewPanelMode;
            
            return inputPreviewPanelMode == previewPanelMode? {
                "backgroundColor": "var(--cds-button-primary)"
            }: {};
        },
        "getScreenSelectionStyle": function(api, screenTypeCode) {
            let screenType = api.context.screenType;
            let currentScreenTypeCode = 3;
            if(screenType) {
                switch(screenType) {
                    case "largeScreen": 
                        currentScreenTypeCode = 1;
                        break;
                    case "desktop": 
                        currentScreenTypeCode = 2;
                        break;
                    case "laptop": 
                        currentScreenTypeCode = 3;
                        break;
                    case "tablet": 
                        currentScreenTypeCode = 4;
                        break;
                    case "mobile": 
                        currentScreenTypeCode = 5;
                        break;
                }
                return currentScreenTypeCode == screenTypeCode? {
                    "backgroundColor": "var(--cds-button-primary)"
                }: {};
            }
        },
        "getComponentPreviewData": function(api) {
            
            return {
                contents: [
                    {
                        "name": "component1",
                        "elementId": "component1",
                        "tag": "mui-typography",
                        "props": {
                            "text": "Test Contents",
                            "color": "var(--cds-text-secondary)"
                        }
                    }
                ], 
                context: {},
                functions: {}
            };
        }
    };
    return {pageContents, pageContext, pageFunctions};
}