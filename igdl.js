const axios = require('axios');
const fs = require('fs');

async function downloadAndSaveVideo(url) {
    try {
        // Realiza a requisição GET para obter o vídeo
        const response = await axios.get(url, {
            responseType: 'arraybuffer'
        });

        // Converte o vídeo para base64
        const videoBase64 = Buffer.from(response.data, 'binary').toString('base64');

        // Salva o vídeo na raiz
        fs.writeFileSync('video_base64.txt', videoBase64, 'utf-8');

        console.log('Vídeo baixado e salvo com sucesso!');
    } catch (error) {
        console.error('Ocorreu um erro ao baixar o vídeo:', error.message);
    }
}

const videoUrl = 'https://download.ig-10-data.xyz/ig/1697588430/07c5d50946c8b7ca3a8d1a9c7dde22ab6ac02124a39812b87b09d2fa59808139?file=aHR0cHM6Ly9zY29udGVudC5jZG5pbnN0YWdyYW0uY29tL3YvdDUwLjI4ODYtMTYvMzcwMDEwNzQxXzg2MDE0Nzg2MjUxMTYxM18zNDcyMzIzMDk2NTc2MTkxMTM1X24ubXA0P19uY19odD1zY29udGVudC5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MTA1Jl9uY19vaGM9dFlRYkJlTWZCVndBWDg2N0xsTiZlZG09QVBzMTdDVUJBQUFBJmNjYj03LTUmb2g9MDBfQWZCOXlMYWZ5NmFuYkk0TDlLbmtfbW50YTB0eG14dUVKZFhkWEVldjczN3c5dyZvZT02NTMwRUUxMCZfbmNfc2lkPTEwZDEzYiZuYW1lPVNhdmVJRy5BcHBfMzIwOTE1MzE2MjE1NjkyNzAxNC5tcDQ'
downloadAndSaveVideo(videoUrl);


