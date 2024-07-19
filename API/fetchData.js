const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

// Define the URL
const url = 'https://medicalis.ma/substance/28';

// Function to fetch and extract data
async function fetchData() {
    try {
        // Fetch the HTML content
        const response = await axios.get(url);
        const html = response.data;

        // Load the HTML into cheerio
        const $ = cheerio.load(html);

        // Extract the desired data
        let dataList = [];
        $('p').each((index, element) => {
            let productElement = $(element).find('a#link');
            let productName = productElement.text().trim();
            let additionalInfoElement = $(element).find('span');
            let additionalInfo = additionalInfoElement.text().trim();

            // Logging for debugging
            console.log('Product Name:', productName);
            console.log('Additional Info:', additionalInfo);

            // Structuring the data into an object
            let productData = {
                product_name: productName,
                additional_info: additionalInfo
            };

            // Adding the object to the list
            dataList.push(productData);
        });

        // Save the data to a JSON file
        fs.writeFileSync('product_data.json', JSON.stringify(dataList, null, 4), 'utf8');
        console.log("Data has been saved to product_data.json");

    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// Call the function
fetchData();
