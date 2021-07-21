import React from 'react';

function Login(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('')

    function handleChangeEmail(evt) {
        setEmail(evt.target.value);
    }

    function handleChangePassword(evt) {
        setPassword(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onLogin(email, password);
    }

    return (
        <section className="auth">
            <h1 className="auth__title">Вход</h1>
            <form className="auth__form" onSubmit={handleSubmit}>
                    <input value={email} type="email" className="auth__input" placeholder="Email" onChange={handleChangeEmail} required/>
                    <input value={password} type="password" className="auth__input" placeholder="Пароль" onChange={handleChangePassword} required/>
                <button type="submit" className="auth__submit-button">Войти</button>
            </form>
        </section>
    )
}

export default Login;