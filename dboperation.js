// Import necessary modules
const { query } = require('express');
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

            async function HighAndLowHeartRate_One(HeartRate_CanineOne) {
              try {
                const query = `
                  SELECT MAX("HeartRate(bpm)") AS highest_heart_rate, MIN("HeartRate(bpm)") AS lowest_heart_rate
                  FROM Canine_Activity_Data
                  WHERE DogID = 'CANINE001';`
                const parameters = HeartRate_CanineOne;
                return await executeQuery(query, parameters);
              } catch (error) {
                console.error("Error executing query:", error);
                throw error;
              }
            }
      
            async function HighAndLowHeartRate_Two(HeartRate_CanineTwo) {
              try {
                const query = `
                  SELECT MAX("HeartRate(bpm)") AS highest_heart_rate, MIN("HeartRate(bpm)") AS lowest_heart_rate
                  FROM Canine_Activity_Data
                  WHERE DogID = 'CANINE002';`
                const parameters = HeartRate_CanineTwo;
                return await executeQuery(query, parameters);
              } catch (error) {
                console.error("Error executing query:", error);
                throw error;
              }
            }
      
            async function HighAndLowHeartRate_Three(HeartRate_CanineThree) {
              try {
                const query = `
                  SELECT MAX("HeartRate(bpm)") AS highest_heart_rate, MIN("HeartRate(bpm)") AS lowest_heart_rate
                  FROM Canine_Activity_Data
                  WHERE DogID = 'CANINE003';`
                const parameters = HeartRate_CanineThree;
                return await executeQuery(query, parameters);
              } catch (error) {
                console.error("Error executing query:", error);
                throw error;
              }
            }
      
            async function HeartRateToSleep_One(HeartToSleep_CanineOne) {
              try {
                const query = `SELECT DogID, BehaviourPattern, ROUND(AVG("HeartRate(bpm)"), 1) AS avg_heart_rate
                FROM Canine_Activity_Data
                WHERE DogID = 'CANINE001' AND BehaviourPattern = 'Sleeping'
                GROUP BY DogID, BehaviourPattern;` 
                const parameters = HeartToSleep_CanineOne;
                return await executeQuery(query, parameters);
              }
              catch (error) {
              console.error("Error executing query:", error);
              throw error;
            }
          }

          async function HeartRateToSleep_Two(HeartToSleep_CanineTwo) {
            try {
              const query = `SELECT DogID, BehaviourPattern, ROUND(AVG("HeartRate(bpm)"), 1) AS avg_heart_rate
              FROM Canine_Activity_Data
              WHERE DogID = 'CANINE002' AND BehaviourPattern = 'Sleeping'
              GROUP BY DogID, BehaviourPattern;` 
              const parameters = HeartToSleep_CanineTwo;
              return await executeQuery(query, parameters);
            }
            catch (error) {
            console.error("Error executing query:", error);
            throw error;
          }
        }

        async function HeartRateToSleep_Three(HeartToSleep_CanineThree) {
          try {
            const query = `SELECT DogID, BehaviourPattern, ROUND(AVG("HeartRate(bpm)"), 1) AS avg_heart_rate
            FROM Canine_Activity_Data
            WHERE DogID = 'CANINE003' AND BehaviourPattern = 'Sleeping'
            GROUP BY DogID, BehaviourPattern;` 
            const parameters = HeartToSleep_CanineThree;
            return await executeQuery(query, parameters);
          }
          catch (error) {
          console.error("Error executing query:", error);
          throw error;
        }
      }
      
          async function HeartRateToWalk_One(HeartToWalk_CanineOne) {
            try {
              const query = `SELECT DogID, BehaviourPattern, ROUND(AVG("HeartRate(bpm)"), 1) AS avg_heart_rate
              FROM Canine_Activity_Data
              WHERE DogID = 'CANINE001' AND BehaviourPattern = 'Walking'
              GROUP BY DogID, BehaviourPattern;` 
              const parameters = HeartToWalk_CanineOne;
              return await executeQuery(query, parameters);
            }
            catch (error) {
            console.error("Error executing query:", error);
            throw error;
          }
        }

        async function HeartRateToWalk_Two(HeartToWalk_CanineTwo) {
          try {
            const query = `SELECT DogID, BehaviourPattern, ROUND(AVG("HeartRate(bpm)"), 1) AS avg_heart_rate
            FROM Canine_Activity_Data
            WHERE DogID = 'CANINE002' AND BehaviourPattern = 'Walking'
            GROUP BY DogID, BehaviourPattern;` 
            const parameters = HeartToWalk_CanineTwo;
            return await executeQuery(query, parameters);
          }
          catch (error) {
          console.error("Error executing query:", error);
          throw error;
        }
      }

      async function HeartRateToWalk_Three(HeartToWalk_CanineThree) {
        try {
          const query = `SELECT DogID, BehaviourPattern, ROUND(AVG("HeartRate(bpm)"), 1) AS avg_heart_rate
          FROM Canine_Activity_Data
          WHERE DogID = 'CANINE003' AND BehaviourPattern = 'Walking'
          GROUP BY DogID, BehaviourPattern;` 
          const parameters = HeartToWalk_CanineThree;
          return await executeQuery(query, parameters);
        }
        catch (error) {
        console.error("Error executing query:", error);
        throw error;
      }
    }
  
        async function HeartRateToNormal_One(HeartToNormal_CanineOne) {
          try {
            const query = `SELECT DogID, BehaviourPattern, ROUND(AVG("HeartRate(bpm)"), 1) AS avg_heart_rate
            FROM Canine_Activity_Data
            WHERE DogID = 'CANINE001' AND BehaviourPattern = 'Normal'
            GROUP BY DogID, BehaviourPattern;` 
            const parameters = HeartToNormal_CanineOne;
            return await executeQuery(query, parameters);
          }
          catch (error) {
          console.error("Error executing query:", error);
          throw error;
        }
      }

      async function HeartRateToNormal_Two(HeartToNormal_CanineTwo) {
        try {
          const query = `SELECT DogID, BehaviourPattern, ROUND(AVG("HeartRate(bpm)"), 1) AS avg_heart_rate
          FROM Canine_Activity_Data
          WHERE DogID = 'CANINE002' AND BehaviourPattern = 'Normal'
          GROUP BY DogID, BehaviourPattern;` 
          const parameters = HeartToNormal_CanineTwo;
          return await executeQuery(query, parameters);
        }
        catch (error) {
        console.error("Error executing query:", error);
        throw error;
      }
    }

    async function HeartRateToNormal_Three(HeartToNormal_CanineThree) {
      try {
        const query = `SELECT DogID, BehaviourPattern, ROUND(AVG("HeartRate(bpm)"), 1) AS avg_heart_rate
        FROM Canine_Activity_Data
        WHERE DogID = 'CANINE003' AND BehaviourPattern = 'Normal'
        GROUP BY DogID, BehaviourPattern;` 
        const parameters = HeartToNormal_CanineThree;
        return await executeQuery(query, parameters);
      }
      catch (error) {
      console.error("Error executing query:", error);
      throw error;
    }
  }



  async function BehaviourPatternActionsAverageCanineOne(behaviourPatternActionsAverageCanineOne) {
    try {
      const query = `SELECT
      DogID,
      ROUND(AVG(WalkingHours), 1) AS AverageWalkingHours,
    ROUND(AVG(EatingHours),1) AS AverageEatingHours,
    ROUND(AVG(NormalHours),1) AS AverageNormalHours,
    ROUND(AVG(HoursSlept),1) AS AverageHoursSlept
    FROM
      (
          SELECT
              DogID,
              Date,
              SUM(
                  CASE
                      WHEN BehaviourPattern = 'Walking' THEN 1
                      ELSE 0
                  END
              ) AS WalkingHours,
              SUM(
                  CASE
                      WHEN BehaviourPattern = 'Eating' THEN 1
                      ELSE 0
                  END
              ) AS EatingHours,
              SUM(
                  CASE
                      WHEN BehaviourPattern = 'Normal' THEN 1
                      ELSE 0
                  END
              ) AS NormalHours,
              SUM(
                  CASE
                      WHEN BehaviourPattern = 'Sleeping' THEN 1
                      ELSE 0
                  END
              ) AS HoursSlept
          FROM
              Canine_Activity_Data
          WHERE
              DogID = 'CANINE001'
          GROUP BY
              DogID,
              Date
      ) AS T
    GROUP BY
      DogID
    ORDER BY
      DogID;
    
    `
      const parameters = behaviourPatternActionsAverageCanineOne;
      return await executeQuery(query, parameters);
    }
    catch (error) {
    console.error("Error executing query:", error);
    throw error;
  }
}



