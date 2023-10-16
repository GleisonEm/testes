const { Builder, By } = require('selenium-webdriver');
const fs = require('fs'); // Importe o módulo fs para trabalhar com arquivos

async function extractData() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.myinstants.com/pt/index/br/');

        const container = await driver.findElement(By.id('instants_container'));
        const divs = await container.findElements(By.css('div'));
        const data = [];

        for (let i = 0; i < 100 && i < divs.length; i++) {
            const div = divs[i];
            const element = await div.findElement(By.css('a'));
            const hrefValue = await element.getAttribute('href');
            const textValue = await element.getText();
            data.push({ href: hrefValue, text: textValue });
        }

        // Salve os dados em um arquivo JSON
        fs.writeFileSync('dados.json', JSON.stringify(data, null, 2));
        console.log('Dados salvos em dados.json');
    } finally {
        await driver.quit();
    }
}

extractData();
