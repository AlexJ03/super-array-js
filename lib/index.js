/**
 * Adds an operation to all elements of the array
 * @param {number[]} array - Array of numbers
 * @param {"+"|"-"|"*"|"/"} operation - Operation
 * @return {number | string}
 * */
export const arrayOperation = (array, operation) => {
    if (array.length > 0) {
        let haveNotNumber = array.filter(item => typeof item !== "number");
        let check = haveNotNumber.length === 0;

        return check ? array.reduce((prev, cur) => eval(prev + operation + cur)) : `Error type: [${haveNotNumber}]`;
    } else {
        return `Error length: ${array.length}`
    }
}

/**
 * Returns the maximum number
 * @param {number[]} array - Array of numbers
 * @return {string | number}
 * */
export const maxNum = (array) => {
    if (array.length > 0) {
        let haveNotNumber = array.filter(item => typeof item !== "number");
        let check = haveNotNumber.length === 0;

        return check ? Math.max(...array) || `Error: [${array}] - ${Math.max(...array)}` : `Error type: [${haveNotNumber}]`;
    } else {
        return `Error length: ${array.length}`;
    }
}

/**
 * Returns the maximum number
 * @param {number[]} array - Array of numbers
 * @return {string | number}
 * */
export const minNum = (array) => {
    if (array.length > 0) {
        let haveNotNumber = array.filter(item => typeof item !== "number");
        let check = haveNotNumber.length === 0;

        return check ? Math.min(...array) || `Error: [${array}] - ${Math.min(...array)}` : `Error type: [${haveNotNumber}]`;
    } else {
        return `Error length: ${array.length}`;
    }
}

/**
 * Adds the ability to write methods through an array
 * @param {any[]} array - Array
 * @param {any[]} options - Array of methods
 * @return {string | number | []}
 * */
export const superArray = (array, options) => {
    let value = "";

    for (let i = 0; i < options.length; i++) {
        let newValue = options[i];
        let isString = typeof newValue === "string";

        if (isString) {
        if (value.length > 0) {
            value += `.${options[i]}()`;
        } else {
            value += `array.${newValue}()`;
        }
        } else {
            if (value.length > 0) {
                let newKey = Object.keys(options[i]);
                let fn = Object.values(options[i]);
                value += ``
                value += `.${newKey}(${fn})`;
            } else {
                let newKey = Object.keys(options[i]);
                let fn = Object.values(options[i]);
                value += `array.${newKey}(${fn})`;
            }
        }
    }

    return eval(value) || `Error: ${eval(value)} - [${array}]`;
}

/**
 * Removes all duplicates from the array
 * @param {any[]} array - array
 * @param {{} | boolean} params - array
 * @return {any[] | string}
 * */
export const removeDuplicates = (array, params = false) => {
    if (!array.length) {
        return `Error length: array.length = ${array.length}`;
    }
    if (params) {
        let newArr = array.map(item => typeof item === "string" && item.toLowerCase());
        let set = new Set(newArr);
        return [...set];
    } else {
        let set = new Set(array);
        return [...set];
    }
}

/**
 * Removes a specific type from the array
 * @param {any[]} array - Array
 * @param {"string" | "number" | "boolean" | "Symbol" | "object" | "undefined" | "null"} type - The type you want to delete
 * @return {any[] | string}
 * */
export const removeType = (array, type) => {
    if (!array || !type) {
        return `Error: array = [${array}] or type = ${type === "" ? type.length : type}`;
    }

    let newArr = array.filter(item => typeof item !== type);
    return newArr;
}

/**
 * Sorts the array by the specified parameters
 * @param {any[]} array - Array
 * @param {{}} params - Sorting options
 * @return {string | any[]}
 * */
export const superSort = (array, params) => {
    if (!array || Object.keys(params).length === 0) {
        return `Error: array = [${array}] or params = ${params}`;
    }

    let param = Object.values(params);

    if (param[0] === ">") {
        if (param[1]) {
            return array.sort((a, b) => eval(`a.${param[1]} - b.${param[1]}`))
        } else {
            return array.sort((a, b) => a - b);
        }
        } else if (param[0] === "<") {
        if (param[1]) {
            return array.sort((a, b) => eval(`b.${param[1]} - a.${param[1]}`))
        } else {
            return array.sort((a, b) => b - a);
        }}
};

