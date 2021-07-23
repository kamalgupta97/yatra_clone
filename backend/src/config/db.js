const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/yatra_clone", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};
module.exports = connect;
