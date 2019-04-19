export const destructureInitialData = (object) => {
    const result = {};
    for (const key in object) {
        if (!object.hasOwnProperty(key)) {
            return;
        }

        if (typeof object[key].properties == "object" && object[key].properties !== null) {
            result[key] = destructureInitialData(object[key].properties, key);
        } else {
            result[key] = object[key].value ? object[key].value : '';
        }
    }

    return result;
};

export const generateName = (prefix, name) => {
    return prefix ? prefix + '.' + name : name
};