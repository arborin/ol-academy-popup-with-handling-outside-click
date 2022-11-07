import { useEffect, useRef } from "react";
import "./Popup.css";

function Popup(props) {
    const mainElement = useRef();
    console.log("----- POPUP COMPONENT -----");

    const { isPopup, closePopup } = props;
    // setOpenPopup(isPopup);

    useEffect(
        (setIsPopup) => {
            const handleClick = (e) => {
                // console.log(e.target);
                // console.log(mainElement.current);

                if (mainElement.current === e.target) {
                    // console.log("CLOSE");
                    closePopup(false);
                }
            };
            document.addEventListener("click", handleClick);

            return function cleanUp() {
                document.removeEventListener("click", handleClick);
            };
        },
        [closePopup]
    );

    return (
        isPopup && (
            <div className="popup" ref={mainElement}>
                <div className="popup-inner">
                    <header>
                        <h2>Popup title</h2>
                    </header>

                    <p className="popup-content">
                        Click another place to close popup
                    </p>

                    <button
                        className="close-btn"
                        onClick={() => {
                            closePopup(false);
                        }}
                    >
                        Close
                    </button>
                </div>
            </div>
        )
    );
}

export default Popup;
