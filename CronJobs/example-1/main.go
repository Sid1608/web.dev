package main

import (
	"fmt"
	"io"
	"net/http"

	"github.com/gin-gonic/gin"
	cron "gopkg.in/robfig/cron.v2"
)

func main() {
	RunCron()
	initiateGin()
}

func RunCron() {
	c := cron.New()
	c.AddFunc("@every 00h00m10s", SendMessage)
	c.Start()
}

func SendMessage() {
	resp, err := http.Get("http://localhost:8000/sent")
	if err != nil {
		fmt.Println("Error from cron", err)
	}
	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Error from ReadAll in cron", err)
	}
	fmt.Println(string(body)) //body is in bytes
}

func initiateGin() {
	r := gin.Default()
	r.GET("/sent", SendHelloMessage)
	r.Run(":8000")
}

func SendHelloMessage(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "hello"})
}

/*
	steps
	  - go mod init cron-job-example-1
	  - go mod tidy
	  - go get github.com/gin-gonic/gin
	  - run on browser http://localhost:8000/sent
*/
