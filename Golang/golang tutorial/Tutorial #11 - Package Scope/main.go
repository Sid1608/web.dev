package main

import (
	"fmt"
)

var score=99.5
//entry point
func main(){
	//THIS IS NOT INSIDE PACKAGE SCOPE
	// var score=99.5
	sayHello("mario")
	for _,v:=range points{
		fmt.Println(v)
	}
	showScore()
}

// go run main.go greetings.go