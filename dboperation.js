// Import necessary modules
const sqlite3 = require('sqlite3');

// Create a new SQLite database (replace 'your-database-file.db' with the actual database file)
const db = new sqlite3.Database('Elanco.db');

// Define the executeQuery function
function executeQuery(query, parameters) {
  return new Promise((resolve, reject) => {
    db.all(query, parameters, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

// Define the all_data function
async function averageStats(average) {
  try {
    const query = `SELECT
    ROUND(AVG("HeartRate(bpm)"), 1) AS average_value_heart_rate,
    ROUND(AVG("Temperature(C)"), 1) AS average_temperature,
    ROUND(AVG("Weight(kg)"), 1) AS average_weight,
    ROUND(AVG("BreathingRate(breaths/min)"), 1) AS average_breathing,
    ROUND(AVG("CalorieBurn"), 1) AS average_calorieBurn,
    ROUND(AVG("ActivityLevel(steps)"), 1) AS average_activityLevelSteps
    FROM Canine_Activity_Data;`


    // ROUND(AVG("FoodIntake(calories)"), 1) AS average_foodIntake,
    // ROUND(AVG("WaterIntake(ml)"), 1) AS average_waterIntake,







    // SELECT AVG("HeartRate(bpm)") AS average_value_heart_rate FROM Canine_Activity_Data
    // SELECT AVG("Temperature(C)") AS average_temperature FROM Canine_Activity_Data
    // SELECT AVG("Weight(kg)") AS average_weight FROM Canine_Activity_Data
    // SELECT AVG("BreathingRate(breaths/min)") AS average_breathing FROM Canine_Activity_Data
    
    // SELECT AVG("FoodIntake(calories)") AS average_foodIntake FROM Canine_Activity_Data

    // SELECT AVG("WaterIntake(ml)") AS average_waterIntake FROM Canine_Activity_Data
    // SELECT AVG("CalorieBurn") AS average_calorieBurn FROM Canine_Activity_Data
    // SELECT AVG("ActivityLevel(steps)") AS average_activityLevelSteps FROM Canine_Activity_Data
    
    
    
// SELECT AVG("HeartRate(bpm)") AS average_value FROM Canine_Activity_Data;

    const parameters = average;
    return await executeQuery(query, parameters);
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
}

// Export the all_data function
module.exports = { averageStats };
