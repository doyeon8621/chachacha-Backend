const mongoose = require("mongoose");
const { Schema } = mongoose;
const CarsSchema = new Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    // 보류
    type: String,
  },
  price: {
    // 보류
    type: String,
  },
  category: {
    // 보류
    type: String,
  },
});

CarsSchema.virtual("card_id").get(function () {
  return this._id.toHexString();
});
CarsSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("Posts", CarsSchema);
