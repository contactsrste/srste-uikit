# Getting Started 
    

# Installation instructions 

# Basic concepts and terminology 

-   **Element**
    -   A Content Block is a meta-data representation of an element inside a content tree. An ACE page is a composed of multiple content blocks arranged in a particular composition to create the desired content and layout.
    -   Example: Left Navigation Menu, Simple Card, List, Form, Accordion, etc., are all examples of ACE dontent Blocks
    Typically, a content block looks like below - 
    ```
        {
            block_id: "block1",
            type: {
                route: "simple_card_with_button"                
            },
            title: "Person Card",
            subtitle: "This is a sample person card",     
            props_details: {
                footer: "Please contact the above number if found"
            },
            visibility: true,
            active: true            
        }
    ```
-   **Element Type**
    -   Element Type ....

-   **UI Template**
	-   UI Template ....

# Content Renderer

Srste Content Renderer (srs-content-renderer) is the ...

![](../media/pictures/Content%20Manager1.png)

## Design pages using Model View Controller pattern 
...

![](../media/pictures/MVC1.png)