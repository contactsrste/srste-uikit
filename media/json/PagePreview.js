export const getPageDetails = async () => {
    let pageContents = [
        {
            name: "preview1",
            elementId: "preview1",
            tag: "srs-pagepreview",
            props: {},
            children: []
        }
    ];
    return {pageContents, pageContext: {}, pageFunctions: {}};
}