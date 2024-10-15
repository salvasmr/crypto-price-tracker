// Importing the axios library to make HTTP requests
const axios = require('axios');

// Function to get the price of a given cryptocurrency
async function getCryptoPrice(crypto) {
    // CoinGecko API endpoint for fetching cryptocurrency price in USD
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`;

    try {
        // Making the GET request to the API
        const response = await axios.get(url);

        // Accessing the price from the API response
        const price = response.data[crypto].usd;
        
        // Returning the fetched price
        return price;
    } catch (error) {
        // Logging an error message if something goes wrong
        console.error('Error fetching data:', error.message);
        return null;
    }
}

// Main function to get input from the user and display the price
async function main() {
    // Fetching the cryptocurrency name from the command line (e.g., "bitcoin")
    const crypto = process.argv[2] || 'bitcoin';  // Default to 'bitcoin' if no input

    // Calling the function to fetch the price
    const price = await getCryptoPrice(crypto);

    // Displaying the price in the console
    if (price) {
        console.log(`The current price of ${crypto.charAt(0).toUpperCase() + crypto.slice(1)} is $${price}`);
    } else {
        console.log(`Could not retrieve price for ${crypto}`);
    }
}

// Calling the main function to execute the code
main();
