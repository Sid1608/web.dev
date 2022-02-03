const fs=require('fs');


const readStream = fs.createReadStream('./docs/blog3.txt',{encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt')

//in stream we will get small chunks of data at time so that we can start using them straightaway 
//.on event listener: we are listening to data event. callback will fire every time we will recieve buffer of data from stream
// readStream.on('data',(chunk)=>{
//     console.log("------NEW CHUNK------")
//     // console.log(chunk.toString())
//     console.log(chunk.toString())
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// })

//piping
//reading data from read stream and every time we get a chunk under the hood its piping that into the write streams of doing the same
readStream.pipe(writeStream);

//duplex Stream: we can read and write through it