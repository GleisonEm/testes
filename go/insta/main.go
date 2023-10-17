package main

import (
	"net/http"
	"io/ioutil"
	"regexp"
	"encoding/json"
	"os"
	"io"
	"fmt"
)

type PageData struct {
	EntryData struct {
		PostPage []struct {
			Graphql struct {
				ShortcodeMedia struct {
					VideoUrl string `json:"video_url"`
				} `json:"shortcode_media"`
			} `json:"graphql"`
		} `json:"Post"`
	} `json:"entry_data"`
}

func main() {
	response, err := http.Get("https://www.instagram.com/reel/CyJM8xUL2gm/?igshid=MzRlODBiNWFlZA==") // Adicione a URL do Reel

	if err != nil {
		panic(err)
	}
	defer response.Body.Close()

	body, err := ioutil.ReadAll(response.Body)
	if err != nil {
		panic(err)
	}

	re := regexp.MustCompile(`window\._sharedData = ({.*);<\/script>`)
	matches := re.FindStringSubmatch(string(body))

	pageData := &PageData{}
	err = json.Unmarshal([]byte(matches[1]), pageData)
	if err != nil {
		panic(err)
	}

	videoUrl := pageData.EntryData.PostPage[0].Graphql.ShortcodeMedia.VideoUrl

	output, err := os.Create("out.mp4")
	if err != nil {
		panic(err)
	}
	defer output.Close()

	response, err = http.Get(videoUrl)
	if err != nil {
		panic(err)
	}
	defer response.Body()

	bytesWritten, err := io.Copy(output, response.Body)
	if err != nil {
		panic(err)
	}

	fmt.Printf("Download com sucesso! %d bytes escritos\n", bytesWritten)
}
