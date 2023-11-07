// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const db = require('../db');
const { check, validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');

// Get all comments
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM comments';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Get comment by id
router.get('/:id', (req, res) => {
    const sql = `SELECT * FROM comments WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Start web server
const app = express();
app.use(express.json());
app.use('/comments', router);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

