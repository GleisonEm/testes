package main

import (
	"encoding/base64"
	"io"
	"net/http"
	"os"
)

func main() {
	url := "https://v16m-default.akamaized.net/1a0c0d3369070354b2a01a6dd6a049ea/652990ed/video/tos/useast2a/tos-useast2a-pve-0068/okilwQJnkBnKf7UeDBQp9AIBEBMub7pQZREdzC/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=966&bt=483&bti=Ozk3QGo4dik7OzlmMzAuYCM6bS4xMDo%3D&cs=0&ds=3&ft=iJOG.ytWZks0PD1lZJ5xg9ws9saykEeC~&mime_type=video_mp4&qs=0&rc=NztpaWk3O2VmOjs4M2hoZkBpM3lyZTg6Zmo8bTMzNzczM0AvX2JfNWI2NWExXjYzNDVgYSNlaDEtcjRnZmtgLS1kMTZzcw%3D%3D&l=20231013124749510B86F73BCAC302DCD8&btag=e00088000" // Substitua pela URL direta do vídeo
	response, err := http.Get(url)
	if err != nil {
		panic(err)
	}
	defer response.Body.Close()

	file, err := os.Create("tiktokvideo_base64.txt") // Nome do arquivo de saída
	if err != nil {
		panic(err)
	}
	defer file.Close()

	encoder := base64.NewEncoder(base64.StdEncoding, file)
	defer encoder.Close()

	_, err = io.Copy(encoder, response.Body)
	if err != nil {
		panic(err)
	}

	println("Vídeo convertido para base64 e salvo com sucesso.")
}

// package main

// import (
//     "io"
//     "net/http"
//     "os"
// )

// func main() {
//     url := "https://v16m-default.akamaized.net/1a0c0d3369070354b2a01a6dd6a049ea/652990ed/video/tos/useast2a/tos-useast2a-pve-0068/okilwQJnkBnKf7UeDBQp9AIBEBMub7pQZREdzC/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=966&bt=483&bti=Ozk3QGo4dik7OzlmMzAuYCM6bS4xMDo%3D&cs=0&ds=3&ft=iJOG.ytWZks0PD1lZJ5xg9ws9saykEeC~&mime_type=video_mp4&qs=0&rc=NztpaWk3O2VmOjs4M2hoZkBpM3lyZTg6Zmo8bTMzNzczM0AvX2JfNWI2NWExXjYzNDVgYSNlaDEtcjRnZmtgLS1kMTZzcw%3D%3D&l=20231013124749510B86F73BCAC302DCD8&btag=e00088000" // Substitua pela URL direta do vídeo
//     response, err := http.Get(url)
//     if err != nil {
//         panic(err)
//     }
//     defer response.Body.Close()

//     file, err := os.Create("tiktokvideo.mp4") // Nome do arquivo de saída
//     if err != nil {
//         panic(err)
//     }
//     defer file.Close()

//     _, err = io.Copy(file, response.Body)
//     if err != nil {
//         panic(err)
//     }

//     println("Vídeo baixado com sucesso.")
// }
