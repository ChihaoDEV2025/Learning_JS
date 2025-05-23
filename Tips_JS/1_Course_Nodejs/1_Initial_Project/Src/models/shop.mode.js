"use strict";

// Import mongoose (make sure to include this)
const mongoose = require("mongoose");

const { Schema } = mongoose; // We don't need `Types` if we're not using it.

const DOCUMENT_NAME = "Shop";
const COLLECTION_NAME = "Shops";

// Declare the Schema of the Mongo model
var shopSchema = new Schema(
  {
    name: {
      type: String,
      trim: true, // Allow spaces at the start or end
      maxLength: 150,
    },
    email: {
      type: String,
      unique: true, // Email should be unique
      trim: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    status: {
      type: String,
      enum: ["active", "inactive"], // Enum restricts to these two values
      default: "inactive",
    },
    verify: {
      type: Boolean, // Boolean type, no need to use `Schema.Types.Boolean`
      default: false,
    },
    roles: {
      type: [String], // An array of strings
      default: [],
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt`
    collection: COLLECTION_NAME,
  }
);

// Export the model
module.exports = mongoose.model(DOCUMENT_NAME, shopSchema);


!dm