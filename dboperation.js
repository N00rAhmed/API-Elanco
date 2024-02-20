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
    
// SELECT AVG("HeartRate(bpm)") AS average_value FROM Canine_Activity_Data;

    const parameters = average;
    return await executeQuery(query, parameters);
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  }
  }



  async function averageStatsCanine_One(average_canineOne) {
    try {
      const query = `SELECT
      ROUND(AVG("HeartRate(bpm)"), 1) AS average_value_heart_rate,
      ROUND(AVG("Temperature(C)"), 1) AS average_temperature,
      ROUND(AVG("Weight(kg)"), 1) AS average_weight,
      ROUND(AVG("BreathingRate(breaths/min)"), 1) AS average_breathing,
      ROUND(AVG("CalorieBurn"), 1) AS average_calorieBurn,
      ROUND(AVG("ActivityLevel(steps)"), 1) AS average_activityLevelSteps,
      ROUND(AVG("FoodIntake(calories)"), 1) AS average_foodIntake,
      ROUND(AVG("WaterIntake(ml)"), 1) AS average_waterIntake
      FROM Canine_Activity_Data WHERE DogID = 'CANINE001';`
      // ROUND(AVG("FoodIntake(calories)"), 1) AS average_foodIntake,
      // ROUND(AVG("WaterIntake(ml)"), 1) AS average_waterIntake,
      
  // SELECT AVG("HeartRate(bpm)") AS average_value FROM Canine_Activity_Data;
  
      const parameters = average_canineOne;
      return await executeQuery(query, parameters);
    } catch (error) {
      console.error("Error executing query:", error);
      throw error;
    }
    }


    
    async function averageStatsCanine_Two(average_canineTwo) {
      try {
        const query = `SELECT
        ROUND(AVG("HeartRate(bpm)"), 1) AS average_value_heart_rate,
        ROUND(AVG("Temperature(C)"), 1) AS average_temperature,
        ROUND(AVG("Weight(kg)"), 1) AS average_weight,
        ROUND(AVG("BreathingRate(breaths/min)"), 1) AS average_breathing,
        ROUND(AVG("CalorieBurn"), 1) AS average_calorieBurn,
        ROUND(AVG("ActivityLevel(steps)"), 1) AS average_activityLevelSteps,
        ROUND(AVG("FoodIntake(calories)"), 1) AS average_foodIntake,
        ROUND(AVG("WaterIntake(ml)"), 1) AS average_waterIntake
  
        FROM Canine_Activity_Data WHERE DogID = 'CANINE002';`
        // ROUND(AVG("FoodIntake(calories)"), 1) AS average_foodIntake,
        // ROUND(AVG("WaterIntake(ml)"), 1) AS average_waterIntake,

    // SELECT AVG("HeartRate(bpm)") AS average_value FROM Canine_Activity_Data;

        const parameters = average_canineTwo;
        return await executeQuery(query, parameters);
      } catch (error) {
        console.error("Error executing query:", error);
        throw error;
      }
    }




    async function averageStatsCanine_Three(average_canineThree) {
      try {
        const query = `SELECT
        ROUND(AVG("HeartRate(bpm)"), 1) AS average_value_heart_rate,
        ROUND(AVG("Temperature(C)"), 1) AS average_temperature,
        ROUND(AVG("Weight(kg)"), 1) AS average_weight,
        ROUND(AVG("BreathingRate(breaths/min)"), 1) AS average_breathing,
        ROUND(AVG("CalorieBurn"), 1) AS average_calorieBurn,
        ROUND(AVG("ActivityLevel(steps)"), 1) AS average_activityLevelSteps,
        ROUND(AVG("FoodIntake(calories)"), 1) AS average_foodIntake,
        ROUND(AVG("WaterIntake(ml)"), 1) AS average_waterIntake  
        FROM Canine_Activity_Data WHERE DogID = 'CANINE003';`
        // ROUND(AVG("FoodIntake(calories)"), 1) AS average_foodIntake,
        // ROUND(AVG("WaterIntake(ml)"), 1) AS average_waterIntake,
        
    // SELECT AVG("HeartRate(bpm)") AS average_value FROM Canine_Activity_Data;
    
        const parameters = average_canineThree;
        return await executeQuery(query, parameters);
      } catch (error) {
        console.error("Error executing query:", error);
        throw error;
      }
      }



      async function averageEachDay_CanineOne(averageEachDay_canineOne) {
        try {
          const query = `SELECT
          DogID,
          Date,
          ROUND(AVG("HeartRate(bpm)"), 1) AS average_value_heart_rate,
          ROUND(AVG("Temperature(C)"), 1) AS average_temperature,
          ROUND(AVG("Weight(kg)"), 1) AS average_weight,
          ROUND(AVG("BreathingRate(breaths/min)"), 1) AS average_breathing,
          ROUND(AVG("CalorieBurn"), 1) AS average_calorieBurn,
          ROUND(AVG("ActivityLevel(steps)"), 1) AS average_activityLevelSteps,
          ROUND(AVG("FoodIntake(calories)"), 1) AS average_foodIntake,
          ROUND(AVG("WaterIntake(ml)"), 1) AS average_waterIntake  
      FROM Canine_Activity_Data 
      WHERE DogID = 'CANINE001' AND Date BETWEEN '01-01-2021' AND '31-12-2023'
      GROUP BY DogID, Date
      ORDER BY CAST(SUBSTR(Date, 7, 4) AS INTEGER), CAST(SUBSTR(Date, 4, 2) AS INTEGER), CAST(SUBSTR(Date, 1, 2) AS INTEGER);
      `
          // ROUND(AVG("FoodIntake(calories)"), 1) AS average_foodIntake,
          // ROUND(AVG("WaterIntake(ml)"), 1) AS average_waterIntake,
          
      // SELECT AVG("HeartRate(bpm)") AS average_value FROM Canine_Activity_Data;
      
          const parameters = averageEachDay_canineOne;
          return await executeQuery(query, parameters);
        } catch (error) {
          console.error("Error executing query:", error);
          throw error;
        }
        }
  
  

        async function averageEachDay_CanineTwo(averageEachDay_canineTwo) {
          try {
            const query = `SELECT
            DogID,
            Date,
            ROUND(AVG("HeartRate(bpm)"), 1) AS average_value_heart_rate,
            ROUND(AVG("Temperature(C)"), 1) AS average_temperature,
            ROUND(AVG("Weight(kg)"), 1) AS average_weight,
            ROUND(AVG("BreathingRate(breaths/min)"), 1) AS average_breathing,
            ROUND(AVG("CalorieBurn"), 1) AS average_calorieBurn,
            ROUND(AVG("ActivityLevel(steps)"), 1) AS average_activityLevelSteps,
            ROUND(AVG("FoodIntake(calories)"), 1) AS average_foodIntake,
            ROUND(AVG("WaterIntake(ml)"), 1) AS average_waterIntake  
        FROM Canine_Activity_Data 
        WHERE DogID = 'CANINE002' AND Date BETWEEN '01-01-2021' AND '31-12-2023'
        GROUP BY DogID, Date
        ORDER BY CAST(SUBSTR(Date, 7, 4) AS INTEGER), CAST(SUBSTR(Date, 4, 2) AS INTEGER), CAST(SUBSTR(Date, 1, 2) AS INTEGER);
        `
            // ROUND(AVG("FoodIntake(calories)"), 1) AS average_foodIntake,
            // ROUND(AVG("WaterIntake(ml)"), 1) AS average_waterIntake,
            
        // SELECT AVG("HeartRate(bpm)") AS average_value FROM Canine_Activity_Data;
        
            const parameters = averageEachDay_canineTwo;
            return await executeQuery(query, parameters);
          } catch (error) {
            console.error("Error executing query:", error);
            throw error;
          }
          }





          async function averageEachDay_CanineThree(averageEachDay_canineThree) {
            try {
              const query = `SELECT
              DogID,
              Date,
              ROUND(AVG("HeartRate(bpm)"), 1) AS average_value_heart_rate,
              ROUND(AVG("Temperature(C)"), 1) AS average_temperature,
              ROUND(AVG("Weight(kg)"), 1) AS average_weight,
              ROUND(AVG("BreathingRate(breaths/min)"), 1) AS average_breathing,
              ROUND(AVG("CalorieBurn"), 1) AS average_calorieBurn,
              ROUND(AVG("ActivityLevel(steps)"), 1) AS average_activityLevelSteps,
              ROUND(AVG("FoodIntake(calories)"), 1) AS average_foodIntake,
              ROUND(AVG("WaterIntake(ml)"), 1) AS average_waterIntake  
          FROM Canine_Activity_Data 
          WHERE DogID = 'CANINE003' AND Date BETWEEN '01-01-2021' AND '31-12-2023'
          GROUP BY DogID, Date
          ORDER BY CAST(SUBSTR(Date, 7, 4) AS INTEGER), CAST(SUBSTR(Date, 4, 2) AS INTEGER), CAST(SUBSTR(Date, 1, 2) AS INTEGER);
          `
              // ROUND(AVG("FoodIntake(calories)"), 1) AS average_foodIntake,
              // ROUND(AVG("WaterIntake(ml)"), 1) AS average_waterIntake,
              
          // SELECT AVG("HeartRate(bpm)") AS average_value FROM Canine_Activity_Data;
          
              const parameters = averageEachDay_canineThree;
              return await executeQuery(query, parameters);
            } catch (error) {
              console.error("Error executing query:", error);
              throw error;
            }
            }
  

// Export the all_data function
module.exports = { averageStats, averageStatsCanine_One, averageStatsCanine_Two, averageStatsCanine_Three, averageEachDay_CanineOne, averageEachDay_CanineTwo, averageEachDay_CanineThree};
