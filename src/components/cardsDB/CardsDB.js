import React, { useState, useEffect } from "react";
import db from "../../firebase";
import Card from "react-credit-cards";
import "./CardsDB.css";
import { Link } from "react-router-dom";

function CardsDB() {
    const [cards, setCards] = useState([]);
    console.log(cards);

    // Fetch cards from firebase database
    useEffect(() => {
        db.collection("cards")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                setCards(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        card: doc.data().card,
                    }))
                );
            });
    }, []);

    return (
        <div className="cards-database">
            <h2>Cards on Firebase DB:</h2>
            {/* Go back to home page button */}
            <Link to="/">
                <input type="button" value="Back to Home" />
            </Link>

            {/* Card List */}
            {cards.map((card) => (
                <div key={card.id}>
                    <Card
                        className="credit-card"
                        number={card.card.cardNo}
                        name={card.card.cardName}
                        expiry={card.card.expiry}
                        cvc={card.card.cvv}
                    />
                </div>
            ))}
        </div>
    );
}

export default CardsDB;
