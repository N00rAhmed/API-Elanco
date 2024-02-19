const config = {
  database: "C:/Users/noora/OneDrive/Desktop/Elanco/API/Elanco.db", // Replace with the path to your SQLite database file
  options: {
      // SQLite does not have the same connection options as MSSQL
      // You can omit the options or customize based on SQLite requirements
  }
};

module.exports = config;
