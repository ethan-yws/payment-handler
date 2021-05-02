import React, { useState } from "react";
import Card from "react-credit-cards";
import "./FormHandler.css";
import "react-credit-cards/es/styles-compiled.css";
import "../formValidation/formValidation";
import formValidation from "../formValidation/formValidation";

function FormHandler() {
    // card fields
    const [cardNo, setCardNo] = useState("");
    const [cardName, setCardName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCVV] = useState("");
    const [focus, setFocus] = useState("");

    // input validation error messages
    const [errors, setErrors] = useState({});

    // Submit Button Handler
    const submitHandler = (e) => {
        e.preventDefault();
        let cardInfo = {
            cardNo: cardNo,
            cardName: cardName,
            expiry: expiry,
            cvv: cvv,
            focus: focus,
        };

        setErrors(formValidation(cardInfo)[1]);

        if (formValidation(cardInfo)[0]) {
            console.log(cardInfo);
        }
    };

    return (
        <div className="form-handler">
            {/* Credit Card Component*/}
            <div className="credit-card">
                <Card
                    number={cardNo}
                    name={cardName}
                    expiry={expiry}
                    cvc={cvv}
                    focused={focus}
                />
            </div>
            {/* Payment Form */}
            <div className="payment-form">
                <form className="payment-form__entries">
                    {/* Card Number Entry */}
                    <div>
                        <label>
                            Card Number
                            <br />
                            <input
                                type="tel"
                                name="number"
                                placeholder="Card Number"
                                pattern="[0-9]{3}"
                                onChange={(e) => setCardNo(e.target.value)}
                                onFocus={(e) => setFocus(e.target.name)}
                                required
                            />
                            {errors.cardNo && (
                                <span className="error-msg">
                                    {errors.cardNo}
                                </span>
                            )}
                        </label>
                    </div>
                    {/* Card Holder Name Enrty */}
                    <div>
                        <label>
                            Card Name
                            <br />
                            <input
                                type="text"
                                name="name"
                                placeholder="Card Holder Name"
                                onChange={(e) => setCardName(e.target.value)}
                                onFocus={(e) => setFocus(e.target.name)}
                            />
                            {errors.cardName && (
                                <span className="error-msg">
                                    {errors.cardName}
                                </span>
                            )}
                        </label>
                    </div>
                    {/* Expiry Date Entry */}
                    <div className="exp-and-cvv-container">
                        <label>
                            Expiration Date
                            <br />
                            <input
                                type="text"
                                name="expiry"
                                placeholder="MM/YY"
                                onChange={(e) => setExpiry(e.target.value)}
                                onFocus={(e) => setFocus(e.target.name)}
                            />
                            {errors.expiry && (
                                <span className="error-msg">
                                    <br />
                                    {errors.expiry}
                                </span>
                            )}
                        </label>
                        <label>
                            CVV
                            <br />
                            <input
                                type="tel"
                                name="cvc"
                                placeholder="CVV"
                                onChange={(e) => setCVV(e.target.value)}
                                onFocus={(e) => setFocus(e.target.name)}
                            />
                            {errors.cvv && (
                                <span className="error-msg">
                                    <br />
                                    {errors.cvv}
                                </span>
                            )}
                        </label>
                    </div>
                    {/* Submit Button */}
                    <div className="submit-button-container">
                        <input
                            className="submit-button"
                            type="submit"
                            name="Submit"
                            onClick={submitHandler}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormHandler;
