const express = require('express');
const app = express();
const port = 3000;

// Serve the HTML file for the Apple Sign-In button
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle the callback from Apple Sign-In
app.get('/callback', (req, res) => {
    const authorizationCode = req.query.code;
    const idToken = req.query.id_token;

    if (authorizationCode && idToken) {
        // Process the authorization code and ID token as needed
        console.log('Authorization Code:', authorizationCode);
        console.log('ID Token:', idToken);

        // Optionally, you can send a response back to the client
        res.send('Sign-in successful! Authorization Code and ID Token received.');
    } else {
        res.status(400).send('Authorization code or ID token not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
