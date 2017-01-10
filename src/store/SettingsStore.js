/* global fetch */

export default class SettingsStore {
  updatePassphrase (currentPassphrase, newPassphrase) {
    return this.fetchURLEncoded(
      'PUT',
      `/auth/passphrase`,
      `current-passphrase=${currentPassphrase}&new-passphrase=${newPassphrase}`
    ).then(response => {
      return response.status === 200
        ? response
        : Promise.reject(response)
    })
  }

  fetch (method, url, body) {
    let params = {
      method: method,
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    if (body) {
      params.body = JSON.stringify(body)
    }
    return fetch(url, params)
  }

  fetchURLEncoded (method, url, body) {
    let params = {
      method: method,
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    return fetch(url, params)
  }
}
