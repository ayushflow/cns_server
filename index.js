const express = require('express');
const cors = require('cors');
const redirections = require('./redirections');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS for all requests
app.use(cors());

// Define a subset of keys to randomize from
const surpriseKeys = ["ProfilePage", "ProductDetailsPage", "LaunchUrl"]; // Add the keys you want

// Helper function to get a random redirection model from the subset
function getRandomRedirection() {
    const randomKey = surpriseKeys[Math.floor(Math.random() * surpriseKeys.length)];
    return redirections[randomKey];
}

// Define the /surprise endpoint
app.get('/surprise', (req, res) => {
    const randomRedirection = getRandomRedirection();
    res.json(randomRedirection);
});

app.get('/cta-details', (req, res) => {
    const { pageType } = req.query;

    if (pageType === undefined || pageType === null) {
        return res.status(400).json({ error: "pageType parameter is required" });
    }

    if (pageType === "onboardingLanding") {
        res.json(redirections[pageType]);
    } else {
        res.json({
            label: "Next",
            redirect: redirections.HomePage,
    });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});