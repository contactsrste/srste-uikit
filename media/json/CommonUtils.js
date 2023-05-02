export const getBlockDataToCopy = (blockData, parentBlockId) => {
	let result = {};    
    Object.keys(blockData).map((blockDataKey) => {
        if(blockDataKey != "block_id" && blockDataKey != "parent_block_id" && blockDataKey != "defaults" && blockDataKey != "props_override"){
            result[blockDataKey] = blockData[blockDataKey];
        }
    })
	
	result.elementId = (blockData.elementId || "") + getGUID().substring(0,4);

	if(parentBlockId)  {
		result.block_id = getGUID();
		result.parent_block_id = parentBlockId;
	}else {
        result.block_id = getGUID();
    }

	if(blockData.id) {
		result.id = getGUID();
	}

	if(blockData.children) {
		result.children = [];
		blockData.children.forEach((blockDataChild, indx) => {
			result.children[indx] = getBlockDataToCopy(blockDataChild, result.block_id);
		});
	}
	return result;
}

export const getGUID = function() {
	return 'xxxx-xxxx-yyyyyy-xxxx-yyyyxxyy'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}
