const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const Blog=require("./models/blog");
const app = express() ;
//connect to mongodb
const dbURI="";
mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true})
    .then((result)=>app.listen(3000))//only listen for request after connection with mongodb has been established.
    .catch((err)>console.log(err))

app.set('view engine','ejs');

app.listen(3000);


app.use(express.static('public'));
app.use(morgan('dev'));

//mongoose and mongo sandbox routes
// app.get('/add-blog',(req,res)=>{
//     const blog=new Blog({
//         title:'new blog',
//         snippet:'about my new blog',
//         body:'more about my new blog'
//     })
//     blog.save()
//         .then((result)=>{
//             res.send(result)
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
// })

// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })
// app.get('/single-blog',(req,res)=>{
//     Blog.findById('')
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
// })
app.get('/',(req,res)=>{
    res.redirect('/blogs');
})
// app.use((req,res,next)=>{
//     console.log('In the next middleware');
//     next();
// })
app.get('/about',(req,res)=>{
    
    res.render('about',{title:'About'});
})
//blog routes
app.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt:-1})
        .then((result)=>{
            res.render('index',{title:'All Blogs', blogs:result});
        })
        .catch(err=>{
            console.log(err);
        })
})
app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create a new blog'});
})
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
})