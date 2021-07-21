import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    // Отображение кнопки удаления на собственных карточках:
    const isOwn = props.card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `cards__delete-button ${isOwn ? 'cards__delete-button_display' : ''}`
    );
    // Отображение поставленных лайков
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (
        `cards__like-button ${isLiked ? 'cards__like-button_active' : ''}`
    );

    function handleClick() {
        props.onCardClick(props.card);
    }

    function handleLikeClick() {
        props.onCardLike(props.card);
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card);
    }

    return (
        <li className="cards__element">
            <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
            <div className="cards__image-container">
                <img className="cards__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
            </div>
            <div className="cards__subtitle">
                <h3 className="cards__name">{props.card.name}</h3>
                <div className="cards__likes">
                    <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                    <span className="cards__like-count">{props.card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;