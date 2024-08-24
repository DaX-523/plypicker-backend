const mongoose = require("mongoose");

const ReviewsSchema = new mongoose.Schema(
  {
    title: String,
    images: [String],
    description: String,
    price: Number,
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Reviews = mongoose.model("Reviews", ReviewsSchema);
module.exports = Reviews;
