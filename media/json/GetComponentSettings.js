// export const getComponentSettingsData = function (operation) {
module.exports = function(operation) {
    const {getComponentMetadata} = import("./BuilderUtils.js");
    let componentMetaData = getComponentMetadata();
    let linkTypeChanged = `(async function() {
        
        let elementId = api.eventPayload?.payload?.id;   
        let ctx = api.context || {}; 
        if(elementId == "SelectedPropertyDynamicExpressionMode") {    
            ctx.selectedLinkType = api.eventPayload?.payload?.value || "Client Store";
            return {context: ctx};
        }
    })`;

    let componentPositionToAddChanged = `(async function() {
        
        let elementId = api.eventPayload?.payload?.id;   
        let ctx = api.context || {}; 
        if(elementId == "ComponentAddComponentPosition") {    
            ctx.selectedComponentPosition = api.eventPayload?.payload?.value || "after";
            return {context: ctx};
        }
    })`;

    let componentTypeChanged = `(async function() {
        
        let elementId = api.eventPayload?.payload?.id;   
        let ctx = api.context || {}; 
        if(elementId == "ComponentSettingsGridContainerItem1Content1") {    
            ctx.selectedComponentType =  api.eventPayload?.payload?.value;
            ctx.componentPropData = {};
            return {context: ctx};
        }
    })`;

    let propDynamicLinkingFunctionChanged = `(async function() {
        
        let elementId = api.eventPayload?.payload?.id;   
        let ctx = api.context || {}; 
        if(elementId == "ComponentSettingsPropLinkingFunctionList") {    
            ctx.selectedDynamicPropValue =  api.eventPayload?.payload?.value;
            return {context: ctx};
        }
    })`;

    let applyClicked = `(async function() {
        
        let ctx = api.context || {};
        let elementId = api.eventPayload?.payload?.id;   
        if(elementId == "ComponentSettingsPropLinkingClientStoreAction") {
            ctx.selectedMode = "component_props";
            let componentPropData = ctx.componentPropData || {};
            componentPropData[ctx.selectedPropertyToEdit] = componentPropData[ctx.selectedPropertyToEdit] || {};
            componentPropData[ctx.selectedPropertyToEdit]["overrideValue"] = ctx.selectedDynamicPropValue || "";
            ctx.componentPropData = componentPropData;
            return {context: ctx};
        }else if(elementId == "ComponentSettingsPropLinkingFunctionAction") {
            ctx.selectedMode = "component_props";
            let componentPropData = ctx.componentPropData || {};
            componentPropData[ctx.selectedPropertyToEdit] = componentPropData[ctx.selectedPropertyToEdit] || {};
            componentPropData[ctx.selectedPropertyToEdit]["overrideValue"] = ctx.selectedDynamicPropValue || "";
            ctx.componentPropData = componentPropData;
            return {context: ctx};
        }

        // if(elementId == "SelectedPropertyDynamicExpressionMode") {    
        //     ctx.selectedLinkType =  api.eventPayload?.payload?.value || "Client Store";
        //     return {context: ctx};
        // }
    })`;

    let handlePropertyLinkUnLink = `(async function() {
        
        let ctx = api.context || {};
        let elementId = api.eventPayload?.payload?.id;   
        if(elementId == "addLinkBtn") {
            let misc = api.eventPayload?.misc || {};
            let selectedPropName = misc.propName;
            ctx.selectedPropertyToEdit = selectedPropName;
            ctx.selectedMode = "property_linking";
            return {context: ctx};
        }else if(elementId == "removeLinkBtn") {
            let misc = api.eventPayload?.payload?.misc || {};
            let selectedPropName = misc.propName;
            return {context: ctx};
        }
    })`;

    let handlePropertyDefaultValueChanged = `(async function() {
        debugger;
        let ctx = api.context || {};
        let elementId = api.eventPayload?.payload?.id;   
        if(elementId == "propertyDefaultValue") {
            let misc = api.eventPayload?.misc || {};
            let selectedPropName = misc.propName;
            let selectedPropType = misc.propType;

            let componentPropData = ctx.componentPropData || {};
            componentPropData[selectedPropName] = componentPropData[selectedPropName] || {};
            if(selectedPropType == "string") {
                componentPropData[selectedPropName]["defaultValue"] = api.eventPayload?.payload?.value || "";
            }else if(selectedPropType == "object") {
                componentPropData[selectedPropName]["defaultValue"] = api.eventPayload?.payload?.value || {};
            }else if(selectedPropType == "boolean") {
                componentPropData[selectedPropName]["defaultValue"] = api.eventPayload?.payload?.value || false;
            }else if(selectedPropType == "styles") {
                componentPropData[selectedPropName]["defaultValue"] = api.eventPayload?.payload?.styles || {};
            }

            ctx.componentPropData = componentPropData;
            
            let componentProps = {};
            if(ctx.componentPropData && Object.keys(ctx.componentPropData).length > 0) {
                Object.keys(ctx.componentPropData).map((propName) => {
                    componentProps[propName] = ctx.componentPropData[propName]?.defaultValue;
                })
            }
            if(ctx.selectedComponentName && ctx.selectedComponentType) {
                let uniqueId = ctx.selectedComponentName + "_1";
                ctx.componentDataToPreview = [{
                    "name": uniqueId,
                    "elementId": uniqueId,
                    "tag": ctx.selectedComponentType,
                    "props": componentProps
                }];
            }

            return {context: ctx};
        }
    })`;

    let handleComponentNameToAddChanged = `(async function() {
        let ctx = api.context || {};
        let elementId = api.eventPayload?.payload?.id;   
        if(elementId == "ComponentAddComponentName") {
            ctx.componentNameToAdd = api.eventPayload?.payload?.value || "";
            return {context: ctx};
        }
    })`;

    let handlePropertyOverrideValueChanged = `(async function() {
        
        let ctx = api.context || {};
        let elementId = api.eventPayload?.payload?.id;   
        if(elementId == "propertyOverridetValue") {
            let misc = api.eventPayload?.misc || {};
            let selectedPropName = misc.propName;
            let componentPropData = ctx.componentPropData || {};
            componentPropData[selectedPropName] = componentPropData[selectedPropName] || {};
            componentPropData[selectedPropName]["overrideValue"] = api.eventPayload?.payload?.value || "";
            ctx.componentPropData = componentPropData;

            return {context: ctx};
        }
    })`;

    let setPropertyDynamicValue = `(async function() {
        
        let ctx = api.context || {};
        let elementId = api.eventPayload?.payload?.id;   
        if(elementId == "contextTree") {
            let nodeId = api.eventPayload?.payload?.nodeid;
            let nodePath = api.eventPayload?.payload?.nodepath;
            ctx.selectedDynamicPropValue = nodePath? "api.context." + nodePath + "." + nodeId: "api.context." + nodeId;
            return {context: ctx};
        }
    })`;

    let refreshComponentDataForPreview = `(async function() {
        debugger;
        let ctx = api.context || {};
        let componentProps = {};
        if(ctx.componentPropData && Object.keys(ctx.componentPropData).length > 0) {
            Object.keys(ctx.componentPropData).map((propName) => {
                componentProps[propName] = ctx.componentPropData[propName]?.defaultValue;
            })
        }
        if(ctx.selectedComponentName && ctx.selectedComponentType) {
            let uniqueId = ctx.selectedComponentName + "_1";
            ctx.componentDataToPreview = [{
                "name": uniqueId,
                "elementId": uniqueId,
                "tag": ctx.selectedComponentType,
                "props": componentProps
            }];
            ctx.componentDataToPreviewTs = uniqueId;
        }
        return {context: ctx};
    })`;

    let applyComponentData = `(async function() {
        let ctx = api.context || {};
        let widgetId = api.eventPayload?.payload?.widgetId; 
        let componentProps = {};
        let componentOverrideProps = {};
        if(ctx.componentPropData && Object.keys(ctx.componentPropData).length > 0) {
            Object.keys(ctx.componentPropData).map(function(propName) {
                componentProps[propName] = ctx.componentPropData[propName]?.defaultValue;
            });
        }
        if(ctx.componentPropData && Object.keys(ctx.componentPropData).length > 0) {
            Object.keys(ctx.componentPropData).map(function(propName) {
                if(ctx.componentPropData[propName]?.overrideValue) {
                    componentOverrideProps[propName] = ctx.componentPropData[propName]?.overrideValue;
                }
            });
        }
        if(ctx.selectedComponentName && ctx.selectedComponentType) {
            let actionHandlers = ctx.actionHandlers || [];
            let transformedActionHandlers = [];
    
            actionHandlers.map(function(actionHandler) {
                let transformedActionHandler = {
                    name: actionHandler.actionHandlerName, 
                    eventName: actionHandler.actionHandlerEventName,
                    type: actionHandler.actionHandlerType
                };
                switch(actionHandler.actionHandlerType) {
                    case "script": 
                        transformedActionHandler.script = actionHandler.actionHandlerScript;
                        break;
                    case "UPDATE_CONTEXT": 
                        transformedActionHandler.contextValueKey = actionHandler.actionHandlerContextValueKey;
                        transformedActionHandler.contextPath = actionHandler.actionHandlerContextPath;
                        transformedActionHandler.source_elementid = actionHandler.actionHandlerSourceElement;
                        break;
                    case "relay":
                        transformedActionHandler.source_elementid = actionHandler.actionHandlerSourceElement;
                        transformedActionHandler.target_eventname = actionHandler.actionHandlerTargetEventName;
                        transformedActionHandler.add_to_payload = actionHandler.add_to_payload;
                        break;
                }
                transformedActionHandlers.push(transformedActionHandler);
            });
            componentProps = {...componentProps, "actionhandlers": transformedActionHandlers};
            let componentDataToUpdate = {
                "name": ctx.componentOperation == "edit"? ctx.selectedComponentName: ctx.componentNameToAdd,
                "elementId": ctx.componentOperation == "edit"? ctx.selectedComponentName: ctx.componentNameToAdd,
                "tag": ctx.selectedComponentType,
                "props": componentProps,
                "overrides": componentOverrideProps 
            };
            if(ctx.componentOperation == "edit" && "componentSettingsContentsWidget" == widgetId) {
                api.dispatchEvent("UPDATE_COMPONENT_DATA", {elementId: ctx.selectedComponentName, payload: componentDataToUpdate});
            }else if(ctx.componentOperation == "add" && "componentAddContentsWidget" == widgetId) {
                debugger;
                api.dispatchEvent("ADD_COMPONENT_DATA", {elementId: ctx.selectedComponentName, position: ctx.selectedComponentPosition, payload: componentDataToUpdate})
            }
        }
    })`;    


    let addNewActionHandler = `(async function() {
        debugger;
        let ctx = api.context || {};
        let elementId = api.eventPayload?.payload?.id;
        ctx.actionHandlers = ctx.actionHandlers || [];
        let duplicateActionHandler = false;
        ctx.actionHandlers.map(function(actionHandler) {
            if(actionHandler.actionHandlerName == ctx.newActionHandlerName) {
                duplicateActionHandler = true;
            }
            actionHandler.actionHandlerOpened = false
        });
        if(!duplicateActionHandler){
            ctx.actionHandlers = [{
                "actionHandlerOpened": true,
                "actionHandlerName": ctx.newActionHandlerName,
                "actionHandlerEventName": ctx.newActionHandlerEventName,
                "actionHandlerType": "script",
                "actionHandlerScript": "(async function() {  })",
                "actionHandlerSourceElementId": ctx.selectedComponentName,
                "actionHandlerTargetEventName": "",
                "actionHandlerContextPath": "",
                "actionHandlerContextValueKey": ""
            }].concat(ctx.actionHandlers);
            return {context: ctx};
        }
    })`;

    let actionHandlerDataChanged = `(async function() {
        let ctx = api.context || {};
        let elementId = api.eventPayload?.payload?.id;  
        let misc = api.eventPayload?.misc || {}; 
        let selectedHandlerName = misc.handlerName;
        let selectedActionHandler = ctx.actionHandlers.filter((item) => item.actionHandlerName == selectedHandlerName);
            
        if(elementId == "actionHandlerType") {
            if(selectedActionHandler && selectedActionHandler.length > 0) {
                selectedActionHandler[0]["actionHandlerType"] = api.eventPayload?.payload?.value;
            }
            return {context: ctx};
        }else if(elementId == "actionHandlerScript") {
            if(selectedActionHandler && selectedActionHandler.length > 0) {
                selectedActionHandler[0]["actionHandlerScript"] = api.eventPayload?.payload?.value;
            }
            return {context: ctx};
        }else if(elementId == "actionHandlerName") {
            if(selectedActionHandler && selectedActionHandler.length > 0) {
                selectedActionHandler[0]["actionHandlerName"] = api.eventPayload?.payload?.value;
            }
            return {context: ctx};
        }else if(elementId == "actionHandlerEventName") {
            if(selectedActionHandler && selectedActionHandler.length > 0) {
                selectedActionHandler[0]["actionHandlerEventName"] = api.eventPayload?.payload?.value;
            }
            return {context: ctx};
        }else if(elementId == "actionHandlerEventNameFromSource") {
            if(selectedActionHandler && selectedActionHandler.length > 0) {
                selectedActionHandler[0]["actionHandlerEventNameFromSource"] = api.eventPayload?.payload?.value || "";
            }
            return {context: ctx};
        }else if(elementId == "actionHandlerSourceElement") {
            if(selectedActionHandler && selectedActionHandler.length > 0) {
                selectedActionHandler[0]["actionHandlerSourceElementId"] = api.eventPayload?.payload?.value;
            }
            return {context: ctx};
        }else if(elementId == "actionHandlerContextPath") {
            if(selectedActionHandler && selectedActionHandler.length > 0) {
                selectedActionHandler[0]["actionHandlerContextPath"] = api.eventPayload?.payload?.value;
            }
            return {context: ctx};
        }else if(elementId == "actionHandlerContextValueKey") {
            if(selectedActionHandler && selectedActionHandler.length > 0) {
                selectedActionHandler[0]["actionHandlerContextValueKey"] = api.eventPayload?.payload?.value;
            }
            return {context: ctx};
        }else if(elementId == "actionHandlerTargetEventName") {
            if(selectedActionHandler && selectedActionHandler.length > 0) {
                selectedActionHandler[0]["actionHandlerTargetEventName"] = api.eventPayload?.payload?.value;
            }
            return {context: ctx};
        }
    })`;

    let widgetContext = {
        "selectedLinkType": "Client Store",
        "selectedMode": "component_props", //"property_linking", "component_props"
        "selectedComponentType": "mui-button",
        "selectedComponentName": "",
        "selectedPropertyToEdit": "",
        "componentMetaData": componentMetaData || {},
        "componentPropData": {},
        "componentOperation": operation || "edit",
        "selectedComponentPosition": "after",
        "componentNameToAdd": "",
        "selectedDynamicPropValue": "",
        "componentDataToPreview": [],
        "componentDataToPreviewTs": Date.now() + "",
        "actionHandlers": [],
        "newActionHandlerName": "",
        "newActionHandlerEventName": "",
        "componentCtx": {}
    };
    let widgetFunctions = {
        isPropertyLinkingMode: (api) => {
            return api.context.selectedMode == "property_linking";
        },
        getContextTree: (api) => {
            function convertObjectToRepresentation(obj) {
                const result = [];
            
                for (const name in obj) {
                    if (obj.hasOwnProperty(name)) {
                        const children = obj[name];
                        const label = `${name}`;
                        
                        const childArray = typeof children == "object"? convertObjectToRepresentation(children): [];
            
                        result.push({
                            name,
                            label,
                            children: childArray
                        });
                    }
                }
            
                return result;
            }
            
            return convertObjectToRepresentation(api.context?.componentCtx || {});
        },
        getSelectedPath: (api) => {
            
            let selectedDynamicPropValue = api.context?.selectedDynamicPropValue || "";
            let result = "";
            if(selectedDynamicPropValue && selectedDynamicPropValue.indexOf("api.context.") > -1) {
                result = selectedDynamicPropValue.split("api.context.")[1]
            }
            return result;
        },
        getComponentTypes: (api) => {
            let componentMetaData = api.context.componentMetaData || {};
            let componentTypes = [];
            if(componentMetaData && Object.keys(componentMetaData).length > 0) {
                Object.keys(componentMetaData).map((componentName) => {
                    componentTypes.push({"label": componentName, "value": componentName});
                });
            }
            return componentTypes;
        },
        getComponentProperties: (api) => {
            debugger;
            let componentMetaData = api.context.componentMetaData || {};
            let selectedComponentType = api.context.selectedComponentType || Object.keys(componentMetaData)[0];
            let selectedComponentProps = componentMetaData[selectedComponentType]?.props || [];
            let componentProperties = [];
            if(selectedComponentProps && selectedComponentProps.length > 0) {
                selectedComponentProps.map((componentProp) => {
                    componentProperties.push({
                        "propName": componentProp.name, 
                        "propType": componentProp.type,
                        "propDefaultValue": api.context.componentPropData?.[componentProp.name]?.["defaultValue"] || "",
                        "propDynamicValue": api.context.componentPropData?.[componentProp.name]?.["overrideValue"] || "",
                        "opened": api.context.selectedPropertyToEdit == componentProp.name
                    });
                });
            }
            return componentProperties;
        },
        getComponentContents: function(api) {
            return {
                contents: api.context.componentDataToPreview,
                context: {},
                functions: {},
                designtime: false
            };
        },
        getActionHandlers: function(api) {
            return api.context.actionHandlers || [];
        },
        getComponentNames: function(api) {
            let options = [ { label: "Custom", value: "" } ];
            if(componentMetaData) {
                Object.keys(componentMetaData).map((componentName) => {
                    options.push({label: componentName, value: componentName})
                })
            }
            return options;
        },
        getEventNamesForComponent: function(api, componentName) {
            let options = [];
            if(componentMetaData[componentName] && componentMetaData[componentName].events) {
                componentMetaData[componentName].events.map((eventItem) => {
                    options.push({label: eventItem.name, value: eventItem.name, payload: eventItem.payload})
                })
            }
            return options;
        }
    };
    let widgetContents = [
        {
            "name": "ComponentSettingsTopContainer",
            "elementId": "ComponentSettingsTopContainer",
            "tag": "mui-box",
            "props": {
                "sx": {
                    "height": "100vh",
                    "width": "calc(100% - 50px)",
                    "padding": "20px"
                }
            },
            "children": [
                {
                    "name": "ComponentSettingsGridContainer",
                    "elementId": "ComponentSettingsGridContainer",
                    "tag": "mui-grid",
                    "props": {
                        "container": true
                    },
                    "children": [
                        {
                            "name": "ComponentSettingsGridContainerItem1",
                            "elementId": "ComponentSettingsGridContainerItem1",
                            "tag": "mui-grid",
                            "props": {
                                "item": true,
                                "md": 6,
                                "sx": {
                                    "backgroundColor": "var(--cds-background-hover)",
                                    "minHeight": "300px",
                                    "height": "calc(100vh - 10rem)",
                                    "maxHeight": "calc(100vh - 10rem)",
                                    "overflow": "hidden",
                                    "width": "50rem",
                                    "padding": "20px",
                                    "top": "20%"
                                }
                            },
                            "children": [
                                {
                                    "name": "ComponentAddComponentName",
                                    "elementId": "ComponentAddComponentName",
                                    "tag": "mui-text-field",
                                    "props": {
                                        "label": "Name",
                                        "variant": "outlined",
                                        "sx": {
                                            "color": "var(--cds-text-secondary)",
                                            "width": "100%",
                                            "padding": "5px"
                                        }
                                    },
                                    "overrides": {
                                        "visible": "[[api.context.componentOperation == \"add\"]]"
                                    }
                                },
                                {
                                    "name": "ComponentSettingsGridContainerItem1Content1",
                                    "elementId": "ComponentSettingsGridContainerItem1Content1",
                                    "tag": "mui-auto-complete",
                                    "props": {
                                        "label": "Component Type",
                                        "displayEmpty": true,
                                        "options": [],
                                        "sx": {
                                            "backgroundColor": "var(--cds-background-hover)",
                                            "color": "var(--cds-text-secondary)",
                                            "width": "100%", 
                                            "padding": "5px"
                                        }
                                    },
                                    "overrides": {
                                        "options": "[[api.helper?.getComponentTypes(api) || []]]",
                                        "selected": "[[api.context.selectedComponentType]]"
                                    },
                                    "children": []
                                },
                                {
                                    "name": "ComponentAddFocussedComponentName",
                                    "elementId": "ComponentAddFocussedComponentName",
                                    "tag": "mui-text-field",
                                    "props": {
                                        "label": "Focused Element Name",
                                        "variant": "outlined",
                                        "disabled": true,
                                        "sx": {
                                            "color": "var(--cds-text-secondary)",
                                            "width": "100%",
                                            "padding": "5px"
                                        }
                                    },
                                    "overrides": {
                                        "visible": "[[api.context.componentOperation == \"add\"]]",
                                        "value": "[[api.context.selectedComponentName]]"
                                    }
                                },
                                {
                                    "name": "ComponentSettingsComponentName",
                                    "elementId": "ComponentSettingsComponentName",
                                    "tag": "mui-text-field",
                                    "props": {
                                        "label": "Name",
                                        "variant": "outlined",
                                        "sx": {
                                            "color": "var(--cds-text-secondary)",
                                            "width": "100%",
                                            "padding": "5px"
                                        }
                                    },
                                    "overrides": {
                                        "value": "[[api.context.selectedComponentName]]",
                                        "visible": "[[api.context.componentOperation == \"edit\"]]"
                                    }
                                },
                                {
                                    "name": "ComponentAddComponentPosition",
                                    "elementId": "ComponentAddComponentPosition",
                                    "tag": "mui-auto-complete",
                                    "props": {
                                        "label": "Position",
                                        "displayEmpty": true,
                                        "options": [{
                                            "label": "Before Element",
                                            "value": "before"
                                        }, {
                                            "label": "After Element",
                                            "value": "after"
                                        }, {
                                            "label": "Inside Element",
                                            "value": "inside"
                                        }],
                                        "selected": "after",
                                        "sx": {
                                            "color": "var(--cds-text-secondary)",
                                            "width": "100%",
                                            "padding": "5px"
                                        }
                                    },
                                    "overrides": {
                                        "visible": "[[api.context.componentOperation == \"add\"]]"
                                    }
                                },
                                {
                                    "name": "ComponentSettingsConfigurationTabs",
                                    "elementId": "ComponentSettingsConfigurationTabs",
                                    "tag": "mui-tabs",
                                    "props": {
                                        "sx": {
                                            "color": "var(--cds-background-inverse)"
                                        }
                                    },
                                    "children": [
                                        {
                                            "name": "ComponentSettingsPropertiesTab",
                                            "elmentId": "ComponentSettingsPropertiesTab",
                                            "tag": "mui-tab",
                                            "props": {
                                                "label": "Properties",
                                                "value": "properties"
                                            },
                                            "children": [
                                                {
                                                    "name": "ComponentSettingsGridContainerItem1PropsBox",
                                                    "elementId": "ComponentSettingsGridContainerItem1PropsBox",
                                                    "tag": "mui-box",
                                                    "props": {
                                                        "sx": {
                                                            "width": "100%"
                                                        }
                                                    },
                                                    "overrides": {
                                                        "visible": "[[!api.helper.isPropertyLinkingMode(api)]]"
                                                    },
                                                    "children": [
                                                        {
                                                            "name": "ComponentSettingsGridContainerItem1Content2",
                                                            "elementId": "ComponentSettingsGridContainerItem1Content2",
                                                            "tag": "mui-typography",
                                                            "props": {
                                                                "text": "Properties",
                                                                "sx": {
                                                                    "backgroundColor": "var(--cds-background-hover)",
                                                                    "color": "var(--cds-text-secondary)",
                                                                    "width": "100%",
                                                                    "paddingTop": "10px",
                                                                    "paddingLeft": "5px"
                                                                }
                                                            }
                                                        },
                                                        {
                                                            "name": "ComponentSettingsGridContainerItem1Content3",
                                                            "elementId": "ComponentSettingsGridContainerItem1Content3",
                                                            "tag": "mui-box",
                                                            "props": {
                                                                "sx": {
                                                                    "width": "100%",
                                                                    "padding": "0px 10px"
                                                                }
                                                            },
                                                            "children": [
                                                                {
                                                                    "name": "propertyRepeater",
                                                                    "elementId": "propertyRepeater",
                                                                    "tag": "srs-repeater",
                                                                    "props": {
                                                                        "items": [],
                                                                        "sx": {
                                                                            "overflow": "auto",
                                                                            "display": "flex",
                                                                            "height": "calc(100vh - 25rem)",
                                                                            "flexDirection": "column"
                                                                        }
                                                                    },
                                                                    "overrides": {
                                                                        "items": "[[api.helper.getComponentProperties(api)]]"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "name": "item2",
                                                                            "tag": "mui-accordion",
                                                                            "props": {
                                                                                "expanded": false,
                                                                                "sx": {
                                                                                    "width": "100%"
                                                                                }
                                                                            },
                                                                            "overrides": {
                                                                                "expanded": "[[api.context.opened]]"
                                                                            },
                                                                            "children": [
                                                                                {
                                                                                    "name": "summary2",
                                                                                    "tag": "mui-box",
                                                                                    "props": {
                                                                                        "slotname": "accordion_summary"
                                                                                    },
                                                                                    "children": [
                                                                                        {
                                                                                            "name": "summaryText2",
                                                                                            "tag": "mui-typography",
                                                                                            "props": {
                                                                                                "text": "Property 2",
                                                                                                "sx": {
                                                                                                    "color": "var(--cds-text-secondary)"
                                                                                                }
                                                                                            },
                                                                                            "overrides": {
                                                                                                "text": "[[api.context.propName]]"
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "name": "details2",
                                                                                    "tag": "mui-box",
                                                                                    "props": {
                                                                                        "slotname": "accordion_details",
                                                                                        "sx": {
                                                                                            "width": "100%"
                                                                                        }
                                                                                    },
                                                                                    "children": [
                                                                                        {
                                                                                            "name": "details21",
                                                                                            "tag": "mui-grid",
                                                                                            "props": {
                                                                                                "container": true,
                                                                                                "sx": {
                                                                                                    "width": "100%"
                                                                                                }
                                                                                            },
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "details211",
                                                                                                    "tag": "mui-grid",
                                                                                                    "props": {
                                                                                                        "item": true,
                                                                                                        "md": 12
                                                                                                    },
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "name": "propertyDefaultValue",
                                                                                                            "tag": "mui-text-field",
                                                                                                            "props": {
                                                                                                                "label": "Default Value",
                                                                                                                "variant": "outlined",
                                                                                                                "sx": {
                                                                                                                    "color": "var(--cds-text-secondary)",
                                                                                                                    "width": "100%",
                                                                                                                    "padding": "5px"
                                                                                                                }
                                                                                                            },
                                                                                                            "overrides": {
                                                                                                                "visible": "[[api.context.propType == \"string\"]]",
                                                                                                                "value": "[[api.context.propDefaultValue]]",
                                                                                                                "misc": "[[{\"propName\": api.context.propName, \"propType\": api.context.propType}]]"
                                                                                                            }
                                                                                                        },
                                                                                                        {
                                                                                                            "name": "propertyDefaultValue",
                                                                                                            "tag": "srs-toggle",
                                                                                                            "props": {
                                                                                                                "label": "Default Value"
                                                                                                            },
                                                                                                            "overrides": {
                                                                                                                "visible": "[[api.context.propType == \"boolean\"]]",
                                                                                                                "value": "[[api.context.propDefaultValue]]",
                                                                                                                "misc": "[[{\"propName\": api.context.propName, \"propType\": api.context.propType}]]"
                                                                                                            }
                                                                                                        },
                                                                                                        {
                                                                                                            "name": "propertyDefaultValue",
                                                                                                            "tag": "srs-codeeditor",
                                                                                                            "props": {
                                                                                                                "label": "Default Value",
                                                                                                                "language": "json",
                                                                                                                "height": "300px",
                                                                                                                "width": "400px"
                                                                                                            },
                                                                                                            "overrides": {
                                                                                                                "visible": "[[api.context.propType == \"object\"]]",
                                                                                                                "value": "[[api.context.propDefaultValue]]",
                                                                                                                "misc": "[[{\"propName\": api.context.propName, \"propType\": api.context.propType}]]"
                                                                                                            }
                                                                                                        },
                                                                                                        {
                                                                                                            "name": "propertyDefaultValue",
                                                                                                            "tag": "srs-stylecontainer",
                                                                                                            "props": {
                                                                                                                "defaultstyles": {}
                                                                                                            },
                                                                                                            "overrides": {
                                                                                                                "visible": "[[api.context.propType == \"styles\"]]",
                                                                                                                "defaultstyles": "[[api.context.propDefaultValue]]",
                                                                                                                "misc": "[[{\"propName\": api.context.propName, \"propType\": api.context.propType}]]"
                                                                                                            }
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    "name": "details212",
                                                                                                    "tag": "mui-grid",
                                                                                                    "props": {
                                                                                                        "item": true,
                                                                                                        "md": 12
                                                                                                    },
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "name": "details2121",
                                                                                                            "tag": "srs-container",
                                                                                                            "props": {
                                                                                                                "styles": {
                                                                                                                    "display": "flex",
                                                                                                                    "flexDirection": "row",
                                                                                                                    "justifyContent": "flex-start",
                                                                                                                    "width": "100%"
                                                                                                                }
                                                                                                            },
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    "name": "propertyOverridetValue",
                                                                                                                    "tag": "mui-text-field",
                                                                                                                    "props": {
                                                                                                                        "label": "Dynamic Expression",
                                                                                                                        "variant": "outlined",
                                                                                                                        "fullWidth": true,
                                                                                                                        "style": "width: 100%;",
                                                                                                                        "sx": {
                                                                                                                            "width": "100%",
                                                                                                                            "padding": "5px"
                                                                                                                        }
                                                                                                                    },
                                                                                                                    "overrides": {
                                                                                                                        "value": "[[api.context.propDynamicValue]]",
                                                                                                                        "misc": "[[{\"propName\": api.context.propName}]]"
                                                                                                                    }
                                                                                                                },
                                                                                                                {
                                                                                                                    "name": "addLinkBtn",
                                                                                                                    "elementId": "addLinkBtn",
                                                                                                                    "tag": "mui-icon-button",
                                                                                                                    "props": {
                                                                                                                        "icon": "AddLink"
                                                                                                                    },
                                                                                                                    "overrides": {
                                                                                                                        "misc": "[[{\"propName\": api.context.propName}]]"
                                                                                                                    }
                                                                                                                },
                                                                                                                {
                                                                                                                    "name": "removeLinkBtn",
                                                                                                                    "elementId": "removeLinkBtn",
                                                                                                                    "tag": "mui-icon-button",
                                                                                                                    "props": {
                                                                                                                        "icon": "LinkOff"
                                                                                                                    },
                                                                                                                    "overrides": {
                                                                                                                        "misc": "[[{\"propName\": api.context.propName}]]"
                                                                                                                    }
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
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "ComponentSettingsGridContainerItem1PropLinkingBox",
                                                    "elementId": "ComponentSettingsGridContainerItem1PropLinkingBox",
                                                    "tag": "mui-box",
                                                    "props": {
                                                        "sx": {
                                                            "width": "100%",
                                                            "padding": "10px"
                                                        }
                                                    },
                                                    "overrides": {
                                                        "visible": "[[api.helper.isPropertyLinkingMode(api)]]"
                                                    },
                                                    "children": [
                                                        {
                                                            "name": "SelectedPropertyToUpdateTitle",
                                                            "elementId": "SelectedPropertyToUpdateTitle",
                                                            "tag": "mui-text-field",
                                                            "props": {
                                                                "label": "Property Name",
                                                                "variant": "outlined",
                                                                "disabled": true                                                            
                                                            },
                                                            "overrides": {
                                                                "value": "[[api.context.selectedPropertyToEdit]]"
                                                            }
                                                        },
                                                        {
                                                            "name": "SelectedPropertyToUpdate",
                                                            "elementId": "SelectedPropertyToUpdate",
                                                            "tag": "mui-text-field",
                                                            "props": {
                                                                "label": "Dynamic Expression",
                                                                "variant": "outlined",
                                                                "disabled": true,
                                                                "sx": {
                                                                    "width": "100%",
                                                                    "marginTop": "5px"
                                                                }
                                                            },
                                                            "overrides": {
                                                                "value": "[[api.context.selectedDynamicPropValue]]"
                                                            }
                                                        },
                                                        {
                                                            "name": "SelectedPropertyDynamicExpressionMode",
                                                            "elementId": "SelectedPropertyDynamicExpressionMode",
                                                            "tag": "mui-auto-complete",
                                                            "props": {
                                                                "label": "Link Type",
                                                                "displayEmpty": true,
                                                                "options": [
                                                                    {
                                                                        "label": "Client Store",
                                                                        "value": "Client Store"
                                                                    },
                                                                    {
                                                                        "label": "Client Functions",
                                                                        "value": "Client Functions"
                                                                    }
                                                                ],
                                                                "selected": "Client Store",
                                                                "sx": {
                                                                    "backgroundColor": "var(--cds-background-hover)",
                                                                    "color": "var(--cds-text-secondary)",
                                                                    "width": "100%",
                                                                    "marginTop": "5px"
                                                                }
                                                            },
                                                        },
                                                        {
                                                            "name": "SelectedPropertyDynamicExpressionClientStoreMode",
                                                            "elmentId": "SelectedPropertyDynamicExpressionClientStoreMode",
                                                            "tag": "mui-box",
                                                            "props": {
                                                                "sx": {
                                                                    "padding": "20px",
                                                                    "border": "1px solid var(--cds-background-hover)",
                                                                    "display": "flex",
                                                                    "flexDirection": "column",
                                                                    "height": "calc(100vh - 40rem)",
                                                                    "overflow": "auto"
                                                                }
                                                            },
                                                            "overrides": {
                                                                "visible": "[[api.helper.isPropertyLinkingMode(api) && api.context.selectedLinkType == \"Client Store\"]]"
                                                            },
                                                            "children": [
                                                                {
                                                                    "name": "ComponentSettingsGridContainerItem1PropLinkingContent2",
                                                                    "elementId": "ComponentSettingsGridContainerItem1PropLinkingContent2",
                                                                    "tag": "mui-typography",
                                                                    "props": {
                                                                        "text": "Choose Path",
                                                                        "sx": {
                                                                            "backgroundColor": "var(--cds-background-hover)",
                                                                            "color": "var(--cds-text-secondary)",
                                                                            "width": "100%",
                                                                            "paddingTop": "10px",
                                                                            "paddingLeft": "5px"
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    "name": "ComponentSettingsGridContainerItem1PropLinkingContent3",
                                                                    "elementId": "ComponentSettingsGridContainerItem1PropLinkingContent3",
                                                                    "tag": "mui-box",
                                                                    "props": {
                                                                        "sx": {
                                                                            "width": "100%"
                                                                        }
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "name": "contextTree",
                                                                            "tag": "srs-contenttree",
                                                                            "props": {
                                                                                "expanded": true,
                                                                                "sx": {
                                                                                    "width": "100%"
                                                                                },
                                                                                "items": [],
                                                                                "actionicons": [],
                                                                                "inlinestyles": {
                                                                                    "maxHeight": "300px",
                                                                                    "overflow": "auto"
                                                                                }
                                                                            },
                                                                            "overrides": {
                                                                                "items": "[[api.helper.getContextTree(api)]]",
                                                                                "selectedpath": "[[api.helper.getSelectedPath(api)]]"
                                                                            },
                                                                            "children": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "ComponentSettingsPropLinkingClientStoreAction",
                                                                    "elementId": "ComponentSettingsPropLinkingClientStoreAction",
                                                                    "tag": "mui-button",
                                                                    "props": {
                                                                        "label": "Apply",
                                                                        "style": "flex-direction: row-reverse;display: flex;",
                                                                        "sx": {
                                                                            "backgroundColor": "var(--cds-background-hover)",
                                                                            "color": "var(--cds-text-secondary)"
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "name": "SelectedPropertyDynamicExpressionClientFunctionsMode",
                                                            "elmentId": "SelectedPropertyDynamicExpressionClientFunctionsMode",
                                                            "tag": "mui-box",
                                                            "props": {
                                                                "sx": {
                                                                    "padding": "20px",
                                                                    "border": "1px solid var(--cds-background-hover)",
                                                                    "display": "flex",
                                                                    "flexDirection": "column",
                                                                    "height": "calc(100vh - 40rem)",
                                                                    "overflow": "auto"
                                                                }
                                                            },
                                                            "overrides": {
                                                                "visible": "[[api.helper.isPropertyLinkingMode(api) && api.context.selectedLinkType == \"Client Functions\"]]"
                                                            },
                                                            "children": [
                                                                {
                                                                    "name": "ComponentSettingsGridContainerItem1PropLinkingFunctionContents",
                                                                    "elementId": "ComponentSettingsGridContainerItem1PropLinkingFunctionContents",
                                                                    "tag": "mui-typography",
                                                                    "props": {
                                                                        "text": "Choose Function",
                                                                        "sx": {
                                                                            "backgroundColor": "var(--cds-background-hover)",
                                                                            "color": "var(--cds-text-secondary)",
                                                                            "width": "100%",
                                                                            "paddingTop": "10px",
                                                                            "paddingLeft": "5px"
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    "name": "ComponentSettingsPropLinkingFunctionList",
                                                                    "elementId": "ComponentSettingsPropLinkingFunctionList",
                                                                    "tag": "mui-auto-complete",
                                                                    "props": {
                                                                        "label": "Function",
                                                                        "displayEmpty": true,
                                                                        "options": [
                                                                            {
                                                                                "label": "Function1",
                                                                                "value": "function1"
                                                                            },
                                                                            {
                                                                                "label": "Function2",
                                                                                "value": "function2"
                                                                            }
                                                                        ],
                                                                        "sx": {
                                                                            "backgroundColor": "var(--cds-background-hover)",
                                                                            "color": "var(--cds-text-secondary)",
                                                                            "width": "100%"
                                                                        }
                                                                    },
                                                                    "children": []
                                                                },
                                                                {
                                                                    "name": "ComponentSettingsPropLinkingFunctionAction",
                                                                    "elementId": "ComponentSettingsPropLinkingFunctionAction",
                                                                    "tag": "mui-button",
                                                                    "props": {
                                                                        "label": "Apply",
                                                                        "style": "flex-direction: row-reverse;display: flex;",
                                                                        "sx": {
                                                                            "backgroundColor": "var(--cds-background-hover)",
                                                                            "color": "var(--cds-text-secondary)"
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "ComponentSettingsEventsTab",
                                            "elmentId": "ComponentSettingsEventsTab",
                                            "tag": "mui-tab",
                                            "props": {
                                                "label": "Action Handlers",
                                                "value": "events"
                                            },
                                            "children": [
                                                {
                                                    "name": "ComponentSettingsEventsTabContentContainer1",
                                                    "elementId": "ComponentSettingsEventsTabContentContainer1",
                                                    "tag": "mui-box",
                                                    "props": {
                                                        "sx": {
                                                            "width": "100%",
                                                            "padding": "0px 10px"
                                                        }
                                                    },
                                                    "children": [
                                                        {
                                                            "name": "ComponentSettingsEventsTabContentContainer2",
                                                            "elementId": "ComponentSettingsEventsTabContentContainer2",
                                                            "tag": "mui-box",
                                                            "props": {
                                                                "sx": {
                                                                    "padding": "10px",
                                                                    "display": "flex",
                                                                    "justifyContent": "space-between",
                                                                    "backgroundColor": "var(--cds-background-hover)"
                                                                }
                                                            },
                                                            "children": [
                                                                {
                                                                    "name": "ComponentSettingsEventsTabHeader",
                                                                    "elementId": "ComponentSettingsEventsTabHeader",
                                                                    "tag": "mui-typography",
                                                                    "props": {
                                                                        "text": "Action Handlers",
                                                                        "sx": {
                                                                            "backgroundColor": "var(--cds-background-hover)",
                                                                            "color": "var(--cds-text-secondary)",
                                                                            "width": "100%",
                                                                            "paddingTop": "10px",
                                                                            "paddingLeft": "5px"
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    "name": "newActionHandlerContents",
                                                                    "elementId": "newActionHandlerContents",
                                                                    "tag": "mui-box",
                                                                    "props": {
                                                                        "sx": {
                                                                            "backgroundColor": "var(--cds-background-hover)",
                                                                            "color": "var(--cds-text-secondary)",
                                                                            "width": "100%",
                                                                            "paddingTop": "10px",
                                                                            "paddingLeft": "5px",
                                                                            "display": "flex",
                                                                            "flexDirection": "row"
        
                                                                        }
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "name": "newActionHandlerName",
                                                                            "elementId": "newActionHandlerName",
                                                                            "tag": "mui-text-field",
                                                                            "props": {
                                                                                "label": "Handler Name",
                                                                                "variant": "outlined",
                                                                                "actionhandlers": [
                                                                                    {
                                                                                        "name": "updateNewActionHandlerName",
                                                                                        "type": "UPDATE_CONTEXT",
                                                                                        "eventName": "MuiTextField#changed",
                                                                                        "contextPath": "newActionHandlerName",
                                                                                        "contextValueKey": "value"
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "overrides": {
                                                                                "value": "[[api.context.newActionHandlerName]]"
                                                                            }
                                                                        },
                                                                        {
                                                                            "name": "newActionHandlerEventName",
                                                                            "elementId": "newActionHandlerEventName",
                                                                            "tag": "mui-text-field",
                                                                            "props": {
                                                                                "label": "Event Name",
                                                                                "variant": "outlined",
                                                                                "actionhandlers": [
                                                                                    {
                                                                                        "name": "updateNewActionHandlerEventName",
                                                                                        "type": "UPDATE_CONTEXT",
                                                                                        "eventName": "MuiTextField#changed",
                                                                                        "contextPath": "newActionHandlerEventName",
                                                                                        "contextValueKey": "value"
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "overrides": {
                                                                                "value": "[[api.context.newActionHandlerEventName]]"
                                                                            }
                                                                        },
                                                                        {
                                                                            "name": "newActionHandlerPopoverActions",
                                                                            "elementId": "newActionHandlerPopoverActions",
                                                                            "tag": "mui-box",
                                                                            "props": {
                                                                                "sx": {
                                                                                    "display": "flex",
                                                                                    "flexDirection": "row",
                                                                                    "justifyContent": "flex-end",
                                                                                    "padding": "5px"
                                                                                }
                                                                            },
                                                                            "children": [
                                                                                {
                                                                                    "name": "newActionHandlerActionApply",
                                                                                    "elementId": "newActionHandlerActionApply",
                                                                                    "tag": "mui-button",
                                                                                    "props": {
                                                                                        "label": "ADD",
                                                                                        "actionhandlers": [
                                                                                            {
                                                                                                "name": "createNewActionHandler",
                                                                                                "type": "relay",
                                                                                                "eventName": "SrsMuiButton#clicked",
                                                                                                "source_elementid": "newActionHandlerActionApply",
                                                                                                "target_eventname": "CreateNewActionHandlerForComponentSettings"
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "name": "eventHandlerRepeater",
                                                            "elementId": "eventHandlerRepeater",
                                                            "tag": "srs-repeater",
                                                            "props": {
                                                                "items": [],
                                                                "sx": {
                                                                    "overflow": "auto",
                                                                    "display": "flex",
                                                                    "height": "calc(100vh - 25rem)",
                                                                    "flexDirection": "column"
                                                                }
                                                            },
                                                            "overrides": {
                                                                "items": "[[api.helper.getActionHandlers(api)]]"
                                                            },
                                                            "children": [
                                                                {
                                                                    "name": "eventHandlerAccordion",
                                                                    "elementId": "eventHandlerAccordion",
                                                                    "tag": "mui-accordion",
                                                                    "props": {
                                                                        "expanded": false,
                                                                        "sx": {
                                                                            "width": "100%"
                                                                        }
                                                                    },
                                                                    "overrides": {
                                                                        "expanded": "[[api.context.actionHandlerOpened]]"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "name": "eventHandlerBox",
                                                                            "elementId": "eventHandlerBox",
                                                                            "tag": "mui-box",
                                                                            "props": {
                                                                                "slotname": "accordion_summary"
                                                                            },
                                                                            "children": [
                                                                                {
                                                                                    "name": "actionHandlerSummary",
                                                                                    "elementId": "actionHandlerSummary",
                                                                                    "tag": "mui-typography",
                                                                                    "props": {
                                                                                        "text": "Action Handler 1",
                                                                                        "sx": {
                                                                                            "color": "var(--cds-text-secondary)"
                                                                                        }
                                                                                    },
                                                                                    "overrides": {
                                                                                        "text": "[[api.context.actionHandlerName]]"
                                                                                    }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "name": "actionHandlerDetailBox",
                                                                            "elementId": "actionHandlerDetailBox",
                                                                            "tag": "mui-box",
                                                                            "props": {
                                                                                "slotname": "accordion_details",
                                                                                "sx": {
                                                                                    "width": "100%"
                                                                                }
                                                                            },
                                                                            "children": [
                                                                                {
                                                                                    "name": "actionHandlerGrid",
                                                                                    "elementId": "actionHandlerGrid",
                                                                                    "tag": "mui-grid",
                                                                                    "props": {
                                                                                        "container": true,
                                                                                        "sx": {
                                                                                            "width": "100%"
                                                                                        }
                                                                                    },
                                                                                    "children": [
                                                                                        {
                                                                                            "name": "actionHandlerGridItem1",
                                                                                            "elementId": "actionHandlerGridItem1",
                                                                                            "tag": "mui-grid",
                                                                                            "props": {
                                                                                                "item": true,
                                                                                                "md": 12
                                                                                            },
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "actionHandlerName",
                                                                                                    "elementId": "actionHandlerName",
                                                                                                    "tag": "mui-text-field",
                                                                                                    "props": {
                                                                                                        "label": "Name",
                                                                                                        "variant": "outlined",
                                                                                                        "sx": {
                                                                                                            "color": "var(--cds-text-secondary)",
                                                                                                            "width": "100%",
                                                                                                            "martinTop": "5px"
                                                                                                        },
                                                                                                        "actionhandlers": [
                                                                                                            {
                                                                                                                "name": "actionHandlerNameChanged",
                                                                                                                "eventName": "MuiTextField#changed",
                                                                                                                "type": "script",
                                                                                                                "script": actionHandlerDataChanged,
                                                                                                                "stopPropagation": true
                                                                                                            }
                                                                                                        ]
                                                                                                    },
                                                                                                    "overrides": {
                                                                                                        "value": "[[api.context.actionHandlerName]]",
                                                                                                        "misc": "[[{\"handlerName\": api.context.actionHandlerName}]]"
                                                                                                    }
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            "name": "actionHandlerGridItem3",
                                                                                            "elementId": "actionHandlerGridItem3",
                                                                                            "tag": "mui-grid",
                                                                                            "props": {
                                                                                                "item": true,
                                                                                                "md": 12
                                                                                            },
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "actionHandlerGridItem2Container",
                                                                                                    "elementId": "actionHandlerGridItem2Container",
                                                                                                    "tag": "srs-container",
                                                                                                    "props": {
                                                                                                        "styles": {
                                                                                                            "display": "flex",
                                                                                                            "flexDirection": "column",
                                                                                                            "justifyContent": "flex-start",
                                                                                                            "width": "100%"
                                                                                                        }
                                                                                                    },
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "name": "actionHandlerEventNameFromSource",
                                                                                                            "elementId": "actionHandlerEventNameFromSource",
                                                                                                            "tag": "mui-auto-complete",
                                                                                                            "props": {
                                                                                                                "label": "Category",
                                                                                                                "options": [
                                                                                                                    { "label": "Custom", "value": "" },
                                                                                                                    { "label": "Mui Button", "value": "mui-button" },
                                                                                                                    { "label": "Style Container", "value": "srs-style-container" }
                                                                                                                ],
                                                                                                                "sx": {
                                                                                                                    "width": "100%",
                                                                                                                    "marginTop": "5px"
                                                                                                                },
                                                                                                                "actionhandlers": [
                                                                                                                    {
                                                                                                                        "name": "actionHandlerEventNameFromSourceChanged",
                                                                                                                        "eventName": "SrsMuiSelect#changed",
                                                                                                                        "type": "script",
                                                                                                                        "script": actionHandlerDataChanged,
                                                                                                                        "stopPropagation": true
                                                                                                                    }
                                                                                                                ]
                                                                                                            },
                                                                                                            "overrides": {
                                                                                                                "options": "[[api.helper.getComponentNames(api)]]",
                                                                                                                "selected": "[[api.context.actionHandlerEventNameFromSource || \"\"]]",
                                                                                                                "misc": "[[{\"handlerName\": api.context.actionHandlerName}]]"
                                                                                                            }
                                                                                                        },
                                                                                                        {
                                                                                                            "name": "actionHandlerEventName",
                                                                                                            "elementId": "actionHandlerEventName",
                                                                                                            "tag": "mui-text-field",
                                                                                                            "props": {
                                                                                                                "label": "Event Name",
                                                                                                                "variant": "outlined",
                                                                                                                "fullWidth": true,
                                                                                                                "style": "width: 100%;",
                                                                                                                "sx": {
                                                                                                                    "width": "100%",
                                                                                                                    "marginTop": "5px"
                                                                                                                },
                                                                                                                "actionhandlers": [
                                                                                                                    {
                                                                                                                        "name": "actionHandlerEventNameChanged",
                                                                                                                        "eventName": "MuiTextField#changed",
                                                                                                                        "type": "script",
                                                                                                                        "script": actionHandlerDataChanged,
                                                                                                                        "stopPropagation": true
                                                                                                                    }
                                                                                                                ]
                                                                                                            },
                                                                                                            "overrides": {
                                                                                                                "visible": "[[!api.context.actionHandlerEventNameFromSource || api.context.actionHandlerEventNameFromSource == \"\"]]",
                                                                                                                "value": "[[api.context.actionHandlerEventName]]",
                                                                                                                "misc": "[[{\"handlerName\": api.context.actionHandlerName}]]"
                                                                                                            }
                                                                                                        },
                                                                                                        {
                                                                                                            "name": "actionHandlerEventName",
                                                                                                            "elementId": "actionHandlerEventName",
                                                                                                            "tag": "mui-auto-complete",
                                                                                                            "props": {
                                                                                                                "label": "Event Name",
                                                                                                                "variant": "outlined",
                                                                                                                "options": [],
                                                                                                                "sx": {
                                                                                                                    "width": "100%",
                                                                                                                    "marginTop": "5px"
                                                                                                                },
                                                                                                                "actionhandlers": [
                                                                                                                    {
                                                                                                                        "name": "actionHandlerEventNameChanged",
                                                                                                                        "eventName": "SrsMuiSelect#changed",
                                                                                                                        "type": "script",
                                                                                                                        "script": actionHandlerDataChanged,
                                                                                                                        "stopPropagation": true
                                                                                                                    }
                                                                                                                ]
                                                                                                            },
                                                                                                            "overrides": {
                                                                                                                "visible": "[[!!api.context.actionHandlerEventNameFromSource]]",
                                                                                                                "options": "[[api.helper.getEventNamesForComponent(api, api.context.actionHandlerEventNameFromSource)]]",
                                                                                                                "value": "[[api.context.actionHandlerEventName]]",
                                                                                                                "misc": "[[{\"handlerName\": api.context.actionHandlerName}]]"
                                                                                                            }
                                                                                                        },
                                                                                                        {
                                                                                                            "name": "actionHandlerType",
                                                                                                            "elementId": "actionHandlerType",
                                                                                                            "tag": "mui-auto-complete",
                                                                                                            "props": {
                                                                                                                "options": [
                                                                                                                    {
                                                                                                                        "label": "UPDATE_CONTEXT", 
                                                                                                                        "value": "UPDATE_CONTEXT"
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "label": "Script", 
                                                                                                                        "value": "script"
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "label": "Relay", 
                                                                                                                        "value": "relay"
                                                                                                                    }
                                                                                                                ],
                                                                                                                "selected": "script",
                                                                                                                "sx": {
                                                                                                                    "marginTop": "5px"
                                                                                                                },
                                                                                                                "actionhandlers": [
                                                                                                                    {
                                                                                                                        "name": "actionHandlerTypeChanged",
                                                                                                                        "eventName": "SrsMuiSelect#changed",
                                                                                                                        "type": "script",
                                                                                                                        "script": actionHandlerDataChanged,
                                                                                                                        "stopPropagation": true
                                                                                                                    }
                                                                                                                ]
                                                                                                            },
                                                                                                            "overrides": {
                                                                                                                "selected": "[[api.context.actionHandlerType]]",
                                                                                                                "misc": "[[{\"handlerName\": api.context.actionHandlerName}]]"
                                                                                                            }
                                                                                                        },
                                                                                                        {
                                                                                                            "name": "actionHandlerScript",
                                                                                                            "elementId": "actionHandlerScript",
                                                                                                            "tag": "srs-codeeditor",
                                                                                                            "props": {
                                                                                                                "label": "Script",
                                                                                                                "language": "javascript",
                                                                                                                "height": "calc(100vh - 60rem)",
                                                                                                                "width": "40vw",
                                                                                                                "actionhandlers": [
                                                                                                                    {
                                                                                                                        "name": "actionHandlerScriptChanged",
                                                                                                                        "eventName": "SrsCodeEditor#changed",
                                                                                                                        "type": "script",
                                                                                                                        "script": actionHandlerDataChanged,
                                                                                                                        "stopPropagation": true
                                                                                                                    }
                                                                                                                ]
                                                                                                            },
                                                                                                            "overrides": {
                                                                                                                "visible": "[[api.context.actionHandlerType == \"script\"]]",
                                                                                                                "misc": "[[{\"handlerName\": api.context.actionHandlerName}]]",
                                                                                                                "value": "[[api.context.actionHandlerScript]]"
                                                                                                            },
                                                                                                            "children": []
                                                                                                        },
                                                                                                        {
                                                                                                            "name": "actionHandlerSourceElement",
                                                                                                            "elementId": "actionHandlerSourceElement",
                                                                                                            "tag": "mui-text-field",
                                                                                                            "props": {
                                                                                                                "label": "Source Element Id",
                                                                                                                "variant": "outlined",
                                                                                                                "fullWidth": true,
                                                                                                                "style": "width: 100%;",
                                                                                                                "sx": {
                                                                                                                    "width": "100%",
                                                                                                                    "marginTop": "5px"
                                                                                                                },
                                                                                                                "actionhandlers": [
                                                                                                                    {
                                                                                                                        "name": "actionHandlerSourceElementChanged",
                                                                                                                        "eventName": "MuiTextField#changed",
                                                                                                                        "type": "script",
                                                                                                                        "script": actionHandlerDataChanged,
                                                                                                                        "stopPropagation": true
                                                                                                                    }
                                                                                                                ]
                                                                                                            },
                                                                                                            "overrides": {
                                                                                                                "visible": "[[api.context.actionHandlerType == \"relay\"]]",
                                                                                                                "misc": "[[{\"handlerName\": api.context.actionHandlerName}]]",
                                                                                                                "value": "[[api.context.actionHandlerSourceElementId]]"
                                                                                                            },
                                                                                                            "children": []
                                                                                                        },
                                                                                                        {
                                                                                                            "name": "actionHandlerTargetEventName",
                                                                                                            "elementId": "actionHandlerTargetEventName",
                                                                                                            "tag": "mui-text-field",
                                                                                                            "props": {
                                                                                                                "label": "Target Event Name",
                                                                                                                "variant": "outlined",
                                                                                                                "fullWidth": true,
                                                                                                                "style": "width: 100%;",
                                                                                                                "sx": {
                                                                                                                    "width": "100%",
                                                                                                                    "marginTop": "5px"
                                                                                                                },
                                                                                                                "actionhandlers": [
                                                                                                                    {
                                                                                                                        "name": "actionHandlerTargetEventChanged",
                                                                                                                        "eventName": "MuiTextField#changed",
                                                                                                                        "type": "script",
                                                                                                                        "script": actionHandlerDataChanged,
                                                                                                                        "stopPropagation": true
                                                                                                                    }
                                                                                                                ]
                                                                                                            },
                                                                                                            "overrides": {
                                                                                                                "visible": "[[api.context.actionHandlerType == \"relay\"]]",
                                                                                                                "misc": "[[{\"handlerName\": api.context.actionHandlerName}]]",
                                                                                                                "value": "[[api.context.actionHandlerTargetEventName]]"
                                                                                                            },
                                                                                                            "children": []
                                                                                                        },
                                                                                                        {
                                                                                                            "name": "actionHandlerContextPath",
                                                                                                            "elementId": "actionHandlerContextPath",
                                                                                                            "tag": "mui-text-field",
                                                                                                            "props": {
                                                                                                                "label": "Context Path",
                                                                                                                "variant": "outlined",
                                                                                                                "fullWidth": true,
                                                                                                                "style": "width: 100%;",
                                                                                                                "sx": {
                                                                                                                    "width": "100%",
                                                                                                                    "marginTop": "5px"
                                                                                                                },
                                                                                                                "actionhandlers": [
                                                                                                                    {
                                                                                                                        "name": "actionHandlerContextPathChanged",
                                                                                                                        "eventName": "MuiTextField#changed",
                                                                                                                        "type": "script",
                                                                                                                        "script": actionHandlerDataChanged,
                                                                                                                        "stopPropagation": true
                                                                                                                    }
                                                                                                                ]
                                                                                                            },
                                                                                                            "overrides": {
                                                                                                                "visible": "[[api.context.actionHandlerType == \"UPDATE_CONTEXT\"]]",
                                                                                                                "misc": "[[{\"handlerName\": api.context.actionHandlerName}]]",
                                                                                                                "value": "[[api.context.actionHandlerContextPath]]"
                                                                                                            },
                                                                                                            "children": []
                                                                                                        },
                                                                                                        {
                                                                                                            "name": "actionHandlerContextValueKey",
                                                                                                            "elementId": "actionHandlerContextValueKey",
                                                                                                            "tag": "mui-text-field",
                                                                                                            "props": {
                                                                                                                "label": "Event Payload Key",
                                                                                                                "variant": "outlined",
                                                                                                                "fullWidth": true,
                                                                                                                "style": "width: 100%;",
                                                                                                                "sx": {
                                                                                                                    "width": "100%",
                                                                                                                    "marginTop": "5px"
                                                                                                                },
                                                                                                                "actionhandlers": [
                                                                                                                    {
                                                                                                                        "name": "actionHandlerContextValueKeyChanged",
                                                                                                                        "eventName": "MuiTextField#changed",
                                                                                                                        "type": "script",
                                                                                                                        "script": actionHandlerDataChanged,
                                                                                                                        "stopPropagation": true
                                                                                                                    }
                                                                                                                ]
                                                                                                            },
                                                                                                            "overrides": {
                                                                                                                "visible": "[[api.context.actionHandlerType == \"UPDATE_CONTEXT\"]]",
                                                                                                                "misc": "[[{\"handlerName\": api.context.actionHandlerName}]]",
                                                                                                                "value": "[[api.context.actionHandlerContextValueKey]]"
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
                                "md": 6,
                                "sx": {
                                    "backgroundColor": "var(--cds-background-hover)",
                                    "minHeight": "300px",
                                    "height": "calc(100vh - 10rem)",
                                    "maxHeight": "calc(100vh - 10rem)",
                                    "overflow": "hidden",
                                    "padding": "20px"
                                }
                            },
                            "children": [
                                {
                                    "name": "componentPreviewContainerActions",
                                    "elementId": "componentPreviewContainerActions",
                                    "tag": "mui-box",
                                    "props": {
                                        "sx": {
                                            "display": "flex",
                                            "flexDirection": "row",
                                            "marginLeft": "90%",
                                            "width": "100%"
                                        }
                                    },
                                    "children": [
                                        {
                                            "name": "componentPreviewActionRelay",
                                            "elementId": "componentPreviewActionRelay",
                                            "tag": "srs-relay",
                                            "props": {
                                                "relaylist": [{
                                                    "source_event": "IconButton#clicked",
                                                    "source_element": "componentPreviewAction",
                                                    "target": "REFRESH_COMPONENT_PREVIEW"
                                                }]
                                            },
                                            "children": [
                                                {
                                                    "name": "componentPreviewAction",
                                                    "elementId": "componentPreviewAction",
                                                    "tag": "mui-icon-button",
                                                    "props": {
                                                        "icon": "PlayArrow"
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "name": "componentPreviewApplyRelay",
                                            "elementId": "componentPreviewApplyRelay",
                                            "tag": "srs-relay",
                                            "props": {
                                                "relaylist": [{
                                                    "source_event": "IconButton#clicked",
                                                    "source_element": "componentPreviewApply",
                                                    "target": "APPLY_COMPONENT_DATA"
                                                }]
                                            },
                                            "children": [
                                                {
                                                    "name": "componentPreviewApply",
                                                    "elementId": "componentPreviewApply",
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
                                    "name": "componentPreviewContainer2",
                                    "elementId": "componentPreviewContainer2",
                                    "tag": "mui-box",
                                    "props": {
                                        "sx": {
                                            "minHeight": "300px",
                                            "height": "calc(100vh - 20rem)",
                                            "maxHeight": "calc(100vh - 20rem)",
                                            "overflow": "hidden",
                                            "boxShadow": "-2px 2px 7px 0px grey",
                                            "padding": "10px",
                                            "marginLeft": "10px",
                                            "justifyContent": "flex-start"
                                        }
                                    },
                                    "children": [
                                        {
                                            "name": "componentPreviewContentRenderer",
                                            "elementId": "componentPreviewContentRenderer",
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
                                                }
                                            },
                                            "overrides": {
                                                "widgetcontents": "[[api.context.componentDataToPreview || []]]"
                                            }
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
            "name": "ComponentSettingsController",
            "elementId": "ComponentSettingsController",
            "tag": "srs-controller",
            "props": {
                "handlers": [
                    {
                        "name": "linkTypeChanged",
                        "eventName": "SrsMuiSelect#changed",
                        "type": "script",
                        "script": linkTypeChanged,
                        "stopPropagation": true
                    },
                    {
                        "name": "componentPositionToAddChanged",
                        "eventName": "SrsMuiSelect#changed",
                        "type": "script",
                        "script": componentPositionToAddChanged,
                        "stopPropagation": true
                    },
                    {
                        "name": "componentTypeChanged",
                        "eventName": "SrsMuiSelect#changed",
                        "type": "script",
                        "script": componentTypeChanged,
                        "stopPropagation": true
                    },
                    {
                        "name": "propDynamicLinkingFunctionChanged",
                        "eventName": "SrsMuiSelect#changed",
                        "type": "script",
                        "script": propDynamicLinkingFunctionChanged,
                        "stopPropagation": true
                    },
                    {
                        "name": "applyClicked",
                        "eventName": "SrsMuiButton#clicked",
                        "type": "script",
                        "script": applyClicked,
                        "stopPropagation": true
                    },
                    {
                        "name": "handlePropertyLinkUnLink",
                        "eventName": "IconButton#clicked",
                        "type": "script",
                        "script": handlePropertyLinkUnLink,
                        "stopPropagation": true
                    },
                    {
                        "name": "handleTextPropertyDefaultValueChanged",
                        "eventName": "MuiTextField#changed",
                        "type": "script",
                        "script": handlePropertyDefaultValueChanged,
                        "stopPropagation": true
                    },
                    {
                        "name": "handleBooleanPropertyDefaultValueChanged",
                        "eventName": "SrsToggle#changed",
                        "type": "script",
                        "script": handlePropertyDefaultValueChanged,
                        "stopPropagation": true
                    },
                    {
                        "name": "handleObjectPropertyDefaultValueChanged",
                        "eventName": "SrsCodeEditor#changed",
                        "type": "script",
                        "script": handlePropertyDefaultValueChanged,
                        "stopPropagation": true
                    },
                    {
                        "name": "handleStylePropertyDefaultValueChanged",
                        "eventName": "STYLES_UPDATED",
                        "type": "script",
                        "script": handlePropertyDefaultValueChanged,
                        "stopPropagation": true
                    },
                    {
                        "name": "handleComponentNameToAddChanged",
                        "eventName": "MuiTextField#changed",
                        "type": "script",
                        "script": handleComponentNameToAddChanged,
                        "stopPropagation": true
                    },
                    {
                        "name": "handlePropertyOverrideValueChanged",
                        "eventName": "MuiTextField#changed",
                        "type": "script",
                        "script": handlePropertyOverrideValueChanged,
                        "stopPropagation": true
                    },
                    {
                        "name": "setPropertyDynamicValue",
                        "eventName": "SrsContentTree#clicked",
                        "type": "script",
                        "script": setPropertyDynamicValue,
                        "stopPropagation": true
                    },
                    {
                        "name": "refreshComponentDataForPreview",
                        "eventName": "REFRESH_COMPONENT_PREVIEW",
                        "type": "script",
                        "script": refreshComponentDataForPreview,
                        "stopPropagation": true
                    },
                    {
                        "name": "applyComponentData",
                        "eventName": "APPLY_COMPONENT_DATA",
                        "type": "script",
                        "script": applyComponentData,
                        "stopPropagation": true
                    },
                    {
                        "name": "createNewActionHandlerForComponentSettings",
                        "eventName": "CreateNewActionHandlerForComponentSettings",
                        "type": "script",
                        "script": addNewActionHandler,
                        "stopPropagation": true
                    }
                ]
            }
        }
    ];
    return { contents: widgetContents, context: widgetContext, functions: widgetFunctions };
}