import { getComponentSettingsData } from "./GetComponentSettings.js";

const componentSettingsWidgetData = getComponentSettingsData("edit");
const componentAddWidgetData = getComponentSettingsData("add");

export const getPageDetails = async () => {
    let onNewFnBtnClicked = `(async function() {
        let elementId = api.eventPayload?.payload?.id || "";
        if(elementId == "functionsNewBtn") { 
            api.context.addFunctionOpenModal = true;
            return {context: api.context};
        }else if(elementId == "modalApplyBtn") { 
            api.context.addFunctionOpenModal = false; 
            api.context.pageData = api.context.pageData || {}; 
            api.context.pageData.functions = api.context.pageData.functions || {}; 
            api.context.pageData.functions[api.context.tempFunctionName] = "(function() {})"; 
            api.context.selectedFunctionName = api.context.tempFunctionName; 
            api.context.selectedFunctionCode = "(function() {})";
            return {context: api.context}; 
        }
    })`;
    let codeEditorChanged = `(async function() {
        let ctx = api.context || {};    
        let elementId = api.eventPayload?.payload?.id;    
        let codeEditorValue = api.eventPayload?.payload?.value || {};
        let codeEditorPosition = api.eventPayload?.payload?.position || {line: 1, column: 0};
        if(elementId == "functionEditor") {
            ctx.pageData = ctx.pageData || {};        
            ctx.pageData.functions = ctx.pageData.functions || {};       
            if(ctx.selectedFunctionName) {
                ctx.pageData.functions[ctx.selectedFunctionName] = codeEditorValue;
                ctx.selectedFunctionCode = codeEditorValue;  
                ctx.selectedFunctionCodePosition = codeEditorPosition;      
            } 
            return {context: ctx};   
        }else if(elementId == "contextEditor") {        
            ctx.pageData = ctx.pageData || {};        
            ctx.pageData.context = codeEditorValue;
            return {context: ctx};    
        }else if(elementId == "contentEditor") {
            ctx.pageData = ctx.pageData || {};        
            ctx.pageData.contents = codeEditorValue || [];
            return {context: ctx};
        }else if(elementId == "editBlockEditor") {
            ctx.editBlockCode = codeEditorValue || {};
            return {context: ctx};
        }    
        
    })`;

    let buttonClicked = `(async function() {
        let elementId = api.eventPayload?.payload?.id;   
        let ctx = api.context || {}; 
        if(elementId == "UpdatePreview") {    
            let pageData = ctx.pageData || "{}";
            pageData = typeof ctx.pageData == "string"? JSON.parse(pageData): pageData;    
            let pageContents = pageData?.contents || [];
            pageContents = typeof pageContents == "string"? JSON.parse(pageContents): pageContents;    
            let pageContext = pageData?.context || {};    
            pageContext = typeof pageContext == "string"? JSON.parse(pageContext): pageContext;    
            let pageFunctions = pageData?.functions || {};    
            pageFunctions = typeof pageFunctions == "string"? JSON.parse(pageFunctions): pageFunctions;  
            ctx.previewData = JSON.stringify({contents: pageContents, context: pageContext, functions: pageFunctions});
            ctx.contentHistory = ctx.contentHistory || [];
            ctx.contentHistory.push(pageContents);
            ctx.contentHistoryIndex = ctx.contentHistoryIndex + 1;
            return {context: ctx};
        }else if(elementId == "OpenPreview") {    
            let pageData = ctx.pageData || "{}";
            pageData = typeof ctx.pageData == "string"? JSON.parse(pageData): pageData;    
            let pageContents = pageData?.contents || [];
            pageContents = typeof pageContents == "string"? JSON.parse(pageContents): pageContents;    
            let pageContext = pageData?.context || {};    
            pageContext = typeof pageContext == "string"? JSON.parse(pageContext): pageContext;    
            let pageFunctions = pageData?.functions || {};    
            pageFunctions = typeof pageFunctions == "string"? JSON.parse(pageFunctions): pageFunctions;  
            let previewData = JSON.stringify({contents: pageContents, context: pageContext, functions: pageFunctions});
            localStorage.setItem("srsPageData", api.helper.compress(previewData));
            window.open("/pagepreview", "Preview");
        }
        
    })`;

    const embeddedCodeTemplate = `
<script>
    var lzscript = document.createElement('script');
    // Create the script element to download lzString
    lzscript.src = 'https://know.srste.in/assets/cdn/lzstring.js';
    lzscript.defer = true;

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
        document.body.appendChild(lzscript);
        document.body.appendChild(script);
        document.head.appendChild(link);
        document.body.appendChild(div);
    });

    window.__SRS__ = window.__SRS__ || {};
    window.__SRS__.mode = \"sandbox\";
    var contents = $$contents$$;
    if(contents.startsWith("##CMP##")) {
        lzscript.addEventListener('load', function() {
            contents = contents.split("##CMP##")[1];
            const bytes = Array.from(contents, char => char.charCodeAt(0));
            const decoder = new TextDecoder();
            contents = decoder.decode(new Uint8Array(bytes));           
            contents = LZString.decompressFromBase64(contents);
            window.__SRS__.contents = JSON.parse(contents);
            window.__SRS__.context = $$context$$;
            window.__SRS__.functions = $$functions$$;
        }); 
    }else {
        window.__SRS__.contents = contents;
        window.__SRS__.context = $$context$$;
        window.__SRS__.functions = $$functions$$;
    }
</script>`;

    let getEmbeddedCodeExpression = `data.template.replaceAll('$$contents$$', JSON.stringify(data.contents)).replaceAll('$$context$$', JSON.stringify(data.context, null, 4)).replaceAll('$$functions$$', JSON.stringify(data.functions, null, 4))`;

    let showEmbedCodeClicked = `(async function() {
       
        let elementId = api.eventPayload?.payload?.id;   
        let ctx = api.context || {}; 
        if(elementId == "ShowEmbedCode") {    
            let pageData = ctx.pageData || "{}";
            pageData = typeof pageData == "string"? JSON.parse(pageData): pageData;    
            let pageContents = pageData?.contents || [];
            pageContents = typeof pageContents == "string"? JSON.parse(pageContents): pageContents;  
            
            let compressedPageContents = api.helper.compress(JSON.stringify(pageContents));
            debugger;
            const encoder = new TextEncoder();
            compressedPageContents = "##CMP##" + encoder.encode(compressedPageContents).reduce((str, byte) => str + String.fromCharCode(byte),""); 

            let pageContext = pageData?.context || {};    
            pageContext = typeof pageContext == "string"? JSON.parse(pageContext): pageContext;    
            let pageFunctions = pageData?.functions || {};    
            pageFunctions = typeof pageFunctions == "string"? JSON.parse(pageFunctions): pageFunctions;  
            let getEmbeddedCode = new Function("data", "with(data) { return ${getEmbeddedCodeExpression}; }");
            ctx.embeddedCode = getEmbeddedCode({template: \`${embeddedCodeTemplate}\`, contents: compressedPageContents, context: pageContext, functions: pageFunctions});
            ctx.showEmbeddedCodeModal = true;
            ctx.openedModals = ctx.openedModals || [];
            let currentModal = ctx.openedModals.pop();
            if(currentModal) {
                ctx[currentModal] = false;
                ctx.openedModals.push(currentModal);
            }
            ctx.openedModals.push("showEmbeddedCodeModal");
            return {context: ctx};
        }
        
    })`;

    let undoClicked = `(async function() {
        
        let elementId = api.eventPayload?.payload?.id;   
        let ctx = api.context || {}; 
        if(elementId == "Undo") {   
             
            let pageData = ctx.pageData || "{}";
            pageData = typeof ctx.pageData == "string"? JSON.parse(pageData): pageData;  
            if (ctx.contentHistoryIndex > 0) {  
                ctx.contentHistoryIndex = ctx.contentHistoryIndex - 1;
                let updatedContentItems = ctx.contentHistory[ctx.contentHistoryIndex];
                ctx.pageData.contents = updatedContentItems;
                let previewData = ctx.previewData || {};
                if(typeof previewData == "string") {
                    previewData = JSON.parse(previewData);
                    previewData.contents = updatedContentItems;
                }else {
                    previewData.contents = updatedContentItems;
                }
                ctx.previewData = previewData;
            }
            return {context: ctx};
        }
    })`;

    let redoClicked = `(async function() {
        
        let elementId = api.eventPayload?.payload?.id;   
        let ctx = api.context || {}; 
        if(elementId == "Redo") {  
              
            let pageData = ctx.pageData || "{}";
            pageData = typeof ctx.pageData == "string"? JSON.parse(pageData): pageData;  
            if (ctx.contentHistoryIndex < ctx.contentHistory.length - 1) {  
                ctx.contentHistoryIndex = ctx.contentHistoryIndex + 1;
                let updatedContentItems = ctx.contentHistory[ctx.contentHistoryIndex];
                ctx.pageData.contents = updatedContentItems;
                let previewData = ctx.previewData || {};
                if(typeof previewData == "string") {
                    previewData = JSON.parse(previewData);
                    previewData.contents = updatedContentItems;
                }else {
                    previewData.contents = updatedContentItems;
                }
                ctx.previewData = previewData;
                return {context: ctx};
            }
        }
    })`;
    
    let selectChanged = `(async function() {    
            
        console.log(api.eventPayload);    
        let elementId = api.eventPayload?.payload?.id || "";
        let ctx = api.context || {};     
        let pageData = ctx.pageData || "{}";    
        pageData = typeof ctx.pageData == "string"? JSON.parse(pageData): pageData;   
        let pageFunctions = pageData?.functions || {};   
        pageFunctions = typeof pageFunctions == "string"? JSON.parse(pageFunctions): pageFunctions;        
        if(elementId == "functionsList") {        
            let selectedFunction = api.eventPayload?.payload?.value || "";
            ctx.selectedFunctionName = selectedFunction || "";        
            ctx.selectedFunctionCode = pageFunctions[selectedFunction] || "";    
            return {context: ctx};
        }    
    })`;
    let onRemoveFunctionBtnClicked = `(async function() {    
        let elementId = api.eventPayload?.payload?.id || "";    
        let ctx = api.context || {};    
        if(elementId == "functionsRemoveBtn") { 
            ctx.removeFunctionOpenModal = true;
            ctx.openedModals = ctx.openedModals || [];
            let currentModal = ctx.openedModals.pop();
            if(currentModal) {
                ctx[currentModal] = false;
                ctx.openedModals.push(currentModal);
            }
            ctx.openedModals.push("removeFunctionOpenModal");
            return {context} 
        }else if(elementId == "removeFnModalApplyBtn") { 
            ctx.pageData = ctx.pageData || {}; 
            ctx.pageData.functions = ctx.pageData.functions || {}; 
            delete ctx.pageData.functions[ctx.tempFunctionName]; 
            let functionNames = Object.keys(ctx.pageData.functions || {}); 
            ctx.selectedFunctionName = functionNames && functionNames.length > 0? functionNames[0]: ""; 
            ctx.selectedFunctionCode = functionNames && functionNames.length > 0? ctx.pageData.functions[functionNames[0]]: ""; 
            ctx.removeFunctionOpenModal = false;
            return {context: ctx} 
        } 
        
    })`;
    let onEditFunctionBtnClicked = `(async function() {    
        let elementId = api.eventPayload?.payload?.id || "";    
        let ctx = api.context || {};  
        if(elementId == "functionsEditBtn") { 
            ctx.editFunctionOpenModal = true;
            ctx.openedModals = ctx.openedModals || [];
            let currentModal = ctx.openedModals.pop();
            if(currentModal) {
                ctx[currentModal] = false;
                ctx.openedModals.push(currentModal);
            }
            ctx.openedModals.push("editFunctionOpenModal");
            return {context: ctx}
        }else if(elementId == "editFnModalApplyBtn") { 
            ctx.pageData = ctx.pageData || {}; 
            ctx.pageData.functions = ctx.pageData.functions || {}; 
            let selectedFunctionCode = ctx.pageData.functions[ctx.selectedFunctionName] + "";
            delete ctx.pageData.functions[ctx.selectedFunctionName];
            ctx.pageData.functions[ctx.tempFunctionName] = selectedFunctionCode;
            ctx.selectedFunctionName = ctx.tempFunctionName;
            ctx.editFunctionOpenModal = false;
            return {context: ctx}
        } 
    })`;

    let onAddFunctionModalClosed = `(async function() {    
        let ctx = api.context || {}; 
        if(api.eventPayload?.payload?.id == "modalCancelBtn") { 
            ctx.addFunctionOpenModal = false; 
            let currentModal = ctx.openedModals.pop();
            if(currentModal) {
                ctx[currentModal] = false;
            }
            let previousModal = ctx.openedModals.pop();
            if(previousModal) {
                ctx[previousModal] = true;
                ctx.openedModals.push(previousModal);
            }
            return {context: ctx}
        } 
        
    })`;
    
    let onRemoveFunctionModalClosed = `(async function() {    
        let ctx = api.context || {}; 
        if(api.eventPayload?.payload?.id == "removeFnModalCancelBtn") { 
            ctx.removeFunctionOpenModal = false; 
            let currentModal = ctx.openedModals.pop();
            if(currentModal) {
                ctx[currentModal] = false;
            }
            let previousModal = ctx.openedModals.pop();
            if(previousModal) {
                ctx[previousModal] = true;
                ctx.openedModals.push(previousModal);
            }
            return {context: ctx}
        } 
        
    })`;
    let onEditFunctionModalClosed = `(async function() {    
        let ctx = api.context || {};
        if(api.eventPayload?.payload?.id == "editFnModalCancelBtn") { 
            ctx.editFunctionOpenModal = false; 
            let currentModal = ctx.openedModals.pop();
            if(currentModal) {
                ctx[currentModal] = false;
            }
            let previousModal = ctx.openedModals.pop();
            if(previousModal) {
                ctx[previousModal] = true;
                ctx.openedModals.push(previousModal);
            }
            return {context: ctx}
        } 
        
    })`;
    let onPreviewModalClosed = `(async function() {    
        let ctx = api.context || {};
        if(api.eventPayload?.payload?.id == "previewModalCancelBtn") { 
            ctx.previewOpenModal = false;
            let currentModal = ctx.openedModals.pop();
            if(currentModal) {
                ctx[currentModal] = false;
            }
            let previousModal = ctx.openedModals.pop();
            if(previousModal) {
                ctx[previousModal] = true;
                ctx.openedModals.push(previousModal);
            } 
            return {context: ctx}
        } 
        
    })`;
    let onShowEmbeddedCodeModalClosed = `(async function() { 
        let ctx = api.context || {};
        if(api.eventPayload?.payload?.id == "showEmbeddedCodeModalCancelBtn") { 
            ctx.showEmbeddedCodeModal = false;
            let currentModal = ctx.openedModals.pop();
            if(currentModal) {
                ctx[currentModal] = false;
            }
            let previousModal = ctx.openedModals.pop();
            if(previousModal) {
                ctx[previousModal] = true;
                ctx.openedModals.push(previousModal);
            } 
            return {context: ctx}
        } 
        
    })`;
    
    let onComponentAddModalClosed = `(async function() {  
        let ctx = api.context || {};
        if(api.eventPayload?.payload?.id == "componentAddModalCancelBtn") { 
            ctx.componentAddOpenModal = false;
            let currentModal = ctx.openedModals.pop();
            if(currentModal) {
                ctx[currentModal] = false;
            }
            let previousModal = ctx.openedModals.pop();
            if(previousModal) {
                ctx[previousModal] = true;
                ctx.openedModals.push(previousModal);
            }
            ctx.selectedComponentForAdd = "";
            return {context: ctx}
        } 
        
    })`;
    let onComponentRemoveModalClosed = `(async function() {  
        let ctx = api.context || {};
        if(api.eventPayload?.payload?.id == "componentRemoveModalCancelBtn") { 
            ctx.componentRemoveOpenModal = false;
            let currentModal = ctx.openedModals.pop();
            if(currentModal) {
                ctx[currentModal] = false;
            }
            let previousModal = ctx.openedModals.pop();
            if(previousModal) {
                ctx[previousModal] = true;
                ctx.openedModals.push(previousModal);
            }
            ctx.selectedComponentToRemove = "";
            return {context: ctx}
        } 
        
    })`;
    let onComponentSettingsModalClosed = `(async function() {  
        let ctx = api.context || {};
        if(api.eventPayload?.payload?.id == "componentSettingsModalCancelBtn") { 
            ctx.componentSettingsOpenModal = false;
            let currentModal = ctx.openedModals.pop();
            if(currentModal) {
                ctx[currentModal] = false;
            }
            let previousModal = ctx.openedModals.pop();
            if(previousModal) {
                ctx[previousModal] = true;
                ctx.openedModals.push(previousModal);
            }
            ctx.selectedComponentForSettings = "";
            return {context: ctx}
        } 
        
    })`;
    let onComponentEditBlockModalClosed = `(async function() {  
        let ctx = api.context || {};
        if(api.eventPayload?.payload?.id == "componentEditBlockModalCancelBtn") { 
            ctx.componentEditBlockOpenModal = false;
            let currentModal = ctx.openedModals.pop();
            if(currentModal) {
                ctx[currentModal] = false;
            }
            let previousModal = ctx.openedModals.pop();
            if(previousModal) {
                ctx[previousModal] = true;
                ctx.openedModals.push(previousModal);
            }
            ctx.selectedComponentForEditBlock = "";
            return {context: ctx}
        } 
        
    })`;

    let onEditBlockApplyBtnClicked = `(async function() {  
        let ctx = api.context || {};
        if(api.eventPayload?.payload?.id == "EditBlockApply") { 
            let contentItems = ctx.pageData.contents;
            contentItems = typeof contentItems == "string"? JSON.parse(contentItems): contentItems;
            let elementToUpdate = api.helper.findElement(ctx.selectedComponentForEditBlock, contentItems);
            
            function findAndReplace(tree, targetName, replacement) {
                return tree.map(node => {
                  if (node.elementId === targetName) {
                    return replacement; // Replace the target node with the replacement subtree
                  } else if (node.children && node.children.length > 0) {
                    // Recursively search for the target node in the children
                    const newChildren = findAndReplace(node.children, targetName, replacement);
                    return { ...node, children: newChildren };
                  }
                  return node; // No replacement needed for this node
                });
            }

            let editBlockCode = ctx.editBlockCode;
            if(typeof editBlockCode == "string") {
                editBlockCode = JSON.parse(editBlockCode);
            }
            const updatedContentItems = findAndReplace(contentItems, ctx.selectedComponentForEditBlock, editBlockCode);

            ctx.pageData.contents = updatedContentItems;
            let previewData = ctx.previewData || {};
            if(typeof previewData == "string") {
                previewData = JSON.parse(previewData);
                previewData.contents = updatedContentItems;
            }else {
                previewData.contents = updatedContentItems;
            }
            ctx.previewData = previewData;

            ctx.contentHistory.push(JSON.parse(JSON.stringify(updatedContentItems)));
            ctx.contentHistoryIndex = ctx.contentHistoryIndex + 1;
            
            ctx.componentEditBlockOpenModal = false;
            let currentModal = ctx.openedModals.pop();
            if(currentModal) {
                ctx[currentModal] = false;
            }
            let previousModal = ctx.openedModals.pop();
            if(previousModal) {
                ctx[previousModal] = true;
                ctx.openedModals.push(previousModal);
            }
            ctx.selectedComponentForEditBlock = "";
            return {context: ctx}
        } 
        
    })`;

    let onFunctionNameChanged = `(async function() {    
        let elementId = api.eventPayload?.payload?.id || "";    
        if(elementId == "functionNameField" || elementId == "editFunctionNameField") { 
            api.context.tempFunctionName = api.eventPayload?.payload?.value;
            return {context: api.context} 
        } 
    })`;

    let showPreviewScreen = `(async function() {
        let ctx = api.context || {};
        let elementId = api.eventPayload?.payload?.id || "";
        if(elementId == "previewScreen") {
            ctx.previewOpenModal = true;
            ctx.openedModals = ctx.openedModals || [];
            let currentModal = ctx.openedModals.pop();
            if(currentModal) {
                ctx[currentModal] = false;
                ctx.openedModals.push(currentModal);
            }
            ctx.openedModals.push("previewOpenModal");
            ctx.screenType = "desktop";
            ctx.screenOrientation = 1;
            return {context: ctx};
        }
        
    })`;

    let onComponentAddClicked = `(async function() {    
        let ctx = api.context || {};
        let elementId = api.eventPayload?.payload?.id || "";    
        console.log("in onComponentAddClicked", elementId);
        ctx.selectedComponentForAdd = elementId;
        let contentItems = ctx.pageData.contents;
        contentItems = typeof contentItems == "string"? JSON.parse(contentItems): contentItems;
        let matchedElement = api.helper.findElement(elementId, contentItems);
        ctx.selectedComponentTypeForAdd  = matchedElement?.tag || "";
        ctx.componentAddOpenModal = true;
        ctx.openedModals = ctx.openedModals || [];
        let currentModal = ctx.openedModals.pop();
        if(currentModal) {
            ctx[currentModal] = false;
            ctx.openedModals.push(currentModal);
        }
        ctx.openedModals.push("componentAddOpenModal");
        return {context: ctx}
    })`;

    let onComponentRemoveClicked = `(async function() {    
        let ctx = api.context || {};
        let elementId = api.eventPayload?.payload?.id || "";    
        console.log("in onComponentRemoveClicked", elementId);
        ctx.selectedComponentToRemove = elementId;
        ctx.componentRemoveOpenModal = true;
        ctx.openedModals = ctx.openedModals || [];
        let currentModal = ctx.openedModals.pop();
        if(currentModal) {
            ctx[currentModal] = false;
            ctx.openedModals.push(currentModal);
        }
        ctx.openedModals.push("componentRemoveOpenModal");
        return {context: ctx}
    })`;

    let onComponentRemoveApplyClicked = `(async function() {    
        let ctx = api.context || {};
        let elementId = api.eventPayload?.payload?.id || "";    
        if(elementId == "componentRemoveModalApplyBtn") {
            console.log("Removing " + ctx.selectedComponentToRemove);
            let contentItems = ctx.pageData.contents;
            contentItems = typeof contentItems == "string"? JSON.parse(contentItems): contentItems;
            let updatedContentItems = api.removeElement(ctx.selectedComponentToRemove, contentItems);
            ctx.pageData.contents = updatedContentItems;
            let previewData = ctx.previewData || {};
            if(typeof previewData == "string") {
                previewData = JSON.parse(previewData);
                previewData.contents = updatedContentItems;
            }else {
                previewData.contents = updatedContentItems;
            }
            ctx.previewData = previewData;

            ctx.contentHistory.push(JSON.parse(JSON.stringify(updatedContentItems)));
            ctx.contentHistoryIndex = ctx.contentHistoryIndex + 1;

            ctx.componentRemoveOpenModal = false;
            let currentModal = ctx.openedModals.pop();
            if(currentModal) {
                ctx[currentModal] = false;
            }
            let previousModal = ctx.openedModals.pop();
            if(previousModal) {
                ctx[previousModal] = true;
                ctx.openedModals.push(previousModal);
            }
            ctx.selectedComponentToRemove = "";
            return {context: ctx};
        }
    })`;

    let onComponentSettingsClicked = `(async function() {    
        debugger;
        let ctx = api.context || {};
        let elementId = api.eventPayload?.payload?.id || "";    
        console.log("in onComponentSettingsClicked", elementId);
        ctx.selectedComponentForSettings = elementId;
        let contentItems = ctx.pageData.contents;
        contentItems = typeof contentItems == "string"? JSON.parse(contentItems): contentItems;
        let matchedElement = api.helper.findElement(elementId, contentItems);
        ctx.selectedComponentTypeForSettings  = matchedElement?.tag || "";
        let selectedComponentPropData = {};
        
        if(matchedElement?.props && Object.keys(matchedElement.props).length > 0) {
            Object.keys(matchedElement.props).map((propName) => {
                selectedComponentPropData[propName] = {
                    defaultValue: matchedElement.props[propName],
                    overrideValue: matchedElement.overrides?.[propName] || ""
                }
            })
        }
        ctx.selectedComponentPropData = selectedComponentPropData;
        let selectedComponentActionHandlerData = [];
        
        if(matchedElement?.actionhandlers && matchedElement.actionhandlers.length > 0) {
            matchedElement.actionhandlers.map((actionHandlerItem) => {
                let transformedActionHandler = {
                    actionHandlerName: actionHandlerItem.name,
                    actionHandlerEventName: actionHandlerItem.eventName,
                    actionHandlerType: actionHandlerItem.type
                };

                switch(actionHandlerItem.type) {
                    case "script": 
                        transformedActionHandler.actionHandlerScript = actionHandlerItem.script;
                        break;
                    case "UPDATE_CONTEXT": 
                        transformedActionHandler.actionHandlerContextValueKey = actionHandlerItem.contextValueKey;
                        transformedActionHandler.actionHandlerContextPath = actionHandlerItem.contextPath;
                        transformedActionHandler.actionHandlerSourceElement = actionHandlerItem.source_elementid;
                        break;
                    case "relay":
                        transformedActionHandler.actionHandlerSourceElement = actionHandlerItem.source_elementid;
                        transformedActionHandler.actionHandlerTargetEventName = actionHandlerItem.target_eventname;
                        transformedActionHandler.add_to_payload = actionHandlerItem.add_to_payload;
                        break;
                }

                selectedComponentActionHandlerData.push(transformedActionHandler);
            });
        }

        ctx.selectedComponentActionHandlerData = selectedComponentActionHandlerData;

        ctx.componentSettingsOpenModal = true;
        ctx.openedModals = ctx.openedModals || [];
        let currentModal = ctx.openedModals.pop();
        if(currentModal) {
            ctx[currentModal] = false;
            ctx.openedModals.push(currentModal);
        }
        ctx.openedModals.push("componentSettingsOpenModal");
        return {context: ctx}
    })`;

    let onComponentEditBlockClicked = `(async function() {    
        let ctx = api.context || {};
        let elementId = api.eventPayload?.payload?.id || "";    
        console.log("in onComponentEditBlockClicked", elementId);
        ctx.selectedComponentForEditBlock = elementId;

        let pageDataContents = ctx.pageData.contents || [];
        if(typeof pageDataContents == "string") {
            pageDataContents = JSON.parse(pageDataContents);
        }
        let matchingElement = api.helper.findElement(ctx.selectedComponentForEditBlock, pageDataContents);
        ctx.editBlockCode = matchingElement || {};

        ctx.componentEditBlockOpenModal = true;
        ctx.openedModals = ctx.openedModals || [];
        let currentModal = ctx.openedModals.pop();
        if(currentModal) {
            ctx[currentModal] = false;
            ctx.openedModals.push(currentModal);
        }
        ctx.openedModals.push("componentEditBlockOpenModal");
        return {context: ctx}
    })`;

    let setPreviewPanelMode = `(async function() {
        let ctx = api.context || {};
        let elementId = api.eventPayload?.payload?.id || "";
        let elementMatched = false;
        if(elementId) {
            switch(elementId) {
                case "FullPreviewScreen": 
                    ctx.previewPanelMode = 1;
                    ctx.leftContainerColumns = 1;
                    ctx.rightContainerColumns = 11;
                    ctx.leftContainerWidth = "5vw";
                    elementMatched = true;
                    break;
                case "MorePreviewScreen": 
                    ctx.previewPanelMode = 2;
                    ctx.leftContainerColumns = 3;
                    ctx.rightContainerColumns = 9;
                    ctx.leftContainerWidth = "23vw";
                    elementMatched = true;
                    break;
                case "MidPreviewScreen": 
                    ctx.previewPanelMode = 3;
                    ctx.leftContainerColumns = 6;
                    ctx.rightContainerColumns = 6;
                    ctx.leftContainerWidth = "47vw";
                    elementMatched = true;
                    break;
                case "LessPreviewScreen":
                    ctx.previewPanelMode = 4;
                    ctx.leftContainerColumns = 9;
                    ctx.rightContainerColumns = 3;
                    ctx.leftContainerWidth = "70vw";
                    elementMatched = true;
                    break;
            } 
        }
        if(elementMatched) {
            return {context: ctx};
        }
        
    })`;
    let setResponsiveness = `(async function() {
        let ctx = api.context || {};
        let elementId = api.eventPayload?.payload?.id || "";
        if(elementId && (elementId == "largeScreen" || elementId == "desktopScreen" || elementId == "laptopScreen" || elementId == "tabletScreen" || elementId == "mobileScreen" || elementId == "rotateScreen" )) {
            switch(elementId) {
                case "largeScreen": 
                    ctx.screenType = "largeScreen";
                    break;
                case "desktopScreen": 
                    ctx.screenType = "desktop";
                    break;
                case "laptopScreen": 
                    ctx.screenType = "laptop";
                    break;
                case "tabletScreen": 
                    ctx.screenType = "tablet";
                    break;
                case "mobileScreen": 
                    ctx.screenType = "mobile";
                    break;
                case "rotateScreen": 
                    ctx.screenOrientation = (ctx.screenOrientation  == 1)? 0: 1;
                    break;
            }   
            let screenOrientation = ctx.screenOrientation == 0? "portrait": "landscape"; //landscape = 1 and portrait = 0

            let screenHeight = "calc(100vh - 12rem)";
            let screenWidth = "calc(100vw - 10rem)";

            if(screenOrientation == "portrait") {
                screenHeight = "calc(100vw - 10rem)";
                screenWidth = "calc(100vh - 12rem)";
            }
            let screenType = ctx.screenType || "laptop";
            if(screenType) {
                switch(screenType) {
                    case "largeScreen": 
                        if(screenOrientation == "landscape") {
                            ctx.screenWidth = "3840px";
                            ctx.screenHeight = "2160px";
                        }else {
                            ctx.screenWidth = "2160px";
                            ctx.screenHeight = "3840px";
                        }
                        break;
                    case "desktop":
                        if(screenOrientation == "landscape") {
                            ctx.screenWidth = "1920px";
                            ctx.screenHeight = "1080px";
                        }else {
                            ctx.screenWidth = "1080px";
                            ctx.screenHeight = "1920px";
                        }
                        break;
                    case "laptop": 
                        if(screenOrientation == "landscape") {
                            ctx.screenWidth = "1366px";
                            ctx.screenHeight = "768px";
                        }else {
                            ctx.screenWidth = "768px";
                            ctx.screenHeight = "1366px";
                        }
                        break;
                    case "tablet": 
                        if(screenOrientation == "landscape") {
                            ctx.screenWidth = "820px";
                            ctx.screenHeight = "1180px";
                        }else {
                            ctx.screenWidth = "1180px";
                            ctx.screenHeight = "820px";
                        }
                        break;
                    case "mobile":
                        if(screenOrientation == "landscape") {
                            ctx.screenWidth = "390px";
                            ctx.screenHeight = "850px";
                        }else {
                            ctx.screenWidth = "850px";
                            ctx.screenHeight = "390px";
                        }
                        break;
                }
            }

            return {context: ctx};
        }
    })`;

    let componentDataUpdate = `(async function() {
        debugger;
        let ctx = api.context || {};
        let elementId = api.eventPayload?.elementId || "";

        function findAndReplace(tree, targetName, replacement) {
            return tree.map(node => {
              if (node.elementId === targetName) {
                return replacement; // Replace the target node with the replacement subtree
              } else if (node.children && node.children.length > 0) {
                // Recursively search for the target node in the children
                const newChildren = findAndReplace(node.children, targetName, replacement);
                return { ...node, children: newChildren };
              }
              return node; // No replacement needed for this node
            });
        }

        if(elementId) {
            let componentData = api.eventPayload?.payload || null;
            if(componentData) {
                let contentItems = ctx.pageData.contents;
                contentItems = typeof contentItems == "string"? JSON.parse(contentItems): contentItems;
                let element = api.helper.findElement(elementId, contentItems)
                if(element) {
                    element = {...element, ...componentData};
                    contentItems = findAndReplace(contentItems, elementId, element);
                    ctx.pageData.contents = contentItems;
                    let previewData = ctx.previewData || {};
                    if(typeof previewData == "string") {
                        previewData = JSON.parse(previewData);
                        previewData.contents = contentItems;
                    }else {
                        previewData.contents = contentItems;
                    }
                    ctx.previewData = previewData;

                    ctx.contentHistory.push(JSON.parse(JSON.stringify(contentItems)));
                    ctx.contentHistoryIndex = ctx.contentHistoryIndex + 1;
                    
                    ctx.componentSettingsOpenModal = false;
                    let currentModal = ctx.openedModals.pop();
                    if(currentModal) {
                        ctx[currentModal] = false;
                    }
                    let previousModal = ctx.openedModals.pop();
                    if(previousModal) {
                        ctx[previousModal] = true;
                        ctx.openedModals.push(previousModal);
                    }
                    ctx.selectedComponentForSettings = "";

                    return {context: ctx}
                }
            }
        }
    })`;

    let addComponentData = `(async function() {
        debugger;
        let ctx = api.context || {};
        let elementId = api.eventPayload?.elementId || "";

        function findAndReplace(tree, targetName, replacement) {
            return tree.map(node => {
              if (node.elementId === targetName) {
                return replacement; // Replace the target node with the replacement subtree
              } else if (node.children && node.children.length > 0) {
                // Recursively search for the target node in the children
                const newChildren = findAndReplace(node.children, targetName, replacement);
                return { ...node, children: newChildren };
              }
              return node; // No replacement needed for this node
            });
        }

        function addElementAdjacentTo(targetId, newElement, nestedArray, position) {
            // Recursive function to traverse the nested array
            function traverseArray(arr) {
              for (let i = 0; i < arr.length; i++) {
                if (arr[i].elementId === targetId) {
                  if(position == "after") {
                    // Add the new element after the target element
                    arr.splice(i + 1, 0, newElement);
                  }else if(position == "before") {
                    // Add the new element before the target element
                    arr.splice(i, 0, newElement);
                  }else if(position == "inside") {
                    // Add the new element at the end of the children array
                    arr[i].children = arr[i].children || [];
                    arr[i].children.push(newElement);
                  }
                  return;
                }
                if (arr[i].children && arr[i].children.length > 0) {
                  traverseArray(arr[i].children);
                }
              }
            }
          
            // Call the recursive function to find and add the element
            traverseArray(nestedArray);
        }

        if(elementId) {
            let componentPositionToAdd = api.eventPayload?.position || "after";
            let componentData = api.eventPayload?.payload || null;
            if(componentData) {
                let contentItems = ctx.pageData.contents;
                contentItems = typeof contentItems == "string"? JSON.parse(contentItems): contentItems;
                
                let element = api.helper.findElement(elementId, contentItems)
                if(element) {
                    if(componentPositionToAdd == "after") {
                        addElementAdjacentTo(elementId, componentData, contentItems, "after");
                    }else if(componentPositionToAdd == "before") {
                        addElementAdjacentTo(elementId, componentData, contentItems, "before");
                    }else if(componentPositionToAdd == "inside") {
                        addElementAdjacentTo(elementId, componentData, contentItems, "inside");
                    }

                    ctx.pageData.contents = contentItems;
                    let previewData = ctx.previewData || {};
                    if(typeof previewData == "string") {
                        previewData = JSON.parse(previewData);
                        previewData.contents = contentItems;
                    }else {
                        previewData.contents = contentItems;
                    }
                    ctx.previewData = previewData;

                    ctx.contentHistory.push(JSON.parse(JSON.stringify(contentItems)));
                    ctx.contentHistoryIndex = ctx.contentHistoryIndex + 1;
                    
                    ctx.componentSettingsOpenModal = false;
                    let currentModal = ctx.openedModals.pop();
                    if(currentModal) {
                        ctx[currentModal] = false;
                    }
                    let previousModal = ctx.openedModals.pop();
                    if(previousModal) {
                        ctx[previousModal] = true;
                        ctx.openedModals.push(previousModal);
                    }
                    ctx.selectedComponentForSettings = "";

                    return {context: ctx}
                }
            }
        }
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
                            "name": "OpenPreview",
                            "elementId": "OpenPreview",
                            "tag": "mui-icon-button",
                            "props": {
                                "icon": "Preview"
                            }
                        },
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
                        },
                        {
                            "name": "Undo",
                            "elementId": "Undo",
                            "tag": "mui-icon-button",
                            "props": {
                                "icon": "Undo"
                            },
                            "overrides": {
                                "disabled": "[[api.helper.undoDisabled(api)]]"
                            }
                        },
                        {
                            "name": "Redo",
                            "elementId": "Redo",
                            "tag": "mui-icon-button",
                            "props": {
                                "icon": "Redo"
                            },
                            "overrides": {
                                "disabled": "[[api.helper.redoDisabled(api)]]"
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
                                                    "value": "[[api.helper.getPageDataContents(api)]]",
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
                                            "tag": "srs-widget",
                                            "props": {
                                                "widgetcontents": [], 
                                                "widgetcontext": {},
                                                "widgetfunctions": {},
                                                "styles": {
                                                    "minHeight": "300px",
                                                    "height": "calc(100vh - 20rem)",
                                                    "maxHeight": "calc(100vh - 20rem)",
                                                    "overflow": "auto"
                                                },
                                                "designtime": "true"
                                            },
                                            "overrides": {
                                                "widgetcontents": "[[api.helper.getContents(api, true)?.contents || []]]",
                                                "widgetcontext": "[[api.helper.getContents(api, true)?.context || {}]]",
                                                "widgetfunctions": "[[api.helper.getContents(api, true)?.functions || {}]]"
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
            "elementId": "pageController1",
            "tag": "srs-controller",
            "props": {
                "handlers": [
                    {
                        "name": "codeEditorChanged",
                        "eventName": "SrsCodeEditor#changed",
                        "type": "script",
                        "script": codeEditorChanged,
                        "stopPropagation": true
                    },
                    {
                        "name": "selectChanged",
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
                        "name": "Undo",
                        "eventName": "IconButton#clicked",
                        "type": "script",
                        "script": undoClicked,
                        "stopPropagation": true
                    },
                    {
                        "name": "Redo",
                        "eventName": "IconButton#clicked",
                        "type": "script",
                        "script": redoClicked,
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
                        "name": "onComponentRemoveApplyClicked",
                        "eventName": "IconButton#clicked",
                        "type": "script",
                        "script": onComponentRemoveApplyClicked,
                        "stopPropagation": true
                    },
                    {
                        "name": "onEditBlockApplyBtnClicked",
                        "eventName": "IconButton#clicked",
                        "type": "script",
                        "script": onEditBlockApplyBtnClicked,
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
                        "name": "ComponentAddModalClosed",
                        "eventName": "MODAL_CLOSED",
                        "type": "script",
                        "script": onComponentAddModalClosed,
                        "stopPropagation": true
                    },
                    {
                        "name": "ComponentRemoveModalClosed",
                        "eventName": "MODAL_CLOSED",
                        "type": "script",
                        "script": onComponentRemoveModalClosed,
                        "stopPropagation": true
                    },
                    {
                        "name": "ComponentSettingsModalClosed",
                        "eventName": "MODAL_CLOSED",
                        "type": "script",
                        "script": onComponentSettingsModalClosed,
                        "stopPropagation": true
                    },
                    {
                        "name": "ComponentEditBlockModalClosed",
                        "eventName": "MODAL_CLOSED",
                        "type": "script",
                        "script": onComponentEditBlockModalClosed,
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
                        "name": "ComponentAddClicked",
                        "eventName": "DESIGNTIME_ADD_CLICKED",
                        "type": "script",
                        "script": onComponentAddClicked,
                        "stopPropagation": true
                    },
                    {
                        "name": "ComponentSettingsClicked",
                        "eventName": "DESIGNTIME_SETTINGS_CLICKED",
                        "type": "script",
                        "script": onComponentSettingsClicked,
                        "stopPropagation": true
                    },
                    {
                        "name": "ComponentRemoveClicked",
                        "eventName": "DESIGNTIME_REMOVE_CLICKED",
                        "type": "script",
                        "script": onComponentRemoveClicked,
                        "stopPropagation": true
                    },
                    {
                        "name": "ComponentEditBlockClicked",
                        "eventName": "DESIGNTIME_ADDBLOCK_CLICKED",
                        "type": "script",
                        "script": onComponentEditBlockClicked,
                        "stopPropagation": true
                    },
                    {
                        "name": "UpdateComponentData",
                        "eventName": "UPDATE_COMPONENT_DATA",
                        "type": "script",
                        "script": componentDataUpdate,
                        "stopPropagation": true
                    },
                    {
                        "name": "AddComponentData",
                        "eventName": "ADD_COMPONENT_DATA",
                        "type": "script",
                        "script": addComponentData,
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
                "open": false
            },
            "overrides": {
                "open": "[[api.context.addFunctionOpenModal]]",
                "visible": "[[api.context.addFunctionOpenModal]]"
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
                                        "source_event": "IconButton#clicked",
                                        "source_element": "modalCancelBtn",
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
                "open": "[[api.context.removeFunctionOpenModal]]",
                "visible": "[[api.context.removeFunctionOpenModal]]"
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
                                        "source_event": "IconButton#clicked",
                                        "source_element": "removeFnModalCancelBtn",
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
                "open": "[[api.context.editFunctionOpenModal]]",
                "visible": "[[api.context.editFunctionOpenModal]]"
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
                                        "source_event": "IconButton#clicked",
                                        "source_element": "editFnModalCancelBtn",
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
                "open": "[[api.context.previewOpenModal]]",
                "visible": "[[api.context.previewOpenModal]]"
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
                                    "source_event": "IconButton#clicked",
                                    "source_element": "previewModalCancelBtn",
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
                        "children": [
                            {
                                "name": "PreviewContentRenderer",
                                "elementId": "PreviewContentRenderer",
                                "tag": "srs-widget",
                                "props": {
                                    "widgetcontents": [], 
                                    "widgetcontext": {},
                                    "widgetfunctions": {},
                                    "styles": {
                                        "minHeight": "300px",
                                        "height": "calc(100vh - 20rem)",
                                        "maxHeight": "calc(100vh - 20rem)",
                                        "overflow": "auto"
                                    },
                                    "designtime": "false"
                                },
                                "overrides": {
                                    "widgetcontents": "[[api.helper.getContents(api, false)?.contents || []]]",
                                    "widgetcontext": "[[api.helper.getContents(api, false)?.context || {}]]",
                                    "widgetfunctions": "[[api.helper.getContents(api, false)?.functions || {}]]"
                                },
                                "children": []
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
                "open": "[[api.context.showEmbeddedCodeModal]]",
                "visible": "[[api.context.showEmbeddedCodeModal]]"
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
                                    "source_event": "IconButton#clicked",
                                    "source_element": "showEmbeddedCodeModalCancelBtn",
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
                            "height": "calc(100vh - 20rem)",
                            "width": "90vw"
                        },
                        "overrides": {
                            "value": "[[api.helper.getEmbeddedCode(api)]]"
                        },
                        "children": []
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
                "open": "[[api.context.componentSettingsOpenModal]]",
                "visible": "[[api.context.componentSettingsOpenModal]]"
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
                                "text": "Component Settings",
                                "color": "var(--cds-text-secondary)",
                                "variant": "h5"
                            }
                        }, {
                            "name": "componentSettingsModalCancelBtnContainer",
                            "elementId": "componentSettingsModalCancelBtnContainer",
                            "tag": "srs-relay",
                            "props": {
                                "relaylist": [{
                                    "source_event": "IconButton#clicked",
                                    "source_element": "componentSettingsModalCancelBtn",
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
                        "tag": "mui-box",
                        "props": {
                            
                        },
                        "children": [
                           {
                                "name": "componentSettingsContentsWidget",
                                "elementId": "componentSettingsContentsWidget",
                                "tag": "srs-widget",
                                "props": {
                                    "widgetcontents": componentSettingsWidgetData.contents,
                                    "widgetcontext": {},
                                    "widgetfunctions": componentSettingsWidgetData.functions,
                                    "styles": {
                                        "minHeight": "300px",
                                        "height": "calc(100vh - 20rem)",
                                        "maxHeight": "calc(100vh - 20rem)",
                                        "overflow": "auto"
                                    },
                                    "designtime": "false"
                                },
                                "overrides": {
                                    "widgetcontext": "[[api.helper.getComponentSettingsWidgetContext(api) || {}]]"
                                },
                                "children": []
                           }
                        ]
                    }]
                }
            ]
        },
        {
            "name": "componentRemoveModalContainer",
            "elementId": "componentRemoveModalContainer",
            "tag": "mui-modal",
            "props": {
                "open": false
            },
            "overrides": {
                "open": "[[api.context.componentRemoveOpenModal]]"
            },
            "children": [
                {
                    "name": "removeComponentModalContents",
                    "elementId": "removeComponentModalContents",
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
                        "name": "removeComponentModalTitle",
                        "elementId": "removeComponentModalTitle",
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
                            "name": "removeComponentNameField",
                            "elementId": "removeComponentNameField",
                            "tag": "mui-typography",
                            "props": {
                                "text": "Are you sure you want to delete the component",
                                "color": "var(--cds-text-secondary)"
                            },
                            "overrides": {
                                "text": "[[api.helper.getDeleteElementConfirmText(api)]]"
                            }
                        },
                        {
                            "name": "removeComponentModalActions",
                            "elementId": "removeComponentModalActions",
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
                                "name": "removeComponentModalCancelBtnContainer",
                                "elementId": "removeComponentModalCancelBtnContainer",
                                "tag": "srs-relay",
                                "props": {
                                    "relaylist": [{
                                        "source_event": "IconButton#clicked",
                                        "source_element": "componentRemoveModalCancelBtn",
                                        "target": "MODAL_CLOSED"
                                    }]
                                },
                                "children": [
                                    {
                                        "name": "componentRemoveModalCancelBtn",
                                        "elementId": "componentRemoveModalCancelBtn",
                                        "tag": "mui-icon-button",
                                        "props": {
                                            "icon": "Clear"
                                        }
                                    }
                                ]
                            }, {
                                "name": "componentRemoveModalApplyBtn",
                                "elementId": "componentRemoveModalApplyBtn",
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
            "name": "componentAddModalContainer",
            "elementId": "componentAddModalContainer",
            "tag": "mui-modal",
            "props": {
                "open": false
            },
            "overrides": {
                "open": "[[api.context.componentAddOpenModal]]",
                "visible": "[[api.context.componentAddOpenModal]]"
            },
            "children": [
                {
                    "name": "componentAddModalContents",
                    "elementId": "componentAddModalContents",
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
                        "name": "componentAddTitleContainer",
                        "elementId": "componentAddTitleContainer",
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
                            "name": "componentAddTitle",
                            "elementId": "componentAddTitle",
                            "tag": "mui-typography",
                            "props": {
                                "text": "Component Properties",
                                "color": "var(--cds-text-secondary)",
                                "variant": "h5"
                            }
                        }, {
                            "name": "componentAddModalCancelBtnContainer",
                            "elementId": "componentAddModalCancelBtnContainer",
                            "tag": "srs-relay",
                            "props": {
                                "relaylist": [{
                                    "source_event": "IconButton#clicked",
                                    "source_element": "componentAddModalCancelBtn",
                                    "target": "MODAL_CLOSED"
                                }]
                            },
                            "children": [
                                {
                                    "name": "componentAddModalCancelBtn",
                                    "elementId": "componentAddModalCancelBtn",
                                    "tag": "mui-icon-button",
                                    "props": {
                                        "icon": "Clear"
                                    }
                                }
                            ]
                        }]
                    }, 
                    {
                        "name": "componentAddContentContainer",
                        "elementId": "componentAddContentContainer",
                        "tag": "mui-box",
                        "props": {
                            
                        },
                        "children": [
                            {
                                "name": "componentAddContentsWidget",
                                "elementId": "componentAddContentsWidget",
                                "tag": "srs-widget",
                                "props": {
                                    "widgetcontents": componentAddWidgetData.contents, 
                                    "widgetcontext": {},
                                    "widgetfunctions": componentAddWidgetData.functions
                                },
                                "overrides": {
                                    "widgetcontext": "[[api.helper.getComponentAddWidgetContext(api)]]"
                                }
                            }
                        ]
                    }]
                }
            ]
        },
        {
            "name": "componentEditBlockModalContainer",
            "elementId": "componentEditBlockModalContainer",
            "tag": "mui-modal",
            "props": {
                "open": false
            },
            "overrides": {
                "open": "[[api.context.componentEditBlockOpenModal]]",
                "visible": "[[api.context.componentEditBlockOpenModal]]"
            },
            "children": [
                {
                    "name": "componentEditBlockModalContents",
                    "elementId": "componentEditBlockModalContents",
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
                        "name": "componentEditBlockTitleContainer",
                        "elementId": "componentEditBlockTitleContainer",
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
                            "name": "componentEditBlockTitle",
                            "elementId": "componentEditBlockTitle",
                            "tag": "mui-typography",
                            "props": {
                                "text": "Add Template",
                                "color": "var(--cds-text-secondary)",
                                "variant": "h5"
                            }
                        }, {
                            "name": "componentEditBlockModalCancelBtnContainer",
                            "elementId": "componentEditBlockModalCancelBtnContainer",
                            "tag": "srs-relay",
                            "props": {
                                "relaylist": [{
                                    "source_event": "IconButton#clicked",
                                    "source_element": "componentEditBlockModalCancelBtn",
                                    "target": "MODAL_CLOSED"
                                }]
                            },
                            "children": [
                                {
                                    "name": "componentEditBlockModalCancelBtn",
                                    "elementId": "componentEditBlockModalCancelBtn",
                                    "tag": "mui-icon-button",
                                    "props": {
                                        "icon": "Clear"
                                    }
                                }
                            ]
                        }]
                    }, 
                    {
                        "name": "componentEditBlockContentContainer",
                        "elementId": "componentEditBlockContentContainer",
                        "tag": "mui-grid",
                        "props": {
                            "container": true
                        },
                        "children": [
                            {
                                "name": "EditBlockActionContainer1",
                                "elementId": "EditBlockActionContainer1",
                                "tag": "mui-grid",
                                "props": {
                                    "item": true,
                                    "md": 12
                                },
                                "children": [
                                    {
                                        "name": "EditBlockActionContainer2",
                                        "elementId": "EditBlockActionContainer2",
                                        "tag": "mui-box",
                                        "props": {
                                            "sx": {
                                                "display": "flex",
                                                "flexDirection": "row",
                                                "marginLeft": "95%"
                                            }
                                        },
                                        "children": [
                                            {
                                                "name": "EditBlockUpdatePreview",
                                                "elementId": "EditBlockUpdatePreview",
                                                "tag": "mui-icon-button",
                                                "props": {
                                                    "icon": "PlayArrow"
                                                }
                                            },
                                            {
                                                "name": "EditBlockApply",
                                                "elementId": "EditBlockApply",
                                                "tag": "mui-icon-button",
                                                "props": {
                                                    "icon": "DoneAll"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "componentEditBlockContents",
                                "elementId": "componentEditBlockContents",
                                "tag": "mui-grid",
                                "props": {
                                    "item": true, 
                                    "md": 6
                                },
                                "children": [
                                    {
                                        "name": "componentEditBlockContainer2",
                                        "elementId": "componentEditBlockContainer2",
                                        "tag": "mui-box",
                                        "props": {
                                            "sx": {
                                                "minHeight": "300px",
                                                "height": "calc(100vh - 20rem)",
                                                "maxHeight": "calc(100vh - 20rem)",
                                                "overflow": "hidden",
                                                "marginLeft": "10px",
                                                "width": "calc(100% - 10px)"
                                            }
                                        },
                                        "children": [
                                            {
                                                "name": "editBlockEditor",
                                                "elementId": "editBlockEditor",
                                                "tag": "srs-codeeditor",
                                                "props": {
                                                    "language": "html",
                                                    "height": "calc(100vh - 20rem)",
                                                    "width": "47vw"
                                                },
                                                "overrides": {
                                                    "value": "[[api.helper.getBlockTemplateCode(api)]]"
                                                },
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "componentEditBlockContainer",
                                "elementId": "componentEditBlockContainer",
                                "tag": "mui-grid",
                                "props": {
                                    "item": true, 
                                    "md": 6
                                },
                                "children": [
                                    {
                                        "name": "componentEditBlockContainer2",
                                        "elementId": "componentEditBlockContainer2",
                                        "tag": "mui-box",
                                        "props": {
                                            "sx": {
                                                "minHeight": "300px",
                                                "height": "calc(100vh - 20rem)",
                                                "maxHeight": "calc(100vh - 20rem)",
                                                "overflow": "hidden",
                                                "marginLeft": "10px",
                                                "marginRight": "10px",
                                                "width": "calc(100% - 20px)",
                                                "top": "20%"
                                            }
                                        },
                                        "children": [
                                            {
                                                "name": "componentEditBlockContentRenderer",
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
                                                    "overrides": "[[api.helper.getComponentEditBlockContents(api)]]",
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
        }
    ];

    
    let pageContext = {
        selectedFunctionName: "",
        selectedFunctionCode: "",
        selectedComponentToRemove: "",
        selectedComponentForAdd: "",
        selectedComponentForEditBlock: "",
        selectedComponentForSettings: "",
        selectedComponentTypeForSettings: "",
        selectedComponentPropData: {},
        selectedComponentActionHandlerData: [],
        editBlockCode: {},
        tempFunctionName: "",
        addFunctionOpenModal: false,
        removeFunctionOpenModal: false,
        editFunctionOpenModal: false,
        previewOpenModal: false,
        showEmbeddedCodeModal: false,
        componentSettingsOpenModal: false,
        componentAddOpenModal: false,
        componentRemoveOpenModal: false,
        componentEditBlockOpenModal: false,
        openedModals: [],
        contentHistory: [],
        contentHistoryIndex: -1,
        previewPanelMode: 3,
        leftContainerColumns: 6,
        rightContainerColumns: 6,
        leftContainerWidth: "47vw",
        screenType: "laptop",
        screenWidth: "1366px",
        screenHeight: "768px",
        componentAddWidgetContext: componentAddWidgetData.context,
        componentSettingsWidgetContext: componentSettingsWidgetData.context,
        pageData: {
            functions: {
                "Item1": "(function() {})"
            },
            contents: "[]",
            context: "{}"
        }
    };
    let pageFunctions = {
        "getContents": function(api, designtime) {
            let result = api.context.previewData || {contents: [], context: {}, functions: {}, designtime};
            if(typeof result == "string") {
                result = JSON.parse(result);
            }
            return {...result, designtime};
        },
        "getPageDataContents": function(api) {
            let pageDataContents = api.context.pageData.contents || [];
            if(typeof pageDataContents == "string") {
                pageDataContents = JSON.parse(pageDataContents);
            }
            return JSON.stringify(pageDataContents, null, 4);
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
        "getDeleteElementConfirmText": function(api) {
            return "Are you sure you want to delete element " + (api.context?.selectedComponentToRemove || "");
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
        },
        "getEmbeddedCode": function(api) {
            return api.context.embeddedCode;
        },
        "undoDisabled": function(api) {
            return api.context.contentHistoryIndex < 0 || api.context.contentHistory.length <= 1;
        },
        "redoDisabled": function(api) {
            return !(api.context.contentHistoryIndex < api.context.contentHistory.length - 1);
        },
        "getBlockTemplateCode": function(api) {
            let editBlockCode = api.context.editBlockCode || {};
            if(typeof editBlockCode == "string") {
                editBlockCode = JSON.parse(editBlockCode);
            }
            return JSON.stringify(editBlockCode|| {}, null, 4);
        },
        "getComponentEditBlockContents": function(api) {
            let editBlockCode = api.context.editBlockCode || {};
            if(typeof editBlockCode == "string") {
                editBlockCode = JSON.parse(editBlockCode);
            }

            let contents = [];
            if(editBlockCode && Object.keys(editBlockCode).length > 0) {
                contents = [editBlockCode];
            }
            return {
                contents,
                context: {},
                functions: {},
                designtime: false
            };
        },
        "getComponentSettingsWidgetContext": function(api) {
            debugger;
            let componentProps = {};
            let componentDataToPreview = [];
            let componentPropData = api.context.selectedComponentPropData || {};
            if(componentPropData && Object.keys(componentPropData).length > 0) {
                Object.keys(componentPropData).map((propName) => {
                    componentProps[propName] = componentPropData[propName]?.defaultValue;
                })
            }
            if(api.context.selectedComponentForSettings && api.context.selectedComponentTypeForSettings) {
                let uniqueId = api.context.selectedComponentForSettings + "_" + Date.now();
                componentDataToPreview = [{
                    "name": uniqueId,
                    "elementId": uniqueId,
                    "tag": api.context.selectedComponentTypeForSettings,
                    "props": componentProps
                }];
            }

            let ctx = {...api.context.componentSettingsWidgetContext, selectedComponentName: api.context.selectedComponentForSettings, 
                selectedComponentType: api.context.selectedComponentTypeForSettings, componentPropData: api.context.selectedComponentPropData, 
                actionHandlers: api.context.selectedComponentActionHandlerData, componentOperation: "edit", componentDataToPreview
            };
            return ctx;
        },
        "getComponentAddWidgetContext": function(api) {
            let ctx = {...api.context.componentAddWidgetContext, selectedComponentName: api.context.selectedComponentForAdd, 
                selectedComponentType: api.context.selectedComponentTypeForAdd, componentNameToAdd: "", componentOperation: "add"};
            return ctx
        }
    };
    return {pageContents, pageContext, pageFunctions};
}