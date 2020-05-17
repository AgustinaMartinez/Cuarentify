export const config = {
    authEndpoint: "https://accounts.spotify.com/authorize",
    clientId: "353ef28ca8734415b390ea4416744253",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token",
    showDialog: true
}

export const artistEndpoint = {
    url: 'https://api.spotify.com/v1/search',
    type: 'artist',

    
}

export const header = {
    'Authorization': 'Bearer BQAz37CPbEi3w3K7ill5YoM2p-KDN8fAe51qHnIjs8qZc7SawU-RI82XkGsJqpb2OhldSjXiqVQq9i9L_8IddI4fBKTVBZJRr8jVvnWtxoievHg04A8rbra7QVIgVjbCnF5HP0lBAU_AbF0vtXita1lKmIdPRktX00ipT89Nvs2AzrclsOMc5ar7J9aNlMgpLo10z4931H7sp5OqP2f8RY9xlpaTBjWlRCQ6W-2vA4lZ6g6MgQfwdcXU7arN2IBakCNOL9-wvo09mizKcbwEaGHctqr9cEtf',
    'Content-Type': 'application/json'
}