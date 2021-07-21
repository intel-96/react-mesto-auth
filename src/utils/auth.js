export const BASE_URL = 'https://auth.nomoreparties.co';

function checkRequestResult (res) {
    if (res.ok) {
        return res.json();
    } 
        return Promise.reject(`Ошибка ${res.status}`)

}

export function register (email, password) {
    return fetch(`${BASE_URL}/signup`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            email, password
        })
    })
    .then(res => checkRequestResult(res))
}

export function authorization (email, password) {
    return fetch(`${BASE_URL}/signin`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            email, password
        })
    })
    .then(res => checkRequestResult(res))
}

export function getToken(token) {
    return fetch(`${BASE_URL}/users/me`, {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
        method: 'GET',
    })
    .then(res => checkRequestResult(res))
}