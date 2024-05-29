const connection=require('../Database/mysql')

exports.view = (req, res) => {
    connection.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return res.status(500).send('Error connecting to database');
        }
        console.log('MySQL connected');

        connection.query("SELECT * FROM students", (err, records) => {

            connection.release();

            if (!err) {
                console.log("Query successful");

                res.status(200).send(records);
            } else {
                console.error('Error executing query:', err);
                res.status(500).send('Error executing query');
            }
        });
    });
};

exports.insert = (req, res) => {
    connection.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return res.status(500).send('Error connecting to database');
        }
        console.log('MySQL connected');

        const { firstname, lastname, location, email, education, dob } = req.body;

        connection.query("INSERT INTO students(firstname,lastname,location,email,education,dob)VALUES(?,?,?,?,?,?)", [firstname, lastname, location, email, education, dob], (err, records) => {

            connection.release();

            if (!err) {
                console.log("Query successful");

                res.status(200).send(records);
            } else {
                console.error('Error executing query:', err);
                res.status(500).send('Error executing query');
            }
        });
    });
};