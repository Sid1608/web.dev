package main

import (
	"fmt"
	"sort"
	"strings"
)

func main(){
	greeting:="hello there friends!"
	fmt.Println(strings.Contains(greeting,"hello"))//true
	fmt.Println(strings.ReplaceAll(greeting,"hello","hi"))// hi there friends! returns hi there friends!
	fmt.Println(strings.ToUpper(greeting))//HELLO THERE FRIENDS! returns new string doesnotr alre old one
	fmt.Println(strings.Index(greeting,"ll"))//2 wil look through the string and it's going to find the positon where it finds
	fmt.Println(strings.Split(greeting," "))//[hello there friends!] splitup the string 
	fmt.Println("orignal string value =",greeting)


	ages:=[]int{45,20,35,30,75,60,50,25}
	sort.Ints(ages)//alter the orignal slice
	fmt.Println(ages)//[20 25 30 35 45 50 60 75]

	index:=sort.SearchInts(ages,30)//return positon of 30 inside ages
	fmt.Println(index)//2
	//SearchInts(ages,90)8  

	names:=[]string{"yoshi","mario","peach","bowser","luigi"}

	sort.Strings(names)
	fmt.Println(names)
	fmt.Println(sort.SearchStrings(names,"bowser"))//0

}	
