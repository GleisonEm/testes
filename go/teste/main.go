package main

import (
	"encoding/base64"
	"log"
	"os"
)

func main() {
	log.Printf("Iniciando conversao")
	// Nome do arquivo de texto contendo a string base64
	nomeArquivo := "base.txt"

	// Ler o conteúdo do arquivo
	base64Audio, err := os.ReadFile(nomeArquivo)
	if err != nil {
		log.Fatalf("Erro ao ler o arquivo: %v", err)
	}

	// Decodificar a string base64 em bytes
	audioBytes, err := base64.StdEncoding.DecodeString(string(base64Audio))
	if err != nil {
		log.Fatalf("Erro ao decodificar a string base64: %v", err)
	}

	// Salvar o áudio Opus na raiz do projeto
	nomeArquivoSaida := "audio.opus"
	err = os.WriteFile(nomeArquivoSaida, audioBytes, 0644)
	if err != nil {
		log.Fatalf("Erro ao salvar o arquivo de áudio: %v", err)
	}

	log.Printf("Conversão concluída: %s\n", nomeArquivoSaida)
}
