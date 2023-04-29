/**
 * A helper function for conveting number to decimal number
 * @param value
 */
export const convertToDecimal = (value: number) => {
    // const withDecimal = value.toFixed(2);
    // const numberFormat = Intl.NumberFormat('en-US');
    // const newFormat = numberFormat.format(withDecimal);
    // console.log(typeof newFormat)
    // return newFormat;

    const converPrice = Number(parseFloat(value?.toString()).toFixed(2)).toLocaleString('en', {
        minimumFractionDigits: 2
    });

    return converPrice;
}

/**
 * A helper function for replace all char in array
 * @param value
 */
export const replaceStringCharInArray = (value: string[]) => {
    if (value) {
        const newArr = []
        for (let i = 0; i < value.length; i++) {
            const replaceChar = value[i].replaceAll('-', ' ').toUpperCase()
            newArr.push(replaceChar)
        }

        return newArr;
    }

}