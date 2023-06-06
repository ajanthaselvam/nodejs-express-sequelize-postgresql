module.exports = {
  HOST: "ang01.cluster-cdgkfoacvf6u.us-east-1.rds.amazonaws.com",
  USER: "postgres",
  PASSWORD: "admin12345",
  DB: "ang01",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};