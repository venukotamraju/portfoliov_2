const express = require('express');
const app = express();

app.listen(3600,()=>console.log('listening on port 3600'));

app.set('view engine', 'ejs'); //setview engine to ejs
app.use(express.static('static')) // serve static files

app.get('/:require',(req,res)=>{
    const {require} = req.params;
    // console.log(req.params)
    // res.send(`viewing ${require}`)
    if(require === 'portfolio'){
        res.render('app.ejs')
    }else{
        res.render('notFound.ejs',{name:require})
    }
})