import React, { useState } from "react";
import Card from "react-credit-cards";
import "./FormHandler.css";
import "react-credit-cards/es/styles-compiled.css";
import "../formValidation/formValidation";
import formValidation from "../formValidation/formValidation";
import db from "../../firebase";
import firebase from "firebase";
import { Link } from "react-router-dom";

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

        // If all card fields are valid, upload it to firbase db
        if (formValidation(cardInfo)[0]) {
            console.log(cardInfo);

            db.collection("cards").add({
                card: {
                    cardNo: cardNo,
                    cardName: cardName,
                    expiry: expiry,
                    cvv: cvv,
                },
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
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
                    {/* View all cards stored on Firebase DB */}
                    <div className="cards-on-firebase-container">
                        <label>
                            *Admin Operation
                            <Link to="/cards">
                                <input
                                    className="view-all-cards-button"
                                    type="button"
                                    value="View Cards on Firebase"
                                />
                            </Link>
                        </label>
                    </div>
                </form>
            </div>
            <p className="note-msg">
                Note: This is a demo page, <span>Do not</span> provide{" "}
                <span>real credit card</span> infomations, otherwise your card
                information will be stored on cloud
            </p>
        </div>
    );
}

export default FormHandler;
