const { Builder, By, Key, until } = require('selenium-webdriver');

async function extractData() {
    // Crie uma instância do navegador (nesse caso, o Chrome)
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        // Abra a página da web
        await driver.get('https://www.myinstants.com/pt/index/br/');

        // Encontre o botão usando o XPath fornecido
        const button = await driver.findElement(By.xpath('//*[@id="instants_container"]/div[1]/button'));

        // Extraia o valor do atributo 'onclick' do botão
        const onclickAttributeValue = await button.getAttribute('onclick');

        // Use uma expressão regular para extrair o primeiro argumento da função 'play'
        const match = /play\('([^']+)'/i.exec(onclickAttributeValue);
        const primeiroArgumento = match ? match[1] : null;

        // Extraia o valor do atributo 'title'
        const title = await button.getAttribute('title');

        console.log('Primeiro argumento da função play:', primeiroArgumento);
        console.log('Valor do atributo title:', title);
    } finally {
        // Feche o navegador
        await driver.quit();
    }
}

// Chame a função para extrair os dados
extractData();
