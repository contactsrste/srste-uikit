import {getComponentMetadata} from "./BuilderUtils";
let componentMetaData = getComponentMetadata();

export const getComponentSettingsData = function () {

    let linkTypeChanged = `(async function() {
        
        let elementId = api.eventPayload?.payload?.id;   
        let ctx = api.context || {}; 
        if(elementId == "SelectedPropertyDynamicExpressionMode") {    
            ctx.selectedLinkType = api.eventPayload?.payload?.value || "Client Store";
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
            let componentPropData = ctx.componentPropData || {};
            componentPropData[selectedPropName] = componentPropData[selectedPropName] || {};
            componentPropData[selectedPropName]["defaultValue"] = api.eventPayload?.payload?.value || "";
            ctx.componentPropData = componentPropData;
            
            let componentProps = {};
            if(ctx.componentPropData && Object.keys(ctx.componentPropData).length > 0) {
                Object.keys(ctx.componentPropData).map((propName) => {
                    componentProps[propName] = ctx.componentPropData[propName]?.defaultValue;
                })
            }
            if(ctx.selectedComponentName && ctx.selectedComponentType) {
                ctx.componentDataToPreview = [{
                    "name": ctx.selectedComponentName + "_1",
                    "elementId": ctx.selectedComponentName + "_1",
                    "tag": ctx.selectedComponentType,
                    "props": componentProps
                }];
            }

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
            ctx.componentDataToPreview = [{
                "name": ctx.selectedComponentName + "_1",
                "elementId": ctx.selectedComponentName + "_1",
                "tag": ctx.selectedComponentType,
                "props": componentProps
            }];
        }
        return {context: ctx};
    })`;

    let applyComponentData = `(async function() {
        debugger;
        let ctx = api.context || {};
        let componentProps = {};
        let componentOverrideProps = {};
        if(ctx.componentPropData && Object.keys(ctx.componentPropData).length > 0) {
            Object.keys(ctx.componentPropData).map((propName) => {
                componentProps[propName] = ctx.componentPropData[propName]?.defaultValue;
            })
        }
        if(ctx.componentPropData && Object.keys(ctx.componentPropData).length > 0) {
            Object.keys(ctx.componentPropData).map((propName) => {
                if(ctx.componentPropData[propName]?.overrideValue) {
                    componentOverrideProps[propName] = ctx.componentPropData[propName]?.overrideValue;
                }
            })
        }
        if(ctx.selectedComponentName && ctx.selectedComponentType) {
            let componentDataToUpdate = {
                "name": ctx.selectedComponentName,
                "elementId": ctx.selectedComponentName,
                "tag": ctx.selectedComponentType,
                "props": componentProps,
                "overrides": componentOverrideProps 
            };
            api.dispatchEvent("UPDATE_COMPONENT_DATA", {elementId: ctx.selectedComponentName, payload: componentDataToUpdate})
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
        "componentOperation": "edit",
        "selectedDynamicPropValue": "",
        "componentDataToPreview": []
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
                        const label = `Node ${name}`;
                        
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
            
            return convertObjectToRepresentation(api.context || {});
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
                                        "options": "[[api.helper.getComponentTypes(api)]]",
                                        "selected": "[[api.context.selectedComponentType]]"
                                    },
                                    "children": []
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
                                        "disabled": "[[api.context.componentOperation == \"edit\"]]"
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
                                                                                                                "value": "[[api.context.propDefaultValue]]",
                                                                                                                "misc": "[[{\"propName\": api.context.propName}]]"
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
                                                                                    "maxHeight": "500px",
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
                                                "label": "Events",
                                                "value": "events"
                                            },
                                            "children": [
                                                {
                                                    "name": "tab2_content",
                                                    "elmentId": "tab2_content",
                                                    "tag": "mui-typography",
                                                    "props": {
                                                        "text": "Events",
                                                        "color": "var(--cds-background-inverse)"
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
                        "name": "handlePropertyDefaultValueChanged",
                        "eventName": "MuiTextField#changed",
                        "type": "script",
                        "script": handlePropertyDefaultValueChanged,
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
                    }
                ]
            }
        }
    ];
    return { contents: widgetContents, context: widgetContext, functions: widgetFunctions };
}