async function BehaviourPatternActionsAverageCanineTwo(behaviourPatternActionsAverageCanineTwo) {
  try {
    const query = `SELECT
    DogID,
    ROUND(AVG(WalkingHours), 1) AS AverageWalkingHours,
    ROUND(AVG(EatingHours),1) AS AverageEatingHours,
    ROUND(AVG(NormalHours),1) AS AverageNormalHours,
    ROUND(AVG(HoursSlept),1) AS AverageHoursSlept
  FROM
    (
        SELECT
            DogID,
            Date,
            SUM(
                CASE
                    WHEN BehaviourPattern = 'Walking' THEN 1
                    ELSE 0
                END
            ) AS WalkingHours,
            SUM(
                CASE
                    WHEN BehaviourPattern = 'Eating' THEN 1
                    ELSE 0
                END
            ) AS EatingHours,
            SUM(
                CASE
                    WHEN BehaviourPattern = 'Normal' THEN 1
                    ELSE 0
                END
            ) AS NormalHours,
            SUM(
                CASE
                    WHEN BehaviourPattern = 'Sleeping' THEN 1
                    ELSE 0
                END
            ) AS HoursSlept
        FROM
            Canine_Activity_Data
        WHERE
            DogID = 'CANINE002'
        GROUP BY
            DogID,
            Date
    ) AS T
  GROUP BY
    DogID
  ORDER BY
    DogID;
  
  `
    const parameters = behaviourPatternActionsAverageCanineTwo;
    return await executeQuery(query, parameters);
  }
  catch (error) {
  console.error("Error executing query:", error);
  throw error;
}
}




