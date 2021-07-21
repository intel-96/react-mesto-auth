import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleSubmit(evt) {
        evt.preventDefault();

        props.onAddPlace({
            name: name,
            link: link
        })
        setName('');
        setLink('')
    }

    function handleChangeCardName(evt) {
        setName(evt.target.value);
    }

    function handleChangeCardLink(evt) {
        setLink(evt.target.value);
    }

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            name="addCard"
            title="Новое место"
            buttonText="Создать"
        >
            <label htmlFor="name-image" className="popup__form-label">
                <input type="text" className="popup__input popup__input_name" id="name-image" placeholder="Название" name="name" required minLength="2" maxLength="30"
                    onChange={handleChangeCardName} value={name || ''} />
                <span id="name-image-error" className="error"></span>
            </label>
            <label htmlFor="link-image" className="popup__form-label">
                <input type="url" className="popup__input popup__input_link" id="link-image" placeholder="Ссылка на картинку" name="link" required
                    onChange={handleChangeCardLink} value={link || ''} />
                <span id="link-image-error" className="error"></span>
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup;