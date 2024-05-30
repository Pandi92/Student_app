const mysql = require('mysql2');
require('dotenv').config();

// Mysql Create Connections
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    multipleStatements: true
});

// Create database and table 
connection.getConnection((err, conn) => {
    if (err) throw err;
    console.log(`Mysql is Connected`);

    const createDatabaseAndTable = `
        CREATE DATABASE IF NOT EXISTS STUDENT_APP;
        USE STUDENT_APP;
        CREATE TABLE IF NOT EXISTS STUDENTS (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            firstname VARCHAR(255) NOT NULL,
            lastname VARCHAR(255) NOT NULL,
            location VARCHAR(255) NOT NULL,
            email VARCHAR(80) NOT NULL,
            education VARCHAR(200) NOT NULL,
            about VARCHAR(255) Null,
            dob VARCHAR(25) NOT NULL
        );
    `;

    conn.query(createDatabaseAndTable, (err, results) => {
        conn.release();
        if (err) throw err;
        console.log("Database and table setup completed");
        console.log(`------------------------------------------------------------`);
        console.log("Database Name:\'STUDENT_APP\'\nTable Name:\'STUDENTS\'");
        console.log(`------------------------------------------------------------`);
        
    });
});

module.exports = connection;
