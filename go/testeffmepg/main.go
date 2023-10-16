package main

import (
	"log"
	"os/exec"
)

func main() {
	log.Printf("Iniciando conversao")
	inputFilePath := "audio.opus"
	outputFilePath := "saida.wav"
	cmd := exec.Command("C:\\ffmpeg\\bin\\ffmpeg.exe", "-i", inputFilePath, outputFilePath)

	err := cmd.Run()
	if err != nil {
		log.Fatal(err)
	}
	log.Println(".opus file has been converted to .wav successfully!")
}
