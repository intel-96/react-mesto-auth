import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about)
  }, [currentUser, props.isOpen]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
    >
      <label htmlFor="name-profile" className="popup__form-label">
        <input type="text" className="popup__input popup__input_username popup__input" id="name-profile" placeholder="Имя" name="username" required minLength="2" maxLength="40"
          onChange={handleChangeName} value={name || ''} />
        <span id="name-profile-error" className="error"></span>
      </label>
      <label htmlFor="about-profile" className="popup__form-label">
        <input type="text" className="popup__input popup__input_subtitle" id="about-profile" placeholder="О себе" name="job" required minLength="2" maxLength="200"
          onChange={handleChangeDescription} value={description || ''} />
        <span id="about-profile-error" className="error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup;