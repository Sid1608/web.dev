package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
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
		p,err:=strconv.ParseFloat(price,64)
		if err != nil{
			fmt.Println("The price must be a number")
			promptOptions(b)
		}
		b.addItem(name,p)
		fmt.Println("Item added - ",name, price)
		promptOptions(b)
	case "t":
		tip,_:=getInput("Enter tip amount ($): ",reader)
		t,err:=strconv.ParseFloat(tip,64)
		if err != nil{
			fmt.Println("The tip must be a number")
			promptOptions(b)
		}
		b.updateTip(t)
		fmt.Println("tip updated - ",tip)
		promptOptions(b)
	case "s":
		fmt.Println("you saved the file",b.name)
		b.save()
	default:
		fmt.Println("that was not a valid option...")
		promptOptions(b)
	
	}

}
func main() {
	mybill:=createBill()
	promptOptions(mybill)
	// fmt.Print(mybill)
}