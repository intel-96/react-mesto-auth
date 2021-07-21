import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    })
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="change-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
    >
      <label htmlFor="link-image" className="popup__form-label">
        <input type="url" className="popup__input popup__input_link" id="link-avatar" placeholder="Ссылка на изображение" name="link" required
          ref={avatarRef} />
        <span id="link-avatar-error" className="error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;