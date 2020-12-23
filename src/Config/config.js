export const header = {
    'Authorization': 'Bearer BQABfweiqHktJu4AKhgmlfQMAI-lTz-GCgswV_O4c4B1JbdR4Czy0Hip77TG5d2B4YTez7phXFdXRNP8nptjkvi3kX-FRJ7wD3TwMAJvCJp_XLbMhqYZNi_b50QTODEB7tg4zQRnAHTsB9uMtvTcTyxBKL2bjG7il211pQ8atBpiHxaINGK1hFDX09ekaYsmC2FyKrqVDSFAX1jQDKOqnfwxOnAzuIRE-vKjn1D2x7xVfjm-FQBWpStrpQBepD0Nw-sXfuoQBm6Mwqcj5alxkbSe-re6fAfY',
    'Content-Type': 'application/json'
}

export const artistsListEndpoint = {
    url: 'https://api.spotify.com/v1/search',
    type: 'artist'
}

export const artistEndpoint = {
    url: 'https://api.spotify.com/v1/artists'
}

export const albumEndpoint = {
    url: 'https://api.spotify.com/v1/albums'
}

export const loginConfig = {
    authEndpoint: "https://accounts.spotify.com/authorize",
    clientId: "353ef28ca8734415b390ea4416744253",
    redirectUri: encodeURIComponent("http://localhost:3000/home"),
    responseType: "token",
    showDialog: true
}