package main

import (
	"fmt"
)
// main function is only created once in your program 
//same pacakge means they are part of the same program
var points=[]int{20,90,100,45,70}
func sayHello(n string){
	fmt.Println("hello",n)
}

func showScore(){
	fmt.Println("you scored this many points:",score)
}