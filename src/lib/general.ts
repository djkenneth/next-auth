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

    const converPrice = Number(parseFloat(value.toString()).toFixed(2)).toLocaleString('en', {
        minimumFractionDigits: 2
    });

    return converPrice;
}