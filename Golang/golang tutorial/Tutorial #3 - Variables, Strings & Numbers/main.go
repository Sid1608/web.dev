package main

import "fmt"

var someName="hello"
// someName:="hello"
func main(){
	//string
	var nameOne string ="mario"
	var nameTwo="luigi"
	var nameThree string
	fmt.Println(nameOne,nameTwo,nameThree)
	nameOne="peach"
	nameThree="bowser"
	fmt.Println(nameOne,nameTwo,nameThree)
	nameFour:="siddharth"//cannot use outside function
	
	fmt.Println(nameFour)

	//ints
	var ageOne int =20
	var ageTwo=30
	ageThree:=40
	fmt.Println(ageOne,ageTwo,ageThree)
	//bits and memory
	var numOne int8=25
	var numTwo int8=-128
	var numThree uint8=25
	var numFour uint16=256

	var scoreOne float32 =25.98
	var scoreTwo float64=883759237594363564868547567.7

}