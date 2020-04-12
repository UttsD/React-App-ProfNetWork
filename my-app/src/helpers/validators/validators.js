export const required = value =>{
    if (value) return undefined;
    return "Field is required";
}




export const maxLengthCreator = maxLength => value => {
    if (value && value.length > 30) {
        return `Max lenght is ${maxLength} symbols`
    }
    return undefined
}

