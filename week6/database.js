//import

const mysql = require('mysql2');

//create connection
const connect = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: ''
})

//connect
connect.connect((error)=>{
    if(error){
        console.log('An error occured:',error.stack)
        return;
    }
    console.log('DB connected');
});

//export connection
module.exports = connect