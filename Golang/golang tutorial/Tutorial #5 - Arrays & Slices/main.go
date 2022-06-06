package main

import "fmt"

func main(){
	var ages [3]int=[3]int{20,25,30}
	// var ages2=[3]int{20,22,32}
	names:=[4]string{"yoshi","mario","peach","bowser"}
	names[1]="luigi"
	fmt.Println(ages,len(ages))
	fmt.Println(names,len(names))
	

	//slices use arrays under the hood
	var scores=[]int{100,50,60}
	scores[2]=25
	scores=append(scores,85)//this function doesnot change the score variable but retun new slice
	fmt.Println(scores,len(scores))

	//slice ranges
	rangeOne:=names[1:3]//not inlcue 3
	rangeTwo:=names[2:]
	rangeThree:=names[:3]
	fmt.Println(rangeOne,rangeTwo,rangeThree)//[luigi peach] [peach bowser] [yoshi luigi peach]
	rangeOne=append(rangeOne,"koopa")
	fmt.Println(rangeOne)//[luigi peach koopa]
	
}	
/*

[20 25 30] 3
[yoshi mario peach bowser] 4


[20 25 30] 3
[yoshi luigi peach bowser] 4
[100 50 25 85] 4
*/