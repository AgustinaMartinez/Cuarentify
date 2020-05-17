import {config} from '../Config/config';

const redirectToSpotifyAuthentication = () => {
    const query = `client_id=${config.clientId}&redirect_uri=${config.redirectUri}&response_type=${config.responseType}&show_dialog=${config.showDialog}`;

    window.location = `${config.authEndpoint}?${query}`;
}

const authenticate = () => {
    let token = window.location.hash.substr(1);
    if (token) {
        const o = Object.fromEntries(new URLSearchParams(token));
        return o.access_token;
    } else {
        // If there is no token, redirect to Spotify authorization
        redirectToSpotifyAuthentication();
    }
}

export default authenticate;