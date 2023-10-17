const axios = require('axios');
const fs = require('fs');
const url = 'https://www.instagram.com/reel/CyJM8xUL2gm/?igshid=MzRlODBiNWFlZA==' // Substitua pela URL do vídeo de Reels desejado.

axios.get(url)
    .then(response => {
        const data = response.data;
        const regex = /window\._sharedData = ({.*);<\/script>/gm;
        const str = regex.exec(data)[1];
        const json = JSON.parse(str);

        let media = null;
        try {
            media = json.entry_data.PostPage[0].graphql.shortcode_media.video_url;
        } catch (err) {
            console.error("Erro ao procurar o vídeo:", err);
        }

        if (media) {
            axios.get(media, { responseType: 'stream' })
                .then(response => {
                    response.data.pipe(fs.createWriteStream('out.mp4'));
                })
                .catch(err => console.error("Erro ao baixar o vídeo:", err));
        }
    })
    .catch(err => console.error("Erro ao processar a URL:", err));
