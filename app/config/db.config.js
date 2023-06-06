module.exports = {
  HOST: "ang01-instance-1.cdgkfoacvf6u.us-east-1.rds.amazonaws.com",
  USER: "postgres",
  PASSWORD: "admin0408",
  DB: "ang01",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};