const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "property name is required"],
    },
    description: {
      type: String,
      required: [true, "property description is required"],
    },
    location: {
      type: String,
      required: true,
    },
    bedroom: {
      type: Number,
      required: true,
    },
    livingRoom: {
      type: Number,
      required: true,
      min: 0,
    },
    toilet: {
      type: Number,
      required: true,
      min: 0,
    },
    kitchen: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    paymentPeriod: {
      type: String,
      enum: ["weekly", "monthly", "yearly"],
      required: true,
    },
    images: [String],
    availability: {
      type: String,
      enum: ["rented", "available"],
      default: "available",
    },
    landlord: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);
const PROPERTY = mongoose.model("property", propertySchema);
module.exports = PROPERTY;
