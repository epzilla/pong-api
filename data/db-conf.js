module.exports = {
  db: "pong",
  user: "admin",
  pw: "ad34epam",
  dbOptions: {
    host: "epling-db.cflibpx6g6jr.us-east-2.rds.amazonaws.com",
    port: 3306,
    ssl: "Amazon RDS",
    dialect: "mysql",
    pool: { maxConnections: 5, maxIdleTime: 30 },
    language: "en",
  },
};
