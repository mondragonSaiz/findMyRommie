const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trime: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
    trime: true,
    unique: true,
  },
  lastName: {
    type: String,
    required: true,
    trime: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  //   userIcon: {
  //     type: String,
  //   },
  //   offers: [
  //     {
  //       type: Schema.Types.ObjectId,
  //       ref: 'Figure',
  //     },
  //   ],
  //   savedOffers: [
  //     {
  //       type: Schema.Types.ObjectId,
  //       ref: 'Figure',
  //     },
  //   ],
});

// Set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
