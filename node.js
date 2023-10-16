const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

async function convertImageToBase64(imagePath, outputPath) {
    try {
        // Ler a imagem
        const imageData = await readFileAsync(imagePath);

        // Converter para Base64
        const base64String = imageData.toString('base64');

        // Salvar a string Base64 em um arquivo
        await writeFileAsync(outputPath, base64String, 'utf8');

        console.log('Imagem convertida para Base64 e salva em', outputPath);
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}

// Caminho para a imagem de entrada
const imagePath = './002018a1-119e-43d4-ae35-b5833adcb60e.png';

// Caminho para o arquivo de saída
const outputPath = './output.txt';

convertImageToBase64(imagePath, outputPath);