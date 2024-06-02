const connection = require('../Database/mysql')

// Fetch All Data
exports.view = (req, res) => {
    connection.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return res.status(500).send('Error connecting to database');
        }
        // console.log('MySQL connected');

        connection.query("SELECT * FROM STUDENTS", (err, records) => {

            connection.release();

            if (!err) {
                res.status(200).send(records);
            } else {
                console.error('Error executing query:', err);
                res.status(500).send('Error executing query');
            }
        });
    });
};

// Fetch By Id
exports.viewById = (req, res) => {
    connection.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return res.status(500).send('Error connecting to database');
        }
        // console.log('MySQL connected');
        const id = req.params.id;
        connection.query("SELECT * FROM STUDENTS where id=?", [id], (err, records) => {

            connection.release();

            if (!err) {
                res.status(200).send(records);
            } else {
                console.error('Error executing query:', err);
                res.status(500).send('Error executing query');
            }
        });
    });
};


// Add-Data
exports.insert = (req, res) => {
    connection.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return res.status(500).send('Error connecting to database');
        }
        // console.log('MySQL connected');

        const { firstname, lastname, location, email, education, dob, about } = req.body;

        connection.query("INSERT INTO STUDENTS(firstname,lastname,location,email,education,dob,about)VALUES(?,?,?,?,?,?,?)", [firstname, lastname, location, email, education, dob, about], (err, records) => {

            connection.release();

            if (!err) {
                res.status(200).send(records);
            } else {
                console.error('Error executing query:', err);
                res.status(500).send('Error executing query');
            }
        });
    });
};

// Update-Data
exports.update = (req, res) => {
    connection.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return res.status(500).send('Error connecting to database');
        }
        // console.log('MySQL connected');

        const { firstname, lastname, location, email, education, dob, about } = req.body;
        const id = req.params.id;

        connection.query("update STUDENTS set firstname=?,lastname=?,location=?,email=?,education=?,dob=?,about=? where id=?", [firstname, lastname, location, email, education, dob, about, id], (err, records) => {

            connection.release();

            if (!err) {
                res.status(200).send(records);
            } else {
                console.error('Error executing query:', err);
                res.status(500).send('Error executing query');
            }
        });
    });
};

// Delete Data
exports.delete = (req, res) => {
    connection.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return res.status(500).send('Error connecting to database');
        }
        // console.log('MySQL connected');

        const id = req.params.id;

        connection.query("delete from STUDENTS where id=?", [id], (err, records) => {

            connection.release();

            if (!err) {
                res.status(200).send(records);
            } else {
                console.error('Error executing query:', err);
                res.status(500).send('Error executing query');
            }
        });
    });
};