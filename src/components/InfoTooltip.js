import xmark from '../images/xmark.svg';
import vmark from '../images/vmark.svg';

function InfoTooltip(props) {
    
    return (
        <div className={`popup popup_type_auth ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__container popup__auth-success">
                <img className="popup__auth-image" src={props.isRegistration ? vmark : xmark} alt="Успех регистрации" />
                <button type="button" className="popup__close-button" onClick={props.onClose}></button>
                <h4 className="popup__title popup__auth-title">{props.isRegistration ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h4>
            </div>
        </div>
    )
}

export default InfoTooltip;