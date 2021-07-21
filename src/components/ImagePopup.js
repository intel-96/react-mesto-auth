function ImagePopup(props) {
    return (
        <div className={`popup popup_type_image ${props.card ? "popup_opened" : ""}`}>
            <div className="popup__image-container">
                <button type="button" className="popup__close-button popup__close-button_type_image" onClick={props.onClose}></button>
                <img className="popup__image" src={props.card.link} alt={props.card.name} />
                <h4 className="popup__image-name">{props.card.name}</h4>
            </div>
        </div>
    )
}

export default ImagePopup;