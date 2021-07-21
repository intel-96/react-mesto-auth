import React from 'react';
import Card from './Card';
import editIcon from '../images/pencil.png'
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main>
            <section className="profile">
                <div className="profile__image-container">
                    <img src={currentUser.avatar} alt="Изображение профиля" className="profile__image" />
                    <div className="profile__edit-image" onClick={props.onEditAvatar}>
                        <img src={editIcon} alt="Изменить изображение" className="profile__edit-icon" />
                    </div>
                </div>
                <div className="profile__info">
                    <div className="profile__info-edit">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button type="button" className="profile__edit-button" aria-label="Изменить профиль" onClick={props.onEditProfile} />
                    </div>
                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace} />
            </section>

            <ul className="cards">
                {props.cards.map((card) => (
                    <Card
                        card={card}
                        key={card._id}
                        onCardClick={props.onCardClick}
                        onCardLike={props.onCardLike}
                        onCardDelete={props.onCardDelete} />
                ))}
            </ul>
        </main>
    )
}

export default Main;