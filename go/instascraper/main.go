// controllers/search_controller.go

package main

import (
	"github.com/antchfx/htmlquery"
)

func main() {

	searchURL := "https://www.instagram.com/reel/CyJM8xUL2gm/?igshid=MzRlODBiNWFlZA=="
	doc, err := htmlquery.LoadURL(searchURL)
	if err != nil {
		println("erro ao analisar o html")
		return
	}

	button := htmlquery.FindOne(doc, "//*[@id="mount_0_0_7T"]/div/div/div[2]/div/div/div/div[1]/section/main/div[1]/div[1]/article/div/div[1]/div/div/div/div/div/div/div/video")
	if button == nil {
	println("Botão não encontrado")
		return
	}
	println(htmlquery.OutputHTML(button, true));
}