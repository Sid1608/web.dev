package main

import(
	"fmt"
)


//maps: like python key can be of multiple different types they
//could be strings or integer or floats etc but all of the
// keys in a single map must have the same type and also 
// all of the values in a single map must have the same type
func main(){
             //map[type of keys]type of values
	menu:=map[string]float64{
		"soup":4.99,
		"pie":7.99,
		"salad":6.99,
		"toffee pudding":3.55,
	}
	fmt.Println(menu)
	fmt.Println(menu["pie"])
	// map[pie:7.99 salad:6.99 soup:4.99 toffee pudding:3.55]
	// 7.99

	//looping maps 
	for k,v:=range menu{
		fmt.Println(k," ",v)
	}

	//ints as key type    
	phonebook:=map[int]string{
		267584967:"mario",
		367584967:"luigi",
		467584967:"peach",

	}
	fmt.Println(phonebook)
	fmt.Println(phonebook[267584967])

	//update an item inside the map   
	
	phonebook[267584967]="bowser"
	fmt.Println(phonebook[267584967])

}