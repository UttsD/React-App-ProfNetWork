export const updateObjectInArray = (items, itemId, objPropName, newProps) => {
    return items.map(i => {
        if (i[objPropName] === itemId){
            return {...i, ...newProps}
        }
        return i
    })
}

