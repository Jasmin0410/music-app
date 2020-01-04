import * as process from '../../env';

export function getKKBoxToken() {
  // // Use cors-anywhere to resolve CORS
  return fetch('https://cors-anywhere.herokuapp.com/https://account.kkbox.com/oauth2/token', {
    method: 'POST',
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=${process.REACT_APP_GRANT_TYPE}&client_id=${process.REACT_APP_CLIENT_ID}&client_secret=${process.REACT_APP_CLIENT_SECRET}`,
  })
    .then(res => res.json())
    .then((data) => {
      return new Promise(function (res, rej) {
        res(data);
      })
    })
}