import "./App.css";
import FormHandler from "./components/formHandler/FormHandler";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CardsDB from "./components/cardsDB/CardsDB";

function App() {
    return (
        <Router>
            <div className="App">
                <Route exact path="/" component={FormHandler} />
                <Route path="/cards" component={CardsDB} />
            </div>
        </Router>
    );
}

export default App;
