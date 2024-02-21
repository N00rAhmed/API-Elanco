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


router.get("/averageEachDayCanineOne", function (req, res, next) {
  const averageEachDay_canineOne = req.query; // Replace 'alldata' with the actual query parameter name
  sql.averageEachDay_CanineOne(averageEachDay_canineOne).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});


router.get("/averageEachDayCanineTwo", function (req, res, next) {
  const averageEachDay_canineTwo = req.query; // Replace 'alldata' with the actual query parameter name
  sql.averageEachDay_CanineTwo(averageEachDay_canineTwo).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});



router.get("/averageEachDayCanineThree", function (req, res, next) {
  const averageEachDay_canineThree = req.query; // Replace 'alldata' with the actual query parameter name
  sql.averageEachDay_CanineThree(averageEachDay_canineThree).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});

router.get("/HeartRate_CanineOne", function (req, res, next) {
  const HeartRate_CanineOne = req.query; // Corrected to use 'HeartRate_CanineOne'
  sql.HighAndLowHeartRate_One(HeartRate_CanineOne).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});

router.get("/HeartRate_CanineTwo", function (req, res, next) {
  const HeartRate_CanineTwo = req.query; // Corrected to use 'HeartRate_CanineOne'
  sql.HighAndLowHeartRate_Two(HeartRate_CanineTwo).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});

router.get("/HeartRate_CanineThree", function (req, res, next) {
  const HeartRate_CanineThree = req.query; // Corrected to use 'HeartRate_CanineOne'
  sql.HighAndLowHeartRate_Three(HeartRate_CanineThree).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});

router.get("/HeartToSleep_CanineOne", function (req, res, next) {
  const HeartToSleep_CanineOne = req.query; // Corrected to use 'HeartRate_CanineOne'
  sql.HeartRateToSleep_One(HeartToSleep_CanineOne).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});

router.get("/HeartToSleep_CanineTwo", function (req, res, next) {
  const HeartToSleep_CanineTwo = req.query; // Corrected to use 'HeartRate_CanineOne'
  sql.HeartRateToSleep_Two(HeartToSleep_CanineTwo).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});

router.get("/HeartToSleep_CanineThree", function (req, res, next) {
  const HeartToSleep_CanineThree = req.query; // Corrected to use 'HeartRate_CanineOne'
  sql.HeartRateToSleep_Two(HeartToSleep_CanineThree).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});

router.get("/HeartToWalk_CanineOne", function (req, res, next) {
  const HeartToWalk_CanineOne = req.query; // Corrected to use 'HeartRate_CanineOne'
  sql.HeartRateToWalk_One(HeartToWalk_CanineOne).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});

router.get("/HeartToWalk_CanineTwo", function (req, res, next) {
  const HeartToWalk_CanineTwo = req.query; // Corrected to use 'HeartRate_CanineOne'
  sql.HeartRateToWalk_Two(HeartToWalk_CanineTwo).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});

router.get("/HeartToWalk_CanineThree", function (req, res, next) {
  const HeartToWalk_CanineThree = req.query; // Corrected to use 'HeartRate_CanineOne'
  sql.HeartRateToWalk_Three(HeartToWalk_CanineThree).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});

router.get("/HeartToNormal_CanineOne", function (req, res, next) {
  const HeartToNormal_CanineOne = req.query; // Corrected to use 'HeartRate_CanineOne'
  sql.HeartRateToNormal_One(HeartToNormal_CanineOne).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});

router.get("/HeartToNormal_CanineTwo", function (req, res, next) {
  const HeartToNormal_CanineTwo = req.query; // Corrected to use 'HeartRate_CanineOne'
  sql.HeartRateToNormal_Two(HeartToNormal_CanineTwo).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});

router.get("/HeartToNormal_CanineThree", function (req, res, next) {
  const HeartToNormal_CanineThree = req.query; // Corrected to use 'HeartRate_CanineOne'
  sql.HeartRateToNormal_Three(HeartToNormal_CanineThree).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});

router.get("/behaviourPatternActionsAverageCanineOne", function (req, res, next) {
  const behaviourPatternActionsAverageCanineOne = req.query; // Corrected to use 'HeartRate_CanineOne'
  sql.BehaviourPatternActionsAverageCanineOne(behaviourPatternActionsAverageCanineOne).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});


router.get("/behaviourPatternActionsAverageCanineTwo", function (req, res, next) {
  const behaviourPatternActionsAverageCanineTwo = req.query; // Corrected to use 'HeartRate_CanineOne'
  sql.BehaviourPatternActionsAverageCanineTwo(behaviourPatternActionsAverageCanineTwo).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});



router.get("/behaviourPatternActionsAverageCanineThree", function (req, res, next) {
  const behaviourPatternActionsAverageCanineThree = req.query; // Corrected to use 'HeartRate_CanineOne'
  sql.BehaviourPatternActionsAverageCanineThree(behaviourPatternActionsAverageCanineThree).then((result) => {
    res.json(result);
  }).catch((error) => {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
});




module.exports = router;
