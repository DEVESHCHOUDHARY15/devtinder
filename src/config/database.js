const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect(
    `mongodb+srv://Dev_tinder_Admin:${process.env.DB_password}.qdviw.mongodb.net/tinderDB`
  );
};

module.exports = connect;
