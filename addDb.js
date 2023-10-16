const mongoose = require('mongoose');

// Dados que você deseja adicionar ao banco de dados
const data = [
    {
        "text": "Tocar o som de E o pix? Nada ainda?",
        "pathDownload": "/media/sounds/e-o-pix-nada-ainda.mp3"
    },
    {
        "text": "Tocar o som de we live we love we lie",
        "pathDownload": "/media/sounds/we-live-we-love-we-lie.mp3"
    },
    {
        "text": "Tocar o som de ZÉ DA MANGA ESTOURADO",
        "pathDownload": "/media/sounds/ze-da-manga-estourado.mp3"
    },
    {
        "text": "Tocar o som de Lula e Neymar #47",
        "pathDownload": "/media/sounds/lula-e-neymar-47.mp3"
    },
    {
        "text": "Tocar o som de Acessa ai (estourado)mt estourado",
        "pathDownload": "/media/sounds/acessa-ai-estourado-mt-estourado.mp3"
    },
    {
        "text": "Tocar o som de lula tira",
        "pathDownload": "/media/sounds/lula-tira.mp3"
    },
    {
        "text": "Tocar o som de que é isso moreno",
        "pathDownload": "/media/sounds/que-isso-moreno.mp3"
    },
    {
        "text": "Tocar o som de Jogo do botão",
        "pathDownload": "/media/sounds/psycho-scream-soundbible.mp3"
    },
    {
        "text": "Tocar o som de ROJÃO SUPER ESTOURADO!!!",
        "pathDownload": "/media/sounds/rojao-super-estourado.mp3"
    },
    {
        "text": "Tocar o som de Ai Chavinho",
        "pathDownload": "/media/sounds/nhonho_PdtFIbo.mp3"
    },
    {
        "text": "Tocar o som de É o brazino",
        "pathDownload": "/media/sounds/e-o-brazino.mp3"
    },
    {
        "text": "Tocar o som de Escreve e apaga",
        "pathDownload": "/media/sounds/escreve-e-apaga.mp3"
    },
    {
        "text": "Tocar o som de Tão torcendo contra meu progresso",
        "pathDownload": "/media/sounds/tao-torcendo-contra-meu-progresso.mp3"
    },
    {
        "text": "Tocar o som de WELCOME TO THE MATO ESTOURADO",
        "pathDownload": "/media/sounds/welcome-to-the-mato-estourado.mp3"
    },
    {
        "text": "Tocar o som de O homem Uma máquina Uma besta enjaulada",
        "pathDownload": "/media/sounds/o-homem-uma-maquina-uma-besta-enjaulada.mp3"
    },
    {
        "text": "Tocar o som de to tr4ns4ndo id1ota",
        "pathDownload": "/media/sounds/tot.mp3"
    },
    {
        "text": "Tocar o som de Cala boca e escuta o som do meu corsa",
        "pathDownload": "/media/sounds/cala-boca-e-escuta-o-som-do-meu-corsa.mp3"
    },
    {
        "text": "Tocar o som de A pia ta cheia de louça",
        "pathDownload": "/media/sounds/se-eu-largar-o-freio-oficial.mp3"
    },
    {
        "text": "Tocar o som de para de mandar audio to na ucrania",
        "pathDownload": "/media/sounds/para-de-mandar-audio-to-na-ucrania.mp3"
    },
    {
        "text": "Tocar o som de Risadinha de ladrão",
        "pathDownload": "/media/sounds/sabe-porque-as-meninas-dao-maior-valor-na-risada-de-ladrao-mp3cut.mp3"
    },
    {
        "text": "Tocar o som de manda foto na moral",
        "pathDownload": "/media/sounds/manda-foto-na-moral.mp3"
    },
    {
        "text": "Tocar o som de Louco e sonhador",
        "pathDownload": "/media/sounds/louco-e-sonhador.mp3"
    },
    {
        "text": "Tocar o som de como é amigo?",
        "pathDownload": "/media/sounds/como-e-amigo.mp3"
    },
    {
        "text": "Tocar o som de Olha a maconha",
        "pathDownload": "/media/sounds/olha-a-maconha.mp3"
    },
    {
        "text": "Tocar o som de Uma bixa foi detectada",
        "pathDownload": "/media/sounds/uma-bixa-foi-detectada.mp3"
    },
    {
        "text": "Tocar o som de Ai que delicia mickey",
        "pathDownload": "/media/sounds/ai-que-delicia-mickey.mp3"
    },
    {
        "text": "Tocar o som de Bem amigos, terminou!",
        "pathDownload": "/media/sounds/bem-amigos-terminou.mp3"
    },
    {
        "text": "Tocar o som de Neymar Errei Fui Moleque",
        "pathDownload": "/media/sounds/neymar-errei-fui-moleque.mp3"
    },
    {
        "text": "Tocar o som de Vasco da gama",
        "pathDownload": "/media/sounds/vasco-da-gama.mp3"
    },
    {
        "text": "Tocar o som de MUSICA DE SIGMA ESTOURADO",
        "pathDownload": "/media/sounds/musica-de-sigma-estourado.mp3"
    },
    {
        "text": "Tocar o som de 1 2 3 4 flamengo",
        "pathDownload": "/media/sounds/1-2-3-4-flamengo.mp3"
    },
    {
        "text": "Tocar o som de Som do Zap Zap estourado",
        "pathDownload": "/media/sounds/som-do-zap-zap-estourado.mp3"
    },
    {
        "text": "Tocar o som de BOM DIAAAAAAAAAAAAAAAA",
        "pathDownload": "/media/sounds/bom-diaaaaaaaaaaaaaaaa.mp3"
    },
    {
        "text": "Tocar o som de VAMO USA DROGA DISGRAÇAAAAAAA",
        "pathDownload": "/media/sounds/vamos-usar-droga-desgraca.mp3"
    },
    {
        "text": "Tocar o som de O novinha vi teu perfil",
        "pathDownload": "/media/sounds/o-novinha-vi-teu-perfil.mp3"
    },
    {
        "text": "Tocar o som de Abriu o áudio",
        "pathDownload": "/media/sounds/abriu-o-audio.mp3"
    },
    {
        "text": "Tocar o som de EA SPORTS TU É GAY",
        "pathDownload": "/media/sounds/ea-sports-tu-e-gay.mp3"
    },
    {
        "text": "Tocar o som de O novinha vi teu perfil",
        "pathDownload": "/media/sounds/o-novinha-vi-teu-perfil.mp3"
    },
    {
        "text": "Tocar o som de DE COPÃO NA MÃO (ESTOURADO)",
        "pathDownload": "/media/sounds/de-copao-na-mao-estourado.mp3"
    },
    {
        "text": "Tocar o som de gogogogogo",
        "pathDownload": "/media/sounds/gogogogogo.mp3"
    },
    {
        "text": "Tocar o som de Lá ele",
        "pathDownload": "/media/sounds/la-ele.mp3"
    },
    {
        "text": "Tocar o som de Tá tão engraçado hoje seu filha duma",
        "pathDownload": "/media/sounds/wndzp.mp3"
    },
    {
        "text": "Tocar o som de O moreno ta ingnorante",
        "pathDownload": "/media/sounds/o-moreno-ta-ingnorante.mp3"
    },
    {
        "text": "Tocar o som de SETEMBRO VAI ENTRAR O GROSSO ( LULA )",
        "pathDownload": "/media/sounds/setembro-vai-entrar-o-grosso-lula.mp3"
    },
    {
        "text": "Tocar o som de tão fugindo do foco do grupo",
        "pathDownload": "/media/sounds/tao-fugindo-do-foco-do-grupo-online-audio-converter.mp3"
    },
    {
        "text": "Tocar o som de taz mania",
        "pathDownload": "/media/sounds/whatsapp-audio-2020-06-02-at-16.mp3"
    },
    {
        "text": "Tocar o som de musica romantica",
        "pathDownload": "/media/sounds/musica-romantica.mp3"
    },
    {
        "text": "Tocar o som de Bom dia minha pika",
        "pathDownload": "/media/sounds/bom-dia-minha-pika.mp3"
    },
    {
        "text": "Tocar o som de Homem macaco",
        "pathDownload": "/media/sounds/homem-macaco_osDyZc7.mp3"
    },
    {
        "text": "Tocar o som de OLHA A MENSAGEM a",
        "pathDownload": "/media/sounds/olha-a-mensagem-a.mp3"
    },
    {
        "text": "Tocar o som de ELON MUSK UMA VEZ DISSE ESTOURADO",
        "pathDownload": "/media/sounds/elon-musk-uma-vez-disse-estourado.mp3"
    },
    {
        "text": "Tocar o som de nhonho chaves",
        "pathDownload": "/media/sounds/nhonho-chaves.mp3"
    },
    {
        "text": "Tocar o som de A risada do kiko",
        "pathDownload": "/media/sounds/a-risada-do-kiko.mp3"
    },
    {
        "text": "Tocar o som de 360 perfeito",
        "pathDownload": "/media/sounds/360-perfeito.mp3"
    },
    {
        "text": "Tocar o som de Cavalo",
        "pathDownload": "/media/sounds/cavalo.mp3"
    },
    {
        "text": "Tocar o som de Manda a foto",
        "pathDownload": "/media/sounds/manda-a-foto.mp3"
    },
    {
        "text": "Tocar o som de flamengoooo",
        "pathDownload": "/media/sounds/vinheta-flamengo_128k.mp3"
    },
    {
        "text": "Tocar o som de Smzinho \"meu herói não usa capa",
        "pathDownload": "/media/sounds/smzinho-meu-heroi-nao-usa-capa.mp3"
    },
    {
        "text": "Tocar o som de cebolinha elogios",
        "pathDownload": "/media/sounds/cebolinha-elogios.mp3"
    },
    {
        "text": "Tocar o som de Rapaz ele ta sem zap",
        "pathDownload": "/media/sounds/rapaz-ele-ta-sem-zap.mp3"
    },
    {
        "text": "Tocar o som de OOOH MY GOD",
        "pathDownload": "/media/sounds/oooh-my-god-vine-mp3cut.mp3"
    },
    {
        "text": "Tocar o som de tá torcendo contra meu progresso",
        "pathDownload": "/media/sounds/ta-torcendo-contra-meu-progresso.mp3"
    },
    {
        "text": "Tocar o som de vai dormir mama rola",
        "pathDownload": "/media/sounds/tmp2jtsawy8.mp3"
    },
    {
        "text": "Tocar o som de Tu conhece a Paola?",
        "pathDownload": "/media/sounds/tu-conhece-a-paola.mp3"
    },
    {
        "text": "Tocar o som de Z Z Z Z Z Z",
        "pathDownload": "/media/sounds/z-z-z-z-z-z.mp3"
    },
    {
        "text": "Tocar o som de Desliga o PC Agora!",
        "pathDownload": "/media/sounds/desliga-o-computador-agora.mp3"
    },
    {
        "text": "Tocar o som de Você tá fudido quando eu lhe pegar",
        "pathDownload": "/media/sounds/voce-ta-fudido-quando-eu-lhe-pegar.mp3"
    },
    {
        "text": "Tocar o som de Oh neymahh",
        "pathDownload": "/media/sounds/oh-neymahh.mp3"
    },
    {
        "text": "Tocar o som de Sonhei que você era uma coruja",
        "pathDownload": "/media/sounds/sonhei-que-voce-era-uma-coruja.mp3"
    },
    {
        "text": "Tocar o som de Ta, lapada seca do carai",
        "pathDownload": "/media/sounds/ta-lapada-seca-do-carai.mp3"
    },
    {
        "text": "Tocar o som de Larissa Manoel pedindo pix",
        "pathDownload": "/media/sounds/larissa-manoel-pedindo-pix.mp3"
    },
    {
        "text": "Tocar o som de indo ali bryan gay",
        "pathDownload": "/media/sounds/indo-ali-bryan-gay.mp3"
    }
];

// Função para adicionar os dados ao banco de dados
async function addDataToDatabase() {
    try {
        await mongoose.connect('mongodb://root:123456@localhost:27017/botwhats?authSource=admin', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const AudioMemeSchema = new mongoose.Schema({
            title: String,
            url: String,
        });

        const AudioMeme = mongoose.model('AudioMemes', AudioMemeSchema);
        // Itere sobre os dados e crie documentos para cada um
        for (const item of data) {
            const newAudioMeme = new AudioMeme({ title: item.text, url: item.pathDownload });
            await newAudioMeme.save();
        }

        console.log('Dados adicionados com sucesso ao banco de dados.');
    } catch (error) {
        console.error('Erro ao adicionar dados ao banco de dados:', error);
    } finally {
        mongoose.disconnect();
    }
}

// Chame a função para adicionar os dados
addDataToDatabase();
