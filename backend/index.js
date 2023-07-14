const express = require('express');
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))


const mysql = require('mysql')
const DB_CONFIG = {
    host: 'localhost',
    database: 'backend_users',
    user: 'root',
    password: 'password',
    debug: false,
    ssl: false,
}

const db = mysql.createPool(DB_CONFIG)

app.get('/users', (req, res) => {
    db.query('select * from users;', (err, data) =>{
        res.json(data)
    })
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    db.query(`select * from users where id = ${id};`, (err, data) => {
        res.json(data)
    })
})

app.post('/users', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    db.query(`insert into users (name, email, phone) values ('${name}', '${email}', '${phone}')`, (err, data) => {
        console.log(err)
        res.json(data)
    })
})

app.put('/users/:id', (req, res) => {
    const id = req.params.id
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    db.query(`update users set name = '${name}', email = '${email}', phone = '${phone}' where id = ${id}`, (err, data)=> {
        res.json(data)
    })
})

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    db.query(`delete from users where id = ${id}`, (err, data)=> {
        res.json(data)
    })
})



app.use('/', (req, res) =>{
    res.json({
        message: 'helllllo from server'
    })
})

const PORT = 4000
app.listen(PORT, () => {
    console.log('server runnig on port 4000')
})