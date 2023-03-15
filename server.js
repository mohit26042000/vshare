const express =require('express');
const app = express();
const path =require('path');

const PORT =process.env.PORT || 3001;
app.use(express.static('public'));
app.use(express.json());


app.set('views', path.join(__dirname,'/views'));

app.set('view engine','ejs');

app.get('/', function (req, res) {
   
    return res.render('index'); 
});

app.listen(PORT ,()=>{
    console.log(`Listening on port ${PORT}`);
})