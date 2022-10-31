import "./App.css";
import Popup from "./Components/Popup";
import { useState, useRef } from "react";

function App() {
    const [showPopup, setShowPopup] = useState(false);

    const mainElement = useRef();

    const check = (e) => {
        if (e.target.className !== "popup") {
            if (e.target.className !== "btn-popup") {
                setShowPopup(false);
            }
        }
        console.log(e.target);
    };

    const setButtonPopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="App" ref={mainElement} onClick={check}>
            <h1 className="title">React Popup</h1>
            <div className="button-row">
                <button
                    onClick={() => setShowPopup(true)}
                    className="btn-popup"
                >
                    Info popop{" "}
                </button>
            </div>
            <Popup trigger={showPopup} setTrigger={setButtonPopup}>
                <h3>My Popup</h3>
            </Popup>
        </div>
    );
}

export default App;
