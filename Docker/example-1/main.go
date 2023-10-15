package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/get", HelloWorld)
	r.Run(":8000")
}

func HelloWorld(c *gin.Context) {
	fmt.Println("Hello World")
	c.JSON(http.StatusOK, gin.H{"message": "hello docker"})
}
