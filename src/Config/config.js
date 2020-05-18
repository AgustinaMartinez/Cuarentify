export const config = {
    authEndpoint: "https://accounts.spotify.com/authorize",
    clientId: "353ef28ca8734415b390ea4416744253",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token",
    showDialog: true
}

export const artistEndpoint = {
    url: 'https://api.spotify.com/v1/search',
    type: 'artist'
}

export const header = {
    'Authorization': 'Bearer BQAUp-96Sk7g2qscYzOSqXMypxVoespPXqqv5j1m6O66Gz4jM3uknL4vhlkiwu_xQTtYwH9NPxWklOte9g_gFyQ9UvMBJCEUzgLZumz79HulvdkyofXj3tYrLi9JNtlCZ1iLdcDg6-5Q200EgFNe_309aD5X6fXg6tvF-4bEoGzEQ3tn5jt0JrT0_j7LjyXsHpkM4_AuK4Us0Sp1-39sjoCOolUFhq3kNCWK3VJsMB-lIn_H3QTvpIw_9vFDuo__SsxndrmWbf_GwkEnsEhVuET0PNkXYhT2',
    'Content-Type': 'application/json'
}