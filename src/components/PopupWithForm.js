function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-button" onClick={props.onClose}></button>
        <h4 className="popup__title">{props.title}</h4>
        <form className={`popup__form popup__form_type_${props.name}`} name={props.name} onSubmit={props.onSubmit}>
          {props.children}
          <button type="submit" className={`popup__save-button popup__save-button_type_${props.name}`}>{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;