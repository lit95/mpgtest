// These are our required libraries to make the server work.
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import sqlite3 from 'sqlite3';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

async function queryall(){
  let sql = `SELECT * FROM mpg WHERE (biz_county == "PRINCE GEORGE'S")`;
  return new Promise((res, rej) => {
    db.all(sql, [],(err, rows) => {
      if (err) {
        rej(console.error(err.message)); 
      }
      res(rows);
    });
  });
}

async function querydb(db, str) {
  
  let sql1 = `SELECT * FROM mpg WHERE ((biz_county == "PRINCE GEORGE'S") & (
      (biz_name LIKE "%${str}%") | 
      (biz_addr LIKE "%${str}%") | 
      (biz_city LIKE "%${str}%") | 
      (biz_zip LIKE "%${str}%") | 
      (biz_web LIKE "%${str}%") | 
      (biz_service LIKE "%${str}%")
      )) LIMIT 10`;
  return new Promise((res, rej) => {
    db.all(sql1, [],(err, rows) => {
      if (err) {
        rej(console.error(err.message)); 
      }
      res(rows);
    });
  });
}

let db = new sqlite3.Database('./server_files/data.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('data.db');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.route('/sql')
  .get(async(req, res) => {
    console.log('GET request detected');
    res.send(await queryall());
  })
  .post(async(req, res) => {
    console.log('POST request detected');
    const data = req.body.name; // request comes from script.js, search string in form
    let query = await querydb(db, data);
    res.send(query);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});





