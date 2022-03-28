const express = require('express');
const cors = require('cors');
require('dotenv').config()
const db = require('../server/db/db-connection.js'); 

const app = express();

const PORT = 4002;
app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My ExpressJS' });
});

//create the get request
app.get('/api/contacts', cors(), async (req, res) => {
   
    try{
        const { rows: contacts } = await db.query('SELECT * FROM contacts');
        res.send(contacts);
    } catch (e){
        return res.status(400).json({e});
    }
});

//create the POST request
app.post('/api/contacts', cors(), async (req, res) => {
    const newContact = { firstname: req.body.firstname, lastname: req.body.lastname, phonenumber: req.body.phonenumber, emailaddress: req.body.emailaddress}
    console.log([newContact.firstname, newContact.lastname]);
    const result = await db.query(
        'INSERT INTO contacts(firstname, lastname, phonenumber, emailaddress) VALUES($1, $2,$3,$4) RETURNING *',
        [newContact.firstname, newContact.lastname, newContact.phonenumber, newContact.emailaddress]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});