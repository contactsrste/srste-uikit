export const getBlockDataToCopy = (blockData, parentBlockId) => {
	let result = {};    
	result.elementId = (blockData.elementId || "") + getGUID().substring(0,4);

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
