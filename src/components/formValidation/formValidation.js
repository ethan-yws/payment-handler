/**
 * Card fields validation
 * @param {*} props
 * @returns [validation status, error messages]
 */
const formValidation = (props) => {
    let isValid = true;
    let errors = {};

    // fasle if cardNo is not given or > 16 digits limit
    if (!props.cardNo) {
        errors.cardNo = "Card number is required";
        isValid = false;
    } else if (!/^\d{0,16}$/.test(props.cardNo.replace(/\s+/g, ""))) {
        errors.cardNo = "Max 16 digits";
        isValid = false;
    }

    // false if card name is not given
    if (!props.cardName) {
        errors.cardName = "Card holder name is required";
        isValid = false;
    }

    // false if expiry date is empty or does not match MM/YY format
    if (!props.expiry) {
        errors.expiry = "Expiry date is required";
        isValid = false;
    } else if (!/^\d{2}\/\d{2}$/.test(props.expiry)) {
        errors.expiry = "Please match MM/YY";
        isValid = false;
    }

    // false if CVV is empty or CVV is not 3 or 4 digits
    if (!props.cvv) {
        errors.cvv = "CVV is required";
        isValid = false;
    } else if (!/^\d{3,4}$/.test(props.cvv)) {
        errors.cvv = "3 or 4 digits";
        isValid = false;
    }

    return [isValid, errors];
};

export default formValidation;
