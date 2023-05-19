import "./popup.css";

function Popup({ handleClose }) {
  return (
    <div className="popup">
      <div className="popup__box">
        <span className="close-icon" onClick={handleClose}></span>
        <h1>I popped up!</h1>
      </div>
    </div>
  );
}

export default Popup;
