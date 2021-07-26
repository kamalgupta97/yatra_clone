const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://yatraclone:12345@cluster0.pzwds.mongodb.net/test2?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );
};

module.exports = connect;
