export const reInialize = (object) => {
    const newObject = {...object};
    const result = {}
    Object.keys(newObject).map((field) => {
       return result[field] = getType(newObject[field]);
    })
    return result;
}

const getType = (data) => {
    const type = data === null ? null : typeof(data);
    switch (type) {
        case 'string':
            return ''
        case 'number':
                return 0
        case 'object':
                return {}
        default:
            return type
    }
}