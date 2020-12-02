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

function querydb(db, str) {
  let data = null;
  let sql = `SELECT * FROM mpg`;
  let sql1 = `SELECT * FROM mpg WHERE ((biz_county == "PRINCE GEORGE'S") & (
      (biz_name LIKE "%${str}%") | 
      (biz_addr LIKE "%${str}%") | 
      (biz_city LIKE "%${str}%") | 
      (biz_zip LIKE "%${str}%") | 
      (biz_web LIKE "%${str}%") | 
      (biz_service LIKE "%${str}%")
      )) LIMIT 10`;
  db.all(sql1, [],(err, rows) => {
      data = rows;
  });
  return data;
}

let db = new sqlite3.Database('./sql/data.db', (err) => {
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
    console.log('fetch request data', data);
  })
  .post(async(req, res) => {
    console.log('POST request detected');
    console.log('Form data in res.body', req.body);
    
    const data = req.body.search; // request comes from script.js, search string in form
    
    let query = querydb(db, data);
    console.log(query)
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});





