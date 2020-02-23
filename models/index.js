const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// this schema is not correct

// UT-AUS-FSF-PT-09-2019-U-C/17-NoSQL/01-Activities/15-Stu-Populate

// see UT-AUS-FSF-PT-09-2019-U-C/17-NoSQL/01-Activities/11-Stu-Mongoose-Schema/Solved/server.js
// see UT-AUS-FSF-PT-09-2019-U-C/17-NoSQL/01-Activities/11-Stu-Mongoose-Schema/Solved/userModel.js
const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  userCreated: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
