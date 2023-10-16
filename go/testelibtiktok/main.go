package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strings"
	"time"
	"encoding/base64"
	"io"
)

type Video struct {
	URL string `json:"url"`
	ID  string `json:"id"`
}

func main() {
	fmt.Println(time.Now())
	url := "https://www.tiktok.com/@scout2015/video/6718335390845095173" // replace with your URL
	video, err := getVideoNoWM(url)
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}

	getBase64Video(video.URL)
	fmt.Println(time.Now())
}

	func getVideoNoWM(url string) (*Video, error) {
		id, err := getIdVideo(url)
		if err != nil {
			return nil, err
		}
		apiURL := fmt.Sprintf("https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=%s", id)
		req, _ := http.NewRequest("GET", apiURL, nil)
		req.Header.Set("User-Agent", "TikTok 26.2.0 rv:262018 (iPhone; iOS 14.4.2; en_US) Cronet")
		resp, err := http.DefaultClient.Do(req)
		if err != nil {
			return nil, err
		}
		defer resp.Body.Close()
		body, _ := ioutil.ReadAll(resp.Body)

		var data map[string]interface{}
		json.Unmarshal(body, &data)

		list := data["aweme_list"].([]interface{})
		video := list[0].(map[string]interface{})
		playAddr := video["video"].(map[string]interface{})["play_addr"].(map[string]interface{})
		urlList := playAddr["url_list"].([]interface{})
		urlMedia := urlList[0].(string)

		return &Video{URL: urlMedia, ID: id}, nil
	}

	func getIdVideo(url string) (string, error) {
		if !strings.Contains(url, "/video/") {
			return "", fmt.Errorf("invalid URL")
		}
		id := strings.Split(url, "/video/")[1]
		if len(id) > 19 {
			id = strings.Split(id, "?")[0]
		}
		return id, nil
	}

	func getBase64Video(url string) {
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
