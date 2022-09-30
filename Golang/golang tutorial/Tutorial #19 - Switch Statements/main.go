package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func getInput(prompt string, r* bufio.Reader)(string,error){
	fmt.Print(prompt)
	input,err:=r.ReadString('\n')

	return strings.TrimSpace(input),err
}

func createBill() bill{
	reader:=bufio.NewReader(os.Stdin)

	// fmt.Print("Create a new bill name: ")
	// name,_:=reader.ReadString('\n')
	// name=strings.TrimSpace(name)
	name,_:=getInput("Create a new bill name: ",reader)
	b:=newBill(name)
	fmt.Println("created the bill - ",b.name)
	return b
}
func promptOptions(b bill){
	reader:=bufio.NewReader(os.Stdin)
	opt,_:=getInput("Choose option (a - add item, s - save bill, t - tip): ",reader)
    // fmt.Println(opt)
	switch opt {
	case "a":
		name,_:=getInput("Item name: ",reader)
		price,_:=getInput("Item price: ",reader)
		
		fmt.Println(name,price)
	case "t":
		tip,_:=getInput("Enter tip amount ($): ",reader)
		fmt.Println(tip)
	case "s":
		fmt.Println("you chose s")
	default:
		fmt.Println("that was not a valid option...")
		promptOptions(b)
	
	}

}
func main() {
	mybill:=createBill()
	promptOptions(mybill)
	fmt.Print(mybill)
}