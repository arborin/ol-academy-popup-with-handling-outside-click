import React from "react";
import "./Popup.css";

function Popup(props) {
    return props.trigger ? (
        <div className="popup">
            <header>
                <h2>Popup title</h2>
            </header>

            <p className="popup-content">Click another place to close popup</p>

            <button
                className="close-btn"
                onClick={() => {
                    props.setTrigger(false);
                }}
            >
                Close
            </button>
        </div>
    ) : (
        ""
    );
}

export default Popup;
