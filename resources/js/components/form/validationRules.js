
    export const testAlpha = (value) => {
        return /^[A-Za-z]+$/.test(value);
    }
    export  const testAlphaNum = (value) => {
        return /^[0-9A-Za-z]+$/.test(value);
    }
    export const testString = (value) => {
        return /^[0-9A-Za-z ]+$/.test(value);
    }
   export const testAlphaDash = (value) => {
        return /^[0-9A-Za-z-_]+$/.test(value);
    }
   export const testNumeric = (value) => {
        return /^[0-9]+$/.test(value);
    }
   export const testEmail = (value) => {
       return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
       
    }