async function BehaviourPatternActionsAverageCanineThree(behaviourPatternActionsAverageCanineThree) {
  try {
    const query = `SELECT
    DogID,
    ROUND(AVG(WalkingHours), 1) AS AverageWalkingHours,
    ROUND(AVG(EatingHours),1) AS AverageEatingHours,
    ROUND(AVG(NormalHours),1) AS AverageNormalHours,
    ROUND(AVG(HoursSlept),1) AS AverageHoursSlept
  FROM
    (
        SELECT
            DogID,
            Date,
            SUM(
                CASE
                    WHEN BehaviourPattern = 'Walking' THEN 1
                    ELSE 0
                END
            ) AS WalkingHours,
            SUM(
                CASE
                    WHEN BehaviourPattern = 'Eating' THEN 1
                    ELSE 0
                END
            ) AS EatingHours,
            SUM(
                CASE
                    WHEN BehaviourPattern = 'Normal' THEN 1
                    ELSE 0
                END
            ) AS NormalHours,
            SUM(
                CASE
                    WHEN BehaviourPattern = 'Sleeping' THEN 1
                    ELSE 0
                END
            ) AS HoursSlept
        FROM
            Canine_Activity_Data
        WHERE
            DogID = 'CANINE003'
        GROUP BY
            DogID,
            Date
    ) AS T
  GROUP BY
    DogID
  ORDER BY
    DogID;
  
  `
    const parameters = behaviourPatternActionsAverageCanineThree;
    return await executeQuery(query, parameters);
  }
  catch (error) {
  console.error("Error executing query:", error);
  throw error;
}
}


async function monthAverage_canineone(MonthlyAverageCanineOne) {
  try {
    const query = `SELECT
    DogID,
    SUBSTR(Date, 4, 7) AS Month_Year,
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
GROUP BY DogID, Month_Year
ORDER BY SUBSTR(Date, 7, 4), SUBSTR(Date, 4, 2);;

` 
    const parameters = MonthlyAverageCanineOne;
    return await executeQuery(query, parameters);
  }
  catch (error) {
  console.error("Error executing query:", error);
  throw error;
}
}

async function monthAverage_caninetwo(MonthlyAverageCanineTwo) {
  try {
    const query = `SELECT
    DogID,
    SUBSTR(Date, 4, 7) AS Month_Year,
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
GROUP BY DogID, Month_Year
ORDER BY SUBSTR(Date, 7, 4), SUBSTR(Date, 4, 2);;

` 
    const parameters = MonthlyAverageCanineTwo;
    return await executeQuery(query, parameters);
  }
  catch (error) {
  console.error("Error executing query:", error);
  throw error;
}
}

async function monthAverage_caninethree(MonthlyAverageCanineThree) {
  try {
    const query = `SELECT
    DogID,
    SUBSTR(Date, 4, 7) AS Month_Year,
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
GROUP BY DogID, Month_Year
ORDER BY SUBSTR(Date, 7, 4), SUBSTR(Date, 4, 2);;

` 
    const parameters = MonthlyAverageCanineThree;
    return await executeQuery(query, parameters);
  }
  catch (error) {
  console.error("Error executing query:", error);
  throw error;
}
}


// Export the all_data function
module.exports = { 
  averageStats, 
  averageStatsCanine_One, 
  averageStatsCanine_Two, 
  averageStatsCanine_Three, 
  averageEachDay_CanineOne, 
  averageEachDay_CanineTwo, 
  averageEachDay_CanineThree,
  HighAndLowHeartRate_One,
  HighAndLowHeartRate_Two,
  HighAndLowHeartRate_Three,
  HeartRateToSleep_One,
  HeartRateToSleep_Two,
  HeartRateToSleep_Three,
  HeartRateToWalk_One,
  HeartRateToWalk_Two,
  HeartRateToWalk_Three,
  HeartRateToNormal_One,
  HeartRateToNormal_Two,
  HeartRateToNormal_Three,
  BehaviourPatternActionsAverageCanineOne,
  BehaviourPatternActionsAverageCanineTwo,
  BehaviourPatternActionsAverageCanineThree,
  monthAverage_canineone,
  monthAverage_caninetwo,
  monthAverage_caninethree
};
