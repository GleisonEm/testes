const { Builder, By, Key, until } = require('selenium-webdriver');
const fs = require('fs');

async function extractData() {
    // Crie uma instância do navegador (nesse caso, o Chrome)
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        // Abra a página da web
        await driver.get('https://www.myinstants.com/pt/index/br/');

        // const data = [];

        // for (let i = 0; i < 100; i++) {
        //     const element = await driver.findElement(By.xpath('//*[@id="instants_container"]/div[' + (i + 1) + ']/a'));
        //     // Extraia o valor do atributo href
        //     const hrefValue = await element.getAttribute('href');
        //     // Extraia o texto dentro da tag <a>
        //     const textValue = await element.getText();
        //     data.push({ href: hrefValue, text: textValue });
        // }
        // Encontre o elemento com o XPath fornecido
        const divs = await driver.findElements(By.xpath('//*[@id="instants_container"]/div/button'));

        // Crie um array para armazenar os dados
        const data = [];

        // Limite a iteração para as 100 primeiras divs ou menos
        // const limite = Math.min(100, divs.length);
        console.log('QUANTIDADE DE DIVS:', divs.length)
        for (let i = 0; i < divs.length; i++) {
            const button = divs[i];

            // Encontre o botão usando o XPath fornecido
            // const button = await driver.findElement(By.xpath('//*[@id="instants_container"]/div[1]/button'));

            // Extraia o valor do atributo 'onclick' do botão
            const onclickAttributeValue = await button.getAttribute('onclick');

            // Use uma expressão regular para extrair o primeiro argumento da função 'play'
            const match = /play\('([^']+)'/i.exec(onclickAttributeValue);
            const primeiroArgumento = match ? match[1] : null;
            const title = await button.getAttribute('title');
            data.push({ text: title, pathDownload: primeiroArgumento });
        }

        fs.writeFileSync('dados.json', JSON.stringify(data, null, 2));
        console.log('Dados salvos em dados.json');
        // Imprima os valores extraídos
    } finally {
        // Feche o navegador
        await driver.quit();
    }
}

// Chame a função para extrair os dados
extractData();
