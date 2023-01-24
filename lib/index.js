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
 * @param {[]} array - Array
 * @param {[]} options - Array of methods
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





