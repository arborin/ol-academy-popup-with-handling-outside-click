import "./App.css";
import Popup from "./Components/Popup";
import { useState, useRef } from "react";

function App() {
    const [showPopup, setShowPopup] = useState(false);

    const mainElement = useRef();

    const check = (e) => {
        if (e.target.className === "App") {
            setShowPopup(false);
        }
        console.log(e.target);
    };

    const setButtonPopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="App" ref={mainElement} onClick={check}>
            <main>
                <h1>React Popup</h1>
                <button onClick={() => setShowPopup(true)}>Info popop </button>
                <Popup trigger={showPopup} setTrigger={setButtonPopup}>
                    <h3>My Popup</h3>
                </Popup>
            </main>
        </div>
    );
}

export default App;
