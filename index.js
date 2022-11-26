const { MongoClient, ServerApiVersion } = require('mongodb');
const url = "mongodb+srv://punyawat:M9tFEfh0WTgXSvAm@users.1bxfvsg.mongodb.net/users";
const mongoose = require('mongoose');

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect(url,{useNewUrlParser: true},{useUnifiedTopology : true},{serverApi: ServerApiVersion.v1})
const notesSchema = {
    name: String,
    ex: String,
    locate: String,
    sex: String,
    prefer: String
}

const Note = mongoose.model("Note",notesSchema);


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use(express.static(__dirname + '/Page'));

app.get('/match.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/match.html'));
});

app.post("/",function(req,res){
    let newNote = new Note({
        name: req.body.username,
        ex: req.body.user_ex,
        locate: req.body.user_loc,
        sex: req.body.user_sex,
        prefer: req.body.user_prefer
    })
    newNote.save();
    res.redirect('/match.html')
})



server.listen(3000, () => {
  console.log('listening on *:3000');
});

