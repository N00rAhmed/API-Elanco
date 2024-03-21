// Import necessary modules
var config = require("./dbconfig");

const { error } = require('console');
const { query } = require('express');
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database(config.DB, (err) => {
  if (err) {
     console.error(err.message);
  }
  console.log('Connected to the Elanco database.');
 });



 async function getdata() {
  try {
    let pool = await sql.connect(config);
    console.log("sql server connected...");
  } catch (error) {
console.log(" mathus-error :" + error);
  }
}





 async function executeQuery(query, parameters = []) {
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
      ROUND((SELECT AVG(subquery.steps_sum) 
           FROM (SELECT SUM("ActivityLevel(steps)") AS steps_sum 
                 FROM Canine_Activity_Data 
                 WHERE DogID = 'CANINE001' 
                 AND "ActivityLevel(steps)" > 0 
                 GROUP BY Date) AS subquery), 1) AS average_activityLevelSteps,
      ROUND((SELECT AVG(daily_calories_burned) 
          FROM (SELECT Date, SUM("CalorieBurn") AS daily_calories_burned
                FROM Canine_Activity_Data 
                WHERE DogID = 'CANINE001'
                GROUP BY Date) AS daily_calories), 1) AS average_calorieBurn,
        ROUND((SELECT AVG(daily_food_intake) 
          FROM (SELECT Date, SUM("FoodIntake(calories)") AS daily_food_intake
                FROM Canine_Activity_Data 
                WHERE DogID = 'CANINE001'
                GROUP BY Date) AS daily_food), 1) AS average_foodIntake,
        ROUND((SELECT AVG(daily_water_intake) 
          FROM (SELECT Date, SUM("WaterIntake(ml)") AS daily_water_intake
                FROM Canine_Activity_Data 
                WHERE DogID = 'CANINE001'
                GROUP BY Date) AS daily_water), 1) AS average_waterIntake
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
        ROUND((SELECT AVG(subquery.steps_sum) 
           FROM (SELECT SUM("ActivityLevel(steps)") AS steps_sum 
                 FROM Canine_Activity_Data 
                 WHERE DogID = 'CANINE002' 
                 AND "ActivityLevel(steps)" > 0 
                 GROUP BY Date) AS subquery), 1) AS average_activityLevelSteps,
        ROUND((SELECT AVG(daily_calories_burned) 
          FROM (SELECT Date, SUM("CalorieBurn") AS daily_calories_burned
                FROM Canine_Activity_Data 
                WHERE DogID = 'CANINE002'
                GROUP BY Date) AS daily_calories), 1) AS average_calorieBurn,
        ROUND((SELECT AVG(daily_food_intake) 
          FROM (SELECT Date, SUM("FoodIntake(calories)") AS daily_food_intake
                FROM Canine_Activity_Data 
                WHERE DogID = 'CANINE002'
                GROUP BY Date) AS daily_food), 1) AS average_foodIntake,
        ROUND((SELECT AVG(daily_water_intake) 
          FROM (SELECT Date, SUM("WaterIntake(ml)") AS daily_water_intake
                FROM Canine_Activity_Data 
                WHERE DogID = 'CANINE002'
                GROUP BY Date) AS daily_water), 1) AS average_waterIntake

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
        ROUND((SELECT AVG(subquery.steps_sum) 
           FROM (SELECT SUM("ActivityLevel(steps)") AS steps_sum 
                 FROM Canine_Activity_Data 
                 WHERE DogID = 'CANINE003' 
                 AND "ActivityLevel(steps)" > 0 
                 GROUP BY Date) AS subquery), 1) AS average_activityLevelSteps,
        ROUND((SELECT AVG(daily_calories_burned) 
          FROM (SELECT Date, SUM("CalorieBurn") AS daily_calories_burned
                FROM Canine_Activity_Data 
                WHERE DogID = 'CANINE003'
                GROUP BY Date) AS daily_calories), 1) AS average_calorieBurn,
        ROUND((SELECT AVG(daily_food_intake) 
          FROM (SELECT Date, SUM("FoodIntake(calories)") AS daily_food_intake
                FROM Canine_Activity_Data 
                WHERE DogID = 'CANINE003'
                GROUP BY Date) AS daily_food), 1) AS average_foodIntake,
        ROUND((SELECT AVG(daily_water_intake) 
          FROM (SELECT Date, SUM("WaterIntake(ml)") AS daily_water_intake
                FROM Canine_Activity_Data 
                WHERE DogID = 'CANINE003'
                GROUP BY Date) AS daily_water), 1) AS average_waterIntake
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
          const query = `WITH DogActivity AS (
            SELECT
                DogID,
                Date,
                ROUND(AVG("HeartRate(bpm)"), 1) AS average_value_heart_rate,
                ROUND(AVG("Temperature(C)"), 1) AS average_temperature,
                ROUND(AVG("Weight(kg)"), 1) AS average_weight,
                ROUND(AVG("BreathingRate(breaths/min)"), 1) AS average_breathing,
                ROUND(AVG("CalorieBurn"), 1) AS average_calorieBurn,
                ROUND(AVG("ActivityLevel(steps)"), 1) AS average_activityLevelSteps,
                ROUND(AVG("FoodIntake(calories)"), 1) AS average_foodIntake,
                ROUND(AVG("WaterIntake(ml)"), 1) AS average_waterIntake,
                SUM("ActivityLevel(steps)") AS totalSteps,
                SUM("CalorieBurn") AS totalOut,
                SUM("FoodIntake(calories)") AS totalIn,
                SUM("WaterIntake(ml)") AS totalwaterIntake
            FROM
                Canine_Activity_Data
            WHERE
                DogID = 'CANINE001' AND Date BETWEEN '01-01-2021' AND '31-12-2023'
            GROUP BY
                DogID, Date
        ),
        DogBehaviour AS (
            SELECT
                DogID,
                Date,
                ROUND(SUM(
                    CASE
                        WHEN BehaviourPattern = 'Walking' THEN 1
                        ELSE 0
                    END
                )) AS totalWalkingHours,
                ROUND(SUM(
                    CASE
                        WHEN BehaviourPattern = 'Sleeping' THEN 1
                        ELSE 0
                    END
                )) AS totalHoursSlept
            FROM
                Canine_Activity_Data
            WHERE
                DogID = 'CANINE001' AND Date BETWEEN '01-01-2021' AND '31-12-2023'
            GROUP BY
                DogID, Date
        )
        SELECT
            DA.DogID,
            DA.Date,
            DA.average_value_heart_rate,
            DA.average_temperature,
            DA.average_weight,
            DA.average_breathing,
            DA.average_calorieBurn,
            DA.average_activityLevelSteps,
            DA.average_foodIntake,
            DA.average_waterIntake,
            DA.totalSteps,
            DA.totalIn,
            DA.totalOut,
            DA.totalWaterIntake,
            DB.totalWalkingHours,
            DB.totalHoursSlept
        FROM
            DogActivity AS DA
        JOIN
            DogBehaviour AS DB ON DA.DogID = DB.DogID AND DA.Date = DB.Date
        ORDER BY
            CAST(SUBSTR(DA.Date, 7, 4) AS INTEGER),
            CAST(SUBSTR(DA.Date, 4, 2) AS INTEGER),
            CAST(SUBSTR(DA.Date, 1, 2) AS INTEGER);`
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
            const query = `WITH DogActivity AS (
              SELECT
                  DogID,
                  Date,
                  ROUND(AVG("HeartRate(bpm)"), 1) AS average_value_heart_rate,
                  ROUND(AVG("Temperature(C)"), 1) AS average_temperature,
                  ROUND(AVG("Weight(kg)"), 1) AS average_weight,
                  ROUND(AVG("BreathingRate(breaths/min)"), 1) AS average_breathing,
                  ROUND(AVG("CalorieBurn"), 1) AS average_calorieBurn,
                  ROUND(AVG("ActivityLevel(steps)"), 1) AS average_activityLevelSteps,
                  ROUND(AVG("FoodIntake(calories)"), 1) AS average_foodIntake,
                  ROUND(AVG("WaterIntake(ml)"), 1) AS average_waterIntake,
                  SUM("ActivityLevel(steps)") AS totalSteps,
                  SUM("CalorieBurn") AS totalOut,
                  SUM("FoodIntake(calories)") AS totalIn,
                  SUM("WaterIntake(ml)") AS totalwaterIntake
              FROM
                  Canine_Activity_Data
              WHERE
                  DogID = 'CANINE002' AND Date BETWEEN '01-01-2021' AND '31-12-2023'
              GROUP BY
                  DogID, Date
          ),
          DogBehaviour AS (
              SELECT
                  DogID,
                  Date,
                  ROUND(SUM(
                      CASE
                          WHEN BehaviourPattern = 'Walking' THEN 1
                          ELSE 0
                      END
                  )) AS totalWalkingHours,
                  ROUND(SUM(
                      CASE
                          WHEN BehaviourPattern = 'Sleeping' THEN 1
                          ELSE 0
                      END
                  )) AS totalHoursSlept
              FROM
                  Canine_Activity_Data
              WHERE
                  DogID = 'CANINE002' AND Date BETWEEN '01-01-2021' AND '31-12-2023'
              GROUP BY
                  DogID, Date
          )
          SELECT
              DA.DogID,
              DA.Date,
              DA.average_value_heart_rate,
              DA.average_temperature,
              DA.average_weight,
              DA.average_breathing,
              DA.average_calorieBurn,
              DA.average_activityLevelSteps,
              DA.average_foodIntake,
              DA.average_waterIntake,
              DA.totalSteps,
              DA.totalIn,
              DA.totalOut,
              DA.totalWaterIntake,
              DB.totalWalkingHours,
              DB.totalHoursSlept
          FROM
              DogActivity AS DA
          JOIN
              DogBehaviour AS DB ON DA.DogID = DB.DogID AND DA.Date = DB.Date
          ORDER BY
              CAST(SUBSTR(DA.Date, 7, 4) AS INTEGER),
              CAST(SUBSTR(DA.Date, 4, 2) AS INTEGER),
              CAST(SUBSTR(DA.Date, 1, 2) AS INTEGER);`
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
              const query = `WITH DogActivity AS (
                SELECT
                    DogID,
                    Date,
                    ROUND(AVG("HeartRate(bpm)"), 1) AS average_value_heart_rate,
                    ROUND(AVG("Temperature(C)"), 1) AS average_temperature,
                    ROUND(AVG("Weight(kg)"), 1) AS average_weight,
                    ROUND(AVG("BreathingRate(breaths/min)"), 1) AS average_breathing,
                    ROUND(AVG("CalorieBurn"), 1) AS average_calorieBurn,
                    ROUND(AVG("ActivityLevel(steps)"), 1) AS average_activityLevelSteps,
                    ROUND(AVG("FoodIntake(calories)"), 1) AS average_foodIntake,
                    ROUND(AVG("WaterIntake(ml)"), 1) AS average_waterIntake,
                    SUM("ActivityLevel(steps)") AS totalSteps,
                    SUM("CalorieBurn") AS totalOut,
                    SUM("FoodIntake(calories)") AS totalIn,
                    SUM("WaterIntake(ml)") AS totalwaterIntake
                FROM
                    Canine_Activity_Data
                WHERE
                    DogID = 'CANINE003' AND Date BETWEEN '01-01-2021' AND '31-12-2023'
                GROUP BY
                    DogID, Date
            ),
            DogBehaviour AS (
                SELECT
                    DogID,
                    Date,
                    ROUND(SUM(
                        CASE
                            WHEN BehaviourPattern = 'Walking' THEN 1
                            ELSE 0
                        END
                    )) AS totalWalkingHours,
                    ROUND(SUM(
                        CASE
                            WHEN BehaviourPattern = 'Sleeping' THEN 1
                            ELSE 0
                        END
                    )) AS totalHoursSlept
                FROM
                    Canine_Activity_Data
                WHERE
                    DogID = 'CANINE003' AND Date BETWEEN '01-01-2021' AND '31-12-2023'
                GROUP BY
                    DogID, Date
            )
            SELECT
                DA.DogID,
                DA.Date,
                DA.average_value_heart_rate,
                DA.average_temperature,
                DA.average_weight,
                DA.average_breathing,
                DA.average_calorieBurn,
                DA.average_activityLevelSteps,
                DA.average_foodIntake,
                DA.average_waterIntake,
                DA.totalSteps,
                DA.totalIn,
                DA.totalOut,
                DA.totalWaterIntake,
                DB.totalWalkingHours,
                DB.totalHoursSlept
            FROM
                DogActivity AS DA
            JOIN
                DogBehaviour AS DB ON DA.DogID = DB.DogID AND DA.Date = DB.Date
            ORDER BY
                CAST(SUBSTR(DA.Date, 7, 4) AS INTEGER),
                CAST(SUBSTR(DA.Date, 4, 2) AS INTEGER),
                CAST(SUBSTR(DA.Date, 1, 2) AS INTEGER);`
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

    ROUND((SELECT AVG(subquery.steps_sum) 
           FROM (SELECT SUM("ActivityLevel(steps)") AS steps_sum 
                 FROM Canine_Activity_Data 
                 WHERE DogID = main.DogID 
                 AND SUBSTR(Date, 1, 7) = SUBSTR(main.Date, 1, 7) 
                 AND "ActivityLevel(steps)" > 0 
                 GROUP BY SUBSTR(Date, 1, 10)) AS subquery), 1) AS average_activityLevelSteps,

    ROUND((SELECT AVG(subquery.calin_sum) 
           FROM (SELECT SUM("FoodIntake(calories)") AS calin_sum 
                 FROM Canine_Activity_Data 
                 WHERE DogID = main.DogID 
                 AND SUBSTR(Date, 1, 7) = SUBSTR(main.Date, 1, 7) 
                 AND "FoodIntake(calories)" > 0 
                 GROUP BY SUBSTR(Date, 1, 10)) AS subquery), 1) AS average_foodIntake,

    ROUND((SELECT AVG(subquery.calout_sum) 
           FROM (SELECT SUM("CalorieBurn") AS calout_sum 
                 FROM Canine_Activity_Data 
                 WHERE DogID = main.DogID 
                 AND SUBSTR(Date, 1, 7) = SUBSTR(main.Date, 1, 7) 
                 AND "CalorieBurn" > 0 
                 GROUP BY SUBSTR(Date, 1, 10)) AS subquery), 1) AS average_calorieBurn,

    ROUND((SELECT AVG(subquery.water_sum) 
           FROM (SELECT SUM("WaterIntake(ml)") AS water_sum 
                 FROM Canine_Activity_Data 
                 WHERE DogID = main.DogID 
                 AND SUBSTR(Date, 1, 7) = SUBSTR(main.Date, 1, 7) 
                 AND "WaterIntake(ml)" > 0 
                 GROUP BY SUBSTR(Date, 1, 10)) AS subquery), 1) AS average_waterIntake

FROM Canine_Activity_Data main
WHERE DogID = 'CANINE001' AND Date BETWEEN '01-01-2021' AND '31-12-2023'
GROUP BY DogID, Month_Year
ORDER BY SUBSTR(Date, 7, 4), SUBSTR(Date, 4, 2);

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
    ROUND((SELECT AVG(subquery.steps_sum) 
           FROM (SELECT SUM("ActivityLevel(steps)") AS steps_sum 
                 FROM Canine_Activity_Data 
                 WHERE DogID = main.DogID 
                 AND SUBSTR(Date, 1, 7) = SUBSTR(main.Date, 1, 7) 
                 AND "ActivityLevel(steps)" > 0 
                 GROUP BY SUBSTR(Date, 1, 10)) AS subquery), 1) AS average_activityLevelSteps,

    ROUND((SELECT AVG(subquery.calin_sum) 
           FROM (SELECT SUM("FoodIntake(calories)") AS calin_sum 
                 FROM Canine_Activity_Data 
                 WHERE DogID = main.DogID 
                 AND SUBSTR(Date, 1, 7) = SUBSTR(main.Date, 1, 7) 
                 AND "FoodIntake(calories)" > 0 
                 GROUP BY SUBSTR(Date, 1, 10)) AS subquery), 1) AS average_foodIntake,

    ROUND((SELECT AVG(subquery.calout_sum) 
           FROM (SELECT SUM("CalorieBurn") AS calout_sum 
                 FROM Canine_Activity_Data 
                 WHERE DogID = main.DogID 
                 AND SUBSTR(Date, 1, 7) = SUBSTR(main.Date, 1, 7) 
                 AND "CalorieBurn" > 0 
                 GROUP BY SUBSTR(Date, 1, 10)) AS subquery), 1) AS average_calorieBurn,

    ROUND((SELECT AVG(subquery.water_sum) 
           FROM (SELECT SUM("WaterIntake(ml)") AS water_sum 
                 FROM Canine_Activity_Data 
                 WHERE DogID = main.DogID 
                 AND SUBSTR(Date, 1, 7) = SUBSTR(main.Date, 1, 7) 
                 AND "WaterIntake(ml)" > 0 
                 GROUP BY SUBSTR(Date, 1, 10)) AS subquery), 1) AS average_waterIntake

FROM Canine_Activity_Data main
WHERE DogID = 'CANINE002' AND Date BETWEEN '01-01-2021' AND '31-12-2023'
GROUP BY DogID, Month_Year
ORDER BY SUBSTR(Date, 7, 4), SUBSTR(Date, 4, 2);

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
    ROUND((SELECT AVG(subquery.steps_sum) 
           FROM (SELECT SUM("ActivityLevel(steps)") AS steps_sum 
                 FROM Canine_Activity_Data 
                 WHERE DogID = main.DogID 
                 AND SUBSTR(Date, 1, 7) = SUBSTR(main.Date, 1, 7) 
                 AND "ActivityLevel(steps)" > 0 
                 GROUP BY SUBSTR(Date, 1, 10)) AS subquery), 1) AS average_activityLevelSteps,

    ROUND((SELECT AVG(subquery.calin_sum) 
           FROM (SELECT SUM("FoodIntake(calories)") AS calin_sum 
                 FROM Canine_Activity_Data 
                 WHERE DogID = main.DogID 
                 AND SUBSTR(Date, 1, 7) = SUBSTR(main.Date, 1, 7) 
                 AND "FoodIntake(calories)" > 0 
                 GROUP BY SUBSTR(Date, 1, 10)) AS subquery), 1) AS average_foodIntake,

    ROUND((SELECT AVG(subquery.calout_sum) 
           FROM (SELECT SUM("CalorieBurn") AS calout_sum 
                 FROM Canine_Activity_Data 
                 WHERE DogID = main.DogID 
                 AND SUBSTR(Date, 1, 7) = SUBSTR(main.Date, 1, 7) 
                 AND "CalorieBurn" > 0 
                 GROUP BY SUBSTR(Date, 1, 10)) AS subquery), 1) AS average_calorieBurn,

    ROUND((SELECT AVG(subquery.water_sum) 
           FROM (SELECT SUM("WaterIntake(ml)") AS water_sum 
                 FROM Canine_Activity_Data 
                 WHERE DogID = main.DogID 
                 AND SUBSTR(Date, 1, 7) = SUBSTR(main.Date, 1, 7) 
                 AND "WaterIntake(ml)" > 0 
                 GROUP BY SUBSTR(Date, 1, 10)) AS subquery), 1) AS average_waterIntake

FROM Canine_Activity_Data main
WHERE DogID = 'CANINE003' AND Date BETWEEN '01-01-2021' AND '31-12-2023'
GROUP BY DogID, Month_Year
ORDER BY SUBSTR(Date, 7, 4), SUBSTR(Date, 4, 2);

`
    const parameters = MonthlyAverageCanineThree;
    return await executeQuery(query, parameters);
  }
  catch (error) {
  console.error("Error executing query:", error);
  throw error;
}
}

async function seasonAverage_canineone(SeasonAverageCanineOne) {
  try {
    const query = `SELECT
    substr("Date", 7, 4) AS Year,
    CASE
        WHEN substr("Date", 4, 2) IN ('12', '01', '02') THEN 'Winter'
        WHEN substr("Date", 4, 2) IN ('03', '04', '05') THEN 'Spring'
        WHEN substr("Date", 4, 2) IN ('06', '07', '08') THEN 'Summer'
        WHEN substr("Date", 4, 2) IN ('09', '10', '11') THEN 'Fall'
    END AS Season,
    AVG("Weight(kg)") AS AvgWeight,
    AVG("ActivityLevel(steps)") AS AvgActivityLevel,
    AVG("HeartRate(bpm)") AS AvgHeartRate,
    AVG("CalorieBurn") AS AvgCalorieBurn,
    AVG("Temperature(C)") AS AvgTemperature,
    AVG("FoodIntake(calories)") AS AvgFoodIntake,
    AVG("WaterIntake(ml)") AS AvgWaterIntake,
    AVG("BreathingRate(breaths/min)") AS AvgBreathingRate
FROM
    Canine_Activity_Data
WHERE
    DogID = 'CANINE001'
GROUP BY
    Year, Season;`
    const parameters = SeasonAverageCanineOne;
    return await executeQuery(query, parameters);
  }
  catch (error) {
  console.error("Error executing query:", error);
  throw error;
}
}

async function seasonAverage_caninetwo(SeasonAverageCanineTwo) {
  try {
    const query = `SELECT
    substr("Date", 7, 4) AS Year,
    CASE
        WHEN substr("Date", 4, 2) IN ('12', '01', '02') THEN 'Winter'
        WHEN substr("Date", 4, 2) IN ('03', '04', '05') THEN 'Spring'
        WHEN substr("Date", 4, 2) IN ('06', '07', '08') THEN 'Summer'
        WHEN substr("Date", 4, 2) IN ('09', '10', '11') THEN 'Fall'
    END AS Season,
    AVG("Weight(kg)") AS AvgWeight,
    AVG("ActivityLevel(steps)") AS AvgActivityLevel,
    AVG("HeartRate(bpm)") AS AvgHeartRate,
    AVG("CalorieBurn") AS AvgCalorieBurn,
    AVG("Temperature(C)") AS AvgTemperature,
    AVG("FoodIntake(calories)") AS AvgFoodIntake,
    AVG("WaterIntake(ml)") AS AvgWaterIntake,
    AVG("BreathingRate(breaths/min)") AS AvgBreathingRate
FROM
    Canine_Activity_Data
WHERE
    DogID = 'CANINE002'
GROUP BY
    Year, Season;`
    const parameters = SeasonAverageCanineTwo;
    return await executeQuery(query, parameters);
  }
  catch (error) {
  console.error("Error executing query:", error);
  throw error;
}
}

async function seasonAverage_caninethree(SeasonAverageCanineThree) {
  try {
    const query = `SELECT
    substr("Date", 7, 4) AS Year,
    CASE
        WHEN substr("Date", 4, 2) IN ('12', '01', '02') THEN 'Winter'
        WHEN substr("Date", 4, 2) IN ('03', '04', '05') THEN 'Spring'
        WHEN substr("Date", 4, 2) IN ('06', '07', '08') THEN 'Summer'
        WHEN substr("Date", 4, 2) IN ('09', '10', '11') THEN 'Fall'
    END AS Season,
    AVG("Weight(kg)") AS AvgWeight,
    AVG("ActivityLevel(steps)") AS AvgActivityLevel,
    AVG("HeartRate(bpm)") AS AvgHeartRate,
    AVG("CalorieBurn") AS AvgCalorieBurn,
    AVG("Temperature(C)") AS AvgTemperature,
    AVG("FoodIntake(calories)") AS AvgFoodIntake,
    AVG("WaterIntake(ml)") AS AvgWaterIntake,
    AVG("BreathingRate(breaths/min)") AS AvgBreathingRate
FROM
    Canine_Activity_Data
WHERE
    DogID = 'CANINE003'
GROUP BY
    Year, Season;`
    const parameters = SeasonAverageCanineThree;
    return await executeQuery(query, parameters);
  }
  catch (error) {
  console.error("Error executing query:", error);
  throw error;
}
}


async function weeklyAverage_canineone(weeklyAverageCanineOne) {
  try {
    const query = `SELECT
    strftime('%Y-%W', date(substr("Date", 7, 4) || '-' || substr("Date", 4, 2) || '-' || substr("Date", 1, 2))) AS Year_Week,
    SUM("Weight(kg)") AS Total_Weight,
    AVG("ActivityLevel(steps)") AS Avg_Activity_Level,
    AVG("HeartRate(bpm)") AS Avg_Heart_Rate,
    SUM("CalorieBurn") AS Total_Calorie_Burn,
    AVG("Temperature(C)") AS Avg_Temperature,
    SUM("FoodIntake(calories)") AS Total_Food_Intake,
    SUM("WaterIntake(ml)") AS Total_Water_Intake,
    AVG("BreathingRate(breaths/min)") AS Avg_Breathing_Rate
FROM
    "Canine_Activity_Data"
WHERE
    DogID = 'CANINE001'
GROUP BY
    Year_Week;`
    const parameters = weeklyAverageCanineOne;
    return await executeQuery(query, parameters);
  }
  catch (error) {
  console.error("Error executing query:", error);
  throw error;
}
}

async function weeklyAverage_caninetwo(weeklyAverageCanineTwo) {
  try {
    const query = `SELECT
    strftime('%Y-%W', date(substr("Date", 7, 4) || '-' || substr("Date", 4, 2) || '-' || substr("Date", 1, 2))) AS Year_Week,
    SUM("Weight(kg)") AS Total_Weight,
    AVG("ActivityLevel(steps)") AS Avg_Activity_Level,
    AVG("HeartRate(bpm)") AS Avg_Heart_Rate,
    SUM("CalorieBurn") AS Total_Calorie_Burn,
    AVG("Temperature(C)") AS Avg_Temperature,
    SUM("FoodIntake(calories)") AS Total_Food_Intake,
    SUM("WaterIntake(ml)") AS Total_Water_Intake,
    AVG("BreathingRate(breaths/min)") AS Avg_Breathing_Rate
FROM
    "Canine_Activity_Data"
WHERE
    DogID = 'CANINE002'
GROUP BY
    Year_Week;`
    const parameters = weeklyAverageCanineTwo;
    return await executeQuery(query, parameters);
  }
  catch (error) {
  console.error("Error executing query:", error);
  throw error;
}
}

async function weeklyAverage_caninethree(weeklyAverageCanineThree) {
  try {
    const query = `SELECT
    strftime('%Y-%W', date(substr("Date", 7, 4) || '-' || substr("Date", 4, 2) || '-' || substr("Date", 1, 2))) AS Year_Week,
    SUM("Weight(kg)") AS Total_Weight,
    AVG("ActivityLevel(steps)") AS Avg_Activity_Level,
    AVG("HeartRate(bpm)") AS Avg_Heart_Rate,
    SUM("CalorieBurn") AS Total_Calorie_Burn,
    AVG("Temperature(C)") AS Avg_Temperature,
    SUM("FoodIntake(calories)") AS Total_Food_Intake,
    SUM("WaterIntake(ml)") AS Total_Water_Intake,
    AVG("BreathingRate(breaths/min)") AS Avg_Breathing_Rate
FROM
    "Canine_Activity_Data"
WHERE
    DogID = 'CANINE003'
GROUP BY
    Year_Week;`
    const parameters = weeklyAverageCanineThree;
    return await executeQuery(query, parameters);
  }
  catch (error) {
  console.error("Error executing query:", error);
  throw error;
}
}

async function weeklyTotalCalorieBurn_canineone(weeklyTotalCalorieBurn_canineone){
  try{
    const query = `SELECT "DogID", "Date", SUM("CalorieBurn") AS "TotalCaloriesBurned"
    FROM
      "Canine_Activity_Data"
    WHERE
        "DogID" = 'CANINE001'
    AND
        "Hour" BETWEEN 0 AND 23
    AND
        "Date" IN ('25-12-2023', '26-12-2023', '27-12-2023', '28-12-2023', '29-12-2023', '30-12-2023', '31-12-2023')
    GROUP BY
        "DogID", "Date";`
        const parameters = weeklyTotalCalorieBurn_canineone;
        return await executeQuery(query, parameters)
  }
  catch (error) {
    console.error("Error executing query:", error);
    throw error;
  }
}

async function weeklyTotalCalorieBurn_caninetwo(weeklyTotalCalorieBurn_caninetwo){
  try{
    const query = `SELECT "DogID", "Date", SUM("CalorieBurn") AS "TotalCaloriesBurned"
    FROM
      "Canine_Activity_Data"
    WHERE
        "DogID" = 'CANINE002'
    AND
        "Hour" BETWEEN 0 AND 23
    AND
        "Date" IN ('25-12-2023', '26-12-2023', '27-12-2023', '28-12-2023', '29-12-2023', '30-12-2023', '31-12-2023')
    GROUP BY
        "DogID", "Date";`
        const parameters = weeklyTotalCalorieBurn_caninetwo;
        return await executeQuery(query, parameters)
  }
  catch (error) {
    console.error("Error executing query:", error);
    throw error;
  }
}

async function weeklyTotalCalorieBurn_caninethree(weeklyTotalCalorieBurn_caninethree){
  try{
    const query = `SELECT "DogID", "Date", SUM("CalorieBurn") AS "TotalCaloriesBurned"
    FROM
      "Canine_Activity_Data"
    WHERE
        "DogID" = 'CANINE003'
    AND
        "Hour" BETWEEN 0 AND 23
    AND
        "Date" IN ('25-12-2023', '26-12-2023', '27-12-2023', '28-12-2023', '29-12-2023', '30-12-2023', '31-12-2023')
    GROUP BY
        "DogID", "Date";`
        const parameters = weeklyTotalCalorieBurn_caninethree;
        return await executeQuery(query, parameters)
  }
  catch (error) {
    console.error("Error executing query:", error);
    throw error;
  }
}


async function currentTempCanineOne(current_Temp_CanineOne){
  try{
    const query = `
    WITH LatestDate AS (
      SELECT MAX(Date) AS MaxDate
      FROM Canine_Activity_Data
      WHERE DogID = 'CANINE001'
  )
  SELECT Date, Hour, MAX("Temperature(C)") AS HighestTemperature, AVG("Temperature(C)") AS AverageTemperature
  FROM Canine_Activity_Data
  WHERE DogID = 'CANINE001' AND Date = (SELECT MaxDate FROM LatestDate)
  GROUP BY Date;  
  `
        const parameters = current_Temp_CanineOne;
        return await executeQuery(query, parameters)
  }
  catch (error) {
    console.error("Error executing query:", error);
    throw error;
  }
}



// Export the all_data function
module.exports = {
  getdata,
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
  monthAverage_caninethree,
  seasonAverage_canineone,
  seasonAverage_caninetwo,
  seasonAverage_caninethree,
  weeklyAverage_canineone,
  weeklyAverage_caninetwo,
  weeklyAverage_caninethree,
  weeklyTotalCalorieBurn_canineone,
  weeklyTotalCalorieBurn_caninetwo,
  weeklyTotalCalorieBurn_caninethree,
  currentTempCanineOne
};
