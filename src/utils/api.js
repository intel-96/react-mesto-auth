class Api {
  constructor({ url, headers, groupId }) {
    this._headers = headers;
    this._url = url;
    this._groupId = groupId;
  }

  getAllInfo() {
    return Promise.all([this.getUserData(), this.getInitialCards()]);
  }

  getInitialCards() {
    return fetch(`${this._url}/v1/${this._groupId}/cards`, {
      headers: this._headers
    })
      .then(res => {
        return this._getResponse(res);
      })
  }

  addCard(data) {
    return fetch(`${this._url}/v1/${this._groupId}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(res => {
        return this._getResponse(res);
      })
  }

  removeCard(card) {
    return fetch(`${this._url}/v1/${this._groupId}/cards/${card}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => {
        return this._getResponse(res);
      })
  }

  likeCard(card) {
    return fetch(`${this._url}/v1/${this._groupId}/cards/likes/${card}`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(res => {
        return this._getResponse(res);
      })
  }

  removeLike(card) {
    return fetch(`${this._url}/v1/${this._groupId}/cards/likes/${card}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => {
        return this._getResponse(res);
      })
  }

  changeLikeCardStatus(card, isLiked) {
    if (!isLiked) {
      return this.removeLike(card)
    } else {
      return this.likeCard(card)
    }
  }

  getUserData() {
    return fetch(`${this._url}/v1/${this._groupId}/users/me`, {
      headers: this._headers
    })
      .then(res => {
        return this._getResponse(res);
      })
  }

  patchUserInfo(userInfo) {
    return fetch(`${this._url}/v1/${this._groupId}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userInfo.name,
        about: userInfo.about
      })
    })
      .then(res => {
        return this._getResponse(res);
      })
  }

  patchUserAvatar(data) {
    return fetch(`${this._url}/v1/${this._groupId}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then(res => {
        return this._getResponse(res);
      })
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

}

const api = new Api({
  groupId: "cohort-20",
  url: "https://mesto.nomoreparties.co",
  headers: {
    authorization: 'b5c77d3f-94ce-45f7-a118-77a3d38457c1',
    'Content-Type': 'application/json'
  }
});
export default api;