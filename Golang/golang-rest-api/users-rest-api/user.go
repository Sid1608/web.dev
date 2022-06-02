package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)
var DB *gorm.DB
var err error
const DNS="root:siddharth@tcp(127.0.0.1:3306)/userdb?charset=utf8&parseTime=True&loc=Local"
type User struct{
	gorm.Model
	FirstName string `json:"firstname"`
	LastName string `json:"lastname"`
	Email string `json:"email"`
}
func InitialMigration(){
	DB,err=gorm.Open(mysql.Open(DNS),&gorm.Config{})
	if err!=nil {
		fmt.Println(err.Error())
		panic("Cannot connect to DB")
	}
	DB.AutoMigrate(&User{})
}
func GetUsers(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	var users []User
	DB.Find(&users)
	json.NewEncoder(w).Encode(users)

}
func GetUser(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	params:=mux.Vars(r)
	var user []User
	DB.First(&user,params["id"])
	json.NewEncoder(w).Encode(user)
}
func CreateUser(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	var user User 
	//convert to the type of var provided in Decode
	json.NewDecoder(r.Body).Decode(&user)
	DB.Create(&user)
	json.NewEncoder(w).Encode(user)

}
func UpdateUser(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	params:=mux.Vars(r)
	var user []User
	DB.First(&user,params["id"])
	json.NewDecoder(r.Body).Decode(&user)
	DB.Save(&user)
	json.NewEncoder(w).Encode(user)


}
func DeleteUser(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	params:=mux.Vars(r)
	var user []User
	DB.Delete(&user,params["id"])
	json.NewEncoder(w).Encode("user is deleted successfully")
}




