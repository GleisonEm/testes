package main

import (
	"log"
	"os"

	"github.com/go-audio/audio"
	"github.com/go-audio/wav"
)

func main() {
	opusFile, err := os.Open("audio.opus")
	if err != nil {
		log.Fatal(err)
	}
	defer opusFile.Close()

	opusBuffer := make([]byte, 1024)
	opusData := []byte{}
	for {
		n, err := opusFile.Read(opusBuffer)
		if err != nil {
			break
		}
		opusData = append(opusData, opusBuffer[:n]...)
	}

	opusBufferReader := audio.NewBufferReader(opusData)

	opusDecoder := audio.NewDecoder(opusBufferReader)
	defer opusDecoder.Close()

	wavFile, err := os.Create("audio.wav")
	if err != nil {
		log.Fatal(err)
	}
	defer wavFile.Close()

	wavEncoder := wav.NewEncoder(wavFile, int(opusDecoder.SampleRate()), int(opusDecoder.BitDepth()), int(opusDecoder.NumChans()), 1)
	defer wavEncoder.Close()

	wavBuffer := &audio.IntBuffer{
		Data:   make([]int, wavEncoder.WAVBufferSize()),
		Format: &audio.Format{NumChannels: int(opusDecoder.NumChans()), SampleRate: opusDecoder.SampleRate()},
	}

	for {
		err = opusDecoder.Decode(wavBuffer)
		if err != nil {
			break
		}
		err = wavEncoder.Write(wavBuffer)
		if err != nil {
			break
		}
	}

	log.Println("Arquivo de áudio .wav criado com sucesso!")
}
