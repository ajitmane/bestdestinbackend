const mysql = require('mysql');

const conn = mysql.createPool({
    connectionLimit:10,
    password:'',
    user:'root',
    database:'test',
    host:'localhost',
    port:'3306'
})

let db = {};

db.all = () => {
    return new Promise((resolve, reject) =>{
        conn.query('select * from test', (err, results) =>{
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }
        })
    })
}

db.one = (id) => {
    return new Promise((resolve, reject) =>{
        conn.query('select * from test where id = ?', [id], (err, results) =>{
            if(err){
                return reject(err);
            }
            else{
                return resolve(results[0]);
            }
        })
    })
}

module.exports = db;