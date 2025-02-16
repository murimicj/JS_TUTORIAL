//import package
const express = require('express');
const db = require('./database')
//initialize the server
const app = express();
const PORT = 4500;
//define routes
app.get('/', (request, response) => {
response.send('This is a webserver using ExpressJs')

})
//CRUD Operations(Create,Read, Update, Delete)

app.get('/CreateTable', (req,res)=>{
    const sql = `CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;
    db.query(sql, (error)=>{
        if(error){
            console.log('Error Creating Table',error);
        
        return res.status(500).send('ERROR CREATING TABLE')
        }
        res.status(201).send('Table created!')
    })
});



//launch the server
app.listen(PORT,()=>{
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
})