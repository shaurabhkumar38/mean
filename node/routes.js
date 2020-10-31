const express = require('express');
const app = express();
var data = {
    name:'shaurabh',
    status:'programmer'
}
var wish =['code','sleep']
module.exports = (app)=>{

    app.get('/', (req, res)=>{
        res.render('home',{wish:wish})
        })
        app.get('/about', (req, res)=>{
            res.render('about',{data:data})
        
        })
        app.post('/sent',(req,res)=>{
            //console.log(req.body.item)
            wish.push(req.body.item)
            res.send(wish)
        })
        app.delete('/remove/:id',(req, res)=>{
            wish = wish.map(item=>{
                if(item!=req.params.id){
                    return item
                }
            })
            res.send(data)
        })
        
}