import "./App.css";
import Popup from "./Components/Popup";
import { useState } from "react";

function App() {
    const [showPopup, setShowPopup] = useState(false);

    const setButtonPopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="App">
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
