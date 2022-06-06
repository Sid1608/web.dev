package main

import "fmt"

func main(){
	age:=35
	name:="siddharth"
	//Print
	fmt.Print("hello, ")//do not add new line
	fmt.Print("world! \n")
	fmt.Print("new line \n")

	//Println
	fmt.Println("hello ninjas!")
	fmt.Println("goodbye ninjas")
	fmt.Println("my age is",age, "and my name is",name)

	//Printf(formatted string)
	//%_ format specifier
	//%q->ideally for strings
	//%v for var
	fmt.Printf("my age is %v and my name is %v \n",age,name)
	fmt.Printf("my age is %q and my name is %q \n",age,name)
	fmt.Printf("age is of type %T",age)//%T prints the type of variable
	fmt.Printf("you scored %f points! \n",225.55)
	fmt.Printf("you scored %0.1f points! \n",225.55)//line the no of decimal point we ouptut


	//Sprintf: similar to printf except it save the string in variable
	var str=fmt.Sprintf("my age is %v and my is %v \n",age,name)//return formated string
	fmt.Println("the saved string is:",str)
}