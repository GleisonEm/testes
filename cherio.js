const cheerio = require('cheerio');
const axios = require('axios');
var scrape = require('metatag-crawler');

const url = 'https://www.carlosbritto.com/secao/agricultura/'
scrape('https://www.instagram.com/reel/CxHG0OmAvab', function (err, data) {
    console.log(data)
})
axios.get(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);

        // Exemplo: Scraping de títulos de todas as tags <h2>
        const titles = [];
        $('img');

        // console.log('Títulos encontrados:', $('img'));
    })
    .catch(error => {
        console.error('Erro ao fazer a requisição:', error);
    });
