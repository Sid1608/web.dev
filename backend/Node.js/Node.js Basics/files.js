const fs=require("fs");

//reading files 
/*
Buffer is just a package of data that's been sent to us.
It is asynchronus and it will take some time to do and also
it doesn't block our code 
*/
// fs.readFile('./docs/blog1.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString());
// })
// console.log("Last line");

//writing files
//overwrite the file if exits or create a file if does not exist
// fs.writeFile('./docs/blog1.txt','hello world!',()=>{
//     console.log('file was written');
// })

// fs.writeFile('./docs/blog2.txt','hello world!',()=>{
//     console.log('file was written');
// })

//directories
/*
fs.mkdir('./assets',(err)=>{
    if(err) {
        console.log(err);
    }

    console.log("folder was created");

})

If folder already exists
[Error: EEXIST: file already exists, mkdir 'D:\WebDev\Web-projects\web.dev\backend\node\assets'] {
  errno: -4075,
  code: 'EEXIST',
  syscall: 'mkdir',
  path: 'D:\\WebDev\\Web-projects\\web.dev\\backend\\node\\assets'
}
*/
//sync means it will block the code and take very short amount of time
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err) {
            console.log(err);
        }
    
        console.log("folder was created");
    
    })
}else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}
//deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
        
    })
}