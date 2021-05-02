const formValidation = (props) => {
    let isValid = true;
    let errors = {};

    if (!props.cardNo) {
        errors.cardNo = "Card number is required";
        isValid = false;
    } else if (!/^\d{0,16}$/.test(props.cardNo)) {
        errors.cardNo = "Max 16 digits";
        isValid = false;
    }

    if (!props.cardName) {
        errors.cardName = "Card holder name is required";
        isValid = false;
    }

    if (!props.expiry) {
        errors.expiry = "Expiry date is required";
        isValid = false;
    } else if (!/^\d{2}\/\d{2}$/.test(props.expiry)) {
        errors.expiry = "Please match MM/YY";
        isValid = false;
    }

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
