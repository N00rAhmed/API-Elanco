const { json } = require('express');
const express = require('express');
const router = express.Router();
const sql = require("../dboperation");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Test connection
router.get('/testconnect', function(req, res, next) {
  sql.getdata();
  res.render('index', { title: 'Express' });
});

// Define the route for fetching all data
router.get("/average", function (req, res, next) {
  const average = req.query; // Replace 'alldata' with the actual query parameter name
  sql.averageStats(average).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});



router.get("/average_canineone", function (req, res, next) {
  const average_canineOne = req.query; // Replace 'alldata' with the actual query parameter name
  sql.averageStatsCanine_One(average_canineOne).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});


router.get("/average_canineTwo", function (req, res, next) {
  const average_canineTwo = req.query; // Replace 'alldata' with the actual query parameter name
  sql.averageStatsCanine_Two(average_canineTwo).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});


router.get("/average_caninethree", function (req, res, next) {
  const average_canineThree = req.query; // Replace 'alldata' with the actual query parameter name
  sql.averageStatsCanine_Three(average_canineThree).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});
module.exports = router;
