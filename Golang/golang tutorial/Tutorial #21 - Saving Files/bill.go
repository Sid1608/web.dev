package main

import (
	"fmt"
	"os"
)

type bill struct {
	name  string
	items map[string]float64
	tip   float64
}

//make new bills

func newBill(name string) bill {
	b := bill{
		name:  name,
		items: map[string]float64{},
		tip:   0,
	}
	return b
}

//format the bill
//Reciever Funciton: function only associated with bill object
func (b *bill) format() string {
	fs := "Bill breakdown: \n"
	var total float64 = 0

	//list items
	for k, v := range b.items {
		fs += fmt.Sprintf("%-25v ....$%v \n", k+":", v)
		total+=v
	}
	fs+=fmt.Sprintf("%-25v ...$%v\n","tip:",b.tip)
	fs+=fmt.Sprintf("%-25v ...$%0.2f","total:",total+b.tip)
	return fs
}

//update tip
//here b is copy of our orignal bill not pointing to orignal bill
//here only making copy of pointer
func (b *bill) updateTip(tip float64){
	//go will automatically dereference it
	//for structs pointers are automatically derefernced
	b.tip=tip
}

//add an item to the bill
func (b *bill) addItem(name string,price float64){
	b.items[name]=price
}

//save bill
func (b *bill) save(){
	//when we save data to files we need to save the data in byte slice fomate 
	data:=[]byte(b.format())//byte slice
	err:=os.WriteFile("bills/"+b.name+".txt",data,0644)
	if err!=nil{
		panic(err)
	}
	fmt.Println("buk was saved to file")
}